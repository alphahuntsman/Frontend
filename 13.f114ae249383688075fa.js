(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{RnkL:function(l,n,u){"use strict";u.r(n);var t=u("CcnG"),e=u("rjUY"),o=u("V7cH"),r=u("7Eps");function a(){return[e,o,r]}var i=function(){return function(){}}(),b=u("pMnS"),c=u("Ip0R"),s=u("tBg5"),d=u("4GxJ"),p=u("jGGy"),w=function(){function l(l,n,u,t){var e=this;this.modalService=l,this.http=n,this.router=u,this.authenticationService=t,this.countryClassSelected="US",this.selectedScenario="Baseline",this.lineOptions={title:{text:null},rangeSelector:{enabled:!1},yAxis:{title:{text:"Annualized Change & Uncertainty"}},tooltip:{crosshairs:!0,shared:!0,pointFormat:"{series.name}: {point.y:.2f}"},legend:{enabled:!1},series:[{name:"Growth",color:"#000000",data:[]}]},this.flagTable=!1,this.flaglineChart=!1,this.http.get("https://api.alphahuntsman.com/benedetto/scenarios").subscribe((function(l){e.scenarioList=new Array;for(var n=0,u=l;n<u.length;n++)e.scenarioList.push(u[n]);e.scenarioList=e.scenarioList.sort(),e.selectedScenario=e.scenarioList[0],e.pullCountries()}))}return l.prototype.countryClassSelectorDrop=function(l){this.countryClassSelected=l,this.pullStats()},l.prototype.scenarioSelectorDrop=function(l){this.selectedScenario=l,this.pullCountries()},l.prototype.pullCountries=function(){var l=this;this.http.get("https://api.alphahuntsman.com/benedetto/countries").subscribe((function(n){l.countryList=new Array;for(var u=0,t=n;u<t.length;u++)l.countryList.push(t[u].replace("_"," "));l.countryList=l.countryList.sort(),l.countryClassSelected=l.countryList[0],l.pullStats()}))},l.prototype.pullStats=function(){var l=this;this.http.get("https://api.alphahuntsman.com/benedetto/stats?country="+this.countryClassSelected+"&scenario="+this.selectedScenario).subscribe((function(n){l.tableData=n,l.flagTable=!0}))},l.prototype.GetDetails=function(l,n,u,t){var e=this;this.http.get("https://api.alphahuntsman.com/benedetto/series?country="+this.countryClassSelected+"&scenario="+this.selectedScenario+"&category="+u+"&measure="+n+"&sector="+t).subscribe((function(o){e.flaglineChart=!1;for(var r=[],a=0;a<o[0].series_values.length;a++){var i=new Date(o[0].series_index[a]).getTime(),b=Number(o[0].series_values[a]);r.push([i,Math.round(1e3*b)/1e3])}e.lineOptions.series[0].data=r,e.lineChart=new s.e(e.lineOptions),e.flaglineChart=!0,window.dispatchEvent(new Event("resize")),e.title=n+" "+u+" "+t,e.modalService.open(l,{windowClass:"atlasIndexPlot"}).result.then((function(l){}),(function(l){}))}))},l.prototype.ngOnInit=function(){},l}(),y=u("t/Na"),m=u("ZYCi"),h=t.yb({encapsulation:0,styles:[[".atlasIndexPlot[_ngcontent-%COMP%]   .highcharts-container[_ngcontent-%COMP%]{width:100%!important;height:100%!important}"]],data:{}});function f(l){return t.Ub(0,[(l()(),t.Ab(0,0,null,null,1,"button",[["class","dropdown-item"]],null,[[null,"click"]],(function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.countryClassSelectorDrop(l.context.$implicit)&&t),t}),null,null)),(l()(),t.Sb(1,null,["",""]))],null,(function(l,n){l(n,1,0,n.context.$implicit)}))}function A(l){return t.Ub(0,[(l()(),t.Ab(0,0,null,null,1,"button",[["class","dropdown-item"]],null,[[null,"click"]],(function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.scenarioSelectorDrop(l.context.$implicit)&&t),t}),null,null)),(l()(),t.Sb(1,null,["",""]))],null,(function(l,n){l(n,1,0,n.context.$implicit)}))}function v(l){return t.Ub(0,[(l()(),t.Ab(0,0,null,null,18,"tr",[],null,null,null,null,null)),(l()(),t.Ab(1,0,null,null,1,"th",[],null,null,null,null,null)),(l()(),t.Sb(-1,null,["Measure"])),(l()(),t.Ab(3,0,null,null,1,"th",[],null,null,null,null,null)),(l()(),t.Sb(-1,null,["Category"])),(l()(),t.Ab(5,0,null,null,1,"th",[],null,null,null,null,null)),(l()(),t.Sb(-1,null,["Sector"])),(l()(),t.Ab(7,0,null,null,1,"th",[],null,null,null,null,null)),(l()(),t.Sb(8,null,["Month: ",""])),(l()(),t.Ab(9,0,null,null,1,"th",[],null,null,null,null,null)),(l()(),t.Sb(10,null,["",""])),(l()(),t.Ab(11,0,null,null,1,"th",[],null,null,null,null,null)),(l()(),t.Sb(12,null,["",""])),(l()(),t.Ab(13,0,null,null,1,"th",[],null,null,null,null,null)),(l()(),t.Sb(14,null,["",""])),(l()(),t.Ab(15,0,null,null,1,"th",[],null,null,null,null,null)),(l()(),t.Sb(16,null,["",""])),(l()(),t.Ab(17,0,null,null,1,"th",[],null,null,null,null,null)),(l()(),t.Sb(18,null,["",""]))],null,(function(l,n){var u=n.component;l(n,8,0,u.tableData[0].stamp_tm2),l(n,10,0,u.tableData[0].stamp_tm1),l(n,12,0,u.tableData[0].stamp_tm0),l(n,14,0,u.tableData[0].stamp_tp1),l(n,16,0,u.tableData[0].stamp_tp2),l(n,18,0,u.tableData[0].stamp_tp3)}))}function g(l){return t.Ub(0,[(l()(),t.Ab(0,0,null,null,25,"tr",[],null,null,null,null,null)),(l()(),t.Ab(1,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),t.Sb(2,null,["",""])),(l()(),t.Ab(3,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),t.Sb(4,null,["",""])),(l()(),t.Ab(5,0,null,null,2,"td",[],null,null,null,null,null)),(l()(),t.Ab(6,0,null,null,1,"a",[["class","card-link primary"]],null,[[null,"click"]],(function(l,n,u){var e=!0;return"click"===n&&(e=!1!==l.component.GetDetails(t.Kb(l.parent.parent,56),l.context.$implicit.measure,l.context.$implicit.category,l.context.$implicit.sector)&&e),e}),null,null)),(l()(),t.Sb(7,null,["",""])),(l()(),t.Ab(8,0,null,null,2,"td",[],null,null,null,null,null)),(l()(),t.Sb(9,null,["",""])),t.Ob(10,2),(l()(),t.Ab(11,0,null,null,2,"td",[],null,null,null,null,null)),(l()(),t.Sb(12,null,["",""])),t.Ob(13,2),(l()(),t.Ab(14,0,null,null,2,"td",[],null,null,null,null,null)),(l()(),t.Sb(15,null,["",""])),t.Ob(16,2),(l()(),t.Ab(17,0,null,null,2,"td",[],null,null,null,null,null)),(l()(),t.Sb(18,null,["",""])),t.Ob(19,2),(l()(),t.Ab(20,0,null,null,2,"td",[],null,null,null,null,null)),(l()(),t.Sb(21,null,["",""])),t.Ob(22,2),(l()(),t.Ab(23,0,null,null,2,"td",[],null,null,null,null,null)),(l()(),t.Sb(24,null,["",""])),t.Ob(25,2)],null,(function(l,n){l(n,2,0,n.context.$implicit.measure),l(n,4,0,n.context.$implicit.category),l(n,7,0,n.context.$implicit.sector);var u=t.Tb(n,9,0,l(n,10,0,t.Kb(n.parent.parent,0),n.context.$implicit.value_tm2,"1.2-2"));l(n,9,0,u);var e=t.Tb(n,12,0,l(n,13,0,t.Kb(n.parent.parent,0),n.context.$implicit.value_tm1,"1.2-2"));l(n,12,0,e);var o=t.Tb(n,15,0,l(n,16,0,t.Kb(n.parent.parent,0),n.context.$implicit.value_tm0,"1.2-2"));l(n,15,0,o);var r=t.Tb(n,18,0,l(n,19,0,t.Kb(n.parent.parent,0),n.context.$implicit.value_tp1,"1.2-2"));l(n,18,0,r);var a=t.Tb(n,21,0,l(n,22,0,t.Kb(n.parent.parent,0),n.context.$implicit.value_tp2,"1.2-2"));l(n,21,0,a);var i=t.Tb(n,24,0,l(n,25,0,t.Kb(n.parent.parent,0),n.context.$implicit.value_tp3,"1.2-2"));l(n,24,0,i)}))}function k(l){return t.Ub(0,[(l()(),t.Ab(0,0,null,null,7,"div",[["class","card-body"]],null,null,null,null,null)),(l()(),t.Ab(1,0,null,null,6,"table",[["class","table table-sm"]],null,null,null,null,null)),(l()(),t.Ab(2,0,null,null,2,"thead",[],null,null,null,null,null)),(l()(),t.pb(16777216,null,null,1,null,v)),t.zb(4,16384,null,0,c.m,[t.X,t.U],{ngIf:[0,"ngIf"]},null),(l()(),t.Ab(5,0,null,null,2,"tbody",[],null,null,null,null,null)),(l()(),t.pb(16777216,null,null,1,null,g)),t.zb(7,278528,null,0,c.l,[t.X,t.U,t.w],{ngForOf:[0,"ngForOf"]},null)],(function(l,n){var u=n.component;l(n,4,0,u.tableData[0].measure),l(n,7,0,u.tableData)}),null)}function S(l){return t.Ub(0,[(l()(),t.Ab(0,0,null,null,1,"div",[],null,null,null,null,null)),t.zb(1,737280,null,0,s.g,[t.n],{chart:[0,"chart"]},null)],(function(l,n){l(n,1,0,n.component.lineChart)}),null)}function K(l){return t.Ub(0,[(l()(),t.Ab(0,0,null,null,5,"div",[["class","modal-header bg-primary"]],null,null,null,null,null)),(l()(),t.Ab(1,0,null,null,1,"h4",[["class","modal-title white"]],null,null,null,null,null)),(l()(),t.Sb(2,null,["",""])),(l()(),t.Ab(3,0,null,null,2,"button",[["aria-label","Close"],["class","close white"],["type","button"]],null,[[null,"click"]],(function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.context.dismiss("Cross click")&&t),t}),null,null)),(l()(),t.Ab(4,0,null,null,1,"span",[["aria-hidden","true"]],null,null,null,null,null)),(l()(),t.Sb(-1,null,["×"])),(l()(),t.Ab(6,0,null,null,2,"div",[["class","modal-body"],["id","kbModal-body"]],null,null,null,null,null)),(l()(),t.pb(16777216,null,null,1,null,S)),t.zb(8,16384,null,0,c.m,[t.X,t.U],{ngIf:[0,"ngIf"]},null),(l()(),t.Ab(9,0,null,null,2,"div",[["class","modal-footer"]],null,null,null,null,null)),(l()(),t.Ab(10,0,null,null,1,"button",[["class","btn btn-primary btn-raised"],["type","button"]],null,[[null,"click"]],(function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.context.close("Close click")&&t),t}),null,null)),(l()(),t.Sb(-1,null,["Close"]))],(function(l,n){l(n,8,0,n.component.flaglineChart)}),(function(l,n){l(n,2,0,n.component.title)}))}function D(l){return t.Ub(0,[t.Mb(0,c.e,[t.y]),(l()(),t.Ab(1,0,null,null,4,"div",[["class","row"]],null,null,null,null,null)),(l()(),t.Ab(2,0,null,null,3,"div",[["class","col-sm-12"]],null,null,null,null,null)),(l()(),t.Ab(3,0,null,null,1,"div",[["class","content-header"]],null,null,null,null,null)),(l()(),t.Sb(-1,null,["Sectoral performance YoY"])),(l()(),t.Ab(5,0,null,null,0,"p",[["class","content-sub-header"]],null,null,null,null,null)),(l()(),t.Ab(6,0,null,null,50,"div",[["class","row"]],null,null,null,null,null)),(l()(),t.Ab(7,0,null,null,49,"div",[["class","col-sm-12"]],null,null,null,null,null)),(l()(),t.Ab(8,0,null,null,48,"div",[["class","card"]],null,null,null,null,null)),(l()(),t.Ab(9,0,null,null,35,"div",[["class","card-header"]],null,null,null,null,null)),(l()(),t.Ab(10,0,null,null,34,"div",[["class","row justify-content-between"]],null,null,null,null,null)),(l()(),t.Ab(11,0,null,null,16,"div",[["class","col-2"]],null,null,null,null,null)),(l()(),t.Ab(12,0,null,null,15,"div",[["ngbDropdown",""]],[[2,"show",null]],null,null,null,null)),t.zb(13,737280,null,3,d.t,[t.h,d.v,c.c,t.E,t.n,t.L],null,null),t.Qb(335544320,1,{_menu:0}),t.Qb(335544320,2,{_menuElement:0}),t.Qb(335544320,3,{_anchor:0}),(l()(),t.Ab(17,0,null,null,1,"h4",[["class","primary type-info"]],null,null,null,null,null)),(l()(),t.Sb(-1,null,["Country "])),(l()(),t.Ab(19,0,null,null,3,"button",[["aria-haspopup","true"],["class","btn btn-outline-primary mr-1 dropdown-toggle"],["id","dropdownAsset"],["ngbDropdownToggle",""]],[[1,"aria-expanded",0]],[[null,"click"],[null,"keydown.ArrowUp"],[null,"keydown.ArrowDown"],[null,"keydown.Home"],[null,"keydown.End"]],(function(l,n,u){var e=!0;return"click"===n&&(e=!1!==t.Kb(l,20).dropdown.toggle()&&e),"keydown.ArrowUp"===n&&(e=!1!==t.Kb(l,20).dropdown.onKeyDown(u)&&e),"keydown.ArrowDown"===n&&(e=!1!==t.Kb(l,20).dropdown.onKeyDown(u)&&e),"keydown.Home"===n&&(e=!1!==t.Kb(l,20).dropdown.onKeyDown(u)&&e),"keydown.End"===n&&(e=!1!==t.Kb(l,20).dropdown.onKeyDown(u)&&e),e}),null,null)),t.zb(20,16384,null,0,d.y,[d.t,t.n],null,null),t.Pb(2048,[[3,4]],d.u,null,[d.y]),(l()(),t.Sb(22,null,["",""])),(l()(),t.Ab(23,0,[[2,0]],null,4,"div",[["aria-labelledby","dropdownCountry"],["ngbDropdownMenu",""]],[[2,"dropdown-menu",null],[2,"show",null],[1,"x-placement",0]],[[null,"keydown.ArrowUp"],[null,"keydown.ArrowDown"],[null,"keydown.Home"],[null,"keydown.End"],[null,"keydown.Enter"],[null,"keydown.Space"]],(function(l,n,u){var e=!0;return"keydown.ArrowUp"===n&&(e=!1!==t.Kb(l,24).dropdown.onKeyDown(u)&&e),"keydown.ArrowDown"===n&&(e=!1!==t.Kb(l,24).dropdown.onKeyDown(u)&&e),"keydown.Home"===n&&(e=!1!==t.Kb(l,24).dropdown.onKeyDown(u)&&e),"keydown.End"===n&&(e=!1!==t.Kb(l,24).dropdown.onKeyDown(u)&&e),"keydown.Enter"===n&&(e=!1!==t.Kb(l,24).dropdown.onKeyDown(u)&&e),"keydown.Space"===n&&(e=!1!==t.Kb(l,24).dropdown.onKeyDown(u)&&e),e}),null,null)),t.zb(24,16384,[[1,4]],1,d.w,[d.t],null,null),t.Qb(603979776,4,{menuItems:1}),(l()(),t.pb(16777216,null,null,1,null,f)),t.zb(27,278528,null,0,c.l,[t.X,t.U,t.w],{ngForOf:[0,"ngForOf"]},null),(l()(),t.Ab(28,0,null,null,16,"div",[["class","col-2"]],null,null,null,null,null)),(l()(),t.Ab(29,0,null,null,15,"div",[["ngbDropdown",""]],[[2,"show",null]],null,null,null,null)),t.zb(30,737280,null,3,d.t,[t.h,d.v,c.c,t.E,t.n,t.L],null,null),t.Qb(335544320,5,{_menu:0}),t.Qb(335544320,6,{_menuElement:0}),t.Qb(335544320,7,{_anchor:0}),(l()(),t.Ab(34,0,null,null,1,"h4",[["class","danger type-info"]],null,null,null,null,null)),(l()(),t.Sb(-1,null,["Scenario "])),(l()(),t.Ab(36,0,null,null,3,"button",[["aria-haspopup","true"],["class","btn btn-outline-danger mr-1 dropdown-toggle"],["id","dropdownSector"],["ngbDropdownToggle",""]],[[1,"aria-expanded",0]],[[null,"click"],[null,"keydown.ArrowUp"],[null,"keydown.ArrowDown"],[null,"keydown.Home"],[null,"keydown.End"]],(function(l,n,u){var e=!0;return"click"===n&&(e=!1!==t.Kb(l,37).dropdown.toggle()&&e),"keydown.ArrowUp"===n&&(e=!1!==t.Kb(l,37).dropdown.onKeyDown(u)&&e),"keydown.ArrowDown"===n&&(e=!1!==t.Kb(l,37).dropdown.onKeyDown(u)&&e),"keydown.Home"===n&&(e=!1!==t.Kb(l,37).dropdown.onKeyDown(u)&&e),"keydown.End"===n&&(e=!1!==t.Kb(l,37).dropdown.onKeyDown(u)&&e),e}),null,null)),t.zb(37,16384,null,0,d.y,[d.t,t.n],null,null),t.Pb(2048,[[7,4]],d.u,null,[d.y]),(l()(),t.Sb(39,null,["",""])),(l()(),t.Ab(40,0,[[6,0]],null,4,"div",[["aria-labelledby","dropdownScenario"],["ngbDropdownMenu",""]],[[2,"dropdown-menu",null],[2,"show",null],[1,"x-placement",0]],[[null,"keydown.ArrowUp"],[null,"keydown.ArrowDown"],[null,"keydown.Home"],[null,"keydown.End"],[null,"keydown.Enter"],[null,"keydown.Space"]],(function(l,n,u){var e=!0;return"keydown.ArrowUp"===n&&(e=!1!==t.Kb(l,41).dropdown.onKeyDown(u)&&e),"keydown.ArrowDown"===n&&(e=!1!==t.Kb(l,41).dropdown.onKeyDown(u)&&e),"keydown.Home"===n&&(e=!1!==t.Kb(l,41).dropdown.onKeyDown(u)&&e),"keydown.End"===n&&(e=!1!==t.Kb(l,41).dropdown.onKeyDown(u)&&e),"keydown.Enter"===n&&(e=!1!==t.Kb(l,41).dropdown.onKeyDown(u)&&e),"keydown.Space"===n&&(e=!1!==t.Kb(l,41).dropdown.onKeyDown(u)&&e),e}),null,null)),t.zb(41,16384,[[5,4]],1,d.w,[d.t],null,null),t.Qb(603979776,8,{menuItems:1}),(l()(),t.pb(16777216,null,null,1,null,A)),t.zb(44,278528,null,0,c.l,[t.X,t.U,t.w],{ngForOf:[0,"ngForOf"]},null),(l()(),t.Ab(45,0,null,null,10,"div",[["class","card-content"]],null,null,null,null,null)),(l()(),t.Ab(46,0,null,null,4,"div",[["class","card-header"]],null,null,null,null,null)),(l()(),t.Sb(-1,null,[" Model version "])),(l()(),t.Ab(48,0,null,null,1,"span",[["class","primary text-bold-500"]],null,null,null,null,null)),(l()(),t.Sb(-1,null,["0.01"])),(l()(),t.Sb(-1,null,[". "])),(l()(),t.Ab(51,0,null,null,4,"div",[["class","card-body"]],null,null,null,null,null)),(l()(),t.Ab(52,0,null,null,3,"div",[["class","row"]],null,null,null,null,null)),(l()(),t.Ab(53,0,null,null,2,"div",[["class","col-12"]],null,null,null,null,null)),(l()(),t.pb(16777216,null,null,1,null,k)),t.zb(55,16384,null,0,c.m,[t.X,t.U],{ngIf:[0,"ngIf"]},null),(l()(),t.pb(0,[["content",2]],null,0,null,K))],(function(l,n){var u=n.component;l(n,13,0),l(n,27,0,u.countryList),l(n,30,0),l(n,44,0,u.scenarioList),l(n,55,0,u.flagTable)}),(function(l,n){var u=n.component;l(n,12,0,t.Kb(n,13).isOpen()),l(n,19,0,t.Kb(n,20).dropdown.isOpen()),l(n,22,0,u.countryClassSelected),l(n,23,0,!0,t.Kb(n,24).dropdown.isOpen(),t.Kb(n,24).placement),l(n,29,0,t.Kb(n,30).isOpen()),l(n,36,0,t.Kb(n,37).dropdown.isOpen()),l(n,39,0,u.selectedScenario),l(n,40,0,!0,t.Kb(n,41).dropdown.isOpen(),t.Kb(n,41).placement)}))}function I(l){return t.Ub(0,[(l()(),t.Ab(0,0,null,null,1,"app-benedetto",[],null,null,null,D,h)),t.zb(1,114688,null,0,w,[d.B,y.c,m.l,p.a],null,null)],(function(l,n){l(n,1,0)}),null)}var x=t.wb("app-benedetto",w,I,{},{},[]),C=u("9AJC"),U=u("gIcY"),O={title:"Benedetto Page"},_=function(){return function(){}}(),E=u("j8Ch"),z=u("/fSM");u.d(n,"BenedettoModuleNgFactory",(function(){return $}));var $=t.xb(i,[],(function(l){return t.Hb([t.Ib(512,t.k,t.kb,[[8,[b.a,x,C.a,C.b,C.f,C.g,C.c,C.d,C.e]],[3,t.k],t.C]),t.Ib(4608,c.o,c.n,[t.y,[2,c.F]]),t.Ib(4608,U.y,U.y,[]),t.Ib(4608,d.B,d.B,[t.k,t.u,d.lb,d.C]),t.Ib(4608,U.e,U.e,[]),t.Ib(1073742336,c.b,c.b,[]),t.Ib(1073742336,m.p,m.p,[[2,m.u],[2,m.l]]),t.Ib(1073742336,_,_,[]),t.Ib(1073742336,U.x,U.x,[]),t.Ib(1073742336,U.j,U.j,[]),t.Ib(1073742336,E.a,E.a,[]),t.Ib(1073742336,z.a,z.a,[]),t.Ib(1073742336,d.c,d.c,[]),t.Ib(1073742336,d.f,d.f,[]),t.Ib(1073742336,d.g,d.g,[]),t.Ib(1073742336,d.k,d.k,[]),t.Ib(1073742336,d.m,d.m,[]),t.Ib(1073742336,d.s,d.s,[]),t.Ib(1073742336,d.x,d.x,[]),t.Ib(1073742336,d.D,d.D,[]),t.Ib(1073742336,d.H,d.H,[]),t.Ib(1073742336,d.K,d.K,[]),t.Ib(1073742336,d.N,d.N,[]),t.Ib(1073742336,d.Q,d.Q,[]),t.Ib(1073742336,d.T,d.T,[]),t.Ib(1073742336,d.X,d.X,[]),t.Ib(1073742336,d.Y,d.Y,[]),t.Ib(1073742336,d.Z,d.Z,[]),t.Ib(1073742336,d.E,d.E,[]),t.Ib(1024,s.c,a,[]),t.Ib(512,s.f,s.f,[s.c]),t.Ib(1073742336,s.b,s.b,[s.f]),t.Ib(1073742336,U.t,U.t,[]),t.Ib(1073742336,i,i,[]),t.Ib(1024,m.j,(function(){return[[{path:"",component:w,data:O}]]}),[])])}))}}]);