(function(){"use strict";var e={900:function(e,n,t){var r=t(471),o=function(){var e=this,n=e._self._c;return n("div",[n("router-view")],1)},u=[],i=t(845),s={},c=(0,i.A)(s,o,u,!1,null,null,null),l=c.exports,a=t(173),f=function(){var e=this,n=e._self._c;e._self._setupProxy;return n("div",[n("HomeComponent")],1)},v=[],p=t(215),d=function(){var e=this;e._self._c,e._self._setupProxy;return e._m(0)},m=[function(){var e=this,n=e._self._c;e._self._setupProxy;return n("div",[n("h1",[e._v("yandex-music")])])}],h=t(233);let y=class extends h.lD{};y=(0,p.Cg)([h.uA],y);var A=y,_=A,x=(0,i.A)(_,d,m,!1,null,"664cdefe",null),g=x.exports;let b=class extends h.lD{};b=(0,p.Cg)([(0,h.uA)({components:{HomeComponent:g}})],b);var w=b,O=w,E=(0,i.A)(O,f,v,!1,null,null,null),C=E.exports;r.Ay.use(a.Ay);const S=[{path:"/",name:"home",component:C}],j=new a.Ay({mode:"history",base:"/yandex-music/",routes:S});var R=j,k=t(353);const P={isAuthenticated:!1,user:null},T={SET_USER(e,n){e.user=n,e.isAuthenticated=!0},CLEAR_USER(e){e.user=null,e.isAuthenticated=!1}},U={login({commit:e},n){e("SET_USER",n)},logout({commit:e}){e("CLEAR_USER")}},D={isAuthenticated:e=>e.isAuthenticated,user:e=>e.user,userName:e=>e.user?e.user.name:null};var H={namespaced:!0,state:P,mutations:T,actions:U,getters:D};r.Ay.use(k.Ay);var L=new k.Ay.Store({modules:{index:H}}),F=t(765);r.Ay.use(F.A);var N=new F.A({locale:"ru",messages:{ru:{},en:{}}});r.Ay.config.productionTip=!1,new r.Ay({router:R,store:L,i18n:N,render:e=>e(l)}).$mount("#app")}},n={};function t(r){var o=n[r];if(void 0!==o)return o.exports;var u=n[r]={exports:{}};return e[r](u,u.exports,t),u.exports}t.m=e,function(){var e=[];t.O=function(n,r,o,u){if(!r){var i=1/0;for(a=0;a<e.length;a++){r=e[a][0],o=e[a][1],u=e[a][2];for(var s=!0,c=0;c<r.length;c++)(!1&u||i>=u)&&Object.keys(t.O).every((function(e){return t.O[e](r[c])}))?r.splice(c--,1):(s=!1,u<i&&(i=u));if(s){e.splice(a--,1);var l=o();void 0!==l&&(n=l)}}return n}u=u||0;for(var a=e.length;a>0&&e[a-1][2]>u;a--)e[a]=e[a-1];e[a]=[r,o,u]}}(),function(){t.d=function(e,n){for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)}}(),function(){var e={524:0};t.O.j=function(n){return 0===e[n]};var n=function(n,r){var o,u,i=r[0],s=r[1],c=r[2],l=0;if(i.some((function(n){return 0!==e[n]}))){for(o in s)t.o(s,o)&&(t.m[o]=s[o]);if(c)var a=c(t)}for(n&&n(r);l<i.length;l++)u=i[l],t.o(e,u)&&e[u]&&e[u][0](),e[u]=0;return t.O(a)},r=self["webpackChunkyandex_music"]=self["webpackChunkyandex_music"]||[];r.forEach(n.bind(null,0)),r.push=n.bind(null,r.push.bind(r))}();var r=t.O(void 0,[504],(function(){return t(900)}));r=t.O(r)})();
//# sourceMappingURL=app.1d80799d.js.map