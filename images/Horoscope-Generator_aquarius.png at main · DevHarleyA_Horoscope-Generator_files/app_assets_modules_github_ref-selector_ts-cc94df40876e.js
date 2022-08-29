"use strict";(globalThis.webpackChunk=globalThis.webpackChunk||[]).push([["app_assets_modules_github_ref-selector_ts"],{82368(a,b,c){var d=c(53290),e=c(69567),f=c(76006),g=c(17945),h=function(a,b,c,d){var e,f=arguments.length,g=f<3?b:null===d?d=Object.getOwnPropertyDescriptor(b,c):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)g=Reflect.decorate(a,b,c,d);else for(var h=a.length-1;h>=0;h--)(e=a[h])&&(g=(f<3?e(g):f>3?e(b,c,g):e(b,c))||g);return f>3&&g&&Object.defineProperty(b,c,g),g};let i=class RefSelectorElement extends HTMLElement{connectedCallback(){window.addEventListener("resize",this.windowResized),this.refType="branch"===this.getRequiredAttr("type")?d.r.Branch:d.r.Tag;let a=this.getAttribute("current-committish");this.currentCommittish=a?atob(a):null,this.input=this.hasAttribute("initial-filter")&&this.currentCommittish||"",this.defaultBranch=atob(this.getRequiredAttr("default-branch")),this.nameWithOwner=atob(this.getRequiredAttr("name-with-owner")),this.canCreate=this.hasAttribute("can-create"),this.prefetchOnMouseover=this.hasAttribute("prefetch-on-mouseover");let b=this.getRequiredAttr("query-endpoint"),c=this.getRequiredAttr("cache-key");this.index=new d.W(this.refType,this,b,c,this.nameWithOwner),this.updateViewportSize(),this.setupFetchListeners()}disconnectedCallback(){this.resizeAnimationRequest&&cancelAnimationFrame(this.resizeAnimationRequest),window.removeEventListener("resize",this.windowResized)}updateViewportSize(){this.isMobileViewport=window.innerWidth<544,this.windowHeight=window.innerHeight}inputEntered(a){this.input=a.detail,this.render()}tabSelected(){this.index.fetchData()}renderTemplate(a,b){return new e.R(a,b,e.XK)}renderRow(a){let b=this.index.currentSearchResult[a];if(!b&&a>=this.listLength)return document.createElement("span");if(this.index.fetchFailed)return this.renderTemplate(this.fetchFailedTemplate,{index:a,refName:this.input});if(!b){let c=this.input===this.currentCommittish;return this.isCurrentVisible||(this.isCurrentVisible=c),this.renderTemplate(this.noMatchTemplate,{index:a,isCurrent:c,refName:this.input})}let d=this.input.length>0,e=b===this.currentCommittish;this.isCurrentVisible||(this.isCurrentVisible=e);let f=this.renderTemplate(this.itemTemplate,{refName:b,index:a,isFilteringClass:d?"is-filtering":"",urlEncodedRefName:this.urlEncodeRef(b),isCurrent:e,isNotDefault:b!==this.defaultBranch});if(d){let g=f.querySelector("span");g.textContent="";let h=b.split(this.input),i=h.length-1;for(let j=0;j<h.length;j++){let k=h[j];if(g.appendChild(document.createTextNode(k)),j<i){let l=document.createElement("b");l.textContent=this.input,g.appendChild(l)}}}return f}urlEncodeRef(a){return encodeURIComponent(a).replaceAll("%2F","/").replaceAll("%3A",":").replaceAll("%2B","+")}render(){if(this.currentSelectionIndex=null,!this.index.isLoading){if(!this.virtualizedList){this.index.search(this.input),this.setupVirtualizedList();return}this.listContainer.scrollTop=0,this.index.search(this.input),this.virtualizedList.setRowCount(this.listLength)}}get listHeight(){return this.isMobileViewport?.3*this.windowHeight:330}get listLength(){let a=this.index.currentSearchResult.length;return this.showCreateRow?a+1:a||1}get showCreateRow(){return!this.index.fetchFailed&&!this.index.exactMatchFound&&""!==this.input&&this.canCreate}getRequiredAttr(a,b=this){let c=b.getAttribute(a);if(!c)throw Error(`Missing attribute for ${b}: ${a}`);return c}setupFetchListeners(){let a=this.closest("details"),b=!1,c=()=>{b||(this.index.fetchData(),b=!0)};if(!a||a.open){c();return}this.prefetchOnMouseover&&a.addEventListener("mouseover",c,{once:!0}),this.addEventListener("keydown",this.keydown),this.addEventListener("change",this.updateCurrent);let d=a.querySelector("input[data-ref-filter]");d&&(d.addEventListener("input",()=>{this.input=d.value,this.render()}),d.addEventListener("keydown",b=>{if("ArrowDown"===b.key||"Tab"===b.key)b.preventDefault(),b.stopPropagation(),this.focusFirstListMember();else if("Enter"===b.key){let c=this.index.currentSearchResult.indexOf(this.input);if(-1===c){if(!this.showCreateRow)return;c=this.listLength-1}let d=a.querySelector(`[data-index="${c}"]`);d.click(),b.preventDefault()}}))}focusFirstListMember(){this.virtualizedList&&(this.currentSelectionIndex=0,this.focusItemAtIndex(this.currentSelectionIndex))}updateCurrent(a){a.target instanceof HTMLInputElement&&a.target.checked&&a.target.value&&(this.currentCommittish=a.target.value)}keydown(a){if(null!==this.currentSelectionIndex){if("Enter"===a.key){let b=document.activeElement;if(!b)return;b.click(),a.preventDefault();return}if(("Tab"!==a.key||!a.shiftKey)&&"Escape"!==a.key)switch(a.preventDefault(),a.stopPropagation(),a.key){case"ArrowUp":this.currentSelectionIndex--,this.currentSelectionIndex<0&&(this.currentSelectionIndex=this.listLength-1),this.focusItemAtIndex(this.currentSelectionIndex);break;case"Home":this.currentSelectionIndex=0,this.focusItemAtIndex(this.currentSelectionIndex);break;case"End":this.currentSelectionIndex=this.listLength-1,this.focusItemAtIndex(this.currentSelectionIndex);break;case"Tab":case"ArrowDown":this.currentSelectionIndex++,this.currentSelectionIndex>this.listLength-1&&(this.currentSelectionIndex=0),this.focusItemAtIndex(this.currentSelectionIndex)}}}focusItemAtIndex(a){this.virtualizedList.scrollToIndex(a,"center"),setTimeout(()=>{let b=this.listContainer.querySelector(`[data-index="${a}"]`);b&&b.focus()},20)}setupVirtualizedList(){this.listContainer.innerHTML="",this.listContainer.style.maxHeight=`${this.listHeight}px`,this.virtualizedList=new g.Z(this.listContainer,{height:this.listHeight,rowCount:this.listLength,renderRow:this.renderRow.bind(this),rowHeight:a=>{let b=this.isMobileViewport?54:33;return this.showCreateRow&&a===this.listLength-1?51:b},onRowsRendered:()=>{this.hiddenCurrentElement&&(this.listContainer.removeChild(this.hiddenCurrentElement),delete this.hiddenCurrentElement),this.isCurrentVisible?this.isCurrentVisible=!1:this.hiddenCurrentItemTemplate&&(this.hiddenCurrentElement=document.createElement("div"),this.hiddenCurrentElement?.appendChild(this.renderTemplate(this.hiddenCurrentItemTemplate,{refName:this.currentCommittish})),this.listContainer.appendChild(this.hiddenCurrentElement))},initialIndex:0,overscanCount:6}),this.virtualizedList.resize.bind(this.virtualizedList)}constructor(...a){super(...a),this.isCurrentVisible=!1,this.currentSelectionIndex=null,this.handleWindowResize=()=>{if(!this.virtualizedList)return;let a=this.isMobileViewport,b=this.windowHeight;this.updateViewportSize();let c=a!==this.isMobileViewport,d=b!==this.windowHeight;if(c){this.virtualizedList.destroy(),this.setupVirtualizedList();return}this.isMobileViewport&&d&&(this.listContainer.style.maxHeight=`${this.listHeight}px`,this.virtualizedList.resize(this.listHeight))},this.windowResized=()=>{this.resizeAnimationRequest&&cancelAnimationFrame(this.resizeAnimationRequest),this.resizeAnimationRequest=requestAnimationFrame(this.handleWindowResize)}}};h([f.fA],i.prototype,"listContainer",void 0),h([f.fA],i.prototype,"itemTemplate",void 0),h([f.fA],i.prototype,"noMatchTemplate",void 0),h([f.fA],i.prototype,"fetchFailedTemplate",void 0),h([f.fA],i.prototype,"hiddenCurrentItemTemplate",void 0),i=h([f.Ih],i)},53290(a,b,c){c.d(b,{W:()=>SearchIndex,r:()=>e});var d,e,f=c(86702),g=c(34855);let{getItem:h,setItem:i,removeItem:j}=(0,f.Z)("localStorage",{throwQuotaErrorsOnSet:!0});(d=e||(e={})).Branch="branch",d.Tag="tag";class SearchIndex{render(){this.selector.render()}async fetchData(){try{if(!this.isLoading||this.fetchInProgress)return;if(!this.bootstrapFromLocalStorage()){this.fetchInProgress=!0,this.fetchFailed=!1;let a=await fetch(`${this.refEndpoint}?type=${this.refType}`,{headers:{Accept:"application/json"}});await this.processResponse(a)}this.isLoading=!1,this.fetchInProgress=!1,this.render()}catch(b){this.fetchInProgress=!1,this.fetchFailed=!0}}async processResponse(a){if(this.emitStats(a),!a.ok){this.fetchFailed=!0;return}let b=a.clone(),c=await a.json();this.knownItems=c.refs,this.cacheKey=c.cacheKey,this.flushToLocalStorage(await b.text())}emitStats(a){if(!a.ok){(0,g.b)({incrementKey:"REF_SELECTOR_BOOT_FAILED"},!0);return}switch(a.status){case 200:(0,g.b)({incrementKey:"REF_SELECTOR_BOOTED_FROM_UNCACHED_HTTP"});break;case 304:(0,g.b)({incrementKey:"REF_SELECTOR_BOOTED_FROM_HTTP_CACHE"});break;default:(0,g.b)({incrementKey:"REF_SELECTOR_UNEXPECTED_RESPONSE"})}}search(a){if(this.searchTerm=a,""===a){this.currentSearchResult=this.knownItems;return}let b=[],c=[];this.exactMatchFound=!1;let d;for(let e of this.knownItems)if(!((d=e.indexOf(a))<0)){if(0===d){a===e?(c.unshift(e),this.exactMatchFound=!0):c.push(e);continue}b.push(e)}this.currentSearchResult=[...c,...b]}bootstrapFromLocalStorage(){let a=h(this.localStorageKey);if(!a)return!1;let b=JSON.parse(a);return b.cacheKey===this.cacheKey&&"refs"in b?(this.knownItems=b.refs,this.isLoading=!1,(0,g.b)({incrementKey:"REF_SELECTOR_BOOTED_FROM_LOCALSTORAGE"}),!0):(j(this.localStorageKey),!1)}async flushToLocalStorage(a){try{i(this.localStorageKey,a)}catch(b){if(b.message.toLowerCase().includes("quota")){this.clearSiblingLocalStorage(),(0,g.b)({incrementKey:"REF_SELECTOR_LOCALSTORAGE_OVERFLOWED"});try{i(this.localStorageKey,a)}catch(c){c.message.toLowerCase().includes("quota")&&(0,g.b)({incrementKey:"REF_SELECTOR_LOCALSTORAGE_GAVE_UP"})}}else throw b}}clearSiblingLocalStorage(){for(let a of Object.keys(localStorage))a.startsWith(SearchIndex.LocalStoragePrefix)&&j(a)}get localStorageKey(){return`${SearchIndex.LocalStoragePrefix}:${this.nameWithOwner}:${this.refType}`}constructor(a,b,c,d,e){this.knownItems=[],this.currentSearchResult=[],this.exactMatchFound=!1,this.searchTerm="",this.isLoading=!0,this.fetchInProgress=!1,this.fetchFailed=!1,this.refType=a,this.selector=b,this.refEndpoint=c,this.cacheKey=d,this.nameWithOwner=e}}SearchIndex.LocalStoragePrefix="ref-selector"},86702(a,b,c){c.d(b,{Z:()=>d,"_":()=>e});class NoOpStorage{getItem(){return null}setItem(){}removeItem(){}clear(){}key(){return null}get length(){return 0}}function d(a,b={throwQuotaErrorsOnSet:!1},c=window,d=a=>a,e=a=>a){let f;try{f=c[a]}catch{f=new NoOpStorage}let{throwQuotaErrorsOnSet:g}=b;return{getItem:function(a){try{let b=f.getItem(a);return b?d(b):null}catch(c){return null}},setItem:function(a,b){try{f.setItem(a,e(b))}catch(c){if(g&&c.message.toLowerCase().includes("quota"))throw c}},removeItem:function(a){try{f.removeItem(a)}catch(b){}}}}function e(a){return d(a,{throwQuotaErrorsOnSet:!1},window,JSON.parse,JSON.stringify)}}}])
//# sourceMappingURL=app_assets_modules_github_ref-selector_ts-e3e38149cb62.js.map