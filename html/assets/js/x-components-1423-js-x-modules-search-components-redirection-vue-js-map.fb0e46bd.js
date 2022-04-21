(window.webpackJsonp=window.webpackJsonp||[]).push([[684],{1458:function(e,n){throw new Error("Module parse failed: Unexpected token (1:10)\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\n> {\"version\":3,\"file\":\"redirection.vue.js\",\"sources\":[\"../../../../../src/x-modules/search/components/redirection.vue\"],\"sourcesContent\":[\"<template>\\n  <div\\n    v-if=\\\"redirection && $scopedSlots.default\\\"\\n    class=\\\"x-redirection x-message\\\"\\n    data-test=\\\"redirection\\\"\\n  >\\n    <slot v-bind=\\\"{ redirection, redirect, abortRedirect, isRedirecting, delayInSeconds }\\\" />\\n  </div>\\n</template>\\n\\n<script lang=\\\"ts\\\">\\n  import { Redirection as RedirectionModel } from '@empathyco/x-types';\\n  import Vue from 'vue';\\n  import { Component, Prop, Watch } from 'vue-property-decorator';\\n  import { XOn } from '../../../components/decorators/bus.decorators';\\n  import { State } from '../../../components/decorators/store.decorators';\\n  import { xComponentMixin } from '../../../components/x-component.mixin';\\n  import { searchXModule } from '../x-module';\\n\\n  /**\\n   * A redirection is a component that sends the user to a link in the website. It is helpful when\\n   * there are queries like `help`, `shipping costs`, `my account`, where a link to a section in the\\n   * website will be more helpful than the set of results returned.\\n   *\\n   * @public\\n   */\\n  @Component({\\n    mixins: [xComponentMixin(searchXModule)]\\n  })\\n  export default class Redirection extends Vue {\\n    @State('search', 'redirections')\\n    public redirections!: RedirectionModel[];\\n\\n    /**\\n     * The redirection mode. Auto for auto redirection and manual for an user interaction.\\n     *\\n     * @public\\n     */\\n    @Prop({ default: 'auto' })\\n    public mode!: 'auto' | 'manual';\\n\\n    /**\\n     * The waiting time in seconds until the redirection is made.\\n     *\\n     * @remarks this delay only works in auto mode.\\n     *\\n     * @public\\n     */\\n    @Prop({ default: 0 })\\n    public delayInSeconds!: number;\\n\\n    /**\\n     * The timeout id, used to cancel the redirection.\\n     *\\n     * @internal\\n     */\\n    protected timeoutId?: number;\\n\\n    /**\\n     * Boolean flag which indicates if the redirection is running.\\n     *\\n     * @public\\n     */\\n    protected isRedirecting = true;\\n\\n    /**\\n     * Computed property which returns the first recommendation of the state, if any returns null.\\n     *\\n     * @returns The first redirection of the state.\\n     *\\n     * @internal\\n     */\\n    protected get redirection(): RedirectionModel | null {\\n      return this.redirections?.[0] ?? null;\\n    }\\n\\n    /**\\n     * Watcher function which adds a setTimeout to the redirect method is the component\\n     * is in auto mode and there are redirections.\\n     *\\n     * @internal\\n     */\\n    @Watch('redirections', { immediate: true })\\n    protected redirectWithDelay(): void {\\n      this.isRedirecting = true;\\n      if (this.mode === 'auto' && this.redirection) {\\n        // eslint-disable-next-line @typescript-eslint/unbound-method\\n        this.timeoutId = setTimeout(this.redirect, this.delayInSeconds * 1000);\\n      }\\n    }\\n\\n    /**\\n     * Dispatches the redirection, updating the url.\\n     *\\n     * @public\\n     */\\n    protected redirect(): void {\\n      clearTimeout(this.timeoutId);\\n      this.$x.emit('UserClickedARedirection', this.redirection!);\\n      window.location.replace(this.redirection!.url);\\n    }\\n\\n    /**\\n     * Stops the redirection, emitting `UserClickedAbortARedirection` event.\\n     *\\n     * @public\\n     */\\n    protected abortRedirect(): void {\\n      this.cancelRedirect();\\n      this.$x.emit('UserClickedAbortARedirection');\\n    }\\n\\n    /**\\n     * Stops the animation if the user search another query.\\n     *\\n     * @internal\\n     */\\n    @XOn(['UserAcceptedAQuery', 'UserClearedQuery'])\\n    cancelRedirect(): void {\\n      clearTimeout(this.timeoutId);\\n      this.isRedirecting = false;\\n    }\\n  }\\n<\/script>\\n\\n<style lang=\\\"scss\\\"></style>\\n\\n<docs lang=\\\"mdx\\\">\\n## Play with the component\\n\\nIn this example, a query has been searched in the search input resulting in a case where the\\nresponse has a redirection.\\n\\nA text box appears bellow the search box indicating that you're going to be redirected to another\\nweb page.\\n\\nThis component has two modes:\\n\\n- Auto mode means that the redirection will occur after a certain number of seconds passed as a\\n  property.\\n- If the value is 0 the redirection will be instantly.\\n- Manual mode means that the user have to click the redirect button or nothing will happen.\\n\\n_Type any term in the input field to try it out!_\\n\\n```vue\\n<template>\\n  <Redirection #default=\\\"{ redirection, redirect, abortRedirect }\\\">\\n    <span>In a few seconds you're going to be redirected!</span>\\n    <span>{{ redirection.url }}</span>\\n    <button @click=\\\"redirection\\\">Redirect now!</button>\\n    <button @click=\\\"abortRedirect\\\">Abort redirection!</button>\\n  </Redirection>\\n</template>\\n\\n<script>\\n  import { Redirection } from '@empathyco/x-components/search';\\n  export default {\\n    name: 'RedirectionDemo',\\n    components: {\\n      Redirection\\n    }\\n  };\\n<\/script>\\n```\\n\\n## Extending the component\\n\\nComponents behaviour can be changed, in this example the mode of the component will be manual\\nforcing the user to accept the redirection\\n\\n```vue\\n<template>\\n  <Redirection #default=\\\"{ redirection, redirect }\\\">\\n    <span>{{ redirection.url }}</span>\\n    <button @click=\\\"redirect\\\">Redirect now!</button>\\n  </Redirection>\\n</template>\\n\\n<script>\\n  import { Redirection } from '@empathyco/x-components/search';\\n  export default {\\n    name: 'RedirectionDemo',\\n    components: {\\n      Redirection\\n    },\\n    data() {\\n      return {\\n        mode: 'manual'\\n      };\\n    }\\n  };\\n<\/script>\\n```\\n\\n## Events\\n\\nThis component emits the following events:\\n\\n- `UserClickedARedirection` after the user clicks the redirection button.\\n- `UserClickedAbortARedirection` after the user clicks the abort redirection button.\\n</docs>\\n\"],\"names\":[\"const\"],\"mappings\":\";;;;AAEAA;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;\"}")}}]);