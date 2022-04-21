(window.webpackJsonp=window.webpackJsonp||[]).push([[680],{1454:function(e,n){throw new Error('Module parse failed: Unexpected token (1:10)\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\n> {"version":3,"file":"promoted.vue.js","sources":["../../../../../src/x-modules/search/components/promoted.vue"],"sourcesContent":["<template>\\n  <a @click=\\"emitClickEvent\\" :href=\\"promoted.url\\" class=\\"x-promoted\\" data-test=\\"promoted\\">\\n    <img :src=\\"promoted.image\\" class=\\"x-promoted__image\\" alt=\\"\\" />\\n    <h2 class=\\"x-promoted__title\\">{{ promoted.title }}</h2>\\n  </a>\\n</template>\\n\\n<script lang=\\"ts\\">\\n  import { Promoted as PromotedModel } from \'@empathyco/x-types\';\\n  import Vue from \'vue\';\\n  import { Component, Prop } from \'vue-property-decorator\';\\n  import { xComponentMixin } from \'../../../components/x-component.mixin\';\\n  import { searchXModule } from \'../x-module\';\\n\\n  /**\\n   * A promoted result is just an item that has been inserted into the search results to advertise\\n   * something. Usually it is one of the first items in the grid, and has the same shape as a\\n   * result. It just contains a link to the promoted content, an image, and a title.\\n   *\\n   * @public\\n   */\\n  @Component({\\n    mixins: [xComponentMixin(searchXModule)]\\n  })\\n  export default class Promoted extends Vue {\\n    /**\\n     * The promoted data.\\n     *\\n     * @public\\n     */\\n    @Prop({ required: true })\\n    public promoted!: PromotedModel;\\n\\n    /**\\n     * Emits the promoted click event.\\n     *\\n     * @internal\\n     */\\n    protected emitClickEvent(): void {\\n      this.$x.emit(\'UserClickedAPromoted\', this.promoted);\\n    }\\n  }\\n<\/script>\\n\\n<style lang=\\"scss\\">\\n  .x-promoted {\\n    display: flex;\\n    flex-flow: column nowrap;\\n    text-decoration: none;\\n\\n    &__image {\\n      width: 100%;\\n      object-fit: contain;\\n    }\\n  }\\n</style>\\n\\n<docs lang=\\"mdx\\">\\n## Events\\n\\nThis component doesn\'t emit events.\\n\\n## See it in action\\n\\nIn this example promoted data is passed as a prop.\\n\\n_Here you can see how the `Promoted` component is rendered._\\n\\n```vue\\n<template>\\n  <Promoted :promoted=\\"promoted\\" />\\n</template>\\n\\n<script>\\n  import { Promoted } from \'@empathyco/x-components/search\';\\n\\n  export default {\\n    name: \'PromotedDemo\',\\n    components: {\\n      Promoted\\n    },\\n    data() {\\n      return {\\n        promoted: {\\n          modelName: \'Promoted\',\\n          id: \'promoted-example\',\\n          url: \'https://my-website.com/summer-shirts\',\\n          image: \'https://my-website.com/images/summer-shirts.jpg\',\\n          title: \'Trendy summer shirts\'\\n        }\\n      };\\n    }\\n  };\\n<\/script>\\n```\\n</docs>\\n"],"names":["const"],"mappings":";;;;;AAEAA;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;"}')}}]);