(globalThis.webpackChunk=globalThis.webpackChunk||[]).push([["environment"],{30523(a){var b,c;b=window,c=document,a.exports={polyfill:function(){if(!("scrollBehavior"in c.documentElement.style)|| !0===b.__forceSmoothScrollPolyfill__){var a,d=b.HTMLElement||b.Element,e=468,f=(a=b.navigator.userAgent,RegExp("MSIE |Trident/|Edge/").test(a))?1:0,g={scroll:b.scroll||b.scrollTo,scrollBy:b.scrollBy,elementScroll:d.prototype.scroll||i,scrollIntoView:d.prototype.scrollIntoView},h=b.performance&&b.performance.now?b.performance.now.bind(b.performance):Date.now;b.scroll=b.scrollTo=function(){if(void 0!==arguments[0]){if(!0===j(arguments[0])){g.scroll.call(b,void 0!==arguments[0].left?arguments[0].left:"object"!=typeof arguments[0]?arguments[0]:b.scrollX||b.pageXOffset,void 0!==arguments[0].top?arguments[0].top:void 0!==arguments[1]?arguments[1]:b.scrollY||b.pageYOffset);return}o.call(b,c.body,void 0!==arguments[0].left?~~arguments[0].left:b.scrollX||b.pageXOffset,void 0!==arguments[0].top?~~arguments[0].top:b.scrollY||b.pageYOffset)}},b.scrollBy=function(){if(void 0!==arguments[0]){if(j(arguments[0])){g.scrollBy.call(b,void 0!==arguments[0].left?arguments[0].left:"object"!=typeof arguments[0]?arguments[0]:0,void 0!==arguments[0].top?arguments[0].top:void 0!==arguments[1]?arguments[1]:0);return}o.call(b,c.body,~~arguments[0].left+(b.scrollX||b.pageXOffset),~~arguments[0].top+(b.scrollY||b.pageYOffset))}},d.prototype.scroll=d.prototype.scrollTo=function(){if(void 0!==arguments[0]){if(!0===j(arguments[0])){if("number"==typeof arguments[0]&& void 0===arguments[1])throw SyntaxError("Value couldn't be converted");g.elementScroll.call(this,void 0!==arguments[0].left?~~arguments[0].left:"object"!=typeof arguments[0]?~~arguments[0]:this.scrollLeft,void 0!==arguments[0].top?~~arguments[0].top:void 0!==arguments[1]?~~arguments[1]:this.scrollTop);return}var a=arguments[0].left,b=arguments[0].top;o.call(this,this,void 0===a?this.scrollLeft:~~a,void 0===b?this.scrollTop:~~b)}},d.prototype.scrollBy=function(){if(void 0!==arguments[0]){if(!0===j(arguments[0])){g.elementScroll.call(this,void 0!==arguments[0].left?~~arguments[0].left+this.scrollLeft:~~arguments[0]+this.scrollLeft,void 0!==arguments[0].top?~~arguments[0].top+this.scrollTop:~~arguments[1]+this.scrollTop);return}this.scroll({left:~~arguments[0].left+this.scrollLeft,top:~~arguments[0].top+this.scrollTop,behavior:arguments[0].behavior})}},d.prototype.scrollIntoView=function(){if(!0===j(arguments[0])){g.scrollIntoView.call(this,void 0===arguments[0]||arguments[0]);return}var a=function(a){var b;do b=(a=a.parentNode)===c.body;while(!1===b&& !1===m(a))return b=null,a}(this),d=a.getBoundingClientRect(),e=this.getBoundingClientRect();a!==c.body?(o.call(this,a,a.scrollLeft+e.left-d.left,a.scrollTop+e.top-d.top),"fixed"!==b.getComputedStyle(a).position&&b.scrollBy({left:d.left,top:d.top,behavior:"smooth"})):b.scrollBy({left:e.left,top:e.top,behavior:"smooth"})}}function i(a,b){this.scrollLeft=a,this.scrollTop=b}function j(a){if(null===a||"object"!=typeof a|| void 0===a.behavior||"auto"===a.behavior||"instant"===a.behavior)return!0;if("object"==typeof a&&"smooth"===a.behavior)return!1;throw TypeError("behavior member of ScrollOptions "+a.behavior+" is not a valid value for enumeration ScrollBehavior.")}function k(a,b){return"Y"===b?a.clientHeight+f<a.scrollHeight:"X"===b?a.clientWidth+f<a.scrollWidth:void 0}function l(a,c){var d=b.getComputedStyle(a,null)["overflow"+c];return"auto"===d||"scroll"===d}function m(a){var b=k(a,"Y")&&l(a,"Y"),c=k(a,"X")&&l(a,"X");return b||c}function n(a){var c,d,f,g,i=(h()-a.startTime)/e;c=.5*(1-Math.cos(Math.PI*(g=i=i>1?1:i))),d=a.startX+(a.x-a.startX)*c,f=a.startY+(a.y-a.startY)*c,a.method.call(a.scrollable,d,f),(d!==a.x||f!==a.y)&&b.requestAnimationFrame(n.bind(b,a))}function o(a,d,e){var f,j,k,l,m=h();a===c.body?(f=b,j=b.scrollX||b.pageXOffset,k=b.scrollY||b.pageYOffset,l=g.scroll):(f=a,j=a.scrollLeft,k=a.scrollTop,l=i),n({scrollable:f,method:l,startTime:m,startX:j,startY:k,x:d,y:e})}}}},68836(a,b,c){"use strict";var d=c(25019);window.addEventListener("error",a=>{a.error&&(0,d.eK)(a.error)}),window.addEventListener("unhandledrejection",async a=>{if(a.promise)try{await a.promise}catch(b){(0,d.eK)(b)}}),"#b00m"===window.location.hash&&setTimeout(()=>{throw Error("b00m")}),c(30523),(0,c(45341).nn)()},82664(a,b,c){"use strict";function d(a){let b=document.querySelectorAll(a);if(b.length>0)return b[b.length-1]}function e(){return`${window.location.protocol}//${window.location.host}${function(){let a=d("meta[name=analytics-location]");return a?a.content:window.location.pathname}()+function(){let a=d("meta[name=analytics-location-query-strip]"),b="";a||(b=window.location.search);let c=d("meta[name=analytics-location-params]");for(let e of(c&&(b+=(b?"&":"?")+c.content),document.querySelectorAll("meta[name=analytics-param-rename]"))){let f=e.content.split(":",2);b=b.replace(RegExp(`(^|[?&])${f[0]}($|=)`,"g"),`$1${f[1]}$2`)}return b}()}`}c.d(b,{S:()=>e})},86975(a,b,c){"use strict";c.d(b,{AU:()=>o,DT:()=>s,F2:()=>m,HN:()=>k,Lq:()=>i,Si:()=>n,T2:()=>x,aN:()=>l,ag:()=>w,po:()=>v,q3:()=>p,uL:()=>y,wz:()=>r,xc:()=>j,xk:()=>t,zH:()=>h});var d=c(74395),e=c(64707);let f=d.session.adapter,g="data-turbo-loaded";function h(){document.documentElement.setAttribute(g,"")}function i(){return document.documentElement.hasAttribute(g)}let j=()=>!(0,e.c)("PJAX_ENABLED"),k=a=>a?.tagName==="TURBO-FRAME",l=()=>{f.progressBar.setValue(0),f.progressBar.show()},m=()=>{f.progressBar.setValue(1),f.progressBar.hide()},n=(a,b)=>{let c=new URL(a,window.location.origin),d=new URL(b,window.location.origin);return Boolean(d.hash)&&c.hash!==d.hash&&c.host===d.host&&c.pathname===d.pathname&&c.search===d.search};function o(a,b){let c=a.split("/",3).join("/"),d=b.split("/",3).join("/");return c===d}async function p(){let a=document.head.querySelectorAll("link[rel=stylesheet]"),b=new Set([...document.styleSheets].map(a=>a.href)),c=[];for(let d of a)""===d.href||b.has(d.href)||c.push(q(d));await Promise.all(c)}let q=(a,b=2e3)=>new Promise(c=>{let d=()=>{a.removeEventListener("error",d),a.removeEventListener("load",d),c()};a.addEventListener("load",d,{once:!0}),a.addEventListener("error",d,{once:!0}),setTimeout(d,b)}),r=a=>{let b=a.querySelectorAll("[data-turbo-replace]"),c=[...document.querySelectorAll("[data-turbo-replace]")];for(let d of b){let e=c.find(a=>a.id===d.id);e&&e.replaceWith(d)}},s=a=>{for(let b of a.querySelectorAll("link[rel=stylesheet]"))document.head.querySelector(`link[href="${b.getAttribute("href")}"],
           link[data-href="${b.getAttribute("data-href")}"]`)||document.head.append(b)},t=a=>{for(let b of a.querySelectorAll("script"))document.head.querySelector(`script[src="${b.getAttribute("src")}"]`)||u(b)},u=a=>{let{src:b}=a,c=document.createElement("script"),d=a.getAttribute("type");d&&(c.type=d),c.src=b,document.head&&document.head.appendChild(c)},v=a=>{let b=[];for(let c of a.querySelectorAll('meta[data-turbo-track="reload"]'))document.querySelector(`meta[http-equiv="${c.getAttribute("http-equiv")}"]`)?.content!==c.content&&b.push(x(c.getAttribute("http-equiv")));return b},w=a=>{let b=a.querySelector("[data-turbo-head]")||a.head;return{title:b.querySelector("title")?.textContent,transients:[...b.querySelectorAll("[data-pjax-transient]")],bodyClasses:a.querySelector("meta[name=turbo-body-classes]")?.content}},x=a=>a.replace(/^x-/,"").replaceAll("-","_"),y=a=>document.dispatchEvent(new CustomEvent("turbo:reload",{detail:{reason:a}}))},80721(a,b,c){"use strict";c.d(b,{C:()=>e,x:()=>d});let d="interactive"===document.readyState||"complete"===document.readyState?Promise.resolve():new Promise(a=>{document.addEventListener("DOMContentLoaded",()=>{a()})}),e="complete"===document.readyState?Promise.resolve():new Promise(a=>{window.addEventListener("load",a)})},25019(a,b,c){"use strict";c.d(b,{aJ:()=>t,cI:()=>q,eK:()=>m});var d=c(82918),e=c(45341),f=c(28382),g=c(82664),h=c(86975),i=c(58843);let j=!1,k=0,l=Date.now();function m(a,b={}){var c;"AbortError"!==(c=a).name&&("TypeError"!==c.name||"Failed to fetch"!==c.message)&&n(p(o(a),b))}async function n(a){if(!v())return;let b=document.head?.querySelector('meta[name="browser-errors-url"]')?.content;if(b){if(s(a.error.stacktrace)){j=!0;return}k++;try{await fetch(b,{method:"post",body:JSON.stringify(a)})}catch{}}}function o(a){return{type:a.name,value:a.message,stacktrace:q(a)}}function p(a,b={}){return Object.assign({error:a,sanitizedUrl:(0,g.S)()||window.location.href,readyState:document.readyState,referrer:(0,i.wP)(),timeSinceLoad:Math.round(Date.now()-l),user:t()||void 0,turbo:(0,h.xc)()},b)}function q(a){return(0,f.Q)(a.stack||"").map(a=>({filename:a.file||"",function:String(a.methodName),lineno:(a.lineNumber||0).toString(),colno:(a.column||0).toString()}))}let r=/(chrome|moz|safari)-extension:\/\//;function s(a){return a.some(a=>r.test(a.filename)||r.test(a.function))}function t(){let a=document.head?.querySelector('meta[name="user-login"]')?.content;if(a)return a;let b=(0,d.b)();return`anonymous-${b}`}let u=!1;function v(){return!u&&!j&&k<10&&(0,e.Gb)()}if(window.addEventListener("pageshow",()=>u=!1),window.addEventListener("pagehide",()=>u=!0),"function"==typeof BroadcastChannel){let w=new BroadcastChannel("shared-worker-error");w.addEventListener("message",a=>{m(a.data.error)})}},64707(a,b,c){"use strict";c.d(b,{"$":()=>g,c:()=>f});var d=c(15205);let e=(0,d.Z)(function(){return(document.head?.querySelector('meta[name="enabled-features"]')?.content||"").split(",")}),f=(0,d.Z)(function(a){return -1!==e().indexOf(a)}),g={isFeatureEnabled:f}},86702(a,b,c){"use strict";c.d(b,{Z:()=>d,"_":()=>e});class NoOpStorage{getItem(){return null}setItem(){}removeItem(){}clear(){}key(){return null}get length(){return 0}}function d(a,b={throwQuotaErrorsOnSet:!1},c=window,d=a=>a,e=a=>a){let f;try{f=c[a]}catch{f=new NoOpStorage}let{throwQuotaErrorsOnSet:g}=b;return{getItem:function(a){try{let b=f.getItem(a);return b?d(b):null}catch(c){return null}},setItem:function(a,b){try{f.setItem(a,e(b))}catch(c){if(g&&c.message.toLowerCase().includes("quota"))throw c}},removeItem:function(a){try{f.removeItem(a)}catch(b){}}}}function e(a){return d(a,{throwQuotaErrorsOnSet:!1},window,JSON.parse,JSON.stringify)}},25811(a,b,c){"use strict";c.d(b,{LS:()=>f,cl:()=>g,rV:()=>e});var d=c(86702);let{getItem:e,setItem:f,removeItem:g}=(0,d.Z)("sessionStorage")},55065(a,b,c){"use strict";c.d(b,{"$g":()=>SoftNavSuccessEvent,OV:()=>SoftNavStartEvent,QW:()=>SoftNavErrorEvent,Xr:()=>SoftNavEndEvent});var d=c(45586);class SoftNavEvent extends Event{constructor(a,b){super(b),this.mechanism=a}}class SoftNavStartEvent extends SoftNavEvent{constructor(a){super(a,d.QE.START)}}class SoftNavSuccessEvent extends SoftNavEvent{constructor(a,b){super(a,d.QE.SUCCESS),this.visitCount=b}}class SoftNavErrorEvent extends SoftNavEvent{constructor(a,b){super(a,d.QE.ERROR),this.error=b}}class SoftNavEndEvent extends SoftNavEvent{constructor(a){super(a,d.QE.END)}}},45586(a,b,c){"use strict";c.d(b,{jN:()=>j,QE:()=>i,R6:()=>t,FP:()=>p,r_:()=>o,Yl:()=>l,TL:()=>q,dw:()=>s,LD:()=>m,BT:()=>n,u5:()=>r});var d=c(55065),e=c(34855),f=c(58843);let g="stats:soft-nav-duration",h={turbo:"TURBO",react:"REACT","turbo.frame":"FRAME"},i=Object.freeze({INITIAL:"soft-nav:initial",START:"soft-nav:start",SUCCESS:"soft-nav:success",ERROR:"soft-nav:error",FRAME_UPDATE:"soft-nav:frame-update",END:"soft-nav:end",RENDER:"soft-nav:render",PROGRESS_BAR:{START:"soft-nav:progress-bar:start",END:"soft-nav:progress-bar:end"}}),j="reload",k=0;function l(){k=0,document.dispatchEvent(new Event(i.INITIAL)),(0,f.XL)()}function m(a){(0,f.sj)()||(document.dispatchEvent(new d.OV(a)),(0,f.U6)(a),(0,f.J$)(),(0,f.Nt)(),performance.mark(g))}function n(a={}){u(a)&&(k+=1,document.dispatchEvent(new d.$g((0,f.Gj)(),k)),p(a))}function o(a={}){var b;if(!u(a))return;k=0;let c=(0,f.Wl)()||j;document.dispatchEvent(new d.QW((0,f.Gj)(),c)),b=c,(0,e.b)({turboFailureReason:b,turboStartUrl:(0,f.wP)(),turboEndUrl:window.location.href}),(0,f.XL)(),p(a)}function p(a={}){u(a)&&(document.dispatchEvent(new d.Xr((0,f.Gj)())),(0,f.pS)())}function q(a={}){u(a)&&(!function(){let a=function(){if(0===performance.getEntriesByName(g).length)return null;performance.measure(g,g);let a=performance.getEntriesByName(g),b=a.pop();return b?b.duration:null}();if(!a)return;let b=h[(0,f.Gj)()],c=Math.round(a);b===h.react&&document.dispatchEvent(new CustomEvent("staffbar-update",{detail:{duration:c}})),(0,e.b)({requestUrl:window.location.href,softNavigationTiming:{mechanism:b,destination:(0,f.Nb)()||"rails",duration:c,initiator:(0,f.CI)()||"rails"}})}(),document.dispatchEvent(new Event(i.RENDER)))}function r(){document.dispatchEvent(new Event(i.FRAME_UPDATE))}function s(){document.dispatchEvent(new Event(i.PROGRESS_BAR.START))}function t(){document.dispatchEvent(new Event(i.PROGRESS_BAR.END))}function u({skipIfGoingToReactApp:a,allowedMechanisms:b=[]}={}){return(0,f.sj)()&&(0===b.length||b.includes((0,f.Gj)()))&&(!a||!(0,f.Nb)())}},58843(a,b,c){"use strict";c.d(b,{Ak:()=>r,CI:()=>v,Gj:()=>o,"J$":()=>u,Nb:()=>w,Nt:()=>s,OE:()=>p,U6:()=>l,Wl:()=>q,XL:()=>k,pS:()=>m,sj:()=>n,wP:()=>t});var d=c(25811),e=c(45586);let f="soft-nav:fail",g="soft-nav:fail-referrer",h="soft-nav:referrer",i="soft-nav:marker",j="soft-nav:react-app-name";function k(){(0,d.LS)(i,"0"),(0,d.cl)(h),(0,d.cl)(f),(0,d.cl)(g),(0,d.cl)(j)}function l(a){(0,d.LS)(i,a)}function m(){(0,d.LS)(i,"0")}function n(){let a=(0,d.rV)(i);return a&&"0"!==a}function o(){return(0,d.rV)(i)}function p(){return Boolean(q())}function q(){return(0,d.rV)(f)}function r(a){(0,d.LS)(f,a||e.jN),(0,d.LS)(g,window.location.href)}function s(){(0,d.LS)(h,window.location.href)}function t(){return(0,d.rV)(h)||document.referrer}function u(){let a=w();a?(0,d.LS)(j,a):(0,d.cl)(j)}function v(){return(0,d.rV)(j)}function w(){return document.querySelector("react-app")?.getAttribute("app-name")}},34855(a,b,c){"use strict";c.d(b,{b:()=>f});var d=c(80721);let e=[];function f(a,b=!1){void 0===a.timestamp&&(a.timestamp=new Date().getTime()),a.loggedIn=j(),a.staff=k(),e.push(a),b?i():h()}let g=null;async function h(){await d.C,null==g&&(g=window.requestIdleCallback(i))}function i(){if(g=null,!e.length)return;let a=document.head?.querySelector('meta[name="browser-stats-url"]')?.content;if(!a)return;let b=JSON.stringify({stats:e});try{navigator.sendBeacon&&navigator.sendBeacon(a,b)}catch{}e=[]}function j(){return!!document.head?.querySelector('meta[name="user-login"]')?.content}function k(){return!!document.head?.querySelector('meta[name="user-staff"]')?.content}document.addEventListener("pagehide",i),document.addEventListener("visibilitychange",i)},82918(a,b,c){"use strict";c.d(b,{b:()=>f});let d;function e(){return`${Math.round(2147483647*Math.random())}.${Math.round(Date.now()/1e3)}`}function f(){try{let a=function(){let a,b=document.cookie,c=b.match(/_octo=([^;]+)/g);if(!c)return;let d=[0,0];for(let e of c){let[,f]=e.split("="),[,g,...h]=f.split("."),i=g.split("-").map(Number);i>d&&(d=i,a=h.join("."))}return a}();if(a)return a;let b=e();return!function(a){let b=`GH1.1.${a}`,c=Date.now(),d=new Date(c+31536e6).toUTCString(),{domain:e}=document;e.endsWith(".github.com")&&(e="github.com"),document.cookie=`_octo=${b}; expires=${d}; path=/; domain=${e}; secure; samesite=lax`}(b),b}catch(c){return d||(d=e()),d}}}},a=>{var b=b=>a(a.s=b);a.O(0,["vendors-node_modules_manuelpuyol_turbo_dist_turbo_es2017-esm_js","vendors-node_modules_stacktrace-parser_dist_stack-trace-parser_esm_js-node_modules_github_bro-d351f6"],()=>b(68836));var c=a.O()}])
//# sourceMappingURL=environment-734f9646a80a.js.map