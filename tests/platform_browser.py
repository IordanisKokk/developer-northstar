"""Real Chromium E2E: static HTTP origin, isolated synthetic state, desktop/mobile."""
import contextlib,http.server,json,pathlib,threading
from playwright.sync_api import sync_playwright
P=pathlib.Path(__file__).resolve().parents[1]
class Handler(http.server.SimpleHTTPRequestHandler):
 def __init__(self,*a,**kw):super().__init__(*a,directory=str(P),**kw)
 def log_message(self,*a):pass
server=http.server.ThreadingHTTPServer(('127.0.0.1',0),Handler)
threading.Thread(target=server.serve_forever,daemon=True).start()
origin=f'http://127.0.0.1:{server.server_port}/'
errors=[]
try:
 with sync_playwright() as pw:
  browser=pw.chromium.launch()
  for width in [1440,390]:
   context=browser.new_context(viewport={'width':width,'height':950},accept_downloads=True,color_scheme='light')
   page=context.new_page();page.on('pageerror',lambda e:errors.append(str(e)))
   page.goto(origin);page.wait_for_selector('.track-card');assert page.locator('.track-card').count()==3
   for track,count,projects in [('game',27,27),('backend',18,18),('ai',19,19)]:
    page.select_option('#trackSelect',track);page.wait_for_selector('.graph-node')
    assert page.locator('.graph-node').count()==count
    dims=page.evaluate('''() => {const s=document.querySelector('#mapStage');return [s.clientWidth,s.scrollWidth,document.documentElement.clientWidth,document.documentElement.scrollWidth]}''')
    assert dims[1]<=dims[0]+2,(width,track,dims)
    assert dims[3]<=dims[2]+2,(width,track,'page overflow',dims)
    scale=page.locator('#zoomReadout').inner_text();page.click('#zoomIn');page.click('#zoomFit');assert page.locator('#zoomReadout').inner_text()==scale
    page.locator('.graph-node').first.click();assert page.locator('#inspector').is_visible()
    page.click('[data-close-inspector]');assert page.locator('#inspector').is_hidden()
    page.locator('.graph-node').first.click();page.get_by_role('link',name='Open full course',exact=True).click()
    page.locator('.lesson-row').first.click();page.wait_for_selector('#lessonNotes')
    first_url=page.url
    assert page.locator('.assignment').count()>=2
    page.fill('#lessonNotes',f'Synthetic {track} QA note <script>not executable</script>')
    page.check('#lessonComplete');page.select_option('#profSelect','3');page.locator('[data-assign]').first.check()
    page.reload();page.wait_for_selector('#lessonNotes')
    assert page.locator('#lessonNotes').input_value().startswith(f'Synthetic {track}')
    assert page.locator('#lessonComplete').is_checked()
    assert page.locator('#profSelect').input_value()=='3'
    assert page.locator('[data-assign]').first.is_checked()
    for theme in ['dark','light']:
     page.click('#themeBtn');assert page.locator('html').get_attribute('data-theme')==theme
     page.reload();page.wait_for_selector('#lessonNotes');assert page.locator('html').get_attribute('data-theme')==theme
    page.locator('.answer-guidance summary').click();assert page.locator('.answer-guidance').get_attribute('open') is not None
    page.get_by_role('link',name='Next lesson →',exact=True).click();assert page.url!=first_url
    page.click('[data-nav="courses"]');page.fill('#searchCourses','movement' if track=='game' else 'fencing' if track=='backend' else 'metadata')
    assert page.locator('#courseResults .mini-card').count()>0
    page.click('[data-nav="assignments"]');page.select_option('#filterA','projects');assert page.locator('.mini-card').count()==projects
    page.fill('#searchA','xyzzzznomatch');assert page.locator('.mini-card').count()==0
    page.click('[data-nav="choices"]');page.locator('[data-choice]').first.click();page.reload();assert page.locator('.chosen').count()==1
    # Portable backup, mutation, import, recovery, invalid and cross-track rejection.
    with page.expect_download() as download:page.click('#exportBtn')
    backup=json.loads(pathlib.Path(download.value.path()).read_text())
    assert backup['type']==f'northstar-{track}-progress'
    assert download.value.suggested_filename==f'northstar-{track}-progress.json'
    page.goto(first_url);page.fill('#lessonNotes','Synthetic changed state')
    page.on('dialog',lambda d:d.accept())
    page.locator('#importInput').set_input_files({'name':'synthetic-backup.json','mimeType':'application/json','buffer':json.dumps(backup).encode()})
    page.wait_for_function("document.querySelector('#toast')?.textContent.startsWith('Progress imported')")
    assert page.locator('#lessonNotes').input_value().startswith(f'Synthetic {track}')
    page.click('#recoverBtn');assert page.locator('#lessonNotes').input_value()=='Synthetic changed state'
    bad={**backup,'type':'northstar-other-progress'}
    page.locator('#importInput').set_input_files({'name':'wrong-track.json','mimeType':'application/json','buffer':json.dumps(bad).encode()})
    page.wait_for_function("document.querySelector('#toast')?.textContent.startsWith('Cannot import')")
    assert page.locator('#lessonNotes').input_value()=='Synthetic changed state'
    if track=='game':
     # Exact legacy format: no track_id and older optional fields missing.
     legacy={'type':'northstar-game-progress','state':{'lessons':backup['state']['lessons'],'assignments':backup['state']['assignments']}}
     page.locator('#importInput').set_input_files({'name':'legacy.json','mimeType':'application/json','buffer':json.dumps(legacy).encode()})
     page.wait_for_function("document.querySelector('#toast')?.textContent.startsWith('Progress imported')")
     assert page.locator('#lessonComplete').is_checked()
    page.goto(origin+'?track='+track+'#/map')
    page.screenshot(path=str(P/'tests'/f'qa-{track}-{width}.png'),full_page=True)
    print('PASS',track,width,'graph, navigation, search, assessments, state, themes, backups, recovery')
   # Track state remains isolated after visiting every track.
   for track in ['backend','ai']:
    page.select_option('#trackSelect',track);page.wait_for_selector('.graph-node')
    page.get_by_role('link',name='Open first lesson',exact=True).click()
    assert page.locator('#lessonNotes').input_value()=='Synthetic changed state'
   context.close()
  assert not errors,errors
  browser.close()
finally:server.shutdown()
print('PASS all browser flows without page errors')
