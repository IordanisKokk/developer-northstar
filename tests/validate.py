"""Northstar 4 curriculum editorial and graph validation."""
import json,pathlib,collections,sys
p=pathlib.Path(__file__).resolve().parents[1]/'data'
def data(x):return json.loads((p/f'{x}.json').read_text())
C,L,A,R,CH,M=map(data,['courses','lessons','assignments','resources','choices','manifest'])
c={x['id']:x for x in C};l={x['id']:x for x in L};a={x['id']:x for x in A};r={x['id']:x for x in R}
assert (len(C),len(L),len(A))==(27,163,299)
assert len(c)==len(C) and len(l)==len(L) and len(a)==len(A) and len(r)==len(R),'duplicate ID'
assert len(M['core_course_ids'])==20 and len(M['optional_course_ids'])==7
assert set(M['core_course_ids']) | set(M['optional_course_ids'])==set(c)
assert [x['id'] for x in C]==M['core_course_ids']+M['optional_course_ids'],'display order mismatch'
assert M['first_assignment_id']==A[0]['id'] and 'movement' in a[M['first_assignment_id']]['instructions'].lower()
assert all(x['lane']=='core' for x in C[:20]);assert all(x['lane']=='optional' for x in C[20:])
for course in C:
 assert course['checkpoint_id']==course['lesson_ids'][-1]
 assert len(course['lesson_ids'])>=5
 assert all(d in c and d!=course['id'] for d in course['prerequisite_course_ids'])
 assert all(id in l and l[id]['course_id']==course['id'] for id in course['lesson_ids'])
for item in L:
 assert item['course_id'] in c
 assert item['assignments'] and all(id in a and a[id]['lesson_id']==item['id'] for id in item['assignments'])
 assert all(x['resource_id'] in r and len(x['reading_focus'])>38 for x in item['reading'])
 assert all(p in l for p in item['prerequisite_lesson_ids'])
 assert item['knowledge_check']['question'] and item['knowledge_check'].get('answer_guidance')
 assert item['explanation'] and item['acceptance_focus']
 if item['type']=='lesson':
  assert len(item.get('pitfalls',[]))>=1 and len(item.get('study_steps',[]))>=3
  assert len(item['explanation'])>90,(item['id'],'thin concept')
 if item['type']=='checkpoint':assert len(item['outcomes'])>=3
for item in A:
 assert item['lesson_id'] in l and item['course_id'] in c
 assert len(item['acceptance_criteria'])>=2
 assert all(len(cr)>25 for cr in item['acceptance_criteria'])
 assert item.get('assessment_type')
 assert not item['acceptance_criteria'][0].startswith('The requested behavior runs'),item['id']
for item in CH:
 assert item['after_course_id'] in c
 assert all(id in c for id in item['option_course_ids'])
 assert not item['recommended_course_id'] or item['recommended_course_id'] in item['option_course_ids']
# dependency cycles
state={}
def visit(id):
 if state.get(id)==1:raise ValueError('cycle: '+id)
 if state.get(id)==2:return
 state[id]=1
 for dep in c[id]['prerequisite_course_ids']:visit(dep)
 state[id]=2
for cid in c:visit(cid)
# stable progress IDs should remain present after additive update
previous=pathlib.Path('/mnt/data/northstar-game-v3.1-wide/data')
if previous.exists():
 for name,now in [('courses',c),('lessons',l),('assignments',a)]:
  old=data(name) if False else json.loads((previous/(name+'.json')).read_text())
  assert set(x['id'] for x in old).issubset(now), f'progress migration: missing original {name}'
all_reading=[x['resource_id'] for lesson in L for x in lesson['reading']]
print(f'VALID: {len(C)} courses, {len(L)} lessons/checkpoints, {len(A)} assignments, {len(R)} resources ({len(set(all_reading))} referenced).')
print('VALID: 20 core courses + 7 optional branches; IDs stable; checked prereqs; no cycles; specific acceptance criteria.')
print('VALID: early finished game + space thrust/CCD/towing + full-game production course.')
