import pathlib
from playwright.sync_api import sync_playwright
folder=pathlib.Path(__file__).resolve().parents[1]
html=(folder/'northstar-game-standalone.html').read_text()
with sync_playwright() as p:
    browser=p.chromium.launch(executable_path='/usr/bin/chromium',headless=True,args=['--no-sandbox'])
    for width in [1920,1440,1280,1024,800,390]:
        page=browser.new_page(viewport={'width':width,'height':900})
        errors=[]
        page.on('pageerror',lambda e: errors.append(str(e)))
        page.set_content(html,wait_until='load')
        assert page.locator('.graph-node').count()==27
        dims=page.evaluate('''() => {const st=document.getElementById('mapStage');const sz=document.getElementById('mapSizer');const optional=[...document.querySelectorAll('.graph-node.optional')].at(-1);const a=st.getBoundingClientRect(), b=optional.getBoundingClientRect();return {stageWidth:st.clientWidth,stageScrollWidth:st.scrollWidth,canvasRight:sz.getBoundingClientRect().right,stageRight:a.right,optionalRight:b.right,scale:document.getElementById('zoomReadout').textContent}}''')
        assert dims['stageScrollWidth'] <= dims['stageWidth']+2, (width,dims)
        assert dims['optionalRight'] <= dims['stageRight']-1, (width,dims)
        page.locator('.graph-node.optional').first.click()
        assert page.locator('#inspector').is_visible()
        page.locator('[data-close-inspector]').click()
        assert page.locator('#inspector').is_hidden()
        page.locator('#zoomIn').click()
        page.locator('#zoomFit').click()
        assert page.locator('#zoomReadout').text_content() == dims['scale']
        assert page.evaluate('document.getElementById("mapStage").scrollWidth <= document.getElementById("mapStage").clientWidth+2')
        assert not errors, (width,errors)
        print('PASS',width,'px:',dims['scale'], 'no horizontal clipping')
        page.close()
    browser.close()
