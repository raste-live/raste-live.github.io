(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-121374b0"],{"4b85":function(t,e,n){},"4ec9":function(t,e,n){"use strict";var r=n("6d61"),a=n("6566");t.exports=r("Map",(function(t){return function(){return t(this,arguments.length?arguments[0]:void 0)}}),a)},"579b":function(t,e,n){},6566:function(t,e,n){"use strict";var r=n("9bf2").f,a=n("7c73"),i=n("e2cc"),o=n("0366"),c=n("19aa"),s=n("2266"),u=n("7dd0"),l=n("2626"),f=n("83ab"),d=n("f183").fastKey,v=n("69f3"),p=v.set,g=v.getterFor;t.exports={getConstructor:function(t,e,n,u){var l=t((function(t,r){c(t,l,e),p(t,{type:e,index:a(null),first:void 0,last:void 0,size:0}),f||(t.size=0),void 0!=r&&s(r,t[u],{that:t,AS_ENTRIES:n})})),v=g(e),b=function(t,e,n){var r,a,i=v(t),o=h(t,e);return o?o.value=n:(i.last=o={index:a=d(e,!0),key:e,value:n,previous:r=i.last,next:void 0,removed:!1},i.first||(i.first=o),r&&(r.next=o),f?i.size++:t.size++,"F"!==a&&(i.index[a]=o)),t},h=function(t,e){var n,r=v(t),a=d(e);if("F"!==a)return r.index[a];for(n=r.first;n;n=n.next)if(n.key==e)return n};return i(l.prototype,{clear:function(){var t=this,e=v(t),n=e.index,r=e.first;while(r)r.removed=!0,r.previous&&(r.previous=r.previous.next=void 0),delete n[r.index],r=r.next;e.first=e.last=void 0,f?e.size=0:t.size=0},delete:function(t){var e=this,n=v(e),r=h(e,t);if(r){var a=r.next,i=r.previous;delete n.index[r.index],r.removed=!0,i&&(i.next=a),a&&(a.previous=i),n.first==r&&(n.first=a),n.last==r&&(n.last=i),f?n.size--:e.size--}return!!r},forEach:function(t){var e,n=v(this),r=o(t,arguments.length>1?arguments[1]:void 0,3);while(e=e?e.next:n.first){r(e.value,e.key,this);while(e&&e.removed)e=e.previous}},has:function(t){return!!h(this,t)}}),i(l.prototype,n?{get:function(t){var e=h(this,t);return e&&e.value},set:function(t,e){return b(this,0===t?0:t,e)}}:{add:function(t){return b(this,t=0===t?0:t,t)}}),f&&r(l.prototype,"size",{get:function(){return v(this).size}}),l},setStrong:function(t,e,n){var r=e+" Iterator",a=g(e),i=g(r);u(t,e,(function(t,e){p(this,{type:r,target:t,state:a(t),kind:e,last:void 0})}),(function(){var t=i(this),e=t.kind,n=t.last;while(n&&n.removed)n=n.previous;return t.target&&(t.last=n=n?n.next:t.state.first)?"keys"==e?{value:n.key,done:!1}:"values"==e?{value:n.value,done:!1}:{value:[n.key,n.value],done:!1}:(t.target=void 0,{value:void 0,done:!0})}),n?"entries":"values",!n,!0),l(e)}}},"6d61":function(t,e,n){"use strict";var r=n("23e7"),a=n("da84"),i=n("94ca"),o=n("6eeb"),c=n("f183"),s=n("2266"),u=n("19aa"),l=n("861d"),f=n("d039"),d=n("1c7e"),v=n("d44e"),p=n("7156");t.exports=function(t,e,n){var g=-1!==t.indexOf("Map"),b=-1!==t.indexOf("Weak"),h=g?"set":"add",y=a[t],m=y&&y.prototype,j=y,x={},O=function(t){var e=m[t];o(m,t,"add"==t?function(t){return e.call(this,0===t?0:t),this}:"delete"==t?function(t){return!(b&&!l(t))&&e.call(this,0===t?0:t)}:"get"==t?function(t){return b&&!l(t)?void 0:e.call(this,0===t?0:t)}:"has"==t?function(t){return!(b&&!l(t))&&e.call(this,0===t?0:t)}:function(t,n){return e.call(this,0===t?0:t,n),this})},w=i(t,"function"!=typeof y||!(b||m.forEach&&!f((function(){(new y).entries().next()}))));if(w)j=n.getConstructor(e,t,g,h),c.REQUIRED=!0;else if(i(t,!0)){var S=new j,k=S[h](b?{}:-0,1)!=S,C=f((function(){S.has(1)})),E=d((function(t){new y(t)})),z=!b&&f((function(){var t=new y,e=5;while(e--)t[h](e,e);return!t.has(-0)}));E||(j=e((function(e,n){u(e,j,t);var r=p(new y,e,j);return void 0!=n&&s(n,r[h],{that:r,AS_ENTRIES:g}),r})),j.prototype=m,m.constructor=j),(C||z)&&(O("delete"),O("has"),g&&O("get")),(z||k)&&O(h),b&&m.clear&&delete m.clear}return x[t]=j,r({global:!0,forced:j!=y},x),v(j,t),b||n.setStrong(j,t,g),j}},bb51:function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",[n("v-row",{staticClass:"text-center"},[n("v-col",{attrs:{cols:"12",lg:"8",xl:"7"}},[n("div",{staticClass:"video-container"},[n("iframe",{staticClass:"responsive-iframe",attrs:{src:"//ok.ru/videoembed/2814061387301?nochat=1",frameborder:"0",allow:"autoplay",allowfullscreen:""}})])]),n("v-col",{attrs:{cols:"12",lg:"4",xl:"5"}},[n("div",{staticClass:"chat-container"},[n("iframe",{staticClass:"responsive-iframe",attrs:{src:"https://titanembeds.com/embed/633670564774543361?defaultchannel=633670564774543363&lockscrollbar=true&theme=DiscordDark",frameborder:"0",sandbox:"allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"}})])])],1)],1)},a=[],i=n("d4ec"),o=n("262e"),c=n("2caf"),s=n("9ab4"),u=n("1b40"),l=function(t){Object(o["a"])(n,t);var e=Object(c["a"])(n);function n(){return Object(i["a"])(this,n),e.apply(this,arguments)}return n}(u["b"]);l=Object(s["a"])([u["a"]],l);var f=l,d=f,v=(n("e769"),n("2877")),p=n("6544"),g=n.n(p),b=(n("caad"),n("13d5"),n("4ec9"),n("a9e3"),n("b64b"),n("d3b7"),n("ac1f"),n("3ca3"),n("5319"),n("2ca0"),n("159b"),n("ddb0"),n("ade3")),h=n("5530"),y=(n("4b85"),n("2b0e")),m=n("d9f7"),j=n("80d2"),x=["sm","md","lg","xl"],O=function(){return x.reduce((function(t,e){return t[e]={type:[Boolean,String,Number],default:!1},t}),{})}(),w=function(){return x.reduce((function(t,e){return t["offset"+Object(j["m"])(e)]={type:[String,Number],default:null},t}),{})}(),S=function(){return x.reduce((function(t,e){return t["order"+Object(j["m"])(e)]={type:[String,Number],default:null},t}),{})}(),k={col:Object.keys(O),offset:Object.keys(w),order:Object.keys(S)};function C(t,e,n){var r=t;if(null!=n&&!1!==n){if(e){var a=e.replace(t,"");r+="-".concat(a)}return"col"!==t||""!==n&&!0!==n?(r+="-".concat(n),r.toLowerCase()):r.toLowerCase()}}var E=new Map,z=y["a"].extend({name:"v-col",functional:!0,props:Object(h["a"])(Object(h["a"])(Object(h["a"])(Object(h["a"])({cols:{type:[Boolean,String,Number],default:!1}},O),{},{offset:{type:[String,Number],default:null}},w),{},{order:{type:[String,Number],default:null}},S),{},{alignSelf:{type:String,default:null,validator:function(t){return["auto","start","end","center","baseline","stretch"].includes(t)}},tag:{type:String,default:"div"}}),render:function(t,e){var n=e.props,r=e.data,a=e.children,i=(e.parent,"");for(var o in n)i+=String(n[o]);var c=E.get(i);return c||function(){var t,e;for(e in c=[],k)k[e].forEach((function(t){var r=n[t],a=C(e,t,r);a&&c.push(a)}));var r=c.some((function(t){return t.startsWith("col-")}));c.push((t={col:!r||!n.cols},Object(b["a"])(t,"col-".concat(n.cols),n.cols),Object(b["a"])(t,"offset-".concat(n.offset),n.offset),Object(b["a"])(t,"order-".concat(n.order),n.order),Object(b["a"])(t,"align-self-".concat(n.alignSelf),n.alignSelf),t)),E.set(i,c)}(),t(n.tag,Object(m["a"])(r,{class:c}),a)}});n("99af"),n("4de4"),n("20f6"),n("a15b"),n("498a");function N(t){return y["a"].extend({name:"v-".concat(t),functional:!0,props:{id:String,tag:{type:String,default:"div"}},render:function(e,n){var r=n.props,a=n.data,i=n.children;a.staticClass="".concat(t," ").concat(a.staticClass||"").trim();var o=a.attrs;if(o){a.attrs={};var c=Object.keys(o).filter((function(t){if("slot"===t)return!1;var e=o[t];return t.startsWith("data-")?(a.attrs[t]=e,!1):e||"string"===typeof e}));c.length&&(a.staticClass+=" ".concat(c.join(" ")))}return r.id&&(a.domProps=a.domProps||{},a.domProps.id=r.id),e(r.tag,a,i)}})}var P=N("container").extend({name:"v-container",functional:!0,props:{id:String,tag:{type:String,default:"div"},fluid:{type:Boolean,default:!1}},render:function(t,e){var n,r=e.props,a=e.data,i=e.children,o=a.attrs;return o&&(a.attrs={},n=Object.keys(o).filter((function(t){if("slot"===t)return!1;var e=o[t];return t.startsWith("data-")?(a.attrs[t]=e,!1):e||"string"===typeof e}))),r.id&&(a.domProps=a.domProps||{},a.domProps.id=r.id),t(r.tag,Object(m["a"])(a,{staticClass:"container",class:Array({"container--fluid":r.fluid}).concat(n||[])}),i)}}),B=(n("2532"),["sm","md","lg","xl"]),R=["start","end","center"];function I(t,e){return B.reduce((function(n,r){return n[t+Object(j["m"])(r)]=e(),n}),{})}var M=function(t){return[].concat(R,["baseline","stretch"]).includes(t)},W=I("align",(function(){return{type:String,default:null,validator:M}})),_=function(t){return[].concat(R,["space-between","space-around"]).includes(t)},A=I("justify",(function(){return{type:String,default:null,validator:_}})),D=function(t){return[].concat(R,["space-between","space-around","stretch"]).includes(t)},F=I("alignContent",(function(){return{type:String,default:null,validator:D}})),L={align:Object.keys(W),justify:Object.keys(A),alignContent:Object.keys(F)},V={align:"align",justify:"justify",alignContent:"align-content"};function G(t,e,n){var r=V[t];if(null!=n){if(e){var a=e.replace(t,"");r+="-".concat(a)}return r+="-".concat(n),r.toLowerCase()}}var J=new Map,T=y["a"].extend({name:"v-row",functional:!0,props:Object(h["a"])(Object(h["a"])(Object(h["a"])({tag:{type:String,default:"div"},dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:M}},W),{},{justify:{type:String,default:null,validator:_}},A),{},{alignContent:{type:String,default:null,validator:D}},F),render:function(t,e){var n=e.props,r=e.data,a=e.children,i="";for(var o in n)i+=String(n[o]);var c=J.get(i);return c||function(){var t,e;for(e in c=[],L)L[e].forEach((function(t){var r=n[t],a=G(e,t,r);a&&c.push(a)}));c.push((t={"no-gutters":n.noGutters,"row--dense":n.dense},Object(b["a"])(t,"align-".concat(n.align),n.align),Object(b["a"])(t,"justify-".concat(n.justify),n.justify),Object(b["a"])(t,"align-content-".concat(n.alignContent),n.alignContent),t)),J.set(i,c)}(),t(n.tag,Object(m["a"])(r,{staticClass:"row",class:c}),a)}}),K=Object(v["a"])(d,r,a,!1,null,"5c3a41a9",null);e["default"]=K.exports;g()(K,{VCol:z,VContainer:P,VRow:T})},e769:function(t,e,n){"use strict";n("579b")}}]);
//# sourceMappingURL=chunk-121374b0.bddc9440.js.map