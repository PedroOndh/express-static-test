(window.webpackJsonp=window.webpackJsonp||[]).push([[635],{1413:function(e,t){throw new Error('Module parse failed: Unexpected token (1:10)\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\n> {"version":3,"file":"request.getter.js","sources":["../../../../../../src/x-modules/recommendations/store/getters/request.getter.ts"],"sourcesContent":["import { RecommendationsXStoreModule } from \'../types\';\\n\\n/**\\n * Default implementation for the {@link RecommendationsGetters.request} getter.\\n *\\n * @param state - Current {@link https://vuex.vuejs.org/guide/state.html | state} of the query\\n * suggestions module.\\n * @returns The recommendations request to fetch data from the API.\\n *\\n * @public\\n */\\nexport const request: RecommendationsXStoreModule[\'getters\'][\'request\'] = ({\\n  origin,\\n  config,\\n  params\\n}) => {\\n  return {\\n    rows: config.maxItemsToRequest,\\n    start: 0,\\n    origin,\\n    ...params\\n  };\\n};\\n"],"names":[],"mappings":";;AAEA;;;;;;;;;IASa,OAAO,GAAsD,UAAC,EAI1E;QAHC,MAAM,YAAA,EACN,MAAM,YAAA,EACN,MAAM,YAAA;IAEN,kBACE,IAAI,EAAE,MAAM,CAAC,iBAAiB,EAC9B,KAAK,EAAE,CAAC,EACR,MAAM,QAAA,IACH,MAAM,EACT;AACJ;;;;"}')}}]);