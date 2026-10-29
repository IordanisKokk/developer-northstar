// Execute the actual viewer validator in isolated VM contexts for each track.
const fs=require('node:fs'),vm=require('node:vm'),assert=require('node:assert/strict');
const source=fs.readFileSync('assets/app.js','utf8');
const validator=source.slice(source.indexOf('function validateState('),source.indexOf('function persist('));
const fresh=source.match(/const fresh=\(\)=>\((.*)\);/)[0];
for(const track of ['game','backend','ai']){
 const context=vm.createContext({track,cm:new Map([[track==='game'?'s01-game-ai':track+'-local',{}]])});
 vm.runInContext(fresh+'\n'+validator,context);
 const check=x=>vm.runInContext('validateState(JSON.parse('+JSON.stringify(JSON.stringify(x))+'))',context);
 const id=track==='game'?'g01-editor-start-a-movement-playground':track+'-foundations-l01';
 const valid={schema:3,lessons:{[id]:true},assignments:{},notes:{[id]:'Synthetic QA note <script>no execution</script>'},proficiency:{[id]:3},branches:{},theme:'dark'};
 assert.equal(check(valid).notes[id],valid.notes[id]);
 assert.equal(check({lessons:{},assignments:{}}).schema,3); // old exports may omit newer fields
 for(const field of ['lessons','assignments','proficiency','notes','branches'])assert.throws(()=>check({...valid,[field]:[]}));
 assert.throws(()=>check({...valid,notes:{[id]:42}}));
 assert.throws(()=>check({...valid,proficiency:{[id]:9}}));
 assert.throws(()=>check({...valid,lessons:{constructor:true}}));
 assert.throws(()=>check(JSON.parse('{"notes":{"__proto__":"bad"}}')));
 if(track!=='game')assert.throws(()=>check({...valid,notes:{'g01-editor':'cross-track'}}));
 const roundtrip=check(JSON.parse(JSON.stringify(check(valid))));assert.equal(roundtrip.lessons[id],true);
 console.log('PASS',track,'legacy defaults, roundtrip, field types, unsafe IDs, track isolation');
}
