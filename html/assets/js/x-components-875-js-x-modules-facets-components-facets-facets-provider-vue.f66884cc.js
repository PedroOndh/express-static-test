(window.webpackJsonp=window.webpackJsonp||[]).push([[483,37,41,484],{313:function(e,t,r){"use strict";r.r(t),r.d(t,"facetsXModule",(function(){return s}));var c=r(314),i=r(402),n=r(422),s={name:"facets",storeModule:c.facetsXStoreModule,storeEmitters:i.facetsEmitters,wiring:n.facetsWiring}},314:function(e,t,r){"use strict";r.r(t),r.d(t,"facetsXStoreModule",(function(){return s}));var c=r(3),i=r(398),n=r(399),s={state:function(){return{filters:{},groups:{},facets:{}}},getters:{selectedFilters:r(400).selectedFilters,selectedFiltersByFacet:n.selectedFiltersByFacet,facets:i.facets},mutations:{setFilter:function(e,t){c.default.set(e.filters,t.id,Object.freeze(t))},setFilters:function(e,t){t.forEach((function(t){return c.default.set(e.filters,t.id,Object.freeze(t))}))},removeFilter:function(e,t){var r=t.id;c.default.delete(e.filters,r)},removeFilters:function(e,t){t.forEach((function(t){var r=t.id;return c.default.delete(e.filters,r)}))},setFacetGroup:function(e,t){var r=t.facetId,i=t.groupId;c.default.set(e.groups,r,i)},removeFacet:function(e,t){var r=t.id;c.default.delete(e.facets,r)},setFacet:function(e,t){c.default.set(e.facets,t.id,t)}},actions:{}}},398:function(e,t,r){"use strict";r.r(t),r.d(t,"facets",(function(){return o}));var c=r(1),i=r(96),n=r(13),s=r(143),o=function(e){var t=Object(i.groupItemsBy)(Object.values(e.filters),(function(e){return Object(s.c)(e)?e.facetId:"__unknown-facet__"}));return Object(n.map)(e.facets,(function(e,r){var i;return Object(c.__assign)(Object(c.__assign)({},r),{filters:null!==(i=t[r.id])&&void 0!==i?i:[]})}))}},399:function(e,t,r){"use strict";r.r(t),r.d(t,"selectedFiltersByFacet",(function(){return s}));var c=r(96),i=r(13),n=r(143),s=function(e,t){var r=Object(i.map)(e.facets,(function(){return[]})),s=Object(c.groupItemsBy)(t.selectedFilters,(function(e){return Object(n.c)(e)?e.facetId:"__unknown-facet__"}));return Object.assign(r,s)}},400:function(e,t,r){"use strict";r.r(t),r.d(t,"selectedFilters",(function(){return c}));var c=function(e){return Object.values(e.filters).filter((function(e){return e.selected}))}},402:function(e,t,r){"use strict";r.r(t),r.d(t,"facetsEmitters",(function(){return s}));var c=r(101),i=r(61),n=r(314),s=Object(i.createStoreEmitters)(n.facetsXStoreModule,{SelectedFiltersChanged:{selector:function(e,t){return t.selectedFilters},filter:c.areFiltersDifferent}})},666:function(e,t,r){"use strict";r.r(t);var c=r(16),i=r.n(c),n=r(17),s=r.n(n),o=r(667).default,u=function(e){e&&e("data-v-8b95797a_0",{source:".x-facets-list[data-v-8b95797a] {\n  list-style-type: none;\n}",map:void 0,media:void 0})},a=i()({},u,o,"data-v-8b95797a",void 0,void 0,!1,s.a,void 0,void 0);t.default=a},667:function(e,t,r){"use strict";r.r(t);var c=r(1),i=r(3),n=r(0),s=r(101),o=r(49),u=r(59),a=r(313),f=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.selectedFilters=null,t}return Object(c.__extends)(t,e),Object.defineProperty(t.prototype,"facetsGroup",{get:function(){return{id:this.groupId,facets:this.facets}},enumerable:!1,configurable:!0}),t.prototype.emitSelectedFiltersChanged=function(e){(null===this.selectedFilters||Object(s.areFiltersDifferent)(this.selectedFilters,e))&&this.$x.emit("UserChangedSelectedFilters",e),this.selectedFilters=null},t.prototype.provideFacets=function(){this.facetsGroup.facets&&(this.$x.emit("FacetsGroupProvided",this.facetsGroup),this.extractSelectedFilters(this.facets))},t.prototype.extractSelectedFilters=function(e){this.selectedFilters=e.flatMap((function(e){return e.filters})).filter((function(e){return e.selected}))},t.prototype.render=function(){},Object(c.__decorate)([Object(n.c)({default:"provided-facets"})],t.prototype,"groupId",void 0),Object(c.__decorate)([Object(n.c)({required:!0})],t.prototype,"facets",void 0),Object(c.__decorate)([Object(o.XOn)("SelectedFiltersChanged")],t.prototype,"emitSelectedFiltersChanged",null),Object(c.__decorate)([Object(n.h)("facetsGroup",{immediate:!0})],t.prototype,"provideFacets",null),t=Object(c.__decorate)([Object(n.a)({mixins:[Object(u.xComponentMixin)(a.facetsXModule)]})],t)}(i.default);t.default=f}}]);