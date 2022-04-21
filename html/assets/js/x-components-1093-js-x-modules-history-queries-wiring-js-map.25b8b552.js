(window.webpackJsonp=window.webpackJsonp||[]).push([[563],{1348:function(A,e){throw new Error("Module parse failed: Unexpected token (1:10)\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\n> {\"version\":3,\"file\":\"wiring.js\",\"sources\":[\"../../../../src/x-modules/history-queries/wiring.ts\"],\"sourcesContent\":[\"import {\\n  namespacedWireCommit,\\n  namespacedWireDispatch,\\n  namespacedWireDispatchWithoutPayload\\n} from '../../wiring/namespaced-wires.factory';\\nimport { namespacedDebounce } from '../../wiring/namespaced-wires.operators';\\nimport { NamespacedWireCommit, NamespacedWireDispatch } from '../../wiring/namespaced-wiring.types';\\nimport { createWiring } from '../../wiring/wiring.utils';\\n\\n/**\\n * `historyQueries` {@link XModuleName | XModule name}.\\n *\\n * @internal\\n */\\nconst moduleName = 'historyQueries';\\n/**\\n * WireCommit for {@link HistoryQueriesXModule}.\\n *\\n * @internal\\n */\\nconst wireCommit: NamespacedWireCommit<typeof moduleName> = namespacedWireCommit(moduleName);\\n/**\\n * WireDispatch for {@link HistoryQueriesXModule}.\\n *\\n * @internal\\n */\\nconst wireDispatch: NamespacedWireDispatch<typeof moduleName> = namespacedWireDispatch(moduleName);\\n/**\\n * WireDispatchWithoutPayload for {@link HistoryQueriesXModule}.\\n *\\n * @internal\\n */\\nconst wireDispatchWithoutPayload = namespacedWireDispatchWithoutPayload(moduleName);\\n\\n/**\\n * Saves a new query into the history queries.\\n *\\n * @public\\n */\\nexport const addQueryToHistoryQueries = wireDispatch('addQueryToHistory');\\n\\n/**\\n * Sets the query of the history queries module. Used for searching into the history queries.\\n *\\n * @public\\n */\\nexport const setHistoryQueriesQuery = wireCommit('setQuery');\\n\\n/**\\n * Sets the history queries state `query` from url.\\n *\\n * @public\\n */\\nconst setUrlParams = wireDispatch('setUrlParams');\\n\\n/**\\n * Sets the query of the history queries module to an empty string.\\n *\\n * @public\\n */\\nexport const clearHistoryQueriesQuery = wireCommit('setQuery', '');\\n\\n/**\\n * Triggers a session refresh, extending its validity for the time configured in the\\n * {@link HistoryQueriesConfig.sessionTTLInMs}.\\n *\\n * @public\\n */\\nexport const refreshHistoryQueriesSession = wireDispatchWithoutPayload('refreshSession');\\n\\n/**\\n * Loads the history queries from the browser storage, saving them to the\\n * {@link HistoryQueriesState.historyQueries}.\\n *\\n * @public\\n */\\nexport const loadHistoryQueriesFromBrowserStorageWire = wireDispatchWithoutPayload(\\n  'loadHistoryQueriesFromBrowserStorage'\\n);\\n\\n/**\\n * Clears the history queries.\\n *\\n * @public\\n */\\nexport const clearHistoryQueries = wireDispatch('setHistoryQueries', []);\\n\\n/**\\n * Removes a single history query from the history queries.\\n *\\n * @public\\n */\\nexport const removeHistoryQuery = wireDispatch('removeFromHistory');\\n\\n/**\\n * Debounce function for the module.\\n */\\nconst moduleDebounce = namespacedDebounce(moduleName);\\n\\n/**\\n * Default wiring for the {@link HistoryQueries} module.\\n *\\n * @internal\\n */\\nexport const historyQueriesWiring = createWiring({\\n  HistoryQueriesQueryChanged: {\\n    refreshHistoryQueriesSession\\n  },\\n  HistoryQueriesStorageKeyChanged: {\\n    loadHistoryQueriesFromBrowserStorageWire\\n  },\\n  UserClearedQuery: {\\n    clearHistoryQueriesQuery\\n  },\\n  UserAcceptedAQuery: {\\n    setHistoryQueriesQuery,\\n    addQueryToHistoryQueries\\n  },\\n  UserIsTypingAQuery: {\\n    setHistoryQueriesQueryDebounce: moduleDebounce(\\n      setHistoryQueriesQuery,\\n      ({ state }) => state.config.debounceInMs,\\n      { cancelOn: 'UserAcceptedAQuery' }\\n    )\\n  },\\n  UserPressedClearHistoryQueries: {\\n    clearHistoryQueries\\n  },\\n  UserPressedRemoveHistoryQuery: {\\n    removeHistoryQuery\\n  },\\n  ParamsLoadedFromUrl: {\\n    setUrlParams\\n  }\\n});\\n\"],\"names\":[],\"mappings\":\";;;;AASA;;;;;AAKA,IAAM,UAAU,GAAG,gBAAgB,CAAC;AACpC;;;;;AAKA,IAAM,UAAU,GAA4C,oBAAoB,CAAC,UAAU,CAAC,CAAC;AAC7F;;;;;AAKA,IAAM,YAAY,GAA8C,sBAAsB,CAAC,UAAU,CAAC,CAAC;AACnG;;;;;AAKA,IAAM,0BAA0B,GAAG,oCAAoC,CAAC,UAAU,CAAC,CAAC;AAEpF;;;;;IAKa,wBAAwB,GAAG,YAAY,CAAC,mBAAmB,EAAE;AAE1E;;;;;IAKa,sBAAsB,GAAG,UAAU,CAAC,UAAU,EAAE;AAE7D;;;;;AAKA,IAAM,YAAY,GAAG,YAAY,CAAC,cAAc,CAAC,CAAC;AAElD;;;;;IAKa,wBAAwB,GAAG,UAAU,CAAC,UAAU,EAAE,EAAE,EAAE;AAEnE;;;;;;IAMa,4BAA4B,GAAG,0BAA0B,CAAC,gBAAgB,EAAE;AAEzF;;;;;;IAMa,wCAAwC,GAAG,0BAA0B,CAChF,sCAAsC,EACtC;AAEF;;;;;IAKa,mBAAmB,GAAG,YAAY,CAAC,mBAAmB,EAAE,EAAE,EAAE;AAEzE;;;;;IAKa,kBAAkB,GAAG,YAAY,CAAC,mBAAmB,EAAE;AAEpE;;;AAGA,IAAM,cAAc,GAAG,kBAAkB,CAAC,UAAU,CAAC,CAAC;AAEtD;;;;;IAKa,oBAAoB,GAAG,YAAY,CAAC;IAC/C,0BAA0B,EAAE;QAC1B,4BAA4B,8BAAA;KAC7B;IACD,+BAA+B,EAAE;QAC/B,wCAAwC,0CAAA;KACzC;IACD,gBAAgB,EAAE;QAChB,wBAAwB,0BAAA;KACzB;IACD,kBAAkB,EAAE;QAClB,sBAAsB,wBAAA;QACtB,wBAAwB,0BAAA;KACzB;IACD,kBAAkB,EAAE;QAClB,8BAA8B,EAAE,cAAc,CAC5C,sBAAsB,EACtB,UAAC,EAAS;gBAAP,KAAK,WAAA;YAAO,OAAA,KAAK,CAAC,MAAM,CAAC,YAAY;SAAA,EACxC,EAAE,QAAQ,EAAE,oBAAoB,EAAE,CACnC;KACF;IACD,8BAA8B,EAAE;QAC9B,mBAAmB,qBAAA;KACpB;IACD,6BAA6B,EAAE;QAC7B,kBAAkB,oBAAA;KACnB;IACD,mBAAmB,EAAE;QACnB,YAAY,cAAA;KACb;CACF;;;;\"}")}}]);