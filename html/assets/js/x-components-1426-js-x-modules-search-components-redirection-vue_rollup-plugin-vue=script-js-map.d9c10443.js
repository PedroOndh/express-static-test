(window.webpackJsonp=window.webpackJsonp||[]).push([[685],{1459:function(A,e){throw new Error("Module parse failed: Unexpected token (1:10)\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\n> {\"version\":3,\"file\":\"redirection.vue_rollup-plugin-vue=script.js\",\"sources\":[\"../../../../../src/x-modules/search/components/redirection.vue?rollup-plugin-vue=script.ts\"],\"sourcesContent\":[\"\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\nimport { Redirection as RedirectionModel } from '@empathyco/x-types';\\nimport Vue from 'vue';\\nimport { Component, Prop, Watch } from 'vue-property-decorator';\\nimport { XOn } from '../../../components/decorators/bus.decorators';\\nimport { State } from '../../../components/decorators/store.decorators';\\nimport { xComponentMixin } from '../../../components/x-component.mixin';\\nimport { searchXModule } from '../x-module';\\n\\n/**\\n * A redirection is a component that sends the user to a link in the website. It is helpful when\\n * there are queries like `help`, `shipping costs`, `my account`, where a link to a section in the\\n * website will be more helpful than the set of results returned.\\n *\\n * @public\\n */\\n@Component({\\n  mixins: [xComponentMixin(searchXModule)]\\n})\\nexport default class Redirection extends Vue {\\n  @State('search', 'redirections')\\n  public redirections!: RedirectionModel[];\\n\\n  /**\\n   * The redirection mode. Auto for auto redirection and manual for an user interaction.\\n   *\\n   * @public\\n   */\\n  @Prop({ default: 'auto' })\\n  public mode!: 'auto' | 'manual';\\n\\n  /**\\n   * The waiting time in seconds until the redirection is made.\\n   *\\n   * @remarks this delay only works in auto mode.\\n   *\\n   * @public\\n   */\\n  @Prop({ default: 0 })\\n  public delayInSeconds!: number;\\n\\n  /**\\n   * The timeout id, used to cancel the redirection.\\n   *\\n   * @internal\\n   */\\n  protected timeoutId?: number;\\n\\n  /**\\n   * Boolean flag which indicates if the redirection is running.\\n   *\\n   * @public\\n   */\\n  protected isRedirecting = true;\\n\\n  /**\\n   * Computed property which returns the first recommendation of the state, if any returns null.\\n   *\\n   * @returns The first redirection of the state.\\n   *\\n   * @internal\\n   */\\n  protected get redirection(): RedirectionModel | null {\\n    return this.redirections?.[0] ?? null;\\n  }\\n\\n  /**\\n   * Watcher function which adds a setTimeout to the redirect method is the component\\n   * is in auto mode and there are redirections.\\n   *\\n   * @internal\\n   */\\n  @Watch('redirections', { immediate: true })\\n  protected redirectWithDelay(): void {\\n    this.isRedirecting = true;\\n    if (this.mode === 'auto' && this.redirection) {\\n      // eslint-disable-next-line @typescript-eslint/unbound-method\\n      this.timeoutId = setTimeout(this.redirect, this.delayInSeconds * 1000);\\n    }\\n  }\\n\\n  /**\\n   * Dispatches the redirection, updating the url.\\n   *\\n   * @public\\n   */\\n  protected redirect(): void {\\n    clearTimeout(this.timeoutId);\\n    this.$x.emit('UserClickedARedirection', this.redirection!);\\n    window.location.replace(this.redirection!.url);\\n  }\\n\\n  /**\\n   * Stops the redirection, emitting `UserClickedAbortARedirection` event.\\n   *\\n   * @public\\n   */\\n  protected abortRedirect(): void {\\n    this.cancelRedirect();\\n    this.$x.emit('UserClickedAbortARedirection');\\n  }\\n\\n  /**\\n   * Stops the animation if the user search another query.\\n   *\\n   * @internal\\n   */\\n  @XOn(['UserAcceptedAQuery', 'UserClearedQuery'])\\n  cancelRedirect(): void {\\n    clearTimeout(this.timeoutId);\\n    this.isRedirecting = false;\\n  }\\n}\\n\"],\"names\":[],\"mappings\":\";;;;;;;;AAmBA;;;;;;;AAUA;IAAyC,+BAAG;IAA5C;QAAA,qEA6FC;;;;;;QA3DW,mBAAa,GAAG,IAAI,CAAC;;KA2DhC;IAlDC,sBAAc,oCAAW;;;;;;;;aAAzB;;YACE,OAAO,MAAA,MAAA,IAAI,CAAC,YAAY,0CAAG,CAAC,CAAC,mCAAI,IAAI,CAAC;SACvC;;;OAAA;;;;;;;IASS,uCAAiB,GAA3B;QACE,IAAI,CAAC,aAAa,GAAG,IAAI,CAAC;QAC1B,IAAI,IAAI,CAAC,IAAI,KAAK,MAAM,IAAI,IAAI,CAAC,WAAW,EAAE;;YAE5C,IAAI,CAAC,SAAS,GAAG,UAAU,CAAC,IAAI,CAAC,QAAQ,EAAE,IAAI,CAAC,cAAc,GAAG,IAAI,CAAC,CAAC;SACxE;KACF;;;;;;IAOS,8BAAQ,GAAlB;QACE,YAAY,CAAC,IAAI,CAAC,SAAS,CAAC,CAAC;QAC7B,IAAI,CAAC,EAAE,CAAC,IAAI,CAAC,yBAAyB,EAAE,IAAI,CAAC,WAAY,CAAC,CAAC;QAC3D,MAAM,CAAC,QAAQ,CAAC,OAAO,CAAC,IAAI,CAAC,WAAY,CAAC,GAAG,CAAC,CAAC;KAChD;;;;;;IAOS,mCAAa,GAAvB;QACE,IAAI,CAAC,cAAc,EAAE,CAAC;QACtB,IAAI,CAAC,EAAE,CAAC,IAAI,CAAC,8BAA8B,CAAC,CAAC;KAC9C;;;;;;IAQD,oCAAc,GAAd;QACE,YAAY,CAAC,IAAI,CAAC,SAAS,CAAC,CAAC;QAC7B,IAAI,CAAC,aAAa,GAAG,KAAK,CAAC;KAC5B;IA1FD;QADC,KAAK,CAAC,QAAQ,EAAE,cAAc,CAAC;qDACS;IAQzC;QADC,IAAI,CAAC,EAAE,OAAO,EAAE,MAAM,EAAE,CAAC;6CACM;IAUhC;QADC,IAAI,CAAC,EAAE,OAAO,EAAE,CAAC,EAAE,CAAC;uDACU;IAkC/B;QADC,KAAK,CAAC,cAAc,EAAE,EAAE,SAAS,EAAE,IAAI,EAAE,CAAC;wDAO1C;IA6BD;QADC,GAAG,CAAC,CAAC,oBAAoB,EAAE,kBAAkB,CAAC,CAAC;qDAI/C;IA5FkB,WAAW;QAH/B,SAAS,CAAC;YACT,MAAM,EAAE,CAAC,eAAe,CAAC,aAAa,CAAC,CAAC;SACzC,CAAC;OACmB,WAAW,CA6F/B;IAAD,kBAAC;CAAA,CA7FwC,GAAG;;;;\"}")}}]);