"use strict";(globalThis.webpackChunk=globalThis.webpackChunk||[]).push([["command-palette"],{75133(a,b,c){var d,e=c(76006),f=function(a,b,c,d){var e,f=arguments.length,g=f<3?b:null===d?d=Object.getOwnPropertyDescriptor(b,c):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)g=Reflect.decorate(a,b,c,d);else for(var h=a.length-1;h>=0;h--)(e=a[h])&&(g=(f<3?e(g):f>3?e(b,c,g):e(b,c))||g);return f>3&&g&&Object.defineProperty(b,c,g),g};let g="*",h=class CommandPaletteModeElement extends HTMLElement{active(a,b){return this.scopeTypeMatch(a.type)&&this.modeMatch(b)}scopeTypeMatch(a){return!this.scopeTypes||this.scopeTypes&&JSON.parse(this.scopeTypes).includes(a)}modeMatch(a){return this.char===g||this.char===a}character(){return this.char===g?"":this.char}constructor(...a){super(...a),this.scopeTypes=""}};f([e.Lj],h.prototype,"char",void 0),f([e.Lj],h.prototype,"placeholder",void 0),f([e.Lj],h.prototype,"scopeTypes",void 0),h=f([e.Ih],h);var i=function(a,b,c,d){var e,f=arguments.length,g=f<3?b:null===d?d=Object.getOwnPropertyDescriptor(b,c):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)g=Reflect.decorate(a,b,c,d);else for(var h=a.length-1;h>=0;h--)(e=a[h])&&(g=(f<3?e(g):f>3?e(b,c,g):e(b,c))||g);return f>3&&g&&Object.defineProperty(b,c,g),g};let j="*",k="",l=class CommandPaletteTipElement extends HTMLElement{connectedCallback(){this.hidden=!0}available(a,b=!1,c=!1){let d=this.valueMatch(a.text)&&this.scopeTypeMatch(a.scope.type)&&this.modeMatch(a.mode)&&this.showOnEmpty(b)&&this.showOnError(c);return d}toggle(a,b=!1,c=!1){this.hidden=!this.available(a,b,c)}valueMatch(a){return this.value===j||this.value===a}scopeTypeMatch(a){return this.scopeTypes!==k&&(this.scopeTypes===j||JSON.parse(this.scopeTypes).includes(a))}modeMatch(a){if(this.matchMode===k)return this.mode===j||this.mode===a;{let b=RegExp(this.matchMode);return null!==a.match(b)}}showOnEmpty(a){return!this.onEmpty||a}showOnError(a){return!this.onError||a}constructor(...a){super(...a),this.scopeTypes=k,this.mode=j,this.matchMode=k,this.value=j,this.onEmpty=!1,this.onError=!1}};i([e.Lj],l.prototype,"scopeTypes",void 0),i([e.Lj],l.prototype,"mode",void 0),i([e.Lj],l.prototype,"matchMode",void 0),i([e.Lj],l.prototype,"value",void 0),i([e.Lj],l.prototype,"onEmpty",void 0),i([e.Lj],l.prototype,"onError",void 0),l=i([e.Ih],l),c(64316);var m=function(a,b,c,d){var e,f=arguments.length,g=f<3?b:null===d?d=Object.getOwnPropertyDescriptor(b,c):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)g=Reflect.decorate(a,b,c,d);else for(var h=a.length-1;h>=0;h--)(e=a[h])&&(g=(f<3?e(g):f>3?e(b,c,g):e(b,c))||g);return f>3&&g&&Object.defineProperty(b,c,g),g};let n=class CommandPaletteTokenElement extends HTMLElement{constructor(...a){super(...a),this.type="",this.id="",this.text="",this.value=""}};m([e.Lj],n.prototype,"type",void 0),m([e.Lj],n.prototype,"id",void 0),m([e.Lj],n.prototype,"text",void 0),m([e.Lj],n.prototype,"value",void 0),n=m([e.Ih],n),c(25543);var o=c(16852);c(94831);var p=c(50034),q=c(34106),r=c(89803);class RemoteProvider extends r.j{fetch(a,b){return this.fetchSrc(a)}enabledFor(a){return this.modeMatch(a)&&this.scopeMatch(a)}clearCache(){}scopeMatch(a){return 0===this.scopeTypes.length||this.scopeTypes.includes(a.scope.type)}modeMatch(a){return this.modes.includes(a.mode)||this.hasWildCard}async fetchSrc(a,b=""){if(!this.src)throw Error("No src defined");let c=new URL(this.src,window.location.origin),d=a.params();b&&d.set("mode",b),c.search=d.toString();let e=await fetch(c.toString(),{headers:{Accept:"application/json","X-Requested-With":"XMLHttpRequest"}});if(!e.ok)return{error:!0,results:[]};{let f=await e.json();return{results:f.results?.map(a=>q.g.build(a))||[],octicons:f.octicons}}}}class PrefetchedProvider extends RemoteProvider{clearCache(){super.clearCache(),this.scopedItems={},this.cachedOcticons={}}get debounce(){return 0}async prefetch(a){if(!this.scopeMatch(a)||this.scopedItems[a.scope.id])return;let b=new p.A("",a.mode,{subjectId:a.subjectId,subjectType:a.subjectType,returnTo:a.returnTo,scope:a.scope}),c=await this.fetchSrc(b,a.mode);this.octicons=c.octicons||[];let d=c.results||[];this.scopedItems[a.scope.id]=d,this.cachedOcticons[a.scope.id]=this.octicons}async fetch(a,b){let c=this.scopedItems[a.scope.id]||[],d=this.cachedOcticons[a.scope.id]||[],e=this.fuzzyFilter(c,a);return{results:e.slice(0,this.maxItems),octicons:d}}constructor(...a){super(...a),this.maxItems=1e3,this.scopedItems={},this.cachedOcticons={}}}var s=c(24728),t=c(8407);class HelpProvider extends r.j{enabledFor(a){return!0}clearCache(){}get hasCommands(){return!1}get debounce(){return 0}async fetch(a,b=!1){if("?"!==a.mode&&!b)return{results:[]};let c=Array.from(this.element.querySelectorAll("command-palette-help")),d=c.filter(b=>b.show(a)).map((a,b)=>a.toItem(b));return{results:d}}}var u=c(95639);class SearchLinksProvider extends r.j{enabledFor(a){return!a.isBlank()&&"?"!==a.mode&&">"!==a.mode}clearCache(){}get hasCommands(){return!1}async fetch(a,b=!1){return{results:[u.K.create(a)]}}}class ServerDefinedProviderFactory{static create(a){let b=this.providers[a.type];if(!b)throw Error(`Unknown provider type: ${a.type}`);return new b(a)}}ServerDefinedProviderFactory.providers={remote:RemoteProvider,prefetched:PrefetchedProvider,commands:class CommandsProvider extends PrefetchedProvider{enabledFor(a){return">"===a.mode||!!["discussion","issue","pull_request"].includes(a.scope.type)}},files:class FilesProvider extends PrefetchedProvider{async fetchSrc(a){if(!this.src)throw Error("No src provided");let b=new URL(this.src,window.location.origin);b.search=a.params().toString();let c=await fetch(b.toString(),{headers:{Accept:"application/json","X-Requested-With":"XMLHttpRequest"}}),d=await c.json();if(!d.results)return;let e=d.results[0];if(e.base_file_path){let f=e.base_file_path,g=e.paths;d.results=g.map(a=>t.s.from({title:a,path:`${f}/${a}`,icon:"file-color-fg-muted",group:"files"}))}else e.action&&"access_policy"===e.action.type?d.results=[new s.i(e)]:d.results=[];return d}async fetch(a,b=!1){let c=a.text.match(/(.+):(\d*)\s*$/);return c?this.fetchWithLineNumbers(a,c):super.fetch(a,b)}async fetchWithLineNumbers(a,b){let c=b[1],d=b[2],e=new p.A(c,a.mode,{scope:a.scope}),f=[],g=(await super.fetch(e,!1)).results;for(let h of g)h instanceof t.s&&f.push(this.convert(h,d));return{results:f}}convert(a,b){return""!==b&&a instanceof t.s&&(a.title=`${a.title}:${b}`,a.action.path=`${a.action.path}#L${b}`),a}},help:HelpProvider,"search-links":SearchLinksProvider};var v=function(a,b,c,d){var e,f=arguments.length,g=f<3?b:null===d?d=Object.getOwnPropertyDescriptor(b,c):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)g=Reflect.decorate(a,b,c,d);else for(var h=a.length-1;h>=0;h--)(e=a[h])&&(g=(f<3?e(g):f>3?e(b,c,g):e(b,c))||g);return f>3&&g&&Object.defineProperty(b,c,g),g};let w=class ServerDefinedProviderElement extends o.b{get debounce(){return parseInt(this.fetchDebounce,10)}get hasCommands(){return this.supportsCommands}get hasWildCard(){return this.modes.includes(this._wildcard)}get modes(){return""===this.supportedModes&&(this._modes=[""]),this._modes||(this._modes=JSON.parse(this.supportedModes)),this._modes}get scopeTypes(){return""===this.supportedScopeTypes?[]:(this._scopeTypes||(this._scopeTypes=JSON.parse(this.supportedScopeTypes)),this._scopeTypes)}connectedCallback(){this.provider=ServerDefinedProviderFactory.create(this)}constructor(...a){super(...a),this._wildcard="*"}};v([e.Lj],w.prototype,"type",void 0),v([e.Lj],w.prototype,"supportedModes",void 0),v([e.Lj],w.prototype,"fetchDebounce",void 0),v([e.Lj],w.prototype,"supportedScopeTypes",void 0),v([e.Lj],w.prototype,"src",void 0),v([e.Lj],w.prototype,"supportsCommands",void 0),w=v([e.Ih],w);var x=c(79922),y=function(a,b,c,d){var e,f=arguments.length,g=f<3?b:null===d?d=Object.getOwnPropertyDescriptor(b,c):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)g=Reflect.decorate(a,b,c,d);else for(var h=a.length-1;h>=0;h--)(e=a[h])&&(g=(f<3?e(g):f>3?e(b,c,g):e(b,c))||g);return f>3&&g&&Object.defineProperty(b,c,g),g};let z=class CommandPaletteHelpElement extends HTMLElement{connectedCallback(){this.hidden=!0}show(a){return this.isEnabledScopeType(a)}isEnabledScopeType(a){return!this.scopeTypes||this.scopeTypes&&JSON.parse(this.scopeTypes).includes(a.scope.type)}toItem(a){let b={group:this.group,title:this.titleElement.innerHTML,index:a};return this.prefix&&(b.prefix=this.prefix),this.hintElement.textContent&&(b.persistentHint=this.hintElement.innerHTML),x.B.from(b)}};y([e.Lj],z.prototype,"group",void 0),y([e.Lj],z.prototype,"prefix",void 0),y([e.Lj],z.prototype,"scopeTypes",void 0),y([e.fA],z.prototype,"titleElement",void 0),y([e.fA],z.prototype,"hintElement",void 0),z=y([e.Ih],z),c(776),c(4328),c(73072),c(35446);var A=c(63927);class MainWindowCommand{static item(a={}){return new A.U(new this,a)}run(a){Error("Not implemented")}isApplicable(a){return!0}constructor(){this.iconType="octicon",this.group="commands",this.priority=0,this.dismissAfterRun=!0}}class MainWindowGlobalCommand extends MainWindowCommand{constructor(...a){super(...a),this.group="global_commands"}}let B=[class DeleteDiscussion extends MainWindowCommand{get deleteButton(){return document.querySelector("button#dialog-show-delete-discussion")}get dialogElement(){return document.querySelector("#delete-discussion")}isApplicable(){return null!=this.deleteButton}run(){let a=this.deleteButton;if(a){a.click(),setTimeout(()=>{this.dialogElement?.querySelector('button[type="submit"]')?.focus()},0);return}}constructor(...a){super(...a),this.title="Delete discussion\u2026",this.icon="trash-color-fg-muted"}},class TransferDiscussion extends MainWindowCommand{get transferButton(){return document.querySelector("button#dialog-show-discussion-transfer-conversation")}get dialogElement(){return document.querySelector("#discussion-transfer-conversation")}isApplicable(){return null!=this.transferButton}run(){let a=this.transferButton,b=this.dialogElement;if(a&&b){a.click();let c=()=>{setTimeout(()=>{b?.querySelector("[data-menu-button]")?.focus()},0)};b.querySelector("include-fragment")?.addEventListener("load",c),c()}}constructor(...a){super(...a),this.title="Transfer discussion\u2026",this.icon="arrow-right-color-fg-muted"}},class EditDiscussion extends MainWindowCommand{get editButton(){return document.querySelector(".js-discussions-comment-edit-button")}isApplicable(){return null!=this.editButton}run(){this.editButton?.click()}constructor(...a){super(...a),this.title="Edit discussion body",this.icon="pencil-color-fg-muted"}}];var C=c(76237),D=c(33241),E=c(67269);class TabSizeTwo extends MainWindowCommand{async run(a){this.updateTabSize(),this.saveSettings(a)}updateTabSize(){let a=document.querySelectorAll("[data-tab-size]");for(let b of a)b.setAttribute("data-tab-size",this.tabSize)}async saveSettings(a){let b=new FormData;b.set("tab_size_rendering_preference",this.tabSize);let c="Failed to save tab size preference";try{let d=await (0,E.Q)("/settings/appearance/tab_size",{method:"PUT",body:b});d.ok?a.displayFlash("success","Tab size rendering updated"):a.displayFlash("error",c)}catch{a.displayFlash("error",c)}}constructor(...a){super(...a),this.title="2 spaces",this.iconType="none",this.tabSize="2",this.group=""}}class TabSizeThree extends TabSizeTwo{constructor(...a){super(...a),this.title="3 spaces",this.tabSize="3"}}class TabSizeFour extends TabSizeTwo{constructor(...a){super(...a),this.title="4 spaces",this.tabSize="4"}}class TabSizeSix extends TabSizeTwo{constructor(...a){super(...a),this.title="6 spaces",this.tabSize="6"}}class TabSizeEight extends TabSizeTwo{constructor(...a){super(...a),this.title="8 spaces",this.tabSize="8"}}class TabSizeTen extends TabSizeTwo{constructor(...a){super(...a),this.title="10 spaces",this.tabSize="10"}}class TabSizeTwelve extends TabSizeTwo{constructor(...a){super(...a),this.title="12 spaces",this.tabSize="12"}}class SwitchToDark extends MainWindowCommand{applyTheme(){this.loadStyles(this.theme),"auto"!==this.mode&&(0,C.on)(this.theme,this.mode),(0,C.h5)(this.mode)}async run(){this.applyTheme(),this.saveSettings(this.mode,this.lightTheme,this.darkTheme)}async saveSettings(a=this.mode,b,c){let d=new FormData;d.set("color_mode",a),b&&d.set("light_theme",b),c&&d.set("dark_theme",c);let e=await (0,E.Q)("/settings/appearance/color_mode",{method:"PUT",body:d}),f=await e.json();this.loadStyles(f.light_theme),this.loadStyles(f.dark_theme),(0,C.on)(f.light_theme,"light"),(0,C.on)(f.dark_theme,"dark"),(0,C.h5)(f.color_mode)}loadStyles(a){let b=document.querySelector(`link[data-color-theme='${a}']`);b&&!b.hasAttribute("href")&&b.hasAttribute("data-href")&&b.setAttribute("href",b.getAttribute("data-href"))}get darkTheme(){return"dark"===this.mode?this.theme:(0,C.yn)("dark")}get lightTheme(){return"light"===this.mode?this.theme:(0,C.yn)("light")}constructor(...a){super(...a),this.title="Default dark",this.icon="moon-color-fg-muted",this.mode="dark",this.theme="dark",this.group=""}}class SwitchToDarkHighContrast extends SwitchToDark{constructor(...a){super(...a),this.title="Switch theme to dark high contrast",this.theme="dark_high_contrast"}}class SwitchToDarkDimmed extends SwitchToDark{constructor(...a){super(...a),this.title="Dark dimmed",this.theme="dark_dimmed"}}class SwitchToLight extends SwitchToDark{constructor(...a){super(...a),this.title="Default light",this.icon="sun-color-fg-muted",this.mode="light",this.theme="light"}}class SwitchToAuto extends SwitchToDark{get darkTheme(){}get lightTheme(){}constructor(...a){super(...a),this.title="Sync with system settings",this.icon="sun-color-fg-muted",this.mode="auto"}}let F=[class OpenInDotDev extends MainWindowCommand{isApplicable(){return this.fetchLink() instanceof HTMLAnchorElement}fetchLink(){return document.querySelector(".js-github-dev-shortcut")}run(){this.fetchLink()?.click()}constructor(...a){super(...a),this.title="Open in github.dev editor",this.icon="codespaces-color-fg-muted",this.priority=10}},class SwitchTabSize extends MainWindowGlobalCommand{run(a){a.pushPage(new D.Z4(this.title,"tab-sizes",this.pageItems),!0)}get pageItems(){return[TabSizeTwo,TabSizeThree,TabSizeFour,TabSizeSix,TabSizeEight,TabSizeTen,TabSizeTwelve].map(a=>a.item())}select(a){this.run(a)}constructor(...a){super(...a),this.title="Change tab size rendering",this.icon="gear-color-fg-muted",this.priority=10,this.dismissAfterRun=!1}},class SwitchTheme extends MainWindowGlobalCommand{run(a){a.pushPage(new D.Z4(this.title,"switch-theme-page-1",this.pageItems),!0)}get pageItems(){return[SwitchToDark,SwitchToLight,SwitchToDarkDimmed,SwitchToDarkHighContrast,SwitchToAuto].map(a=>a.item())}select(a){this.run(a)}constructor(...a){super(...a),this.title="Switch theme",this.icon="paintbrush-color-fg-muted",this.priority=9,this.dismissAfterRun=!1}},class UpdateSubscription extends MainWindowCommand{isApplicable(){return this.fetchButton() instanceof HTMLButtonElement&&this.fetchButton()?.disabled=== !1}isSubscribe(){return"Subscribe"===this.fetchButton()?.textContent?.trim()}fetchButton(){return document.querySelector(".thread-subscribe-button")}run(){this.fetchButton()?.click()}constructor(){super();let a=this.isSubscribe();this.title=`${a?"Subscribe":"Unsubscribe"}`,this.icon=`${a?"bell":"bell-slash"}-color-fg-muted`}}];function G(a){a.focus(),a.selectionStart=a.selectionEnd=a.value.length}class EditIssueBody extends MainWindowCommand{issueBody(){return document.querySelector(".js-command-palette-issue-body")}isIssue(){return!!this.issueBody()}isApplicable(){return this.isIssue()}run(){let a=document.createElement("button");a.hidden=!0,a.classList.add("js-comment-edit-button");let b=document.querySelector("div.js-comment");b?.appendChild(a),a.click(),a.remove(),setTimeout(()=>{let a=b?.parentElement?.querySelector("textarea.js-comment-field");a&&G(a)},0)}constructor(...a){super(...a),this.title="Edit issue body",this.icon="pencil-color-fg-muted"}}class EditIssueTitle extends MainWindowCommand{issueBody(){return document.querySelector(".js-command-palette-issue-body")}isIssue(){return!!this.issueBody()}isApplicable(){return this.fetchButton() instanceof HTMLButtonElement&&this.isIssue()}fetchButton(){return document.querySelector(".js-title-edit-button")}run(){this.fetchButton()?.click(),setTimeout(()=>{let a=document.querySelector("input#issue_title[autofocus]");a&&G(a)},0)}constructor(...a){super(...a),this.title="Edit issue title",this.icon="pencil-color-fg-muted"}}let H=[EditIssueTitle,EditIssueBody,class LockIssue extends MainWindowCommand{isApplicable(){return this.fetchDetails() instanceof HTMLDetailsElement}isLock(){return"Lock conversation"===document.querySelector("summary.lock-toggle-link")?.textContent?.trim()}fetchDetails(){return document.querySelector("details.js-lock-issue")}run(){let a=this.fetchDetails();a&&(a.open=!0,setTimeout(()=>{document.querySelector("#unlock-reason")?.focus()},0))}constructor(){super();let a=this.isLock();this.title=`${a?"Lock":"Unlock"} conversation`,this.icon=`${a?"lock":"key"}-color-fg-muted`}},class TransferIssue extends MainWindowCommand{isApplicable(){return this.fetchDetails() instanceof HTMLDetailsElement}fetchDetails(){return document.querySelector("details.js-transfer-issue")}run(){let a=this.fetchDetails();if(a){let b=()=>{setTimeout(()=>{a.querySelector("[data-menu-button]")?.focus()},0)};a.querySelector("include-fragment")?.addEventListener("load",b),a.open=!0,b()}}constructor(...a){super(...a),this.title="Transfer issue\u2026",this.icon="arrow-right-color-fg-muted"}},class DeleteIssue extends MainWindowCommand{isApplicable(){return this.fetchDetails() instanceof HTMLDetailsElement}fetchDetails(){return document.querySelector("details.js-delete-issue")}run(){let a=this.fetchDetails();a&&(a.open=!0,setTimeout(()=>{a.querySelector('button[type="submit"]')?.focus()},0))}constructor(...a){super(...a),this.title="Delete issue\u2026",this.icon="trash-color-fg-muted"}},class ConvertToDiscussion extends MainWindowCommand{isApplicable(){return this.fetchConvertButton() instanceof HTMLButtonElement}fetchConvertButton(){return document.querySelector("button#dialog-show-convert-to-discussion")}fetchDialog(){return document.querySelector("#convert-to-discussion")}run(){let a=this.fetchConvertButton(),b=this.fetchDialog();if(a&&b){let c=()=>{setTimeout(()=>{b?.querySelector("#convert-to-discussion-category")?.focus()},0)};b.querySelector("include-fragment")?.addEventListener("load",c),b.open=!0,c()}}constructor(...a){super(...a),this.title="Convert issue to discussion\u2026",this.icon="comment-discussion-color-fg-muted"}}];var I=c(97165),J=c(76745);class OpenCodespace extends MainWindowCommand{isApplicable(){let a=this.fetchElements();return!!(a.codeModal&&a.codespacesForm&&a.newCodespacesButton&&a.codespacesTab)}run(){let{codeModal:a,codespacesTab:b,newCodespacesButton:c}=this.fetchElements();a&&b&&c&&(a.open=!0,b.click(),c instanceof HTMLButtonElement&&c.click())}fetchElements(){let a=document.querySelector(".js-create-codespaces-form-command"),b=a?.closest("details")||null,c=b?.querySelector('[data-tab="cloud"]')||null,d=a?.querySelector('summary[role="button"], button[type="submit"]')||null;return{codespacesForm:a,codeModal:b,codespacesTab:c,newCodespacesButton:d}}constructor(...a){super(...a),this.title="Open in new codespace",this.icon="codespaces-color-fg-muted",this.priority=11}}var K=c(98950);let L=[class CopyBranchName extends MainWindowCommand{isApplicable(){return this.fetchClipboardCopy() instanceof J.Z}fetchClipboardCopy(){return document.querySelector(".js-copy-branch")}async run(a){let b=this.fetchClipboardCopy();if(b instanceof J.Z){let c=b.value;try{await (0,K.z)(c),a.displayFlash("success","Branch name copied to clipboard!")}catch{a.displayFlash("error","Unable to copy branch name to clipboard!")}}}constructor(...a){super(...a),this.title="Copy current branch name",this.icon="copy-color-fg-muted"}},class EditPullRequestTitle extends EditIssueTitle{pullRequestBody(){return document.querySelector(".js-command-palette-pull-body")}isPullRequest(){return!!this.pullRequestBody()}isApplicable(){return this.fetchButton() instanceof HTMLButtonElement&&this.isPullRequest()}constructor(...a){super(...a),this.title="Edit pull request title"}},class EditPullRequestBody extends EditIssueBody{pullRequestBody(){return document.querySelector(".js-command-palette-pull-body")}isPullRequest(){return!!this.pullRequestBody()}isApplicable(){return this.isPullRequest()}constructor(...a){super(...a),this.title="Edit pull request body"}},class UpdateBranch extends MainWindowCommand{isApplicable(){return this.fetchButton() instanceof HTMLButtonElement}fetchButton(){return document.querySelector(".js-update-branch-form button")}run(){let a=this.fetchButton();a&&(a.scrollIntoView({behavior:"smooth",block:"center"}),a.click())}constructor(...a){super(...a),this.title="Update current branch",this.icon="sync-color-fg-muted"}},class ConvertToDraft extends MainWindowCommand{isApplicable(){return this.fetchButton() instanceof HTMLButtonElement}fetchButton(){return document.querySelector(".js-convert-to-draft")}run(){let a=this.fetchButton()?.closest("details");a&&(a.open=!0,setTimeout(()=>{a.querySelector(".js-convert-to-draft")?.focus()},0))}constructor(...a){super(...a),this.title="Convert to draft",this.icon="git-pull-request-draft-color-fg-muted"}},OpenCodespace],M=[class CloneCopyHttps extends MainWindowCommand{isApplicable(){return this.backendCommandsDisabled()&&this.fetchClipboardCopy() instanceof J.Z}fetchClipboardCopy(){return document.querySelector(".js-clone-url-http")}backendCommandsDisabled(){return!!window.commandPalette&&!window.commandPalette.hasAttribute("commands-path")}async run(a){let b=this.fetchClipboardCopy();if(b instanceof J.Z){let c=b.value;try{await (0,K.z)(c),a.displayFlash("success","Clone URL copied!")}catch{a.displayFlash("error","Clone URL couldn't be copied")}}}constructor(...a){super(...a),this.title="Clone repository: Copy HTTPS",this.icon="copy-color-fg-muted",this.priority=4}},class CloneCopySsh extends MainWindowCommand{isApplicable(){return this.backendCommandsDisabled()&&this.fetchClipboardCopy() instanceof J.Z}fetchClipboardCopy(){return document.querySelector(".js-clone-url-ssh")}backendCommandsDisabled(){return!!window.commandPalette&&!window.commandPalette.hasAttribute("commands-path")}async run(a){let b=this.fetchClipboardCopy();if(b instanceof J.Z){let c=b.value;try{await (0,K.z)(c),a.displayFlash("success","Clone URL copied!")}catch{a.displayFlash("error","Clone URL couldn't be copied")}}}constructor(...a){super(...a),this.title="Clone repository: Copy SSH",this.icon="copy-color-fg-muted",this.priority=3}},class CloneCopyCli extends MainWindowCommand{isApplicable(){return this.backendCommandsDisabled()&&this.fetchClipboardCopy() instanceof J.Z}fetchClipboardCopy(){return document.querySelector(".js-clone-url-gh-cli")}backendCommandsDisabled(){return!!window.commandPalette&&!window.commandPalette.hasAttribute("commands-path")}async run(a){let b=this.fetchClipboardCopy();if(b instanceof J.Z){let c=b.value;try{await (0,K.z)(c),a.displayFlash("success","Clone URL copied!")}catch{a.displayFlash("error","Clone URL couldn't be copied")}}}constructor(...a){super(...a),this.title="Clone repository: Copy GitHub CLI",this.icon="copy-color-fg-muted",this.priority=2}},class CopyPermalink extends MainWindowCommand{isApplicable(){return this.fetchPermalinkContainer() instanceof HTMLAnchorElement}fetchPermalinkContainer(){return document.querySelector(".js-permalink-shortcut")}async run(a){let b=this.fetchPermalinkContainer();if(b){let c=`${b.href}${window.location.hash}`;try{await (0,K.z)(c),a.displayFlash("success","Copied permalink!")}catch{a.displayFlash("error","Failed to copy permalink!")}}}constructor(...a){super(...a),this.title="Copy file permalink",this.icon="copy-color-fg-muted"}},OpenCodespace];class MainWindowCommandsProvider extends I.B{enabledFor(a){return">"===a.mode||!!["discussion","issue","pull_request"].includes(a.scope.type)}get hasCommands(){return!0}async fetch(a){this.items=[...H.map(a=>a.item()),...L.map(a=>a.item()),...M.map(a=>a.item()),...B.map(a=>a.item()),...F.map(a=>a.item())].filter(b=>b.isApplicable(a));let b=this.fuzzyFilter(this.items,a);return{results:b}}get debounce(){return 0}clearCache(){}constructor(...a){super(...a),this.itemsByType={},this.items=[],this.needsFetch=!0}}window.commandPalette&&window.commandPalette.registerProvider("main-window-commands-provider",new MainWindowCommandsProvider),window.addEventListener("command-palette-ready",()=>{window.commandPalette?.registerProvider("main-window-commands-provider",new MainWindowCommandsProvider)});var N=c(7667),O=c(64707),P=function(a,b,c,d){var e,f=arguments.length,g=f<3?b:null===d?d=Object.getOwnPropertyDescriptor(b,c):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)g=Reflect.decorate(a,b,c,d);else for(var h=a.length-1;h>=0;h--)(e=a[h])&&(g=(f<3?e(g):f>3?e(b,c,g):e(b,c))||g);return f>3&&g&&Object.defineProperty(b,c,g),g};let Q=((d=class CommandPaletteInputElement extends HTMLElement{static get observedAttributes(){return["input-value","typeahead","scope"]}setup(){this.classList.add("d-flex","flex-items-center","flex-nowrap","py-1","pl-3","pr-2","border-bottom"),this.input=this.querySelector("input.js-input"),this.overlayInput=this.querySelector("input.js-overlay-input"),this.scopeElement=this.querySelector("command-palette-scope"),this.searchIcon=this.querySelector(".js-search-icon"),this.spinner=this.querySelector(".js-spinner"),this.defaultScope=this.scope,this.hasAttribute("autofocus")&&this.input.focus(),0!==this.inputValue.length&&this._dispatchEvent("command-palette-input"),this.setupComplete=!0}connectedCallback(){this.setupComplete||this.setup(),this.inputValue=this.getAttribute("input-value")||"",this.typeahead=this.getAttribute("typeahead")||"",this.placeholder=this.getAttribute("placeholder")||"",this.connected=!0}attributeChangedCallback(a,b,c){this.input&&("typeahead"===a?this.typeahead=c:"input-value"===a&&(this.inputValue=c,this._dispatchEvent("command-palette-input")))}focus(){this.input.focus()}setRemovedTokenAndSelect(a){a&&(this.inputValue=a),this.focus(),this.input.select()}get scope(){return this.scopeElement.scope}set scope(a){this.scopeElement.scope=a,this.clearButton.hidden=!this.hasSomethingToClear()}hasScope(){return this.scopeElement.hasScope()}clearScope(){return this.scopeElement.clearScope()}removeToken(){return this.scopeElement.removeToken()}get placeholder(){return this.input.getAttribute("placeholder")||""}set placeholder(a){this.input.setAttribute("placeholder",a)}get typeaheadPlaceholderText(){return this.typeaheadPlaceholder.textContent||""}set typeaheadPlaceholderText(a){this.typeaheadPlaceholder.textContent=a}get inputValue(){return this.input?.value||""}set inputValue(a){this.input.value=a,this.typeahead=a,this.resetPlaceholder(),this.onInput()}get overlay(){return this.overlayInput.value}set overlay(a){this.overlayInput.value=a}get typeahead(){return this.typeaheadValue}set typeahead(a){if(this.typeaheadValue=this.overlay+a,this.mirror.textContent=this.inputValue,""===a)this.typeaheadText.textContent="";else if(this.placeholder="",this.typeaheadPlaceholderText="",this.valueStartsWithTypeahead){let b=this.inputValue.length-(this.overlay?1:0);this.typeaheadText.textContent=a.substring(b)}else this.typeaheadText.textContent=` \u2013 ${a}`}showModePlaceholder(a=""){this.typeaheadPlaceholderText=a}get valueStartsWithTypeahead(){return this.typeaheadValue.toLowerCase().startsWith(this.inputValue.toLowerCase())}get isCursorAtEnd(){return this.inputValue.length===this.input.selectionStart}set loading(a){this.spinner.hidden=!a,this.searchIcon.hidden=a}resetPlaceholder(){let a=this.inputValue.replace(this.overlay,"");a&&this.overlay&&(this.typeaheadPlaceholderText=""),this.placeholder=this.getAttribute("placeholder")||""}onInput(){this.resetPlaceholder(),this.connected&&(this.clearButton.hidden=!this.hasSomethingToClear(),this._dispatchEvent("command-palette-input"))}onClear(a){a instanceof KeyboardEvent&&"Enter"!==a.key||(this.inputValue="",this.input.focus(),this._dispatchEvent("command-palette-cleared"))}onKeydown(a){if(this.isSelectKeystroke(a.key)&&(this._dispatchEvent("command-palette-select"),a.stopImmediatePropagation(),a.preventDefault()),this.hasSomethingToClear()&&(0,N.o)(a)&&"Backspace"===a.key){this.onClear();return}if(0===this.input.selectionStart&&0===this.input.selectionEnd&&"Backspace"===a.key){this._dispatchEvent("command-palette-descope"),a.stopImmediatePropagation(),a.preventDefault();return}}hasSomethingToClear(){return this.scopeElement.hasScope()||this.inputValue.length>0}isSelectKeystroke(a){return!(0,O.c)("ACCESSIBLE_COMMAND_PALETTE")&&("Tab"===a||"ArrowRight"===a&&this.isCursorAtEnd)}textSelected(){return this.input.selectionStart!==this.input.selectionEnd}_dispatchEvent(a){let b=new CustomEvent(a,{cancelable:!0,detail:{typeahead:this.typeahead,value:this.inputValue}});return this.dispatchEvent(b)}constructor(...a){super(...a),this.setupComplete=!1,this.connected=!1}}).tagName="command-palette-input",d);P([e.fA],Q.prototype,"typeaheadPlaceholder",void 0),P([e.fA],Q.prototype,"typeaheadText",void 0),P([e.fA],Q.prototype,"mirror",void 0),P([e.fA],Q.prototype,"clearButton",void 0),Q=P([e.Ih],Q);var R=c(11793),S=c(76932),T=c(54697),U=c(64463),V=c(34855);function W(){return document.querySelector(N.Z.tagName)}window.customElements.get(N.Z.tagName)||window.customElements.define(N.Z.tagName,N.Z);function X(a,b){let c=(0,R.EL)(b);return!!c&&!!a&&(c=c.replace("\u02DA","k"),a.split(",").some(a=>c===a))}function Y(a){return Z(a)||$(a)}function Z(a){let b=a.target;return!!b&&null!==b.closest(".js-previewable-comment-form")}function $(a){let b=a.target;if(!b)return!1;let c=b.closest(".js-code-editor");if(!c)return!1;let d=(0,T.P)(c);if(!d)return!1;let e=d.editor;if(!e)return!1;let f=e.getMode().name;return"gfm"===f||"markdown"===f}function _(){let a=document.querySelector("#memex-root");return!!a}function aa(a){for(let b of document.querySelectorAll(".js-command-palette-dialog")){let c=b.querySelector(Q.tagName);if(!c)return;if(b.open)b.open=!1;else{ab(c,a);let d=b.querySelector(N.Z.tagName);d&&(d.previouslyActiveElement=document.activeElement),b.open=!0}}}function ab(a,b){let c=a.inputValue.startsWith(">");return b&&!c?(a.inputValue=`>${a.inputValue}`,!0):!b&&!!c&&(a.inputValue=a.inputValue.substring(1),!0)}document.addEventListener("keydown",function a(b){if(!b.code)return;let c=W();if(!c)return;let d=_(),e=X(c.platformActivationHotkey,b),f=X(c.platformSecondaryActivationHotkey,b),g=X(c.platformCommandModeHotkey,b),h=!Y(b)&&!d&&(e||g),i=!d&&(f||g),j=c.hasAttribute("memex-hotkey-enabled")&&d&&(e||f||g);(h||i||j)&&(aa(g),b.preventDefault(),b.stopPropagation())}),(0,U.N7)(".js-activate-command-palette",a=>{a.addEventListener("click",()=>{document.querySelector(".js-command-palette-dialog")?.setAttribute("open","true")})}),(0,U.N7)(".js-command-palette-dialog",a=>{if(!a)return;let b=window.performance.now(),c=W();c&&(a.addEventListener("toggle",()=>{a.open?c.activate():c.deactivate()}),c.addEventListener("command-palette-activated",a=>{a instanceof CustomEvent&&(a.detail.previouslyActivated||(0,V.b)({distributionKey:"COMMAND_PALETTE_FIRST_OPEN",distributionValue:window.performance.now()-b}))}))}),(0,U.N7)(".js-socket-channel.js-updatable-content",{subscribe:a=>(0,S.RB)(a,"socket:message",()=>{let a=W();a&&a.clearCommands(!1)})})},54697(a,b,c){c.d(b,{P:()=>f,g:()=>g});var d=c(59753);let e=new WeakMap;function f(a){return e.get(a)}async function g(a){return e.get(a)||h(await i(a,"codeEditor:ready"))}function h(a){if(!(a instanceof CustomEvent))throw Error("assert: event is not a CustomEvent");let b=a.detail.editor;if(!a.target)throw Error("assert: event.target is null");return e.set(a.target,b),b}function i(a,b){return new Promise(c=>{a.addEventListener(b,c,{once:!0})})}(0,d.on)("codeEditor:ready",".js-code-editor",h)},76237(a,b,c){c.d(b,{I3:()=>f,h5:()=>h,on:()=>i,yn:()=>j});var d=c(80721),e=c(67404);function f(){return g("dark")?"dark":g("light")?"light":void 0}function g(a){return window.matchMedia&&window.matchMedia(`(prefers-color-scheme: ${a})`).matches}function h(a){let b=document.querySelector("html[data-color-mode]");b&&b.setAttribute("data-color-mode",a)}function i(a,b){let c=document.querySelector("html[data-color-mode]");c&&c.setAttribute(`data-${b}-theme`,a)}function j(a){let b=document.querySelector("html[data-color-mode]");if(b)return b.getAttribute(`data-${a}-theme`)}(async()=>{await d.x,(0,e.d8)("preferred_color_mode",f())})()},67404(a,b,c){function d(a){return e(a)[0]}function e(a){let b=[];for(let c of f()){let[d,e]=c.trim().split("=");a===d&& void 0!==e&&b.push({key:d,value:e})}return b}function f(){try{return document.cookie.split(";")}catch{return[]}}function g(a,b,c=null,d=!1,e="lax"){let f=document.domain;if(null==f)throw Error("Unable to get document domain");f.endsWith(".github.com")&&(f="github.com");let g="https:"===location.protocol?"; secure":"",h=c?`; expires=${c}`:"";!1===d&&(f=`.${f}`);try{document.cookie=`${a}=${b}; path=/; domain=${f}${h}${g}; samesite=${e}`}catch{}}function h(a,b=!1){let c=document.domain;if(null==c)throw Error("Unable to get document domain");c.endsWith(".github.com")&&(c="github.com");let d=new Date().getTime(),e=new Date(d-1).toUTCString(),f="https:"===location.protocol?"; secure":"",g=`; expires=${e}`;!1===b&&(c=`.${c}`);try{document.cookie=`${a}=''; path=/; domain=${c}${g}${f}`}catch{}}c.d(b,{"$1":()=>e,d8:()=>g,ej:()=>d,kT:()=>h})},80721(a,b,c){c.d(b,{C:()=>e,x:()=>d});let d="interactive"===document.readyState||"complete"===document.readyState?Promise.resolve():new Promise(a=>{document.addEventListener("DOMContentLoaded",()=>{a()})}),e="complete"===document.readyState?Promise.resolve():new Promise(a=>{window.addEventListener("load",a)})},34855(a,b,c){c.d(b,{b:()=>f});var d=c(80721);let e=[];function f(a,b=!1){void 0===a.timestamp&&(a.timestamp=new Date().getTime()),a.loggedIn=j(),a.staff=k(),e.push(a),b?i():h()}let g=null;async function h(){await d.C,null==g&&(g=window.requestIdleCallback(i))}function i(){if(g=null,!e.length)return;let a=document.head?.querySelector('meta[name="browser-stats-url"]')?.content;if(!a)return;let b=JSON.stringify({stats:e});try{navigator.sendBeacon&&navigator.sendBeacon(a,b)}catch{}e=[]}function j(){return!!document.head?.querySelector('meta[name="user-login"]')?.content}function k(){return!!document.head?.querySelector('meta[name="user-staff"]')?.content}document.addEventListener("pagehide",i),document.addEventListener("visibilitychange",i)},76932(a,b,c){c.d(b,{RB:()=>d,qC:()=>e,w0:()=>Subscription});class Subscription{constructor(a){this.closed=!1,this.unsubscribe=()=>{a(),this.closed=!0}}}function d(a,b,c,d={capture:!1}){return a.addEventListener(b,c,d),new Subscription(()=>{a.removeEventListener(b,c,d)})}function e(...a){return new Subscription(()=>{for(let b of a)b.unsubscribe()})}}},a=>{var b=b=>a(a.s=b);a.O(0,["vendors-node_modules_selector-observer_dist_index_esm_js","vendors-node_modules_github_mini-throttle_dist_decorators_js-node_modules_github_command-pale-4090c9","vendors-node_modules_github_clipboard-copy-element_dist_index_esm_js-node_modules_delegated-e-b37f7d","app_assets_modules_github_command-palette_items_help-item_ts-app_assets_modules_github_comman-7e29fd"],()=>b(75133));var c=a.O()}])
//# sourceMappingURL=command-palette-5b12f3930bfa.js.map