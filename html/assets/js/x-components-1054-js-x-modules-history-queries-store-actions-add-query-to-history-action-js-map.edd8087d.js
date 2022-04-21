(window.webpackJsonp=window.webpackJsonp||[]).push([[549],{1335:function(A,e){throw new Error("Module parse failed: Unexpected token (1:10)\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\n> {\"version\":3,\"file\":\"add-query-to-history.action.js\",\"sources\":[\"../../../../../../src/x-modules/history-queries/store/actions/add-query-to-history.action.ts\"],\"sourcesContent\":[\"import { HistoryQuery } from '@empathyco/x-types';\\nimport { ActionsClass } from '../../../../store/actions.types';\\nimport { isArrayEmpty } from '../../../../utils/array';\\nimport { normalizeString } from '../../../../utils/normalize';\\nimport { Pair } from '../../../../utils/types';\\nimport { HistoryQueriesActionContext, HistoryQueriesXStoreModule } from '../types';\\n\\n/** Regex for splitting a query into its words. */\\nconst SPLIT_WORDS_REGEX = /[\\\\s-]/;\\n\\n/**\\n * Class implementation for the {@link HistoryQueriesActions.addQueryToHistory} action.\\n *\\n * @public\\n */\\nexport class AddQueryToHistoryAction implements ActionsClass<HistoryQueriesXStoreModule> {\\n  /**\\n   * Default implementation for the {@link HistoryQueriesActions.addQueryToHistory}.\\n   *\\n   * @param context - The {@link https://vuex.vuejs.org/guide/actions.html | context} of the\\n   * actions, provided by Vuex.\\n   * @param query - The query to try to add to the history.\\n   * @returns A `void` promise that resolves when the history queries finishes updating.\\n   */\\n  addQueryToHistory(\\n    { state, dispatch }: HistoryQueriesActionContext,\\n    query: string\\n  ): void | Promise<void> {\\n    const normalizedQuery = normalizeString(query);\\n    if (!normalizedQuery) {\\n      return;\\n    }\\n\\n    if (isArrayEmpty(state.historyQueries)) {\\n      return dispatch('setHistoryQueries', [this.createHistoryQuery(query)]);\\n    }\\n\\n    const newHistory = this.createNewHistory(state.historyQueries, normalizedQuery);\\n    if (newHistory) {\\n      newHistory.unshift(this.createHistoryQuery(query));\\n      return dispatch('setHistoryQueries', newHistory);\\n    }\\n  }\\n\\n  /**\\n   * Creates a new `HistoryQuery`.\\n   *\\n   * @param query - The query for the new `HistoryQuery`.\\n   * @returns A new `HistoryQuery`.\\n   * @internal\\n   */\\n  protected createHistoryQuery(query: string): HistoryQuery {\\n    return {\\n      query: query.trim(),\\n      timestamp: Date.now(),\\n      modelName: 'HistoryQuery'\\n    };\\n  }\\n\\n  /**\\n   * Creates a new history from the old one to store the new query. Depending on the comparison\\n   * between the new query, and the last one in the history, it can return three different things:\\n   * - If it the last stored query should be replaced with the new one\\n   * ({@link AddQueryToHistoryAction.isReplaceAction} returns true), it returns a copy of the old\\n   * history, without the new query and the first item.\\n   * - If the new query should be simply added to the history\\n   * ({@link AddQueryToHistoryAction.isAddAction} returns true), It returns a copy of the old\\n   * history but without the new query if it was present.\\n   * - In any other case, the query shouldn't be saved, so this method returns `null`.\\n   *\\n   * @param currentHistory - The current history of queries.\\n   * @param normalizedQuery - The normalized version of the new query, to be stored on the history.\\n   * @returns A subset of the current history of queries ready to add the new `HistoryQuery`, or\\n   * null if the new query shouldn't be saved.\\n   * @internal\\n   */\\n  protected createNewHistory(\\n    currentHistory: HistoryQuery[],\\n    normalizedQuery: string\\n  ): HistoryQuery[] | null {\\n    const normalizedLastQuery = normalizeString(currentHistory[0].query);\\n    const queriesTuple: Pair<string> = [normalizedLastQuery, normalizedQuery];\\n\\n    const newWords = normalizedQuery.split(SPLIT_WORDS_REGEX);\\n    const lastWords = normalizedLastQuery.split(SPLIT_WORDS_REGEX);\\n    const wordsTuple: Pair<string[]> = [lastWords, newWords];\\n\\n    return this.isReplaceAction(wordsTuple, queriesTuple)\\n      ? // TODO EX-1815 This replace does not take into account yet queries that end in numbers\\n        this.removeNewQueryFromHistory(currentHistory.slice(1), normalizedQuery)\\n      : this.isAddAction(wordsTuple, queriesTuple)\\n      ? this.removeNewQueryFromHistory(currentHistory, normalizedQuery)\\n      : null;\\n  }\\n\\n  /**\\n   * Creates a copy of the current history, but removing the new query to store from it. It uses a\\n   * normalized version of the queries for comparing.\\n   *\\n   * @param currentHistory - The current history queries.\\n   * @param normalizedQuery - The normalized version of the new query to add to the history.\\n   * @returns A copy of the current history but without the new query into it.\\n   * @internal\\n   */\\n  protected removeNewQueryFromHistory(\\n    currentHistory: HistoryQuery[],\\n    normalizedQuery: string\\n  ): HistoryQuery[] {\\n    return currentHistory.filter(\\n      historyQuery => normalizeString(historyQuery.query) !== normalizedQuery\\n    );\\n  }\\n\\n  /**\\n   * Calculates if the new query should be added to the history.\\n   *\\n   * @param wordsTuple - A tuple containing the old, and the new words arrays.\\n   * @param queriesTuple - A tuple containing the old and the new queries.\\n   * @returns `true` when the new query should be added. `false` otherwise.\\n   * @internal\\n   */\\n  protected isAddAction(\\n    [lastWords, newWords]: Pair<string[]>,\\n    [lastQuery, newQuery]: Pair<string>\\n  ): boolean {\\n    return newWords.length !== lastWords.length || !lastQuery.includes(newQuery);\\n  }\\n\\n  /**\\n   * Calculates if the new query should replace the last query in the history.\\n   *\\n   * @param wordsTuple - A tuple containing the old, and the new words arrays.\\n   * @param queriesTuple - A tuple containing the old and the new queries.\\n   * @returns `true` when the new query should replace the last one. `false` otherwise.\\n   * @internal\\n   */\\n  protected isReplaceAction(\\n    [lastWords, newWords]: Pair<string[]>,\\n    [lastQuery, newQuery]: Pair<string>\\n  ): boolean {\\n    return lastQuery === newQuery || this.isQueryBeingRefined(lastWords, newWords);\\n  }\\n\\n  /**\\n   * Returns if the new query is a refined version of the last one. A refined version means to be\\n   * more specific. I.e. `shoes` is a refined query of `shoe`, `lego star wars` is a refined query\\n   * of `lego st`.\\n   *\\n   * @param lastWords - An array containing the words of the last query.\\n   * @param newWords - An array containing the words of the new query.\\n   * @returns `true` if the new query is refining the old one. `false` otherwise.\\n   * @internal\\n   */\\n  protected isQueryBeingRefined(lastWords: string[], newWords: string[]): boolean {\\n    const refinedWordIndex = lastWords.length - 1;\\n    const lastRefinedWord = lastWords[refinedWordIndex];\\n    const newRefinedWord = newWords[refinedWordIndex];\\n    return (\\n      !!lastRefinedWord &&\\n      !!newRefinedWord &&\\n      newRefinedWord !== lastRefinedWord &&\\n      newRefinedWord.includes(lastRefinedWord)\\n    );\\n  }\\n}\\n\\nconst addQueryToHistoryAction = new AddQueryToHistoryAction();\\n\\n// eslint-disable-next-line jsdoc/require-description-complete-sentence\\n/**\\n * {@inheritDoc AddQueryToHistoryAction.addQueryToHistory}\\n *\\n * @public\\n */\\nexport const addQueryToHistory =\\n  addQueryToHistoryAction.addQueryToHistory.bind(addQueryToHistoryAction);\\n\"],\"names\":[],\"mappings\":\";;;AAOA;AACA,IAAM,iBAAiB,GAAG,OAAO,CAAC;AAElC;;;;;;IAKA;KAqJC;;;;;;;;;IA5IC,mDAAiB,GAAjB,UACE,EAAgD,EAChD,KAAa;YADX,KAAK,WAAA,EAAE,QAAQ,cAAA;QAGjB,IAAM,eAAe,GAAG,eAAe,CAAC,KAAK,CAAC,CAAC;QAC/C,IAAI,CAAC,eAAe,EAAE;YACpB,OAAO;SACR;QAED,IAAI,YAAY,CAAC,KAAK,CAAC,cAAc,CAAC,EAAE;YACtC,OAAO,QAAQ,CAAC,mBAAmB,EAAE,CAAC,IAAI,CAAC,kBAAkB,CAAC,KAAK,CAAC,CAAC,CAAC,CAAC;SACxE;QAED,IAAM,UAAU,GAAG,IAAI,CAAC,gBAAgB,CAAC,KAAK,CAAC,cAAc,EAAE,eAAe,CAAC,CAAC;QAChF,IAAI,UAAU,EAAE;YACd,UAAU,CAAC,OAAO,CAAC,IAAI,CAAC,kBAAkB,CAAC,KAAK,CAAC,CAAC,CAAC;YACnD,OAAO,QAAQ,CAAC,mBAAmB,EAAE,UAAU,CAAC,CAAC;SAClD;KACF;;;;;;;;IASS,oDAAkB,GAA5B,UAA6B,KAAa;QACxC,OAAO;YACL,KAAK,EAAE,KAAK,CAAC,IAAI,EAAE;YACnB,SAAS,EAAE,IAAI,CAAC,GAAG,EAAE;YACrB,SAAS,EAAE,cAAc;SAC1B,CAAC;KACH;;;;;;;;;;;;;;;;;;IAmBS,kDAAgB,GAA1B,UACE,cAA8B,EAC9B,eAAuB;QAEvB,IAAM,mBAAmB,GAAG,eAAe,CAAC,cAAc,CAAC,CAAC,CAAC,CAAC,KAAK,CAAC,CAAC;QACrE,IAAM,YAAY,GAAiB,CAAC,mBAAmB,EAAE,eAAe,CAAC,CAAC;QAE1E,IAAM,QAAQ,GAAG,eAAe,CAAC,KAAK,CAAC,iBAAiB,CAAC,CAAC;QAC1D,IAAM,SAAS,GAAG,mBAAmB,CAAC,KAAK,CAAC,iBAAiB,CAAC,CAAC;QAC/D,IAAM,UAAU,GAAmB,CAAC,SAAS,EAAE,QAAQ,CAAC,CAAC;QAEzD,OAAO,IAAI,CAAC,eAAe,CAAC,UAAU,EAAE,YAAY,CAAC;;gBAEjD,IAAI,CAAC,yBAAyB,CAAC,cAAc,CAAC,KAAK,CAAC,CAAC,CAAC,EAAE,eAAe,CAAC;cACxE,IAAI,CAAC,WAAW,CAAC,UAAU,EAAE,YAAY,CAAC;kBAC1C,IAAI,CAAC,yBAAyB,CAAC,cAAc,EAAE,eAAe,CAAC;kBAC/D,IAAI,CAAC;KACV;;;;;;;;;;IAWS,2DAAyB,GAAnC,UACE,cAA8B,EAC9B,eAAuB;QAEvB,OAAO,cAAc,CAAC,MAAM,CAC1B,UAAA,YAAY,IAAI,OAAA,eAAe,CAAC,YAAY,CAAC,KAAK,CAAC,KAAK,eAAe,GAAA,CACxE,CAAC;KACH;;;;;;;;;IAUS,6CAAW,GAArB,UACE,EAAqC,EACrC,EAAmC;YADlC,SAAS,QAAA,EAAE,QAAQ,QAAA;YACnB,SAAS,QAAA,EAAE,QAAQ,QAAA;QAEpB,OAAO,QAAQ,CAAC,MAAM,KAAK,SAAS,CAAC,MAAM,IAAI,CAAC,SAAS,CAAC,QAAQ,CAAC,QAAQ,CAAC,CAAC;KAC9E;;;;;;;;;IAUS,iDAAe,GAAzB,UACE,EAAqC,EACrC,EAAmC;YADlC,SAAS,QAAA,EAAE,QAAQ,QAAA;YACnB,SAAS,QAAA,EAAE,QAAQ,QAAA;QAEpB,OAAO,SAAS,KAAK,QAAQ,IAAI,IAAI,CAAC,mBAAmB,CAAC,SAAS,EAAE,QAAQ,CAAC,CAAC;KAChF;;;;;;;;;;;IAYS,qDAAmB,GAA7B,UAA8B,SAAmB,EAAE,QAAkB;QACnE,IAAM,gBAAgB,GAAG,SAAS,CAAC,MAAM,GAAG,CAAC,CAAC;QAC9C,IAAM,eAAe,GAAG,SAAS,CAAC,gBAAgB,CAAC,CAAC;QACpD,IAAM,cAAc,GAAG,QAAQ,CAAC,gBAAgB,CAAC,CAAC;QAClD,QACE,CAAC,CAAC,eAAe;YACjB,CAAC,CAAC,cAAc;YAChB,cAAc,KAAK,eAAe;YAClC,cAAc,CAAC,QAAQ,CAAC,eAAe,CAAC,EACxC;KACH;IACH,8BAAC;AAAD,CAAC,IAAA;AAED,IAAM,uBAAuB,GAAG,IAAI,uBAAuB,EAAE,CAAC;AAE9D;AACA;;;;;IAKa,iBAAiB,GAC5B,uBAAuB,CAAC,iBAAiB,CAAC,IAAI,CAAC,uBAAuB;;;;\"}")}}]);