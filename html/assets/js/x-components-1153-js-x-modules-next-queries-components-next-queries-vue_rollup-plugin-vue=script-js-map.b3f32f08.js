(window.webpackJsonp=window.webpackJsonp||[]).push([[585],{1368:function(e,n){throw new Error("Module parse failed: Unexpected token (1:10)\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\n> {\"version\":3,\"file\":\"next-queries.vue_rollup-plugin-vue=script.js\",\"sources\":[\"../../../../../src/x-modules/next-queries/components/next-queries.vue?rollup-plugin-vue=script.ts\"],\"sourcesContent\":[\"\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\nimport { NextQuery as NextQueryModel } from '@empathyco/x-types';\\nimport Vue from 'vue';\\nimport { Component, Prop } from 'vue-property-decorator';\\nimport BaseSuggestions from '../../../components/suggestions/base-suggestions.vue';\\nimport { Getter } from '../../../components/decorators/store.decorators';\\nimport { xComponentMixin } from '../../../components/x-component.mixin';\\nimport { nextQueriesXModule } from '../x-module';\\nimport NextQuery from './next-query.vue';\\n\\n/**\\n * Simple next-queries component that renders a list of suggestions, allowing the user to\\n * select one of them, and emitting the needed events.\\n * A next query is a suggestion for a new search, related to your previous query. I.e. If\\n * people normally search for `shirts`, and then `trousers`, `trousers` would be a next query\\n * of `shirts`.\\n *\\n * @public\\n */\\n@Component({\\n  components: { NextQuery, BaseSuggestions },\\n  mixins: [xComponentMixin(nextQueriesXModule)]\\n})\\nexport default class NextQueries extends Vue {\\n  /**\\n   * Animation component that will be used to animate the suggestions.\\n   *\\n   * @public\\n   */\\n  @Prop()\\n  protected animation!: Vue;\\n\\n  /**\\n   * Number of next queries to be rendered.\\n   *\\n   * @public\\n   */\\n  @Prop()\\n  protected maxItemsToRender?: number;\\n\\n  /**\\n   * The list of next queries.\\n   *\\n   * @internal\\n   */\\n  @Getter('nextQueries', 'nextQueries')\\n  public nextQueries!: NextQueryModel[];\\n\\n  /**\\n   * Flag to indicate if the curated next queries should be displayed different.\\n   *\\n   * @public\\n   */\\n  @Prop({ default: false, type: Boolean })\\n  protected highlightCurated!: boolean;\\n}\\n\"],\"names\":[],\"mappings\":\";;;;;;;;;AA8CA;;;;;;;;;AAaA;IAAyC,+BAAG;IAA5C;;KAgCC;IAzBC;QADC,IAAI,EAAE;kDACmB;IAQ1B;QADC,IAAI,EAAE;yDAC6B;IAQpC;QADC,MAAM,CAAC,aAAa,EAAE,aAAa,CAAC;oDACC;IAQtC;QADC,IAAI,CAAC,EAAE,OAAO,EAAE,KAAK,EAAE,IAAI,EAAE,OAAO,EAAE,CAAC;yDACH;IA/BlB,WAAW;QAJ/B,SAAS,CAAC;YACT,UAAU,EAAE,EAAE,SAAS,WAAA,EAAE,eAAe,iBAAA,EAAE;YAC1C,MAAM,EAAE,CAAC,eAAe,CAAC,kBAAkB,CAAC,CAAC;SAC9C,CAAC;OACmB,WAAW,CAgC/B;IAAD,kBAAC;CAAA,CAhCwC,GAAG;;;;\"}")}}]);