import './polyfills.server.mjs';
import{c as q}from"./chunk-KRDC27EB.mjs";import{b as K}from"./chunk-ULR6YG3E.mjs";import{c as N,d as z,h as I,i as T,j as H,k as j,n as L,o as Q}from"./chunk-BRGQIUWT.mjs";import{Aa as O,Ba as D,Ea as k,K as b,L as w,La as i,Ma as a,Na as p,O as E,Pa as F,R as y,Ra as s,Sa as c,V as l,Y as M,ab as U,ia as A,kb as B,ob as R,pa as P,za as S}from"./chunk-SA4CZCDG.mjs";var u=class o{static \u0275fac=function(e){return new(e||o)};static \u0275cmp=l({type:o,selectors:[["app-top-header"]],standalone:!0,features:[c],decls:12,vars:0,consts:[[1,"top-header__container"],[1,"top-header__container__shop"],[1,"quicksand-m"],[1,"top-header__container__locale"],["value","en",1,"quicksand-m"],["value","pt",1,"quicksand-m"]],template:function(e,n){e&1&&(i(0,"section",0)(1,"div",1)(2,"p",2),s(3," Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%! "),a(),i(4,"a",2),s(5,"ShopNow"),a()(),i(6,"div",3)(7,"select")(8,"option",4),s(9,"English"),a(),i(10,"option",5),s(11,"Portuguese"),a()()()())},styles:[".top-header__container[_ngcontent-%COMP%]{background-color:var(--ex-pure-black);width:100vw;height:48px;display:inline-grid;grid-template-columns:[first] 85vw [line2] 15vw}.top-header__container__shop[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;color:var(--ex-gray-scale-400)}.top-header__container__shop[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{padding:0 5px}.top-header__container__locale[_ngcontent-%COMP%]{display:flex;justify-content:flex-start;align-items:center}"]})};var f=class o{constructor(){}searchValue="";wishListCount=0;cartCount=0;onSearchChange(){console.log(this.searchValue)}onChangeInput(t){this.searchValue=t.target.value}onWishListChange(t){this.wishListCount=t}onCartChange(t){this.cartCount=t}static \u0275fac=function(e){return new(e||o)};static \u0275cmp=l({type:o,selectors:[["app-header"]],standalone:!0,features:[c],decls:31,vars:0,consts:[[1,"header__container"],[1,"header__container__wrapper"],[1,"header__container__logo"],["routerLink","/",1,"header__container__logo__link"],["src","exclusive-angular/Exclusive.svg","alt","Logo",1,"header__container__logo__link__img"],[1,"header__container__nav"],[1,"header__container__nav__list"],[1,"header__container__nav__list__item"],["routerLink","/",1,"header__container__nav__list__item__link","quicksand-m"],["routerLink","/account",1,"header__container__nav__list__item__link","quicksand-m"],["routerLink","/contact",1,"header__container__nav__list__item__link","quicksand-m"],["routerLink","/signup",1,"header__container__nav__list__item__link","quicksand-m"],[1,"header__container__products-container"],[1,"header__container__search"],["type","text","placeholder","Search",1,"header__container__search__input","unset-button",3,"blur"],[1,"header__container__search__button","unset-button",3,"click"],["src","exclusive-angular/Search.svg","alt","Search",1,"header__container__search__button__img"],[1,"header__container__favorites"],[1,"header__container__favorites__button","unset-button"],["src","exclusive-angular/WishList.svg","alt","Favorites",1,"header__container__favorites__button__img"],[1,"header__container__cart"],[1,"header__container__cart__button","unset-button"],["src","exclusive-angular/Cart.svg","alt","Cart",1,"header__container__cart__button__img"]],template:function(e,n){e&1&&(i(0,"header",0)(1,"div",1)(2,"div",2)(3,"a",3),p(4,"img",4),a()(),i(5,"nav",5)(6,"ul",6)(7,"li",7)(8,"a",8),s(9,"Home"),a()(),i(10,"li",7)(11,"a",9),s(12,"About"),a()(),i(13,"li",7)(14,"a",10),s(15,"Contact"),a()(),i(16,"li",7)(17,"a",11),s(18,"Sign Up"),a()()()(),i(19,"div",12)(20,"div",13)(21,"input",14),F("blur",function(d){return n.onChangeInput(d)}),a()(),i(22,"div")(23,"button",15),F("click",function(){return n.onSearchChange()}),p(24,"img",16),a()(),i(25,"div",17)(26,"button",18),p(27,"img",19),a()(),i(28,"div",20)(29,"button",21),p(30,"img",22),a()()()()())},dependencies:[L],styles:[".header__container[_ngcontent-%COMP%]{width:100%;height:64px;display:flex;justify-content:center;align-items:center;border-bottom:1px solid var(--ex-gray-scale-400);margin:0 auto}.header__container__wrapper[_ngcontent-%COMP%]{width:1230px;display:flex;justify-content:space-between;align-items:center;padding:16px 0}.header__container__logo[_ngcontent-%COMP%]{height:100%;display:flex;justify-content:center;align-items:center}.header__container__nav[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;height:100%}.header__container__nav__list[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;width:367px}.header__container__nav__list__item__link[_ngcontent-%COMP%]{text-decoration:none;cursor:pointer;color:var(--ex-gray-scale-700)}.header__container__nav__list__item__link[_ngcontent-%COMP%]:hover{text-decoration:underline}.header__container__products-container[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center}.header__container__products-container[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{margin-right:10px}.header__container__products-container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%], .header__container__products-container[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{cursor:pointer}"]})};var h=class o{static \u0275fac=function(e){return new(e||o)};static \u0275cmp=l({type:o,selectors:[["app-sidebar-categories"]],standalone:!0,features:[c],decls:30,vars:0,consts:[[1,"sidebar-categories__container"],[1,"sidebar-categories__navigation"],[1,"sidebar-categories__navigation__list"],[1,"sidebar-categories__navigation__list__item"],[1,"quicksand-m"]],template:function(e,n){e&1&&(i(0,"section",0)(1,"nav",1)(2,"ul",2)(3,"li",3)(4,"a",4),s(5,"Woman\u2019s Fashion"),a()(),i(6,"li",3)(7,"a",4),s(8,"Men\u2019s Fashion"),a()(),i(9,"li",3)(10,"a",4),s(11,"Electronics"),a()(),i(12,"li",3)(13,"a",4),s(14,"Home & Lifestyle"),a()(),i(15,"li",3)(16,"a",4),s(17,"Medicine"),a()(),i(18,"li",3)(19,"a",4),s(20,"Sports & Outdoor"),a()(),i(21,"li",3)(22,"a",4),s(23,"Baby\u2019s & Toys"),a()(),i(24,"li",3)(25,"a",4),s(26,"Groceries & Pets"),a()(),i(27,"li",3)(28,"a",4),s(29,"Health & Beauty"),a()()()()())},styles:[".sidebar-categories__container[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:flex-start;align-items:flex-end;padding:0 20px 20px}.sidebar-categories__navigation[_ngcontent-%COMP%]{width:215px;border-right:1px solid var(--ex-gray-scale-400)}.sidebar-categories__navigation__list[_ngcontent-%COMP%]{padding-left:8px;padding-top:24px}.sidebar-categories__navigation__list__item[_ngcontent-%COMP%]{padding-bottom:16px;cursor:pointer}.sidebar-categories__navigation__list__item[_ngcontent-%COMP%]:hover{text-decoration:underline}"]})};var x=class o{static \u0275fac=function(e){return new(e||o)};static \u0275cmp=l({type:o,selectors:[["app-highlights-banner"]],standalone:!0,features:[c],decls:2,vars:0,template:function(e,n){e&1&&(i(0,"p"),s(1,"highlights-banner works!"),a())}})};var C=class o{title="exclusive-angular";static \u0275fac=function(e){return new(e||o)};static \u0275cmp=l({type:o,selectors:[["app-root"]],standalone:!0,features:[c],decls:10,vars:0,consts:[[1,"sidebar-highlights"]],template:function(e,n){e&1&&(i(0,"main"),p(1,"app-top-header")(2,"app-header"),i(3,"section")(4,"div",0),p(5,"app-sidebar-categories")(6,"app-highlights-banner"),a(),p(7,"router-outlet"),a(),i(8,"footer"),s(9," Teste "),a()())},dependencies:[K,j,u,f,h,x],styles:['@font-face{font-family:Quicksand;font-style:normal;font-weight:300 700;font-display:swap;src:url(https://fonts.gstatic.com/s/quicksand/v31/6xKtdSZaM9iE8KbpRA_hJFQNcOM.woff2) format("woff2");unicode-range:U+0102-0103,U+0110-0111,U+0128-0129,U+0168-0169,U+01A0-01A1,U+01AF-01B0,U+0300-0301,U+0303-0304,U+0308-0309,U+0323,U+0329,U+1EA0-1EF9,U+20AB}@font-face{font-family:Quicksand;font-style:normal;font-weight:300 700;font-display:swap;src:url(https://fonts.gstatic.com/s/quicksand/v31/6xKtdSZaM9iE8KbpRA_hJVQNcOM.woff2) format("woff2");unicode-range:U+0100-02BA,U+02BD-02C5,U+02C7-02CC,U+02CE-02D7,U+02DD-02FF,U+0304,U+0308,U+0329,U+1D00-1DBF,U+1E00-1E9F,U+1EF2-1EFF,U+2020,U+20A0-20AB,U+20AD-20C0,U+2113,U+2C60-2C7F,U+A720-A7FF}@font-face{font-family:Quicksand;font-style:normal;font-weight:300 700;font-display:swap;src:url(https://fonts.gstatic.com/s/quicksand/v31/6xKtdSZaM9iE8KbpRA_hK1QN.woff2) format("woff2");unicode-range:U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,U+0308,U+0329,U+2000-206F,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD}[_ngcontent-%COMP%]:root{--ex-pure-black: #000000;--ex-pure-white: #FFFFFF;--ex-gray-scale-800: #14142B;--ex-gray-scale-700: #4E4B66;--ex-gray-scale-600: #6E7191;--ex-gray-scale-500: #A0A3BD;--ex-gray-scale-400: #D9DBE9;--ex-gray-scale-300: #EFF0F6;--ex-gray-scale-200: #F7F7FC;--ex-gray-scale-100: #FCFCFC;--ex-neutral-scale-600: #1B253C;--ex-neutral-scale-500: #202C46;--ex-neutral-scale-400: #4D566B;--ex-neutral-scale-300: #9096A2;--ex-neutral-scale-200: #D1D4DB;--ex-neutral-scale-100: #E9EAEC;--ex-neutral-scale-50: #F4F4F6;--ex-blue-scale-0: #F6F6F6;--ex-blue-scale-700: #2240A4;--ex-blue-scale-600: #2A4EC7;--ex-blue-scale-500: #315CEA;--ex-blue-scale-400: #5A7DEE;--ex-blue-scale-300: #ADBEF7;--ex-blue-scale-200: #EAEFFD;--ex-blue-scale-100: #F5F7FE;--ex-purple-scale-600: #6436BF;--ex-purple-scale-500: #773FE2;--ex-purple-scale-400: #9265E8;--ex-purple-scale-300: #C9B2F3;--ex-purple-scale-200: #F1ECFC;--ex-purple-scale-100: #F8F5FE;--ex-magenta-scale-600: #C24764;--ex-magenta-scale-500: #E35275;--ex-magenta-scale-400: #E97591;--ex-magenta-scale-300: #F4BAC8;--ex-magenta-scale-200: #FCEEF1;--ex-magenta-scale-100: #FEF6F8;--ex-green-scale-600: #21AF52;--ex-green-scale-500: #27CE60;--ex-green-scale-400: #52D880;--ex-green-scale-300: #A9EBBF;--ex-green-scale-200: #E9FAEF;--ex-green-scale-100: #F4FDF7;--ex-red-scale-600: #B71F3B;--ex-red-scale-500: #DF2648;--ex-red-scale-400: #E9677F;--ex-red-scale-300: #F2A6B4;--ex-red-scale-200: #F9D2D9;--ex-red-scale-100: #FCE9EC;--ex-yellow-scale-600: #C77414;--ex-yellow-scale-500: #F89118;--ex-yellow-scale-400: #FAB261;--ex-yellow-scale-300: #FCCF9C;--ex-yellow-scale-200: #FDE7CD;--ex-yellow-scale-100: #FEF3E6}.raleway-sm[_ngcontent-%COMP%]{font-family:Raleway,sans-serif;font-optical-sizing:auto;font-weight:400;font-size:12px}.quicksand-sm[_ngcontent-%COMP%]{font-family:Quicksand,serif;font-optical-sizing:auto;font-weight:500;font-size:12px}.raleway-m[_ngcontent-%COMP%]{font-family:Raleway,sans-serif;font-optical-sizing:auto;font-weight:400;font-size:16px}.quicksand-m[_ngcontent-%COMP%]{font-family:Quicksand,serif;font-optical-sizing:auto;font-weight:500;font-size:16px}.raleway-r[_ngcontent-%COMP%]{font-family:Raleway,sans-serif;font-optical-sizing:auto;font-weight:400;font-size:18px}.quicksand-r[_ngcontent-%COMP%]{font-family:Quicksand,serif;font-optical-sizing:auto;font-weight:500;font-size:18px}.raleway-x[_ngcontent-%COMP%]{font-family:Raleway,sans-serif;font-optical-sizing:auto;font-weight:400;font-size:20px}.quicksand-x[_ngcontent-%COMP%]{font-family:Quicksand,serif;font-optical-sizing:auto;font-weight:500;font-size:20px}.raleway-xm[_ngcontent-%COMP%]{font-family:Raleway,sans-serif;font-optical-sizing:auto;font-weight:400;font-size:24px}.quicksand-xm[_ngcontent-%COMP%]{font-family:Quicksand,serif;font-optical-sizing:auto;font-weight:500;font-size:24px}.raleway-xxm[_ngcontent-%COMP%]{font-family:Raleway,sans-serif;font-optical-sizing:auto;font-weight:400;font-size:32px}.quicksand-xxm[_ngcontent-%COMP%]{font-family:Quicksand,serif;font-optical-sizing:auto;font-weight:500;font-size:32px}.unset-button[_ngcontent-%COMP%]{padding:unset;margin:unset;background:unset;border:unset;height:unset;width:unset}.bold-font[_ngcontent-%COMP%]{font-weight:700}.divider[_ngcontent-%COMP%]{margin:32px 0;width:100%;display:flex;justify-content:center;align-items:center;border-bottom:1px solid var(--ex-gray-scale-400)}input[_ngcontent-%COMP%]:focus, textarea[_ngcontent-%COMP%]:focus, select[_ngcontent-%COMP%]:focus{outline:none;box-shadow:0 0;border:0 none}*[_ngcontent-%COMP%]{overflow:hidden}.sidebar-highlights[_ngcontent-%COMP%]{width:1280px;display:flex;align-items:center;min-height:316px;justify-content:flex-start;margin:0 auto;gap:175px}']})};var V=[{path:"",loadChildren:()=>import("./chunk-SKVUL6MS.mjs").then(o=>o.HomeModule)},{path:"account",loadChildren:()=>import("./chunk-PIAR6NSW.mjs").then(o=>o.AccountModule)}];var te="@",ne=(()=>{class o{constructor(e,n,r,d,m){this.doc=e,this.delegate=n,this.zone=r,this.animationType=d,this.moduleImpl=m,this._rendererFactoryPromise=null,this.scheduler=y(O,{optional:!0}),this.loadingSchedulerFn=y(ie,{optional:!0})}ngOnDestroy(){this._engine?.flush()}loadImpl(){let e=()=>this.moduleImpl??import("./chunk-K2VOYYD3.mjs").then(r=>r),n;return this.loadingSchedulerFn?n=this.loadingSchedulerFn(e):n=e(),n.catch(r=>{throw new b(5300,!1)}).then(({\u0275createEngine:r,\u0275AnimationRendererFactory:d})=>{this._engine=r(this.animationType,this.doc);let m=new d(this.delegate,this._engine,this.zone);return this.delegate=m,m})}createRenderer(e,n){let r=this.delegate.createRenderer(e,n);if(r.\u0275type===0)return r;typeof r.throwOnSyntheticProps=="boolean"&&(r.throwOnSyntheticProps=!1);let d=new v(r);return n?.data?.animation&&!this._rendererFactoryPromise&&(this._rendererFactoryPromise=this.loadImpl()),this._rendererFactoryPromise?.then(m=>{let J=m.createRenderer(e,n);d.use(J),this.scheduler?.notify(10)}).catch(m=>{d.use(r)}),d}begin(){this.delegate.begin?.()}end(){this.delegate.end?.()}whenRenderingDone(){return this.delegate.whenRenderingDone?.()??Promise.resolve()}static{this.\u0275fac=function(n){S()}}static{this.\u0275prov=w({token:o,factory:o.\u0275fac})}}return o})(),v=class{constructor(t){this.delegate=t,this.replay=[],this.\u0275type=1}use(t){if(this.delegate=t,this.replay!==null){for(let e of this.replay)e(t);this.replay=null}}get data(){return this.delegate.data}destroy(){this.replay=null,this.delegate.destroy()}createElement(t,e){return this.delegate.createElement(t,e)}createComment(t){return this.delegate.createComment(t)}createText(t){return this.delegate.createText(t)}get destroyNode(){return this.delegate.destroyNode}appendChild(t,e){this.delegate.appendChild(t,e)}insertBefore(t,e,n,r){this.delegate.insertBefore(t,e,n,r)}removeChild(t,e,n){this.delegate.removeChild(t,e,n)}selectRootElement(t,e){return this.delegate.selectRootElement(t,e)}parentNode(t){return this.delegate.parentNode(t)}nextSibling(t){return this.delegate.nextSibling(t)}setAttribute(t,e,n,r){this.delegate.setAttribute(t,e,n,r)}removeAttribute(t,e,n){this.delegate.removeAttribute(t,e,n)}addClass(t,e){this.delegate.addClass(t,e)}removeClass(t,e){this.delegate.removeClass(t,e)}setStyle(t,e,n,r){this.delegate.setStyle(t,e,n,r)}removeStyle(t,e,n){this.delegate.removeStyle(t,e,n)}setProperty(t,e,n){this.shouldReplay(e)&&this.replay.push(r=>r.setProperty(t,e,n)),this.delegate.setProperty(t,e,n)}setValue(t,e){this.delegate.setValue(t,e)}listen(t,e,n){return this.shouldReplay(e)&&this.replay.push(r=>r.listen(t,e,n)),this.delegate.listen(t,e,n)}shouldReplay(t){return this.replay!==null&&t.startsWith(te)}},ie=new E("");function Z(o="animations"){return k("NgAsyncAnimations"),M([{provide:D,useFactory:(t,e,n)=>new ne(t,e,n,o),deps:[R,I,A]},{provide:P,useValue:o==="noop"?"NoopAnimations":"BrowserAnimations"}])}var W={providers:[U({eventCoalescing:!0}),Q(V),H(),Z(),N(z())]};var ae={providers:[q()]},G=B(W,ae);var oe=()=>T(C,G),ke=oe;export{ke as a};
