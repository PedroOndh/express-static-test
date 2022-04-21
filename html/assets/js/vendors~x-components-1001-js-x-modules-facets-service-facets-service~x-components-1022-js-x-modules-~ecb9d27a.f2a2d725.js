(window.webpackJsonp=window.webpackJsonp||[]).push([[0,189,444,517,518,519,520,521,522,524],{487:function(t,e,r){"use strict";function i(t,e,r){t.state.x.facets.facets[e]||t.commit("x/facets/setFacet",{modelName:r,id:e,label:e})}r.r(e),r.d(e,"addFacetIfNotPresent",(function(){return i}))},564:function(t,e,r){"use strict";r.r(e),r.d(e,"EditableNumberRangeFilterEntity",(function(){return c}));var i=r(1),n=r(143),s=r(487),c=function(){function t(t){this.store=t}return t.accepts=function(t){return Object(n.b)(t)},t.prototype.deselect=function(t){var e=Object(i.__assign)(Object(i.__assign)({},t),{selected:!1,range:{min:null,max:null}});e.id=this.getNewFilterId(e),this.removePreviousFilter(t.facetId),this.store.commit("x/facets/setFilter",e),Object(s.addFacetIfNotPresent)(this.store,t.facetId,"EditableNumberRangeFacet")},t.prototype.select=function(t){var e=this.getNewFilterId(t);this.removePreviousFilter(t.facetId),this.store.commit("x/facets/setFilter",Object(i.__assign)(Object(i.__assign)({},t),{id:e,selected:this.isSelected(t)})),Object(s.addFacetIfNotPresent)(this.store,t.facetId,"EditableNumberRangeFacet")},t.prototype.getNewFilterId=function(t){return t.facetId+":"+String(t.range.min)+"_"+String(t.range.max)},t.prototype.isSelected=function(t){return null!==t.range.min||null!==t.range.max},t.prototype.removePreviousFilter=function(t){var e=this.getFilterByFacet(t);e&&this.store.commit("x/facets/removeFilter",e)},t.prototype.getFilterByFacet=function(t){var e,r;return null===(r=null===(e=this.store.getters["x/facets/facets"][t])||void 0===e?void 0:e.filters)||void 0===r?void 0:r[0]},t}()},565:function(t,e,r){"use strict";r.r(e),r.d(e,"HierarchicalFilterEntity",(function(){return c}));var i=r(1),n=r(143),s=r(487),c=function(){function t(t){this.store=t}return t.prototype.deselect=function(t){this.saveFilter(Object(i.__assign)(Object(i.__assign)({},t),{selected:!1})),this.deselectDescendants(t),Object(s.addFacetIfNotPresent)(this.store,t.facetId,"HierarchicalFacet")},t.prototype.select=function(t){this.saveFilter(Object(i.__assign)(Object(i.__assign)({},t),{selected:!0})),this.selectAncestors(t),Object(s.addFacetIfNotPresent)(this.store,t.facetId,"HierarchicalFacet")},t.prototype.deselectDescendants=function(t){var e=this;t.children&&t.children.forEach((function(t){var r=e.getFilterById(t);r&&(e.saveFilter(Object(i.__assign)(Object(i.__assign)({},r),{selected:!1})),e.deselectDescendants(r))}))},t.prototype.selectAncestors=function(t){if(t.parentId){var e=this.getFilterById(t.parentId);e&&(this.saveFilter(Object(i.__assign)(Object(i.__assign)({},e),{selected:!0})),this.selectAncestors(e))}},t.prototype.getFilterById=function(t){return this.store.state.x.facets.filters[t]},t.prototype.saveFilter=function(t){this.store.commit("x/facets/setFilter",t)},t.accepts=n.d,t}()},566:function(t,e,r){"use strict";r.r(e),r.d(e,"NumberRangeFilterEntity",(function(){return c}));var i=r(1),n=r(143),s=r(487),c=function(){function t(t){this.store=t}return t.prototype.deselect=function(t){this.store.commit("x/facets/setFilter",Object(i.__assign)(Object(i.__assign)({},t),{selected:!1})),Object(s.addFacetIfNotPresent)(this.store,t.facetId,"NumberRangeFacet")},t.prototype.select=function(t){this.store.commit("x/facets/setFilter",Object(i.__assign)(Object(i.__assign)({},t),{selected:!0})),Object(s.addFacetIfNotPresent)(this.store,t.facetId,"NumberRangeFacet")},t.accepts=n.e,t}()},567:function(t,e,r){"use strict";r.r(e),r.d(e,"RawFilterEntity",(function(){return n}));var i=r(143),n=function(){function t(t){this.store=t}return t.prototype.deselect=function(t){this.store.commit("x/facets/removeFilter",t)},t.prototype.select=function(t){this.store.commit("x/facets/setFilter",t)},t.accepts=i.f,t}()},568:function(t,e,r){"use strict";r.r(e),r.d(e,"SimpleFilterEntity",(function(){return c}));var i=r(1),n=r(143),s=r(487),c=function(){function t(t){this.store=t}return t.prototype.deselect=function(t){this.store.commit("x/facets/setFilter",Object(i.__assign)(Object(i.__assign)({},t),{selected:!1})),Object(s.addFacetIfNotPresent)(this.store,t.facetId,"SimpleFacet")},t.prototype.select=function(t){this.store.commit("x/facets/setFilter",Object(i.__assign)(Object(i.__assign)({},t),{selected:!0})),Object(s.addFacetIfNotPresent)(this.store,t.facetId,"SimpleFacet")},t.accepts=n.g,t}()},662:function(t,e,r){"use strict";r.r(e),r.d(e,"FilterEntityFactory",(function(){return u}));var i=r(143),n=r(564),s=r(565),c=r(566),o=r(567),a=r(568),u=function(){function t(){this.entities=[a.SimpleFilterEntity,s.HierarchicalFilterEntity,c.NumberRangeFilterEntity,n.EditableNumberRangeFilterEntity,o.RawFilterEntity],this.modifiers={},this.cache={}}return t.prototype.getFilterEntity=function(t,e){var r,n=Object(i.c)(e)?e.facetId:"__unknown-facet__";return null!==(r=this.cache[n])&&void 0!==r?r:this.cache[n]=this.createFilterEntity(t,e)},t.prototype.createFilterEntity=function(t,e){var r,n=this.entities.find((function(t){return t.accepts(e)}));if(!n)throw new Error("Entity configuration for "+e.modelName+" not registered.");var s=new n(t);return(Object(i.c)(e)&&null!==(r=this.modifiers[e.facetId])&&void 0!==r?r:[]).reduce((function(e,r){return new r(t,e)}),s)},t.prototype.registerFilterEntity=function(t){this.entities.includes(t)||this.entities.push(t)},t.prototype.registerFilterModifier=function(t,e){this.modifiers[t]||(this.modifiers[t]=[]);var r=this.modifiers[t],i=e.filter((function(t){return!r.includes(t)}));r.push.apply(r,i)},t.instance=new t,t}()},745:function(t,e,r){"use strict";r.r(e),r.d(e,"DefaultFacetsService",(function(){return a}));var i=r(1),n=r(96),s=r(37),c=r(143),o=r(662),a=function(){function t(t){void 0===t&&(t=o.FilterEntityFactory.instance),this.filterEntityFactory=t}return Object.defineProperty(t.prototype,"store",{get:function(){return s.XPlugin.store},enumerable:!1,configurable:!0}),t.prototype.setFacets=function(t){var e=this.updateStore(t);this.updateFiltersSelectedState(e)},t.prototype.updateFacets=function(t){var e=this.getSelectedFilters(),r=this.updateStore(t);this.updateFiltersSelectedState(r,e)},t.prototype.clearFilters=function(t){this.getSelectedFilters().filter((function(e){return!t||Object(c.c)(e)&&t.includes(e.facetId)})).forEach(this.deselect.bind(this))},t.prototype.deselect=function(t){this.getFilterEntity(t).deselect(t)},t.prototype.select=function(t){var e=this;(Array.isArray(t)?t:[t]).forEach((function(t){return e.getFilterEntity(t).select(t)}))},t.prototype.toggle=function(t){t.selected?this.deselect(t):this.select(t)},t.prototype.getFilterEntity=function(t){return this.filterEntityFactory.getFilterEntity(this.store,t)},t.prototype.updateStore=function(t){var e=this;this.removeGroupFacets(t.id),this.removeGroupFilters(t.id),t.facets.forEach((function(r){e.setFacetGroup({facetId:r.id,groupId:t.id}),e.setFacet(r)}));var r=t.facets.flatMap((function(t){return t.filters}));return this.setFilters(r),r},t.prototype.getSelectedFilters=function(){return this.store.getters["x/facets/selectedFilters"]},t.prototype.updateFiltersSelectedState=function(t,e){var r=this;if(!Object(n.isArrayEmpty)(t)){var i=Object(n.arrayToObject)(null!=e?e:t,"id");t.forEach((function(t){var e,n=r.getFilterEntity(t);(null===(e=i[t.id])||void 0===e?void 0:e.selected)?n.select(t):n.deselect(t)}))}},t.prototype.removeGroupFilters=function(t){var e,r=this,i=null!==(e=Object(n.groupItemsBy)(Object.values(this.store.state.x.facets.filters),(function(t){return Object(c.c)(t)?r.store.state.x.facets.groups[t.facetId]:"__unknown-group__"}))[t])&&void 0!==e?e:[];return this.removeFilters(i),i},t.prototype.removeGroupFacets=function(t){var e=this,r=Object.values(this.store.state.x.facets.facets).filter((function(r){return e.store.state.x.facets.groups[r.id]===t}));return r.forEach(this.removeFacet.bind(this)),r},t.prototype.setFacetGroup=function(t){this.store.commit("x/facets/setFacetGroup",t)},t.prototype.setFacet=function(t){t.filters;var e=Object(i.__rest)(t,["filters"]);this.store.commit("x/facets/setFacet",e)},t.prototype.removeFacet=function(t){this.store.commit("x/facets/removeFacet",t)},t.prototype.setFilters=function(t){this.store.commit("x/facets/setFilters",t)},t.prototype.removeFilters=function(t){this.store.commit("x/facets/removeFilters",t)},t.instance=new t,t}()},96:function(t,e,r){"use strict";function i(t){return null==t||0===t.length}function n(t,e){return t.reduce((function(t,r){return e?t[r[e]]=r:"string"==typeof r&&(t[r]=r),t}),{})}function s(t,e){return t.reduce((function(t,r,i){var n=e(r,i);return t[n]||(t[n]=[]),t[n].push(r),t}),{})}function c(t,e,r){var i=function(t,n){return void 0===n&&(n=[]),t.reduce((function(t,n){return e(n)&&(t.push(n),i(n[r],t)),t}),n)};return i(t)}function o(t,e){return function t(r,i){return i?Array.isArray(i)?i.reduce(t,r):(r.push(i),t(r,i[e])):r}([],t)}function a(t){var e="function"==typeof t?t:function(e,r){return e[t]===r[t]};return function(t,r){return t.length!==r.length||t.some((function(t){return!r.find((function(r){return e(t,r)}))}))}}r.r(e),r.d(e,"arrayToObject",(function(){return n})),r.d(e,"createEmitterArrayFilter",(function(){return a})),r.d(e,"deepFilter",(function(){return c})),r.d(e,"deepFlat",(function(){return o})),r.d(e,"groupItemsBy",(function(){return s})),r.d(e,"isArrayEmpty",(function(){return i}))}}]);