"""Regenerate the readable syllabus from canonical JSON; never overwrites README."""
import pathlib,json
root=pathlib.Path(__file__).resolve().parent;p=root/'data'
read=lambda n:json.loads((p/(n+'.json')).read_text(encoding='utf8'))
C,L,A,R,M=map(read,['courses','lessons','assignments','resources','manifest'])
l={x['id']:x for x in L};a={x['id']:x for x in A};r={x['id']:x for x in R}
lines=['# Northstar 4.0 — Complete Game Development Curriculum','',
'A structured learning path for an experienced software engineer learning independent Godot game development. This curriculum is authored as a complete **actionable syllabus**: short original teaching explanations, deliberate reading, multiple practical exercises, and measurable project checks. It is not a replacement for full-length reference books or actual playtesting.','',
'## Study methodology','',
'- The core path is sequential by recommendation, not locked. Start with **Movement Playground**, not a spaceship.','- Read the assigned section; explain the principle; build a guided experiment; then do the independent variation in your own way.','- Each course ends with an integrated practical project. After collision fundamentals, release a deliberately tiny first game.','- Write brief notes about broken hypotheses, fixed bugs and architecture decisions, not just what you read.','- Spend around 5 hours per week on this track when concurrently studying Backend and AI Engineering. Complex projects can exceed estimates.','- Optional branches are choices, not prerequisites for completing a commercial 2D game.','- The capstone evolves through concept, playable vertical slice, playtest, alpha, beta, release candidate, and distribution.','',
'## Core sequence','']
for c in C:
 if c['lane']=='core':lines.append(f"{c['position']:02d}. **{c['title']}** — {c['summary']}")
lines+=['','## Optional specializations','']
for c in C:
 if c['lane']=='optional':lines.append(f"- **{c['title']}** — {c['summary']}")
lines+=['','## Practical graduation assessments','',
'1. **Unfamiliar mechanic:** implement a new Godot gameplay mechanic from a blank scene with independently chosen architecture; use reference documentation but not a ready-made solution.','2. **System integration:** connect controls, collision, animation, inventory, state and saving with no duplicated subscriptions or data loss.','3. **Debugging:** reproduce and isolate an unfamiliar failure; explain why the fix works and preserve a regression test.','4. **Vertical slice:** have another person complete a representative sonar/salvage/extraction run and observe the risk/reward decisions.','5. **Finished game:** produce a beginning-to-end playable game, validate save compatibility and have an independent tester install and finish a release candidate.','',
'## All lessons and project specifications','']
for c in C:
 lines+=['',f"## {c['title']} {'[Optional]' if c['lane']=='optional' else '[Core]'}",'',c['summary'],'',
 f"**Prerequisites:** {', '.join(c['prerequisite_course_ids']) if c['prerequisite_course_ids'] else 'None'}",f"**Suggested structured study:** {c['estimated_hours']} hours (not a complete game production budget)",'']
 for lid in c['lesson_ids']:
  item=l[lid]
  lines.extend([f"### {item['ordinal']}. {item['title']}",'',item['explanation'],''])
  if item.get('pitfalls'):lines.extend(['**Common failures:**','']+[f"- {v}" for v in item['pitfalls']]+[''])
  lines.extend(['**Suggested reading:**',''])
  for rd in item['reading']:
   src=r[rd['resource_id']]
   lines.append(f"- {rd['priority'].title()}: [{src['title']}]({src['url']}) — {rd['reading_focus']}")
  lines.extend(['','**Practice:**',''])
  for aid in item['assignments']:
   ex=a[aid]
   lines+=['',f"**{ex['title']} ({ex['kind']}):** {ex['instructions']}",'','Success checks:']
   lines.extend([f"- {v}" for v in ex['acceptance_criteria']])
  lines+=['',f"**Knowledge check:** {item['knowledge_check']['question']}",'',
          f"**Self-review:** {item['knowledge_check'].get('answer_guidance','Explain with an example and a failure case.')}",'','---','']
(root/'CURRICULUM.md').write_text('\n'.join(lines)+'\n',encoding='utf8')
print('Wrote CURRICULUM.md',len(lines),'lines')
