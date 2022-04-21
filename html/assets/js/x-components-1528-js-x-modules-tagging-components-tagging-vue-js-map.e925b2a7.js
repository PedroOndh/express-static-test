(window.webpackJsonp=window.webpackJsonp||[]).push([[723],{1493:function(n,e){throw new Error('Module parse failed: Unexpected token (1:10)\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\n> {"version":3,"file":"tagging.vue.js","sources":["../../../../../src/x-modules/tagging/components/tagging.vue"],"sourcesContent":["<script lang=\\"ts\\">\\n  import Vue from \'vue\';\\n  import { Component, Inject, Prop } from \'vue-property-decorator\';\\n  import { XEmit } from \'../../../components/decorators/bus.decorators\';\\n  import { xComponentMixin } from \'../../../components/x-component.mixin\';\\n  import { SnippetConfig } from \'../../../x-installer/api/api.types\';\\n  import { taggingXModule } from \'../x-module\';\\n\\n  /**\\n   * This component enables and manages the sending of information to the\\n   * {@link https://empathy.co/docs/tagging-api/ | Empathy Tagging API}. It allows to enable or\\n   * disable the session id management through the `consent` prop.\\n   *\\n   * @public\\n   */\\n  @Component({\\n    mixins: [xComponentMixin(taggingXModule)]\\n  })\\n  export default class Tagging extends Vue {\\n    /**\\n     * It injects {@link SnippetConfig} provided by an ancestor as snippetConfig.\\n     *\\n     * @internal\\n     */\\n    @Inject(\'snippetConfig\')\\n    protected snippetConfig?: SnippetConfig;\\n\\n    /**\\n     * The session TTL in milliseconds.\\n     *\\n     * @internal\\n     */\\n    @Prop()\\n    @XEmit(\'SessionDurationProvided\')\\n    public sessionTTLMs: number | undefined;\\n\\n    /**\\n     * The debounce time in milliseconds to track the query.\\n     *\\n     * @internal\\n     */\\n    @Prop()\\n    @XEmit(\'QueryTaggingDebounceProvided\')\\n    public queryTaggingDebounceMs: number | undefined;\\n\\n    /**\\n     * The consent to be emitted.\\n     *\\n     * @public\\n     */\\n    @Prop()\\n    protected consent?: boolean;\\n\\n    /**\\n     * The active consent, selected from the `consent` prop and the `snippetConfig.consent`\\n     * property. False by default.\\n     *\\n     * @remarks If the consent is undefined in the prop and in the snippetConfig, it will return\\n     * false.\\n     *\\n     * @returns A boolean that represents if the consent is accepted or not.\\n     */\\n    @XEmit(\'ConsentProvided\')\\n    public get activeConsent(): boolean {\\n      return this.consent ?? this.snippetConfig?.consent ?? false;\\n    }\\n\\n    // eslint-disable-next-line @typescript-eslint/no-empty-function\\n    render(): void {}\\n  }\\n<\/script>\\n\\n<docs lang=\\"mdx\\">\\n## Events\\n\\nThis component emits the following events:\\n\\n- [`ConsentProvided`](./../../api/x-components.taggingxevents.consentprovided.md)\\n- [`SessionDurationProvided`](./../../api/x-components.taggingxevents.sessiondurationprovided.md)\\n- `QueryTaggingDebounceProvided`[1]\\n  [1](./../../api/x-components.taggingxevents.querytaggingdebounceprovided.md)\\n\\n## See it in action\\n\\nThis component manages the tagging of the API to track the different features. This component\\ndoesn\'t render elements to the DOM.\\n\\n```vue\\n<template>\\n  <Tagging />\\n</template>\\n\\n<script>\\n  import { Tagging } from \'@empathyco/x-components/tagging\';\\n\\n  export default {\\n    name: \'TaggingDemo\',\\n    components: {\\n      Tagging\\n    }\\n  };\\n<\/script>\\n```\\n\\n### Play with props\\n\\nIn this example, the `Tagging` component will emit `ConsentProvided` with payload false by default\\nif the consent is not provided, the `SessionDurationProvided` and `QueryTaggingDebounceProvided`\\nevents will be emitted only if the props are defined.\\n\\n```vue\\n<template>\\n  <Tagging :consent=\\"true\\" :queryTaggingDebounceMs=\\"300\\" :sessionDurationMs=\\"30000\\" />\\n</template>\\n\\n<script>\\n  import { Tagging } from \'@empathyco/x-components/tagging\';\\n\\n  export default {\\n    name: \'TaggingDemo\',\\n    components: {\\n      Tagging\\n    }\\n  };\\n<\/script>\\n```\\n\\n### Play with events\\n\\nThe `Tagging` will emit the `ConsentProvided` when the component is loaded and the consent is set by\\nthe prop or getting the value from the snippet config.\\n\\nThe `Tagging` will emit the `SessionDurationProvided` when the component is loaded with a session\\nduration using the prop.\\n\\nThe `Tagging` will emit the `QueryTaggingDebounceProvided` when the component is loaded with query\\ndebounce using the prop.\\n</docs>\\n"],"names":["const"],"mappings":";;;;AAEAA;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;"}')}}]);