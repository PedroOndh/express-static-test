(window.webpackJsonp=window.webpackJsonp||[]).push([[738],{1507:function(e,t){throw new Error('Module parse failed: Unexpected token (1:10)\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\n> {"version":3,"file":"set-params.mutation.js","sources":["../../../../../../src/x-modules/url/store/mutations/set-params.mutation.ts"],"sourcesContent":["import Vue from \'vue\';\\nimport { forEach } from \'../../../../utils/object\';\\nimport { UrlXStoreModule } from \'../types\';\\n\\n/**\\n * Default implementation for the {@link UrlMutations.setParams} mutation.\\n *\\n * @param state - Current {@link https://vuex.vuejs.org/guide/state.html | state} of the history\\n * queries module.\\n * @param params - The mutation payload with the extra params to set in the state.\\n * @remarks The change is done using `Vue.set` because we are adding new fields to the state. So\\n * this is necessary to make them reactive.\\n * @public\\n */\\nexport const setParams: UrlXStoreModule[\'mutations\'][\'setParams\'] = (state, params) => {\\n  forEach(params, (key, value) => {\\n    Vue.set(state, key, value);\\n  });\\n};\\n"],"names":[],"mappings":";;;AAIA;;;;;;;;;;IAUa,SAAS,GAA8C,UAAC,KAAK,EAAE,MAAM;IAChF,OAAO,CAAC,MAAM,EAAE,UAAC,GAAG,EAAE,KAAK;QACzB,GAAG,CAAC,GAAG,CAAC,KAAK,EAAE,GAAG,EAAE,KAAK,CAAC,CAAC;KAC5B,CAAC,CAAC;AACL;;;;"}')}}]);