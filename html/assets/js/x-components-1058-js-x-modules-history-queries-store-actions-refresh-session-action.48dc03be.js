(window.webpackJsonp=window.webpackJsonp||[]).push([[53,57,454],{104:function(e,t,n){"use strict";n.r(t),n.d(t,"localStorageService",(function(){return S}));var o=n(36),r=n(151),S="undefined"!=typeof localStorage?new r.a(localStorage,"x"):{clear:o.noOp,getItem:o.noOp,setItem:o.noOp,removeItem:o.noOp}},451:function(e,t,n){"use strict";n.r(t),n.d(t,"HISTORY_QUERIES_STORAGE_KEY",(function(){return o})),n.d(t,"SESSION_TIME_STAMP_STORAGE_KEY",(function(){return r}));var o="history-queries",r="session-time-stamp"},509:function(e,t,n){"use strict";n.r(t),n.d(t,"refreshSession",(function(){return S}));var o=n(104),r=n(451),S=function(e){var t,n=e.state,S=e.commit,i=null!==(t=o.localStorageService.getItem(r.SESSION_TIME_STAMP_STORAGE_KEY))&&void 0!==t?t:Date.now();o.localStorageService.setItem(r.SESSION_TIME_STAMP_STORAGE_KEY,i,n.config.sessionTTLInMs),S("setSessionTimeStamp",i)}}}]);