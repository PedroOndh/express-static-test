(window.webpackJsonp=window.webpackJsonp||[]).push([[966],{1240:function(A,e){throw new Error('Module parse failed: Unexpected token (1:10)\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\n> {"version":3,"file":"sanitize.js","sources":["../../../src/utils/sanitize.ts"],"sourcesContent":["const REPLACE_REGEX = /[<>&]/g;\\n/**\\n * Sanitize characters from a given string.\\n *\\n * @param str - The string to remove unwanted characters.\\n * @returns The string without the unwanted characters.\\n * @public\\n */\\nexport const sanitize = (str: string): string => {\\n  return str.replace(REPLACE_REGEX, key => `&#${key.charCodeAt(0)};`);\\n};\\n"],"names":[],"mappings":"AAAA,IAAM,aAAa,GAAG,QAAQ,CAAC;AAC/B;;;;;;;IAOa,QAAQ,GAAG,UAAC,GAAW;IAClC,OAAO,GAAG,CAAC,OAAO,CAAC,aAAa,EAAE,UAAA,GAAG,IAAI,OAAA,OAAK,GAAG,CAAC,UAAU,CAAC,CAAC,CAAC,MAAG,GAAA,CAAC,CAAC;AACtE;;;;"}')}}]);