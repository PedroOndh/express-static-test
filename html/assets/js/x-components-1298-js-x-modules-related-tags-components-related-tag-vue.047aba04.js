(window.webpackJsonp=window.webpackJsonp||[]).push([[141,142,145,146,147,148,150,151,152,153,154,155,189,442,443,444,445],{141:function(e,t,a){"use strict";a.r(t),a.d(t,"createFetchAndSaveActions",(function(){return n}));var r=a(97);function n(e){var t,a=e.fetch,n=e.onSuccess,s=e.onError,c=e.onCancel;function u(){null==t||t()}return{fetchAndSave:function(e,d){u(),e.commit("setStatus","loading");var i=Object(r.cancellablePromise)(a(e,d),(function(){!function(e){t=void 0,e.commit("setStatus","success"),null==c||c()}(e)})),l=i.promise,o=i.cancel;return t=o,l.then((function(t){return function(e,t){return Promise.resolve(n(e,t)).then((function(){e.commit("setStatus","success")}))}(e,t)})).catch((function(t){return function(e,t){t!==r.CancelSymbol&&(e.commit("setStatus","error"),null==s||s(t))}(e,t)}))},cancelPrevious:u}}},142:function(e,t,a){"use strict";function r(e,t){e.status=t}a.r(t),a.d(t,"setStatus",(function(){return r}))},424:function(e,t,a){"use strict";a.r(t),a.d(t,"cancelFetchAndSaveRelatedTagsWire",(function(){return o})),a.d(t,"clearRelatedTagsQuery",(function(){return T})),a.d(t,"clearSelectedRelatedTags",(function(){return f})),a.d(t,"fetchAndSaveRelatedTagsWire",(function(){return l})),a.d(t,"relatedTagsWiring",(function(){return m})),a.d(t,"setRelatedTagsExtraParams",(function(){return i})),a.d(t,"setRelatedTagsQuery",(function(){return d})),a.d(t,"setUrlParamsWire",(function(){return h})),a.d(t,"toggleRelatedTagWire",(function(){return g}));var r=a(35),n=a(50),s=Object(n.namespacedWireCommit)("relatedTags"),c=Object(n.namespacedWireDispatch)("relatedTags"),u=Object(n.namespacedWireDispatchWithoutPayload)("relatedTags"),d=s("setQuery"),i=s("setParams"),l=c("fetchAndSaveRelatedTags"),o=u("cancelFetchAndSaveRelatedTags"),g=c("toggleRelatedTag"),f=s("setSelectedRelatedTags",[]),T=s("setQuery",""),h=c("setUrlParams"),m=Object(r.createWiring)({UserAcceptedAQuery:{setRelatedTagsQuery:d,clearSelectedRelatedTags:f},UserPickedARelatedTag:{toggleRelatedTagWire:g},UserChangedExtraParams:{clearSelectedRelatedTags:f},RelatedTagsRequestChanged:{fetchAndSaveRelatedTagsWire:l},UserClearedQuery:{cancelFetchAndSaveRelatedTagsWire:o,clearRelatedTagsQuery:T,clearSelectedRelatedTags:f},ExtraParamsChanged:{setRelatedTagsExtraParams:i},ParamsLoadedFromUrl:{setUrlParamsWire:h}})},433:function(e,t,a){"use strict";a.r(t),a.d(t,"relatedTagsXStoreModule",(function(){return i}));var r=a(142),n=a(448),s=a(463),c=a(501),u=a(464),d=a(465),i={state:function(){return{query:"",relatedTags:[],selectedRelatedTags:[],status:"initial",config:{maxItemsToRequest:10},params:{}}},getters:{request:a(466).request,relatedTags:d.relatedTags},mutations:{setQuery:function(e,t){e.query=t},setRelatedTags:function(e,t){e.relatedTags=t},setSelectedRelatedTags:function(e,t){e.selectedRelatedTags=t},setStatus:r.setStatus,setParams:function(e,t){e.params=t}},actions:{cancelFetchAndSaveRelatedTags:n.cancelFetchAndSaveRelatedTags,fetchRelatedTags:s.fetchRelatedTags,fetchAndSaveRelatedTags:n.fetchAndSaveRelatedTags,toggleRelatedTag:u.toggleRelatedTag,setUrlParams:c.setUrlParams}}},448:function(e,t,a){"use strict";a.r(t),a.d(t,"cancelFetchAndSaveRelatedTags",(function(){return d})),a.d(t,"fetchAndSaveRelatedTags",(function(){return u}));var r=a(141),n=Object(r.createFetchAndSaveActions)({fetch:function(e,t){return(0,e.dispatch)("fetchRelatedTags",t)},onSuccess:function(e,t){(0,e.commit)("setRelatedTags",t)}}),s=n.fetchAndSave,c=n.cancelPrevious,u=s,d=c},463:function(e,t,a){"use strict";a.r(t),a.d(t,"fetchRelatedTags",(function(){return n}));var r=a(37),n=function(e,t){return t?r.XPlugin.adapter.getRelatedTags(t).then((function(e){return e.relatedTags})):[]}},464:function(e,t,a){"use strict";a.r(t),a.d(t,"toggleRelatedTag",(function(){return n}));var r=a(1),n=function(e,t){var a=e.commit,n=e.state.selectedRelatedTags;n.includes(t)?(a("setSelectedRelatedTags",n.filter((function(e){return e!==t}))),a("setRelatedTags",[t])):(a("setSelectedRelatedTags",Object(r.__spreadArray)(Object(r.__spreadArray)([],n),[t])),a("setRelatedTags",[]))}},465:function(e,t,a){"use strict";a.r(t),a.d(t,"relatedTags",(function(){return n}));var r=a(1),n=function(e){var t=e.relatedTags,a=e.selectedRelatedTags;return Object(r.__spreadArray)(Object(r.__spreadArray)([],a),t)}},466:function(e,t,a){"use strict";a.r(t),a.d(t,"request",(function(){return n}));var r=a(1),n=function(e){var t=e.query,a=e.selectedRelatedTags,n=e.config,s=e.params;return t.trim()?Object(r.__assign)({query:t,relatedTags:a,rows:n.maxItemsToRequest,start:0},s):null}},482:function(e,t,a){"use strict";a.r(t),a.d(t,"relatedTagsXModule",(function(){return c}));var r=a(433),n=a(502),s=a(424),c={name:"relatedTags",storeModule:r.relatedTagsXStoreModule,storeEmitters:n.relatedTagsEmitters,wiring:s.relatedTagsWiring}},501:function(e,t,a){"use strict";a.r(t),a.d(t,"setUrlParams",(function(){return r}));var r=function(e,t){var a=e.commit,r=t.query;a("setSelectedRelatedTags",function(e,t){return e.map((function(e){return{tag:e,modelName:"RelatedTag",selected:!0,query:t?t+" "+e:"",previous:""}}))}(t.tag,r)),a("setRelatedTags",[]),a("setQuery",r)}},502:function(e,t,a){"use strict";a.r(t),a.d(t,"relatedTagsEmitters",(function(){return c}));var r=a(96),n=a(61),s=a(433),c=Object(n.createStoreEmitters)(s.relatedTagsXStoreModule,{RelatedTagsChanged:function(e){return e.relatedTags},RelatedTagsRequestChanged:function(e,t){return t.request},SelectedRelatedTagsChanged:{selector:function(e){return e.selectedRelatedTags},filter:Object(r.createEmitterArrayFilter)("tag")}})},545:function(e,t,a){"use strict";a.r(t);var r=a(16),n=a.n(r),s=a(17),c=a.n(s),u=a(561).default,d=function(){var e=this,t=e.$createElement;return(e._self._c||t)("button",{staticClass:"x-tag x-related-tag",class:e.dynamicClasses,attrs:{"data-test":"related-tag"},on:{click:e.emitEvents}},[e._t("default",(function(){return[e._v(e._s(e.relatedTag.tag))]}),null,{relatedTag:e.relatedTag,isSelected:e.isSelected,shouldHighlightCurated:e.shouldHighlightCurated})],2)};d._withStripped=!0;var i=function(e){e&&e("data-v-6081d22c_0",{source:".x-related-tag[data-v-6081d22c] {\n  white-space: nowrap;\n}\n.x-related-tag--is-selected[data-v-6081d22c] {\n  background: lightgrey;\n}",map:void 0,media:void 0})},l=n()({render:d,staticRenderFns:[]},i,u,"data-v-6081d22c",!1,void 0,!1,c.a,void 0,void 0);t.default=l},561:function(e,t,a){"use strict";a.r(t);var r=a(1),n=a(3),s=a(0),c=a(60),u=a(59),d=a(482),i=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return Object(r.__extends)(t,e),t.prototype.createEventMetadata=function(){return{target:this.$el,feature:"related_tag"}},t.prototype.emitEvents=function(){this.$x.emit(this.isSelected?"UserDeselectedARelatedTag":"UserSelectedARelatedTag",this.relatedTag,this.createEventMetadata()),this.$x.emit("UserPickedARelatedTag",this.relatedTag,this.createEventMetadata())},Object.defineProperty(t.prototype,"isSelected",{get:function(){return this.selectedRelatedTags.includes(this.relatedTag)},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"shouldHighlightCurated",{get:function(){var e;return this.highlightCurated&&null!==(e=this.relatedTag.isCurated)&&void 0!==e&&e},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"dynamicClasses",{get:function(){return{"x-tag--is-curated":this.shouldHighlightCurated,"x-related-tag--is-curated":this.shouldHighlightCurated,"x-tag--is-selected":this.isSelected,"x-related-tag--is-selected":this.isSelected}},enumerable:!1,configurable:!0}),Object(r.__decorate)([Object(s.c)({default:!1,type:Boolean})],t.prototype,"highlightCurated",void 0),Object(r.__decorate)([Object(s.c)({required:!0})],t.prototype,"relatedTag",void 0),Object(r.__decorate)([Object(c.State)("relatedTags","selectedRelatedTags")],t.prototype,"selectedRelatedTags",void 0),t=Object(r.__decorate)([Object(s.a)({mixins:[Object(u.xComponentMixin)(d.relatedTagsXModule)]})],t)}(n.default);t.default=i},96:function(e,t,a){"use strict";function r(e){return null==e||0===e.length}function n(e,t){return e.reduce((function(e,a){return t?e[a[t]]=a:"string"==typeof a&&(e[a]=a),e}),{})}function s(e,t){return e.reduce((function(e,a,r){var n=t(a,r);return e[n]||(e[n]=[]),e[n].push(a),e}),{})}function c(e,t,a){var r=function(e,n){return void 0===n&&(n=[]),e.reduce((function(e,n){return t(n)&&(e.push(n),r(n[a],e)),e}),n)};return r(e)}function u(e,t){return function e(a,r){return r?Array.isArray(r)?r.reduce(e,a):(a.push(r),e(a,r[t])):a}([],e)}function d(e){var t="function"==typeof e?e:function(t,a){return t[e]===a[e]};return function(e,a){return e.length!==a.length||e.some((function(e){return!a.find((function(a){return t(e,a)}))}))}}a.r(t),a.d(t,"arrayToObject",(function(){return n})),a.d(t,"createEmitterArrayFilter",(function(){return d})),a.d(t,"deepFilter",(function(){return c})),a.d(t,"deepFlat",(function(){return u})),a.d(t,"groupItemsBy",(function(){return s})),a.d(t,"isArrayEmpty",(function(){return r}))},97:function(e,t,a){"use strict";a.r(t),a.d(t,"CancelSymbol",(function(){return n})),a.d(t,"cancellablePromise",(function(){return s}));var r=a(36),n=Symbol("cancelled-promise");function s(e,t){var a=r.noOp,s=new Promise((function(e,r){a=function(e){r(n),null==t||t(e)}}));return{promise:Promise.race([e,s]),cancel:a}}}}]);