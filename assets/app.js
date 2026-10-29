(() => {
'use strict';
const db=window.NS_DATA;
if(!db){document.getElementById('app').textContent='Curriculum data could not load.';return;}
const courses=db.courses, lessons=db.lessons, assignments=db.assignments, resources=db.resources, choices=db.choices;
const cm=new Map(courses.map(c=>[c.id,c])), lm=new Map(lessons.map(l=>[l.id,l])), am=new Map(assignments.map(a=>[a.id,a])), rm=new Map(resources.map(r=>[r.id,r]));
const core=courses.filter(c=>c.lane==='core'), opts=courses.filter(c=>c.lane==='optional');
const KEY='northstar-game-v3-progress';
const fresh=()=>({schema:3,lessons:{},assignments:{},proficiency:{},notes:{},branches:{},theme:null});
let state=fresh();
try {const s=localStorage.getItem(KEY); if(s){state={...state,...JSON.parse(s)}}}catch(e){console.warn('Progress storage unavailable',e)}
function persist(){try{localStorage.setItem(KEY,JSON.stringify(state))}catch(e){notify('Browser storage unavailable. Export your progress for safety.')}}
if(state.theme==='dark'||(!state.theme&&window.matchMedia&&matchMedia('(prefers-color-scheme: dark)').matches)) document.documentElement.setAttribute('data-theme','dark');
const esc=s=>String(s==null?'':s).replace(/[&<>"']/g,ch=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[ch]));
const $=s=>document.querySelector(s);
const completedCore=()=>core.flatMap(c=>c.lesson_ids).filter(id=>state.lessons[id]);
const coreLessonCount=core.reduce((n,c)=>n+c.lesson_ids.length,0);
const courseCompleted=c=>c.lesson_ids.filter(id=>state.lessons[id]).length;
const num=(n)=>String(n).padStart(2,'0');
function notify(txt){let t=$('#toast');if(!t){t=document.createElement('div');t.id='toast';t.style.cssText='position:fixed;bottom:20px;right:20px;z-index:50;background:var(--fg);color:var(--surface);padding:10px 14px;border-radius:7px;box-shadow:var(--shadow);font-size:12px';document.body.appendChild(t)}t.textContent=txt;clearTimeout(notify.timer);notify.timer=setTimeout(()=>t.remove(),3200)}
const btn=(title,href,primary=false)=>`<a class="btn ${primary?'primary':''}" href="${esc(href)}">${esc(title)}</a>`;
function header(ey,title,description){return `<div class="page-top"><div class="eyebrow">${esc(ey)}</div><h1>${esc(title)}</h1>${description?`<p>${esc(description)}</p>`:''}</div>`}
function navActive(section){document.querySelectorAll('[data-nav]').forEach(a=>a.classList.toggle('active',a.dataset.nav===section))}
function updateSide(){const n=completedCore().length;$('#sideProgressText').textContent=`${n} of ${coreLessonCount} core lessons completed`;$('#sideProgressBar').style.width=(100*n/coreLessonCount).toFixed(1)+'%'}
function route(){let bits=(location.hash||'#/map').slice(2).split('/');return [bits[0]||'map',decodeURIComponent(bits.slice(1).join('/'))]}
let mapResizeObserver=null;
function render(){const [page,id]=route();if(mapResizeObserver){mapResizeObserver.disconnect();mapResizeObserver=null;}$('#app').classList.toggle('map-page',page==='map');updateSide();navActive(({map:'map',courses:'courses',course:'courses',lesson:'courses',assignments:'assignments',choices:'choices'})[page]||'map');
if(page==='map') renderMap();else if(page==='courses')renderCourses();else if(page==='course')renderCourse(id);else if(page==='lesson')renderLesson(id);else if(page==='assignments')renderAssignments();else if(page==='choices')renderChoices();else location.hash='#/map';
window.scrollTo(0,0)
}
function stats(){return `<div class="metric-strip"><span><b>${core.length}</b> core courses</span><span><b>${opts.length}</b> optional branches</span><span><b>${lessons.length}</b> lessons & checkpoints</span><span><b>${assignments.length}</b> assignments</span></div>`}
let selectedNode=core[0]?.id;
function renderMap(){const box=$('#app');box.innerHTML=`<div class="width">${header('THE CURRICULUM','Follow the path. Choose your branches.','Follow the recommended core sequence; dashed branches show optional specializations. Open any topic when it becomes useful.')}${stats()}<div class="bar"><h2>Dependency roadmap</h2><div class="actions map-toolbar"><span class="hint">Select a course to see details</span><button class="tiny" id="zoomOut" type="button" aria-label="Zoom out" title="Zoom out">−</button><span class="zoom-readout" id="zoomReadout" aria-live="polite">Fit</span><button class="tiny" id="zoomIn" type="button" aria-label="Zoom in" title="Zoom in">+</button><button class="tiny" id="zoomFit" type="button">Fit width</button>${btn('Browse as list','#/courses')}</div></div><p class="map-legend"><span><i class="legend-line"></i> Suggested course sequence</span><span><i class="legend-line dashed"></i> Additional prerequisites / optional branches</span></p><div class="map-layout"><div class="map-stage" id="mapStage"><div class="map-sizer" id="mapSizer"><div class="diagram" id="diagram"></div></div></div><aside class="pane inspector map-inspector" id="inspector" aria-live="polite" hidden></aside></div><div class="callout">Start with <strong>Movement Playground</strong>, not a spaceship. The course will gradually become a small movement, collision and animation lab. ${btn('Open first lesson','#/lesson/'+db.manifest.first_assignment_id.split('-a1')[0],true)}</div></div>`;
const diagram=$('#diagram');const pos={};let html='';const x=270,oy=35,step=108;
for(let i=0;i<core.length;i++){let c=core[i],y=oy+i*step;pos[c.id]={x,y,w:260,h:68};
 const done=courseCompleted(c),amt=c.lesson_ids.length;
 html+=`<button class="graph-node ${done===amt?'done':''}" data-course-select="${c.id}" style="left:${x}px;top:${y}px"><div class="number">${num(i+1)} / CORE ${done}/${amt}</div><b>${esc(c.title)}</b><small>${esc(c.phase)}</small></button>`;
 if(i===0||core[i-1].phase!==c.phase) html+=`<div class="phase-label" style="left:11px;top:${y+17}px">${esc(c.phase)}</div>`;
}
let lastY=35;
opts.forEach((c,i)=>{const base=Math.max(...c.prerequisite_course_ids.map(pid=>(core.findIndex(k=>k.id===pid)+1)*step),0)+5;
 const y=Math.max(base+12,lastY+102);lastY=y;pos[c.id]={x:690,y,w:265,h:68};
 html+=`<button class="graph-node optional ${courseCompleted(c)===c.lesson_ids.length?'done':''}" data-course-select="${c.id}" style="left:690px;top:${y}px"><div class="number"><span class="node-kind">OPTIONAL</span> ${c.recommended?'★ RECOMMENDED':'SPECIALIZATION'}</div><b>${esc(c.title)}</b><small>${courseCompleted(c)} / ${c.lesson_ids.length} complete</small></button>`;});
const height=Math.max(oy+core.length*step+30,lastY+150);let svg=`<svg class="map-lines" width="1000" height="${height}"><defs><marker id="arrow" markerWidth="7" markerHeight="7" refX="6" refY="3" orient="auto"><path d="M0 0L6 3L0 6" fill="none" stroke="var(--muted)" stroke-width="1.1" /></marker></defs>`;
for(let i=1;i<core.length;i++) {const a=pos[core[i-1].id],b=pos[core[i].id];svg+=`<path d="M${a.x+130},${a.y+69}V${b.y-1}" fill="none" stroke="var(--accent)" stroke-width="1.6" opacity=".48" marker-end="url(#arrow)"/>`}
// A solid line expresses the suggested learning order. Dashed links below express nonadjacent,
// actual prerequisites: the two relations are deliberately not conflated.
for(let i=0;i<core.length;i++){const target=core[i],b=pos[target.id];
 for(const depId of target.prerequisite_course_ids){const a=pos[depId];if(!a)continue;
  if(i>0&&core[i-1].id===depId)continue;
  const x0=a.x,x1=b.x,lane=217-Math.min(4,i%4)*10;
  svg+=`<path d="M${x0} ${a.y+33} H${lane} V${b.y+34} H${x1}" fill="none" stroke="var(--muted)" stroke-opacity=".62" stroke-width="1.35" stroke-dasharray="3 6"/>`;
 }
}
opts.forEach(c=>{const b=pos[c.id];c.prerequisite_course_ids.forEach(pid=>{const a=pos[pid];if(!a)return;const startX=a.x+a.w,startY=a.y+34,endX=b.x,endY=b.y+34;svg+=`<path d="M${startX} ${startY} C ${startX+95} ${startY}, ${endX-90} ${endY}, ${endX} ${endY}" fill="none" stroke="var(--muted)" stroke-opacity=".62" stroke-width="1.4" stroke-dasharray="4 5" marker-end="url(#arrow)"/>`})});svg+='</svg>';
diagram.style.height=height+'px';diagram.innerHTML=svg+html;
// Fit the entire horizontal roadmap into its available canvas width on initial load and on resize.
// Zooming is optional; at 100% and above, the canvas can be scrolled for readability.
const stage=$('#mapStage'),sizer=$('#mapSizer'),readout=$('#zoomReadout');let requestedScale=null;
function fitScale(){const cs=getComputedStyle(stage),pad=parseFloat(cs.paddingLeft)+parseFloat(cs.paddingRight);return Math.min(1.5,Math.max(.25,(stage.clientWidth-pad-2)/1000));}
function applyScale(){if(!stage.isConnected)return;const scale=requestedScale??fitScale();diagram.style.transform=`scale(${scale})`;sizer.style.width=Math.ceil(1000*scale)+'px';sizer.style.height=Math.ceil(height*scale)+'px';readout.textContent=Math.round(scale*100)+'%';$('#zoomFit').classList.toggle('is-active',requestedScale===null);}
$('#zoomIn').addEventListener('click',()=>{requestedScale=Math.min(2,(requestedScale??fitScale())*1.2);applyScale()});
$('#zoomOut').addEventListener('click',()=>{requestedScale=Math.max(.25,(requestedScale??fitScale())/1.2);applyScale()});
$('#zoomFit').addEventListener('click',()=>{requestedScale=null;stage.scrollLeft=0;applyScale()});
applyScale();
if(typeof ResizeObserver!=='undefined'){mapResizeObserver=new ResizeObserver(applyScale);mapResizeObserver.observe(stage)}else{window.addEventListener('resize',applyScale,{once:true});}
selectedNode=null;
diagram.addEventListener('click',e=>{let node=e.target.closest('[data-course-select]');if(node)selectCourse(node.dataset.courseSelect)});
$('#inspector').addEventListener('click',e=>{if(e.target.closest('[data-close-inspector]')){document.querySelectorAll('[data-course-select]').forEach(n=>n.classList.remove('selected'));$('#inspector').hidden=true;selectedNode=null;}});
document.addEventListener('keydown',function closeMapInspector(e){if(e.key==='Escape'&&stage.isConnected){$('#inspector').hidden=true;document.querySelectorAll('[data-course-select]').forEach(n=>n.classList.remove('selected'));selectedNode=null;}if(!stage.isConnected)document.removeEventListener('keydown',closeMapInspector)});
}
function selectCourse(id){selectedNode=id;document.querySelectorAll('[data-course-select]').forEach(n=>n.classList.toggle('selected',n.dataset.courseSelect===id));const c=cm.get(id),el=$('#inspector');if(!c||!el)return;el.hidden=false;
let dep=c.prerequisite_course_ids.map(x=>cm.get(x)?.title).filter(Boolean);
el.innerHTML=`<button type="button" class="inspector-close" data-close-inspector aria-label="Close course details" title="Close details">×</button><div class="eyebrow">${c.lane==='core'?'CORE COURSE':'OPTIONAL SPECIALIZATION'}</div><h3>${esc(c.title)}</h3><p>${esc(c.summary)}</p><span class="pill ${c.lane==='core'?'core':'opt'}">${courseCompleted(c)} / ${c.lesson_ids.length} lessons completed</span><div class="divider"></div><div class="label">YOU'LL PRACTICE</div><p>${esc(c.focus)}</p><div class="label">COURSE PROJECT</div><p>${esc(lm.get(c.checkpoint_id)?.title)}</p><div class="label">RECOMMENDED PREREQUISITES</div><p>${dep.length?dep.map(esc).join(' · '):'None'}</p>${btn('Open full course','#/course/'+id,true)}`;
}
function renderCourses(){let html=`<div class="width">${header('SEQUENTIAL COURSES','The course library','The prescribed order is here when you want structure. Optional branches remain available without locking the core curriculum.')}${stats()}<div class="bar"><input class="field" style="max-width:420px" id="searchCourses" placeholder="Search courses, skills, projects…" aria-label="Search courses"><div class="actions"><button class="tiny" data-setfilter="all">All</button><button class="tiny" data-setfilter="core">Core</button><button class="tiny" data-setfilter="optional">Optional</button></div></div><div id="courseResults"></div></div>`;$('#app').innerHTML=html;let filter='all',search='';let items=()=>courses.filter(c=>(filter==='all'||c.lane===filter)&&[c.title,c.focus,c.summary].join(' ').toLowerCase().includes(search));
const draw=()=>{let last='',s='';for(let c of items()){if(c.phase!==last){s+=`<div class="phase-heading">${esc(c.phase)}</div>`;last=c.phase}let n=courseCompleted(c),count=c.lesson_ids.length;s+=`<button class="course-row" data-goto="/course/${c.id}"><span class="num">${num(c.position)}</span><div class="body"><strong>${esc(c.title)}</strong><div class="descr">${esc(c.summary)}</div></div><span class="pill ${c.lane==='core'?'core':'opt'}">${c.lane==='core'?'Core':'Optional'}</span><span class="pill">${n}/${count}</span><span>›</span></button>`}$('#courseResults').innerHTML=s||'<div class="empty">No courses match your search.</div>'};draw();
$('#searchCourses').addEventListener('input',e=>{search=e.target.value.trim().toLowerCase();draw()});document.querySelectorAll('[data-setfilter]').forEach(b=>b.addEventListener('click',()=>{filter=b.dataset.setfilter;draw()}));}
function renderCourse(id){let c=cm.get(id);if(!c){location.hash='#/courses';return;}let dep=c.prerequisite_course_ids.map(x=>cm.get(x)).filter(Boolean);
const lessonRows=c.lesson_ids.map((id,i)=>{let l=lm.get(id);return `<button class="lesson-row" data-goto="/lesson/${id}"><span class="n">${num(i+1)}</span><div class="body"><strong>${esc(l.title)}</strong><small>${esc(l.explanation)}</small></div>${l.type==='checkpoint'?'<span class="pill check">Project</span>':''}<span class="done-check ${state.lessons[id]?'yes':''}">${state.lessons[id]?'✓':'·'}</span></button>`}).join('');
$('#app').innerHTML=`<div class="width">${header('COURSE / '+esc(c.phase),c.title,c.summary)}<div class="reader-top">${btn('← All courses','#/courses')}<span class="pill ${c.lane==='core'?'core':'opt'}">${c.lane==='core'?'Core path':'Optional branch'}</span></div><div class="metric-strip"><span><b>${c.lesson_ids.length}</b> lessons & checkpoint</span><span><b>${courseCompleted(c)}</b> completed</span><span><b>${c.estimated_hours}h</b> indicative effort</span></div><div class="split"><div><div class="bar"><h2>Ordered lessons</h2><span class="hint">Read → try → build → reflect</span></div><div class="pane">${lessonRows}</div></div><aside class="pane inspector"><div class="label">LEARNING OUTCOMES</div><p>${esc(c.focus)}</p>${c.design_thread?`<p class="tinytext"><strong>Design habit:</strong> ${esc(c.design_thread)}</p>`:""}<div class="divider"></div><div class="label">RECOMMENDED PREREQUISITES</div><p>${dep.length?dep.map(d=>`<a href="#/course/${esc(d.id)}">${esc(d.title)}</a>`).join(' · '):'Start here.'}</p><div class="label">INTEGRATION PROJECT</div><p>${esc(lm.get(c.checkpoint_id)?.explanation)}</p>${btn('View course project','#/lesson/'+c.checkpoint_id,true)}</aside></div></div>`;
}
function renderLesson(id){
 const l=lm.get(id);if(!l){location.hash='#/courses';return;}
 const c=cm.get(l.course_id),idx=c.lesson_ids.indexOf(id);
 const reading=l.reading.map(r=>{const res=rm.get(r.resource_id);if(!res)return '';
  const section=res.recommended_section?`<p class="tinytext">Suggested section: ${esc(res.recommended_section)}</p>`:'';
  return `<div class="read-resource"><div class="row"><span class="label">${esc(r.priority)} reading</span>${r.estimated_minutes?`<span class="label">≈${r.estimated_minutes} min</span>`:''}</div><strong><a href="${esc(res.url)}" target="_blank" rel="noopener noreferrer">${esc(res.title)} ↗</a></strong>${section}<p class="focus">${esc(r.reading_focus.replaceAll('**',''))}</p></div>`;}).join('');
 const assignmentsView=l.assignments.map(id=>{const a=am.get(id);if(!a)return '';
  const kind=a.kind==='course_project'?'INTEGRATION PROJECT':a.kind==='independent'?'INDEPENDENT CHALLENGE':'GUIDED EXPERIMENT';
  return `<div class="assignment"><div class="assign-head"><div><span class="label">${kind} · ≈${esc(a.hours)}h</span><h3>${esc(a.title||kind)}</h3><p>${esc(a.instructions)}</p></div><label class="checkline"><input type="checkbox" data-assign="${esc(id)}" ${state.assignments[id]?'checked':''} aria-label="Mark assignment complete"></label></div><div class="criteria"><strong>Evidence required</strong><ol>${a.acceptance_criteria.map(t=>`<li>${esc(t)}</li>`).join('')}</ol></div>${a.self_review_question?`<p class="review-prompt"><b>Reflect:</b> ${esc(a.self_review_question)}</p>`:''}</div>`;
 }).join('');
 const prior=idx>0?btn('← Previous lesson','#/lesson/'+c.lesson_ids[idx-1]):'';
 const next=idx+1<c.lesson_ids.length?btn('Next lesson →','#/lesson/'+c.lesson_ids[idx+1],true):btn('Back to course','#/course/'+c.id,true);
 let study=(l.study_steps||[]).map(t=>`<li>${esc(t)}</li>`).join('');
 let pitfalls=(l.pitfalls||[]).map(t=>`<li>${esc(t)}</li>`).join('');
 const status=l.type==='checkpoint'?'Integration project':`Lesson ${idx+1} / ${c.lesson_ids.length}`;
 $('#app').innerHTML=`<div class="width"><div class="reader-top">${btn('← '+c.title,'#/course/'+c.id)}<span class="pill ${l.type==='checkpoint'?'check':'core'}">${status}</span></div><div class="content lesson-reading"><div class="eyebrow">${esc(c.phase)} / ${esc(c.title)}</div><h1 class="reader-title">${esc(l.title)}</h1><p class="lesson-lead">${esc(l.explanation)}</p><div class="progress-tools"><label class="checkline"><input id="lessonComplete" type="checkbox" ${state.lessons[id]?'checked':''}> Mark lesson reviewed / completed</label><label>Proficiency <select id="profSelect">${['Not started','Familiar','Practicing','Competent','Mastered'].map((v,i)=>`<option value="${i}" ${(state.proficiency[id]||0)===i?'selected':''}>${v}</option>`).join('')}</select></label></div><p class="tinytext lesson-note">A checked lesson means you've worked through it, not that you've mastered the skill. Record proficiency separately and test transfer through the independent challenge.</p>
 <h2>Understand the concept</h2><p>${esc(l.concepts_in_context||l.explanation)}</p>
 ${pitfalls?`<div class="pitfall"><strong>Common misconception or failure</strong><ul>${pitfalls}</ul></div>`:''}
 <h2>Learning outcomes</h2><ul>${l.outcomes.map(o=>`<li>${esc(o)}</li>`).join('')}</ul>
 ${study?`<h2>Suggested study sequence</h2><ol>${study}</ol>`:''}
 <h2>Assigned reading</h2>${reading}
 <h2>Hands-on practice</h2><p class="muted tinytext">Try the guided experiment, then solve the independent extension. Use documentation; you are aiming to own the design and debugging decisions.</p>${assignmentsView}
 <h2>Check your understanding</h2><div class="knowledge"><strong>${esc(l.knowledge_check.question)}</strong><p class="tinytext">${esc(l.knowledge_check.self_review)}</p><details class="answer-guidance"><summary>Reveal self-review guidance</summary><p>${esc(l.knowledge_check.answer_guidance||'Explain with an actual example and a failure case.')}</p></details></div>
 <h2>Learning notes</h2><textarea id="lessonNotes" class="notes-area" placeholder="Record a bug you found, your reasoning, a link to the build, and what you'd do differently…">${esc(state.notes[id]||'')}</textarea><div class="hint" id="savedStatus">Saved locally as you type · Export a progress backup periodically</div><div class="divider"></div><div class="actions">${prior}${next}</div></div></div>`;
 $('#lessonComplete').addEventListener('change',e=>{state.lessons[id]=e.target.checked;persist();updateSide()});
 $('#profSelect').addEventListener('change',e=>{state.proficiency[id]=Number(e.target.value);persist()});
 $('#lessonNotes').addEventListener('input',e=>{state.notes[id]=e.target.value;persist()});
 document.querySelectorAll('[data-assign]').forEach(input=>input.addEventListener('change',e=>{state.assignments[e.target.dataset.assign]=e.target.checked;persist()}));
}
function renderAssignments(){let search='',focus='all';$('#app').innerHTML=`<div class="width">${header('PRACTICE LIBRARY','Assignments','Real game-development practice: focused exercises and integration projects. Filter by course or completion state.')}${stats()}<div class="bar"><input id="searchA" class="field" style="max-width:430px" placeholder="Search exercises and projects…" aria-label="Search assignments"><select id="filterA" class="field" style="max-width:160px"><option value="all">All assignments</option><option value="todo">Not completed</option><option value="complete">Completed</option><option value="projects">Course projects</option></select></div><div id="assignList" class="assignment-list"></div></div>`;
const draw=()=>{let list=assignments.filter(a=>(focus==='all'||(focus==='todo'&&!state.assignments[a.id])||(focus==='complete'&&state.assignments[a.id])||(focus==='projects'&&a.kind==='course_project'))&&[a.instructions,a.title,cm.get(a.course_id)?.title].join(' ').toLowerCase().includes(search));$('#assignList').innerHTML=list.map(a=>`<div class="mini-card"><div class="row"><span class="pill">${esc(cm.get(a.course_id)?.title)}</span><span class="pill ${a.kind==='course_project'?'check':''}">${a.kind==='course_project'?'Project':a.kind==='guided'?'Warm-up':'Challenge'}</span></div><strong>${esc(a.instructions)}</strong><div class="actions"><a href="#/lesson/${esc(a.lesson_id)}">Open lesson →</a><label class="checkline tinytext"><input data-assignment-list="${esc(a.id)}" type="checkbox" ${state.assignments[a.id]?'checked':''}> Complete</label></div></div>`).join('')||'<div class="empty">No matching assignments.</div>';
document.querySelectorAll('[data-assignment-list]').forEach(el=>el.addEventListener('change',e=>{state.assignments[e.target.dataset.assignmentList]=e.target.checked;persist();if(focus!=='all')draw()}))};draw();$('#searchA').addEventListener('input',e=>{search=e.target.value.toLowerCase();draw()});$('#filterA').addEventListener('change',e=>{focus=e.target.value;draw()});}
function renderChoices(){let html=`<div class="width">${header('YOUR OWN DIRECTIONS','Optional branches','You can select one specialization, several, or none. These are opportunities, not mandatory gates.')}${stats()}`;for(let ch of choices){html+=`<section class="choice"><div class="label">CHOICE POINT AFTER ${esc(cm.get(ch.after_course_id)?.title)}</div><h3>${esc(ch.title)}</h3><p>${esc(ch.guidance)}</p><div class="choice-options">${ch.option_course_ids.map(id=>{let c=cm.get(id);return `<button data-choice="${esc(ch.id)}" data-option="${esc(id)}" class="${state.branches[ch.id]===id?'chosen':''}">${esc(c.title)} ${ch.recommended_course_id===id?'★':''}</button>`}).join('')}</div><div class="hint" style="margin-top:10px">${state.branches[ch.id]?'Current focus: '+esc(cm.get(state.branches[ch.id])?.title):'No branch selected yet'}</div></section>`}html+=`<div class="callout">Selecting a branch recommends it as your focus. It does not hide other courses or affect core progress.</div></div>`;$('#app').innerHTML=html;document.querySelectorAll('[data-choice]').forEach(b=>b.addEventListener('click',e=>{state.branches[e.target.dataset.choice]=e.target.dataset.option;persist();renderChoices()}))}
$('#app').addEventListener('click',e=>{const t=e.target.closest('[data-goto]');if(t){location.hash='#'+t.dataset.goto}});
$('#themeBtn').addEventListener('click',()=>{const dark=document.documentElement.getAttribute('data-theme')==='dark';document.documentElement.setAttribute('data-theme',dark?'light':'dark');state.theme=dark?'light':'dark';persist()});
$('#exportBtn').addEventListener('click',()=>{const out={type:'northstar-game-progress',exported_at:new Date().toISOString(),curriculum_version:db.manifest.schema_version,state};let b=new Blob([JSON.stringify(out,null,2)],{type:'application/json'});let url=URL.createObjectURL(b);let a=document.createElement('a');a.href=url;a.download='northstar-game-progress.json';a.click();setTimeout(()=>URL.revokeObjectURL(url),2000)});
$('#importBtn').addEventListener('click',()=>$('#importInput').click());
$('#importInput').addEventListener('change',async e=>{const file=e.target.files?.[0];if(!file)return;try{const b=JSON.parse(await file.text());if(b.type!=='northstar-game-progress'||!b.state||!b.state.lessons||!b.state.assignments)throw new Error('Not a compatible backup');if(!confirm('Import this backup and replace the current progress in this browser?'))return;state={...fresh(),...b.state};persist();notify('Progress imported');render()}catch(err){notify('Cannot import: '+err.message)}e.target.value=''});
window.addEventListener('hashchange',render);if(!location.hash)location.hash='#/map';else render();
})();
