(function(e){function t(t){for(var n,o,c=t[0],u=t[1],i=t[2],h=0,p=[];h<c.length;h++)o=c[h],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&p.push(a[o][0]),a[o]=0;for(n in u)Object.prototype.hasOwnProperty.call(u,n)&&(e[n]=u[n]);l&&l(t);while(p.length)p.shift()();return s.push.apply(s,i||[]),r()}function r(){for(var e,t=0;t<s.length;t++){for(var r=s[t],n=!0,c=1;c<r.length;c++){var u=r[c];0!==a[u]&&(n=!1)}n&&(s.splice(t--,1),e=o(o.s=r[0]))}return e}var n={},a={app:0},s=[];function o(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.m=e,o.c=n,o.d=function(e,t,r){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(o.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)o.d(r,n,function(t){return e[t]}.bind(null,n));return r},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],u=c.push.bind(c);c.push=t,c=c.slice();for(var i=0;i<c.length;i++)t(c[i]);var l=u;s.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"3db4":function(e,t,r){},"56d7":function(e,t,r){"use strict";r.r(t);r("a481"),r("cadf"),r("551c"),r("f751"),r("097d");var n=r("2b0e"),a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[r("router-view")],1)},s=[],o=(r("5c0b"),r("2877")),c={},u=Object(o["a"])(c,a,s,!1,null,null,null),i=u.exports,l=r("8c4f"),h=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("main",[r("search"),r("result"),r("paginate")],1)},p=[],f=(r("28a5"),r("386d"),function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("main",[r("form",{staticClass:"form-search",class:{top:e.resultSearchCount>0},attrs:{id:"search"},on:{submit:function(t){return t.preventDefault(),e.searchTerms(t)}}},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.search,expression:"search"}],attrs:{type:"text",name:"",id:"",placeholder:"Ex: r2"},domProps:{value:e.search},on:{input:function(t){t.target.composing||(e.search=t.target.value)}}}),r("input",{attrs:{type:"submit",value:"Buscar"}})]),this.resultSearchCount>0?r("span",{staticClass:"result-total"},[e._v("Total: "+e._s(this.resultSearchCount))]):e._e()])}),m=[],v=r("822c");v.init("45a7d4fbb212809648303d8e177fc118"),console.log(v);var d={name:"Search",data:function(){return{search:""}},computed:{resultSearchCount:function(){return this.$store.state.searchResult.count}},methods:{searchTerms:function(){this.trackingFormSubmit(),this.$root.$emit("search",this.search.replace(/\s/g,"+")),this.$store.dispatch("SEARCH",this.search.replace(/\s/g,"+")),this.search=""},trackingFormSubmit:function(){console.log("form enviado"),v.track_forms("#search","sendForm",{referrer:document.referrer})}}},_=d,g=Object(o["a"])(_,f,m,!1,null,null,null),b=g.exports,E=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("section",{staticClass:"result"},[e.resultSearch&&0==e.resultSearch.length?r("span",[e._v("No results to search term")]):e._e(),r("ul",e._l(e.resultSearch,(function(t,n){return r("li",{key:t[n],staticClass:"result-item"},[r("details",[r("summary",[r("h2",[e._v(" "+e._s(t.name))])]),r("div",{staticClass:"result-item--infos"},[r("p",[r("span",[e._v("Gender:")]),e._v(" "+e._s(t.gender))]),r("p",[r("span",[e._v("Eye Color:")]),e._v(" "+e._s(t.eye_color))]),r("p",[r("span",[e._v("Height:")]),e._v(" "+e._s(e._f("formatHeight")(t.height)))]),r("p",[r("span",[e._v("Hair color: ")]),e._v(e._s(t.hair_color))])])])])})),0)])},S=[],R={name:"Result",computed:{resultSearch:function(){return this.$store.state.searchResult.results}}},w=R,y=Object(o["a"])(w,E,S,!1,null,null,null),P=y.exports,O=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("section",{staticClass:"paginate"},[r("article",[r("button",{directives:[{name:"show",rawName:"v-show",value:e.result.previous,expression:"result.previous"}],attrs:{disabled:e.result.previous<=0},on:{click:function(t){return t.preventDefault(),e.changePage(e.result.previous,"page")}}},[e._v(" PREVIOUS")]),r("button",{directives:[{name:"show",rawName:"v-show",value:e.result.next,expression:"result.next"}],on:{click:function(t){return t.preventDefault(),e.changePage(e.result.next,"page")}}},[e._v(" NEXT")])])])},$=[],x={name:"Paginate",data:function(){return{search:""}},computed:{result:function(){return this.$store.state.searchResult}},methods:{seachParamUrl:function(e,t){var r=e.split("?")[1].split("&"),n=r.map((function(e){var r=e.split("=");if(0===r.indexOf(t))return r[1]}));return n[1]||n[0]},changePage:function(e,t){var r={page:this.seachParamUrl(e,t),term:this.search};this.$store.dispatch("CHANGE_PAGE",r)}},mounted:function(){var e=this;this.$root.$on("search",(function(t){e.search=t}))}},C=x,T=Object(o["a"])(C,O,$,!1,null,null,null),j=T.exports,H={name:"Home",components:{search:b,result:P,paginate:j},computed:{resultSearchCount:function(){return this.$store.state.searchResult.count},resultSearch:function(){return this.$store.state.searchResult.results},result:function(){return this.$store.state.searchResult}},methods:{searchTerms:function(){this.$store.dispatch("SEARCH",this.search),this.search=""},seachParamUrl:function(e,t){var r=e.split("?")[1].split("&"),n=r.map((function(e){var r=e.split("=");if(0===r.indexOf(t))return r[1]||[]}));return n[0]},changePage:function(e,t){var r={page:this.seachParamUrl(e,t),term:this.search};this.$store.dispatch("CHANGE_PAGE",r)}}},G=H,A=Object(o["a"])(G,h,p,!1,null,null,null),k=A.exports;n["a"].use(l["a"]);var U=new l["a"]({routes:[{path:"/",name:"home",component:k}]}),N=r("2f62"),L=r("bc3a"),M=r.n(L),D=M.a.create({baseURL:"https://swapi.co/api/people/"});n["a"].use(N["a"]);var F=new N["a"].Store({state:{searchResult:{},errors:[]},mutations:{GET_RESULT_SEARCH:function(e,t){e.searchResult=t},GET_ERRORS:function(e,t){e.searchResult=t}},actions:{SEARCH:function(e,t){var r=e.commit;return new Promise((function(e,n){D.get("?search=".concat(t)).then((function(t){e(t),r("GET_RESULT_SEARCH",t.data)})).catch((function(e){n(e),r("GET_ERRORS",e)}))}))},CHANGE_PAGE:function(e,t){var r=e.commit;return new Promise((function(e,n){D.get("?page=".concat(t.page,"&search=").concat(t.term)).then((function(t){e(t),r("GET_RESULT_SEARCH",t.data)})).catch((function(e){n(e),r("GET_ERRORS",e)}))}))}}});r("3db4");n["a"].filter("formatHeight",(function(e){return e.replace(/([0-9]{2})$/g,",$1")})),n["a"].config.productionTip=!1,new n["a"]({store:F,router:U,render:function(e){return e(i)}}).$mount("#app")},"5c0b":function(e,t,r){"use strict";var n=r("e332"),a=r.n(n);a.a},e332:function(e,t,r){}});
//# sourceMappingURL=app.4c62bcad.js.map