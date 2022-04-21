(window.webpackJsonp=window.webpackJsonp||[]).push([[562],{1347:function(A,e){throw new Error("Module parse failed: Unexpected token (1:10)\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\n> {\"version\":3,\"file\":\"module.js\",\"sources\":[\"../../../../../src/x-modules/history-queries/store/module.ts\"],\"sourcesContent\":[\"import { addQueryToHistory } from './actions/add-query-to-history.action';\\n// eslint-disable-next-line max-len\\nimport { loadHistoryQueriesFromBrowserStorage } from './actions/load-history-queries-from-browser-storage.action';\\nimport { refreshSession } from './actions/refresh-session.action';\\nimport { removeFromHistory } from './actions/remove-query-from-history.action';\\nimport { setHistoryQueries } from './actions/set-history-queries.action';\\nimport { setUrlParams } from './actions/set-url-params.action';\\nimport { historyQueries } from './getters/history-queries.getter';\\nimport { normalizedQuery } from './getters/normalized-query.getter';\\nimport { sessionHistoryQueries } from './getters/session-history-queries.getter';\\nimport { storageKey } from './getters/storage-key.getter';\\nimport { HistoryQueriesXStoreModule } from './types';\\n\\n/**\\n * {@link XStoreModule} For the history-queries module.\\n *\\n * @internal\\n */\\nexport const historyQueriesXStoreModule: HistoryQueriesXStoreModule = {\\n  state: () => ({\\n    config: {\\n      debounceInMs: 150,\\n      maxItemsToStore: 50,\\n      hideIfEqualsQuery: true,\\n      sessionTTLInMs: 30 * 60 * 1000\\n    },\\n    query: '',\\n    historyQueries: [],\\n    sessionTimeStampInMs: Date.now()\\n  }),\\n  getters: {\\n    historyQueries,\\n    normalizedQuery,\\n    sessionHistoryQueries,\\n    storageKey\\n  },\\n  mutations: {\\n    setHistoryQueries(state, historyQueries) {\\n      state.historyQueries = historyQueries;\\n    },\\n    setSessionTimeStamp(state, sessionTimeStamp) {\\n      state.sessionTimeStampInMs = sessionTimeStamp;\\n    },\\n    setQuery(state, query) {\\n      state.query = query;\\n    }\\n  },\\n  actions: {\\n    addQueryToHistory,\\n    loadHistoryQueriesFromBrowserStorage,\\n    refreshSession,\\n    removeFromHistory,\\n    setHistoryQueries,\\n    setUrlParams\\n  }\\n};\\n\"],\"names\":[],\"mappings\":\";;;;;;;;;;;AAaA;;;;;IAKa,0BAA0B,GAA+B;IACpE,KAAK,EAAE,cAAM,QAAC;QACZ,MAAM,EAAE;YACN,YAAY,EAAE,GAAG;YACjB,eAAe,EAAE,EAAE;YACnB,iBAAiB,EAAE,IAAI;YACvB,cAAc,EAAE,EAAE,GAAG,EAAE,GAAG,IAAI;SAC/B;QACD,KAAK,EAAE,EAAE;QACT,cAAc,EAAE,EAAE;QAClB,oBAAoB,EAAE,IAAI,CAAC,GAAG,EAAE;KACjC,IAAC;IACF,OAAO,EAAE;QACP,cAAc,gBAAA;QACd,eAAe,iBAAA;QACf,qBAAqB,uBAAA;QACrB,UAAU,YAAA;KACX;IACD,SAAS,EAAE;QACT,iBAAiB,YAAC,KAAK,EAAE,cAAc;YACrC,KAAK,CAAC,cAAc,GAAG,cAAc,CAAC;SACvC;QACD,mBAAmB,YAAC,KAAK,EAAE,gBAAgB;YACzC,KAAK,CAAC,oBAAoB,GAAG,gBAAgB,CAAC;SAC/C;QACD,QAAQ,YAAC,KAAK,EAAE,KAAK;YACnB,KAAK,CAAC,KAAK,GAAG,KAAK,CAAC;SACrB;KACF;IACD,OAAO,EAAE;QACP,iBAAiB,mBAAA;QACjB,oCAAoC,sCAAA;QACpC,cAAc,gBAAA;QACd,iBAAiB,mBAAA;QACjB,iBAAiB,mBAAA;QACjB,YAAY,cAAA;KACb;;;;;\"}")}}]);