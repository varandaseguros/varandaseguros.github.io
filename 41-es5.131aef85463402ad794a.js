function _classCallCheck(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}function _defineProperties(n,e){for(var t=0;t<e.length;t++){var r=e[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(n,r.key,r)}}function _createClass(n,e,t){return e&&_defineProperties(n.prototype,e),t&&_defineProperties(n,t),n}(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{"LPH/":function(n,e,t){"use strict";t.r(e);var r=t("ofXK"),i=t("YUcS"),o=t("Wp6s"),l=t("bTqV"),u=t("1HfZ"),a=t("U5zq"),c=t("hAur"),d=t("tyNb"),h=t("fXoL"),s=t("lhbH"),f=t("znSr"),p=t("XiUz"),b=t("1/XJ"),C=t("nqF9"),m=t("5Bqk");function g(n,e){1&n&&h.Nb(0,"app-product-card",5),2&n&&h.ec("product",e.$implicit)}var M,P,y=[{path:"",component:(M=function(){function n(e){_classCallCheck(this,n),this.insuranceProductService=e,this.title="Seguros Pessoais"}return _createClass(n,[{key:"ngOnInit",value:function(){}}]),n}(),M.\u0275fac=function(n){return new(n||M)(h.Mb(s.a))},M.\u0275cmp=h.Gb({type:M,selectors:[["app-personal-insurance"]],decls:6,vars:2,consts:[["ngClass.xs","main-container-xs","fxLayout","column","fxLayoutAlign","start stretch","role","main",1,"main-container"],[3,"title"],["fxFlex","","fxLayout","column","fxLayoutAlign","center center"],[1,"grid-container"],[3,"product",4,"ngFor","ngForOf"],[3,"product"]],template:function(n,e){1&n&&(h.Pb(0,"main",0),h.Nb(1,"app-header",1),h.Pb(2,"article",2),h.Pb(3,"div",3),h.nc(4,g,1,1,"app-product-card",4),h.Ob(),h.Ob(),h.Nb(5,"app-footer"),h.Ob()),2&n&&(h.Bb(1),h.ec("title",e.title),h.Bb(3),h.ec("ngForOf",e.insuranceProductService.getAllByType("personal")))},directives:[f.a,p.d,p.c,b.a,p.a,r.j,C.a,m.a],styles:[".main-container[_ngcontent-%COMP%]{background-color:#eee;min-height:calc(100vh - 64px)}.main-container-xs[_ngcontent-%COMP%]{min-height:calc(100vh - 56px)}.grid-container[_ngcontent-%COMP%]{display:grid;grid-gap:20px 20px;grid-template-columns:repeat(auto-fit,256px);-webkit-box-pack:center;justify-content:center;width:100%;max-width:1152px;margin:0 auto;padding:20px 0}.grid-container[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]{text-align:center}"]}),M)},{path:"car",loadChildren:function(){return Promise.all([t.e(0),t.e(37)]).then(t.bind(null,"Mmw5")).then((function(n){return n.CarModule}))}},{path:"moto",loadChildren:function(){return Promise.all([t.e(0),t.e(40)]).then(t.bind(null,"IqrK")).then((function(n){return n.MotoModule}))}},{path:"life",loadChildren:function(){return Promise.all([t.e(0),t.e(39)]).then(t.bind(null,"94Sg")).then((function(n){return n.LifeModule}))}},{path:"pension",loadChildren:function(){return t.e(32).then(t.bind(null,"5Kuh")).then((function(n){return n.PensionModule}))}},{path:"devices",loadChildren:function(){return Promise.all([t.e(0),t.e(38)]).then(t.bind(null,"Uw96")).then((function(n){return n.DevicesModule}))}},{path:"health",loadChildren:function(){return t.e(30).then(t.bind(null,"f32V")).then((function(n){return n.HealthModule}))}},{path:"travel",loadChildren:function(){return Promise.all([t.e(0),t.e(44)]).then(t.bind(null,"w3D5")).then((function(n){return n.TravelModule}))}},{path:"residential",loadChildren:function(){return Promise.all([t.e(0),t.e(43)]).then(t.bind(null,"6Foi")).then((function(n){return n.ResidentialModule}))}},{path:"alarm",loadChildren:function(){return Promise.all([t.e(0),t.e(36)]).then(t.bind(null,"ljtq")).then((function(n){return n.AlarmModule}))}},{path:"civil",loadChildren:function(){return t.e(26).then(t.bind(null,"/iw9")).then((function(n){return n.CivilModule}))}},{path:"pets",loadChildren:function(){return Promise.all([t.e(0),t.e(42)]).then(t.bind(null,"UMYJ")).then((function(n){return n.PetsModule}))}},{path:"accidents",loadChildren:function(){return Promise.all([t.e(0),t.e(35)]).then(t.bind(null,"X0sL")).then((function(n){return n.AccidentsModule}))}},{path:"capitalization",loadChildren:function(){return t.e(25).then(t.bind(null,"XX+S")).then((function(n){return n.CapitalizationModule}))}},{path:"rent",loadChildren:function(){return t.e(33).then(t.bind(null,"qiyd")).then((function(n){return n.RentModule}))}},{path:"micro",loadChildren:function(){return t.e(31).then(t.bind(null,"4oDQ")).then((function(n){return n.MicroModule}))}},{path:"drone",loadChildren:function(){return t.e(27).then(t.bind(null,"O8Py")).then((function(n){return n.DroneModule}))}},{path:"education",loadChildren:function(){return t.e(28).then(t.bind(null,"ndEu")).then((function(n){return n.EducationModule}))}},{path:"funeral",loadChildren:function(){return t.e(29).then(t.bind(null,"F0TC")).then((function(n){return n.FuneralModule}))}}],v=((P=function n(){_classCallCheck(this,n)}).\u0275mod=h.Kb({type:P}),P.\u0275inj=h.Jb({factory:function(n){return new(n||P)},imports:[[d.e.forChild(y)],d.e]}),P);t.d(e,"PersonalInsuranceModule",(function(){return x}));var w,x=((w=function n(){_classCallCheck(this,n)}).\u0275mod=h.Kb({type:w}),w.\u0275inj=h.Jb({factory:function(n){return new(n||w)},imports:[[r.c,i.a,o.e,l.b,u.a,a.a,c.a,v]]}),w)}}]);