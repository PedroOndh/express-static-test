(window.webpackJsonp=window.webpackJsonp||[]).push([[437,189,438,444],{295:function(t,e,n){"use strict";n.r(e);var r=n(16),u=n.n(r),i=n(17),o=n.n(i),s=n(439).default,c=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.suggestions.length?n(t.animation,{tag:"component",staticClass:"x-list x-suggestions",attrs:{tag:"ul"}},t._l(t.suggestionsToRender,(function(e,r){return n("li",{key:t.suggestionsKeys[r],staticClass:"x-suggestions__item",attrs:{"data-test":"suggestion-item"}},[t._t("default",null,null,{suggestion:e,index:r})],2)})),0):t._e()};c._withStripped=!0;var a=function(t){t&&t("data-v-162f615e_0",{source:".x-suggestions[data-v-162f615e] {\n  list-style-type: none;\n}",map:void 0,media:void 0})},f=u()({render:c,staticRenderFns:[]},a,s,"data-v-162f615e",!1,void 0,!1,o.a,void 0,void 0);e.default=f},439:function(t,e,n){"use strict";n.r(e);var r=n(1),u=n(3),i=n(0),o=n(96),s=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return Object(r.__extends)(e,t),Object.defineProperty(e.prototype,"suggestionsKeys",{get:function(){var t=this;return this.suggestions.map((function(e){return Object(o.isArrayEmpty)(e.facets)?e.query:e.query+"-in-"+t.getFacetsKey(e.facets)}))},enumerable:!1,configurable:!0}),e.prototype.getFacetsKey=function(t){return t.map(this.getFacetKey).join("&")},e.prototype.getFacetKey=function(t){return t.filters.map((function(t){return t.id})).join("&")},Object.defineProperty(e.prototype,"suggestionsToRender",{get:function(){return this.suggestions.slice(0,this.maxItemsToRender)},enumerable:!1,configurable:!0}),Object(r.__decorate)([Object(i.c)({required:!0})],e.prototype,"suggestions",void 0),Object(r.__decorate)([Object(i.c)({default:"ul"})],e.prototype,"animation",void 0),Object(r.__decorate)([Object(i.c)()],e.prototype,"maxItemsToRender",void 0),e=Object(r.__decorate)([i.a],e)}(u.default);e.default=s},96:function(t,e,n){"use strict";function r(t){return null==t||0===t.length}function u(t,e){return t.reduce((function(t,n){return e?t[n[e]]=n:"string"==typeof n&&(t[n]=n),t}),{})}function i(t,e){return t.reduce((function(t,n,r){var u=e(n,r);return t[u]||(t[u]=[]),t[u].push(n),t}),{})}function o(t,e,n){var r=function(t,u){return void 0===u&&(u=[]),t.reduce((function(t,u){return e(u)&&(t.push(u),r(u[n],t)),t}),u)};return r(t)}function s(t,e){return function t(n,r){return r?Array.isArray(r)?r.reduce(t,n):(n.push(r),t(n,r[e])):n}([],t)}function c(t){var e="function"==typeof t?t:function(e,n){return e[t]===n[t]};return function(t,n){return t.length!==n.length||t.some((function(t){return!n.find((function(n){return e(t,n)}))}))}}n.r(e),n.d(e,"arrayToObject",(function(){return u})),n.d(e,"createEmitterArrayFilter",(function(){return c})),n.d(e,"deepFilter",(function(){return o})),n.d(e,"deepFlat",(function(){return s})),n.d(e,"groupItemsBy",(function(){return i})),n.d(e,"isArrayEmpty",(function(){return r}))}}]);