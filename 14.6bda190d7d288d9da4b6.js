(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{Dr6t:function(l,n,u){"use strict";u.r(n);var t=u("CcnG"),e=function(){return function(){}}(),s=u("pMnS"),c=u("Ip0R"),i=function(){function l(l,n){this.modalService=l,this.http=n}return l.prototype.ngOnInit=function(){var l=this;this.http.get("https://api.alphahuntsman.com/pricing").subscribe((function(n){l.specs_pricing_free=n.filter((function(l){return"Enthusiat"===l.access_type})),l.specs_pricing_personal=n.filter((function(l){return"Professional"===l.access_type})),l.specs_pricing_pro=n.filter((function(l){return"Commercial"===l.access_type})),l.specs_pricing_all=n}))},l.prototype.GetDetails=function(l,n,u){this.title=n,this.modal_content=this.specs_pricing_all.filter((function(l){return l.access_type===u&&l.feature_name===n}))[0].feature_details,this.modal_header_color=this.specs_pricing_all.filter((function(l){return l.access_type===u&&l.feature_name===n}))[0].feature_color,this.modalService.open(l,{size:"lg"}).result.then((function(l){}),(function(l){}))},l}(),a=u("4GxJ"),o=u("t/Na"),r=t.yb({encapsulation:0,styles:[[""]],data:{}});function b(l){return t.Ub(0,[(l()(),t.Ab(0,0,null,null,4,"div",[],null,null,null,null,null)),(l()(),t.Ab(1,0,null,null,3,"li",[["class","list-group-item cursor-pointer"]],null,null,null,null,null)),(l()(),t.Ab(2,0,null,null,1,"span",[],[[8,"className",0]],null,null,null,null)),(l()(),t.Ab(3,0,null,null,0,"i",[["class","ft-file-text text-white"]],null,null,null,null,null)),(l()(),t.Sb(4,null,[" "," "]))],null,(function(l,n){l(n,2,0,t.Cb(1,"badge  ",n.context.$implicit.feature_color," float-left mr-2")),l(n,4,0,n.context.$implicit.feature_name)}))}function d(l){return t.Ub(0,[(l()(),t.Ab(0,0,null,null,4,"div",[],null,null,null,null,null)),(l()(),t.Ab(1,0,null,null,3,"li",[["class","list-group-item cursor-pointer"]],null,null,null,null,null)),(l()(),t.Ab(2,0,null,null,1,"span",[],[[8,"className",0]],null,null,null,null)),(l()(),t.Ab(3,0,null,null,0,"i",[["class","ft-file-text text-white"]],null,null,null,null,null)),(l()(),t.Sb(4,null,[" "," "]))],null,(function(l,n){l(n,2,0,t.Cb(1,"badge  ",n.context.$implicit.feature_color," float-left mr-2")),l(n,4,0,n.context.$implicit.feature_name)}))}function f(l){return t.Ub(0,[(l()(),t.Ab(0,0,null,null,4,"div",[],null,null,null,null,null)),(l()(),t.Ab(1,0,null,null,3,"li",[["class","list-group-item cursor-pointer"]],null,null,null,null,null)),(l()(),t.Ab(2,0,null,null,1,"span",[],[[8,"className",0]],null,null,null,null)),(l()(),t.Ab(3,0,null,null,0,"i",[["class","ft-file-text text-white"]],null,null,null,null,null)),(l()(),t.Sb(4,null,[" "," "]))],null,(function(l,n){l(n,2,0,t.Cb(1,"badge  ",n.context.$implicit.feature_color," float-left mr-2")),l(n,4,0,n.context.$implicit.feature_name)}))}function p(l){return t.Ub(0,[(l()(),t.Ab(0,0,null,null,5,"div",[],[[8,"className",0]],null,null,null,null)),(l()(),t.Ab(1,0,null,null,1,"h4",[["class","modal-title white"]],null,null,null,null,null)),(l()(),t.Sb(2,null,["",""])),(l()(),t.Ab(3,0,null,null,2,"button",[["aria-label","Close"],["class","close white"],["type","button"]],null,[[null,"click"]],(function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.context.dismiss("Cross click")&&t),t}),null,null)),(l()(),t.Ab(4,0,null,null,1,"span",[["aria-hidden","true"]],null,null,null,null,null)),(l()(),t.Sb(-1,null,["×"])),(l()(),t.Ab(6,0,null,null,0,"div",[["class","modal-body"],["id","kbModal-body"]],[[8,"innerHTML",1]],null,null,null,null)),(l()(),t.Ab(7,0,null,null,2,"div",[["class","modal-footer"]],null,null,null,null,null)),(l()(),t.Ab(8,0,null,null,1,"button",[["type","button"]],[[8,"className",0]],[[null,"click"]],(function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.context.close("Close click")&&t),t}),null,null)),(l()(),t.Sb(-1,null,["Close"]))],null,(function(l,n){var u=n.component;l(n,0,0,t.Cb(1,"modal-header ",u.modal_header_color,"")),l(n,2,0,u.title),l(n,6,0,u.modal_content),l(n,8,0,t.Cb(1,"btn ",u.modal_header_color," btn-raised white"))}))}function A(l){return t.Ub(0,[(l()(),t.Ab(0,0,null,null,5,"div",[["class","row"]],null,null,null,null,null)),(l()(),t.Ab(1,0,null,null,4,"div",[["class","col-sm-12"]],null,null,null,null,null)),(l()(),t.Ab(2,0,null,null,1,"div",[["class","content-header"]],null,null,null,null,null)),(l()(),t.Sb(-1,null,["Supporting us "])),(l()(),t.Ab(4,0,null,null,1,"p",[["class","content-sub-header"]],null,null,null,null,null)),(l()(),t.Sb(-1,null,["If you find our analytics insightful and would like to support this project, please consider the options below. In returns, you'll receive access to a broader scope of insights and we will do your best to keep them up-to-date and relevant."])),(l()(),t.Ab(6,0,null,null,53,"section",[["id","kb"]],null,null,null,null,null)),(l()(),t.Ab(7,0,null,null,51,"div",[["class","row"]],null,null,null,null,null)),(l()(),t.Ab(8,0,null,null,16,"div",[["class","col-xl-4 col-lg-12"]],null,null,null,null,null)),(l()(),t.Ab(9,0,null,null,15,"div",[["class","card"]],null,null,null,null,null)),(l()(),t.Ab(10,0,null,null,5,"div",[["class","card-header"]],null,null,null,null,null)),(l()(),t.Ab(11,0,null,null,0,"i",[["class","ft-bell font-large-1 float-left mr-2"]],null,null,null,null,null)),(l()(),t.Ab(12,0,null,null,1,"h4",[["class","card-title mb-0"]],null,null,null,null,null)),(l()(),t.Sb(-1,null,["Enthusiat"])),(l()(),t.Ab(14,0,null,null,1,"p",[["class","card-text"]],null,null,null,null,null)),(l()(),t.Sb(-1,null,["Personal usecase"])),(l()(),t.Ab(16,0,null,null,4,"div",[["class","card-content"]],null,null,null,null,null)),(l()(),t.Ab(17,0,null,null,3,"div",[["class","card-body"]],null,null,null,null,null)),(l()(),t.Ab(18,0,null,null,2,"ul",[["class","list-group"]],null,null,null,null,null)),(l()(),t.pb(16777216,null,null,1,null,b)),t.zb(20,278528,null,0,c.k,[t.X,t.U,t.w],{ngForOf:[0,"ngForOf"]},null),(l()(),t.Ab(21,0,null,null,3,"div",[["class","card-footer"]],null,null,null,null,null)),(l()(),t.Ab(22,0,null,null,2,"fieldset",[["disabled",""]],null,null,null,null,null)),(l()(),t.Ab(23,0,null,null,1,"a",[["class","btn btn-primary mt-2 btn-lg btn-block btn-raised"],["disabled","disabled"],["href","javascript:void(0)"]],null,null,null,null,null)),(l()(),t.Sb(-1,null,["Soon"])),(l()(),t.Ab(25,0,null,null,16,"div",[["class","col-xl-4 col-lg-12"]],null,null,null,null,null)),(l()(),t.Ab(26,0,null,null,15,"div",[["class","card"]],null,null,null,null,null)),(l()(),t.Ab(27,0,null,null,5,"div",[["class","card-header"]],null,null,null,null,null)),(l()(),t.Ab(28,0,null,null,0,"i",[["class","ft-book font-large-1 float-left mr-2"]],null,null,null,null,null)),(l()(),t.Ab(29,0,null,null,1,"h4",[["class","card-title"]],null,null,null,null,null)),(l()(),t.Sb(-1,null,["Professional"])),(l()(),t.Ab(31,0,null,null,1,"p",[["class","card-text"]],null,null,null,null,null)),(l()(),t.Sb(-1,null,["Professional usecase"])),(l()(),t.Ab(33,0,null,null,4,"div",[["class","card-content"]],null,null,null,null,null)),(l()(),t.Ab(34,0,null,null,3,"div",[["class","card-body"]],null,null,null,null,null)),(l()(),t.Ab(35,0,null,null,2,"ul",[["class","list-group"]],null,null,null,null,null)),(l()(),t.pb(16777216,null,null,1,null,d)),t.zb(37,278528,null,0,c.k,[t.X,t.U,t.w],{ngForOf:[0,"ngForOf"]},null),(l()(),t.Ab(38,0,null,null,3,"div",[["class","card-footer"]],null,null,null,null,null)),(l()(),t.Ab(39,0,null,null,2,"fieldset",[["disabled",""]],null,null,null,null,null)),(l()(),t.Ab(40,0,null,null,1,"a",[["class","btn btn-danger btn-lg btn-block btn-raised"],["href","javascript:void(0)"]],null,null,null,null,null)),(l()(),t.Sb(-1,null,["Soon"])),(l()(),t.Ab(42,0,null,null,16,"div",[["class","col-xl-4 col-lg-12"]],null,null,null,null,null)),(l()(),t.Ab(43,0,null,null,15,"div",[["class","card"]],null,null,null,null,null)),(l()(),t.Ab(44,0,null,null,5,"div",[["class","card-header"]],null,null,null,null,null)),(l()(),t.Ab(45,0,null,null,0,"i",[["class","ft-file-text text-white font-large-1 float-left mr-2"]],null,null,null,null,null)),(l()(),t.Ab(46,0,null,null,1,"h4",[["class","card-title"]],null,null,null,null,null)),(l()(),t.Sb(-1,null,["Commercial"])),(l()(),t.Ab(48,0,null,null,1,"p",[["class","card-text"]],null,null,null,null,null)),(l()(),t.Sb(-1,null,["Commercial usecase"])),(l()(),t.Ab(50,0,null,null,4,"div",[["class","card-content"]],null,null,null,null,null)),(l()(),t.Ab(51,0,null,null,3,"div",[["class","card-body"]],null,null,null,null,null)),(l()(),t.Ab(52,0,null,null,2,"ul",[["class","list-group"]],null,null,null,null,null)),(l()(),t.pb(16777216,null,null,1,null,f)),t.zb(54,278528,null,0,c.k,[t.X,t.U,t.w],{ngForOf:[0,"ngForOf"]},null),(l()(),t.Ab(55,0,null,null,3,"div",[["class","card-footer"]],null,null,null,null,null)),(l()(),t.Ab(56,0,null,null,2,"fieldset",[["disabled",""]],null,null,null,null,null)),(l()(),t.Ab(57,0,null,null,1,"a",[["class","btn btn-secondary mt-2 btn-lg btn-block btn-raised"],["href","javascript:void(0)"]],null,null,null,null,null)),(l()(),t.Sb(-1,null,["Soon"])),(l()(),t.pb(0,[["content",2]],null,0,null,p))],(function(l,n){var u=n.component;l(n,20,0,u.specs_pricing_free),l(n,37,0,u.specs_pricing_personal),l(n,54,0,u.specs_pricing_pro)}),null)}function m(l){return t.Ub(0,[(l()(),t.Ab(0,0,null,null,1,"app-pricing",[],null,null,null,A,r)),t.zb(1,114688,null,0,i,[a.B,o.c],null,null)],(function(l,n){l(n,1,0)}),null)}var g=t.wb("app-pricing",i,m,{},{},[]),h=u("9AJC"),v=u("gIcY"),_=u("ZYCi"),I={title:"Pricing Page"},x=function(){return function(){}}(),y=u("j8Ch"),k=u("/fSM");u.d(n,"PricingModuleNgFactory",(function(){return S}));var S=t.xb(e,[],(function(l){return t.Hb([t.Ib(512,t.k,t.kb,[[8,[s.a,g,h.a,h.b,h.f,h.g,h.c,h.d,h.e]],[3,t.k],t.C]),t.Ib(4608,c.n,c.m,[t.y,[2,c.E]]),t.Ib(4608,v.y,v.y,[]),t.Ib(4608,a.B,a.B,[t.k,t.u,a.lb,a.C]),t.Ib(1073742336,c.b,c.b,[]),t.Ib(1073742336,_.p,_.p,[[2,_.u],[2,_.l]]),t.Ib(1073742336,x,x,[]),t.Ib(1073742336,v.x,v.x,[]),t.Ib(1073742336,v.j,v.j,[]),t.Ib(1073742336,y.a,y.a,[]),t.Ib(1073742336,k.a,k.a,[]),t.Ib(1073742336,a.c,a.c,[]),t.Ib(1073742336,a.f,a.f,[]),t.Ib(1073742336,a.g,a.g,[]),t.Ib(1073742336,a.k,a.k,[]),t.Ib(1073742336,a.m,a.m,[]),t.Ib(1073742336,a.s,a.s,[]),t.Ib(1073742336,a.x,a.x,[]),t.Ib(1073742336,a.D,a.D,[]),t.Ib(1073742336,a.H,a.H,[]),t.Ib(1073742336,a.K,a.K,[]),t.Ib(1073742336,a.N,a.N,[]),t.Ib(1073742336,a.Q,a.Q,[]),t.Ib(1073742336,a.T,a.T,[]),t.Ib(1073742336,a.X,a.X,[]),t.Ib(1073742336,a.Y,a.Y,[]),t.Ib(1073742336,a.Z,a.Z,[]),t.Ib(1073742336,a.E,a.E,[]),t.Ib(1073742336,e,e,[]),t.Ib(1024,_.j,(function(){return[[{path:"",component:i,data:I}]]}),[])])}))}}]);