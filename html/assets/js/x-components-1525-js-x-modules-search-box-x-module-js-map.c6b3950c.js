(window.webpackJsonp=window.webpackJsonp||[]).push([[722],{1492:function(e,o){throw new Error('Module parse failed: Unexpected token (1:10)\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\n> {"version":3,"file":"x-module.js","sources":["../../../../src/x-modules/search-box/x-module.ts"],"sourcesContent":["// XModule\\nimport { XModule } from \'../x-modules.types\';\\nimport { searchBoxEmitters } from \'./store/emitters\';\\nimport { searchBoxXStoreModule } from \'./store/module\';\\nimport { SearchBoxXStoreModule } from \'./store/types\';\\nimport { searchBoxWiring } from \'./wiring\';\\n\\n/**\\n * SearchBox {@link XModule} alias.\\n *\\n * @public\\n */\\nexport type SearchBoxXModule = XModule<SearchBoxXStoreModule>;\\n\\n/**\\n * SearchBox {@link XModule} implementation. This module is auto-registered as soon as you\\n * import any component from the `search-box` entry point.\\n *\\n * @public\\n */\\nexport const searchBoxXModule: SearchBoxXModule = {\\n  name: \'searchBox\',\\n  storeModule: searchBoxXStoreModule,\\n  storeEmitters: searchBoxEmitters,\\n  wiring: searchBoxWiring\\n};\\n"],"names":[],"mappings":";;;;AAcA;;;;;;IAMa,gBAAgB,GAAqB;IAChD,IAAI,EAAE,WAAW;IACjB,WAAW,EAAE,qBAAqB;IAClC,aAAa,EAAE,iBAAiB;IAChC,MAAM,EAAE,eAAe;;;;;"}')}}]);