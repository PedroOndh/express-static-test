(window.webpackJsonp=window.webpackJsonp||[]).push([[918],{1196:function(n,e){throw new Error('Module parse failed: Unexpected token (1:10)\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\n> {"version":3,"file":"base-result-rating.vue.js","sources":["../../../../src/components/result/base-result-rating.vue"],"sourcesContent":["<template>\\n  <component\\n    :is=\\"link ? \'a\' : \'div\'\\"\\n    v-if=\\"result.rating && result.rating.value\\"\\n    @click=\\"emitClickedEvent\\"\\n    :href=\\"link\\"\\n    class=\\"x-result-rating\\"\\n    data-test=\\"result-rating\\"\\n  >\\n    \x3c!--\\n      @slot To override the whole content\\n    --\x3e\\n    <slot :rating=\\"result.rating.value\\" :result=\\"result\\">\\n      <BaseRating :value=\\"result.rating.value\\" v-bind=\\"$attrs\\">\\n        <template #empty-icon>\\n          \x3c!--\\n            @slot The content to render as empty icon\\n          --\x3e\\n          <slot name=\\"empty-icon\\" />\\n        </template>\\n\\n        <template #filled-icon>\\n          \x3c!--\\n            @slot The content to render as filled icon\\n          --\x3e\\n          <slot name=\\"filled-icon\\" />\\n        </template>\\n      </BaseRating>\\n    </slot>\\n  </component>\\n</template>\\n\\n<script lang=\\"ts\\">\\n  import Vue from \'vue\';\\n  import { Component, Prop } from \'vue-property-decorator\';\\n  import { Result } from \'@empathyco/x-types\';\\n  import BaseRating from \'../base-rating.vue\';\\n\\n  /**\\n   * This component renders a {@link BaseRating} for a result passed as prop.\\n   *\\n   * @public\\n   */\\n  @Component({\\n    components: {\\n      BaseRating\\n    }\\n  })\\n  export default class BaseResultRating extends Vue {\\n    /**\\n     * The {@link @empathyco/x-types#Result | Result} to render its rating.\\n     *\\n     * @public\\n     */\\n    @Prop({ required: true })\\n    protected result!: Result;\\n\\n    /**\\n     * A link to redirect when rating is clicked.\\n     *\\n     * @public\\n     */\\n    @Prop()\\n    protected link!: string;\\n\\n    /**\\n     * Emits the `UserClickedAResultRating` event when user clicks this component, with the\\n     * {@link @empathyco/x-types#Result | Result} as payload.\\n     *\\n     * @internal\\n     */\\n    protected emitClickedEvent(): void {\\n      this.$x.emit(\'UserClickedAResultRating\', this.result, { target: this.$el as HTMLElement });\\n    }\\n  }\\n<\/script>\\n\\n<style scoped lang=\\"scss\\">\\n  .x-result-rating {\\n    color: inherit;\\n    text-decoration: none;\\n  }\\n</style>\\n\\n<docs lang=\\"mdx\\">\\n## Events\\n\\nThis component emits the following events:\\n\\n- [`UserClickedAResultRating`](./../../api/x-components.searchboxxevents.md)\\n\\n## See it in action\\n\\nHere you have a basic example of how the result rating is rendered.\\n\\n```vue\\n<template>\\n  <BaseResultRating :result=\\"result\\" />\\n</template>\\n\\n<script>\\n  import { BaseResultRating } from \'@empathyco/x-components\';\\n\\n  export default {\\n    name: \'ResultRatingDemo\',\\n    components: {\\n      BaseResultRating\\n    },\\n    data() {\\n      return {\\n        result: {\\n          id: 1,\\n          name: \'Result with rating\',\\n          rating: { value: 3 }\\n        }\\n      };\\n    }\\n  };\\n<\/script>\\n```\\n\\n### Play with props\\n\\nIn this example, the result rating has been configured to 6 as maximum value using the prop `max`.\\n\\n```vue\\n<template>\\n  <BaseResultRating :result=\\"result\\" :max=\\"6\\" />\\n</template>\\n\\n<script>\\n  import { BaseResultRating } from \'@empathyco/x-components\';\\n\\n  export default {\\n    name: \'ResultRatingDemo\',\\n    components: {\\n      BaseResultRating\\n    },\\n    data() {\\n      return {\\n        result: {\\n          id: 1,\\n          name: \'Result with rating\',\\n          rating: { value: 3 }\\n        }\\n      };\\n    }\\n  };\\n<\/script>\\n```\\n\\nIn this example, the result rating has been configured with a link to redirect when is clicked.\\n\\n```vue\\n<template>\\n  <BaseResultRating :result=\\"result\\" link=\\"https://empathy.co/\\" />\\n</template>\\n\\n<script>\\n  import { BaseResultRating } from \'@empathyco/x-components\';\\n\\n  export default {\\n    name: \'ResultRatingDemo\',\\n    components: {\\n      BaseResultRating\\n    },\\n    data() {\\n      return {\\n        result: {\\n          id: 1,\\n          name: \'Result with rating\',\\n          rating: { value: 3 }\\n        }\\n      };\\n    }\\n  };\\n<\/script>\\n```\\n\\n### Play with events\\n\\nIn this example, a message has been added to be shown when the result rating is clicked.\\n\\n```vue\\n<template>\\n  <BaseResultRating :result=\\"result\\" @UserClickedAResultRating=\\"logUserClickedRating\\" />\\n</template>\\n\\n<script>\\n  import { BaseResultRating } from \'@empathyco/x-components\';\\n\\n  export default {\\n    name: \'ResultRatingDemo\',\\n    components: {\\n      BaseResultRating\\n    },\\n    data() {\\n      return {\\n        result: {\\n          id: 1,\\n          name: \'Result with rating\',\\n          rating: { value: 3 }\\n        }\\n      };\\n    },\\n    methods: {\\n      logUserClickedRating(result) {\\n        console.log(\'User clickedRating of this result:\', result);\\n      }\\n    }\\n  };\\n<\/script>\\n```\\n\\n## Extending the component\\n\\nThe rendered icons for rating can be configured through slots. Keep in mind that the icons for both\\nstates (filled and empty), must have the same size make component work properly.\\n\\n```vue\\n<template>\\n  <BaseResultRating :result=\\"result\\">\\n    <template #filled-icon>❤️</template>\\n    <template #empty-icon>🤍</template>\\n  </BaseResultRating>\\n</template>\\n\\n<script>\\n  import { BaseResultRating } from \'@empathyco/x-components\';\\n\\n  export default {\\n    name: \'ResultRatingDemo\',\\n    components: {\\n      BaseResultRating\\n    },\\n    data() {\\n      return {\\n        result: {\\n          id: 1,\\n          name: \'Result with rating\',\\n          rating: { value: 3 }\\n        }\\n      };\\n    }\\n  };\\n<\/script>\\n```\\n\\nIt is possible to override all the content of the component to show your own rating but keeping the\\nlink and event behaviour:\\n\\n```vue\\n<template>\\n  <BaseResultRating :result=\\"result\\" #default=\\"{ rating, result }\\">\\n    <span v-for=\\"star in rating\\">⭐️</span>\\n    <span>{{ result.name }}</span>\\n  </BaseResultRating>\\n</template>\\n\\n<script>\\n  import { BaseResultRating } from \'@empathyco/x-components\';\\n\\n  export default {\\n    name: \'ResultRatingDemo\',\\n    components: {\\n      BaseResultRating\\n    },\\n    data() {\\n      return {\\n        result: {\\n          id: 1,\\n          name: \'Result with rating\',\\n          rating: { value: 3 }\\n        }\\n      };\\n    }\\n  };\\n<\/script>\\n```\\n\\nEven it is possible to reuse our rating component:\\n\\n```vue\\n<template>\\n  <BaseResultRating :result=\\"result\\" #default=\\"{ rating, result }\\">\\n    <BaseRating :value=\\"rating\\" />\\n    <span>{{ result.name }}</span>\\n  </BaseResultRating>\\n</template>\\n\\n<script>\\n  import { BaseResultRating, BaseRating } from \'@empathyco/x-components\';\\n\\n  export default {\\n    name: \'ResultRatingDemo\',\\n    components: {\\n      BaseResultRating,\\n      BaseRating\\n    },\\n    data() {\\n      return {\\n        result: {\\n          id: 1,\\n          name: \'Result with rating\',\\n          rating: { value: 3 }\\n        }\\n      };\\n    }\\n  };\\n<\/script>\\n```\\n</docs>\\n"],"names":["const"],"mappings":";;;;;AAEAA;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;"}')}}]);