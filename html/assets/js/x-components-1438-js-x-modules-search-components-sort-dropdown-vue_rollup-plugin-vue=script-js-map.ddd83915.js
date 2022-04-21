(window.webpackJsonp=window.webpackJsonp||[]).push([[690],{1463:function(A,n){throw new Error("Module parse failed: Unexpected token (1:10)\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\n> {\"version\":3,\"file\":\"sort-dropdown.vue_rollup-plugin-vue=script.js\",\"sources\":[\"../../../../../src/x-modules/search/components/sort-dropdown.vue?rollup-plugin-vue=script.ts\"],\"sourcesContent\":[\"\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\nimport { Sort } from '@empathyco/x-types';\\nimport Vue from 'vue';\\nimport { mixins } from 'vue-class-component';\\nimport { Component, Prop } from 'vue-property-decorator';\\nimport BaseDropdown from '../../../components/base-dropdown.vue';\\nimport { xComponentMixin } from '../../../components/x-component.mixin';\\nimport { searchXModule } from '../x-module';\\nimport SortMixin from './sort.mixin';\\n\\n/**\\n * The `SortDropdown` component allows user to select the search results order. This component\\n * also allows to change the selected sort programmatically.\\n *\\n * @remarks It extends {@link SortMixin}.\\n *\\n * @public\\n */\\n@Component({\\n  mixins: [xComponentMixin(searchXModule)],\\n  components: { BaseDropdown },\\n  model: {\\n    event: 'change'\\n  }\\n})\\nexport default class SortDropdown extends mixins(SortMixin) {\\n  /**\\n   * The transition to use for opening and closing the dropdown.\\n   *\\n   * @public\\n   */\\n  @Prop()\\n  public animation?: string | typeof Vue;\\n  /**\\n   * Emits the events related to the selection of a sort value.\\n   *\\n   * @param sort - The selected sort.\\n   * @internal\\n   */\\n  protected emitUserClickedASort(sort: Sort): void {\\n    this.$x.emit('UserClickedASort', sort, { target: this.$el as HTMLElement });\\n    this.$emit('change', sort);\\n  }\\n}\\n\"],\"names\":[],\"mappings\":\";;;;;;;;AAyCA;;;;;;;;AAeA;IAA0C,gCAAiB;IAA3D;;KAkBC;;;;;;;IAJW,2CAAoB,GAA9B,UAA+B,IAAU;QACvC,IAAI,CAAC,EAAE,CAAC,IAAI,CAAC,kBAAkB,EAAE,IAAI,EAAE,EAAE,MAAM,EAAE,IAAI,CAAC,GAAkB,EAAE,CAAC,CAAC;QAC5E,IAAI,CAAC,KAAK,CAAC,QAAQ,EAAE,IAAI,CAAC,CAAC;KAC5B;IAVD;QADC,IAAI,EAAE;mDACgC;IAPpB,YAAY;QAPhC,SAAS,CAAC;YACT,MAAM,EAAE,CAAC,eAAe,CAAC,aAAa,CAAC,CAAC;YACxC,UAAU,EAAE,EAAE,YAAY,cAAA,EAAE;YAC5B,KAAK,EAAE;gBACL,KAAK,EAAE,QAAQ;aAChB;SACF,CAAC;OACmB,YAAY,CAkBhC;IAAD,mBAAC;CAlBD,CAA0C,MAAM,CAAC,SAAS,CAAC;;;;\"}")}}]);