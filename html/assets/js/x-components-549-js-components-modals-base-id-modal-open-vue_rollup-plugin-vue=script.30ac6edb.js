(window.webpackJsonp=window.webpackJsonp||[]).push([[395,61,72],{291:function(t,e,n){"use strict";n.r(e);var r=n(16),i=n.n(r),o=n(396).default,c=function(){var t=this.$createElement;return(this._self._c||t)("button",this._g({attrs:{"data-test":"event-button"},on:{click:this.emitEvents}},this.$listeners),[this._t("default")],2)};c._withStripped=!0;var s=i()({render:c,staticRenderFns:[]},void 0,o,void 0,!1,void 0,!1,void 0,void 0,void 0);e.default=s},396:function(t,e,n){"use strict";n.r(e);var r=n(1),i=n(3),o=n(0),c=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return Object(r.__extends)(e,t),e.prototype.emitEvents=function(){var t=this;Object.entries(this.events).forEach((function(e){var n=e[0],r=e[1];t.$x.emit(n,r,{target:t.$el})}))},Object(r.__decorate)([Object(o.c)({required:!0})],e.prototype,"events",void 0),e=Object(r.__decorate)([o.a],e)}(i.default);e.default=c},635:function(t,e,n){"use strict";n.r(e);var r=n(1),i=n(3),o=n(0),c=n(291),s=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return Object(r.__extends)(e,t),Object.defineProperty(e.prototype,"events",{get:function(){return{UserClickedOpenModal:this.modalId}},enumerable:!1,configurable:!0}),Object(r.__decorate)([Object(o.c)({required:!0})],e.prototype,"modalId",void 0),e=Object(r.__decorate)([Object(o.a)({components:{BaseEventButton:c.default}})],e)}(i.default);e.default=s}}]);