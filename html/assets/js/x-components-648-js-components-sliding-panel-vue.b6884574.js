(window.webpackJsonp=window.webpackJsonp||[]).push([[431,248,432],{304:function(t,n,e){"use strict";e.r(n),e.d(n,"Debounce",(function(){return s}));var o=e(1),i=e(23),l=e(6);function s(t,n){return void 0===n&&(n={}),Object(l.createDecorator)((function(e,l){var s=e.methods[l],r=Object(i.debounce)((function(t,n){return s.call.apply(s,Object(o.__spreadArray)([t],n))}),t,n);e.methods[l]=function(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];r(this,t)}}))}},392:function(t,n,e){"use strict";e.r(n);var o=e(16),i=e.n(o),l=e(17),s=e.n(l),r=e(649).default,a=function(){var t=this,n=t.$createElement,e=t._self._c||n;return t.$slots.default?e("div",{staticClass:"x-sliding-panel",class:t.cssClasses,attrs:{"data-test":"sliding-panel"}},[t.showButtons?e("button",{staticClass:"x-sliding-panel__button x-sliding-panel__button-left x-button",class:t.buttonClass,attrs:{"data-test":"sliding-panel-left-button"},on:{click:t.scrollLeft}},[t._t("sliding-panel-left-button",(function(){return[t._v("ᐸ")]}))],2):t._e(),t._v(" "),e("div",{ref:"scrollContainer",staticClass:"x-list x-list--horizontal x-sliding-panel__scroll",attrs:{"data-test":"sliding-panel-scroll"},on:{scroll:t.debouncedUpdateScrollPosition,transitionend:t.debouncedUpdateScrollPosition,animationend:t.debouncedUpdateScrollPosition}},[t._t("default")],2),t._v(" "),t.showButtons?e("button",{staticClass:"x-sliding-panel__button x-sliding-panel__button-right x-button",class:t.buttonClass,attrs:{"data-test":"sliding-panel-right-button"},on:{click:t.scrollRight}},[t._t("sliding-panel-right-button",(function(){return[t._v("ᐳ")]}))],2):t._e()]):t._e()};a._withStripped=!0;var c=function(t){t&&t("data-v-1c771718_0",{source:".x-sliding-panel[data-v-1c771718] {\n  align-items: center;\n  display: flex;\n  flex-flow: row nowrap;\n  height: 100%;\n  position: relative;\n}\n.x-sliding-panel__button[data-v-1c771718] {\n  opacity: 0;\n  pointer-events: none;\n  position: absolute;\n  transition: all ease-out 0.2s;\n  z-index: 2;\n  /* To overlay the design system gradient with z-index:1 */\n}\n.x-sliding-panel__button-left[data-v-1c771718] {\n  left: 0;\n}\n.x-sliding-panel__button-right[data-v-1c771718] {\n  right: 0;\n}\n.x-sliding-panel__scroll[data-v-1c771718] {\n  display: flex;\n  flex: 100%;\n  flex-flow: row nowrap;\n  overflow: auto;\n  scrollbar-width: none;\n  -ms-overflow-style: none;\n}\n.x-sliding-panel__scroll[data-v-1c771718]::-webkit-scrollbar {\n  display: none;\n}\n.x-sliding-panel:not(.x-sliding-panel--show-buttons-on-hover):not(.x-sliding-panel--at-start) .x-sliding-panel__button-left[data-v-1c771718] {\n  opacity: 1;\n  pointer-events: all;\n}\n.x-sliding-panel:not(.x-sliding-panel--show-buttons-on-hover):not(.x-sliding-panel--at-end) .x-sliding-panel__button-right[data-v-1c771718] {\n  opacity: 1;\n  pointer-events: all;\n}",map:void 0,media:void 0})},d=i()({render:a,staticRenderFns:[]},c,r,"data-v-1c771718",!1,void 0,!1,s.a,void 0,void 0);n.default=d},649:function(t,n,e){"use strict";e.r(n);var o=e(1),i=e(3),l=e(0),s=e(304),r=function(t){function n(){var n=null!==t&&t.apply(this,arguments)||this;return n.isScrollAtStart=!0,n.isScrollAtEnd=!0,n}return Object(o.__extends)(n,t),Object.defineProperty(n.prototype,"cssClasses",{get:function(){return{"x-sliding-panel--at-start":this.isScrollAtStart,"x-sliding-panel--at-end":this.isScrollAtEnd}},enumerable:!1,configurable:!0}),n.prototype.mounted=function(){var t=this,n=new ResizeObserver(this.debouncedUpdateScrollPosition);n.observe(this.$el);var e=new MutationObserver(this.restoreAndUpdateScroll);this.$watch((function(){return t.resetOnContentChange}),(function(n){n?e.observe(t.$refs.scrollContainer,{attributes:!1,childList:!0,subtree:!0,characterData:!1}):e.disconnect()}),{immediate:!0}),this.$on("hook:beforeDestroy",(function(){e.disconnect(),n.disconnect()})),this.updateScrollPosition()},n.prototype.restoreAndUpdateScroll=function(){this.$refs.scrollContainer.scroll({left:0,behavior:"smooth"}),this.updateScrollPosition()},n.prototype.updateScrollPosition=function(){var t=this.$refs.scrollContainer,n=t.scrollLeft,e=t.clientWidth,o=t.scrollWidth;this.isScrollAtStart=!n,this.isScrollAtEnd=n+e+2>=o},n.prototype.debouncedUpdateScrollPosition=function(){this.updateScrollPosition()},n.prototype.scrollLeft=function(){this.scrollTo(-this.$refs.scrollContainer.clientWidth)},n.prototype.scrollRight=function(){this.scrollTo(this.$refs.scrollContainer.clientWidth)},n.prototype.scrollTo=function(t){this.$refs.scrollContainer.scrollBy({left:t*this.scrollFactor,behavior:"smooth"})},Object(o.__decorate)([Object(l.c)({default:.7})],n.prototype,"scrollFactor",void 0),Object(o.__decorate)([Object(l.c)({default:!0})],n.prototype,"showButtons",void 0),Object(o.__decorate)([Object(l.c)({default:!0})],n.prototype,"resetOnContentChange",void 0),Object(o.__decorate)([Object(l.c)()],n.prototype,"buttonClass",void 0),Object(o.__decorate)([Object(s.Debounce)(100,{leading:!0})],n.prototype,"restoreAndUpdateScroll",null),Object(o.__decorate)([Object(s.Debounce)(100,{leading:!0})],n.prototype,"debouncedUpdateScrollPosition",null),n=Object(o.__decorate)([l.a],n)}(i.default);n.default=r}}]);