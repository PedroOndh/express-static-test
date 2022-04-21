(window.webpackJsonp=window.webpackJsonp||[]).push([[957],{1231:function(A,n){throw new Error('Module parse failed: Unexpected token (1:10)\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\n> {"version":3,"file":"debounce.js","sources":["../../../src/utils/debounce.ts"],"sourcesContent":["/* eslint-disable max-len */\\nimport { DebouncedFunction, DebounceOptions } from \'./types\';\\n\\n/**\\n * Util function that returns a debounced version of the function passed as parameter. It can use\\n * the leading strategy, trailing strategy or both. Using both would result in one leading\\n * execution guaranteed and trailing executions only if there are further calls during the length\\n * of the debounce time.\\n *\\n * @param fn - Function to be debounced.\\n * @param debounceTimeInMs - The time of debounce in ms.\\n * @param debounceOptions - The options for the debounce strategy.\\n * @returns A new function with the debounce.\\n *\\n * @example Debounce options:\\n *\\n * Given this code, where you configure the `trailing` and `leading` options:\\n *\\n * ```js\\n * const log = debounce(name => console.log(name), 1000, {\\n *   leading\\n *   trailing\\n * });\\n *\\n *  log(\'a\'); // +0ms\\n *  log(\'b\'); // +0ms\\n *  log(\'c\'); // +0ms\\n *  setTimeout(() => log(\'d\'), 1000); // +1000ms\\n *  setTimeout(() => log(\'e\'), 1500); // +500ms\\n *  setTimeout(() => log(\'f\'), 2600); // +1100ms\\n * ```\\n *\\n * | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\\\\\\\\ trailing<br/> leading \\\\\\\\ | **`false`** | **`true`**    |\\n * |:----------------------------------------------------------------------------------------------------------|-------------|---------------|\\n * | **`false`**                                                                                               |             | c, e, f       |\\n * | **`true`**                                                                                                | a, d, f     | a, c, d, e, f |\\n *\\n * @public\\n */\\nexport const debounce = <Params extends any[]>(\\n  fn: (...args: Params) => void,\\n  debounceTimeInMs: number,\\n  { leading = false, trailing = true }: DebounceOptions = {}\\n): DebouncedFunction<Params> => {\\n  let timer: ReturnType<typeof setTimeout> | undefined;\\n  const debouncedFn: DebouncedFunction<Params> = (...args) => {\\n    const isFirstLeadingCall = leading && !timer;\\n    if (isFirstLeadingCall) {\\n      fn(...args);\\n    }\\n    const trailingFn = (): void => {\\n      timer = undefined;\\n      if (!isFirstLeadingCall && trailing) {\\n        fn(...args);\\n      }\\n    };\\n    if (timer) {\\n      clearTimeout(timer);\\n    }\\n    timer = setTimeout(() => trailingFn(), debounceTimeInMs);\\n  };\\n\\n  debouncedFn.cancel = () => {\\n    if (timer) {\\n      clearTimeout(timer);\\n    }\\n  };\\n  return debouncedFn;\\n};\\n"],"names":[],"mappings":"AAGA;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IAoCa,QAAQ,GAAG,UACtB,EAA6B,EAC7B,gBAAwB,EACxB,EAA0D;QAA1D,qBAAwD,EAAE,KAAA,EAAxD,eAAe,EAAf,OAAO,mBAAG,KAAK,KAAA,EAAE,gBAAe,EAAf,QAAQ,mBAAG,IAAI,KAAA;IAElC,IAAI,KAAgD,CAAC;IACrD,IAAM,WAAW,GAA8B;QAAC,cAAO;aAAP,UAAO,EAAP,qBAAO,EAAP,IAAO;YAAP,yBAAO;;QACrD,IAAM,kBAAkB,GAAG,OAAO,IAAI,CAAC,KAAK,CAAC;QAC7C,IAAI,kBAAkB,EAAE;YACtB,EAAE,eAAI,IAAI,EAAE;SACb;QACD,IAAM,UAAU,GAAG;YACjB,KAAK,GAAG,SAAS,CAAC;YAClB,IAAI,CAAC,kBAAkB,IAAI,QAAQ,EAAE;gBACnC,EAAE,eAAI,IAAI,EAAE;aACb;SACF,CAAC;QACF,IAAI,KAAK,EAAE;YACT,YAAY,CAAC,KAAK,CAAC,CAAC;SACrB;QACD,KAAK,GAAG,UAAU,CAAC,cAAM,OAAA,UAAU,EAAE,GAAA,EAAE,gBAAgB,CAAC,CAAC;KAC1D,CAAC;IAEF,WAAW,CAAC,MAAM,GAAG;QACnB,IAAI,KAAK,EAAE;YACT,YAAY,CAAC,KAAK,CAAC,CAAC;SACrB;KACF,CAAC;IACF,OAAO,WAAW,CAAC;AACrB;;;;"}')}}]);