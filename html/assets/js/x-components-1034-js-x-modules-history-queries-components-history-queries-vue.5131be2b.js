(window.webpackJsonp=window.webpackJsonp||[]).push([[44,45,46,47,48,49,189,437,438,444,453,457,458],{102:function(e,t,n){"use strict";n.r(t),n.d(t,"sanitize",(function(){return i}));var r=/[<>&]/g,i=function(e){return e.replace(r,(function(e){return"&#"+e.charCodeAt(0)+";"}))}},1519:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var r=n(1),i=n(12);var u=n(99),o=n(148);var s="function"==typeof Symbol&&Symbol.iterator?Symbol.iterator:"@@iterator";var c=n(149);function a(e){if(e instanceof u.a)return e;if(null!=e){if(function(e){return Object(i.a)(e[o.a])}(e))return v=e,new u.a((function(e){var t=v[o.a]();if(Object(i.a)(t.subscribe))return t.subscribe(e);throw new TypeError("Provided object does not correctly implement Symbol.observable")}));if((f=e)&&"number"==typeof f.length&&"function"!=typeof f)return d=e,new u.a((function(e){for(var t=0;t<d.length&&!e.closed;t++)e.next(d[t]);e.complete()}));if(a=e,Object(i.a)(null==a?void 0:a.then))return n=e,new u.a((function(e){n.then((function(t){e.closed||(e.next(t),e.complete())}),(function(t){return e.error(t)})).then(null,c.a)}));if(function(e){return Symbol.asyncIterator&&Object(i.a)(null==e?void 0:e[Symbol.asyncIterator])}(e))return l(e);if(function(e){return Object(i.a)(null==e?void 0:e[s])}(e))return t=e,new u.a((function(e){var n,i;try{for(var u=Object(r.__values)(t),o=u.next();!o.done;o=u.next()){var s=o.value;if(e.next(s),e.closed)return}}catch(e){n={error:e}}finally{try{o&&!o.done&&(i=u.return)&&i.call(u)}finally{if(n)throw n.error}}e.complete()}));if(function(e){return Object(i.a)(null==e?void 0:e.getReader)}(e))return l(function(e){return Object(r.__asyncGenerator)(this,arguments,(function(){var t,n,i;return Object(r.__generator)(this,(function(u){switch(u.label){case 0:t=e.getReader(),u.label=1;case 1:u.trys.push([1,,9,10]),u.label=2;case 2:return[4,Object(r.__await)(t.read())];case 3:return n=u.sent(),i=n.value,n.done?[4,Object(r.__await)(void 0)]:[3,5];case 4:return[2,u.sent()];case 5:return[4,Object(r.__await)(i)];case 6:return[4,u.sent()];case 7:return u.sent(),[3,2];case 8:return[3,10];case 9:return t.releaseLock(),[7];case 10:return[2]}}))}))}(e))}var t,n,a,d,f,v;throw function(e){return new TypeError("You provided "+(null!==e&&"object"==typeof e?"an invalid object":"'"+e+"'")+" where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.")}(e)}function l(e){return new u.a((function(t){(function(e,t){var n,i,u,o;return Object(r.__awaiter)(this,void 0,void 0,(function(){var s,c;return Object(r.__generator)(this,(function(a){switch(a.label){case 0:a.trys.push([0,5,6,11]),n=Object(r.__asyncValues)(e),a.label=1;case 1:return[4,n.next()];case 2:if((i=a.sent()).done)return[3,4];if(s=i.value,t.next(s),t.closed)return[2];a.label=3;case 3:return[3,1];case 4:return[3,11];case 5:return c=a.sent(),u={error:c},[3,11];case 6:return a.trys.push([6,,9,10]),i&&!i.done&&(o=n.return)?[4,o.call(n)]:[3,8];case 7:a.sent(),a.label=8;case 8:return[3,10];case 9:if(u)throw u.error;return[7];case 10:return[7];case 11:return t.complete(),[2]}}))}))})(e,t).catch((function(e){return t.error(e)}))}))}},292:function(e,t,n){"use strict";n.r(t);var r=n(16),i=n.n(r),u=n(421).default,o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("button",{staticClass:"x-suggestion",class:e.dynamicCSSClasses,on:{click:e.emitEvents}},[e._t("default",(function(){return[n("span",{staticClass:"x-suggestion__query",attrs:{"aria-label":e.suggestion.query},domProps:{innerHTML:e._s(e.queryHTML)}})]}),null,{suggestion:e.suggestion,queryHTML:e.queryHTML})],2)};o._withStripped=!0;var s=i()({render:o,staticRenderFns:[]},void 0,u,void 0,!1,void 0,!1,void 0,void 0,void 0);t.default=s},295:function(e,t,n){"use strict";n.r(t);var r=n(16),i=n.n(r),u=n(17),o=n.n(u),s=n(439).default,c=function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.suggestions.length?n(e.animation,{tag:"component",staticClass:"x-list x-suggestions",attrs:{tag:"ul"}},e._l(e.suggestionsToRender,(function(t,r){return n("li",{key:e.suggestionsKeys[r],staticClass:"x-suggestions__item",attrs:{"data-test":"suggestion-item"}},[e._t("default",null,null,{suggestion:t,index:r})],2)})),0):e._e()};c._withStripped=!0;var a=function(e){e&&e("data-v-162f615e_0",{source:".x-suggestions[data-v-162f615e] {\n  list-style-type: none;\n}",map:void 0,media:void 0})},l=i()({render:c,staticRenderFns:[]},a,s,"data-v-162f615e",!1,void 0,!1,o.a,void 0,void 0);t.default=l},395:function(e,t,n){"use strict";n.r(t),n.d(t,"debounce",(function(){return b})),n.d(t,"filter",(function(){return f})),n.d(t,"filterBlacklistedModules",(function(){return g})),n.d(t,"filterFalsyPayload",(function(){return v})),n.d(t,"filterTruthyPayload",(function(){return y})),n.d(t,"filterWhitelistedModules",(function(){return h})),n.d(t,"mapWire",(function(){return _})),n.d(t,"throttle",(function(){return p}));var r=n(1),i=n(994),u=n(64),o=n(53),s=n(62),c=n(1519);var a={leading:!0,trailing:!1};var l=n(1518),d=n(405);function f(e,t){return function(n,u,o){return e(n.pipe(Object(i.a)((function(e){return t(Object(r.__assign)(Object(r.__assign)({},e),{store:u}))}))),u,o)}}function v(e){return f(e,(function(e){return!!e.eventPayload}))}function y(e){return f(e,(function(e){return!e.eventPayload}))}function h(e,t){var n=new Set(t);return f(e,(function(e){var t=e.metadata;return n.has(t.moduleName)}))}function g(e,t){var n=new Set(t);return f(e,(function(e){var t=e.metadata;return!n.has(t.moduleName)}))}function b(e,t,n){return void 0===n&&(n={}),function(r,i,a){return e(r.pipe((l=function(){return Object(d.createTimer)(Object(d.normalizeTime)(t,i),n,a)},Object(u.a)((function(e,t){var n=!1,r=null,i=null,u=function(){if(null==i||i.unsubscribe(),i=null,n){n=!1;var e=r;r=null,t.next(e)}};e.subscribe(new s.a(t,(function(e){null==i||i.unsubscribe(),n=!0,r=e,i=new s.a(t,u,o.a),Object(c.a)(l(e)).subscribe(i)}),(function(){u(),t.complete()}),void 0,(function(){r=i=null})))})))),i,a);var l}}function p(e,t,n){return void 0===n&&(n={}),function(r,i,o){return e(r.pipe((l=function(){return Object(d.createTimer)(Object(d.normalizeTime)(t,i),n,o)},y=(v=void 0===(f={leading:!0,trailing:!0})?a:f).leading,h=v.trailing,Object(u.a)((function(e,t){var n=!1,r=null,i=null,u=!1,o=function(){null==i||i.unsubscribe(),i=null,h&&(f(),u&&t.complete())},a=function(){i=null,u&&t.complete()},d=function(e){return i=Object(c.a)(l(e)).subscribe(new s.a(t,o,a))},f=function(){if(n){n=!1;var e=r;r=null,t.next(e),!u&&d(e)}};e.subscribe(new s.a(t,(function(e){n=!0,r=e,(!i||i.closed)&&(y?f():d(e))}),(function(){u=!0,(!(h&&n&&i)||i.closed)&&t.complete()})))})))),i,o);var l,f,v,y,h}}function _(e,t){return function(n){for(var i=[],u=1;u<arguments.length;u++)i[u-1]=arguments[u];return e.apply(void 0,Object(r.__spreadArray)([n.pipe(Object(l.a)((function(e){var n=e.eventPayload,i=Object(r.__rest)(e,["eventPayload"]);return Object(r.__assign)({eventPayload:t(n)},i)})))],i))}}},405:function(e,t,n){"use strict";n.r(t),n.d(t,"createTimer",(function(){return w})),n.d(t,"mergeEvents",(function(){return O})),n.d(t,"normalizeTime",(function(){return x}));var r=n(288),i=n(99),u=n(1),o=function(e){function t(t,n){return e.call(this)||this}return Object(u.__extends)(t,e),t.prototype.schedule=function(e,t){return void 0===t&&(t=0),this},t}(n(22).b),s={setInterval:function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];var n=s.delegate;return((null==n?void 0:n.setInterval)||setInterval).apply(void 0,Object(u.__spreadArray)([],Object(u.__read)(e)))},clearInterval:function(e){var t=s.delegate;return((null==t?void 0:t.clearInterval)||clearInterval)(e)},delegate:void 0},c=n(54),a=function(e){function t(t,n){var r=e.call(this,t,n)||this;return r.scheduler=t,r.work=n,r.pending=!1,r}return Object(u.__extends)(t,e),t.prototype.schedule=function(e,t){if(void 0===t&&(t=0),this.closed)return this;this.state=e;var n=this.id,r=this.scheduler;return null!=n&&(this.id=this.recycleAsyncId(r,n,t)),this.pending=!0,this.delay=t,this.id=this.id||this.requestAsyncId(r,this.id,t),this},t.prototype.requestAsyncId=function(e,t,n){return void 0===n&&(n=0),s.setInterval(e.flush.bind(e,this),n)},t.prototype.recycleAsyncId=function(e,t,n){if(void 0===n&&(n=0),null!=n&&this.delay===n&&!1===this.pending)return t;s.clearInterval(t)},t.prototype.execute=function(e,t){if(this.closed)return new Error("executing a cancelled action");this.pending=!1;var n=this._execute(e,t);if(n)return n;!1===this.pending&&null!=this.id&&(this.id=this.recycleAsyncId(this.scheduler,this.id,null))},t.prototype._execute=function(e,t){var n,r=!1;try{this.work(e)}catch(e){r=!0,n=e||new Error("Scheduled action threw falsy error")}if(r)return this.unsubscribe(),n},t.prototype.unsubscribe=function(){if(!this.closed){var t=this.id,n=this.scheduler,r=n.actions;this.work=this.state=this.scheduler=null,this.pending=!1,Object(c.a)(r,this),null!=t&&(this.id=this.recycleAsyncId(n,t,null)),this.delay=null,e.prototype.unsubscribe.call(this)}},t}(o),l=n(150),d=function(){function e(t,n){void 0===n&&(n=e.now),this.schedulerActionCtor=t,this.now=n}return e.prototype.schedule=function(e,t,n){return void 0===t&&(t=0),new this.schedulerActionCtor(this,e).schedule(n,t)},e.now=l.a.now,e}(),f=new(function(e){function t(t,n){void 0===n&&(n=d.now);var r=e.call(this,t,n)||this;return r.actions=[],r._active=!1,r._scheduled=void 0,r}return Object(u.__extends)(t,e),t.prototype.flush=function(e){var t=this.actions;if(this._active)t.push(e);else{var n;this._active=!0;do{if(n=e.execute(e.state,e.delay))break}while(e=t.shift());if(this._active=!1,n){for(;e=t.shift();)e.unsubscribe();throw n}}},t}(d))(a),v=n(12);function y(e,t,n){void 0===e&&(e=0),void 0===n&&(n=f);var r,u=-1;return null!=t&&((r=t)&&Object(v.a)(r.schedule)?n=t:u=t),new i.a((function(t){var r=function(e){return e instanceof Date&&!isNaN(e)}(e)?+e-n.now():e;r<0&&(r=0);var i=0;return n.schedule((function(){t.closed||(t.next(i++),0<=u?this.schedule(void 0,u):t.complete())}),r)}))}var h=n(1519),g=Array.isArray;function b(e){return 1===e.length&&g(e[0])?e[0]:e}var p=n(62);function _(e){return function(t){for(var n=[],r=function(r){n.push(Object(h.a)(e[r]).subscribe(new p.a(t,(function(e){if(n){for(var i=0;i<n.length;i++)i!==r&&n[i].unsubscribe();n=null}t.next(e)}))))},i=0;n&&!t.closed&&i<e.length;i++)r(i)}}var m=n(64),j=n(53);function O(e,t){var n=new r.a;return(Array.isArray(e)?e:[e]).forEach((function(e){return t(e).subscribe((function(){return n.next()}))})),n}function x(e,t){return"function"==typeof e?e(t):e}function w(e,t,n){var r,u=t.cancelOn,o=t.forceOn,s=y(e);return o&&(s=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return 1===(e=b(e)).length?Object(h.a)(e[0]):new i.a(_(e))}(s,O(o,n))),u&&(s=s.pipe((r=O(u,n),Object(m.a)((function(e,t){Object(h.a)(r).subscribe(new p.a(t,(function(){return t.complete()}),j.a)),!t.closed&&e.subscribe(t)}))))),s}},421:function(e,t,n){"use strict";n.r(t);var r=n(1),i=n(3),u=n(0),o=n(98),s=n(13),c=n(102),a=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return Object(r.__extends)(t,e),Object.defineProperty(t.prototype,"events",{get:function(){return Object(r.__assign)({UserAcceptedAQuery:this.suggestion.query,UserSelectedASuggestion:this.suggestion},this.suggestionSelectedEvents)},enumerable:!1,configurable:!0}),t.prototype.emitEvents=function(){var e=this;Object(s.forEach)(this.events,(function(t,n){e.$x.emit(t,n,{target:e.$el,feature:e.feature})}))},Object.defineProperty(t.prototype,"hasMatchingQuery",{get:function(){return!!this.query&&Object(o.normalizeString)(this.suggestion.query).includes(this.query)},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"dynamicCSSClasses",{get:function(){return{"x-suggestion--matching":this.hasMatchingQuery}},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"queryHTML",{get:function(){if(this.hasMatchingQuery){var e=Object(o.normalizeString)(this.suggestion.query).indexOf(this.query),t=this.splitAt(this.suggestion.query,e,this.query.length);return t[0]+'<span data-test="matching-part" class="x-suggestion__matching-part">'+t[1]+"</span>"+t[2]}return Object(c.sanitize)(this.suggestion.query)},enumerable:!1,configurable:!0}),t.prototype.splitAt=function(e,t,n){var r=e.substr(0,t),i=e.substr(t,n),u=e.substr(t+n);return[Object(c.sanitize)(r),Object(c.sanitize)(i),Object(c.sanitize)(u)]},Object(r.__decorate)([Object(u.c)({default:""})],t.prototype,"query",void 0),Object(r.__decorate)([Object(u.c)({required:!0})],t.prototype,"suggestion",void 0),Object(r.__decorate)([Object(u.c)()],t.prototype,"feature",void 0),Object(r.__decorate)([Object(u.c)({required:!0})],t.prototype,"suggestionSelectedEvents",void 0),t=Object(r.__decorate)([u.a],t)}(i.default);t.default=a},439:function(e,t,n){"use strict";n.r(t);var r=n(1),i=n(3),u=n(0),o=n(96),s=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return Object(r.__extends)(t,e),Object.defineProperty(t.prototype,"suggestionsKeys",{get:function(){var e=this;return this.suggestions.map((function(t){return Object(o.isArrayEmpty)(t.facets)?t.query:t.query+"-in-"+e.getFacetsKey(t.facets)}))},enumerable:!1,configurable:!0}),t.prototype.getFacetsKey=function(e){return e.map(this.getFacetKey).join("&")},t.prototype.getFacetKey=function(e){return e.filters.map((function(e){return e.id})).join("&")},Object.defineProperty(t.prototype,"suggestionsToRender",{get:function(){return this.suggestions.slice(0,this.maxItemsToRender)},enumerable:!1,configurable:!0}),Object(r.__decorate)([Object(u.c)({required:!0})],t.prototype,"suggestions",void 0),Object(r.__decorate)([Object(u.c)({default:"ul"})],t.prototype,"animation",void 0),Object(r.__decorate)([Object(u.c)()],t.prototype,"maxItemsToRender",void 0),t=Object(r.__decorate)([u.a],t)}(i.default);t.default=s},514:function(e,t,n){"use strict";n.r(t);var r=n(16),i=n.n(r),u=n(572).default,o=function(){var e=this.$createElement;return(this._self._c||e)("BaseEventButton",{staticClass:"x-button x-remove-history-query",attrs:{events:this.removeHistoryQueryEvent}},[this._t("default")],2)};o._withStripped=!0;var s=i()({render:o,staticRenderFns:[]},void 0,u,void 0,!1,void 0,!1,void 0,void 0,void 0);t.default=s},542:function(e,t,n){"use strict";n.r(t);var r=n(16),i=n.n(r),u=n(558).default,o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"x-suggestion-group x-history-query"},[n("BaseSuggestion",e._b({staticClass:"x-history-query__suggestion",attrs:{"data-test":"history-query",feature:"history_query"},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.suggestion,r=t.queryHTML;return[e._t("default",null,null,{suggestion:n,queryHTML:r})]}}],null,!0)},"BaseSuggestion",{suggestion:e.suggestion,suggestionSelectedEvents:e.suggestionSelectedEvents,query:e.query},!1)),e._v(" "),n("RemoveHistoryQuery",{staticClass:"x-history-query__remove",attrs:{historyQuery:e.suggestion,"data-test":"remove-history-query"}},[e._t("remove-button-content",(function(){return[e._v("✕")]}),null,{suggestion:e.suggestion})],2)],1)};o._withStripped=!0;var s=i()({render:o,staticRenderFns:[]},void 0,u,void 0,!1,void 0,!1,void 0,void 0,void 0);t.default=s},558:function(e,t,n){"use strict";n.r(t);var r=n(1),i=n(3),u=n(0),o=n(60),s=n(59),c=n(292),a=n(452),l=n(514),d=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return Object(r.__extends)(t,e),Object.defineProperty(t.prototype,"suggestionSelectedEvents",{get:function(){return{UserSelectedAHistoryQuery:this.suggestion}},enumerable:!1,configurable:!0}),Object(r.__decorate)([Object(u.c)({required:!0})],t.prototype,"suggestion",void 0),Object(r.__decorate)([Object(o.Getter)("historyQueries","normalizedQuery")],t.prototype,"query",void 0),t=Object(r.__decorate)([Object(u.a)({mixins:[Object(s.xComponentMixin)(a.historyQueriesXModule)],components:{RemoveHistoryQuery:l.default,BaseSuggestion:c.default}})],t)}(i.default);t.default=d},693:function(e,t,n){"use strict";n.r(t);var r=n(16),i=n.n(r),u=n(694).default,o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("BaseSuggestions",{staticClass:"x-history-queries",attrs:{suggestions:e.historyQueries,"data-test":"history-queries",animation:e.animation,maxItemsToRender:e.maxItemsToRender},scopedSlots:e._u([{key:"default",fn:function(t){var r=t.suggestion,i=t.index;return[e._t("suggestion",(function(){return[n("HistoryQuery",{staticClass:"x-history-queries__item",attrs:{suggestion:r,"data-test":"history-query-item"},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.queryHTML;return[e._t("suggestion-content",null,null,{suggestion:r,index:i,queryHTML:n})]}},{key:"remove-button-content",fn:function(){return[e._t("suggestion-remove-content",null,null,{suggestion:r,index:i})]},proxy:!0}],null,!0)})]}),null,{suggestion:r,index:i})]}}],null,!0)})};o._withStripped=!0;var s=i()({render:o,staticRenderFns:[]},void 0,u,void 0,!1,void 0,!1,void 0,void 0,void 0);t.default=s},694:function(e,t,n){"use strict";n.r(t);var r=n(1),i=n(3),u=n(0),o=n(60),s=n(59),c=n(295),a=n(452),l=n(542),d=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return Object(r.__extends)(t,e),Object(r.__decorate)([Object(u.c)()],t.prototype,"animation",void 0),Object(r.__decorate)([Object(u.c)()],t.prototype,"maxItemsToRender",void 0),Object(r.__decorate)([Object(o.Getter)("historyQueries","historyQueries")],t.prototype,"historyQueries",void 0),t=Object(r.__decorate)([Object(u.a)({components:{BaseSuggestions:c.default,HistoryQuery:l.default},mixins:[Object(s.xComponentMixin)(a.historyQueriesXModule)]})],t)}(i.default);t.default=d},96:function(e,t,n){"use strict";function r(e){return null==e||0===e.length}function i(e,t){return e.reduce((function(e,n){return t?e[n[t]]=n:"string"==typeof n&&(e[n]=n),e}),{})}function u(e,t){return e.reduce((function(e,n,r){var i=t(n,r);return e[i]||(e[i]=[]),e[i].push(n),e}),{})}function o(e,t,n){var r=function(e,i){return void 0===i&&(i=[]),e.reduce((function(e,i){return t(i)&&(e.push(i),r(i[n],e)),e}),i)};return r(e)}function s(e,t){return function e(n,r){return r?Array.isArray(r)?r.reduce(e,n):(n.push(r),e(n,r[t])):n}([],e)}function c(e){var t="function"==typeof e?e:function(t,n){return t[e]===n[e]};return function(e,n){return e.length!==n.length||e.some((function(e){return!n.find((function(n){return t(e,n)}))}))}}n.r(t),n.d(t,"arrayToObject",(function(){return i})),n.d(t,"createEmitterArrayFilter",(function(){return c})),n.d(t,"deepFilter",(function(){return o})),n.d(t,"deepFlat",(function(){return s})),n.d(t,"groupItemsBy",(function(){return u})),n.d(t,"isArrayEmpty",(function(){return r}))}}]);