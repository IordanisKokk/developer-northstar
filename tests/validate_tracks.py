"""Cross-track graph, ownership, educational contract and generated-data checks."""
import json,pathlib,subprocess,hashlib
P=pathlib.Path(__file__).resolve().parents[1]
seen=set()
for track in ['game','backend','ai']:
 d=P/'data' if track=='game' else P/'data'/track
 data={n:json.loads((d/(n+'.json')).read_text()) for n in ['manifest','courses','lessons','assignments','resources','choices']}
 c,l,a,r=({x['id']:x for x in data[n]} for n in ['courses','lessons','assignments','resources'])
 for name,mapping in [('courses',c),('lessons',l),('assignments',a),('resources',r)]:
  assert len(mapping)==len(data[name]),(track,name,'duplicates')
  assert not seen.intersection(mapping),(track,name,'cross-track collision')
  seen.update(mapping)
  if track!='game':assert all(k.startswith(track+'-') for k in mapping)
 m=data['manifest'];ordered=m['core_course_ids']+m['optional_course_ids'];assert ordered==list(c)
 assert set(ordered)==set(c)
 def dag(items,key):
  visited=set();active=set()
  def visit(k):
   assert k not in active,('cycle',track,k)
   if k in visited:return
   active.add(k)
   for dep in items[k][key]:
    assert dep in items,(track,k,'missing prerequisite',dep)
    visit(dep)
   active.remove(k);visited.add(k)
  for k in items:visit(k)
 dag(c,'prerequisite_course_ids');dag(l,'prerequisite_lesson_ids')
 ownership=[];assignownership=[]
 for i,cid in enumerate(ordered):
  x=c[cid];assert x['checkpoint_id']==x['lesson_ids'][-1]
  assert x['lane']==('core' if cid in m['core_course_ids'] else 'optional')
  assert all(ordered.index(dep)<i for dep in x['prerequisite_course_ids'])
  if x['lane']=='core':assert all(dep in m['core_course_ids'] for dep in x['prerequisite_course_ids'])
  for lid in x['lesson_ids']:assert lid in l and l[lid]['course_id']==cid
  ownership+=x['lesson_ids']
  if track!='game':assert x['estimated_hours']==sum(l[id]['estimated_hours'] for id in x['lesson_ids'])
 assert sorted(ownership)==sorted(l),'orphan/duplicate lesson ownership'
 for lid,x in l.items():
  assert x['outcomes'] and x['reading'] and x['assignments']
  assert x['knowledge_check']['answer_guidance'] and x['acceptance_focus']
  for rd in x['reading']:
   assert rd['resource_id'] in r
   if track!='game':assert rd['priority'] in ['required','optional']
   assert len(rd['reading_focus'])>40
  for aid in x['assignments']:assert aid in a and a[aid]['lesson_id']==lid and a[aid]['course_id']==x['course_id']
  assignownership+=x['assignments']
  if track!='game' and x['type']=='lesson':
   assert len(x['concepts_in_context'])>400,(lid,'thin explanation')
   assert len(x['study_steps'])>=3 and len(x['outcomes'])>=3
 assert sorted(assignownership)==sorted(a),'orphan/duplicate assignment ownership'
 for aid,x in a.items():
  assert len(x['acceptance_criteria'])>=2
  if track!='game':assert len(x['instructions'])>60,(aid,'thin assignment')
  if track!='game':assert all(len(y)>35 for y in x['acceptance_criteria'])
  assert 0<x['hours']<=100 and x['assessment_type']
  if track!='game':assert not any(s in x['instructions'].lower() for s in ['todo','placeholder','coming soon'])
 for ch in data['choices']:
  assert ch['after_course_id'] in c
  assert all(id in m['optional_course_ids'] for id in ch['option_course_ids'])
 print('VALID',track,len(c),'courses',len(l),'lessons/projects',len(a),'assignments')
# Byte-for-byte preservation of all canonical Game Development data.
for f in (P/'data').glob('*.json'):
 original=subprocess.check_output(['git','show','53307c2:'+f.relative_to(P).as_posix()],cwd=P)
 assert f.read_bytes()==original,('game data changed',f.name)
# Both generated bundles must contain each source curriculum and no stale data.
bundle=(P/'assets/data.js').read_text()
tracks=json.loads(bundle.split('window.NS_TRACKS=',1)[1].rstrip(';'))
for track in tracks:
 d=P/'data' if track=='game' else P/'data'/track
 for name,value in tracks[track].items():assert value==json.loads((d/(name+'.json')).read_text())
standalone=(P/'northstar-game-standalone.html').read_text()
assert bundle in standalone
print('VALID game JSON unchanged; generated bundles match every canonical source')
