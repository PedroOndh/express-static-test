(window.webpackJsonp=window.webpackJsonp||[]).push([[593],{1375:function(e,A){throw new Error('Module parse failed: Unexpected token (1:10)\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\n> {"version":3,"file":"emitters.js","sources":["../../../../../src/x-modules/next-queries/store/emitters.ts"],"sourcesContent":["import { createStoreEmitters } from \'../../../store\';\\nimport { createEmitterArrayFilter } from \'../../../utils/array\';\\nimport { nextQueriesXStoreModule } from \'./module\';\\n\\n/**\\n * {@link StoreEmitters} For the next-queries module.\\n *\\n * @internal\\n */\\nexport const nextQueriesEmitters = createStoreEmitters(nextQueriesXStoreModule, {\\n  NextQueriesChanged: {\\n    selector: (_, getters) => getters.nextQueries,\\n    filter: createEmitterArrayFilter(\'query\')\\n  },\\n  NextQueriesRequestChanged: (_, getters) => getters.request\\n});\\n"],"names":[],"mappings":";;;;;;;AAIA;;;;;IAKa,mBAAmB,GAAG,mBAAmB,CAAC,uBAAuB,EAAE;IAC9E,kBAAkB,EAAE;QAClB,QAAQ,EAAE,UAAC,CAAC,EAAE,OAAO,IAAK,OAAA,OAAO,CAAC,WAAW,GAAA;QAC7C,MAAM,EAAE,wBAAwB,CAAC,OAAO,CAAC;KAC1C;IACD,yBAAyB,EAAE,UAAC,CAAC,EAAE,OAAO,IAAK,OAAA,OAAO,CAAC,OAAO,GAAA;CAC3D;;;;"}')}}]);