(window.webpackJsonp=window.webpackJsonp||[]).push([[430,455],{103:function(t,e,o){"use strict";o.r(e),o.d(e,"throttle",(function(){return r}));var r=function(t,e){var o,r;return function(){for(var n=[],i=0;i<arguments.length;i++)n[i]=arguments[i];r=n,o||(o=setTimeout((function(){t.apply(void 0,r),o=void 0}),e))}}},294:function(t,e,o){"use strict";o.r(e);var r=o(1),n=o(3),i=o(0),c=o(103),l=o(49),s=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.clientHeight=0,e.currentPosition=0,e.previousPosition=0,e.scrollHeight=0,e}return Object(r.__extends)(e,t),Object.defineProperty(e.prototype,"throttledStoreScrollData",{get:function(){return Object(c.throttle)(this.storeScrollData,this.throttleMs)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"distanceToEnd",{get:function(){return this.scrollEndPosition-this.currentPosition},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"hasScrollAlmostReachedEnd",{get:function(){return!this.hasScrollReachedStart&&this.distanceToBottom>this.distanceToEnd},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"hasScrollReachedEnd",{get:function(){return this.currentPosition===this.scrollEndPosition},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"hasScrollReachedStart",{get:function(){return 0===this.currentPosition},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"scrollDirection",{get:function(){return this.currentPosition>this.previousPosition?"DOWN":"UP"},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"scrollEndPosition",{get:function(){return this.scrollHeight-this.clientHeight},enumerable:!1,configurable:!0}),e.prototype.mounted=function(){var t=this;this.$nextTick().then((function(){t.$el?t.storeScrollData():console.warn("[ScrollMixin]","Components using this mixin must set `this.$el` to the HTML node that is scrolling.")}))},e.prototype.resetScroll=function(){var t=this;this.$nextTick().then((function(){t.resetOnChange&&t.$el.scrollTo({top:0})}))},e.prototype.emitScroll=function(t,e){this.$emit("scroll",this.currentPosition),this.previousPosition=e},e.prototype.emitScrollReachedAtStart=function(t){this.$emit("scroll:at-start",t)},e.prototype.emitScrollAlmostAtEnd=function(t){this.$emit("scroll:almost-at-end",t)},e.prototype.emitScrollAtEnd=function(t){this.$emit("scroll:at-end",t)},e.prototype.emitScrollDirection=function(t){this.$emit("scroll:direction-change",t)},e.prototype.storeScrollData=function(){this.$el&&(this.currentPosition=this.$el.scrollTop,this.scrollHeight=this.$el.scrollHeight,this.clientHeight=this.$el.clientHeight)},Object(r.__decorate)([Object(i.c)({default:100})],e.prototype,"distanceToBottom",void 0),Object(r.__decorate)([Object(i.c)({default:100})],e.prototype,"firstElementThresholdPx",void 0),Object(r.__decorate)([Object(i.c)({default:100})],e.prototype,"throttleMs",void 0),Object(r.__decorate)([Object(i.c)({type:Boolean,default:!0})],e.prototype,"resetOnChange",void 0),Object(r.__decorate)([Object(i.c)({default:function(){return["SearchBoxQueryChanged","SortChanged","SelectedFiltersChanged","SelectedRelatedTagsChanged","UserChangedExtraParams"]}})],e.prototype,"resetOn",void 0),Object(r.__decorate)([Object(l.XOn)((function(t){return t.resetOn}))],e.prototype,"resetScroll",null),Object(r.__decorate)([Object(i.h)("currentPosition")],e.prototype,"emitScroll",null),Object(r.__decorate)([Object(i.h)("hasScrollReachedStart")],e.prototype,"emitScrollReachedAtStart",null),Object(r.__decorate)([Object(i.h)("hasScrollAlmostReachedEnd")],e.prototype,"emitScrollAlmostAtEnd",null),Object(r.__decorate)([Object(i.h)("hasScrollReachedEnd")],e.prototype,"emitScrollAtEnd",null),Object(r.__decorate)([Object(i.h)("scrollDirection")],e.prototype,"emitScrollDirection",null),e=Object(r.__decorate)([i.a],e)}(n.default);e.default=s}}]);