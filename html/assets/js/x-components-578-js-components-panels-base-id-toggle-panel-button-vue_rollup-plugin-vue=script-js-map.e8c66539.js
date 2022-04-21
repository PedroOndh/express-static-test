(window.webpackJsonp=window.webpackJsonp||[]).push([[897],{1177:function(e,n){throw new Error('Module parse failed: Unexpected token (1:10)\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\n> {"version":3,"file":"base-id-toggle-panel-button.vue_rollup-plugin-vue=script.js","sources":["../../../../src/components/panels/base-id-toggle-panel-button.vue?rollup-plugin-vue=script.ts"],"sourcesContent":["\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\nimport Vue from \'vue\';\\nimport { Component, Prop } from \'vue-property-decorator\';\\nimport { XEventsTypes } from \'../../wiring/events.types\';\\nimport { WireMetadata } from \'../../wiring/wiring.types\';\\nimport BaseEventButton from \'../base-event-button.vue\';\\nimport { XOn } from \'../decorators/bus.decorators\';\\n\\n/**\\n * Component containing an event button that emits\\n * {@link XEventsTypes.UserClickedPanelToggleButton} when clicked with\\n * the panelId as payload.\\n *\\n * It has a default slot to customize its contents.\\n *\\n * @public\\n */\\n@Component({\\n  components: { BaseEventButton }\\n})\\nexport default class BaseIdTogglePanelButton extends Vue {\\n  /**\\n   * The panel state to pass through the slot.\\n   */\\n  protected isPanelOpen = false;\\n\\n  /** The panelId to use for the toggle event listeners. */\\n  @Prop({ required: true })\\n  protected panelId!: string;\\n\\n  /**\\n   * List of events to emit by the BaseEventButton.\\n   *\\n   * @returns An object with the event and payload.\\n   *\\n   * @internal\\n   */\\n  protected get events(): Partial<XEventsTypes> {\\n    return { UserClickedPanelToggleButton: this.panelId };\\n  }\\n\\n  /**\\n   * The subscription to the {@link XEventsTypes.TogglePanelStateChanged} event\\n   * to update the `isPanelOpen` property.\\n   *\\n   * @param newState - The new isOpen state of the panel.\\n   * @param id - The `panelId`.\\n   */\\n  @XOn(\'TogglePanelStateChanged\')\\n  updatePanelState(newState: boolean, { id }: WireMetadata): void {\\n    if (this.panelId === id) {\\n      this.isPanelOpen = newState;\\n    }\\n  }\\n}\\n"],"names":[],"mappings":";;;;;;AAoBA;;;;;;;;;AAYA;IAAqD,2CAAG;IAAxD;QAAA,qEAkCC;;;;QA9BW,iBAAW,GAAG,KAAK,CAAC;;KA8B/B;IAjBC,sBAAc,2CAAM;;;;;;;;aAApB;YACE,OAAO,EAAE,4BAA4B,EAAE,IAAI,CAAC,OAAO,EAAE,CAAC;SACvD;;;OAAA;;;;;;;;IAUD,kDAAgB,GAAhB,UAAiB,QAAiB,EAAE,EAAoB;YAAlB,EAAE,QAAA;QACtC,IAAI,IAAI,CAAC,OAAO,KAAK,EAAE,EAAE;YACvB,IAAI,CAAC,WAAW,GAAG,QAAQ,CAAC;SAC7B;KACF;IAzBD;QADC,IAAI,CAAC,EAAE,QAAQ,EAAE,IAAI,EAAE,CAAC;4DACE;IAqB3B;QADC,GAAG,CAAC,yBAAyB,CAAC;mEAK9B;IAjCkB,uBAAuB;QAH3C,SAAS,CAAC;YACT,UAAU,EAAE,EAAE,eAAe,iBAAA,EAAE;SAChC,CAAC;OACmB,uBAAuB,CAkC3C;IAAD,8BAAC;CAAA,CAlCoD,GAAG;;;;"}')}}]);