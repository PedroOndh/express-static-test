(window.webpackJsonp=window.webpackJsonp||[]).push([[221,220],{435:function(t,e,n){"use strict";n.r(e),n.d(e,"DefaultSessionService",(function(){return s}));var r=n(151);var s=function(){function t(t,e){void 0===t&&(t=new r.a(localStorage,"x")),void 0===e&&(e=18e5),this.storageService=t,this.ttlMs=e}return t.prototype.getSessionId=function(){var e,n=null!==(e=this.storageService.getItem(t.SESSION_ID_KEY))&&void 0!==e?e:((t=21)=>{let e="",n=crypto.getRandomValues(new Uint8Array(t));for(;t--;){let r=63&n[t];e+=r<36?r.toString(36):r<62?(r-26).toString(36).toUpperCase():r<63?"_":"-"}return e})();return this.storageService.setItem(t.SESSION_ID_KEY,n,Date.now()+this.ttlMs),n},t.prototype.clearSessionId=function(){this.storageService.removeItem(t.SESSION_ID_KEY)},t.SESSION_ID_KEY="session-id",t.instance=new t,t}()},503:function(t,e,n){"use strict";n.r(e),n.d(e,"track",(function(){return o}));var r=n(1),s=n(37),i=n(435),o=function(t,e){var n=t.state.consent,o=Array.isArray(e)?e:[e],a=function(t){return t?i.DefaultSessionService.instance.getSessionId():void 0}(n),c=a&&{session:a};o.forEach((function(t){var e=t.url,n=t.params;s.XPlugin.adapter.track({url:e,params:Object(r.__assign)(Object(r.__assign)({},n),c)})}))}}}]);