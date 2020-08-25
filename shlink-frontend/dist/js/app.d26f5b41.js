(function(t){function e(e){for(var i,a,s=e[0],l=e[1],c=e[2],d=0,p=[];d<s.length;d++)a=s[d],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&p.push(o[a][0]),o[a]=0;for(i in l)Object.prototype.hasOwnProperty.call(l,i)&&(t[i]=l[i]);u&&u(e);while(p.length)p.shift()();return r.push.apply(r,c||[]),n()}function n(){for(var t,e=0;e<r.length;e++){for(var n=r[e],i=!0,s=1;s<n.length;s++){var l=n[s];0!==o[l]&&(i=!1)}i&&(r.splice(e--,1),t=a(a.s=n[0]))}return t}var i={},o={app:0},r=[];function a(e){if(i[e])return i[e].exports;var n=i[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=t,a.c=i,a.d=function(t,e,n){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)a.d(n,i,function(e){return t[e]}.bind(null,i));return n},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=e,s=s.slice();for(var c=0;c<s.length;c++)e(s[c]);var u=l;r.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var i=n("85ec"),o=n.n(i);o.a},"22d7":function(t,e,n){"use strict";var i=n("be87"),o=n.n(i);o.a},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var i=n("2b0e"),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("Header"),n("Body"),n("Footer")],1)},r=[],a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("header",[n("a",{attrs:{id:"logo",href:""}}),n("a",{attrs:{id:"links"},on:{click:t.openLinksWindow}},[t._v("My links")]),n("Modal")],1)},s=[],l=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.isModalOpened?n("div",{attrs:{id:"modal"}},[t.clickedCopy?n("div",{class:{"copied-slowing-down":!t.copiedAnimation,"copied-slowing-up":t.copiedAnimation},attrs:{id:"copied-block"}},[t._v("Copied")]):t._e(),n("div",{class:{"modal-open":this.isModalOpened},attrs:{id:"modal-wrapper"}},[n("div",{attrs:{id:"links-window"}},[n("h2",{staticClass:"left-al"},[t._v("Links")]),n("div",{attrs:{id:"links-wrapper"}},[Object.keys(t.linksList).length?n("table",{attrs:{id:"links-table"}},t._l(Object.keys(t.linksList).length,(function(e){return n("tr",{key:e},[n("td",[n("div",{staticClass:"short-link-wrapper",on:{click:function(n){t.copyLink(Object.keys(t.linksList)[e-1])}}},[t._v(t._s(Object.keys(t.linksList)[e-1]))])]),n("td",{attrs:{align:"right"}},[n("div",{staticClass:"link-wrapper"},[n("a",{attrs:{href:t.linksList[Object.keys(t.linksList)[e-1]],title:t.linksList[Object.keys(t.linksList)[e-1]],target:"_blank"}},[t._v(" "+t._s(t.linksList[Object.keys(t.linksList)[e-1]])+" ")])])])])})),0):n("h4",{staticClass:"left-al",attrs:{id:"no-links-found"}},[t._v("No links were found")])])]),n("button",{staticClass:"green-btn",attrs:{id:"modal-close-btn"},on:{click:t.closeModal}},[t._v("Close")])])]):t._e()},c=[],u={name:"Modal",data:function(){return{isModalOpened:!1,linksList:localStorage.links?JSON.parse(localStorage.links):{},clickedCopy:!1,copiedAnimation:!1}},methods:{openModal:function(){this.linksList=localStorage.links?JSON.parse(localStorage.links):{},this.isModalOpened=!0},closeModal:function(){this.isModalOpened=!1,this.clickedCopy=!1},copyLink:function(t){this.clickedCopy=!0,this.copiedAnimation=!0,navigator.clipboard.writeText(location.href+t);var e=function(){this.copiedAnimation=!1};setTimeout(e.bind(this),2e3)}},mounted:function(){var t=this;this.$root.$on("openModal",(function(){t.openModal()})),this.$root.$on("closeModal",(function(){t.closeModal()}))}},d=u,p=(n("22d7"),n("2877")),f=Object(p["a"])(d,l,c,!1,null,null,null),k=f.exports,h={name:"Header",data:function(){return{isModalOpened:!0}},methods:{openLinksWindow:function(){this.$root.$emit("openModal")}},components:{Modal:k}},b=h,m=(n("8baf"),Object(p["a"])(b,a,s,!1,null,null,null)),v=m.exports,g=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("main",[n("div",{attrs:{id:"main-wrapper"}},[n("article",{attrs:{id:"about"}},[t._v("Shlink.org is a free and easy tool to shorten URLs. Create short links in seconds.")]),n("form",{attrs:{id:"shortener-form"},on:{submit:function(t){t.preventDefault()}}},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.link,expression:"link"}],attrs:{id:"link-field",maxlength:"4096",placeholder:"Put link here",required:""},domProps:{value:t.link},on:{input:function(e){e.target.composing||(t.link=e.target.value)}}}),n("div",{attrs:{id:"btns-block"}},[n("button",{staticClass:"green-btn",attrs:{type:"submit"},on:{click:t.makeShortRequest}},[t._v("Make short")]),n("button",{staticClass:"green-btn",attrs:{id:"mk-unshort",type:"submit"},on:{click:t.makeUnshortRequest}},[t._v("Make unshort")])])])])])},y=[],_=(n("498a"),n("9911"),n("bc3a")),O=n.n(_),w={name:"Body",data:function(){return{link:""}},methods:{makeShortRequest:function(){if(this.link.trim()){var t=location.href+"generate?link="+this.link,e=function(t){console.log(t);var e=localStorage.links?JSON.parse(localStorage.links):{};e[t.data]=this.link,localStorage.links=JSON.stringify(e),this.$root.$emit("openModal")};O.a.post(t).then(e.bind(this))}},makeUnshortRequest:function(){if(this.link.trim()){var t=location.href+"check?link="+this.link,e=function(t){console.log(t),alert(t.data||"Link not found")};O.a.post(t).then(e.bind(this))}}}},M=w,j=(n("ed04"),Object(p["a"])(M,g,y,!1,null,null,null)),L=j.exports,S=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},C=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("footer",[n("a",{staticClass:"footer-link link",attrs:{id:"github",target:"_blank",href:"https://github.com/musicchenko/shlink"}},[t._v("GitHub")]),n("a",{staticClass:"footer-link link",attrs:{target:"_blank",href:"https://www.termsofusegenerator.net/live.php?token=rtYTfHPYz5AC4mBNxotaUGaXusGiMabK"}},[t._v("Terms of use")])])}],x={name:"Footer"},$=x,P=(n("760c"),Object(p["a"])($,S,C,!1,null,null,null)),A=P.exports,N={name:"App",components:{Header:v,Body:L,Footer:A}},T=N,E=(n("034f"),Object(p["a"])(T,o,r,!1,null,null,null)),J=E.exports;i["a"].config.productionTip=!1,i["a"].prototype.$axios=O.a,new i["a"]({render:function(t){return t(J)}}).$mount("#app")},6860:function(t,e,n){},"760c":function(t,e,n){"use strict";var i=n("c3f5"),o=n.n(i);o.a},"85ec":function(t,e,n){},"8baf":function(t,e,n){"use strict";var i=n("6860"),o=n.n(i);o.a},be87:function(t,e,n){},c3f5:function(t,e,n){},db6a:function(t,e,n){},ed04:function(t,e,n){"use strict";var i=n("db6a"),o=n.n(i);o.a}});
//# sourceMappingURL=app.d26f5b41.js.map