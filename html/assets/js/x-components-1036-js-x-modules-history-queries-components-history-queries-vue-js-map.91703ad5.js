(window.webpackJsonp=window.webpackJsonp||[]).push([[542],{1329:function(e,n){throw new Error('Module parse failed: Unexpected token (1:10)\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\n> {"version":3,"file":"history-queries.vue.js","sources":["../../../../../src/x-modules/history-queries/components/history-queries.vue"],"sourcesContent":["<template>\\n  <BaseSuggestions\\n    :suggestions=\\"historyQueries\\"\\n    class=\\"x-history-queries\\"\\n    data-test=\\"history-queries\\"\\n    :animation=\\"animation\\"\\n    :maxItemsToRender=\\"maxItemsToRender\\"\\n  >\\n    <template #default=\\"{ suggestion, index }\\">\\n      \x3c!--\\n        @slot History Query item\\n            @binding {Suggestion} suggestion - History Query suggestion data\\n            @binding {number} index - History Query suggestion index\\n      --\x3e\\n      <slot name=\\"suggestion\\" v-bind=\\"{ suggestion, index }\\">\\n        <HistoryQuery\\n          :suggestion=\\"suggestion\\"\\n          data-test=\\"history-query-item\\"\\n          class=\\"x-history-queries__item\\"\\n        >\\n          <template #default=\\"{ queryHTML }\\">\\n            \x3c!-- eslint-disable max-len --\x3e\\n            \x3c!--\\n              @slot History Query content\\n                  @binding {Suggestion} suggestion - History Query suggestion data\\n                  @binding {string} queryHTML - Suggestion\'s query with the matching part inside a span tag\\n                  @binding {number} index - History Query suggestion index\\n            --\x3e\\n            \x3c!-- eslint-enable max-len --\x3e\\n            <slot name=\\"suggestion-content\\" v-bind=\\"{ suggestion, index, queryHTML }\\" />\\n          </template>\\n          <template #remove-button-content>\\n            \x3c!--\\n              @slot History Query remove button content\\n                  @binding {Suggestion} suggestion - History Query suggestion data\\n                  @binding {number} index - History Query suggestion index\\n            --\x3e\\n            <slot name=\\"suggestion-remove-content\\" v-bind=\\"{ suggestion, index }\\" />\\n          </template>\\n        </HistoryQuery>\\n      </slot>\\n    </template>\\n  </BaseSuggestions>\\n</template>\\n\\n<script lang=\\"ts\\">\\n  import { HistoryQuery as HistoryQueryModel } from \'@empathyco/x-types\';\\n  import Vue from \'vue\';\\n  import { Component, Prop } from \'vue-property-decorator\';\\n  import BaseSuggestions from \'../../../components/suggestions/base-suggestions.vue\';\\n  import { Getter } from \'../../../components/decorators/store.decorators\';\\n  import { xComponentMixin } from \'../../../components/x-component.mixin\';\\n  import { historyQueriesXModule } from \'../x-module\';\\n  import HistoryQuery from \'./history-query.vue\';\\n\\n  /**\\n   * This component renders a list of suggestions coming from the user queries history.\\n   *\\n   * @remarks\\n   *\\n   * Allows the user to select one of them, emitting the needed events.\\n   * A history query is just another type of suggestion that contains a query that the user has\\n   * made in the past.\\n   *\\n   * @public\\n   */\\n  @Component({\\n    components: { BaseSuggestions, HistoryQuery },\\n    mixins: [xComponentMixin(historyQueriesXModule)]\\n  })\\n  export default class HistoryQueries extends Vue {\\n    /**\\n     * Animation component that will be used to animate the suggestions.\\n     *\\n     * @public\\n     */\\n    @Prop()\\n    protected animation!: Vue;\\n\\n    /**\\n     * Maximum number of history queries to show. It should be a lower number than the\\n     * {@link HistoryQueriesConfig.maxItemsToStore}. If it is not provided, it will show\\n     * all the stored `HistoryQueries`.\\n     */\\n    @Prop()\\n    protected maxItemsToRender?: number;\\n\\n    /**\\n     * The filtered list of history queries.\\n     *\\n     * @internal\\n     */\\n    @Getter(\'historyQueries\', \'historyQueries\')\\n    public historyQueries!: HistoryQueryModel[];\\n  }\\n<\/script>\\n\\n<docs lang=\\"mdx\\">\\n## Examples\\n\\nThis component renders a list of suggestions coming from the user queries history\\n\\n### Default usage\\n\\nNo props are required for the usage of this component.\\n\\n```vue\\n<HistoryQueries />\\n```\\n\\nThe component has two optional props. `animation` to render the component with an animation and\\n`maxItemToRender` to limit the number of history queries will be rendered (by default it is 5).\\n\\n```vue\\n<HistoryQueries :animation=\\"FadeAndSlide\\" :maxItemsToRender=\\"10\\" />\\n```\\n\\n### Overriding Suggestion component\\n\\nThe default `HistoryQuery` component that is used in every suggestion can be replaced. To do so, the\\n`suggestion` slot is available, containing the history query data under the `suggestion` property.\\nRemember that if HistoryQuery component wasn\'t used the `handleHistoryQuerySelection` method needs\\nto be implemented emitting the needed events.\\n\\n```vue\\n<HistoryQueries>\\n  <template #suggestion=\\"{ suggestion }\\">\\n    <img class=\\"x-history-query__icon\\" src=\\"./history-query-extra-icon.svg\\"/>\\n    <HistoryQuery :suggestion=\\"suggestion\\"/>\\n  </template>\\n</HistoryQueries>\\n```\\n\\n### Overriding suggestion-content and suggestion-remove-content slot\\n\\nThe content of the `HistoryQuery` component can be overridden. For replacing the default suggestion\\ncontent, the `suggestion-content` slot is available, containing the history query suggestion (in the\\n`suggestion` property), and the matching query part HTML (in the `queryHTML` property).\\n\\n```vue\\n<HistoryQueries>\\n  <template #suggestion-content=\\"{ queryHTML }\\">\\n    <img class=\\"x-history-query__history-icon\\" src=\\"./history-icon.svg\\"/>\\n    <span class=\\"x-history-query__matching-part\\" v-html=\\"queryHTML\\"></span>\\n  </template>\\n  <template #suggestion-remove-content>\\n    <img class=\\"x-history-queries__remove\\" src=\\"./remove-icon.svg\\"/>\\n  </template>\\n</HistoryQueries>\\n```\\n</docs>\\n"],"names":["const"],"mappings":";;;;AAEAA;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;"}')}}]);