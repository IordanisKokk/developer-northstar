import json,re,pathlib
p=pathlib.Path(__file__).parent
names=['manifest','courses','lessons','assignments','resources','choices']
data={x:json.loads((p/'data'/f'{x}.json').read_text()) for x in names}
js='window.NS_DATA='+json.dumps(data,ensure_ascii=False,separators=(',',':')).replace('</','<\\/')+';'
(p/'assets'/'data.js').write_text(js,encoding='utf8')
s=(p/'index.html').read_text(); css=(p/'assets'/'styles.css').read_text();app=(p/'assets'/'app.js').read_text()
s=s.replace('<link rel="stylesheet" href="assets/styles.css">','<style>'+css+'</style>')
s=s.replace('<script src="assets/data.js"></script><script src="assets/app.js"></script>', '<script>'+js+'</script><script>'+app+'</script>')
(p/'northstar-game-standalone.html').write_text(s,encoding='utf8')
print('standalone bytes', (p/'northstar-game-standalone.html').stat().st_size)
