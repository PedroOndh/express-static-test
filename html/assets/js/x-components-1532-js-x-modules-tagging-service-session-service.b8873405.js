(window.webpackJsonp=window.webpackJsonp||[]).push([[220],{435:function(e,t,n){"use strict";n.r(t),n.d(t,"DefaultSessionService",(function(){return r}));var o=n(151);var r=function(){function e(e,t){void 0===e&&(e=new o.a(localStorage,"x")),void 0===t&&(t=18e5),this.storageService=e,this.ttlMs=t}return e.prototype.getSessionId=function(){var t,n=null!==(t=this.storageService.getItem(e.SESSION_ID_KEY))&&void 0!==t?t:((e=21)=>{let t="",n=crypto.getRandomValues(new Uint8Array(e));for(;e--;){let o=63&n[e];t+=o<36?o.toString(36):o<62?(o-26).toString(36).toUpperCase():o<63?"_":"-"}return t})();return this.storageService.setItem(e.SESSION_ID_KEY,n,Date.now()+this.ttlMs),n},e.prototype.clearSessionId=function(){this.storageService.removeItem(e.SESSION_ID_KEY)},e.SESSION_ID_KEY="session-id",e.instance=new e,e}()}}]);