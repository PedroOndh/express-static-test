(window.webpackJsonp=window.webpackJsonp||[]).push([[613],{1393:function(e,n){throw new Error('Module parse failed: Unexpected token (1:10)\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\n> {"version":3,"file":"query-suggestion.vue.js","sources":["../../../../../src/x-modules/query-suggestions/components/query-suggestion.vue"],"sourcesContent":["<template>\\n  <BaseSuggestion\\n    v-bind=\\"{ query, suggestion, suggestionSelectedEvents: event }\\"\\n    :aria-label=\\"suggestion.query\\"\\n    class=\\"x-query-suggestion\\"\\n    data-test=\\"query-suggestion\\"\\n    feature=\\"query_suggestion\\"\\n  >\\n    <template #default=\\"{ suggestion, queryHTML }\\">\\n      \x3c!-- eslint-disable max-len --\x3e\\n      \x3c!--\\n        @slot Custom content that replaces the `QuerySuggestion` default content\\n            @binding {Suggestion} suggestion - Query Suggestion data\\n            @binding {string} queryHTML - Suggestion’s query with the matching part wrapped in a HTML span tag\\n      --\x3e\\n      \x3c!-- eslint-enable max-len --\x3e\\n      <slot v-bind=\\"{ suggestion, queryHTML }\\" />\\n    </template>\\n  </BaseSuggestion>\\n</template>\\n\\n<script lang=\\"ts\\">\\n  import { Suggestion } from \'@empathyco/x-types\';\\n  import { Component, Prop, Vue } from \'vue-property-decorator\';\\n  import BaseSuggestion from \'../../../components/suggestions/base-suggestion.vue\';\\n  import { Getter } from \'../../../components/decorators/store.decorators\';\\n  import { xComponentMixin } from \'../../../components/x-component.mixin\';\\n  import { XEventsTypes } from \'../../../wiring/events.types\';\\n  import { querySuggestionsXModule } from \'../x-module\';\\n\\n  /**\\n   * This component renders a suggestion for a query. A query suggestion is a recommended query\\n   * based on previous search queries. It contains the query itself and a set of filters associated.\\n   * For example, if you\'re searching for _shirt_, a query suggestion could be _long sleeve shirt_.\\n   *\\n   * @public\\n   */\\n  @Component({\\n    components: { BaseSuggestion },\\n    mixins: [xComponentMixin(querySuggestionsXModule)]\\n  })\\n  export default class QuerySuggestion extends Vue {\\n    /**\\n     * The normalized query of the query-suggestions module.\\n     *\\n     * @internal\\n     */\\n    @Getter(\'querySuggestions\', \'normalizedQuery\')\\n    public query!: string;\\n\\n    /**\\n     * The suggestion to render.\\n     *\\n     * @public\\n     */\\n    @Prop({ required: true })\\n    protected suggestion!: Suggestion;\\n\\n    /**\\n     * Emits {@link QuerySuggestionsXEvents.UserSelectedAQuerySuggestion} with the suggestion as\\n     * payload when selecting the query suggestion.\\n     *\\n     * @internal\\n     */\\n    protected event: Partial<XEventsTypes> = {\\n      UserSelectedAQuerySuggestion: this.suggestion\\n    };\\n  }\\n<\/script>\\n\\n<docs lang=\\"mdx\\">\\n## Events\\n\\nThis component emits the following events:\\n\\n- [`UserSelectedAQuerySuggestion`] (./../../api/x-components.querysuggestionsxevents.md)\\n\\n## See it in action\\n\\n\x3c!-- prettier-ignore-start --\x3e\\n:::warning Backend microservice required\\nTo use this component, the <b>Empathize</b> microservice must be\\nimplemented.\\n:::\\n\x3c!-- prettier-ignore-end --\x3e\\n\\nHere you can see how a single query suggestion is rendered using the `suggestion` prop.\\n\\n```vue\\n<template>\\n  <QuerySuggestion :suggestion=\\"suggestion\\" />\\n</template>\\n\\n<script>\\n  import { QuerySuggestion } from \'@empathyco/x-components/query-suggestions\';\\n  export default {\\n    name: \'QuerySuggestionDemo\',\\n    components: {\\n      QuerySuggestion\\n    },\\n    data() {\\n      return {\\n        suggestion: {\\n          modelName: \'QuerySuggestion\',\\n          query: \'beer\',\\n          facets: []\\n        }\\n      };\\n    }\\n  };\\n<\/script>\\n```\\n\\n### Play with default slot\\n\\nIn this example, the query suggestion is painted in blue by passing a color style in the HTML span\\nelement.\\n\\n```vue\\n<template>\\n  <QuerySuggestion :suggestion=\\"suggestion\\" #default=\\"{ queryHTML }\\">\\n    <span v-html=\\"queryHTML\\" style=\\"color: blue;\\" />\\n  </QuerySuggestion>\\n</template>\\n\\n<script>\\n  import { QuerySuggestion } from \'@empathyco/x-components/query-suggestions\';\\n  export default {\\n    name: \'QuerySuggestionDemo\',\\n    components: {\\n      QuerySuggestion\\n    },\\n    data() {\\n      return {\\n        suggestion: {\\n          modelName: \'QuerySuggestion\',\\n          query: \'beer\',\\n          facets: []\\n        }\\n      };\\n    }\\n  };\\n<\/script>\\n```\\n\\n### Play with events\\n\\nIn this example, when you click on the query suggestion, a message is displayed to illustrate that\\nthe `UserSelectedAQuerySuggestion` event has been triggered.\\n\\n```vue\\n<template>\\n  <QuerySuggestion :suggestion=\\"suggestion\\" @UserSelectedAQuerySuggestion=\\"alertSuggestion\\" />\\n</template>\\n\\n<script>\\n  import { QuerySuggestion } from \'@empathyco/x-components/query-suggestions\';\\n  export default {\\n    name: \'QuerySuggestionDemo\',\\n    components: {\\n      QuerySuggestion\\n    },\\n    data() {\\n      return {\\n        suggestion: {\\n          modelName: \'QuerySuggestion\',\\n          query: \'beer\',\\n          facets: []\\n        }\\n      };\\n    },\\n    methods: {\\n      alertSuggestion(querySuggestion) {\\n        alert(`You have clicked the query suggestion: ${querySuggestion.query}`);\\n      }\\n    }\\n  };\\n<\/script>\\n```\\n</docs>\\n"],"names":["const"],"mappings":";;;;AAEAA;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;"}')}}]);