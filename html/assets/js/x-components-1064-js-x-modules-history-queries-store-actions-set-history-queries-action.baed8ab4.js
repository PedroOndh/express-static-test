(window.webpackJsonp=window.webpackJsonp||[]).push([[55,454],{104:function(e,t,o){"use strict";o.r(t),o.d(t,"localStorageService",(function(){return s}));var r=o(36),n=o(151),s="undefined"!=typeof localStorage?new n.a(localStorage,"x"):{clear:r.noOp,getItem:r.noOp,setItem:r.noOp,removeItem:r.noOp}},511:function(e,t,o){"use strict";o.r(t),o.d(t,"setHistoryQueries",(function(){return n}));var r=o(104),n=function(e,t){var o=e.commit,n=e.state,s=e.getters;t.length>n.config.maxItemsToStore&&(t=t.slice(0,n.config.maxItemsToStore)),o("setHistoryQueries",t),r.localStorageService.setItem(s.storageKey,t)}}}]);