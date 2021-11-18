(window.webpackJsonp=window.webpackJsonp||[]).push([[81],{2016:function(t,s,e){"use strict";e.r(s);var a=e(3),n=Object(a.a)({},(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"clear-filters"}},[e("a",{staticClass:"edoc-header-anchor",attrs:{href:"#clear-filters"}},[e("div",{staticClass:"edoc-anchor-icon",staticStyle:{content:"url(/assets/icons/anchor-link.svg)"}})]),t._v(" clear-filters")]),t._v(" "),e("p",[t._v("Renders a simple button, emitting the needed events when clicked.")]),t._v(" "),e("h2",{attrs:{id:"props"}},[e("a",{staticClass:"edoc-header-anchor",attrs:{href:"#props"}},[e("div",{staticClass:"edoc-anchor-icon",staticStyle:{content:"url(/assets/icons/anchor-link.svg)"}})]),t._v(" Props")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("Name")]),t._v(" "),e("th",[t._v("Description")]),t._v(" "),e("th",[t._v("Type")]),t._v(" "),e("th",[t._v("Default")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[e("code",[t._v("alwaysVisible")])]),t._v(" "),e("td",[t._v("It handles if the ClearFilters button is always visible no matter if there are not"),e("br"),t._v("filters selected. If false, the ClearFilters button is not visible whether"),e("br"),t._v("there are no filters selected.")]),t._v(" "),e("td",[e("code",[t._v("boolean")])]),t._v(" "),e("td",[e("code",[t._v("false")])])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("facetsIds")])]),t._v(" "),e("td",[t._v("Array of facets ids that will be passed to event like payload.")]),t._v(" "),e("td",[e("code",[t._v("Array")])]),t._v(" "),e("td",[e("code")])])])]),t._v(" "),e("h2",{attrs:{id:"slots"}},[e("a",{staticClass:"edoc-header-anchor",attrs:{href:"#slots"}},[e("div",{staticClass:"edoc-anchor-icon",staticStyle:{content:"url(/assets/icons/anchor-link.svg)"}})]),t._v(" Slots")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("Name")]),t._v(" "),e("th",[t._v("Description")]),t._v(" "),e("th",[t._v("Bindings"),e("br"),t._v("(name - type - description)")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[e("code",[t._v("default")])]),t._v(" "),e("td"),t._v(" "),e("td")])])]),t._v(" "),e("h2",{attrs:{id:"example"}},[e("a",{staticClass:"edoc-header-anchor",attrs:{href:"#example"}},[e("div",{staticClass:"edoc-anchor-icon",staticStyle:{content:"url(/assets/icons/anchor-link.svg)"}})]),t._v(" Example")]),t._v(" "),e("p",[t._v("This component renders a button, which on clicked emits the "),e("code",[t._v("UserClickedClearAllFilters")]),t._v(" or\n"),e("code",[t._v("UserClickedClearAllFilters")]),t._v(" event.")]),t._v(" "),e("h2",{attrs:{id:"basic-usage"}},[e("a",{staticClass:"edoc-header-anchor",attrs:{href:"#basic-usage"}},[e("div",{staticClass:"edoc-anchor-icon",staticStyle:{content:"url(/assets/icons/anchor-link.svg)"}})]),t._v(" Basic usage")]),t._v(" "),e("div",{staticClass:"language-vue extra-class"},[e("pre",{pre:!0,attrs:{class:"language-vue"}},[e("code",[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("ClearFilters")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n")])])]),e("h2",{attrs:{id:"customizing-its-contents"}},[e("a",{staticClass:"edoc-header-anchor",attrs:{href:"#customizing-its-contents"}},[e("div",{staticClass:"edoc-anchor-icon",staticStyle:{content:"url(/assets/icons/anchor-link.svg)"}})]),t._v(" Customizing its contents")]),t._v(" "),e("p",[t._v("In this example, show the custom message in button.")]),t._v(" "),e("div",{staticClass:"language-vue extra-class"},[e("pre",{pre:!0,attrs:{class:"language-vue"}},[e("code",[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("ClearFilters")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("v-slot")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("{ selectedFilters }"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  Delete {{ selectedFilters.length }} selected\n"),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("ClearFilters")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),e("p",[t._v("In this example, show the custom message in button with always visible a true and\nlist of facets ids.")]),t._v(" "),e("div",{staticClass:"language-vue extra-class"},[e("pre",{pre:!0,attrs:{class:"language-vue"}},[e("code",[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("ClearFilters")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("v-slot")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("{ selectedFilters }"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v(":alwaysVisible")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("true"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v(":facetsIds")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("facetsIds"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  Delete {{ selectedFilters.length }} selected\n"),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("ClearFilters")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),e("h2",{attrs:{id:"events"}},[e("a",{staticClass:"edoc-header-anchor",attrs:{href:"#events"}},[e("div",{staticClass:"edoc-anchor-icon",staticStyle:{content:"url(/assets/icons/anchor-link.svg)"}})]),t._v(" Events")]),t._v(" "),e("p",[t._v("A list of events that the component will emit:")]),t._v(" "),e("ul",[e("li",[e("code",[t._v("UserClickedClearAllFilters")]),t._v(": the event is emitted after the user clicks the button to clear a\ncertain facets filter. The event payload is the id of the facets that are going to be cleared.")]),t._v(" "),e("li",[e("code",[t._v("UserClickedClearAllFilters")]),t._v(": the event is emitted after the user clicks the button. The event\npayload is undefined.")])])])}),[],!1,null,null,null);s.default=n.exports}}]);