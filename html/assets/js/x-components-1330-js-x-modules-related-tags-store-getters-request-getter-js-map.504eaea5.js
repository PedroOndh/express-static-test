(window.webpackJsonp=window.webpackJsonp||[]).push([[650],{1427:function(e,A){throw new Error('Module parse failed: Unexpected token (1:10)\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\n> {"version":3,"file":"request.getter.js","sources":["../../../../../../src/x-modules/related-tags/store/getters/request.getter.ts"],"sourcesContent":["import { RelatedTagsXStoreModule } from \'../types\';\\n/**\\n * Default implementation for the {@link RelatedTagsGetters.request} getter.\\n *\\n * @param state - Current {@link https://vuex.vuejs.org/guide/state.html | state} of the related\\n * tags module.\\n *\\n * @returns The related tags request to fetch data from the API.\\n *\\n * @public\\n */\\nexport const request: RelatedTagsXStoreModule[\'getters\'][\'request\'] = ({\\n  query,\\n  selectedRelatedTags,\\n  config,\\n  params\\n}) => {\\n  return query.trim()\\n    ? {\\n        query,\\n        relatedTags: selectedRelatedTags,\\n        rows: config.maxItemsToRequest,\\n        start: 0,\\n        ...params\\n      }\\n    : null;\\n};\\n"],"names":[],"mappings":";;AACA;;;;;;;;;;IAUa,OAAO,GAAkD,UAAC,EAKtE;QAJC,KAAK,WAAA,EACL,mBAAmB,yBAAA,EACnB,MAAM,YAAA,EACN,MAAM,YAAA;IAEN,OAAO,KAAK,CAAC,IAAI,EAAE;qBAEb,KAAK,OAAA,EACL,WAAW,EAAE,mBAAmB,EAChC,IAAI,EAAE,MAAM,CAAC,iBAAiB,EAC9B,KAAK,EAAE,CAAC,IACL,MAAM,IAEX,IAAI,CAAC;AACX;;;;"}')}}]);