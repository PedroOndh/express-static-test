(window.webpackJsonp=window.webpackJsonp||[]).push([[874],{1156:function(n,o){throw new Error('Module parse failed: Unexpected token (1:10)\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\n> {"version":3,"file":"single-column-layout.vue_rollup-plugin-vue=script.js","sources":["../../../../src/components/layouts/single-column-layout.vue?rollup-plugin-vue=script.ts"],"sourcesContent":["\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\nimport Vue from \'vue\';\\nimport { mixins } from \'vue-class-component\';\\nimport { Component, Prop } from \'vue-property-decorator\';\\nimport MainScroll from \'../../x-modules/scroll/components/main-scroll.vue\';\\nimport Scroll from \'../../x-modules/scroll/components/scroll.vue\';\\nimport TranslateFromRight from \'../animations/translate-from-right.vue\';\\nimport BaseIdModal from \'../modals/base-id-modal.vue\';\\nimport BaseScroll from \'../scroll/base-scroll.vue\';\\nimport LayoutsMixin from \'./layouts.mixin\';\\n\\n/**\\n * Component for use as Layout to be filled with the rest of the Components.\\n *\\n * @public\\n */\\n@Component({\\n  components: { BaseIdModal, BaseScroll, MainScroll, Scroll }\\n})\\nexport default class SingleColumnLayout extends mixins(LayoutsMixin) {\\n  /**\\n   * The animation used for the Main Aside.\\n   *\\n   * @public\\n   */\\n  @Prop({ default: () => TranslateFromRight })\\n  protected asideAnimation!: Vue;\\n}\\n"],"names":[],"mappings":";;;;;;;;;;AAkFA;;;;;AAQA;IAAgD,sCAAoB;IAApE;;KAQC;IADC;QADC,IAAI,CAAC,EAAE,OAAO,EAAE,cAAM,OAAA,kBAAkB,GAAA,EAAE,CAAC;8DACb;IAPZ,kBAAkB;QAHtC,SAAS,CAAC;YACT,UAAU,EAAE,EAAE,WAAW,aAAA,EAAE,UAAU,YAAA,EAAE,UAAU,YAAA,EAAE,MAAM,QAAA,EAAE;SAC5D,CAAC;OACmB,kBAAkB,CAQtC;IAAD,yBAAC;CARD,CAAgD,MAAM,CAAC,YAAY,CAAC;;;;"}')}}]);