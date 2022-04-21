(window.webpackJsonp=window.webpackJsonp||[]).push([[662],{1438:function(n,t){throw new Error('Module parse failed: Unexpected token (1:10)\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\n> {"version":3,"file":"scroll.vue.js","sources":["../../../../../src/x-modules/scroll/components/scroll.vue"],"sourcesContent":["<template>\\n  <BaseScroll\\n    @scroll=\\"emitScroll\\"\\n    @scroll:direction-change=\\"emitScrollDirectionChange\\"\\n    @scroll:at-start=\\"emitScrollAtStart\\"\\n    @scroll:almost-at-end=\\"emitScrollAlmostAtEnd\\"\\n    @scroll:at-end=\\"emitScrollAtEnd\\"\\n    v-on=\\"$listeners\\"\\n    :id=\\"id\\"\\n    v-bind=\\"$attrs\\"\\n  >\\n    <slot />\\n  </BaseScroll>\\n</template>\\n\\n<script lang=\\"ts\\">\\n  import Vue from \'vue\';\\n  import { Component, Prop } from \'vue-property-decorator\';\\n  import { xComponentMixin } from \'../../../components/x-component.mixin\';\\n  import { WireMetadata } from \'../../../wiring/wiring.types\';\\n  import { XOn } from \'../../../components/decorators/bus.decorators\';\\n  import BaseScroll from \'../../../components/scroll/base-scroll.vue\';\\n  import { ScrollDirection } from \'../../../components/scroll/scroll.types\';\\n  import { scrollXModule } from \'../x-module\';\\n  import { MainScrollId } from \'./scroll.const\';\\n\\n  /**\\n   * Scrollable container that emits scroll related X Events. It exposes all the listeners\\n   * and props from the {@link BaseScroll} component.\\n   *\\n   * @public\\n   */\\n  @Component({\\n    mixins: [xComponentMixin(scrollXModule)],\\n    components: { BaseScroll }\\n  })\\n  export default class Scroll extends Vue {\\n    /**\\n     * Id to identify the component.\\n     *\\n     * @public\\n     */\\n    @Prop({ default: MainScrollId })\\n    public id!: string;\\n\\n    /**\\n     * Emits the `UserScrolled` event.\\n     *\\n     * @param position - The new position of scroll.\\n     * @internal\\n     */\\n    protected emitScroll(position: number): void {\\n      this.$x.emit(\'UserScrolled\', position, this.createEventMetadata());\\n    }\\n\\n    /**\\n     * Emits the `UserChangedScrollDirection` event when the scrolling direction has changed.\\n     *\\n     * @param direction - The new direction of scroll.\\n     * @internal\\n     */\\n    protected emitScrollDirectionChange(direction: ScrollDirection): void {\\n      this.$x.emit(\'UserChangedScrollDirection\', direction, this.createEventMetadata());\\n    }\\n\\n    /**\\n     * Emits the \'UserReachedScrollStart\' event when the user reaches the start.\\n     *\\n     * @param isAtStart - A boolean indicating if the scroll is at the ending position.\\n     * @internal\\n     */\\n    protected emitScrollAtStart(isAtStart: boolean): void {\\n      this.$x.emit(\'UserReachedScrollStart\', isAtStart, this.createEventMetadata());\\n    }\\n\\n    /**\\n     * Emits the \'UserAlmostReachedScrollEnd\' event when the user is about to reach to end.\\n     *\\n     * @param isAlmostAtEnd - A boolean indicating if the scroll is almost at its ending position.\\n     * @internal\\n     */\\n    protected emitScrollAlmostAtEnd(isAlmostAtEnd: boolean): void {\\n      this.$x.emit(\'UserAlmostReachedScrollEnd\', isAlmostAtEnd, this.createEventMetadata());\\n    }\\n\\n    /**\\n     * Emits the \'UserReachedScrollEnd\' event when the user is about to reach to end.\\n     *\\n     * @param isAtEnd - A boolean indicating if the scroll is at the ending position.\\n     * @internal\\n     */\\n    protected emitScrollAtEnd(isAtEnd: boolean): void {\\n      this.$x.emit(\'UserReachedScrollEnd\', isAtEnd, this.createEventMetadata());\\n    }\\n\\n    /**\\n     * Creates a {@link WireMetadata} metadata object for all the emitted events.\\n     *\\n     * @internal\\n     * @returns A new {@link WireMetadata} object.\\n     */\\n    protected createEventMetadata(): Partial<WireMetadata> {\\n      return { target: this.$el as HTMLElement, id: this.id };\\n    }\\n\\n    /**\\n     * Scrolls to initial position when the user has clicked the scroll to top button.\\n     *\\n     * @param scrollId - {@link XEventsTypes.UserClickedScrollToTop}.\\n     * @internal\\n     */\\n    @XOn(\'UserClickedScrollToTop\')\\n    scrollToTop(scrollId: string): void {\\n      if (scrollId === this.id && this.$el) {\\n        this.$el?.scrollTo({ top: 0, behavior: \'smooth\' });\\n      }\\n    }\\n  }\\n<\/script>\\n\\n<docs lang=\\"mdx\\">\\n## Example\\n\\nThe Scroll is a component that wraps the BaseScroll and provides it for a unique id.\\n\\n### Customized usage\\n\\n#### Overriding the properties\\n\\nIt renders an element with scroll, with the content passed in the `default slot`.\\n\\n```vue\\n<template>\\n  <Scroll id=\\"exampleScrollId\\" throttleMs=\\"50\\" distanceToBottom=\\"300\\">\\n    <div class=\\"content-scroll\\">\\n      <span>content1</span>\\n      <span>content1</span>\\n    </div>\\n  </Scroll>\\n</template>\\n\\n<script>\\n  import { Scroll } from \'@empathyco/x-components/scroll\';\\n\\n  export default {\\n    name: \'ScrollIdTest\',\\n    components: {\\n      Scroll\\n    }\\n  };\\n<\/script>\\n```\\n\\n#### Using scroll events.\\n\\n```vue\\n<template>\\n  <Scroll\\n    @scroll=\\"scroll\\"\\n    @scroll:direction-change=\\"scrollDirectionChange\\"\\n    @scroll:at-start=\\"scrollAtStart\\"\\n    @scroll:almost-at-end=\\"scrollAlmostAtEnd\\"\\n    @scroll:at-end=\\"scrollAtEnd\\"\\n    id=\\"exampleScrollId\\"\\n    throttleMs=\\"50\\"\\n    distanceToBottom=\\"300\\"\\n  >\\n    <div class=\\"content-scroll\\">\\n      <span>content1</span>\\n      <span>content1</span>\\n    </div>\\n  </Scroll>\\n</template>\\n\\n<script>\\n  import { Scroll } from \'@empathyco/x-components/scroll\';\\n\\n  export default {\\n    name: \'ScrollIdTest\',\\n    components: {\\n      Scroll\\n    },\\n    methods: {\\n      scroll(position) {\\n        console.log(\'scroll\', position);\\n      },\\n      scrollDirectionChange(direction) {\\n        console.log(\'scroll:direction-change\', direction);\\n      },\\n      scrollAtStart(isAtStart) {\\n        console.log(\'scroll:at-start\', isAtStart);\\n      },\\n      scrollAlmostAtEnd(isAlmostAtEnd) {\\n        console.log(\'scroll:almost-at-end\', isAlmostAtEnd);\\n      },\\n      scrollAtEnd(isAtEnd) {\\n        console.log(\'scroll:at-end\', isAtEnd);\\n      }\\n    }\\n  };\\n<\/script>\\n```\\n\\n#### Using XEvents.\\n\\nYou can use the XEvents subscribing to them.\\n\\n```vue\\n<template>\\n  <Scroll throttleMs=\\"50\\" distanceToBottom=\\"300\\">\\n    <div class=\\"content-scroll\\">\\n      <span>content1</span>\\n      <span>content1</span>\\n    </div>\\n  </Scroll>\\n</template>\\n\\n<script>\\n  import { Scroll } from \'@empathyco/x-components/scroll\';\\n\\n  export default {\\n    name: \'ScrollIdTest\',\\n    components: {\\n      Scroll\\n    },\\n    mounted() {\\n      this.$x.on(\'UserScrolled\').subscribe(distance => {\\n        console.log(distance);\\n      });\\n      this.$x.on(\'UserChangedScrollDirection\').subscribe(direction => {\\n        console.log(direction);\\n      });\\n      this.$x.on(\'UserReachedScrollStart\').subscribe(isAtStart => {\\n        console.log(isAtStart);\\n      });\\n      this.$x.on(\'UserAlmostReachedScrollEnd\').subscribe(isAlmostAtEnd => {\\n        console.log(isAlmostAtEnd);\\n      });\\n      this.$x.on(\'UserReachedScrollEnd\').subscribe(isAtEnd => {\\n        console.log(isAtEnd);\\n      });\\n    }\\n  };\\n<\/script>\\n```\\n\\n## Events\\n\\nA list of events that the component will emit:\\n\\n- `UserScrolled`: emitted after the user scrolls in this container. The payload is the scroll top\\n  distance in pixels.\\n- `UserChangedScrollDirection`: emitted when the user changes the scroll direction. The payload is\\n  the new scrolling direction.\\n- `UserReachedScrollStart`: emitted when the user scrolls up to the initial position of the scroll.\\n- `UserAlmostReachedScrollEnd`: emitted when the user is about to reach the bottom part of the\\n  scroll.\\n- `UserReachedScrollEnd`: emitted when the user has reached the bottom part of the scroll.\\n</docs>\\n"],"names":["const"],"mappings":";;;;AAEAA;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;"}')}}]);