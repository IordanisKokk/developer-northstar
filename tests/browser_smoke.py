import pathlib,json
from playwright.sync_api import sync_playwright
folder=pathlib.Path(__file__).resolve().parents[1]
html=(folder/'northstar-game-standalone.html').read_text()
errors=[]
with sync_playwright() as p:
 browser=p.chromium.launch(executable_path='/usr/bin/chromium',headless=True,args=['--no-sandbox'])
 page=browser.new_page(viewport={'width':1440,'height':950},accept_downloads=True)
 page.on('pageerror', lambda e: errors.append(str(e)))
 page.evaluate('''() => {const s={};Object.defineProperty(window,"localStorage",{configurable:true,value:{getItem(k){return s[k] || null},setItem(k,v){s[k]=v}}})}''')
 page.set_content(html,wait_until='load')
 assert page.get_by_role('heading',name='Follow the path. Choose your branches.').count()==1
 assert page.locator('.graph-node').count()==27
 page.screenshot(path=str(folder/'tests'/'roadmap-desktop.png'),full_page=True)
 page.locator('[data-course-select="g01-editor"]').click()
 page.get_by_role('link',name='Open full course').click()
 page.locator('.lesson-row').first.wait_for()
 assert page.locator('.lesson-row').count()==7
 page.locator('[data-goto^="/lesson/g01-editor-start"]').click()
 page.get_by_role('heading',name='Start a Movement Playground').wait_for()
 assert page.locator('.assignment').count()==2
 assert page.get_by_text('Build a small movement playground with a start marker',exact=False).count()>0
 page.locator('#lessonNotes').fill('Movement playground: work out scene responsibilities.')
 page.locator('#lessonComplete').check()
 page.set_content(html,wait_until='load')
 assert page.locator('#lessonNotes').input_value().startswith('Movement playground:')
 assert page.locator('#lessonComplete').is_checked()
 page.locator('[data-assign]').first.check()
 page.get_by_role('link',name='Next lesson →').click()
 page.get_by_role('heading',name='Scenes, nodes and reusable instances').wait_for()
 page.screenshot(path=str(folder/'tests'/'lesson-desktop.png'),full_page=True)
 page.get_by_role('link',name='Assignments').click()
 page.locator('#searchA').fill('laser corridor')
 assert page.locator('.mini-card').count()>=1
 page.locator('#searchA').fill('')
 page.locator('#filterA').select_option('projects')
 assert page.locator('.mini-card').count()==27
 page.get_by_role('link',name='Specializations').click()
 page.locator('.choice').first.wait_for()
 assert page.get_by_text('Choose a systems interest',exact=False).count()>0
 page.locator('[data-choice]').first.click()
 assert page.locator('.choice-options button.chosen').count()==1
 page.get_by_role('button',name='Switch theme').click()
 assert page.locator('html').get_attribute('data-theme')=='dark'
 with page.expect_download() as d:
  page.get_by_role('button',name='Export progress ↓').click()
 assert d.value.suggested_filename=='northstar-game-progress.json'
 page.set_viewport_size({'width':390,'height':844})
 page.evaluate('location.hash="#/map"')
 assert page.get_by_role('link',name='Courses').is_visible()
 page.screenshot(path=str(folder/'tests'/'roadmap-mobile.png'),full_page=True)
 assert not errors,errors
 browser.close()
print('BROWSER PASS: roadmap, course, lessons, notes, checkbox, search, projects, specialization, themes, download, mobile')
