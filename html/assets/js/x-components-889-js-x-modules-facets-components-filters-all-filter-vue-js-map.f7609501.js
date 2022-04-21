(window.webpackJsonp=window.webpackJsonp||[]).push([[1011],{1280:function(e,t){throw new Error('Module parse failed: Unexpected token (1:10)\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\n> {"version":3,"file":"all-filter.vue.js","sources":["../../../../../../src/x-modules/facets/components/filters/all-filter.vue"],"sourcesContent":["<template>\\n  <BaseEventButton\\n    class=\\"x-filter x-all-filter\\"\\n    data-test=\\"all-filter\\"\\n    role=\\"checkbox\\"\\n    :aria-checked=\\"facet.label.toString()\\"\\n    :events=\\"clickEvent\\"\\n    :class=\\"cssClasses\\"\\n  >\\n    \x3c!--\\n        @slot The content to render inside the button\\n            @binding {Facet} Facet - The facet data\\n      --\x3e\\n    <slot :facet=\\"facet\\" :isSelected=\\"isSelected\\">all</slot>\\n  </BaseEventButton>\\n</template>\\n\\n<script lang=\\"ts\\">\\n  import Vue from \'vue\';\\n  import { Component, Prop } from \'vue-property-decorator\';\\n  import { Facet } from \'@empathyco/x-types\';\\n  import { Getter, xComponentMixin } from \'../../../../components\';\\n  import BaseEventButton from \'../../../../components/base-event-button.vue\';\\n  import { isArrayEmpty } from \'../../../../utils/array\';\\n  import { VueCSSClasses } from \'../../../../utils/types\';\\n  import { XEventsTypes } from \'../../../../wiring/events.types\';\\n  import { FiltersByFacet } from \'../../store\';\\n  import { facetsXModule } from \'../../x-module\';\\n\\n  /**\\n   * This component receives a required `facet` with\\n   * {@link @empathyco/x-types#BooleanFilter | BooleanFilter} as prop and renders a button, which\\n   * on clicked emits the {@link FacetsXEvents.UserClickedAllFilter} event. By default\\n   * the rendered button displays a message with the facet label but this content is customizable\\n   * through the default slot.\\n   *\\n   * @public\\n   */\\n  @Component({\\n    components: { BaseEventButton },\\n    mixins: [xComponentMixin(facetsXModule)]\\n  })\\n  export default class AllFilter extends Vue {\\n    /** The facet data. */\\n    @Prop({ required: true })\\n    public facet!: Facet;\\n\\n    /** The getter of the selectedFiltersByFacet. */\\n    @Getter(\'facets\', \'selectedFiltersByFacet\')\\n    public selectedFiltersByFacet!: FiltersByFacet;\\n\\n    /**\\n     * The event that will be emitted when the all filter button is clicked.\\n     *\\n     * @returns The event to emit on click.\\n     * @internal\\n     */\\n    protected get clickEvent(): Partial<XEventsTypes> {\\n      return {\\n        UserClickedAllFilter: [this.facet.id]\\n      };\\n    }\\n\\n    /**\\n     * Computed to retrieve the selected state of this component.\\n     *\\n     * @returns True if is selected false otherwise.\\n     */\\n    protected get isSelected(): boolean {\\n      return isArrayEmpty(this.selectedFiltersByFacet?.[this.facet.id]);\\n    }\\n\\n    /**\\n     * Dynamic CSS classes to apply to the component.\\n     *\\n     * @remarks This is only valid considering that in the case of HierarchicalFilters, ancestors\\n     * of nested selected filters are also selected.\\n     *\\n     * @returns The dynamic CSS classes to apply to the component.\\n     * @internal\\n     */\\n    protected get cssClasses(): VueCSSClasses {\\n      return {\\n        \'x-filter--is-selected\': this.isSelected,\\n        \'x-all-filter--is-selected\': this.isSelected\\n      };\\n    }\\n  }\\n<\/script>\\n\\n<docs lang=\\"mdx\\">\\n## Examples\\n\\nThis component receives a required `facet` as prop and renders a button, which on clicked emits the\\nUserClickedAllFilter event. By default the rendered button displays a message with the facet label\\nbut this content is customizable through the default slot.\\n\\n### Basic usage\\n\\n```vue\\n<AllFilter :facet=\\"facet\\" />\\n```\\n\\n### Customizing its content\\n\\n```vue\\n<AllFilter v-slot=\\"{ facet }\\" :facet=\\"facet\\">\\n  Select all {{ facet.label }}\\n</AllFilter>\\n```\\n\\n### Basic example within facets\\n\\n```vue\\n<Facets>\\n  <template #default=\\"{ facet }\\">\\n    <AllFilter :facet=\\"facet\\" />\\n    <Filters v-slot=\\"{ filter }\\" :filters=\\"facet.filters\\">\\n      <SimpleFilter :filter=\\"filter\\" />\\n    </Filters>\\n  </template>\\n</Facets>\\n```\\n\\n### Custom example within facets\\n\\n```vue\\n<Facets>\\n  <template #default=\\"{ facet }\\">\\n    <AllFilter v-slot=\\"{ facet }\\" :facet=\\"facet\\">\\n      Select all {{ facet.label }}\\n    </AllFilter>\\n    <Filters v-slot=\\"{ filter }\\" :filters=\\"facet.filters\\">\\n      <SimpleFilter :filter=\\"filter\\" />\\n    </Filters>\\n  </template>\\n</Facets>\\n```\\n\\n## Events\\n\\nA list of events that the component will emit:\\n\\n- `UserClickedAllFilter`: the event is emitted after the user clicks the button. The event payload\\n  is the id of the facet that this `AllFilter` component corresponds to.\\n</docs>\\n"],"names":["const"],"mappings":";;;;AAEAA;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;"}')}}]);