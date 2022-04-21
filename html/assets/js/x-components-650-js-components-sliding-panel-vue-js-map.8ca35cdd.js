(window.webpackJsonp=window.webpackJsonp||[]).push([[924],{1201:function(n,e){throw new Error('Module parse failed: Unexpected token (1:10)\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\n> {"version":3,"file":"sliding-panel.vue.js","sources":["../../../src/components/sliding-panel.vue"],"sourcesContent":["<template>\\n  <div v-if=\\"$slots.default\\" class=\\"x-sliding-panel\\" :class=\\"cssClasses\\" data-test=\\"sliding-panel\\">\\n    <button\\n      v-if=\\"showButtons\\"\\n      @click=\\"scrollLeft\\"\\n      class=\\"x-sliding-panel__button x-sliding-panel__button-left x-button\\"\\n      :class=\\"buttonClass\\"\\n      data-test=\\"sliding-panel-left-button\\"\\n    >\\n      \x3c!-- @slot Left button content --\x3e\\n      <slot name=\\"sliding-panel-left-button\\">ᐸ</slot>\\n    </button>\\n    <div\\n      ref=\\"scrollContainer\\"\\n      @scroll=\\"debouncedUpdateScrollPosition\\"\\n      @transitionend=\\"debouncedUpdateScrollPosition\\"\\n      @animationend=\\"debouncedUpdateScrollPosition\\"\\n      class=\\"x-list x-list--horizontal x-sliding-panel__scroll\\"\\n      data-test=\\"sliding-panel-scroll\\"\\n    >\\n      \x3c!-- @slot (Required) Sliding panel content --\x3e\\n      <slot />\\n    </div>\\n    <button\\n      v-if=\\"showButtons\\"\\n      @click=\\"scrollRight\\"\\n      class=\\"x-sliding-panel__button x-sliding-panel__button-right x-button\\"\\n      :class=\\"buttonClass\\"\\n      data-test=\\"sliding-panel-right-button\\"\\n    >\\n      \x3c!-- @slot Right button content --\x3e\\n      <slot name=\\"sliding-panel-right-button\\">ᐳ</slot>\\n    </button>\\n  </div>\\n</template>\\n\\n<script lang=\\"ts\\">\\n  import Vue from \'vue\';\\n  import { Component, Prop } from \'vue-property-decorator\';\\n  import { VueCSSClasses } from \'../utils/types\';\\n  import { Debounce } from \'./decorators/debounce.decorators\';\\n\\n  /**\\n   * This component allows for any other component or element inside it to be horizontally\\n   * navigable. It also implements customizable buttons as well as other minor customizations to its\\n   * general behavior.\\n   *\\n   * @public\\n   */\\n  @Component\\n  export default class SlidingPanel extends Vue {\\n    /**\\n     * Scroll factor that will dictate how much the scroll moves when pressing a navigation button.\\n     *\\n     * @public\\n     */\\n    @Prop({ default: 0.7 })\\n    public scrollFactor!: number;\\n\\n    /**\\n     * Would make the navigation buttons visible when they\'re needed or always hide them.\\n     *\\n     * @public\\n     */\\n    @Prop({ default: true })\\n    public showButtons!: boolean;\\n\\n    /**\\n     * When true, whenever the DOM content in the sliding panel slot changes, it will reset\\n     * the scroll position to 0.\\n     *\\n     * @public\\n     */\\n    @Prop({ default: true })\\n    public resetOnContentChange!: boolean;\\n\\n    /**\\n     * CSS classes to add to the buttons.\\n     *\\n     * @public\\n     */\\n    @Prop()\\n    public buttonClass?: string;\\n\\n    /**\\n     * Indicates if the scroll is at the start of the sliding panel.\\n     *\\n     * @internal\\n     */\\n    protected isScrollAtStart = true;\\n\\n    /**\\n     * Indicates if the scroll is at the end of the sliding panel.\\n     *\\n     * @internal\\n     */\\n    protected isScrollAtEnd = true;\\n\\n    /**\\n     * HTMLElement referencing the scroll of the component.\\n     *\\n     * @internal\\n     */\\n    public $refs!: {\\n      scrollContainer: HTMLElement;\\n    };\\n\\n    /**\\n     * CSS classes to apply based on the scroll position.\\n     *\\n     * @returns The CSS classes to apply.\\n     *\\n     * @internal\\n     */\\n    protected get cssClasses(): VueCSSClasses {\\n      return {\\n        \'x-sliding-panel--at-start\': this.isScrollAtStart,\\n        \'x-sliding-panel--at-end\': this.isScrollAtEnd\\n      };\\n    }\\n\\n    /**\\n     * Initialises browser platform code:\\n     * - Creates a mutation observer to detect content changes and reset scroll position.\\n     * - Stores initial size and scroll position values.\\n     *\\n     * @internal\\n     */\\n    mounted(): void {\\n      // eslint-disable-next-line @typescript-eslint/unbound-method\\n      const resizeObserver = new ResizeObserver(this.debouncedUpdateScrollPosition);\\n      resizeObserver.observe(this.$el);\\n      // eslint-disable-next-line @typescript-eslint/unbound-method\\n      const contentChangedObserver = new MutationObserver(this.restoreAndUpdateScroll);\\n      this.$watch(\\n        () => this.resetOnContentChange,\\n        shouldReset => {\\n          if (shouldReset) {\\n            contentChangedObserver.observe(this.$refs.scrollContainer, {\\n              attributes: false,\\n              childList: true,\\n              subtree: true,\\n              characterData: false\\n            });\\n          } else {\\n            contentChangedObserver.disconnect();\\n          }\\n        },\\n        { immediate: true }\\n      );\\n      this.$on(\'hook:beforeDestroy\', () => {\\n        contentChangedObserver.disconnect();\\n        resizeObserver.disconnect();\\n      });\\n\\n      this.updateScrollPosition();\\n    }\\n\\n    /**\\n     * Resets the scroll and updates the values of the scroll for the buttons to react.\\n     *\\n     * @internal\\n     */\\n    @Debounce(100, { leading: true })\\n    restoreAndUpdateScroll(): void {\\n      this.$refs.scrollContainer.scroll({ left: 0, behavior: \'smooth\' });\\n      this.updateScrollPosition();\\n    }\\n\\n    /**\\n     * Updates the values of the scroll positions to show or hide the buttons depending on it.\\n     *\\n     * @internal\\n     */\\n    protected updateScrollPosition(): void {\\n      const { scrollLeft, clientWidth, scrollWidth } = this.$refs.scrollContainer;\\n      this.isScrollAtStart = !scrollLeft;\\n      /* The 2 px extra is to fix some cases in some resolutions where the scroll + client size is\\n       *  less than the scroll width even when the scroll is at the end */\\n      this.isScrollAtEnd = scrollLeft + clientWidth + 2 >= scrollWidth;\\n    }\\n\\n    /**\\n     * Debounced version of the {@link SlidingPanel.updateScrollPosition | updateScrollPosition}\\n     * method.\\n     *\\n     * @internal\\n     */\\n    @Debounce(100, { leading: true })\\n    debouncedUpdateScrollPosition(): void {\\n      this.updateScrollPosition();\\n    }\\n\\n    /**\\n     * Scrolls the wrapper element to the left.\\n     *\\n     * @internal\\n     */\\n    protected scrollLeft(): void {\\n      this.scrollTo(-this.$refs.scrollContainer.clientWidth);\\n    }\\n\\n    /**\\n     * Scrolls the wrapper element to the right.\\n     *\\n     * @internal\\n     */\\n    protected scrollRight(): void {\\n      this.scrollTo(this.$refs.scrollContainer.clientWidth);\\n    }\\n\\n    /**\\n     * Scrolls the wrapper element towards the provided scroll value.\\n     *\\n     * @param scrollValue - The value the scroll will go towards.\\n     *\\n     * @internal\\n     */\\n    protected scrollTo(scrollValue: number): void {\\n      this.$refs.scrollContainer.scrollBy({\\n        left: scrollValue * this.scrollFactor,\\n        behavior: \'smooth\'\\n      });\\n    }\\n  }\\n<\/script>\\n\\n<style lang=\\"scss\\" scoped>\\n  .x-sliding-panel {\\n    align-items: center;\\n    display: flex;\\n    flex-flow: row nowrap;\\n    height: 100%;\\n    position: relative;\\n\\n    &__button {\\n      opacity: 0;\\n      pointer-events: none;\\n      position: absolute;\\n      transition: all ease-out 0.2s;\\n      z-index: 2; /* To overlay the design system gradient with z-index:1 */\\n\\n      &-left {\\n        left: 0;\\n      }\\n\\n      &-right {\\n        right: 0;\\n      }\\n    }\\n\\n    &__scroll {\\n      display: flex;\\n      flex: 100%;\\n      flex-flow: row nowrap;\\n      overflow: auto;\\n      scrollbar-width: none; // Firefox\\n      -ms-overflow-style: none; // IE\\n\\n      // Chrome, Edge & Safari\\n      &::-webkit-scrollbar {\\n        display: none;\\n      }\\n    }\\n\\n    &:not(.x-sliding-panel--show-buttons-on-hover):not(.x-sliding-panel--at-start) {\\n      .x-sliding-panel__button-left {\\n        opacity: 1;\\n        pointer-events: all;\\n      }\\n    }\\n\\n    &:not(.x-sliding-panel--show-buttons-on-hover):not(.x-sliding-panel--at-end) {\\n      .x-sliding-panel__button-right {\\n        opacity: 1;\\n        pointer-events: all;\\n      }\\n    }\\n  }\\n</style>\\n\\n<docs lang=\\"mdx\\">\\n## Events\\n\\nThis component emits no events.\\n\\n## See it in action\\n\\nSimplest implementation of the component, just a list-based component inside its slot.\\n\\n```vue\\n<template>\\n  <SlidingPanel>\\n    <div class=\\"item\\">Item 1</div>\\n    <div class=\\"item\\">Item 2</div>\\n    <div class=\\"item\\">Item 3</div>\\n    <div class=\\"item\\">Item 4</div>\\n  </SlidingPanel>\\n</template>\\n\\n<script>\\n  import { SlidingPanel } from \'@empathyco/x-components\';\\n\\n  export default {\\n    name: \'SlidingPanelDemo\',\\n    components: {\\n      SlidingPanel\\n    }\\n  };\\n<\/script>\\n\\n<style>\\n  .x-sliding-panel {\\n    width: 200px;\\n  }\\n\\n  .item {\\n    display: inline-block;\\n    width: 100px;\\n  }\\n</style>\\n```\\n\\n### Play with props\\n\\n#### Modifying scroll buttons travel distance\\n\\nEdit how much the scroll travels when navigating with the buttons by changing the `scrollFactor`\\nprop.\\n\\n```vue\\n<template>\\n  <SlidingPanel :scrollFactor=\\"1.5\\">\\n    <div class=\\"item\\">Item 1</div>\\n    <div class=\\"item\\">Item 2</div>\\n    <div class=\\"item\\">Item 3</div>\\n    <div class=\\"item\\">Item 4</div>\\n  </SlidingPanel>\\n</template>\\n\\n<script>\\n  import { SlidingPanel } from \'@empathyco/x-components\';\\n\\n  export default {\\n    name: \'SlidingPanelDemo\',\\n    components: {\\n      SlidingPanel\\n    }\\n  };\\n<\/script>\\n\\n<style>\\n  .x-sliding-panel {\\n    width: 200px;\\n  }\\n\\n  .item {\\n    display: inline-block;\\n    width: 100px;\\n  }\\n</style>\\n```\\n\\n#### Hiding scroll buttons\\n\\nHide the navigational buttons completely by setting the `showButtons` prop to `false`. This is\\nintended to be used when other scrolling options are available, like in mobile, where you can scroll\\njust by swiping.\\n\\n```vue\\n<template>\\n  <SlidingPanel :showButtons=\\"false\\">\\n    <div class=\\"item\\">Item 1</div>\\n    <div class=\\"item\\">Item 2</div>\\n    <div class=\\"item\\">Item 3</div>\\n    <div class=\\"item\\">Item 4</div>\\n  </SlidingPanel>\\n</template>\\n\\n<script>\\n  import { SlidingPanel } from \'@empathyco/x-components\';\\n\\n  export default {\\n    name: \'SlidingPanelDemo\',\\n    components: {\\n      SlidingPanel\\n    }\\n  };\\n<\/script>\\n\\n<style>\\n  .x-sliding-panel {\\n    width: 200px;\\n  }\\n\\n  .item {\\n    display: inline-block;\\n    width: 100px;\\n  }\\n</style>\\n```\\n\\n#### Disabling reset the scroll when content changes\\n\\nBy default, whenever the content of the sliding panel changes, it auto resets its scroll position.\\nYou can disable this behavior setting the `resetOnContentChange` prop to `false`.\\n\\n```vue\\n<template>\\n  <div>\\n    <button @click=\\"items++\\">Add item</button>\\n    <label>\\n      <input type=\\"checkbox\\" v-model=\\"resetOnContentChange\\" />\\n      Reset content onchange\\n    </label>\\n    <SlidingPanel :resetOnContentChange=\\"resetOnContentChange\\">\\n      <div class=\\"item\\" v-for=\\"item in items\\" :key=\\"item\\">Item {{ item }}</div>\\n    </SlidingPanel>\\n  </div>\\n</template>\\n\\n<script>\\n  import { SlidingPanel } from \'@empathyco/x-components\';\\n\\n  export default {\\n    name: \'SlidingPanelDemo\',\\n    components: {\\n      SlidingPanel\\n    },\\n    data() {\\n      return {\\n        items: 4,\\n        resetOnContentChange: false\\n      };\\n    }\\n  };\\n<\/script>\\n\\n<style>\\n  .x-sliding-panel {\\n    width: 200px;\\n  }\\n\\n  .item {\\n    display: inline-block;\\n    width: 100px;\\n  }\\n</style>\\n```\\n\\n## Extending the component\\n\\n### Overriding Button content\\n\\nBy default the buttons show an arrow depicting the direction the scroll would go to when clicked,\\nbut this content can be customized with anything, from characters to SVG and images.\\n\\n```vue\\n<template>\\n  <SlidingPanel>\\n    <template #sliding-panel-left-button>Left</template>\\n    <template #default>\\n      <div class=\\"item\\">Item 1</div>\\n      <div class=\\"item\\">Item 2</div>\\n      <div class=\\"item\\">Item 3</div>\\n      <div class=\\"item\\">Item 4</div>\\n    </template>\\n    <template #sliding-panel-right-button>Right</template>\\n  </SlidingPanel>\\n</template>\\n\\n<script>\\n  import { SlidingPanel } from \'@empathyco/x-components\';\\n\\n  export default {\\n    name: \'SlidingPanelDemo\',\\n    components: {\\n      SlidingPanel\\n    }\\n  };\\n<\/script>\\n\\n<style>\\n  .x-sliding-panel {\\n    width: 200px;\\n  }\\n\\n  .item {\\n    display: inline-block;\\n    width: 100px;\\n  }\\n</style>\\n```\\n</docs>\\n"],"names":["const"],"mappings":";;;;;AAEAA;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;"}')}}]);