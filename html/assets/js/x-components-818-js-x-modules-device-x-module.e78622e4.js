(window.webpackJsonp=window.webpackJsonp||[]).push([[464,461,462,463],{469:function(e,t,i){"use strict";i.r(t),i.d(t,"deviceXStoreModule",(function(){return n}));var n={state:function(){return{name:null}},getters:{},mutations:{setName:function(e,t){e.name=t}},actions:{}}},507:function(e,t,i){"use strict";i.r(t),i.d(t,"deviceWiring",(function(){return o})),i.d(t,"setName",(function(){return c}));var n=i(35),r=i(50),c=Object(r.namespacedWireCommit)("device")("setName"),o=Object(n.createWiring)({DeviceProvided:{setName:c}})},521:function(e,t,i){"use strict";i.r(t),i.d(t,"deviceEmitters",(function(){return c}));var n=i(61),r=i(469),c=Object(n.createStoreEmitters)(r.deviceXStoreModule,{})},535:function(e,t,i){"use strict";i.r(t),i.d(t,"deviceXModule",(function(){return o}));var n=i(469),r=i(521),c=i(507),o={name:"device",storeModule:n.deviceXStoreModule,storeEmitters:r.deviceEmitters,wiring:c.deviceWiring}}}]);