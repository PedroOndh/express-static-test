(window.webpackJsonp=window.webpackJsonp||[]).push([[1070],{1625:function(t,a,n){"use strict";n.r(a);var s=n(4),e=Object(s.a)({},(function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"use-and-configure-interface-x-components-in-your-project"}},[n("a",{staticClass:"edoc-header-anchor",attrs:{href:"#use-and-configure-interface-x-components-in-your-project"}},[n("div",{staticClass:"edoc-anchor-icon",staticStyle:{content:"url(/assets/icons/anchor-link.svg)"}})]),t._v(" Use and configure Interface X Components in your project")]),t._v(" "),n("p",[t._v("Interface X Components are like building blocks that you pick up and mix to craft your\nsearch UI experiences. The goal of using components is to include only the components you want,\nwherever you want. So, "),n("strong",[t._v("just import the components, register, and go!")])]),t._v(" "),n("p",[t._v("Once you’ve installed the\n"),n("RouterLink",{attrs:{to:"/develop-empathy-platform/build-search-ui/web-x-components-integration-guide.html#1-install-the-dependencies"}},[t._v("dependencies and the xPlugin")]),t._v(",\nyou’re ready to use X Components in your project.")],1),t._v(" "),n("h2",{attrs:{id:"_1-import-and-register-the-x-components"}},[n("a",{staticClass:"edoc-header-anchor",attrs:{href:"#_1-import-and-register-the-x-components"}},[n("div",{staticClass:"edoc-anchor-icon",staticStyle:{content:"url(/assets/icons/anchor-link.svg)"}})]),t._v(" 1. Import and register the X Components")]),t._v(" "),n("p",[t._v("Many of the X Components are distributed into modules to make them easier to manage. So you\nneed to indicate from which module you’re importing each component as appropriate.")]),t._v(" "),n("p",[t._v("For example, the "),n("code",[t._v("search-box")]),t._v(" module contains the "),n("code",[t._v("SearchInput")]),t._v(", "),n("code",[t._v("SearchButton")]),t._v(", and\n"),n("code",[t._v("ClearSearchInput")]),t._v(" components.")]),t._v(" "),n("h3",{attrs:{id:"import-and-register-components-from-a-module"}},[n("a",{staticClass:"edoc-header-anchor",attrs:{href:"#import-and-register-components-from-a-module"}},[n("div",{staticClass:"edoc-anchor-icon",staticStyle:{content:"url(/assets/icons/anchor-link.svg)"}})]),t._v(" Import and register components from a module")]),t._v(" "),n("p",[t._v("When importing the components, you can register each component "),n("strong",[t._v("locally for each Vue instance")]),t._v(" as\nyou go.")]),t._v(" "),n("div",{staticClass:"language-typescript extra-class"},[n("pre",{pre:!0,attrs:{class:"language-typescript"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//Import each component you'd like to use, before you register it.")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" ComponentA "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./Module1'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" ComponentB "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./Module1'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" ComponentC "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./Module1'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//Locally register each component.")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  components"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    ComponentA"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    ComponentB"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    ComponentC\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ...")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//The components are now ready to be used inside your template.")]),t._v("\n")])])]),n("h3",{attrs:{id:"import-and-register-components-globally"}},[n("a",{staticClass:"edoc-header-anchor",attrs:{href:"#import-and-register-components-globally"}},[n("div",{staticClass:"edoc-anchor-icon",staticStyle:{content:"url(/assets/icons/anchor-link.svg)"}})]),t._v(" Import and register components globally")]),t._v(" "),n("p",[t._v("Alternatively, you can "),n("strong",[t._v("globally")]),t._v(" register components in Vue directly in the "),n("code",[t._v("main.js")]),t._v(" file if you\nplan on using a component more than once in your app. By registering the components globally, you\ncan use them in the template of any root Vue instance you create afterwards.")]),t._v(" "),n("p",[t._v("::: develop")]),t._v(" "),n("p",[t._v("Although you can register components globally, it should be done with caution as "),n("strong",[t._v("it may impact\nfuture performance")]),t._v(". Remember if you register the components globally, the entire X Component\nmodule is loaded and registered each time this code line is run.")]),t._v(" "),n("p",[t._v(":::")]),t._v(" "),n("div",{staticClass:"language-typescript extra-class"},[n("pre",{pre:!0,attrs:{class:"language-typescript"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" ComponentA"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" ComponentB"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" ComponentC "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./ModuleA'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\nVue"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("component")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'ComponentAName'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" ComponentA"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nVue"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("component")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'ComponentBName'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" ComponentB"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nVue"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("component")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'ComponentCName'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" ComponentC"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),n("h2",{attrs:{id:"_2-configure-the-x-components"}},[n("a",{staticClass:"edoc-header-anchor",attrs:{href:"#_2-configure-the-x-components"}},[n("div",{staticClass:"edoc-anchor-icon",staticStyle:{content:"url(/assets/icons/anchor-link.svg)"}})]),t._v(" 2. Configure the X Components")]),t._v(" "),n("p",[t._v("You can configure some behaviors for each component to customize the search experience.")]),t._v(" "),n("p",[t._v("To provide different project-specific behaviors, you can use:")]),t._v(" "),n("ul",[n("li",[n("strong",[t._v("Props")]),t._v(": custom attributes to pass data into a component. It modifies the behavior or the\nproperties in a component.")])]),t._v(" "),n("div",{staticClass:"language-vue extra-class"},[n("pre",{pre:!0,attrs:{class:"language-vue"}},[n("code",[t._v("//Configure a component with props.\n"),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("SearchInput")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v(":maxLength")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("5"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v(":autofocus")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("false"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v(":instant")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("true"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v(":instantDebounceInMs")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("1000"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n")])])]),n("ul",[n("li",[n("strong",[t._v("Scoped slots")]),t._v(": a slot exposes data from a child component to create your own custom\nimplementation.")])]),t._v(" "),n("div",{staticClass:"language-vue extra-class"},[n("pre",{pre:!0,attrs:{class:"language-vue"}},[n("code",[t._v("//Configure a component with slots.\n"),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("ClearSearchInput")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("Clear"),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("ClearSearchInput")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),n("p",[t._v("You can pass the configuration attributes documented in the\n"),n("RouterLink",{attrs:{to:"/develop-empathy-platform/ui-reference/"}},[t._v("UI Reference")]),t._v(" for the Interface X Components.")],1),t._v(" "),n("p",[t._v("You can combine components at your ease and use resource modules such as modals, panels, and\nanimations. You can also use base components, i.e. standard Vue components that don’t have any\ndependencies with the X Components. Use them as a foundation to build other components.")]),t._v(" "),n("p",[t._v("Your components are ready to go, but you can provide your search UI with a friendly and fancy style\nand layout. For more information, see\n"),n("a",{attrs:{href:"https://github.com/empathyco/x/blob/main/packages/x-components/contributing/design-system.md",target:"_blank",rel:"noopener noreferrer"}},[t._v("Design tokens"),n("OutboundLink")],1),t._v(".")]),t._v(" "),n("h2",{attrs:{id:"example-using-the-search-box-components"}},[n("a",{staticClass:"edoc-header-anchor",attrs:{href:"#example-using-the-search-box-components"}},[n("div",{staticClass:"edoc-anchor-icon",staticStyle:{content:"url(/assets/icons/anchor-link.svg)"}})]),t._v(" Example: Using the search box components")]),t._v(" "),n("p",[t._v("To build your search UI, you need to provide at least a search field that allows users to input a\nquery. Additionally, you can include a button to trigger the search and a button to delete the input\nquery.")]),t._v(" "),n("p",[t._v("The search-box module contains these components:")]),t._v(" "),n("ul",[n("li",[n("code",[t._v("SearchInput")])]),t._v(" "),n("li",[n("code",[t._v("SearchButton")])]),t._v(" "),n("li",[n("code",[t._v("ClearSearchInput")])])]),t._v(" "),n("p",[t._v("::: interact")]),t._v(" "),n("p",[t._v("Learn more about the\n"),n("RouterLink",{attrs:{to:"/explore-empathy-platform/experience-search-&-discovery/search-box.html"}},[t._v("Search Box UI")])],1),t._v(" "),n("p",[t._v(":::")]),t._v(" "),n("h3",{attrs:{id:"importing-the-components-from-the-search-box-module"}},[n("a",{staticClass:"edoc-header-anchor",attrs:{href:"#importing-the-components-from-the-search-box-module"}},[n("div",{staticClass:"edoc-anchor-icon",staticStyle:{content:"url(/assets/icons/anchor-link.svg)"}})]),t._v(" Importing the components from the search-box module")]),t._v(" "),n("p",[t._v("For this purpose, you need to import the "),n("code",[t._v("SearchInput")]),t._v(", "),n("code",[t._v("SearchButton")]),t._v(", and "),n("code",[t._v("ClearSearchInput")]),t._v("\ncomponents from the "),n("code",[t._v("search-box")]),t._v(" module to the desired app component. Then, register them and\ninclude them in the template.")]),t._v(" "),n("p",[t._v("First, import and locally register the components.")]),t._v(" "),n("div",{staticClass:"language-vue extra-class"},[n("pre",{pre:!0,attrs:{class:"language-vue"}},[n("code",[t._v("//Import the components from the corresponding module.\n"),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("script")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),n("span",{pre:!0,attrs:{class:"token script"}},[n("span",{pre:!0,attrs:{class:"token language-javascript"}},[t._v("\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" SearchInput"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" SearchButton"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" ClearSearchInput "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@empathyco/x-components/search-box'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//Locally register each component.")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("components")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" SearchInput"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" SearchButton"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" ClearSearchInput "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("script")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),n("p",[t._v("Now, you’re ready to start using the component wherever you want in your template.")]),t._v(" "),n("div",{staticClass:"language-vue extra-class"},[n("pre",{pre:!0,attrs:{class:"language-vue"}},[n("code",[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("template")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("SearchInput")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("SearchButton")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("ClearSearchInput")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("template")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),n("h3",{attrs:{id:"configuring-the-searchinput-component"}},[n("a",{staticClass:"edoc-header-anchor",attrs:{href:"#configuring-the-searchinput-component"}},[n("div",{staticClass:"edoc-anchor-icon",staticStyle:{content:"url(/assets/icons/anchor-link.svg)"}})]),t._v(" Configuring the SearchInput component")]),t._v(" "),n("p",[t._v("Next, you want to configure the behavior of the "),n("code",[t._v("SearchInput")]),t._v(" component. Here you use the\n"),n("code",[t._v("maxLength")]),t._v(" prop to limit the maximum length to 20 characters.")]),t._v(" "),n("div",{staticClass:"language-vue extra-class"},[n("pre",{pre:!0,attrs:{class:"language-vue"}},[n("code",[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("SearchInput")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v(":maxLength")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("20"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v(":autofocus")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("false"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v(":instant")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("true"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v(":instantDebounceInMs")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("1000"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v(":autocompleteKeyboardKeys")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("["),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")]),t._v("ArrowDown"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")]),t._v("]"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v(":autocompleteSuggestionsEvent")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")]),t._v("NextQueriesChanged"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n")])])])])}),[],!1,null,null,null);a.default=e.exports}}]);