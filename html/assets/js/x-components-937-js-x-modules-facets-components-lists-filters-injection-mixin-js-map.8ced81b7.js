(window.webpackJsonp=window.webpackJsonp||[]).push([[1029],{1296:function(e,A){throw new Error('Module parse failed: Unexpected token (1:10)\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\n> {"version":3,"file":"filters-injection.mixin.js","sources":["../../../../../../src/x-modules/facets/components/lists/filters-injection.mixin.ts"],"sourcesContent":["import { Filter, HierarchicalFilter, isHierarchicalFilter } from \'@empathyco/x-types\';\\nimport Vue from \'vue\';\\nimport Component from \'vue-class-component\';\\nimport { Prop } from \'vue-property-decorator\';\\nimport { XInject } from \'../../../../components/decorators/injection.decorators\';\\nimport { isArrayEmpty } from \'../../../../utils/array\';\\n\\n/**\\n * Mixin to share filters injection logic.\\n *\\n * @public\\n */\\n@Component\\nexport default class FiltersInjectionMixin extends Vue {\\n  /**\\n   * The list of filters to be rendered as slots.\\n   *\\n   * @public\\n   */\\n  @Prop()\\n  protected filters!: Filter[];\\n\\n  /**\\n   * This prop is used in the `HierarchicalFilter` component and only in that case. It is necessary\\n   * to make the `renderedFilters` to return only the filters of each level of the hierarchy.\\n   *\\n   * @public\\n   */\\n  @Prop({ required: false })\\n  protected parentId?: Filter[\'id\'];\\n\\n  /** The injected filters array.\\n   *\\n   * @public\\n   */\\n  @XInject(\'filters\')\\n  public injectedFilters!: Filter[];\\n\\n  /**\\n   * The prop or injected filters array, filtered by parentId if they are\\n   * {@link @empathyco/x-types#HierarchicalFilter}.\\n   *\\n   * @returns An array of filters.\\n   *\\n   * @internal\\n   */\\n  protected get renderedFilters(): Filter[] {\\n    return this.filterByParentId(this.propOrInjectedFilters);\\n  }\\n\\n  /**\\n   * An array of filters formed by those that are passed through prop or injected.\\n   *\\n   * @returns An array of filters.\\n   *\\n   * @internal\\n   */\\n  protected get propOrInjectedFilters(): Filter[] {\\n    return (\\n      this.filters ??\\n      this.injectedFilters ??\\n      //TODO: add here logger\\n      //eslint-disable-next-line no-console\\n      console.warn(\'It is necessary to pass a prop or inject the list of filters\')\\n    );\\n  }\\n\\n  /**\\n   * In the case that the filters are {@link @empathyco/x-types#HierarchicalFilter}, this method\\n   * removes from the filter list passed as a param, the filters that are not part of the level of\\n   * the hierarchy, depending on the value of the `parentId` prop. In case this prop is undefined,\\n   * then only the first level of filters hierarchy are returned. In the case the prop `parentId` is\\n   * defined, then only the filters with the same `parentId` are returned.\\n   *\\n   * @param filters - The list of the filters to apply the filter.\\n   * @returns The list of the filters filtered by parentId.\\n   * @internal\\n   */\\n  protected filterByParentId(filters: Filter[]): Filter[] {\\n    if (!isArrayEmpty(filters) && isHierarchicalFilter(filters[0])) {\\n      return (filters as HierarchicalFilter[]).filter(\\n        filter => filter.parentId === (this.parentId ?? null)\\n      );\\n    } else {\\n      return filters;\\n    }\\n  }\\n}\\n"],"names":[],"mappings":";;;;;;;;AAOA;;;;;AAMA;IAAmD,yCAAG;IAAtD;;KA0EC;IAzCC,sBAAc,kDAAe;;;;;;;;;aAA7B;YACE,OAAO,IAAI,CAAC,gBAAgB,CAAC,IAAI,CAAC,qBAAqB,CAAC,CAAC;SAC1D;;;OAAA;IASD,sBAAc,wDAAqB;;;;;;;;aAAnC;;YACE,QACE,MAAA,MAAA,IAAI,CAAC,OAAO,mCACZ,IAAI,CAAC,eAAe;;;YAGpB,OAAO,CAAC,IAAI,CAAC,8DAA8D,CAAC,EAC5E;SACH;;;OAAA;;;;;;;;;;;;IAaS,gDAAgB,GAA1B,UAA2B,OAAiB;QAA5C,iBAQC;QAPC,IAAI,CAAC,YAAY,CAAC,OAAO,CAAC,IAAI,oBAAoB,CAAC,OAAO,CAAC,CAAC,CAAC,CAAC,EAAE;YAC9D,OAAQ,OAAgC,CAAC,MAAM,CAC7C,UAAA,MAAM,YAAI,OAAA,MAAM,CAAC,QAAQ,MAAM,MAAA,KAAI,CAAC,QAAQ,mCAAI,IAAI,CAAC,CAAA,EAAA,CACtD,CAAC;SACH;aAAM;YACL,OAAO,OAAO,CAAC;SAChB;KACF;IAlED;QADC,IAAI,EAAE;0DACsB;IAS7B;QADC,IAAI,CAAC,EAAE,QAAQ,EAAE,KAAK,EAAE,CAAC;2DACQ;IAOlC;QADC,OAAO,CAAC,SAAS,CAAC;kEACe;IAvBf,qBAAqB;QADzC,SAAS;OACW,qBAAqB,CA0EzC;IAAD,4BAAC;CAAA,CA1EkD,GAAG;;;;"}')}}]);