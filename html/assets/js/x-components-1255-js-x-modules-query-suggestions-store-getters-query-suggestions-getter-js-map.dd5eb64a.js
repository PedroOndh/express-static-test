(window.webpackJsonp=window.webpackJsonp||[]).push([[623],{1402:function(e,A){throw new Error('Module parse failed: Unexpected token (1:10)\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\n> {"version":3,"file":"query-suggestions.getter.js","sources":["../../../../../../src/x-modules/query-suggestions/store/getters/query-suggestions.getter.ts"],"sourcesContent":["import { Suggestion } from \'@empathyco/x-types\';\\nimport { GettersClass } from \'../../../../store/getters.types\';\\nimport { normalizeString } from \'../../../../utils/normalize\';\\nimport { QuerySuggestionsState, QuerySuggestionsXStoreModule } from \'../types\';\\n\\n/**\\n * Class implementation for the {@link QuerySuggestionsGetter.querySuggestions} getter.\\n *\\n * @public\\n */\\nexport class QuerySuggestionsGetter implements GettersClass<QuerySuggestionsXStoreModule> {\\n  /**\\n   * Default implementation for the {@link QuerySuggestionsGetter.querySuggestions} getter.\\n   *\\n   * @param state - Current {@link https://vuex.vuejs.org/guide/state.html | state} of the query\\n   * suggestions module.\\n   * @returns The filtered subset of queries, matching with the current query.\\n   */\\n  querySuggestions({ query, suggestions, config }: QuerySuggestionsState): Suggestion[] {\\n    if (!query || !config.hideIfEqualsQuery) {\\n      return suggestions;\\n    }\\n    return suggestions.filter(this.isInQuerySuggestions(normalizeString(query)));\\n  }\\n\\n  /**\\n   * Creates a function to check in the suggestion queries array the items that match\\n   * the current query.\\n   *\\n   * @param normalizedQuery - The normalized query for search into the array.\\n   * @returns A filter function for searching into the array of suggestion queries with the provided\\n   * params.\\n   * @internal\\n   */\\n  protected isInQuerySuggestions(normalizedQuery: string): (suggestion: Suggestion) => boolean {\\n    return (suggestion: Suggestion) => {\\n      const normalizedSuggestionQuery = normalizeString(suggestion.query);\\n      // TODO Hide the suggestion if it\'s equals to the query and it does NOT have facets. (EX-3184)\\n      // The logic is here https://bitbucket.org/colbenson/x-components/pull-requests/432\\n      // normalizedSuggestionQuery !== normalizedQuery || !isArrayEmpty(suggestion.facets)\\n      return normalizedSuggestionQuery !== normalizedQuery;\\n    };\\n  }\\n}\\n\\nconst querySuggestionsGetter = new QuerySuggestionsGetter();\\n\\n// eslint-disable-next-line jsdoc/require-description-complete-sentence\\n/**\\n * {@inheritDoc QuerySuggestionsGetter.querySuggestions}\\n *\\n * @public\\n */\\nexport const querySuggestions =\\n  querySuggestionsGetter.querySuggestions.bind(querySuggestionsGetter);\\n"],"names":[],"mappings":";;AAKA;;;;;;IAKA;KAiCC;;;;;;;;IAzBC,iDAAgB,GAAhB,UAAiB,EAAqD;YAAnD,KAAK,WAAA,EAAE,WAAW,iBAAA,EAAE,MAAM,YAAA;QAC3C,IAAI,CAAC,KAAK,IAAI,CAAC,MAAM,CAAC,iBAAiB,EAAE;YACvC,OAAO,WAAW,CAAC;SACpB;QACD,OAAO,WAAW,CAAC,MAAM,CAAC,IAAI,CAAC,oBAAoB,CAAC,eAAe,CAAC,KAAK,CAAC,CAAC,CAAC,CAAC;KAC9E;;;;;;;;;;IAWS,qDAAoB,GAA9B,UAA+B,eAAuB;QACpD,OAAO,UAAC,UAAsB;YAC5B,IAAM,yBAAyB,GAAG,eAAe,CAAC,UAAU,CAAC,KAAK,CAAC,CAAC;;;;YAIpE,OAAO,yBAAyB,KAAK,eAAe,CAAC;SACtD,CAAC;KACH;IACH,6BAAC;AAAD,CAAC,IAAA;AAED,IAAM,sBAAsB,GAAG,IAAI,sBAAsB,EAAE,CAAC;AAE5D;AACA;;;;;IAKa,gBAAgB,GAC3B,sBAAsB,CAAC,gBAAgB,CAAC,IAAI,CAAC,sBAAsB;;;;"}')}}]);