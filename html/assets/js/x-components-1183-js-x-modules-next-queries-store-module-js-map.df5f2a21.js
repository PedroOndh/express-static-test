(window.webpackJsonp=window.webpackJsonp||[]).push([[596],{1378:function(A,e){throw new Error("Module parse failed: Unexpected token (1:10)\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\n> {\"version\":3,\"file\":\"module.js\",\"sources\":[\"../../../../../src/x-modules/next-queries/store/module.ts\"],\"sourcesContent\":[\"import { setStatus } from '../../../store/utils/status-store.utils';\\nimport {\\n  cancelFetchAndSaveNextQueries,\\n  fetchAndSaveNextQueries\\n} from './actions/fetch-and-save-next-queries.action';\\nimport { fetchNextQueries } from './actions/fetch-next-queries.action';\\nimport { setQueryFromLastHistoryQuery } from './actions/set-query-from-last-history-query.action';\\nimport { setUrlParams } from './actions/set-url-params.action';\\nimport { nextQueries } from './getters/next-queries.getter';\\nimport { request } from './getters/request.getter';\\nimport { NextQueriesXStoreModule } from './types';\\n\\n/**\\n * {@link XStoreModule} For the next-queries module.\\n *\\n * @internal\\n */\\nexport const nextQueriesXStoreModule: NextQueriesXStoreModule = {\\n  state: () => ({\\n    query: '',\\n    nextQueries: [],\\n    searchedQueries: [],\\n    status: 'initial',\\n    config: {\\n      maxItemsToRequest: 20,\\n      hideSessionQueries: true,\\n      loadOnInit: true\\n    },\\n    params: {}\\n  }),\\n  getters: {\\n    request,\\n    nextQueries\\n  },\\n  mutations: {\\n    setQuery(state, newQuery) {\\n      state.query = newQuery;\\n    },\\n    setNextQueries(state, nextQueries) {\\n      state.nextQueries = nextQueries;\\n    },\\n    setSearchedQueries(state, searchedQueries) {\\n      state.searchedQueries = searchedQueries;\\n    },\\n    setStatus,\\n    setParams(state, params) {\\n      state.params = params;\\n    }\\n  },\\n  actions: {\\n    cancelFetchAndSaveNextQueries,\\n    fetchAndSaveNextQueries,\\n    fetchNextQueries,\\n    setQueryFromLastHistoryQuery,\\n    setUrlParams\\n  }\\n};\\n\"],\"names\":[],\"mappings\":\";;;;;;;;AAYA;;;;;IAKa,uBAAuB,GAA4B;IAC9D,KAAK,EAAE,cAAM,QAAC;QACZ,KAAK,EAAE,EAAE;QACT,WAAW,EAAE,EAAE;QACf,eAAe,EAAE,EAAE;QACnB,MAAM,EAAE,SAAS;QACjB,MAAM,EAAE;YACN,iBAAiB,EAAE,EAAE;YACrB,kBAAkB,EAAE,IAAI;YACxB,UAAU,EAAE,IAAI;SACjB;QACD,MAAM,EAAE,EAAE;KACX,IAAC;IACF,OAAO,EAAE;QACP,OAAO,SAAA;QACP,WAAW,aAAA;KACZ;IACD,SAAS,EAAE;QACT,QAAQ,YAAC,KAAK,EAAE,QAAQ;YACtB,KAAK,CAAC,KAAK,GAAG,QAAQ,CAAC;SACxB;QACD,cAAc,YAAC,KAAK,EAAE,WAAW;YAC/B,KAAK,CAAC,WAAW,GAAG,WAAW,CAAC;SACjC;QACD,kBAAkB,YAAC,KAAK,EAAE,eAAe;YACvC,KAAK,CAAC,eAAe,GAAG,eAAe,CAAC;SACzC;QACD,SAAS,WAAA;QACT,SAAS,YAAC,KAAK,EAAE,MAAM;YACrB,KAAK,CAAC,MAAM,GAAG,MAAM,CAAC;SACvB;KACF;IACD,OAAO,EAAE;QACP,6BAA6B,+BAAA;QAC7B,uBAAuB,yBAAA;QACvB,gBAAgB,kBAAA;QAChB,4BAA4B,8BAAA;QAC5B,YAAY,cAAA;KACb;;;;;\"}")}}]);