import{a as I,c as T}from"./chunk-QWUQKP5U.js";import{a as B,b as k,c as R,d as N,f as z}from"./chunk-ZU2NIWWO.js";import{Ea as o,Fa as s,Ga as m,Ia as r,Ja as c,K as _,L as E,O as w,R as y,Ra as P,V as l,Y as b,_a as O,ga as A,na as v,ta as M,ua as D,va as U,ya as S}from"./chunk-3WW24TCW.js";var H=[{path:"",loadChildren:()=>import("./chunk-ARPRR2FL.js").then(i=>i.HomeModule)},{path:"account",loadChildren:()=>import("./chunk-RTJWMBZX.js").then(i=>i.AccountModule)}];var K="@",Z=(()=>{class i{constructor(e,n,a,d,p){this.doc=e,this.delegate=n,this.zone=a,this.animationType=d,this.moduleImpl=p,this._rendererFactoryPromise=null,this.scheduler=y(D,{optional:!0}),this.loadingSchedulerFn=y(L,{optional:!0})}ngOnDestroy(){this._engine?.flush()}loadImpl(){let e=()=>this.moduleImpl??import("./chunk-BM5KHX5T.js").then(a=>a),n;return this.loadingSchedulerFn?n=this.loadingSchedulerFn(e):n=e(),n.catch(a=>{throw new _(5300,!1)}).then(({\u0275createEngine:a,\u0275AnimationRendererFactory:d})=>{this._engine=a(this.animationType,this.doc);let p=new d(this.delegate,this._engine,this.zone);return this.delegate=p,p})}createRenderer(e,n){let a=this.delegate.createRenderer(e,n);if(a.\u0275type===0)return a;typeof a.throwOnSyntheticProps=="boolean"&&(a.throwOnSyntheticProps=!1);let d=new C(a);return n?.data?.animation&&!this._rendererFactoryPromise&&(this._rendererFactoryPromise=this.loadImpl()),this._rendererFactoryPromise?.then(p=>{let j=p.createRenderer(e,n);d.use(j),this.scheduler?.notify(10)}).catch(p=>{d.use(a)}),d}begin(){this.delegate.begin?.()}end(){this.delegate.end?.()}whenRenderingDone(){return this.delegate.whenRenderingDone?.()??Promise.resolve()}static{this.\u0275fac=function(n){M()}}static{this.\u0275prov=E({token:i,factory:i.\u0275fac})}}return i})(),C=class{constructor(t){this.delegate=t,this.replay=[],this.\u0275type=1}use(t){if(this.delegate=t,this.replay!==null){for(let e of this.replay)e(t);this.replay=null}}get data(){return this.delegate.data}destroy(){this.replay=null,this.delegate.destroy()}createElement(t,e){return this.delegate.createElement(t,e)}createComment(t){return this.delegate.createComment(t)}createText(t){return this.delegate.createText(t)}get destroyNode(){return this.delegate.destroyNode}appendChild(t,e){this.delegate.appendChild(t,e)}insertBefore(t,e,n,a){this.delegate.insertBefore(t,e,n,a)}removeChild(t,e,n){this.delegate.removeChild(t,e,n)}selectRootElement(t,e){return this.delegate.selectRootElement(t,e)}parentNode(t){return this.delegate.parentNode(t)}nextSibling(t){return this.delegate.nextSibling(t)}setAttribute(t,e,n,a){this.delegate.setAttribute(t,e,n,a)}removeAttribute(t,e,n){this.delegate.removeAttribute(t,e,n)}addClass(t,e){this.delegate.addClass(t,e)}removeClass(t,e){this.delegate.removeClass(t,e)}setStyle(t,e,n,a){this.delegate.setStyle(t,e,n,a)}removeStyle(t,e,n){this.delegate.removeStyle(t,e,n)}setProperty(t,e,n){this.shouldReplay(e)&&this.replay.push(a=>a.setProperty(t,e,n)),this.delegate.setProperty(t,e,n)}setValue(t,e){this.delegate.setValue(t,e)}listen(t,e,n){return this.shouldReplay(e)&&this.replay.push(a=>a.listen(t,e,n)),this.delegate.listen(t,e,n)}shouldReplay(t){return this.replay!==null&&t.startsWith(K)}},L=new w("");function q(i="animations"){return S("NgAsyncAnimations"),b([{provide:U,useFactory:(t,e,n)=>new Z(t,e,n,i),deps:[O,B,A]},{provide:v,useValue:i==="noop"?"NoopAnimations":"BrowserAnimations"}])}var Q={providers:[P({eventCoalescing:!0}),z(H),R(),q()]};var g=class i{static \u0275fac=function(e){return new(e||i)};static \u0275cmp=l({type:i,selectors:[["app-top-header"]],standalone:!0,features:[c],decls:12,vars:0,consts:[[1,"top-header__container"],[1,"top-header__container__shop"],[1,"quicksand-m"],[1,"top-header__container__locale"],["value","en",1,"quicksand-m"],["value","pt",1,"quicksand-m"]],template:function(e,n){e&1&&(o(0,"section",0)(1,"div",1)(2,"p",2),r(3," Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%! "),s(),o(4,"a",2),r(5,"ShopNow"),s()(),o(6,"div",3)(7,"select")(8,"option",4),r(9,"English"),s(),o(10,"option",5),r(11,"Portuguese"),s()()()())},styles:[".top-header__container[_ngcontent-%COMP%]{background-color:var(--ex-pure-black);width:100vw;height:48px;display:inline-grid;grid-template-columns:[first] 85vw [line2] 15vw}.top-header__container__shop[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;color:var(--ex-gray-scale-400)}.top-header__container__shop[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{padding:0 5px}.top-header__container__locale[_ngcontent-%COMP%]{display:flex;justify-content:flex-start;align-items:center}"]})};var u=class i{static \u0275fac=function(e){return new(e||i)};static \u0275cmp=l({type:i,selectors:[["app-sidebar-categories"]],standalone:!0,features:[c],decls:30,vars:0,consts:[[1,"sidebar-categories__container"],[1,"sidebar-categories__navigation"],[1,"sidebar-categories__navigation__list"],[1,"sidebar-categories__navigation__list__item"],[1,"quicksand-m"]],template:function(e,n){e&1&&(o(0,"section",0)(1,"nav",1)(2,"ul",2)(3,"li",3)(4,"a",4),r(5,"Woman\u2019s Fashion"),s()(),o(6,"li",3)(7,"a",4),r(8,"Men\u2019s Fashion"),s()(),o(9,"li",3)(10,"a",4),r(11,"Electronics"),s()(),o(12,"li",3)(13,"a",4),r(14,"Home & Lifestyle"),s()(),o(15,"li",3)(16,"a",4),r(17,"Medicine"),s()(),o(18,"li",3)(19,"a",4),r(20,"Sports & Outdoor"),s()(),o(21,"li",3)(22,"a",4),r(23,"Baby\u2019s & Toys"),s()(),o(24,"li",3)(25,"a",4),r(26,"Groceries & Pets"),s()(),o(27,"li",3)(28,"a",4),r(29,"Health & Beauty"),s()()()()())},styles:[".sidebar-categories__container[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:flex-start;align-items:flex-end;width:295px;background:#fff;padding:0 20px 20px}.sidebar-categories__navigation[_ngcontent-%COMP%]{width:215px;border-right:1px solid var(--ex-gray-scale-400)}.sidebar-categories__navigation__list[_ngcontent-%COMP%]{padding-left:8px;padding-top:24px}.sidebar-categories__navigation__list__item[_ngcontent-%COMP%]{padding-bottom:16px;cursor:pointer}.sidebar-categories__navigation__list__item[_ngcontent-%COMP%]:hover{text-decoration:underline}"]})};var h=class i{static \u0275fac=function(e){return new(e||i)};static \u0275cmp=l({type:i,selectors:[["app-highlights-banner"]],standalone:!0,features:[c],decls:2,vars:0,template:function(e,n){e&1&&(o(0,"p"),r(1,"highlights-banner works!"),s())}})};var x=class i{title="exclusive-angular";static \u0275fac=function(e){return new(e||i)};static \u0275cmp=l({type:i,selectors:[["app-root"]],standalone:!0,features:[c],decls:10,vars:0,consts:[[1,"sidebar-highlights"]],template:function(e,n){e&1&&(o(0,"main"),m(1,"app-top-header")(2,"app-header"),o(3,"section")(4,"div",0),m(5,"app-sidebar-categories")(6,"app-highlights-banner"),s(),m(7,"router-outlet"),s(),o(8,"footer"),r(9," Teste "),s()())},dependencies:[T,N,g,I,u,h],styles:['@font-face{font-family:Quicksand;font-style:normal;font-weight:300 700;font-display:swap;src:url(https://fonts.gstatic.com/s/quicksand/v31/6xKtdSZaM9iE8KbpRA_hJFQNcOM.woff2) format("woff2");unicode-range:U+0102-0103,U+0110-0111,U+0128-0129,U+0168-0169,U+01A0-01A1,U+01AF-01B0,U+0300-0301,U+0303-0304,U+0308-0309,U+0323,U+0329,U+1EA0-1EF9,U+20AB}@font-face{font-family:Quicksand;font-style:normal;font-weight:300 700;font-display:swap;src:url(https://fonts.gstatic.com/s/quicksand/v31/6xKtdSZaM9iE8KbpRA_hJVQNcOM.woff2) format("woff2");unicode-range:U+0100-02BA,U+02BD-02C5,U+02C7-02CC,U+02CE-02D7,U+02DD-02FF,U+0304,U+0308,U+0329,U+1D00-1DBF,U+1E00-1E9F,U+1EF2-1EFF,U+2020,U+20A0-20AB,U+20AD-20C0,U+2113,U+2C60-2C7F,U+A720-A7FF}@font-face{font-family:Quicksand;font-style:normal;font-weight:300 700;font-display:swap;src:url(https://fonts.gstatic.com/s/quicksand/v31/6xKtdSZaM9iE8KbpRA_hK1QN.woff2) format("woff2");unicode-range:U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,U+0308,U+0329,U+2000-206F,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD}[_nghost-%COMP%]{--ex-pure-black: #000000;--ex-pure-white: #FFFFFF;--ex-gray-scale-800: #14142B;--ex-gray-scale-700: #4E4B66;--ex-gray-scale-600: #6E7191;--ex-gray-scale-500: #A0A3BD;--ex-gray-scale-400: #D9DBE9;--ex-gray-scale-300: #EFF0F6;--ex-gray-scale-200: #F7F7FC;--ex-gray-scale-100: #FCFCFC;--ex-neutral-scale-600: #1B253C;--ex-neutral-scale-500: #202C46;--ex-neutral-scale-400: #4D566B;--ex-neutral-scale-300: #9096A2;--ex-neutral-scale-200: #D1D4DB;--ex-neutral-scale-100: #E9EAEC;--ex-neutral-scale-50: #F4F4F6;--ex-blue-scale-0: #F6F6F6;--ex-blue-scale-700: #2240A4;--ex-blue-scale-600: #2A4EC7;--ex-blue-scale-500: #315CEA;--ex-blue-scale-400: #5A7DEE;--ex-blue-scale-300: #ADBEF7;--ex-blue-scale-200: #EAEFFD;--ex-blue-scale-100: #F5F7FE;--ex-purple-scale-600: #6436BF;--ex-purple-scale-500: #773FE2;--ex-purple-scale-400: #9265E8;--ex-purple-scale-300: #C9B2F3;--ex-purple-scale-200: #F1ECFC;--ex-purple-scale-100: #F8F5FE;--ex-magenta-scale-600: #C24764;--ex-magenta-scale-500: #E35275;--ex-magenta-scale-400: #E97591;--ex-magenta-scale-300: #F4BAC8;--ex-magenta-scale-200: #FCEEF1;--ex-magenta-scale-100: #FEF6F8;--ex-green-scale-600: #21AF52;--ex-green-scale-500: #27CE60;--ex-green-scale-400: #52D880;--ex-green-scale-300: #A9EBBF;--ex-green-scale-200: #E9FAEF;--ex-green-scale-100: #F4FDF7;--ex-red-scale-600: #B71F3B;--ex-red-scale-500: #DF2648;--ex-red-scale-400: #E9677F;--ex-red-scale-300: #F2A6B4;--ex-red-scale-200: #F9D2D9;--ex-red-scale-100: #FCE9EC;--ex-yellow-scale-600: #C77414;--ex-yellow-scale-500: #F89118;--ex-yellow-scale-400: #FAB261;--ex-yellow-scale-300: #FCCF9C;--ex-yellow-scale-200: #FDE7CD;--ex-yellow-scale-100: #FEF3E6}.raleway-sm[_ngcontent-%COMP%]{font-family:Raleway,sans-serif;font-optical-sizing:auto;font-weight:400;font-size:12px}.quicksand-sm[_ngcontent-%COMP%]{font-family:Quicksand,serif;font-optical-sizing:auto;font-weight:500;font-size:12px}.raleway-m[_ngcontent-%COMP%]{font-family:Raleway,sans-serif;font-optical-sizing:auto;font-weight:400;font-size:16px}.quicksand-m[_ngcontent-%COMP%]{font-family:Quicksand,serif;font-optical-sizing:auto;font-weight:500;font-size:16px}.raleway-r[_ngcontent-%COMP%]{font-family:Raleway,sans-serif;font-optical-sizing:auto;font-weight:400;font-size:18px}.quicksand-r[_ngcontent-%COMP%]{font-family:Quicksand,serif;font-optical-sizing:auto;font-weight:500;font-size:18px}.raleway-x[_ngcontent-%COMP%]{font-family:Raleway,sans-serif;font-optical-sizing:auto;font-weight:400;font-size:20px}.quicksand-x[_ngcontent-%COMP%]{font-family:Quicksand,serif;font-optical-sizing:auto;font-weight:500;font-size:20px}.raleway-xm[_ngcontent-%COMP%]{font-family:Raleway,sans-serif;font-optical-sizing:auto;font-weight:400;font-size:24px}.quicksand-xm[_ngcontent-%COMP%]{font-family:Quicksand,serif;font-optical-sizing:auto;font-weight:500;font-size:24px}.raleway-xxm[_ngcontent-%COMP%]{font-family:Raleway,sans-serif;font-optical-sizing:auto;font-weight:400;font-size:32px}.quicksand-xxm[_ngcontent-%COMP%]{font-family:Quicksand,serif;font-optical-sizing:auto;font-weight:500;font-size:32px}.unset-button[_ngcontent-%COMP%]{padding:unset;margin:unset;background:unset;border:unset;height:unset;width:unset}input[_ngcontent-%COMP%]:focus, textarea[_ngcontent-%COMP%]:focus, select[_ngcontent-%COMP%]:focus{outline:none;box-shadow:0 0;border:0 none}.sidebar-highlights[_ngcontent-%COMP%]{width:1170px;display:flex;align-items:center;min-height:316px;justify-content:flex-start;margin:0 auto;gap:175px}']})};k(x,Q).catch(i=>console.error(i));
