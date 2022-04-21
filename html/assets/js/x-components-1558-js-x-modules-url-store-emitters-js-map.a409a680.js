(window.webpackJsonp=window.webpackJsonp||[]).push([[734],{1503:function(A,e){throw new Error('Module parse failed: Unexpected token (1:10)\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\n> {"version":3,"file":"emitters.js","sources":["../../../../../src/x-modules/url/store/emitters.ts"],"sourcesContent":["import { createStoreEmitters } from \'../../../store\';\\nimport { UrlParams } from \'../../../types/url-params\';\\nimport { urlXStoreModule } from \'./module\';\\nimport { UrlParamKey } from \'./types\';\\n\\n/**\\n * The params from {@link UrlParams} that provokes a replace instead of a push in the browser URL\\n * state.\\n *\\n * @internal\\n */\\nexport const replaceableParams: UrlParamKey[] = [\'scroll\', \'page\'];\\n\\n/**\\n * Compares new and old {@link UrlParams} to know if not replaceable params have changed.\\n *\\n * @param newParams - The new {@link UrlParams} to compare.\\n * @param oldParams - The old {@link UrlParams} to compare.\\n *\\n * @returns True if is pushable change, false otherwise.\\n */\\nfunction shouldPushUrl(\\n  newParams: Partial<UrlParams> = {},\\n  oldParams: Partial<UrlParams> = {}\\n): boolean {\\n  const keys = Object.keys({ ...oldParams, ...newParams });\\n  return keys.some(key => !replaceableParams.includes(key) && oldParams[key] !== newParams[key]);\\n}\\n\\n/**\\n * Compares new and old {@link UrlParams} to know if replaceable params have changed.\\n *\\n * @param newParams - The new {@link UrlParams} to compare.\\n * @param oldParams - The old {@link UrlParams} to compare.\\n *\\n * @returns True if is pushable change, false otherwise.\\n */\\nfunction shouldReplaceUrl(\\n  newParams: Partial<UrlParams> = {},\\n  oldParams: Partial<UrlParams> = {}\\n): boolean {\\n  const keys = Object.keys({ ...oldParams, ...newParams });\\n  return (\\n    keys.some(key => replaceableParams.includes(key) && oldParams[key] !== newParams[key]) &&\\n    !shouldPushUrl(newParams, oldParams)\\n  );\\n}\\n\\n/**\\n * {@link StoreEmitters} For the URL module.\\n *\\n * @internal\\n */\\nexport const urlEmitters = createStoreEmitters(urlXStoreModule, {\\n  PushableUrlStateChanged: {\\n    selector: (_, getters) => getters.urlParams,\\n    filter: shouldPushUrl\\n  },\\n  ReplaceableUrlStateChanged: {\\n    selector: (_, getters) => getters.urlParams,\\n    filter: shouldReplaceUrl\\n  }\\n});\\n"],"names":[],"mappings":";;;;;;;AAKA;;;;;;IAMa,iBAAiB,GAAkB,CAAC,QAAQ,EAAE,MAAM,EAAE;AAEnE;;;;;;;;AAQA,SAAS,aAAa,CACpB,SAAkC,EAClC,SAAkC;IADlC,0BAAA,EAAA,cAAkC;IAClC,0BAAA,EAAA,cAAkC;IAElC,IAAM,IAAI,GAAG,MAAM,CAAC,IAAI,uBAAM,SAAS,GAAK,SAAS,EAAG,CAAC;IACzD,OAAO,IAAI,CAAC,IAAI,CAAC,UAAA,GAAG,IAAI,OAAA,CAAC,iBAAiB,CAAC,QAAQ,CAAC,GAAG,CAAC,IAAI,SAAS,CAAC,GAAG,CAAC,KAAK,SAAS,CAAC,GAAG,CAAC,GAAA,CAAC,CAAC;AACjG,CAAC;AAED;;;;;;;;AAQA,SAAS,gBAAgB,CACvB,SAAkC,EAClC,SAAkC;IADlC,0BAAA,EAAA,cAAkC;IAClC,0BAAA,EAAA,cAAkC;IAElC,IAAM,IAAI,GAAG,MAAM,CAAC,IAAI,uBAAM,SAAS,GAAK,SAAS,EAAG,CAAC;IACzD,QACE,IAAI,CAAC,IAAI,CAAC,UAAA,GAAG,IAAI,OAAA,iBAAiB,CAAC,QAAQ,CAAC,GAAG,CAAC,IAAI,SAAS,CAAC,GAAG,CAAC,KAAK,SAAS,CAAC,GAAG,CAAC,GAAA,CAAC;QACtF,CAAC,aAAa,CAAC,SAAS,EAAE,SAAS,CAAC,EACpC;AACJ,CAAC;AAED;;;;;IAKa,WAAW,GAAG,mBAAmB,CAAC,eAAe,EAAE;IAC9D,uBAAuB,EAAE;QACvB,QAAQ,EAAE,UAAC,CAAC,EAAE,OAAO,IAAK,OAAA,OAAO,CAAC,SAAS,GAAA;QAC3C,MAAM,EAAE,aAAa;KACtB;IACD,0BAA0B,EAAE;QAC1B,QAAQ,EAAE,UAAC,CAAC,EAAE,OAAO,IAAK,OAAA,OAAO,CAAC,SAAS,GAAA;QAC3C,MAAM,EAAE,gBAAgB;KACzB;CACF;;;;"}')}}]);