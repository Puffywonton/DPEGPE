(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function r(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerpolicy&&(o.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?o.credentials="include":i.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(i){if(i.ep)return;i.ep=!0;const o=r(i);fetch(i.href,o)}})();var se=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},Y={exports:{}};(function(e,t){(function(r,n){e.exports=n()})(se,function(){return function r(n,i,o){var a=window,s="application/octet-stream",l=o||s,c=n,d=!i&&!o&&c,u=document.createElement("a"),y=function(f){return String(f)},g=a.Blob||a.MozBlob||a.WebKitBlob||y,m=i||"download",p,v;if(g=g.call?g.bind(a):Blob,String(this)==="true"&&(c=[c,l],l=c[0],c=c[1]),d&&d.length<2048&&(m=d.split("/").pop().split("?")[0],u.href=d,u.href.indexOf(d)!==-1)){var w=new XMLHttpRequest;return w.open("GET",d,!0),w.responseType="blob",w.onload=function(f){r(f.target.response,m,s)},setTimeout(function(){w.send()},0),w}if(/^data:([\w+-]+\/[\w+.-]+)?[,;]/.test(c))if(c.length>1024*1024*1.999&&g!==y)c=b(c),l=c.type||s;else return navigator.msSaveBlob?navigator.msSaveBlob(b(c),m):L(c);else if(/([\x80-\xff])/.test(c)){var S=0,x=new Uint8Array(c.length),I=x.length;for(S;S<I;++S)x[S]=c.charCodeAt(S);c=new g([x],{type:l})}p=c instanceof g?c:new g([c],{type:l});function b(f){var E=f.split(/[:;,]/),M=E[1],ae=E[2]=="base64"?atob:decodeURIComponent,F=ae(E.pop()),H=F.length,R=0,A=new Uint8Array(H);for(R;R<H;++R)A[R]=F.charCodeAt(R);return new g([A],{type:M})}function L(f,E){if("download"in u)return u.href=f,u.setAttribute("download",m),u.className="download-js-link",u.innerHTML="downloading...",u.style.display="none",document.body.appendChild(u),setTimeout(function(){u.click(),document.body.removeChild(u),E===!0&&setTimeout(function(){a.URL.revokeObjectURL(u.href)},250)},66),!0;if(/(Version)\/(\d+)\.(\d+)(?:\.(\d+))?.*Safari\//.test(navigator.userAgent))return/^data:/.test(f)&&(f="data:"+f.replace(/^data:([\w\/\-\+]+)/,s)),window.open(f)||confirm(`Displaying New Document

Use Save As... to download, then click back to return to this page.`)&&(location.href=f),!0;var M=document.createElement("iframe");document.body.appendChild(M),!E&&/^data:/.test(f)&&(f="data:"+f.replace(/^data:([\w\/\-\+]+)/,s)),M.src=f,setTimeout(function(){document.body.removeChild(M)},333)}if(navigator.msSaveBlob)return navigator.msSaveBlob(p,m);if(a.URL)L(a.URL.createObjectURL(p),!0);else{if(typeof p=="string"||p.constructor===y)try{return L("data:"+l+";base64,"+a.btoa(p))}catch{return L("data:"+l+","+encodeURIComponent(p))}v=new FileReader,v.onload=function(f){L(this.result)},v.readAsDataURL(p)}return!0}})})(Y);const le=Y.exports,ce=()=>[{letter:"A",cepMin:0,cepMax:69,egesMin:0,egesMax:5,color:"#329837"},{letter:"B",cepMin:70,cepMax:109,egesMin:6,egesMax:10,color:"#57af37"},{letter:"C",cepMin:110,cepMax:179,egesMin:11,egesMax:29,color:"#c6d300"},{letter:"D",cepMin:180,cepMax:249,egesMin:30,egesMax:49,color:"#f2e500"},{letter:"E",cepMin:250,cepMax:329,egesMin:50,egesMax:69,color:"#ffcb03"},{letter:"F",cepMin:330,cepMax:419,egesMin:70,egesMax:99,color:"#f39739"},{letter:"G",cepMin:420,cepMax:1e3,egesMin:100,egesMax:1e3,color:"#e4251f"}],B=()=>({barsContainerProportion:.6,barContainerHeightProportion:9,barFocusSizeModifier:2,legendFontSizeModifier:.1,topBottomLegendHeightModifier:3,barLetterModifier:1.1,infoValueModifier:.5,infoLegendModifier:.1,infoTitleModifier:.1,sideLegendText:"passoire \xE9nerg\xE9tique",topLegendText:"logement tr\xE8s performant",bottomLegendText:"logement extr\xEAmement consommateur d'\xE9nergie",dpeLegendHtml:"kWh/m<sup>2</sup>.an",gesLegendHtml:"kgCO<sub>2</sub>/m<sup>2</sup>.an"}),U=(e,t,r)=>{const n=B();let i=e/(n.barContainerHeightProportion*n.topBottomLegendHeightModifier),o=e/n.barContainerHeightProportion*n.barFocusSizeModifier*n.infoLegendModifier,a=document.createElement("span");return a.style.height=i+"px",a.style.fontSize=o+"px",a.classList.add(t),a.innerHTML=r,a},ue=(e,t)=>{const r=B();let n=t/r.barContainerHeightProportion*r.barFocusSizeModifier*r.infoLegendModifier,i=t/r.barContainerHeightProportion,o=t/r.barContainerHeightProportion*r.barFocusSizeModifier,a=t/(r.barContainerHeightProportion*r.topBottomLegendHeightModifier),s=(t-(i*6+o+a*2))/8,l=i*2+s,c=a+s,d=document.createElement("span");return d.style.width=e*(1-r.barsContainerProportion)-7+"px",d.style.height=l+"px",d.style.bottom=c+"px",d.style.fontSize=n+"px",d.classList.add("side-legend"),d.innerHTML=r.sideLegendText,d},G=(e,t,r)=>{const n=B();let i=e/n.barContainerHeightProportion*n.barFocusSizeModifier*n.infoTitleModifier,o=e/n.barContainerHeightProportion*n.barFocusSizeModifier*n.infoValueModifier,a=e/n.barContainerHeightProportion*n.barFocusSizeModifier*n.infoLegendModifier,s=document.createElement("div");s.style.fontSize=i+"px",s.classList.add("focus-dpe-info");let l=document.createElement("span");l.classList.add("focus-info-span"),l.style.fontSize=o+"px",l.innerHTML=t,s.appendChild(l);let c=document.createElement("span");return c.classList.add("focus-legend"),c.style.fontSize=a+"px",c.innerHTML=r,s.appendChild(c),s},de=(e,t,r,n,i,o)=>{if(e>=t&&e<=r&&n<=o||n>=i&&n<=o&&e<=r)return!0},fe=(e,t,r,n,i,o,a)=>{let s=document.createElement("div");return s.classList.add("bar-info-focus"),s.style.width=e*(1-r)-4+"px",s.style.left="-"+(e*(1-r)-4)+"px",s.appendChild(G(t,o,n)),s.appendChild(G(t,a,i)),s},V=(e,t,r)=>{let n=document.createElement("span");return n.innerHTML=e,n.classList.add(t),n.style.fontSize=r+"px",n},me=(e,t,r,n,i,o,a,s,l,c,d)=>{const u=B();let y=d*2-d/30,g=d*2-d/200,m=d*2-100,p="stroke:none",v=u.barFocusSizeModifier,w=c/u.barContainerHeightProportion,S=v*w,x=w*u.barLetterModifier,I=S*u.barLetterModifier,b=document.createElement("div");return b.classList.add("container-bar"),b.style.width=e+"%",de(t,r,n,i,o,a)?(p="stroke:black",b.style.height=S+"px",b.appendChild(fe(d,c,u.barsContainerProportion,u.dpeLegendHtml,u.gesLegendHtml,t,i)),b.appendChild(V(s,"bar-letter-focus",I))):(b.style.height=w+"px",b.appendChild(V(s,"bar-letter",x))),b.insertAdjacentHTML("afterbegin",`
        <svg 
            width='100%' 
            height='100%' 
            viewBox="`+m+` 0 100 100" 
            style='background-color: white'
            preserveAspectRatio="xMaxYMax meet"
        >
            <path 
                d="M1 1 L`+y+" 1 L "+g+" 50 L "+y+` 99 L 1 99 Z" 
                vector-effect="non-scaling-stroke" 
                style="`+p+";stroke-width:3;fill:"+l+`"/>
        </svg>
        `),b},pe=(e,t,r,n)=>{const i=ce(),o=B();let a=10,s=40,l=document.createElement("div");l.classList.add("container-bars"),l.style.width=e*o.barsContainerProportion+"px",l.appendChild(U(t,"top-legend",o.topLegendText));for(let c of i)l.append(me(s,r,c.cepMin,c.cepMax,n,c.egesMin,c.egesMax,c.letter,c.color,t,e)),s=s+a;return l.appendChild(U(t,"bottom-legend",o.bottomLegendText)),l},ge=(e,t,r,n,i)=>{let o=document.getElementById(e);o.style.width=t+"px",o.style.height=r+"px";let a=document.createElement("div");a.classList.add("main-container"),a.appendChild(ue(t,r)),a.appendChild(pe(t,r,n,i)),o.appendChild(a)},O="application/font-woff",q="image/jpeg",he={woff:O,woff2:O,ttf:"application/font-truetype",eot:"application/vnd.ms-fontobject",png:"image/png",jpg:q,jpeg:q,gif:"image/gif",tiff:"image/tiff",svg:"image/svg+xml"};function ye(e){const t=/\.([^./]*?)$/g.exec(e);return t?t[1]:""}function z(e){const t=ye(e).toLowerCase();return he[t]||""}function be(e){return e.split(/,/)[1]}function k(e){return e.search(/^(data:)/)!==-1}function Z(e,t){return`data:${t};base64,${e}`}async function N(e,t,r){const n=await fetch(e,t);if(n.status===404)throw new Error(`Resource "${n.url}" not found`);const i=await n.blob();return new Promise((o,a)=>{const s=new FileReader;s.onerror=a,s.onloadend=()=>{try{o(r({res:n,result:s.result}))}catch(l){a(l)}},s.readAsDataURL(i)})}const T={};function we(e,t,r){let n=e.replace(/\?.*/,"");return r&&(n=e),/ttf|otf|eot|woff2?/i.test(n)&&(n=n.replace(/.*\//,"")),t?`[${t}]${n}`:n}async function D(e,t,r){const n=we(e,t,r.includeQueryParams);if(T[n]!=null)return T[n];r.cacheBust&&(e+=(/\?/.test(e)?"&":"?")+new Date().getTime());let i;try{const o=await N(e,r.fetchRequestInit,({res:a,result:s})=>(t||(t=a.headers.get("Content-Type")||""),be(s)));i=Z(o,t)}catch(o){i=r.imagePlaceholder||"";let a=`Failed to fetch resource: ${e}`;o&&(a=typeof o=="string"?o:o.message),a&&console.warn(a)}return T[n]=i,i}function Se(e,t){if(e.match(/^[a-z]+:\/\//i))return e;if(e.match(/^\/\//))return window.location.protocol+e;if(e.match(/^[a-z]+:/i))return e;const r=document.implementation.createHTMLDocument(),n=r.createElement("base"),i=r.createElement("a");return r.head.appendChild(n),r.body.appendChild(i),t&&(n.href=t),i.href=e,i.href}const Ce=(()=>{let e=0;const t=()=>`0000${(Math.random()*36**4<<0).toString(36)}`.slice(-4);return()=>(e+=1,`u${t()}${e}`)})();function C(e){const t=[];for(let r=0,n=e.length;r<n;r++)t.push(e[r]);return t}function P(e,t){const n=(e.ownerDocument.defaultView||window).getComputedStyle(e).getPropertyValue(t);return n?parseFloat(n.replace("px","")):0}function Ee(e){const t=P(e,"border-left-width"),r=P(e,"border-right-width");return e.clientWidth+t+r}function ve(e){const t=P(e,"border-top-width"),r=P(e,"border-bottom-width");return e.clientHeight+t+r}function ee(e,t={}){const r=t.width||Ee(e),n=t.height||ve(e);return{width:r,height:n}}function xe(){let e,t;try{t=process}catch{}const r=t&&t.env?t.env.devicePixelRatio:null;return r&&(e=parseInt(r,10),Number.isNaN(e)&&(e=1)),e||window.devicePixelRatio||1}const h=16384;function Le(e){(e.width>h||e.height>h)&&(e.width>h&&e.height>h?e.width>e.height?(e.height*=h/e.width,e.width=h):(e.width*=h/e.height,e.height=h):e.width>h?(e.height*=h/e.width,e.width=h):(e.width*=h/e.height,e.height=h))}function $(e){return new Promise((t,r)=>{const n=new Image;n.onload=()=>t(n),n.onerror=r,n.crossOrigin="anonymous",n.decoding="sync",n.src=e})}async function Me(e){return Promise.resolve().then(()=>new XMLSerializer().serializeToString(e)).then(encodeURIComponent).then(t=>`data:image/svg+xml;charset=utf-8,${t}`)}async function Re(e,t,r){const n="http://www.w3.org/2000/svg",i=document.createElementNS(n,"svg"),o=document.createElementNS(n,"foreignObject");return i.setAttribute("width",`${t}`),i.setAttribute("height",`${r}`),i.setAttribute("viewBox",`0 0 ${t} ${r}`),o.setAttribute("width","100%"),o.setAttribute("height","100%"),o.setAttribute("x","0"),o.setAttribute("y","0"),o.setAttribute("externalResourcesRequired","true"),i.appendChild(o),o.appendChild(e),Me(i)}function Be(e){const t=e.getPropertyValue("content");return`${e.cssText} content: '${t.replace(/'|"/g,"")}';`}function Pe(e){return C(e).map(t=>{const r=e.getPropertyValue(t),n=e.getPropertyPriority(t);return`${t}: ${r}${n?" !important":""};`}).join(" ")}function Ie(e,t,r){const n=`.${e}:${t}`,i=r.cssText?Be(r):Pe(r);return document.createTextNode(`${n}{${i}}`)}function _(e,t,r){const n=window.getComputedStyle(e,r),i=n.getPropertyValue("content");if(i===""||i==="none")return;const o=Ce();try{t.className=`${t.className} ${o}`}catch{return}const a=document.createElement("style");a.appendChild(Ie(o,r,n)),t.appendChild(a)}function Te(e,t){_(e,t,":before"),_(e,t,":after")}async function ke(e){const t=e.toDataURL();return t==="data:,"?e.cloneNode(!1):$(t)}async function ze(e,t){const r=e.poster,n=z(r),i=await D(r,n,t);return $(i)}async function De(e,t){return e instanceof HTMLCanvasElement?ke(e):e instanceof HTMLVideoElement&&e.poster?ze(e,t):e.cloneNode(!1)}const $e=e=>e.tagName!=null&&e.tagName.toUpperCase()==="SLOT";async function Fe(e,t,r){var n;const i=$e(e)&&e.assignedNodes?C(e.assignedNodes()):C(((n=e.shadowRoot)!==null&&n!==void 0?n:e).childNodes);return i.length===0||e instanceof HTMLVideoElement||await i.reduce((o,a)=>o.then(()=>te(a,r)).then(s=>{s&&t.appendChild(s)}),Promise.resolve()),t}function He(e,t){const r=t.style;if(!r)return;const n=window.getComputedStyle(e);n.cssText?(r.cssText=n.cssText,r.transformOrigin=n.transformOrigin):C(n).forEach(i=>{let o=n.getPropertyValue(i);i==="font-size"&&o.endsWith("px")&&(o=`${Math.floor(parseFloat(o.substring(0,o.length-2)))-.1}px`),r.setProperty(i,o,n.getPropertyPriority(i))})}function Ae(e,t){e instanceof HTMLTextAreaElement&&(t.innerHTML=e.value),e instanceof HTMLInputElement&&t.setAttribute("value",e.value)}function Ue(e,t){if(e instanceof HTMLSelectElement){const r=t,n=Array.from(r.children).find(i=>e.value===i.getAttribute("value"));n&&n.setAttribute("selected","")}}function Ge(e,t){return t instanceof Element&&(He(e,t),Te(e,t),Ae(e,t),Ue(e,t)),t}async function te(e,t,r){return!r&&t.filter&&!t.filter(e)?null:Promise.resolve(e).then(n=>De(n,t)).then(n=>Fe(e,n,t)).then(n=>Ge(e,n))}const ne=/url\((['"]?)([^'"]+?)\1\)/g,Ve=/url\([^)]+\)\s*format\((["']?)([^"']+)\1\)/g,Oe=/src:\s*(?:url\([^)]+\)\s*format\([^)]+\)[,;]\s*)+/g;function qe(e){const t=e.replace(/([.*+?^${}()|\[\]\/\\])/g,"\\$1");return new RegExp(`(url\\(['"]?)(${t})(['"]?\\))`,"g")}function _e(e){const t=[];return e.replace(ne,(r,n,i)=>(t.push(i),r)),t.filter(r=>!k(r))}async function We(e,t,r,n,i){try{const o=r?Se(t,r):t,a=z(t);let s;if(i){const l=await i(o);s=Z(l,a)}else s=await D(o,a,n);return e.replace(qe(t),`$1${s}$3`)}catch{}return e}function je(e,{preferredFontFormat:t}){return t?e.replace(Oe,r=>{for(;;){const[n,,i]=Ve.exec(r)||[];if(!i)return"";if(i===t)return`src: ${n};`}}):e}function re(e){return e.search(ne)!==-1}async function ie(e,t,r){if(!re(e))return e;const n=je(e,r);return _e(n).reduce((o,a)=>o.then(s=>We(s,a,t,r)),Promise.resolve(n))}async function Xe(e,t){var r;const n=(r=e.style)===null||r===void 0?void 0:r.getPropertyValue("background");if(n){const i=await ie(n,null,t);e.style.setProperty("background",i,e.style.getPropertyPriority("background"))}}async function Ke(e,t){if(!(e instanceof HTMLImageElement&&!k(e.src))&&!(e instanceof SVGImageElement&&!k(e.href.baseVal)))return;const r=e instanceof HTMLImageElement?e.src:e.href.baseVal,n=await D(r,z(r),t);await new Promise((i,o)=>{e.onload=i,e.onerror=o,e instanceof HTMLImageElement?(e.srcset="",e.src=n):e.href.baseVal=n})}async function Je(e,t){const n=C(e.childNodes).map(i=>oe(i,t));await Promise.all(n).then(()=>e)}async function oe(e,t){e instanceof Element&&(await Xe(e,t),await Ke(e,t),await Je(e,t))}function Qe(e,t){const{style:r}=e;t.backgroundColor&&(r.backgroundColor=t.backgroundColor),t.width&&(r.width=`${t.width}px`),t.height&&(r.height=`${t.height}px`);const n=t.style;return n!=null&&Object.keys(n).forEach(i=>{r[i]=n[i]}),e}const W={};async function j(e){let t=W[e];if(t!=null)return t;const n=await(await fetch(e)).text();return t={url:e,cssText:n},W[e]=t,t}async function X(e,t){let r=e.cssText;const n=/url\(["']?([^"')]+)["']?\)/g,o=(r.match(/url\([^)]+\)/g)||[]).map(async a=>{let s=a.replace(n,"$1");return s.startsWith("https://")||(s=new URL(s,e.url).href),N(s,t.fetchRequestInit,({result:l})=>(r=r.replace(a,`url(${l})`),[a,l]))});return Promise.all(o).then(()=>r)}function K(e){if(e==null)return[];const t=[],r=/(\/\*[\s\S]*?\*\/)/gi;let n=e.replace(r,"");const i=new RegExp("((@.*?keyframes [\\s\\S]*?){([\\s\\S]*?}\\s*?)})","gi");for(;;){const l=i.exec(n);if(l===null)break;t.push(l[0])}n=n.replace(i,"");const o=/@import[\s\S]*?url\([^)]*\)[\s\S]*?;/gi,a="((\\s*?(?:\\/\\*[\\s\\S]*?\\*\\/)?\\s*?@media[\\s\\S]*?){([\\s\\S]*?)}\\s*?})|(([\\s\\S]*?){([\\s\\S]*?)})",s=new RegExp(a,"gi");for(;;){let l=o.exec(n);if(l===null){if(l=s.exec(n),l===null)break;o.lastIndex=s.lastIndex}else s.lastIndex=o.lastIndex;t.push(l[0])}return t}async function Ye(e,t){const r=[],n=[];return e.forEach(i=>{if("cssRules"in i)try{C(i.cssRules||[]).forEach((o,a)=>{if(o.type===CSSRule.IMPORT_RULE){let s=a+1;const l=o.href,c=j(l).then(d=>X(d,t)).then(d=>K(d).forEach(u=>{try{i.insertRule(u,u.startsWith("@import")?s+=1:i.cssRules.length)}catch(y){console.error("Error inserting rule from remote css",{rule:u,error:y})}})).catch(d=>{console.error("Error loading remote css",d.toString())});n.push(c)}})}catch(o){const a=e.find(s=>s.href==null)||document.styleSheets[0];i.href!=null&&n.push(j(i.href).then(s=>X(s,t)).then(s=>K(s).forEach(l=>{a.insertRule(l,i.cssRules.length)})).catch(s=>{console.error("Error loading remote stylesheet",s.toString())})),console.error("Error inlining remote css file",o.toString())}}),Promise.all(n).then(()=>(e.forEach(i=>{if("cssRules"in i)try{C(i.cssRules||[]).forEach(o=>{r.push(o)})}catch(o){console.error(`Error while reading CSS rules from ${i.href}`,o.toString())}}),r))}function Ze(e){return e.filter(t=>t.type===CSSRule.FONT_FACE_RULE).filter(t=>re(t.style.getPropertyValue("src")))}async function Ne(e,t){if(e.ownerDocument==null)throw new Error("Provided element is not within a Document");const r=C(e.ownerDocument.styleSheets),n=await Ye(r,t);return Ze(n)}async function et(e,t){const r=await Ne(e,t);return(await Promise.all(r.map(i=>{const o=i.parentStyleSheet?i.parentStyleSheet.href:null;return ie(i.cssText,o,t)}))).join(`
`)}async function tt(e,t){const r=t.fontEmbedCSS!=null?t.fontEmbedCSS:t.skipFonts?null:await et(e,t);if(r){const n=document.createElement("style"),i=document.createTextNode(r);n.appendChild(i),e.firstChild?e.insertBefore(n,e.firstChild):e.appendChild(n)}}async function nt(e,t={}){const{width:r,height:n}=ee(e,t),i=await te(e,t,!0);return await tt(i,t),await oe(i,t),Qe(i,t),await Re(i,r,n)}async function rt(e,t={}){const{width:r,height:n}=ee(e,t),i=await nt(e,t),o=await $(i),a=document.createElement("canvas"),s=a.getContext("2d"),l=t.pixelRatio||xe(),c=t.canvasWidth||r,d=t.canvasHeight||n;return a.width=c*l,a.height=d*l,t.skipAutoScale||Le(a),a.style.width=`${c}`,a.style.height=`${d}`,t.backgroundColor&&(s.fillStyle=t.backgroundColor,s.fillRect(0,0,a.width,a.height)),s.drawImage(o,0,0,a.width,a.height),a}async function it(e,t={}){return(await rt(e,t)).toDataURL()}const J=(e,t,r,n,i)=>{let o=document.getElementById("dpeGesDemoContainer");o.childNodes.length!=0&&o.removeChild(o.firstElementChild),ge(e,t,r,n,i),ot()},Q=(e,t)=>{e.style.display==="none"?e.style.display="block":e.style.display="none",t.style.display==="block"&&(t.style.display="none")},ot=()=>{let e=document.getElementById("downloadButton");e.addEventListener("click",t=>{const r=document.getElementById("dpeGesDemoContainer");it(r).then(function(n){le(n,"dpeGes.png")}).catch(function(n){alert("error"),console.error("oops, something went wrong!",n)})}),e.style.display="block"};function at(){let e=document.getElementById("downloadButton");e.style.display="none";const t=document.getElementById("presetParamBtn"),r=document.getElementById("presetParamContainer");r.style.display="none";const n=document.getElementById("customParamBtn"),i=document.getElementById("customParamContainer");i.style.display="none",t.addEventListener("click",u=>{u.preventDefault(),Q(r,i)}),n.addEventListener("click",u=>{u.preventDefault(),Q(i,r)});const o=document.getElementById("createButton");let a,s;document.getElementById("stickerRatioContainer").addEventListener("change",function(u){a=u.target.value}),document.getElementById("stickerSizeContainer").addEventListener("change",function(u){s=u.target.value}),o.addEventListener("click",u=>{if(u.preventDefault(),a===void 0||s===void 0){alert("selectionnez format et/ou taille");return}let y=document.getElementById("dpeInput").value,g=document.getElementById("gesInput").value,m=750,p;s==="large"&&(m=m*1.2),s==="small"&&(m=m*.8),a==="square"&&(p=m),a==="rectangle"&&(p=m*.7),J("dpeGesDemoContainer",m,p,y,g)}),document.getElementById("createCustomButton").addEventListener("click",u=>{u.preventDefault();let y=document.getElementById("dpeInput").value,g=document.getElementById("gesInput").value,m=document.getElementById("heightInput").value,p=document.getElementById("widthInput").value;J("dpeGesDemoContainer",m,p,y,g)})}document.querySelector("#app").innerHTML=`
    <h1>G\xE9n\xE9rateur d'\xE9tiquettes DPE/GES</h1>
    <div id="params" class="params">
        <span class="instructions">Entrez les valeurs DPE et GES:</span>
        <div class="values-container">    
            <div class="dpe-container">
                <label for="dpeInput">valeur du DPE</label>
                <input type="text" value="12" id="dpeInput"></input>
            </div>
            <div class="ges-container">
                <label for="gesInput">valeur du GES</label>
                <input type="text" value="50" id="gesInput"></input>
            </div> 
        </div>
        <span class="instructions">Choisissez entre des dimensions pr\xE9d\xE9finies ou personalis\xE9es:</span>
        <div class="param-selector">
            <button class="param-selector-button" id="presetParamBtn">dimension pr\xE9d\xE9finie</button>
            <button class="param-selector-button" id="customParamBtn">dimension personnalis\xE9e</button>
        </div>
        <div class="preset-param-container" id="presetParamContainer">
            <form>
                <span class="instructions">Selectionnez le format:</span>    
                <div class="sticker-ratio-container" id="stickerRatioContainer">
                    <input type="radio" id="stickerRatioSquare"
                    name="ratio" value="square" required="required">
                    <label for="stickerRatioSquare">carr\xE9</label>
                    <input type="radio" id="stickerRatioRectangle"
                    name="ratio" value="rectangle">
                    <label for="stickerRatioRectangle">rectangle</label>
                </div>
                <span class="instructions">Selectionnez la taille:</span>
                <div class="sticker-size-container" id="stickerSizeContainer">
                    <input type="radio" id="stickerSizeSmall"
                    name="size" value="small" required="required">
                    <label for="stickerSizeSmall">petit</label>
                    <input type="radio" id="stickerSizeMedium"
                    name="size" value="medium">
                    <label for="stickerSizeMedium">moyen</label>
                    <input type="radio" id="stickerSizeLarge"
                    name="size" value="large">
                    <label for="stickerSizeLarge">grand</label>
                </div>
                <button id="createButton" class="create-button">g\xE9n\xE9rer</button>
            </form>
        </div>
        <div id="customParamContainer">
            <div class="custom-size-container">
                <label for="widthInput">largeur</label>
                <input type="text" value="500" id="widthInput"></input>         
                <label for="heightInput">hauteur</label>
                <input type="text" value="600" id="heightInput"></input>
            </div>
            <button id="createCustomButton" class="create-button">g\xE9n\xE9rer</button>
        </div>
    </div>
    <div id="dpeGesDemoContainer" class="dpegesDemoContainer"></div>
    <button class="download-button" id="downloadButton">t\xE9l\xE9charger</button>
`;at();
