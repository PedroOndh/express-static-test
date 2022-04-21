(window.webpackJsonp=window.webpackJsonp||[]).push([[976],{1249:function(e,t){throw new Error('Module parse failed: Unexpected token (1:10)\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\n> {"version":3,"file":"wiring.utils.js","sources":["../../../src/wiring/wiring.utils.ts"],"sourcesContent":["import { Store } from \'vuex\';\\nimport { RootXStoreState, StoreModuleStateAndGetters } from \'../store/store.types\';\\nimport { getGettersProxy } from \'../store/utils/getters-proxy.utils\';\\nimport { ExtractState, XModuleName } from \'../x-modules/x-modules.types\';\\nimport { Wiring } from \'./wiring.types\';\\n\\n/**\\n * Util function to generate type-safe wiring.\\n * If TypeScript ever accepts the PR about generic type inference this function can be removed.\\n *\\n * @param wiring - The wiring to create.\\n * @returns Type-safe wiring.\\n *\\n * @public\\n */\\nexport function createWiring<T extends Partial<Wiring>>(wiring: T): T {\\n  return wiring;\\n}\\n\\n/**\\n * Returns an object with the getters and state of a module of store defined by the moduleName\\n * parameter.\\n *\\n * @param state - The Vuex store State.\\n * @param getters - The Vuex store Getters.\\n * @param moduleName - The {@link XModuleName} of the module.\\n * @returns The {@link StoreModuleStateAndGetters} with the Getters and the State of the\\n * {@link XStoreModule | Store Module} defined by moduleName.\\n *\\n * @public\\n */\\nexport function getStateAndGettersFromModule<ModuleName extends XModuleName>(\\n  state: RootXStoreState,\\n  getters: Pick<Store<any>, \'getters\'>,\\n  moduleName: ModuleName\\n): StoreModuleStateAndGetters<ModuleName> {\\n  return {\\n    state: state.x[moduleName] as unknown as ExtractState<ModuleName>,\\n    getters: getGettersProxy(getters, moduleName)\\n  };\\n}\\n"],"names":[],"mappings":";;AAMA;;;;;;;;;SASgB,YAAY,CAA4B,MAAS;IAC/D,OAAO,MAAM,CAAC;AAChB,CAAC;AAED;;;;;;;;;;;;SAYgB,4BAA4B,CAC1C,KAAsB,EACtB,OAAoC,EACpC,UAAsB;IAEtB,OAAO;QACL,KAAK,EAAE,KAAK,CAAC,CAAC,CAAC,UAAU,CAAwC;QACjE,OAAO,EAAE,eAAe,CAAC,OAAO,EAAE,UAAU,CAAC;KAC9C,CAAC;AACJ;;;;"}')}}]);