(window.webpackJsonp=window.webpackJsonp||[]).push([[124,450],{480:function(n,r,t){"use strict";t.r(r),t.d(r,"QuerySuggestionsGetter",(function(){return u})),t.d(r,"querySuggestions",(function(){return o}));var e=t(98),u=function(){function n(){}return n.prototype.querySuggestions=function(n){var r=n.query,t=n.suggestions,u=n.config;return r&&u.hideIfEqualsQuery?t.filter(this.isInQuerySuggestions(Object(e.normalizeString)(r))):t},n.prototype.isInQuerySuggestions=function(n){return function(r){return Object(e.normalizeString)(r.query)!==n}},n}(),i=new u,o=i.querySuggestions.bind(i)},98:function(n,r,t){"use strict";t.r(r),t.d(r,"normalizeString",(function(){return u}));var e="function"==typeof String.prototype.normalize?function(n){return n.normalize("NFD").replace(/[\u0300-\u036f]/g,"")}:function(n){return n};function u(n){var r;return n=null!==(r=null==n?void 0:n.trim().toLowerCase())&&void 0!==r?r:"",e(n)}}}]);