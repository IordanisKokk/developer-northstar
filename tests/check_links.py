"""Check all newly assigned unique resource URLs. Failures are evidence, not automatic proof of a dead link."""
import concurrent.futures,json,pathlib,urllib.request,urllib.error
P=pathlib.Path(__file__).resolve().parents[1]
urls=sorted({r['url'] for t in ['backend','ai'] for r in json.loads((P/'data'/t/'resources.json').read_text())})
def check(url):
 try:
  req=urllib.request.Request(url,headers={'User-Agent':'Northstar-Curriculum-Link-Check/1.0'})
  with urllib.request.urlopen(req,timeout=20) as res:return dict(url=url,status=res.status,final_url=res.url)
 except Exception as e:return dict(url=url,error=str(e))
with concurrent.futures.ThreadPoolExecutor(max_workers=8) as pool:results=list(pool.map(check,urls))
(P/'tests/link-report.json').write_text(json.dumps(results,indent=2)+'\n')
for x in results:print(x.get('status','UNVERIFIED'),x['url'],x.get('error',''))
print(sum('status'in x for x in results),'/',len(results),'HTTP verified')
