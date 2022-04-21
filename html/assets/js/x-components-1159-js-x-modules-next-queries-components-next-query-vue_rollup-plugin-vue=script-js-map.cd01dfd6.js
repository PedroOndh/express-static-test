(window.webpackJsonp=window.webpackJsonp||[]).push([[587],{1370:function(e,A){throw new Error('Module parse failed: Unexpected token (1:10)\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\n> {"version":3,"file":"next-query.vue_rollup-plugin-vue=script.js","sources":["../../../../../src/x-modules/next-queries/components/next-query.vue?rollup-plugin-vue=script.ts"],"sourcesContent":["\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\nimport { NextQuery as NextQueryModel } from \'@empathyco/x-types\';\\nimport Vue from \'vue\';\\nimport { Component, Prop } from \'vue-property-decorator\';\\nimport BaseSuggestion from \'../../../components/suggestions/base-suggestion.vue\';\\nimport { xComponentMixin } from \'../../../components/x-component.mixin\';\\nimport { XEventsTypes } from \'../../../wiring/events.types\';\\nimport { nextQueriesXModule } from \'../x-module\';\\n\\n/**\\n * Renders a next query item which receives the suggestion that will be rendered as a prop. It\\n * exposes a default slot to change the next query content. If the slot is not overridden,\\n * it will render the suggestion query by default.\\n *\\n * @public\\n */\\n@Component({\\n  components: { BaseSuggestion },\\n  mixins: [xComponentMixin(nextQueriesXModule)]\\n})\\nexport default class NextQuery extends Vue {\\n  /**\\n   * The suggestion to render and use in the default slot.\\n   *\\n   * @public\\n   */\\n  @Prop({ required: true })\\n  protected suggestion!: NextQueryModel;\\n\\n  /**\\n   * Indicates if the curated next query should be highlighted.\\n   *\\n   * @public\\n   */\\n  @Prop({ default: false, type: Boolean })\\n  protected highlightCurated!: boolean;\\n\\n  /**\\n   * Events list which are going to be emitted when a next query is selected.\\n   *\\n   * @returns The {@link XEvent | XEvents} to emit.\\n   * @public\\n   */\\n  protected get events(): Partial<XEventsTypes> {\\n    return {\\n      UserSelectedANextQuery: this.suggestion\\n    };\\n  }\\n\\n  /**\\n   * Checks if the next query is curated and if it should be highlighted.\\n   *\\n   * @returns True if the next query is curated and should be highlighted.\\n   *\\n   * @internal\\n   */\\n  protected get shouldHighlightCurated(): boolean {\\n    return this.highlightCurated && (this.suggestion.isCurated ?? false);\\n  }\\n}\\n"],"names":[],"mappings":";;;;;;;AA6BA;;;;;;;AAWA;IAAuC,6BAAG;IAA1C;;KAuCC;IAhBC,sBAAc,6BAAM;;;;;;;aAApB;YACE,OAAO;gBACL,sBAAsB,EAAE,IAAI,CAAC,UAAU;aACxC,CAAC;SACH;;;OAAA;IASD,sBAAc,6CAAsB;;;;;;;;aAApC;;YACE,OAAO,IAAI,CAAC,gBAAgB,KAAK,MAAA,IAAI,CAAC,UAAU,CAAC,SAAS,mCAAI,KAAK,CAAC,CAAC;SACtE;;;OAAA;IA/BD;QADC,IAAI,CAAC,EAAE,QAAQ,EAAE,IAAI,EAAE,CAAC;iDACa;IAQtC;QADC,IAAI,CAAC,EAAE,OAAO,EAAE,KAAK,EAAE,IAAI,EAAE,OAAO,EAAE,CAAC;uDACH;IAflB,SAAS;QAJ7B,SAAS,CAAC;YACT,UAAU,EAAE,EAAE,cAAc,gBAAA,EAAE;YAC9B,MAAM,EAAE,CAAC,eAAe,CAAC,kBAAkB,CAAC,CAAC;SAC9C,CAAC;OACmB,SAAS,CAuC7B;IAAD,gBAAC;CAAA,CAvCsC,GAAG;;;;"}')}}]);