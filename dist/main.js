!function(e,r){"object"==typeof exports&&"object"==typeof module?module.exports=r(require("react"),require("react-dom")):"function"==typeof define&&define.amd?define(["react","react-dom"],r):"object"==typeof exports?exports["xyy-lib"]=r(require("react"),require("react-dom")):e["xyy-lib"]=r(e.React,e.ReactDOM)}(self,((e,r)=>(()=>{"use strict";var t,n={1616:(e,r,t)=>{t.r(r),t.d(r,{default:()=>j});var n=t(9787),o=t.n(n),i=t(3379),a=t.n(i),l=t(7795),s=t.n(l),c=t(569),u=t.n(c),p=t(3565),d=t.n(p),f=t(9216),A=t.n(f),h=t(4589),v=t.n(h),m=t(4770),b={};b.styleTagTransform=v(),b.setAttributes=d(),b.insert=u().bind(null,"head"),b.domAPI=s(),b.insertStyleElement=A(),a()(m.Z,b),m.Z&&m.Z.locals&&m.Z.locals,t(1621),t(2403),t(6575),t(4554),t(4806),t(1094),t(6042),t(8671),t(6145);var y=t(8602),g=(t(2183),t(8824)),x=(t(6712),t(8440)),C=(t(7263),t(633),t(5764)),w={};w.styleTagTransform=v(),w.setAttributes=d(),w.insert=u().bind(null,"head"),w.domAPI=s(),w.insertStyleElement=A(),a()(C.Z,w),C.Z&&C.Z.locals&&C.Z.locals;var E=t(9439),B=t.n(E);function S(e,r){return function(e){if(Array.isArray(e))return e}(e)||function(e,r){var t=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var n,o,i=[],a=!0,l=!1;try{for(t=t.call(e);!(a=(n=t.next()).done)&&(i.push(n.value),!r||i.length!==r);a=!0);}catch(e){l=!0,o=e}finally{try{a||null==t.return||t.return()}finally{if(l)throw o}}return i}}(e,r)||function(e,r){if(e){if("string"==typeof e)return O(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?O(e,r):void 0}}(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function O(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}t(5517);var Z=x.ZP.Option;const k=function(){var e=S((0,n.useState)(!1),2),r=e[0],t=e[1],i=(0,n.useRef)(),a=function(){var e=S((0,n.useState)([]),2),r=e[0],t=e[1],i=S((0,n.useState)(!1),2),a=i[0],l=i[1],s=S((0,n.useState)(""),2),c=s[0],u=s[1],p=(0,n.useRef)(),d=function(e){return B()((function(){e?fetch("https://api.github.com/search/users?q=".concat(e)).then((function(e){return e.json()})).then((function(r){var n=r.items;c===e&&(t((void 0===n?[]:n).slice(0,10)),l(!1))})):t([])}),800)()};return o().createElement("div",{className:"box"},o().createElement("div",{className:"box-inner",ref:p},o().createElement(x.ZP,{autoSize:!0,style:{height:35,width:"280px"},loading:a,onSearch:function(e){t([]),l(!!e),u(u),console.log("Search:",e),d(e)},getPopupContainer:function(){return p.current}},r.map((function(e,r){var t=e.login,n=e.avatar_url;return o().createElement(Z,{key:r,value:t},o().createElement("img",{src:n,alt:t}),o().createElement("span",null,t))})))))};return o().createElement("div",{className:"popover-wrapper"},o().createElement(y.Z,{content:o().createElement(a,null),trigger:"click",visible:r,onVisibleChange:function(e){t(e)},getPopupContainer:function(){return i.current}},o().createElement(g.Z,{ref:i,type:"primary"},"Click me")))};t(9071);const j=function(){return o().createElement("div",{className:"app-header"},o().createElement("div",{className:"left"}),o().createElement("div",{className:"right"},o().createElement(k,null)))}},5764:(e,r,t)=>{t.d(r,{Z:()=>l});var n=t(4251),o=t.n(n),i=t(8922),a=t.n(i)()(o());a.push([e.id,".box{height:500px;width:300px;border:1px solid #000;padding:10px;position:relative}.popover-wrapper{position:relative}.box-inner{width:280px;height:250px;border:1px solid blueviolet;overflow:scroll;position:relative}\n","",{version:3,sources:["webpack://./src/components/button/button.scss"],names:[],mappings:"AAAA,KACE,YAAa,CACb,WAAY,CACZ,qBAAsB,CAEtB,YAAa,CACb,iBAAkB,CACnB,iBAEC,iBAAkB,CACnB,WAEC,WAAY,CACZ,YAAa,CACb,2BAA4B,CAC5B,eAAgB,CAChB,iBAAkB",sourcesContent:[".box {\r\n  height: 500px;\r\n  width: 300px;\r\n  border: 1px solid #000;\r\n  // position: relative;\r\n  padding: 10px;\r\n  position: relative;\r\n}\r\n.popover-wrapper {\r\n  position: relative;\r\n}\r\n.box-inner {\r\n  width: 280px;\r\n  height: 250px;\r\n  border: 1px solid blueviolet;\r\n  overflow: scroll;\r\n  position: relative;\r\n}\r\n"],sourceRoot:""}]);const l=a},4770:(e,r,t)=>{t.d(r,{Z:()=>l});var n=t(4251),o=t.n(n),i=t(8922),a=t.n(i)()(o());a.push([e.id,".app-header{height:50px;background-color:aquamarine;width:100%;display:flex;position:fixed;top:0}.app-header .left{width:200px}\n","",{version:3,sources:["webpack://./src/components/header/index.scss"],names:[],mappings:"AAAA,YACE,WAAY,CACZ,2BAA4B,CAC5B,UAAW,CACX,YAAa,CACb,cAAe,CACf,KAAM,CANR,kBAQI,WAAY",sourcesContent:[".app-header {\r\n  height: 50px;\r\n  background-color: aquamarine;\r\n  width: 100%;\r\n  display: flex;\r\n  position: fixed;\r\n  top: 0;\r\n  .left {\r\n    width: 200px;\r\n  }\r\n}\r\n"],sourceRoot:""}]);const l=a},9787:r=>{r.exports=e},9071:e=>{e.exports=r}},o={};function i(e){var r=o[e];if(void 0!==r)return r.exports;var t=o[e]={id:e,loaded:!1,exports:{}};return n[e](t,t.exports,i),t.loaded=!0,t.exports}i.m=n,t=[],i.O=(e,r,n,o)=>{if(!r){var a=1/0;for(u=0;u<t.length;u++){for(var[r,n,o]=t[u],l=!0,s=0;s<r.length;s++)(!1&o||a>=o)&&Object.keys(i.O).every((e=>i.O[e](r[s])))?r.splice(s--,1):(l=!1,o<a&&(a=o));if(l){t.splice(u--,1);var c=n();void 0!==c&&(e=c)}}return e}o=o||0;for(var u=t.length;u>0&&t[u-1][2]>o;u--)t[u]=t[u-1];t[u]=[r,n,o]},i.n=e=>{var r=e&&e.__esModule?()=>e.default:()=>e;return i.d(r,{a:r}),r},i.d=(e,r)=>{for(var t in r)i.o(r,t)&&!i.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:r[t]})},i.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),i.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),i.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.nmd=e=>(e.paths=[],e.children||(e.children=[]),e),(()=>{var e={179:0};i.O.j=r=>0===e[r];var r=(r,t)=>{var n,o,[a,l,s]=t,c=0;if(a.some((r=>0!==e[r]))){for(n in l)i.o(l,n)&&(i.m[n]=l[n]);if(s)var u=s(i)}for(r&&r(t);c<a.length;c++)o=a[c],i.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return i.O(u)},t=self.webpackChunkxyy_lib=self.webpackChunkxyy_lib||[];t.forEach(r.bind(null,0)),t.push=r.bind(null,t.push.bind(t))})(),i.nc=void 0;var a=i.O(void 0,[245],(()=>i(1616)));return i.O(a)})()));
//# sourceMappingURL=main.js.map