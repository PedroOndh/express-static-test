(window.webpackJsonp=window.webpackJsonp||[]).push([[626],{1405:function(A,e){throw new Error("Module parse failed: Unexpected token (1:10)\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\n> {\"version\":3,\"file\":\"wiring.js\",\"sources\":[\"../../../../src/x-modules/query-suggestions/wiring.ts\"],\"sourcesContent\":[\"import {\\n  namespacedWireCommit,\\n  namespacedWireDispatch,\\n  namespacedWireDispatchWithoutPayload\\n} from '../../wiring/namespaced-wires.factory';\\nimport { namespacedDebounce } from '../../wiring/namespaced-wires.operators';\\nimport { NamespacedWireCommit } from '../../wiring/namespaced-wiring.types';\\nimport { createWiring } from '../../wiring/wiring.utils';\\n\\n/**\\n * `querySuggestions` {@link XModuleName | XModule name}.\\n *\\n * @internal\\n */\\nconst moduleName = 'querySuggestions';\\n\\n/**\\n * WireCommit for {@link QuerySuggestionsXModule}.\\n *\\n * @internal\\n */\\nconst wireCommit: NamespacedWireCommit<typeof moduleName> = namespacedWireCommit(moduleName);\\n\\n/**\\n * WireDispatchWithoutPayload for {@link QuerySuggestionsXModule}.\\n *\\n * @internal\\n */\\nconst wireDispatchWithoutPayload = namespacedWireDispatchWithoutPayload(moduleName);\\n\\n/**\\n * WireDispatch for {@link QuerySuggestionsXModule}.\\n *\\n * @internal\\n */\\nconst wireDispatch = namespacedWireDispatch(moduleName);\\n\\n/**\\n * Sets the query-suggestions module query.\\n *\\n * @public\\n */\\nexport const setQuerySuggestionsQuery = wireCommit('setQuery');\\n\\n/**\\n * Sets the query suggestions state `params`.\\n *\\n * @public\\n */\\nexport const setQuerySuggestionsExtraParams = wireCommit('setParams');\\n\\n/**\\n * Clears the query-suggestions module query.\\n *\\n * @public\\n */\\nexport const clearQuerySuggestionsQuery = wireCommit('setQuery', '');\\n\\n/**\\n * Sets the query-suggestions state `query` from url.\\n *\\n * @public\\n */\\nconst setUrlParams = wireDispatch('setUrlParams');\\n\\n/**\\n * Requests and stores a new set of query suggestions for the {@link QuerySuggestionsState.query}.\\n *\\n * @public\\n */\\nexport const fetchAndSaveSuggestionsWire = wireDispatch('fetchAndSaveSuggestions');\\n\\n/**\\n * Cancels the {@link QuerySuggestionsActions.fetchAndSaveSuggestions} request promise.\\n *\\n * @public\\n */\\nexport const cancelFetchAndSaveSuggestionsWire = wireDispatchWithoutPayload(\\n  'cancelFetchAndSaveSuggestions'\\n);\\n\\n/**\\n * Debounce function for the module.\\n */\\nconst moduleDebounce = namespacedDebounce(moduleName);\\n\\n/**\\n * QuerySuggestions wiring.\\n *\\n * @internal\\n */\\nexport const querySuggestionsWiring = createWiring({\\n  UserIsTypingAQuery: {\\n    setQuerySuggestionsQueryDebounce: moduleDebounce(\\n      setQuerySuggestionsQuery,\\n      ({ state }) => state.config.debounceInMs,\\n      { cancelOn: 'UserAcceptedAQuery' }\\n    )\\n  },\\n  UserAcceptedAQuery: {\\n    setQuerySuggestionsQuery\\n  },\\n  UserClearedQuery: {\\n    clearQuerySuggestionsQuery,\\n    cancelFetchAndSaveSuggestionsWire\\n  },\\n  QuerySuggestionsRequestChanged: {\\n    fetchAndSaveSuggestionsWire\\n  },\\n  ExtraParamsChanged: {\\n    setQuerySuggestionsExtraParams\\n  },\\n  ParamsLoadedFromUrl: {\\n    setUrlParams\\n  }\\n});\\n\"],\"names\":[],\"mappings\":\";;;;AASA;;;;;AAKA,IAAM,UAAU,GAAG,kBAAkB,CAAC;AAEtC;;;;;AAKA,IAAM,UAAU,GAA4C,oBAAoB,CAAC,UAAU,CAAC,CAAC;AAE7F;;;;;AAKA,IAAM,0BAA0B,GAAG,oCAAoC,CAAC,UAAU,CAAC,CAAC;AAEpF;;;;;AAKA,IAAM,YAAY,GAAG,sBAAsB,CAAC,UAAU,CAAC,CAAC;AAExD;;;;;IAKa,wBAAwB,GAAG,UAAU,CAAC,UAAU,EAAE;AAE/D;;;;;IAKa,8BAA8B,GAAG,UAAU,CAAC,WAAW,EAAE;AAEtE;;;;;IAKa,0BAA0B,GAAG,UAAU,CAAC,UAAU,EAAE,EAAE,EAAE;AAErE;;;;;AAKA,IAAM,YAAY,GAAG,YAAY,CAAC,cAAc,CAAC,CAAC;AAElD;;;;;IAKa,2BAA2B,GAAG,YAAY,CAAC,yBAAyB,EAAE;AAEnF;;;;;IAKa,iCAAiC,GAAG,0BAA0B,CACzE,+BAA+B,EAC/B;AAEF;;;AAGA,IAAM,cAAc,GAAG,kBAAkB,CAAC,UAAU,CAAC,CAAC;AAEtD;;;;;IAKa,sBAAsB,GAAG,YAAY,CAAC;IACjD,kBAAkB,EAAE;QAClB,gCAAgC,EAAE,cAAc,CAC9C,wBAAwB,EACxB,UAAC,EAAS;gBAAP,KAAK,WAAA;YAAO,OAAA,KAAK,CAAC,MAAM,CAAC,YAAY;SAAA,EACxC,EAAE,QAAQ,EAAE,oBAAoB,EAAE,CACnC;KACF;IACD,kBAAkB,EAAE;QAClB,wBAAwB,0BAAA;KACzB;IACD,gBAAgB,EAAE;QAChB,0BAA0B,4BAAA;QAC1B,iCAAiC,mCAAA;KAClC;IACD,8BAA8B,EAAE;QAC9B,2BAA2B,6BAAA;KAC5B;IACD,kBAAkB,EAAE;QAClB,8BAA8B,gCAAA;KAC/B;IACD,mBAAmB,EAAE;QACnB,YAAY,cAAA;KACb;CACF;;;;\"}")}}]);