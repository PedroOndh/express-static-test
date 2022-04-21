(window.webpackJsonp=window.webpackJsonp||[]).push([[686],{1460:function(n,t){throw new Error("Module parse failed: Unexpected token (1:10)\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\n> {\"version\":3,\"file\":\"results-list.vue.js\",\"sources\":[\"../../../../../src/x-modules/search/components/results-list.vue\"],\"sourcesContent\":[\"<template>\\n  <NoElement>\\n    \x3c!--\\n      @slot Customize ResultsList.\\n        @binding {Result[]} items - Results to render.\\n        @binding {Vue | string} animation - Animation to animate the elements.\\n    --\x3e\\n    <slot v-bind=\\\"{ items, animation }\\\">\\n      <ItemsList :animation=\\\"animation\\\" :items=\\\"items\\\">\\n        <template v-for=\\\"(_, slotName) in $scopedSlots\\\" v-slot:[slotName]=\\\"{ item }\\\">\\n          <slot :name=\\\"slotName\\\" :item=\\\"item\\\" />\\n        </template>\\n      </ItemsList>\\n    </slot>\\n  </NoElement>\\n</template>\\n\\n<script lang=\\\"ts\\\">\\n  import { Result } from '@empathyco/x-types';\\n  import Vue from 'vue';\\n  import { Component, Prop } from 'vue-property-decorator';\\n  import { LIST_ITEMS_KEY } from '../../../components/decorators/injection.consts';\\n  import { XProvide } from '../../../components/decorators/injection.decorators';\\n  import { State } from '../../../components/decorators/store.decorators';\\n  import { NoElement } from '../../../components/no-element';\\n  import ItemsList from '../../../components/items-list.vue';\\n  import { xComponentMixin } from '../../../components/x-component.mixin';\\n  import { InfiniteScroll } from '../../../directives/infinite-scroll/infinite-scroll.types';\\n  import { searchXModule } from '../x-module';\\n\\n  /**\\n   * It renders a {@link ItemsList} list with the results from {@link SearchState.results} by\\n   * default.\\n   *\\n   * The component provides a default slot which wraps the whole component with the `results` bound.\\n   *\\n   * It also provides the slot result to customize the item, which is within the default slot, with\\n   * the result bound.\\n   *\\n   * @public\\n   */\\n  @Component({\\n    components: {\\n      NoElement,\\n      ItemsList\\n    },\\n    mixins: [xComponentMixin(searchXModule)]\\n  })\\n  export default class ResultsList extends Vue implements InfiniteScroll {\\n    /**\\n     * The results to render from the state.\\n     *\\n     * @remarks The results list are provided with `items` key. It can be\\n     * concatenated with list items from components such as `BannersList`, `PromotedsList`,\\n     * `BaseGrid` or any component that injects the list.\\n     *\\n     * @public\\n     */\\n    @XProvide(LIST_ITEMS_KEY)\\n    @State('search', 'results')\\n    public items!: Result[];\\n\\n    /**\\n     * Animation component that will be used to animate the results.\\n     *\\n     * @public\\n     */\\n    @Prop({ default: 'ul' })\\n    protected animation!: Vue | string;\\n\\n    /**\\n     * It emits an {@link SearchXEvents.UserReachedResultsListEnd} event.\\n     *\\n     * @internal\\n     */\\n    onInfiniteScrollEnd(): void {\\n      this.$x.emit('UserReachedResultsListEnd');\\n    }\\n  }\\n<\/script>\\n\\n<docs lang=\\\"mdx\\\">\\n## Events\\n\\nThis component doesn't emit events.\\n\\n## See it in action\\n\\n\x3c!-- prettier-ignore-start --\x3e\\n:::warning Backend service required\\nTo use this component, the Search service must be implemented.\\n:::\\n\x3c!-- prettier-ignore-end --\x3e\\n\\nHere you have a basic example of how the ResultsList is rendered.\\n\\n_Type any term in the input field to try it out!_\\n\\n```vue\\n<template>\\n  <div>\\n    <SearchInput />\\n    <ResultsList />\\n  </div>\\n</template>\\n\\n<script>\\n  import { ResultsList } from '@empathyco/x-components/search';\\n  import { SearchInput } from '@empathyco/x-components/search-box';\\n\\n  export default {\\n    name: 'ResultsListDemo',\\n    components: {\\n      SearchInput,\\n      ResultsList\\n    }\\n  };\\n<\/script>\\n```\\n\\n### Play with the animation\\n\\n```vue\\n<template>\\n  <div>\\n    <SearchInput />\\n    <ResultsList :animation=\\\"fadeAndSlide\\\" />\\n  </div>\\n</template>\\n\\n<script>\\n  import { ResultsList } from '@empathyco/x-components/search';\\n  import { SearchInput } from '@empathyco/x-components/search-box';\\n  import { FadeAndSlide } from '@empathyco/x-components/animations';\\n\\n  export default {\\n    name: 'ResultsListDemo',\\n    components: {\\n      SearchInput,\\n      ResultsList\\n    },\\n    data() {\\n      return {\\n        fadeAndSlide: FadeAndSlide\\n      };\\n    }\\n  };\\n<\/script>\\n```\\n\\n### Overriding default content\\n\\n```vue\\n<template>\\n  <div>\\n    <SearchInput />\\n    <ResultsList #default=\\\"{ items, animation }\\\">\\n      <BaseGrid :items=\\\"items\\\" :animation=\\\"animation\\\">\\n        <template #result=\\\"{ item }\\\">\\n          <span>Result: {{ item.name }}</span>\\n        </template>\\n        <template #default=\\\"{ item }\\\">\\n          <span>Default: {{ item }}</span>\\n        </template>\\n      </BaseGrid>\\n    </ResultsList>\\n  </div>\\n</template>\\n\\n<script>\\n  import { ResultsList } from '@empathyco/x-components/search';\\n  import { SearchInput } from '@empathyco/x-components/search-box';\\n  import { BaseGrid } from '@empathyco/x-components';\\n\\n  export default {\\n    name: 'ResultsListDemo',\\n    components: {\\n      SearchInput,\\n      ResultsList,\\n      BaseGrid\\n    }\\n  };\\n<\/script>\\n```\\n\\n### Overriding result content\\n\\n```vue\\n<template>\\n  <div>\\n    <SearchInput />\\n    <ResultsList #result=\\\"{ item }\\\">\\n      <span class=\\\"result\\\">\\n        {{ item.name }}\\n      </span>\\n    </ResultsList>\\n  </div>\\n</template>\\n\\n<script>\\n  import { SearchInput, ResultsList } from '@empathyco/x-components/search';\\n\\n  export default {\\n    name: 'ResultsListDemo',\\n    components: {\\n      SearchInput,\\n      ResultsList\\n    }\\n  };\\n<\/script>\\n```\\n\\n### Data injection\\n\\nStarting with the `ResultsList` component as root element, you can concat the list of list items\\nusing `BannersList`, `PromotedsList`, `BaseGrid` or any component that injects the `listItems`\\nvalue.\\n\\n```vue\\n<template>\\n  <div>\\n    <SearchInput />\\n    <ResultsList>\\n      <BannersList>\\n        <PromotedsList>\\n          <template #result=\\\"{ item }\\\">Result: {{ item.id }}</template>\\n          <template #banner=\\\"{ item }\\\">Banner: {{ item.id }}</template>\\n          <template #promoted=\\\"{ item }\\\">Promoted: {{ item.id }}</template>\\n        </PromotedsList>\\n      </BannersList>\\n    </ResultsList>\\n  </div>\\n</template>\\n\\n<script>\\n  import { ResultsList, BannersList, PromotedsList } from '@empathyco/x-components/search';\\n  import { SearchInput } from '@empathyco/x-components/search-box';\\n\\n  export default {\\n    name: 'ResultsListDemo',\\n    components: {\\n      SearchInput,\\n      ResultsList,\\n      BannersList,\\n      PromotedsList\\n    }\\n  };\\n<\/script>\\n```\\n</docs>\\n\"],\"names\":[\"const\"],\"mappings\":\";;;;AAEAA;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;\"}")}}]);