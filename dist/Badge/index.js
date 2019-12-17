/*! @xs 2019-12-17 */
!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define("Badge",[],e):"object"==typeof exports?exports.Badge=e():t.Badge=e()}(this,(function(){return function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=413)}({12:function(t,e,n){"use strict";function r(t,e,n,r,o,i,s,a){var c,l="function"==typeof t?t.options:t;if(e&&(l.render=e,l.staticRenderFns=n,l._compiled=!0),r&&(l.functional=!0),i&&(l._scopeId="data-v-"+i),s?(c=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),o&&o.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(s)},l._ssrRegister=c):o&&(c=a?function(){o.call(this,this.$root.$options.shadowRoot)}:o),c)if(l.functional){l._injectStyles=c;var u=l.render;l.render=function(t,e){return c.call(e),u(t,e)}}else{var f=l.beforeCreate;l.beforeCreate=f?[].concat(f,c):[c]}return{exports:t,options:l}}n.d(e,"a",(function(){return r}))},281:function(t,e,n){},344:function(t,e,n){"use strict";var r=n(281);n.n(r).a},413:function(t,e,n){"use strict";n.r(e);var r={name:"Badge",props:{content:{type:[Number,String],default:""},dot:{type:String},bgColor:{type:String,default:"#f54e45"}},data:function(){return{contentArr:[],contentStr:""}},computed:{figure:function(){return[0,1,2,3,4,5,6,7,8,9]},countTitle:function(){return this.contentArr>100?this.content:""}},watch:{content:function(t,e){t!==e&&this.setContent(t)}},created:function(){this.setContent(this.content)},methods:{setContent:function(t){if(isNaN(t))this.contentArr=[],this.contentStr=t;else{this.contentStr="";var e="number"==typeof t?String(t):t;this.contentArr=e.split("")}},handleClick:function(){this.$emit("click")}}},o=(n(344),n(12)),i=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"p-badge",attrs:{title:t.countTitle},on:{click:t.handleClick}},[n("div",[t._t("default")],2),t._v(" "),"string"==typeof t.dot?n("div",{staticClass:"p-badge-normal p-badge-dot",style:{backgroundColor:t.bgColor}}):t.contentArr.length&&t.contentArr[0]>0?n("div",{staticClass:"p-badge-normal",style:{backgroundColor:t.bgColor}},[t.contentArr.length<3?n("section",{staticClass:"p-badge-text"},[t.contentArr[0]?n("article",{staticClass:"p-badge-figure",style:{transform:"translate3d(0,-"+18*t.contentArr[0]+"px,0)"}},t._l(t.figure,(function(e){return n("span",{key:"n1-"+e},[t._v(t._s(e))])})),0):t._e(),t._v(" "),t.contentArr[1]?n("article",{staticClass:"p-badge-figure",style:{transform:"translate3d(0,-"+18*t.contentArr[1]+"px,0)"}},t._l(t.figure,(function(e){return n("span",{key:"n2-"+e},[t._v(t._s(e))])})),0):t._e(),t._v(" "),t.contentArr[2]?n("article",{staticClass:"p-badge-add"},[t._v("+")]):t._e()]):n("section",{staticClass:"p-badge-text"},[t._m(0),t._v(" "),t._m(1),t._v(" "),n("article",{staticClass:"p-badge-add"},[t._v("+")])])]):t.contentStr?n("div",{staticClass:"p-badge-normal",style:{backgroundColor:t.bgColor}},[n("section",{staticClass:"p-badge-str"},[t._v(t._s(t.contentStr))])]):t._e()])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("article",{staticClass:"p-badge-figure"},[e("span",[this._v("9")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("article",{staticClass:"p-badge-figure"},[e("span",[this._v("9")])])}],!1,null,null,null).exports;i.install=function(t){return t.component(i.name,i)};e.default=i}})}));