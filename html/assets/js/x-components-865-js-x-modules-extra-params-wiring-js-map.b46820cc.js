(window.webpackJsonp=window.webpackJsonp||[]).push([[1003],{1272:function(A,r){throw new Error('Module parse failed: Unexpected token (1:10)\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\n> {"version":3,"file":"wiring.js","sources":["../../../../src/x-modules/extra-params/wiring.ts"],"sourcesContent":["import { namespacedWireCommit } from \'../../wiring\';\\nimport { createWiring } from \'../../wiring/wiring.utils\';\\n\\n/**\\n * WireCommit for {@link ExtraParamsXModule}.\\n *\\n * @internal\\n */\\nconst wireCommit = namespacedWireCommit(\'extraParams\');\\n\\n/**\\n * Sets the extra params of the {@link ExtraParamsXModule}.\\n *\\n * @public\\n */\\nexport const setExtraParams = wireCommit(\'setParams\');\\n\\n/**\\n * Wiring configuration for the {@link ExtraParamsXModule | extraParams module}.\\n *\\n * @internal\\n */\\nexport const extraParamsWiring = createWiring({\\n  UserChangedExtraParams: {\\n    setExtraParams\\n  },\\n  ExtraParamsProvided: {\\n    setExtraParams\\n  },\\n  ExtraParamsLoadedFromUrl: {\\n    setExtraParams\\n  }\\n});\\n"],"names":[],"mappings":";;;;;;AAGA;;;;;AAKA,IAAM,UAAU,GAAG,oBAAoB,CAAC,aAAa,CAAC,CAAC;AAEvD;;;;;IAKa,cAAc,GAAG,UAAU,CAAC,WAAW,EAAE;AAEtD;;;;;IAKa,iBAAiB,GAAG,YAAY,CAAC;IAC5C,sBAAsB,EAAE;QACtB,cAAc,gBAAA;KACf;IACD,mBAAmB,EAAE;QACnB,cAAc,gBAAA;KACf;IACD,wBAAwB,EAAE;QACxB,cAAc,gBAAA;KACf;CACF;;;;"}')}}]);