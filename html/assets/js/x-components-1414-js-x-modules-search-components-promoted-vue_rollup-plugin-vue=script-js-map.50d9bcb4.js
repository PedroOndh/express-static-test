(window.webpackJsonp=window.webpackJsonp||[]).push([[681],{1455:function(e,A){throw new Error('Module parse failed: Unexpected token (1:10)\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\n> {"version":3,"file":"promoted.vue_rollup-plugin-vue=script.js","sources":["../../../../../src/x-modules/search/components/promoted.vue?rollup-plugin-vue=script.ts"],"sourcesContent":["\\n\\n\\n\\n\\n\\n\\n\\nimport { Promoted as PromotedModel } from \'@empathyco/x-types\';\\nimport Vue from \'vue\';\\nimport { Component, Prop } from \'vue-property-decorator\';\\nimport { xComponentMixin } from \'../../../components/x-component.mixin\';\\nimport { searchXModule } from \'../x-module\';\\n\\n/**\\n * A promoted result is just an item that has been inserted into the search results to advertise\\n * something. Usually it is one of the first items in the grid, and has the same shape as a\\n * result. It just contains a link to the promoted content, an image, and a title.\\n *\\n * @public\\n */\\n@Component({\\n  mixins: [xComponentMixin(searchXModule)]\\n})\\nexport default class Promoted extends Vue {\\n  /**\\n   * The promoted data.\\n   *\\n   * @public\\n   */\\n  @Prop({ required: true })\\n  public promoted!: PromotedModel;\\n\\n  /**\\n   * Emits the promoted click event.\\n   *\\n   * @internal\\n   */\\n  protected emitClickEvent(): void {\\n    this.$x.emit(\'UserClickedAPromoted\', this.promoted);\\n  }\\n}\\n"],"names":[],"mappings":";;;;;;AAcA;;;;;;;AAUA;IAAsC,4BAAG;IAAzC;;KAiBC;;;;;;IAHW,iCAAc,GAAxB;QACE,IAAI,CAAC,EAAE,CAAC,IAAI,CAAC,sBAAsB,EAAE,IAAI,CAAC,QAAQ,CAAC,CAAC;KACrD;IATD;QADC,IAAI,CAAC,EAAE,QAAQ,EAAE,IAAI,EAAE,CAAC;8CACO;IAPb,QAAQ;QAH5B,SAAS,CAAC;YACT,MAAM,EAAE,CAAC,eAAe,CAAC,aAAa,CAAC,CAAC;SACzC,CAAC;OACmB,QAAQ,CAiB5B;IAAD,eAAC;CAAA,CAjBqC,GAAG;;;;"}')}}]);