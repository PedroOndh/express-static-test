(window.webpackJsonp=window.webpackJsonp||[]).push([[671],{1446:function(n,e){throw new Error('Module parse failed: Unexpected token (1:10)\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\n> {"version":3,"file":"banner.vue.js","sources":["../../../../../src/x-modules/search/components/banner.vue"],"sourcesContent":["<template>\\n  <a @click=\\"emitClickEvent\\" :href=\\"banner.url\\" class=\\"x-banner\\" data-test=\\"banner\\">\\n    <img :src=\\"banner.image\\" class=\\"x-banner__image\\" alt=\\"\\" />\\n    <h2 class=\\"x-banner__title\\">{{ banner.title }}</h2>\\n  </a>\\n</template>\\n\\n<script lang=\\"ts\\">\\n  import { Banner as BannerModel } from \'@empathyco/x-types\';\\n  import Vue from \'vue\';\\n  import { Component, Prop } from \'vue-property-decorator\';\\n  import { xComponentMixin } from \'../../../components/x-component.mixin\';\\n  import { searchXModule } from \'../x-module\';\\n  /**\\n   * A banner result is just an item that has been inserted into the search results to advertise\\n   * something. Usually it is the first item in the grid or it can be placed in the middle of them\\n   * and fill the whole row where appears. It just contains a link to the banner content, an image\\n   * and a title.\\n   *\\n   * @public\\n   */\\n  @Component({\\n    mixins: [xComponentMixin(searchXModule)]\\n  })\\n  export default class Banner extends Vue {\\n    /**\\n     * The banner data.\\n     *\\n     * @public\\n     */\\n    @Prop({ required: true })\\n    public banner!: BannerModel;\\n\\n    /**\\n     * Emits the banner click event.\\n     *\\n     * @internal\\n     */\\n    protected emitClickEvent(): void {\\n      this.$x.emit(\'UserClickedABanner\', this.banner);\\n    }\\n  }\\n<\/script>\\n\\n<style lang=\\"scss\\">\\n  .x-banner {\\n    display: flex;\\n    flex-flow: column nowrap;\\n    text-decoration: none;\\n\\n    &__image {\\n      width: 100%;\\n      object-fit: contain;\\n    }\\n  }\\n</style>\\n\\n<docs lang=\\"mdx\\">\\n## Events\\n\\nThis component doesn\'t emit events.\\n\\n## See it in action\\n\\nIn this example banned data is passed as a prop.\\n\\n_Here you can see how the `Banner` component is rendered._\\n\\n```vue\\n<template>\\n  <Banner :banner=\\"banner\\" />\\n</template>\\n\\n<script>\\n  import { Banner } from \'@empathyco/x-components/search\';\\n  export default {\\n    name: \'BannerDemo\',\\n    components: {\\n      Banner\\n    },\\n    data() {\\n      return {\\n        banner: {\\n          modelName: \'Banner\',\\n          id: \'banner-example\',\\n          url: \'https://my-website.com/summer-shirts\',\\n          image: \'https://my-website.com/images/summer-shirts.jpg\',\\n          title: \'Trendy summer shirts\'\\n        }\\n      };\\n    }\\n  };\\n<\/script>\\n```\\n</docs>\\n"],"names":["const"],"mappings":";;;;;AAEAA;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;"}')}}]);