(window.webpackJsonp=window.webpackJsonp||[]).push([[494],{290:function(n,t,r){"use strict";r.r(t),r.d(t,"XInject",(function(){return i})),r.d(t,"XProvide",(function(){return c}));var e=r(96),u=r(6);function c(n){return Object(u.createDecorator)((function(t,r){var e=t.provide;t.provide=function(){var t=function(n,t){return r=n,"function"==typeof r?n.call(t):null!=n?n:{};var r}(e,this),u=function(n,t,r){var e;return(e={})[n]={get value(){return r[t]}},e}(n,r,this);return Object.assign(t,u)}}))}function i(n,t){return Object(u.createDecorator)((function(r,u){var c,i,o="_x-inject_"+u,a=(i=r.inject,Array.isArray(i)?Object(e.arrayToObject)(i):null!=i?i:{}),f=function(n,t,r){var e;return(e={})[t]={from:n,default:{value:r}},e}(n,o,t);r.inject=Object.assign(a,f);var v=function(n,t){var r;return(r={})[n]=function(){return this[t].value},r}(u,o);r.computed=Object.assign(null!==(c=r.computed)&&void 0!==c?c:{},v)}))}}}]);