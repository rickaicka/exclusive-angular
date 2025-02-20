import './polyfills.server.mjs';
import{c as j}from"./chunk-UNMGUXZ4.mjs";import{A as f,B as C,C as r,D as h,K as P,P as k,V as l,d as s,da as U,e as w,ea as R,fa as B,i as d,ia as T,j as a,y as n,z as i}from"./chunk-7NM2GFUM.mjs";import{a as I,b as N}from"./chunk-5XUXGTUW.mjs";var p=class e{static \u0275fac=function(t){return new(t||e)};static \u0275mod=a({type:e});static \u0275inj=s({imports:[l]})};var m=class e{static \u0275fac=function(t){return new(t||e)};static \u0275mod=a({type:e});static \u0275inj=s({imports:[l]})};var Q={"[class.ng-untouched]":"isUntouched","[class.ng-touched]":"isTouched","[class.ng-pristine]":"isPristine","[class.ng-dirty]":"isDirty","[class.ng-valid]":"isValid","[class.ng-invalid]":"isInvalid","[class.ng-pending]":"isPending"},He=N(I({},Q),{"[class.ng-submitted]":"isSubmitted"});var G=new w("CallSetDisabledState",{providedIn:"root",factory:()=>x}),x="always";var Z=new w("");var H=(()=>{class e{static{this.\u0275fac=function(u){return new(u||e)}}static{this.\u0275mod=a({type:e})}static{this.\u0275inj=s({})}}return e})();var S=(()=>{class e{static withConfig(t){return{ngModule:e,providers:[{provide:G,useValue:t.callSetDisabledState??x}]}}static{this.\u0275fac=function(u){return new(u||e)}}static{this.\u0275mod=a({type:e})}static{this.\u0275inj=s({imports:[H]})}}return e})(),O=(()=>{class e{static withConfig(t){return{ngModule:e,providers:[{provide:Z,useValue:t.warnOnNgModelWithFormControl??"always"},{provide:G,useValue:t.callSetDisabledState??x}]}}static{this.\u0275fac=function(u){return new(u||e)}}static{this.\u0275mod=a({type:e})}static{this.\u0275inj=s({imports:[H]})}}return e})();var g=class e{static \u0275fac=function(t){return new(t||e)};static \u0275mod=a({type:e});static \u0275inj=s({imports:[l]})};var _=class e{static \u0275fac=function(t){return new(t||e)};static \u0275mod=a({type:e});static \u0275inj=s({imports:[l]})};var v=class e{static \u0275fac=function(t){return new(t||e)};static \u0275mod=a({type:e});static \u0275inj=s({imports:[l]})};var y=class e{static \u0275fac=function(t){return new(t||e)};static \u0275mod=a({type:e});static \u0275inj=s({imports:[l]})};var K=[p,m,g,_,v,y];var V=class e{static \u0275fac=function(t){return new(t||e)};static \u0275mod=a({type:e});static \u0275inj=s({imports:[l,S,O,K,S,O,p,m,g,_,v,y]})};var b=class e{static \u0275fac=function(t){return new(t||e)};static \u0275cmp=d({type:e,selectors:[["app-top-header"]],standalone:!0,features:[h],decls:12,vars:0,consts:[[1,"top-header__container"],[1,"top-header__container__shop"],[1,"quicksand-m"],[1,"top-header__container__locale"],["value","en",1,"quicksand-m"],["value","pt",1,"quicksand-m"]],template:function(t,u){t&1&&(n(0,"section",0)(1,"div",1)(2,"p",2),r(3," Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%! "),i(),n(4,"a",2),r(5,"ShopNow"),i()(),n(6,"div",3)(7,"select")(8,"option",4),r(9,"English"),i(),n(10,"option",5),r(11,"Portuguese"),i()()()())},styles:[".top-header__container[_ngcontent-%COMP%]{background-color:var(--ex-pure-black);width:100vw;height:48px;display:inline-grid;grid-template-columns:[first] 85vw [line2] 15vw}.top-header__container__shop[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;color:var(--ex-gray-scale-400)}.top-header__container__shop[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{padding:0 5px}.top-header__container__locale[_ngcontent-%COMP%]{display:flex;justify-content:flex-start;align-items:center}"]})};var M=class e{constructor(){}searchValue="";wishListCount=0;cartCount=0;onSearchChange(){console.log(this.searchValue)}onChangeInput(o){this.searchValue=o.target.value}onWishListChange(o){this.wishListCount=o}onCartChange(o){this.cartCount=o}static \u0275fac=function(t){return new(t||e)};static \u0275cmp=d({type:e,selectors:[["app-header"]],standalone:!0,features:[h],decls:31,vars:0,consts:[[1,"header__container"],[1,"header__container__wrapper"],[1,"header__container__logo"],["routerLink","/",1,"header__container__logo__link"],["src","/Exclusive.svg","alt","Logo",1,"header__container__logo__link__img"],[1,"header__container__nav"],[1,"header__container__nav__list"],[1,"header__container__nav__list__item"],["routerLink","/",1,"header__container__nav__list__item__link","quicksand-m"],["routerLink","/account",1,"header__container__nav__list__item__link","quicksand-m"],["routerLink","/contact",1,"header__container__nav__list__item__link","quicksand-m"],["routerLink","/signup",1,"header__container__nav__list__item__link","quicksand-m"],[1,"header__container__products-container"],[1,"header__container__search"],["type","text","placeholder","Search",1,"header__container__search__input","unset-button",3,"blur"],[1,"header__container__search__button","unset-button",3,"click"],["src","/Search.svg","alt","Search",1,"header__container__search__button__img"],[1,"header__container__favorites"],[1,"header__container__favorites__button","unset-button"],["src","/WishList.svg","alt","Favorites",1,"header__container__favorites__button__img"],[1,"header__container__cart"],[1,"header__container__cart__button","unset-button"],["src","/Cart.svg","alt","Cart",1,"header__container__cart__button__img"]],template:function(t,u){t&1&&(n(0,"header",0)(1,"div",1)(2,"div",2)(3,"a",3),f(4,"img",4),i()(),n(5,"nav",5)(6,"ul",6)(7,"li",7)(8,"a",8),r(9,"Home"),i()(),n(10,"li",7)(11,"a",9),r(12,"About"),i()(),n(13,"li",7)(14,"a",10),r(15,"Contact"),i()(),n(16,"li",7)(17,"a",11),r(18,"Sign Up"),i()()()(),n(19,"div",12)(20,"div",13)(21,"input",14),C("blur",function(z){return u.onChangeInput(z)}),i()(),n(22,"div")(23,"button",15),C("click",function(){return u.onSearchChange()}),f(24,"img",16),i()(),n(25,"div",17)(26,"button",18),f(27,"img",19),i()(),n(28,"div",20)(29,"button",21),f(30,"img",22),i()()()()())},styles:[".header__container[_ngcontent-%COMP%]{width:100vw;height:64px;display:flex;justify-content:center;align-items:center;border-bottom:1px solid var(--ex-gray-scale-400)}.header__container__wrapper[_ngcontent-%COMP%]{width:80vw;display:flex;justify-content:space-between;align-items:center;padding:16px 0}.header__container__logo[_ngcontent-%COMP%]{height:100%;display:flex;justify-content:center;align-items:center}.header__container__nav[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;height:100%}.header__container__nav__list[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;width:367px}.header__container__nav__list__item__link[_ngcontent-%COMP%]{text-decoration:none;cursor:pointer;color:var(--ex-gray-scale-700)}.header__container__nav__list__item__link[_ngcontent-%COMP%]:hover{text-decoration:underline}.header__container__products-container[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center}.header__container__products-container[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{margin-right:10px}.header__container__products-container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%], .header__container__products-container[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{cursor:pointer}"]})};var F=class e{static \u0275fac=function(t){return new(t||e)};static \u0275cmp=d({type:e,selectors:[["app-sidebar-categories"]],standalone:!0,features:[h],decls:30,vars:0,consts:[[1,"sidebar-categories__container"],[1,"sidebar-categories__navigation"],[1,"sidebar-categories__navigation__list"],[1,"sidebar-categories__navigation__list__item"],[1,"quicksand-m"]],template:function(t,u){t&1&&(n(0,"section",0)(1,"nav",1)(2,"ul",2)(3,"li",3)(4,"a",4),r(5,"Woman\u2019s Fashion"),i()(),n(6,"li",3)(7,"a",4),r(8,"Men\u2019s Fashion"),i()(),n(9,"li",3)(10,"a",4),r(11,"Electronics"),i()(),n(12,"li",3)(13,"a",4),r(14,"Home & Lifestyle"),i()(),n(15,"li",3)(16,"a",4),r(17,"Medicine"),i()(),n(18,"li",3)(19,"a",4),r(20,"Sports & Outdoor"),i()(),n(21,"li",3)(22,"a",4),r(23,"Baby\u2019s & Toys"),i()(),n(24,"li",3)(25,"a",4),r(26,"Groceries & Pets"),i()(),n(27,"li",3)(28,"a",4),r(29,"Health & Beauty"),i()()()()())},styles:[".sidebar-categories__container[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:flex-start;align-items:flex-end;width:20vw;background:#fff;padding:0 20px 20px}.sidebar-categories__navigation[_ngcontent-%COMP%]{width:215px;border-right:1px solid var(--ex-gray-scale-400)}.sidebar-categories__navigation__list[_ngcontent-%COMP%]{padding-left:8px;padding-top:24px}.sidebar-categories__navigation__list__item[_ngcontent-%COMP%]{padding-bottom:16px;cursor:pointer}.sidebar-categories__navigation__list__item[_ngcontent-%COMP%]:hover{text-decoration:underline}"]})};var A=class e{static \u0275fac=function(t){return new(t||e)};static \u0275cmp=d({type:e,selectors:[["app-highlights-banner"]],standalone:!0,features:[h],decls:2,vars:0,template:function(t,u){t&1&&(n(0,"p"),r(1,"highlights-banner works!"),i())}})};var E=class e{title="exclusive-angular";static \u0275fac=function(t){return new(t||e)};static \u0275cmp=d({type:e,selectors:[["app-root"]],standalone:!0,features:[h],decls:10,vars:0,consts:[[1,"sidebar-highlights"]],template:function(t,u){t&1&&(n(0,"main"),f(1,"app-top-header")(2,"app-header"),n(3,"section")(4,"div",0),f(5,"app-sidebar-categories")(6,"app-highlights-banner"),i(),f(7,"router-outlet"),i(),n(8,"footer"),r(9," Teste "),i()())},dependencies:[V,B,b,M,F,A],styles:['@font-face{font-family:Quicksand;font-style:normal;font-weight:300 700;font-display:swap;src:url(https://fonts.gstatic.com/s/quicksand/v31/6xKtdSZaM9iE8KbpRA_hJFQNcOM.woff2) format("woff2");unicode-range:U+0102-0103,U+0110-0111,U+0128-0129,U+0168-0169,U+01A0-01A1,U+01AF-01B0,U+0300-0301,U+0303-0304,U+0308-0309,U+0323,U+0329,U+1EA0-1EF9,U+20AB}@font-face{font-family:Quicksand;font-style:normal;font-weight:300 700;font-display:swap;src:url(https://fonts.gstatic.com/s/quicksand/v31/6xKtdSZaM9iE8KbpRA_hJVQNcOM.woff2) format("woff2");unicode-range:U+0100-02BA,U+02BD-02C5,U+02C7-02CC,U+02CE-02D7,U+02DD-02FF,U+0304,U+0308,U+0329,U+1D00-1DBF,U+1E00-1E9F,U+1EF2-1EFF,U+2020,U+20A0-20AB,U+20AD-20C0,U+2113,U+2C60-2C7F,U+A720-A7FF}@font-face{font-family:Quicksand;font-style:normal;font-weight:300 700;font-display:swap;src:url(https://fonts.gstatic.com/s/quicksand/v31/6xKtdSZaM9iE8KbpRA_hK1QN.woff2) format("woff2");unicode-range:U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,U+0308,U+0329,U+2000-206F,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD}[_nghost-%COMP%]{--ex-pure-black: #000000;--ex-pure-white: #FFFFFF;--ex-gray-scale-800: #14142B;--ex-gray-scale-700: #4E4B66;--ex-gray-scale-600: #6E7191;--ex-gray-scale-500: #A0A3BD;--ex-gray-scale-400: #D9DBE9;--ex-gray-scale-300: #EFF0F6;--ex-gray-scale-200: #F7F7FC;--ex-gray-scale-100: #FCFCFC;--ex-neutral-scale-600: #1B253C;--ex-neutral-scale-500: #202C46;--ex-neutral-scale-400: #4D566B;--ex-neutral-scale-300: #9096A2;--ex-neutral-scale-200: #D1D4DB;--ex-neutral-scale-100: #E9EAEC;--ex-neutral-scale-50: #F4F4F6;--ex-blue-scale-0: #F6F6F6;--ex-blue-scale-700: #2240A4;--ex-blue-scale-600: #2A4EC7;--ex-blue-scale-500: #315CEA;--ex-blue-scale-400: #5A7DEE;--ex-blue-scale-300: #ADBEF7;--ex-blue-scale-200: #EAEFFD;--ex-blue-scale-100: #F5F7FE;--ex-purple-scale-600: #6436BF;--ex-purple-scale-500: #773FE2;--ex-purple-scale-400: #9265E8;--ex-purple-scale-300: #C9B2F3;--ex-purple-scale-200: #F1ECFC;--ex-purple-scale-100: #F8F5FE;--ex-magenta-scale-600: #C24764;--ex-magenta-scale-500: #E35275;--ex-magenta-scale-400: #E97591;--ex-magenta-scale-300: #F4BAC8;--ex-magenta-scale-200: #FCEEF1;--ex-magenta-scale-100: #FEF6F8;--ex-green-scale-600: #21AF52;--ex-green-scale-500: #27CE60;--ex-green-scale-400: #52D880;--ex-green-scale-300: #A9EBBF;--ex-green-scale-200: #E9FAEF;--ex-green-scale-100: #F4FDF7;--ex-red-scale-600: #B71F3B;--ex-red-scale-500: #DF2648;--ex-red-scale-400: #E9677F;--ex-red-scale-300: #F2A6B4;--ex-red-scale-200: #F9D2D9;--ex-red-scale-100: #FCE9EC;--ex-yellow-scale-600: #C77414;--ex-yellow-scale-500: #F89118;--ex-yellow-scale-400: #FAB261;--ex-yellow-scale-300: #FCCF9C;--ex-yellow-scale-200: #FDE7CD;--ex-yellow-scale-100: #FEF3E6}.raleway-sm[_ngcontent-%COMP%]{font-family:Raleway,sans-serif;font-optical-sizing:auto;font-weight:400;font-size:12px}.quicksand-sm[_ngcontent-%COMP%]{font-family:Quicksand,serif;font-optical-sizing:auto;font-weight:500;font-size:12px}.raleway-m[_ngcontent-%COMP%]{font-family:Raleway,sans-serif;font-optical-sizing:auto;font-weight:400;font-size:16px}.quicksand-m[_ngcontent-%COMP%]{font-family:Quicksand,serif;font-optical-sizing:auto;font-weight:500;font-size:16px}.raleway-r[_ngcontent-%COMP%]{font-family:Raleway,sans-serif;font-optical-sizing:auto;font-weight:400;font-size:18px}.quicksand-r[_ngcontent-%COMP%]{font-family:Quicksand,serif;font-optical-sizing:auto;font-weight:500;font-size:18px}.raleway-x[_ngcontent-%COMP%]{font-family:Raleway,sans-serif;font-optical-sizing:auto;font-weight:400;font-size:20px}.quicksand-x[_ngcontent-%COMP%]{font-family:Quicksand,serif;font-optical-sizing:auto;font-weight:500;font-size:20px}.raleway-xm[_ngcontent-%COMP%]{font-family:Raleway,sans-serif;font-optical-sizing:auto;font-weight:400;font-size:24px}.quicksand-xm[_ngcontent-%COMP%]{font-family:Quicksand,serif;font-optical-sizing:auto;font-weight:500;font-size:24px}.raleway-xxm[_ngcontent-%COMP%]{font-family:Raleway,sans-serif;font-optical-sizing:auto;font-weight:400;font-size:32px}.quicksand-xxm[_ngcontent-%COMP%]{font-family:Quicksand,serif;font-optical-sizing:auto;font-weight:500;font-size:32px}.unset-button[_ngcontent-%COMP%]{padding:unset;margin:unset;background:unset;border:unset;height:unset;width:unset}input[_ngcontent-%COMP%]:focus, textarea[_ngcontent-%COMP%]:focus, select[_ngcontent-%COMP%]:focus{outline:none;box-shadow:0 0;border:0 none}.sidebar-highlights[_ngcontent-%COMP%]{width:100vw;display:flex;justify-content:flex-start;align-items:center;min-height:316px}']})};var L=[{path:"",loadChildren:()=>import("./chunk-IRR5PSQG.mjs").then(e=>e.HomeModule)},{path:"account",loadChildren:()=>import("./chunk-6OQM3LOX.mjs").then(e=>e.AccountModule)}];var $={providers:[P({eventCoalescing:!0}),T(L),R()]};var te={providers:[j()]},W=k($,te);var ne=()=>U(E,W),At=ne;export{At as a};
