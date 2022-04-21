(window.webpackJsonp=window.webpackJsonp||[]).push([[1025],{1292:function(e,n){throw new Error('Module parse failed: Unexpected token (1:10)\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\n> {"version":3,"file":"simple-filter.vue.js","sources":["../../../../../../src/x-modules/facets/components/filters/simple-filter.vue"],"sourcesContent":["<template>\\n  <RenderlessFilter\\n    v-slot=\\"{ filter, clickFilter, cssClasses, isDisabled }\\"\\n    :class=\\"cssClasses\\"\\n    :clickEvents=\\"clickEvents\\"\\n    :filter=\\"filter\\"\\n    class=\\"x-simple-filter\\"\\n  >\\n    \x3c!--\\n      @slot The control element to render\\n      @binding {Filter} filter - The filter data\\n      @binding {() => void} clickFilter - Method that will invoke the needed actions after the user\\n      clicks the filter.\\n      @binding {Object} cssClasses - Object containing CSS classes to add to the button\\n      @binding {Boolean} isDisabled - True if the filter shouldn\'t be able to be selected by the\\n      user\\n    --\x3e\\n    <slot\\n      v-bind=\\"{\\n        filter,\\n        clickFilter,\\n        cssClasses,\\n        isDisabled\\n      }\\"\\n    >\\n      <button\\n        @click=\\"clickFilter\\"\\n        :aria-checked=\\"filter.selected.toString()\\"\\n        :class=\\"cssClasses\\"\\n        :disabled=\\"isDisabled\\"\\n        data-test=\\"filter\\"\\n        role=\\"checkbox\\"\\n      >\\n        \x3c!--\\n          @slot The content to render inside the button\\n          @binding {Filter} filter - The filter data\\n        --\x3e\\n        <slot :filter=\\"filter\\" name=\\"label\\">{{ filter.label }}</slot>\\n      </button>\\n    </slot>\\n  </RenderlessFilter>\\n</template>\\n\\n<script lang=\\"ts\\">\\n  import { SimpleFilter as SimpleFilterModel } from \'@empathyco/x-types\';\\n  import Vue from \'vue\';\\n  import { Component, Prop } from \'vue-property-decorator\';\\n  import { xComponentMixin } from \'../../../../components\';\\n  import { VueCSSClasses } from \'../../../../utils/types\';\\n  import { XEventsTypes } from \'../../../../wiring/events.types\';\\n  import { facetsXModule } from \'../../x-module\';\\n  import BaseFilter from \'./base-filter.vue\';\\n  import RenderlessFilter from \'./renderless-filter.vue\';\\n\\n  /**\\n   * Renders a simple filter, emitting the needed events when clicked.\\n   *\\n   * @public\\n   */\\n  @Component({\\n    components: { RenderlessFilter, BaseFilter },\\n    mixins: [xComponentMixin(facetsXModule)]\\n  })\\n  export default class SimpleFilter extends Vue {\\n    /** The filter data to render. */\\n    @Prop({ required: true })\\n    public filter!: SimpleFilterModel;\\n\\n    /**\\n     * Additional events to emit when the filter is clicked.\\n     *\\n     * @returns A dictionary with the events to be emitted when the filter is clicked, and its\\n     * payload.\\n     * @internal\\n     */\\n    protected get clickEvents(): Partial<XEventsTypes> {\\n      return {\\n        UserClickedASimpleFilter: this.filter\\n      };\\n    }\\n\\n    /**\\n     * Dynamic CSS classes to apply to the component.\\n     *\\n     * @returns The dynamic CSS classes to apply to the component.\\n     * @internal\\n     */\\n    protected get cssClasses(): VueCSSClasses {\\n      return {\\n        \'x-simple-filter--is-selected\': this.filter.selected\\n      };\\n    }\\n  }\\n<\/script>\\n\\n<docs lang=\\"mdx\\">\\n## Examples\\n\\nThis component renders a button, which on clicked emits the `UserClickedAFilter` and the\\n`UserClickedASimpleFilter` events. By default, it renders a `button` with the `filter.label`\\nproperty as text.\\n\\n### Basic usage\\n\\n```vue\\n<template>\\n  <SimpleFilter :filter=\\"filter\\" />\\n</template>\\n\\n<script>\\n  import { SimpleFilter } from \'@empathyco/x-components/facets\';\\n\\n  export default {\\n    name: \'SimpleFilterTest\',\\n    components: {\\n      SimpleFilter\\n    },\\n    data() {\\n      return {\\n        filter: {\\n          modelName: \'SimpleFilter\',\\n          selected: false,\\n          id: \'category:shirts\',\\n          value: \'category:shirts\',\\n          facetId: \'category\',\\n          totalResults: 10\\n        }\\n      };\\n    }\\n  };\\n<\/script>\\n```\\n\\n### Rendering an input\\n\\nYou can change the rendered control using the default slot. Note that because of the current Vue\\nlimitations, you must only render one single root node in this slot. There you will receive all the\\ndata and methods needed:\\n\\n```vue\\n<template>\\n  <SimpleFilter v-slot=\\"{ filter, clickFilter, isDisabled, cssClasses }\\" :filter=\\"filter\\">\\n    <label :class=\\"cssClasses\\">\\n      <input :checked=\\"filter.selected\\" type=\\"checkbox\\" @change=\\"clickFilter\\" />\\n      {{ filter.label }}\\n    </label>\\n  </SimpleFilter>\\n</template>\\n\\n<script>\\n  import { SimpleFilter } from \'@empathyco/x-components/facets\';\\n\\n  export default {\\n    name: \'SimpleFilterTest\',\\n    components: {\\n      SimpleFilter\\n    },\\n    data() {\\n      return {\\n        filter: {\\n          modelName: \'SimpleFilter\',\\n          selected: false,\\n          id: \'category:shirts\',\\n          value: \'category:shirts\',\\n          facetId: \'category\',\\n          label: \'Shirts\',\\n          totalResults: 10\\n        }\\n      };\\n    }\\n  };\\n<\/script>\\n```\\n\\n### Changing default button content\\n\\nYou can change the content rendered by the default button using the `label` slot. There you will\\nreceive the filter data.\\n\\n```vue\\n<template>\\n  <SimpleFilter :filter=\\"filter\\">\\n    <template #label=\\"{ filter }\\">\\n      <img :src=\\"`imgs/filters/${filter.id}.png`\\" />\\n      <span>{{ filter.label }}</span>\\n    </template>\\n  </SimpleFilter>\\n</template>\\n\\n<script>\\n  import { SimpleFilter } from \'@empathyco/x-components/facets\';\\n\\n  export default {\\n    name: \'SimpleFilterTest\',\\n    components: {\\n      SimpleFilter\\n    },\\n    data() {\\n      return {\\n        filter: {\\n          modelName: \'SimpleFilter\',\\n          selected: false,\\n          id: \'category:shirts\',\\n          value: \'category:shirts\',\\n          facetId: \'category\',\\n          label: \'Shirts\',\\n          totalResults: 10\\n        }\\n      };\\n    }\\n  };\\n<\/script>\\n```\\n\\n## Events\\n\\nA list of events that the component will emit:\\n\\n- `UserClickedASimpleFilter`: the event is emitted after the user clicks the button. The event\\n  payload is the simple filter.\\n</docs>\\n"],"names":["const"],"mappings":";;;;AAEAA;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;"}')}}]);