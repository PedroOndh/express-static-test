(window.webpackJsonp=window.webpackJsonp||[]).push([[682],{1456:function(t,n){throw new Error("Module parse failed: Unexpected token (1:10)\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\n> {\"version\":3,\"file\":\"promoteds-list.vue.js\",\"sources\":[\"../../../../../src/x-modules/search/components/promoteds-list.vue\"],\"sourcesContent\":[\"<template>\\n  <NoElement>\\n    \x3c!--\\n      @slot Customized Promoteds List layout.\\n        @binding {Promoted[]} items - Promoteds plus the injected list items to render.\\n        @binding {Vue | string} animation - Animation to animate the elements.\\n    --\x3e\\n    <slot v-bind=\\\"{ items, animation }\\\">\\n      <ItemsList :animation=\\\"animation\\\" :items=\\\"items\\\">\\n        <template v-for=\\\"(_, slotName) in $scopedSlots\\\" v-slot:[slotName]=\\\"{ item }\\\">\\n          <slot :name=\\\"slotName\\\" :item=\\\"item\\\" />\\n        </template>\\n      </ItemsList>\\n    </slot>\\n  </NoElement>\\n</template>\\n\\n<script lang=\\\"ts\\\">\\n  import { Promoted } from '@empathyco/x-types';\\n  import Vue from 'vue';\\n  import { Component, Prop } from 'vue-property-decorator';\\n  import { State } from '../../../components/decorators/store.decorators';\\n  import { NoElement } from '../../../components/no-element';\\n  import { ItemsListInjectionMixin } from '../../../components/items-list-injection.mixin';\\n  import ItemsList from '../../../components/items-list.vue';\\n  import { xComponentMixin } from '../../../components/x-component.mixin';\\n  import { ListItem } from '../../../utils/types';\\n  import { searchXModule } from '../x-module';\\n\\n  /**\\n   * It renders a {@link ItemsList} of promoteds from {@link SearchState.promoteds} by default\\n   * using the `ItemsInjectionMixin`.\\n   *\\n   * The component provides a default slot which wraps the whole component with the `promoteds`\\n   * plus the `searchInjectedItems` which also contains the injected list items from\\n   * the ancestor.\\n   *\\n   * It also provides the parent slots to customize the items.\\n   *\\n   * @public\\n   */\\n  @Component({\\n    components: {\\n      NoElement,\\n      ItemsList\\n    },\\n    mixins: [xComponentMixin(searchXModule)]\\n  })\\n  export default class PromotedsList extends ItemsListInjectionMixin {\\n    /**\\n     * The promoteds to render from the state.\\n     *\\n     * @public\\n     */\\n    @State('search', 'promoteds')\\n    public stateItems!: Promoted[];\\n\\n    /**\\n     * Animation component that will be used to animate the promoteds.\\n     *\\n     * @public\\n     */\\n    @Prop({ default: 'ul' })\\n    protected animation!: Vue | string;\\n\\n    /**\\n     * The `stateItems` concatenated with the `injectedListItems` if there are.\\n     *\\n     * @remarks This computed defines the merging strategy of the `stateItems` and the\\n     * `injectedListItems`.\\n     *\\n     * @returns List of {@link ListItem}.\\n     *\\n     * @internal\\n     */\\n    public override get items(): ListItem[] {\\n      return this.injectedListItems\\n        ? [...this.stateItems, ...this.injectedListItems]\\n        : this.stateItems;\\n    }\\n  }\\n<\/script>\\n\\n<docs lang=\\\"mdx\\\">\\n## Events\\n\\nThis component doesn't emit events.\\n\\n## See it in action\\n\\n\x3c!-- prettier-ignore-start --\x3e\\n:::warning Backend service required\\nTo use this component, the Search service must be implemented.\\n:::\\n\x3c!-- prettier-ignore-end --\x3e\\n\\nHere you have a basic example of how the PromotedsList is rendered.\\n\\n_Type any term in the input field to try it out!_\\n\\n```vue\\n<template>\\n  <div>\\n    <SearchInput />\\n\\n    <PromotedsList />\\n  </div>\\n</template>\\n\\n<script>\\n  import { PromotedsList } from '@empathyco/x-components/search';\\n  import { SearchInput } from '@empathyco/x-components/search-box';\\n\\n  export default {\\n    name: 'PromotedsListDemo',\\n    components: {\\n      SearchInput,\\n      PromotedsList\\n    }\\n  };\\n<\/script>\\n```\\n\\n### Play with the animation\\n\\n```vue\\n<template>\\n  <div>\\n    <SearchInput />\\n    <PromotedsList :animation=\\\"fadeAndSlide\\\" />\\n  </div>\\n</template>\\n\\n<script>\\n  import { PromotedsList } from '@empathyco/x-components/search';\\n  import { FadeAndSlide } from '@empathyco/x-components/animations';\\n  import { SearchInput } from '@empathyco/x-components/search-box';\\n\\n  export default {\\n    name: 'PromotedsListDemo',\\n    components: {\\n      SearchInput,\\n      PromotedsList\\n    },\\n    data() {\\n      return {\\n        fadeAndSlide: FadeAndSlide\\n      };\\n    }\\n  };\\n<\/script>\\n```\\n\\n### Overriding default content\\n\\n```vue\\n<template>\\n  <div>\\n    <SearchInput />\\n    <PromotedsList #default=\\\"{ items, animation }\\\">\\n      <BaseGrid :items=\\\"items\\\" :animation=\\\"animation\\\">\\n        <template #promoted=\\\"{ item }\\\">\\n          <span>Promoted: {{ item.title }}</span>\\n        </template>\\n        <template #default=\\\"{ item }\\\">\\n          <span>Default: {{ item }}</span>\\n        </template>\\n      </BaseGrid>\\n    </PromotedsList>\\n  </div>\\n</template>\\n\\n<script>\\n  import { PromotedsList } from '@empathyco/x-components/search';\\n  import { SearchInput } from '@empathyco/x-components/search-box';\\n  import { BaseGrid } from '@empathyco/x-components';\\n\\n  export default {\\n    name: 'PromotedsListDemo',\\n    components: {\\n      SearchInput,\\n      PromotedsList,\\n      BaseGrid\\n    }\\n  };\\n<\/script>\\n```\\n\\n### Overriding promoted content\\n\\n```vue\\n<template>\\n  <div>\\n    <SearchInput />\\n    <PromotedsList #promoted=\\\"{ item }\\\">\\n      <span class=\\\"promoted\\\">\\n        {{ item.title }}\\n      </span>\\n    </PromotedsList>\\n  </div>\\n</template>\\n\\n<script>\\n  import { PromotedsList } from '@empathyco/x-components/search';\\n  import { SearchInput } from '@empathyco/x-components/search-box';\\n\\n  export default {\\n    name: 'PromotedsListDemo',\\n    components: {\\n      SearchInput,\\n      PromotedsList\\n    }\\n  };\\n<\/script>\\n```\\n\\n### Data injection\\n\\nStarting with the `ResultsList` component as root element, you can concat the list of list items\\nusing `BannersList`, `PromotedsList`, `BaseGrid` or any component that injects the `listItems`\\nvalue.\\n\\n```vue\\n<template>\\n  <div>\\n    <SearchInput />\\n    <ResultsList>\\n      <PromotedsList>\\n        <template #promoted=\\\"{ item }\\\">Promoted: {{ item.id }}</template>\\n        <template #result=\\\"{ item }\\\">Result: {{ item.id }}</template>\\n      </PromotedsList>\\n    </ResultsList>\\n  </div>\\n</template>\\n\\n<script>\\n  import { ResultsList, PromotedsList } from '@empathyco/x-components/search';\\n  import { SearchInput } from '@empathyco/x-components/search-box';\\n\\n  export default {\\n    name: 'PromotedsListDemo',\\n    components: {\\n      SearchInput,\\n      ResultsList,\\n      PromotedsList\\n    }\\n  };\\n<\/script>\\n```\\n</docs>\\n\"],\"names\":[\"const\"],\"mappings\":\";;;;AAEAA;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;\"}")}}]);