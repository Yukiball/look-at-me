(function(){"use strict";var e={9333:function(e,t,n){var r=n(6848),o=function(){var e=this,t=e._self._c;return t("div",{attrs:{id:"app"}},[t("router-view")],1)},i=[],s=n(1656),u={},c=(0,s.A)(u,o,i,!1,null,null,null),a=c.exports,l=n(6178),f=function(){var e=this,t=e._self._c;e._self._setupProxy;return t("div",{staticClass:"content"},[t("div",{staticClass:"pc"},[t("img",{attrs:{src:n(3153),alt:""}}),t("HelloWorld",{attrs:{msg:"~欢迎来到我的项目展示页面~"}}),t("div",{staticClass:"green btn showqr"},[e._v("小程序展示")]),t("div",{staticClass:"blue btn",on:{click:e.goDoc}},[e._v("学习doc")]),t("div",{staticClass:"yellow btn",on:{click:e.to2048}},[e._v("玩一会儿吧")])],1),t("div",{staticClass:"phone"},[e._v("请用pc端打开~")])])},d=[],h=(n(4114),n(7475)),p=function(){var e=this,t=e._self._c;e._self._setupProxy;return t("div",{staticClass:"hello"},[t("h1",[e._v(e._s(e.msg))])])},v=[],m=n(1114),g=function(e,t,n,r){var o,i=arguments.length,s=i<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)s=Reflect.decorate(e,t,n,r);else for(var u=e.length-1;u>=0;u--)(o=e[u])&&(s=(i<3?o(s):i>3?o(t,n,s):o(t,n))||s);return i>3&&s&&Object.defineProperty(t,n,s),s};let y=class extends h.lD{constructor(...e){super(...e),(0,m.A)(this,"msg",void 0)}};g([(0,h.kv)()],y.prototype,"msg",void 0),y=g([h.uA],y);var b=y,w=b,A=(0,s.A)(w,p,v,!1,null,"8a8215f8",null),j=A.exports,_=function(e,t,n,r){var o,i=arguments.length,s=i<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)s=Reflect.decorate(e,t,n,r);else for(var u=e.length-1;u>=0;u--)(o=e[u])&&(s=(i<3?o(s):i>3?o(t,n,s):o(t,n))||s);return i>3&&s&&Object.defineProperty(t,n,s),s};let k=class extends h.lD{to2048(){this.$router.push({path:"/2048"})}goDoc(){window.open("https://yukiball.github.io/display/")}};k=_([(0,h.uA)({components:{HelloWorld:j}})],k);var C=k,O=C,S=(0,s.A)(O,f,d,!1,null,"5b111f84",null),x=S.exports;r.Ay.use(l.Ay);const P=[{path:"/",name:"home",component:x},{path:"/2048",name:"2048",component:()=>n.e(594).then(n.bind(n,1306))}],T=new l.Ay({base:"/look-at-me/",routes:P});var E=T,R=n(3518);r.Ay.use(R.Ay);var N=new R.Ay.Store({state:{},getters:{},mutations:{},actions:{},modules:{}});const D="pending",F="fulfilled",L="rejected",B="function";class q{constructor(e){(0,m.A)(this,"state",D),(0,m.A)(this,"result",void 0),(0,m.A)(this,"handler",[]),(0,m.A)(this,"resolve",void 0),(0,m.A)(this,"reject",void 0),this.resolve=e=>{this.changeState(F,e)},this.reject=e=>{this.changeState(L,e)};try{e(this.resolve,this.reject)}catch(t){this.reject(t)}}changeState(e,t){this.state===D&&(this.state=e,this.result=t,this.doSomeThing())}isFunc(e,t,n){if(typeof e===B)try{const n=e(this.result);t(n)}catch(r){n(r)}else this.state===F?t(this.result):n(this.result)}doSomeThing(){if(this.state!==D)while(this.handler.length){const{onResolved:e,onRejected:t,resolve:n,reject:r}=this.handler.shift();this.state===F?this.isFunc(e,n,r):this.isFunc(t,n,r)}}then(e,t){return new q(((n,r)=>{this.handler.push({onResolved:e,onRejected:t,resolve:n,reject:r}),this.doSomeThing()}))}}new q(((e,t)=>{setTimeout((()=>{t(333)}),1e3)}));r.Ay.config.productionTip=!1,window.myPromise=q,new r.Ay({router:E,store:N,render:e=>e(a)}).$mount("#app")},3153:function(e,t,n){e.exports=n.p+"img/logo.ea724aa0.png"}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var i=t[r]={exports:{}};return e[r].call(i.exports,i,i.exports,n),i.exports}n.m=e,function(){var e=[];n.O=function(t,r,o,i){if(!r){var s=1/0;for(l=0;l<e.length;l++){r=e[l][0],o=e[l][1],i=e[l][2];for(var u=!0,c=0;c<r.length;c++)(!1&i||s>=i)&&Object.keys(n.O).every((function(e){return n.O[e](r[c])}))?r.splice(c--,1):(u=!1,i<s&&(s=i));if(u){e.splice(l--,1);var a=o();void 0!==a&&(t=a)}}return t}i=i||0;for(var l=e.length;l>0&&e[l-1][2]>i;l--)e[l]=e[l-1];e[l]=[r,o,i]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}}(),function(){n.f={},n.e=function(e){return Promise.all(Object.keys(n.f).reduce((function(t,r){return n.f[r](e,t),t}),[]))}}(),function(){n.u=function(e){return"js/about.d0794376.js"}}(),function(){n.miniCssF=function(e){return"css/about.6ac509ce.css"}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="look-at-me:";n.l=function(r,o,i,s){if(e[r])e[r].push(o);else{var u,c;if(void 0!==i)for(var a=document.getElementsByTagName("script"),l=0;l<a.length;l++){var f=a[l];if(f.getAttribute("src")==r||f.getAttribute("data-webpack")==t+i){u=f;break}}u||(c=!0,u=document.createElement("script"),u.charset="utf-8",u.timeout=120,n.nc&&u.setAttribute("nonce",n.nc),u.setAttribute("data-webpack",t+i),u.src=r),e[r]=[o];var d=function(t,n){u.onerror=u.onload=null,clearTimeout(h);var o=e[r];if(delete e[r],u.parentNode&&u.parentNode.removeChild(u),o&&o.forEach((function(e){return e(n)})),t)return t(n)},h=setTimeout(d.bind(null,void 0,{type:"timeout",target:u}),12e4);u.onerror=d.bind(null,u.onerror),u.onload=d.bind(null,u.onload),c&&document.head.appendChild(u)}}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){n.p="/look-at-me/"}(),function(){if("undefined"!==typeof document){var e=function(e,t,r,o,i){var s=document.createElement("link");s.rel="stylesheet",s.type="text/css",n.nc&&(s.nonce=n.nc);var u=function(n){if(s.onerror=s.onload=null,"load"===n.type)o();else{var r=n&&n.type,u=n&&n.target&&n.target.href||t,c=new Error("Loading CSS chunk "+e+" failed.\n("+r+": "+u+")");c.name="ChunkLoadError",c.code="CSS_CHUNK_LOAD_FAILED",c.type=r,c.request=u,s.parentNode&&s.parentNode.removeChild(s),i(c)}};return s.onerror=s.onload=u,s.href=t,r?r.parentNode.insertBefore(s,r.nextSibling):document.head.appendChild(s),s},t=function(e,t){for(var n=document.getElementsByTagName("link"),r=0;r<n.length;r++){var o=n[r],i=o.getAttribute("data-href")||o.getAttribute("href");if("stylesheet"===o.rel&&(i===e||i===t))return o}var s=document.getElementsByTagName("style");for(r=0;r<s.length;r++){o=s[r],i=o.getAttribute("data-href");if(i===e||i===t)return o}},r=function(r){return new Promise((function(o,i){var s=n.miniCssF(r),u=n.p+s;if(t(s,u))return o();e(r,u,null,o,i)}))},o={524:0};n.f.miniCss=function(e,t){var n={594:1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=r(e).then((function(){o[e]=0}),(function(t){throw delete o[e],t})))}}}(),function(){var e={524:0};n.f.j=function(t,r){var o=n.o(e,t)?e[t]:void 0;if(0!==o)if(o)r.push(o[2]);else{var i=new Promise((function(n,r){o=e[t]=[n,r]}));r.push(o[2]=i);var s=n.p+n.u(t),u=new Error,c=function(r){if(n.o(e,t)&&(o=e[t],0!==o&&(e[t]=void 0),o)){var i=r&&("load"===r.type?"missing":r.type),s=r&&r.target&&r.target.src;u.message="Loading chunk "+t+" failed.\n("+i+": "+s+")",u.name="ChunkLoadError",u.type=i,u.request=s,o[1](u)}};n.l(s,c,"chunk-"+t,t)}},n.O.j=function(t){return 0===e[t]};var t=function(t,r){var o,i,s=r[0],u=r[1],c=r[2],a=0;if(s.some((function(t){return 0!==e[t]}))){for(o in u)n.o(u,o)&&(n.m[o]=u[o]);if(c)var l=c(n)}for(t&&t(r);a<s.length;a++)i=s[a],n.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return n.O(l)},r=self["webpackChunklook_at_me"]=self["webpackChunklook_at_me"]||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}();var r=n.O(void 0,[504],(function(){return n(9333)}));r=n.O(r)})();
//# sourceMappingURL=app.788ec448.js.map