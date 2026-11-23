(() => {
if(window.__sclV5) return; window.__sclV5=true;
const css=`
#scl2-launch{position:fixed;right:22px;bottom:85px;z-index:2147483645;border:1px solid #ffffff30;background:#18181c;color:#fff;border-radius:50px;padding:12px 18px;box-shadow:0 12px 35px #0007;font:700 13px system-ui;cursor:pointer}
#scl2-panel{position:fixed;right:0;top:0;height:100vh;width:390px;max-width:95vw;z-index:2147483646;background:linear-gradient(160deg,#24212c,#111115 55%);color:#f8f7fb;box-shadow:-15px 0 60px #0009;transform:translateX(110%);transition:transform .28s ease;display:flex;flex-direction:column;font-family:system-ui,Arial,sans-serif}
#scl2-panel.open{transform:translateX(0)}
#scl2-panel *{box-sizing:border-box}
#scl2-head{padding:23px 24px 16px;display:flex;align-items:center;justify-content:space-between}
#scl2-brand{font-size:11px;letter-spacing:2.6px;color:#c1a8fb;font-weight:800}
#scl2-close{background:#ffffff12;border:1px solid #ffffff1c;color:#eee;width:32px;height:32px;border-radius:50%;font-size:21px;cursor:pointer}
#scl2-track{padding:8px 24px 16px}
#scl2-title{font-size:23px;font-weight:800;line-height:1.25;overflow-wrap:anywhere}
#scl2-artist{font-size:13px;color:#aaa4b6;margin-top:7px}
#scl2-actions{padding:8px 24px 20px;display:flex;align-items:center;gap:12px;border-bottom:1px solid #ffffff12}
#scl2-sync{appearance:none;width:38px;height:22px;border-radius:20px;background:#494651;position:relative;cursor:pointer;flex-shrink:0;transition:background .2s}
#scl2-sync:checked{background:#a679fa}
#scl2-sync:before{content:"";position:absolute;top:3px;left:3px;width:16px;height:16px;background:#fff;border-radius:50%;transition:transform .2s}
#scl2-sync:checked:before{transform:translateX(16px)}
#scl2-actions label{font-size:12px;color:#ddd;display:flex;align-items:center;gap:8px;cursor:pointer}
#scl2-refresh{margin-left:auto;background:#ffffff12;border:1px solid #ffffff1b;border-radius:10px;padding:8px 11px;color:#fff;cursor:pointer;font-size:12px}
#scl2-lyrics{position:relative;flex:1;min-height:0;overflow-y:auto;padding:32px 25px 45vh;scrollbar-width:thin;scrollbar-color:#7775 transparent;overscroll-behavior:contain}
.scl2-line{font-size:21px;font-weight:750;line-height:1.48;color:#7d7887;margin:0 0 25px;white-space:pre-wrap;cursor:pointer;transition:color .65s cubic-bezier(.22,1,.36,1),transform .75s cubic-bezier(.16,1,.3,1),opacity .65s ease,filter .65s ease,text-shadow .65s ease;will-change:transform,opacity,filter;transform-origin:left center}
.scl2-line.active{color:#fff;opacity:1;filter:blur(0);transform:translate3d(9px,0,0) scale(1.065);text-shadow:0 0 28px #b38aff65}
.scl2-line.past{color:#a29aaf;opacity:.62;transform:translate3d(0,-2px,0) scale(.985)}
.scl2-line:not(.active):not(.past){opacity:.46;filter:blur(.65px);transform:translate3d(0,3px,0) scale(.98)}
#scl2-msg{font-size:14px;line-height:1.7;color:#aaa4b6}
#scl2-tools{max-height:0;opacity:0;overflow:hidden;visibility:hidden;pointer-events:none;transition:max-height .32s ease,opacity .25s ease,visibility .32s}
#scl2-tools.expanded{max-height:280px;opacity:1;visibility:visible;pointer-events:auto}
#scl2-toggle{background:#ffffff12;border:1px solid #ffffff20;color:#eee;border-radius:9px;width:32px;height:30px;cursor:pointer;font-size:19px;line-height:1;transition:transform .3s ease,background .2s ease}
#scl2-toggle.expanded{transform:rotate(180deg)}
#scl2-tools{padding:0 16px;display:flex;flex-wrap:wrap;gap:7px;border-bottom:1px solid #ffffff15}
#scl2-tools button,#scl2-editor button{background:#ffffff14;border:1px solid #ffffff20;color:#eee;padding:8px 10px;border-radius:9px;cursor:pointer;font:12px system-ui}
#scl2-tools.expanded{padding-top:10px;padding-bottom:10px}
#scl2-tools button:hover,#scl2-editor button:hover{background:#a679fa44}
#scl2-source{padding:0 24px 8px;color:#b9a2d8;font-size:11px}
#scl2-picker-row{padding:0 24px 12px;display:flex;align-items:center;gap:9px}
#scl2-picker-row label{font-size:11px;color:#b9a2d8;white-space:nowrap}
#scl2-picker{flex:1;min-width:0;border:1px solid #ffffff30;border-radius:9px;background:#25212e;color:#f5f1fc;padding:8px 10px;font:12px system-ui;cursor:pointer}
#scl2-picker:disabled{opacity:.55;cursor:default}
#scl2-editor{padding:12px 18px;border-bottom:1px solid #ffffff20;display:none;max-height:48vh;overflow:auto}
#scl2-editor.show{display:block}
#scl2-editor textarea{display:block;width:100%;min-height:125px;resize:vertical;background:#111115;color:white;border:1px solid #ffffff33;border-radius:9px;padding:10px;font:13px/1.5 system-ui;margin-bottom:8px}
#scl2-editor .hint{font:12px/1.5 system-ui;color:#bbb;margin:8px 0}
#scl2-editor .status{font:12px/1.5 system-ui;color:#d6baff;margin:8px 0}
.scl2-word{color:inherit;transition:color .24s ease,text-shadow .24s ease,opacity .24s ease}.scl2-line.active .scl2-word{color:#7d7887}.scl2-line.active .scl2-word.lit{color:white;text-shadow:0 0 12px #b38affaa}#scl2-foot{padding:12px 24px;color:#7d7887;font-size:10px;letter-spacing:.6px;border-top:1px solid #ffffff10}
@media(prefers-reduced-motion:reduce){#scl2-panel,.scl2-line,#scl2-tools,#scl2-toggle{transition:none!important}.scl2-line:not(.active){filter:none}}
`;
const motionCSS=`
@keyframes scl2-appear{from{opacity:0;transform:translate3d(0,10px,0)}to{opacity:1;transform:translate3d(0,0,0)}}
#scl2-panel.open #scl2-head,#scl2-panel.open #scl2-track{animation:scl2-appear .48s cubic-bezier(.16,1,.3,1) both}
#scl2-panel.open #scl2-track{animation-delay:.06s}
#scl2-lyrics{mask-image:linear-gradient(to bottom,transparent 0%,black 8%,black 86%,transparent 100%)}
.scl2-line:hover:not(.active){opacity:.85!important;filter:blur(0)!important}
@media(prefers-reduced-motion:reduce){#scl2-panel.open #scl2-head,#scl2-panel.open #scl2-track{animation:none!important}#scl2-lyrics{scroll-behavior:auto!important}}
`; 
const st=document.createElement('style');st.textContent=css+motionCSS;document.documentElement.append(st);
const launch=document.createElement('button');launch.id='scl2-launch';launch.textContent='♫ LYRICS';
const panel=document.createElement('aside');panel.id='scl2-panel';
panel.innerHTML=`<div id="scl2-head"><span id="scl2-brand">SOUNDCLOUD / LYRICS</span><button id="scl2-close" aria-label="Закрыть">×</button></div><div id="scl2-track"><div id="scl2-title">Включи трек</div><div id="scl2-artist">Тексты для SoundCloud</div></div><div id="scl2-actions"><label><input id="scl2-sync" type="checkbox" checked> Синхронизация</label><button id="scl2-refresh">↻ Обновить</button><button id="scl2-toggle" aria-label="Показать инструменты" title="Инструменты" aria-expanded="false">⌄</button></div><div id="scl2-source">Источник: —</div><div id="scl2-picker-row"><label for="scl2-picker">Текст:</label><select id="scl2-picker" aria-label="Доступные тексты"><option>Пока нет результатов</option></select></div><div id="scl2-tools"><button id="scl2-description">Вставить вручную</button><button id="scl2-genius">Genius ↗</button><button id="scl2-lrclib">LRCLIB ↗</button><button id="scl2-edit">✎ Текст / тайминги</button></div><div id="scl2-editor"><div class="hint">Вставь текст: одна строка песни — одна строка здесь. Затем нажми «Начать разметку» и отмечай строки под музыку.</div><textarea id="scl2-textarea" placeholder="Вставь текст песни..."></textarea><div><button id="scl2-save-text">Сохранить текст</button> <button id="scl2-start">▶ Начать разметку</button> <button id="scl2-mark">● Отметить строку</button> <button id="scl2-undo">↶ Назад</button> <button id="scl2-save-timing">✓ Сохранить тайминги</button></div><div class="status" id="scl2-status">Можно исправить текст или разметить строки заново.</div></div><div id="scl2-lyrics"><div id="scl2-msg">Ожидаем воспроизведение...</div></div><div id="scl2-foot">SOUNDCLOUD LYRICS · MULTI-SOURCE</div>`;
document.body.append(launch,panel);
const $=s=>panel.querySelector(s), box=$('#scl2-lyrics'), sync=$('#scl2-sync');
let timed=[], nodes=[], key='', request=0, abort=null, last=-1, userScrollUntil=0, currentItems=[], source='—', manualMode=false, marks=[], currentTrack=null, availableLyrics=[];
chrome.storage.local.get({scl2Sync:true,scl2Open:false},v=>{
 sync.checked=v.scl2Sync;panel.classList.toggle('open',v.scl2Open);
});
function open(v){panel.classList.toggle('open',v);chrome.storage.local.set({scl2Open:v});if(v)update(true)}
launch.onclick=()=>open(!panel.classList.contains('open'));
$('#scl2-close').onclick=()=>open(false);
sync.onchange=()=>{chrome.storage.local.set({scl2Sync:sync.checked});update(true)};
$('#scl2-refresh').onclick=()=>load(true);
$('#scl2-picker').onchange=()=>{const item=availableLyrics[Number($('#scl2-picker').value)];if(item&&!manualMode)showCandidate(item)};
$('#scl2-toggle').onclick=()=>{
 const expanded=$('#scl2-tools').classList.toggle('expanded');
 $('#scl2-toggle').classList.toggle('expanded',expanded);
 $('#scl2-toggle').setAttribute('aria-expanded',String(expanded));
 if(!expanded&&!manualMode)$('#scl2-editor').classList.remove('show');
};
$('#scl2-edit').onclick=()=>{const ed=$('#scl2-editor');ed.classList.toggle('show');if(ed.classList.contains('show'))$('#scl2-textarea').value=currentItems.map(x=>x.text).join('\n')};
$('#scl2-genius').onclick=()=>{const t=currentTrack;if(t)window.open('https://genius.com/search?q='+encodeURIComponent(t.artist+' '+t.title),'_blank','noopener')};
$('#scl2-lrclib').onclick=()=>{const t=currentTrack;if(t)window.open('https://lrclib.net/search?q='+encodeURIComponent([t.artist,t.title].filter(Boolean).join(' ')),'_blank','noopener')};
function linesFromEditor(){return $('#scl2-textarea').value.split(/\r?\n/).map(x=>x.trim()).filter(Boolean).slice(0,1000).map(text=>({text}))}
function storageKey(t){return 'scl5:'+encodeURIComponent(t.url||t.artist+'|'+t.title)}
function setChoices(candidates,selected=0){
 availableLyrics=candidates;
 const select=$('#scl2-picker');select.replaceChildren();
 if(!candidates.length){const o=document.createElement('option');o.textContent='Нет найденных текстов';select.append(o);select.disabled=true;return}
 candidates.forEach((item,i)=>{const o=document.createElement('option');o.value=String(i);o.textContent=qualityName(item)+' · '+item.label;select.append(o)});
 select.disabled=candidates.length<2;select.value=String(selected);
}
function showCandidate(item){render(item.items,isTimed(item.items),item.label)}
function protectManual(){
 // Invalidate pending LRCLIB requests so they cannot replace the user's edits.
 ++request;
 if(abort)abort.abort();
}
function saveLocal(data){if(!currentTrack)return;chrome.storage.local.set({[storageKey(currentTrack)]:data},()=>$('#scl2-status').textContent=chrome.runtime.lastError?'Ошибка сохранения: '+chrome.runtime.lastError.message:'Сохранено для этого трека ✓')}
$('#scl2-save-text').onclick=()=>{const lines=linesFromEditor();if(!lines.length)return;protectManual();manualMode=false;setChoices([{items:lines,label:'Мой текст'}]);render(lines,false,'Мой текст');saveLocal({lines,source:'Мой текст'})};
$('#scl2-start').onclick=()=>{const lines=linesFromEditor();if(!lines.length){$('#scl2-status').textContent='Сначала вставь текст';return}protectManual();marks=[];manualMode=true;render(lines,false,'Разметка');$('#scl2-status').textContent='Включи песню с начала. Нажимай «Отметить строку» при начале каждой следующей строки (1/'+lines.length+').'};
$('#scl2-mark').onclick=()=>{if(!manualMode)return;const lines=linesFromEditor();if(marks.length>=lines.length)return;const t=time();if(!Number.isFinite(t)){$('#scl2-status').textContent='Не удалось определить время плеера';return}marks.push(Math.max(0,t));$('#scl2-status').textContent='Отмечено '+marks.length+' из '+lines.length;nodes.forEach((n,i)=>n.classList.toggle('active',i===marks.length));if(nodes[marks.length])nodes[marks.length].scrollIntoView({block:'center',behavior:'smooth'})};
$('#scl2-undo').onclick=()=>{
 if(!manualMode){$('#scl2-status').textContent='Сначала нажми «Начать разметку»';return}
 if(!marks.length){$('#scl2-status').textContent='Пока нечего отменять';return}
 const removed=marks.pop();
 const index=marks.length;
 nodes.forEach((n,i)=>n.classList.toggle('active',i===index));
 const line=nodes[index];
 if(line){line.scrollIntoView({block:'center',behavior:'smooth'});}
 $('#scl2-status').textContent='Отменён тайминг строки '+(index+1)+'. Отметь её заново в нужный момент. ('+marks.length+'/'+linesFromEditor().length+')';
};
$('#scl2-save-timing').onclick=()=>{const lines=linesFromEditor();if(!manualMode||marks.length!==lines.length){$('#scl2-status').textContent='Отметь все строки: '+marks.length+'/'+lines.length;return}const entries=lines.map((v,i)=>({text:v.text,t:marks[i]}));if(entries.some((v,i)=>i>0&&v.t<entries[i-1].t)){$('#scl2-status').textContent='Время должно идти по порядку. Попробуй ещё раз';return}protectManual();manualMode=false;setChoices([{items:entries,label:'Мои тайминги'}]);render(entries,true,'Мои тайминги');saveLocal({lines:entries,source:'Мои тайминги',synced:true})};
$('#scl2-description').onclick=()=>{
 $('#scl2-editor').classList.add('show');
 $('#scl2-status').textContent='Вставь текст и нажми «Сохранить текст».';
 $('#scl2-textarea').focus();
};

box.addEventListener('wheel',()=>{userScrollUntil=Date.now()+4500},{passive:true});
box.addEventListener('touchstart',()=>{userScrollUntil=Date.now()+4500},{passive:true});
const txt=s=>document.querySelector(s)?.textContent?.trim()||'';
function track(){
 const title=txt('.playbackSoundBadge__titleLink span[aria-hidden="true"]')||txt('.playbackSoundBadge__titleLink span')||txt('.playbackSoundBadge__titleLink');
 const artist=txt('.playbackSoundBadge__lightLink');
 const url=document.querySelector('.playbackSoundBadge__titleLink')?.href||'';
 return title?{title,artist,url}:null;
}
function audio(){const a=[...document.querySelectorAll('audio')];return a.find(x=>!x.paused&&x.readyState>0)||a.find(x=>x.readyState>0)||null}
function clock(s){const m=String(s||'').match(/(\d+):(\d{2})(?::(\d{2}))?/);return m?(m[3]?Number(m[1])*3600+Number(m[2])*60+Number(m[3]):Number(m[1])*60+Number(m[2])):NaN}
function time(){
 // Prefer the actively playing audio; ignore stale audio elements left by SoundCloud.
 const playing=[...document.querySelectorAll('audio')].find(a=>!a.paused && !a.ended && a.readyState>0 && Number.isFinite(a.currentTime));
 if(playing)return playing.currentTime;
 // SoundCloud's visible timeline is the reliable fallback when audio is encapsulated.
 const selectors=['.playbackTimeline__timePassed span[aria-hidden="true"]','.playbackTimeline__timePassed span','.playbackTimeline__timePassed'];
 for(const selector of selectors){const n=clock(txt(selector));if(Number.isFinite(n))return n}
 const a=audio();return a&&Number.isFinite(a.currentTime)?a.currentTime:NaN;
}

function seek(t){
 const a=audio();if(a&&Number.isFinite(a.duration)&&a.duration>0){a.currentTime=t;return}
 const progress=document.querySelector('.playbackTimeline__progressWrapper, .playbackTimeline__progress');
 const total=clock(txt('.playbackTimeline__duration'));
 if(progress&&Number.isFinite(total)&&total>0){
 const r=progress.getBoundingClientRect();if(r.width>0){const x=r.left+Math.max(0,Math.min(1,t/total))*r.width;progress.dispatchEvent(new MouseEvent('click',{bubbles:true,clientX:x,clientY:r.top+r.height/2}))}
 }
}
function parse(lrc){
 const out=[];for(const raw of lrc.split(/\r?\n/)){
 const re=/\[(\d{1,3}):(\d{2})(?:\.(\d{1,3}))?\]/g, stamps=[...raw.matchAll(re)],content=raw.replace(re,'').trim();
 for(const m of stamps)out.push({t:Number(m[1])*60+Number(m[2])+(m[3]?Number('0.'+m[3]):0),text:content||'♪'});
 }return out.sort((a,b)=>a.t-b.t)
}
function message(s){timed=[];nodes=[];box.replaceChildren();const n=document.createElement('div');n.id='scl2-msg';n.textContent=s;box.append(n)}
function render(items,synced,srcName='LRCLIB'){
 currentItems=items;source=srcName;$('#scl2-source').textContent='Источник: '+source;timed=synced?items:[];last=-1;box.replaceChildren();nodes=[];
 items.forEach((v,i)=>{const p=document.createElement('p');p.className='scl2-line';if(usableWords(v)){for(const w of v.words){const sp=document.createElement('span');sp.className='scl2-word';sp.textContent=w.text;p.append(sp)}}else p.textContent=v.text||'♪';if(synced){p.title='Перемотать к этой строке';p.onclick=()=>{seek(v.t);userScrollUntil=0;update(true)}}box.append(p);nodes.push(p)});
 box.scrollTop=0;update(true);
}
async function api(url,signal){const r=await fetch(url,{signal,headers:{Accept:'application/json'}});if(!r.ok)throw Error('HTTP '+r.status);return r.json()}
function normalize(s){return(s||'').toLowerCase().replace(/\([^)]*\)|\[[^\]]*\]/g,' ').replace(/\b(official|audio|lyrics|visualizer|remaster(ed)?|prod\.?|ft\.?|feat\.?)\b/g,' ').replace(/[^\p{L}\p{N}]+/gu,' ').trim()}
function score(x,t){const title=normalize(t.title),artist=normalize(t.artist),xt=normalize(x.trackName),xa=normalize(x.artistName);let n=0;if(xt===title)n+=8;else if(xt.includes(title)||title.includes(xt))n+=3;if(artist&&xa===artist)n+=6;else if(artist&&(xa.includes(artist)||artist.includes(xa)))n+=2;if(x.syncedLyrics)n+=2;return n}
function parseTime(v){
 if(v===null||v===undefined||v==='')return NaN;v=String(v).trim();
 if(/^\d+(?:\.\d+)?ms$/.test(v))return parseFloat(v)/1000;
 if(/^\d+(?:\.\d+)?s$/.test(v))return parseFloat(v);
 const a=v.split(':');if(a.length===1)return Number(v);
 if(a.some(x=>!/^\d+(?:\.\d+)?$/.test(x)))return NaN;
 return a.reduce((acc,n)=>acc*60+Number(n),0);
}
function parseTTML(xml){
 const doc=new DOMParser().parseFromString(xml,'application/xml');if(doc.querySelector('parsererror'))return [];
 const out=[];
 for(const p of doc.getElementsByTagName('*')){
  if(p.localName!=='p')continue;
  const start=parseTime(p.getAttribute('begin'));if(!Number.isFinite(start))continue;
  const spans=[...p.getElementsByTagName('*')].filter(x=>x.localName==='span');
  const words=spans.map(x=>({t:parseTime(x.getAttribute('begin')),end:parseTime(x.getAttribute('end')),text:x.textContent||''})).filter(x=>Number.isFinite(x.t));
  const clone=p.cloneNode(true);for(const el of [...clone.getElementsByTagName('*')]){const role=[...el.attributes].find(a=>a.localName==='role')?.value||'';if(['x-translation','x-roman','x-bg','translation','romanization'].includes(role))el.remove()}const content=(clone.textContent||'').replace(/\s+/g,' ').trim();if(content)out.push({t:start,text:content,words:words.length?words:undefined});
 }
 return out.sort((a,b)=>a.t-b.t);
}
function parseQRC(xml){
 const doc=new DOMParser().parseFromString(xml,'application/xml');if(doc.querySelector('parsererror'))return [];
 const nodes=[...doc.getElementsByTagName('*')];
 const content=nodes.map(x=>x.getAttribute('LyricContent')||x.getAttribute('lyricContent')).find(Boolean)||'';
 if(!content)return [];
 const out=[];
 for(const raw of content.split(/\r?\n/)){
  const m=raw.match(/^\[(\d+),(\d+)\](.*)$/);if(!m)continue;
  const base=Number(m[1])/1000;const body=m[3];
  const words=[];const re=/([^()]+)\((\d+),(\d+)\)/g;let w;
  while((w=re.exec(body)))words.push({text:w[1],t:Number(w[2])/1000,end:(Number(w[2])+Number(w[3]))/1000});
  const plain=body.replace(/\(\d+,\d+\)/g,'').trim();if(plain)out.push({t:base,text:plain,words:words.length?words:undefined});
 }
 return out.sort((a,b)=>a.t-b.t);
}
async function fetchBetter(t,signal){
 const dur=lyricDuration();const q=new URLSearchParams({s:t.title,a:t.artist||'',al:'',d:String(Number.isFinite(dur)?Math.round(dur):0)});
 const headers={Accept:'application/json'};
 const paths=[['/getLyrics','Better Lyrics · TTML',parseTTML],['/qq/getLyrics','Better Lyrics · QQ',parseQRC],['/kugou/getLyrics','Better Lyrics · Kugou',parse]];
 const settled=await Promise.allSettled(paths.map(async([path,label,parser])=>{
  const response=await fetch('https://api.betterlyrics.org'+path+'?'+q,{signal,headers});if(!response.ok)return null;
  const body=await response.json();const raw=body.ttml||body.lyrics;
  if(typeof raw!=='string'||!raw.trim())return null;
  const items=parser(raw);return items.length?{items,label}:null;
 }));
 if(signal.aborted)throw new DOMException('Aborted','AbortError');
 return settled.filter(x=>x.status==='fulfilled'&&x.value).map(x=>x.value);
}
function lyricDuration(){const a=audio();return a&&Number.isFinite(a.duration)?a.duration:clock(txt('.playbackTimeline__duration'))}
function strictMatch(meta,t){
 const title=normalize(meta.title||''),artist=normalize(meta.artist||'');
 const qt=normalize(t.title),qa=normalize(t.artist);
 if(!title||!qt)return false;
 const similarity=(a,b)=>{if(a===b)return 1;let p=Array.from({length:b.length+1},(_,i)=>i);for(let i=0;i<a.length;i++){const r=[i+1];for(let j=0;j<b.length;j++)r.push(Math.min(r[j]+1,p[j+1]+1,p[j]+(a[i]===b[j]?0:1)));p=r}return 1-p[b.length]/Math.max(a.length,b.length)};
 if(similarity(title,qt)<.78)return false;
 if(qa&&artist&&similarity(qa,artist)<.67)return false;
 const dur=lyricDuration();if(Number.isFinite(dur)&&dur>0&&meta.duration>0&&Math.abs(meta.duration-dur)>Math.max(18,dur*.08))return false;
 return true;
}
function providerMeta(row){return {title:row.trackName||row.title||row.name||'',artist:row.artistName||row.artist||'',duration:Number(row.duration||row.duration_ms/1000||0)}}
function structuredRows(rows,level){
 if(!Array.isArray(rows))return [];
 return rows.slice(0,2000).map(r=>{const stamp=(r.start??r.start_ms)==null?NaN:Number(r.start??r.start_ms);const text=String(r.text||'').trim();if(!text)return null;const words=Array.isArray(r.words)?r.words.map(w=>({t:Number(w.start??w.start_ms)/((w.start_ms!==undefined||Number(w.start)>10000)?1000:1),end:Number(w.end??w.end_ms)/((w.end_ms!==undefined||Number(w.end)>10000)?1000:1),text:String(w.text||'')})).filter(w=>Number.isFinite(w.t)&&w.text):[];return {t:Number.isFinite(stamp)?stamp/(r.start_ms!==undefined||stamp>10000?1000:1):NaN,text,words:words.length?words:undefined}}).filter(Boolean).filter(r=>Number.isFinite(r.t)).sort((a,b)=>a.t-b.t);
}
async function fetchExtra(t,signal){
 const dur=lyricDuration();const q={title:t.title,artist:t.artist||'',duration:Number.isFinite(dur)?Math.round(dur):0};
 const fetchJson=async(url)=>{const r=await fetch(url,{signal,headers:{Accept:'application/json'}});if(!r.ok)throw Error('HTTP '+r.status);return r.json()};
 const providers=[
  async()=>{const u=new URL('https://api.lrcmux.dev/get');Object.entries({...q,level:'word',format:'json'}).forEach(([k,v])=>{if(v)u.searchParams.set(k,v)});const data=await fetchJson(u);if(!data||!strictMatch(providerMeta(data.track||data.metadata||{}),t))return null;const items=structuredRows(data.lines);return items.length?{items,label:'LRC Mux'}:null},
  async()=>{const u=new URL('https://api.liriqo-alfarrizi.my.id/v1/lyrics');Object.entries(q).forEach(([k,v])=>{if(v)u.searchParams.set(k,v)});const data=await fetchJson(u);for(const r of (data?.tracks||[]).slice(0,8)){const meta=providerMeta(r);if(!strictMatch(meta.title?meta:providerMeta(data.metadata||{}),t))continue;const rich=r.ttml?parseTTML(r.ttml):[];if(rich.length)return {items:rich,label:'LiriQo · TTML'};const rows=structuredRows(r.timed);if(rows.length)return {items:rows,label:'LiriQo · '+(r.upstreamProvider||'lyrics')};const plain=r.plain||'';const lrc=parse(plain);if(lrc.length)return {items:lrc,label:'LiriQo · LRC'};}return null},
  async()=>{const u=new URL('https://api.amll.dev/v1/lrclib/search');u.searchParams.set('track_name',t.title);if(t.artist)u.searchParams.set('artist_name',t.artist);const rows=await fetchJson(u);for(const r of (Array.isArray(rows)?rows:[]).slice(0,12)){if(!strictMatch(providerMeta(r),t))continue;if(r.id){try{const v=new URL('https://api.amll.dev/v1/lyrics/get');v.searchParams.set('id',r.id);const rich=await fetchJson(v);const xml=rich?.data?.lyrics;if(xml){const items=parseTTML(xml);if(items.length)return {items,label:'AMLL · TTML'}}}catch(e){if(e.name==='AbortError')throw e}}if(r.syncedLyrics){const items=parse(r.syncedLyrics);if(items.length)return {items,label:'AMLL · LRC'}}}return null}
 ];
 const settled=await Promise.allSettled(providers.map(fn=>fn()));
 if(signal.aborted)throw new DOMException('Aborted','AbortError');
 return settled.filter(x=>x.status==='fulfilled'&&x.value).map(x=>x.value);
}
function isTimed(rows){return Array.isArray(rows)&&rows.length>=2&&rows.every((x,i)=>Number.isFinite(x.t)&&x.t>=0&&typeof x.text==='string'&&(i===0||x.t>=rows[i-1].t))}
function usableWords(row){
 if(!Array.isArray(row.words)||!row.words.length)return false;
 const words=row.words;
 if(words.some((w,i)=>!Number.isFinite(w.t)||w.t<0||typeof w.text!=='string'||!w.text.trim()||(i>0&&w.t<words[i-1].t)))return false;
 const joined=words.map(w=>w.text).join('').replace(/\s/g,'').toLowerCase();
 const line=(row.text||'').replace(/\s/g,'').toLowerCase();
 return joined===line&&words.some(w=>w.t>row.t+.05);
}
function qualityName(result){
 const rows=result?.items||[];
 if(!isTimed(rows))return 'Текст';
 const valid=rows.filter(usableWords).length;
 return valid>=Math.max(2,Math.ceil(rows.length*.5))?'Пословная':'Построчная';
}
function lyricQuality(result){
 const rows=result?.items||[];
 if(!rows.length)return -1;
 const timed=isTimed(rows), word=timed&&qualityName(result)==='Пословная';
 const coverage=rows.reduce((n,x)=>n+(x.text||'').trim().split(/\s+/).filter(Boolean).length,0);
 return (word?2000000:timed?1000000:0)+Math.min(coverage,5000);
}
function chooseLyrics(candidates){return candidates.filter(x=>x&&x.items?.length).sort((a,b)=>lyricQuality(b)-lyricQuality(a))}
async function fetchLRCLIB(t,signal){
 let q=new URLSearchParams({track_name:t.title});if(t.artist)q.set('artist_name',t.artist);
 let results=await api('https://lrclib.net/api/search?'+q,signal);
 if(!Array.isArray(results)||!results.length)results=await api('https://lrclib.net/api/search?'+new URLSearchParams({q:(t.artist+' '+t.title).trim()}),signal);
 if(!Array.isArray(results))return [];
 results.sort((a,b)=>score(b,t)-score(a,t));
 const out=[];
 for(const item of results.slice(0,25)){
  if(!strictMatch(providerMeta(item),t))continue;
  if(item.syncedLyrics){const lines=parse(item.syncedLyrics);if(lines.length>=2)out.push({items:lines,label:'LRCLIB · синхронизация'});}
  if(item.plainLyrics){const lines=item.plainLyrics.split(/\r?\n/).map(text=>({text:text.trim()})).filter(x=>x.text);if(lines.length)out.push({items:lines,label:'LRCLIB · текст'});}
 }
 return out;
}
async function load(force=false){
 const t=track();if(!t)return;
 const next=storageKey(t);
 if(!force&&next===key)return;
 if(!force&&currentTrack&&t.url&&t.url===currentTrack.url)return;
 key=next;currentTrack=t;manualMode=false;setChoices([]);$('#scl2-editor').classList.remove('show');
 const id=++request;if(abort)abort.abort();abort=new AbortController();
 $('#scl2-title').textContent=t.title;$('#scl2-artist').textContent=t.artist||'Unknown artist';message('Ищем синхронизированный текст...');
 const local=await new Promise(resolve=>chrome.storage.local.get(storageKey(t),v=>resolve(v[storageKey(t)])));
 if(id!==request)return;
 if(local?.lines?.length){setChoices([{items:local.lines,label:local.source||'Мой текст'}]);render(local.lines,!!local.synced,local.source||'Мой текст');return}
 // Search every provider, then rank all results. No early unsynced result may block synced lyrics.
 const jobs=[fetchBetter(t,abort.signal),fetchExtra(t,abort.signal),fetchLRCLIB(t,abort.signal)];
 const settled=await Promise.allSettled(jobs);
 if(id!==request||abort.signal.aborted)return;
 const candidates=settled.flatMap(x=>x.status==='fulfilled'&&Array.isArray(x.value)?x.value:[]);
 const ranked=chooseLyrics(candidates);
 if(ranked.length){setChoices(ranked);showCandidate(ranked[0]);return}
 const errors=settled.filter(x=>x.status==='rejected'&&x.reason?.name!=='AbortError');
 $('#scl2-source').textContent='Источник: нет совпадений';
 message(errors.length===jobs.length?'Источники сейчас недоступны. Попробуй обновить поиск.':'Текст пока не найден ни в одном из доступных источников. Можно добавить его вручную или поискать на Genius.');
}
function update(force=false){
 if(manualMode||!timed.length||!sync.checked)return;
 const t=time();if(!Number.isFinite(t))return;
 const pos=t+1.0;let lo=0,hi=timed.length-1,idx=-1;
 while(lo<=hi){const m=(lo+hi)>>1;if(timed[m].t<=pos){idx=m;lo=m+1}else hi=m-1}
 if(idx===last&&!force&&!timed[idx]?.words)return;const lineChanged=idx!==last;last=idx;
 nodes.forEach((n,i)=>{n.classList.toggle('active',i===idx);n.classList.toggle('past',i<idx);if(usableWords(timed[i])){const spans=n.querySelectorAll('.scl2-word');spans.forEach((sp,j)=>sp.classList.toggle('lit',i<idx||(i===idx&&pos>=timed[i].words[j].t)))}});
 if((lineChanged||force)&&idx>=0&&panel.classList.contains('open')&&Date.now()>userScrollUntil){
 const n=nodes[idx];const target=n.getBoundingClientRect().top-box.getBoundingClientRect().top+box.scrollTop-box.clientHeight*.32;
 box.scrollTo({top:Math.max(0,target),behavior:force?'instant':'smooth'});
 }
}
setInterval(()=>load(),650);
let lastFrame=0;
function frame(now){
 if(now-lastFrame>=30){lastFrame=now;if(panel.classList.contains('open'))update()}
 requestAnimationFrame(frame);
}
requestAnimationFrame(frame);
load();
})();