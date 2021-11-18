(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{1948:function(t,e,a){"use strict";a.r(e);var s=a(3),n=Object(s.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"integrate-interface-x-components-in-your-vue-application"}},[a("a",{staticClass:"edoc-header-anchor",attrs:{href:"#integrate-interface-x-components-in-your-vue-application"}},[a("div",{staticClass:"edoc-anchor-icon",staticStyle:{content:"url(/assets/icons/anchor-link.svg)"}})]),t._v(" Integrate Interface X Components in your Vue application")]),t._v(" "),a("p",[t._v("In this tutorial, you’ll learn the basics to integrate the Interface X Components library in your own project to craft enticing Vue search experiences for your shop in a matter of minutes.")]),t._v(" "),a("div",{staticClass:"custom-block interact"},[a("p",{staticClass:"custom-block-title"},[t._v("interact")]),t._v(" "),a("p",[t._v("If you are looking to use the ready-to-go project Interface X Archetype as your starting point, see "),a("strong",[a("RouterLink",{attrs:{to:"/develop-empathy-platform/build-search-ui/web-archetype-integration-guide.html"}},[t._v("Integrate Interface X Archetype project")])],1),t._v(".")])]),t._v(" "),a("p",[t._v("For this tutorial, the Empathy Search API is used, but you can use any search API. This step-by-step guide requires a knowledge of "),a("strong",[t._v("JavaScript")]),t._v(" and "),a("strong",[t._v("Vue.js")]),t._v(".")]),t._v(" "),a("p",[t._v("You can find the X Components library in the "),a("a",{attrs:{href:"https://github.com/empathyco/x",target:"_blank",rel:"noopener noreferrer"}},[t._v("Interface X open source project in GitHub"),a("OutboundLink")],1),t._v(".")]),t._v(" "),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[t._v("Before you begin")]),t._v(" "),a("p",[t._v("To integrate the X Components in a frontend UI, you need:")]),t._v(" "),a("br"),t._v(" "),a("ul",[a("li",[a("strong",[t._v("Empathy Search API")]),t._v(" to retrieve search data (or any other search API)")]),t._v(" "),a("li",[t._v("A "),a("strong",[t._v("search adapter")]),t._v(" to communicate with the search API. You can use the Empathy Adapter and configure it with the "),a("code",[t._v("EmpathyAdapterBuilder")])])])]),t._v(" "),a("h5",{attrs:{id:"steps-to-integrate-the-x-components-in-your-project"}},[a("a",{staticClass:"edoc-header-anchor",attrs:{href:"#steps-to-integrate-the-x-components-in-your-project"}},[a("div",{staticClass:"edoc-anchor-icon",staticStyle:{content:"url(/assets/icons/anchor-link.svg)"}})]),t._v(" Steps to integrate the X Components in your project:")]),t._v(" "),a("ol",[a("li",[t._v("Install "),a("strong",[t._v("project dependencies")]),t._v(".")]),t._v(" "),a("li",[t._v("Configure the "),a("strong",[t._v("search adapter")]),t._v(".")]),t._v(" "),a("li",[t._v("Configure the "),a("strong",[t._v("xPlugin")]),t._v(".")]),t._v(" "),a("li",[t._v("Install and "),a("strong",[t._v("initialize the xPlugin")]),t._v(".")])]),t._v(" "),a("h2",{attrs:{id:"_1-install-the-dependencies"}},[a("a",{staticClass:"edoc-header-anchor",attrs:{href:"#_1-install-the-dependencies"}},[a("div",{staticClass:"edoc-anchor-icon",staticStyle:{content:"url(/assets/icons/anchor-link.svg)"}})]),t._v(" 1. Install the dependencies")]),t._v(" "),a("p",[t._v("To build your search and discovery UI, the following project dependencies are required:")]),t._v(" "),a("ul",[a("li",[a("p",[a("strong",[t._v("x-components")]),t._v(" library ("),a("a",{attrs:{href:"https://github.com/empathyco/x/tree/main/packages/x-components",target:"_blank",rel:"noopener noreferrer"}},[a("code",[t._v("@empathyco/x-components")]),a("OutboundLink")],1),t._v("): Interface X Components Vue.js library to implement out-of-the-box search UI components in a couple of minutes.")])]),t._v(" "),a("li",[a("p",[a("strong",[t._v("x-adapter")]),t._v(" ("),a("a",{attrs:{href:"https://github.com/empathyco/x/tree/main/packages/search-adapter",target:"_blank",rel:"noopener noreferrer"}},[a("code",[t._v("@empathyco/x-adapter")]),a("OutboundLink")],1),t._v("): A search adapter connector that tells the app how to communicate with the Empathy Search API you’re using, translating the response into understandable information for X Components. If you are not using the Empathy Search API, you need to build your own search adapter.")])]),t._v(" "),a("li",[a("p",[a("strong",[t._v("x-types")]),t._v(" ("),a("a",{attrs:{href:"https://github.com/empathyco/x/tree/main/packages/search-types",target:"_blank",rel:"noopener noreferrer"}},[a("code",[t._v("@empathyco/x-types")]),a("OutboundLink")],1),t._v("): The data model used in the X Components to define types.")])]),t._v(" "),a("li",[a("p",[a("strong",[t._v("reflect-metadata")]),t._v(": Polyfill that allows the internal decorators of X Components to be used. This is only required if you use the Empathy search adapter ("),a("code",[t._v("x-adapter")]),t._v(").")])])]),t._v(" "),a("p",[t._v("Install the project dependencies via "),a("code",[t._v("npm")]),t._v(" as follows:")]),t._v(" "),a("div",{staticClass:"language-batch extra-class"},[a("pre",{pre:!0,attrs:{class:"language-batch"}},[a("code",[t._v("//Install the dependencies via npm.\n"),a("span",{pre:!0,attrs:{class:"token command"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("npm")]),t._v(" install "),a("span",{pre:!0,attrs:{class:"token parameter attr-name"}},[t._v("--save")]),t._v(" @empathyco/x-components @empathyco/x-types @empathy/x-adapter reflect-metadata")]),t._v("\n")])])]),a("h2",{attrs:{id:"_2-configure-the-search-adapter"}},[a("a",{staticClass:"edoc-header-anchor",attrs:{href:"#_2-configure-the-search-adapter"}},[a("div",{staticClass:"edoc-anchor-icon",staticStyle:{content:"url(/assets/icons/anchor-link.svg)"}})]),t._v(" 2. Configure the search adapter")]),t._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[t._v("warning")]),t._v(" "),a("p",[t._v("If you are using the Empathy search API and the Empathy Search Adapter ("),a("code",[t._v("x-adapter")]),t._v("), make sure you have imported the "),a("code",[t._v("reflect-metadata")]),t._v(" polyfill before executing any code of the search adapter.")])]),t._v(" "),a("p",[t._v("Next, construct the search adapter. You will need the search adapter in the "),a("a",{attrs:{href:"#_3-configure-the-xplugin"}},[t._v("xPlugin configuration")]),t._v(".")]),t._v(" "),a("p",[t._v("Empathy Search Adapter is a library for making it easier to consume search APIs. The project contains two main parts: an "),a("strong",[t._v("implementation")]),t._v(" to consume the Empathy Search API, and an "),a("strong",[t._v("interface")]),t._v(" that you can use to build your own adapter for other APIs.")]),t._v(" "),a("p",[t._v("It contains a specific builder that helps you to configure the Empathy Search Adapter. If you are using Empathy Search API, you need to only configure the values for "),a("code",[t._v("instance")]),t._v(", "),a("code",[t._v("language")]),t._v(", "),a("code",[t._v("scope")]),t._v(", and "),a("code",[t._v("endpoint")]),t._v(" properties in the "),a("code",[t._v("empathy-adapter.config.ts")]),t._v(" file.")]),t._v(" "),a("div",{staticClass:"language-typescript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-typescript"}},[a("code",[t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Import the search adapter and metadata")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'reflect-metadata'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" EmpathyAdapterBuilder "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@empathyco/x-adapter'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n \n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Construct the EmpathyAdapterBuilder")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" adapter "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("EmpathyAdapterBuilder")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("withConfiguration")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("instance"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'my-instance-id'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setLang")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'es'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setScope")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'demo'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setFeatureConfig")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'search'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" endpoint"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'http://my-search-API-url'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("build")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[t._v("warning")]),t._v(" "),a("p",[t._v("If you do not use the Empathy Search API, you need to build your own adapter.")])]),t._v(" "),a("p",[t._v("For more information, see "),a("a",{attrs:{href:"https://github.com/empathyco/x/tree/main/packages/search-adapter",target:"_blank",rel:"noopener noreferrer"}},[t._v("Using the Empathy Search Adapter"),a("OutboundLink")],1),t._v(".")]),t._v(" "),a("h2",{attrs:{id:"_3-configure-the-plugin"}},[a("a",{staticClass:"edoc-header-anchor",attrs:{href:"#_3-configure-the-plugin"}},[a("div",{staticClass:"edoc-anchor-icon",staticStyle:{content:"url(/assets/icons/anchor-link.svg)"}})]),t._v(" 3. Configure the plugin")]),t._v(" "),a("p",[t._v("Plugins are self-contained code that usually add global-level functionality to Vue projects. They’re specifically objects that expose an "),a("code",[t._v("install")]),t._v(" method, allowing you to keep your components clear and small.")]),t._v(" "),a("p",[t._v("The xPlugin is designed to connect the X Components to the Vue components in your project.")]),t._v(" "),a("p",[a("strong",[t._v("Import")]),t._v(" the xPlugin in your Vue instance.")]),t._v(" "),a("div",{staticClass:"language-typescript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-typescript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" Vue "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"vue"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" xPlugin "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"@empathyco/x-components"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" adapter "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"./my-adapter"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" store "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"./my-store"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n")])])]),a("p",[t._v("Then, "),a("strong",[t._v("configure")]),t._v(" the xPlugin. It has two key options you need to configure:")]),t._v(" "),a("ol",[a("li",[a("strong",[t._v("Adapter")]),t._v(": A search adapter is required to connect and communicate with the search API. Here you’re using the "),a("code",[t._v("EmpathyAdapterBuilder")]),t._v(" to communicate specifically with the Empathy Search API. If you are not using the Empathy Search API, you need to build your own adapter. See "),a("a",{attrs:{href:"#_2-configure-the-search-adapter"}},[t._v("Configure the search adapter")]),t._v(".")])]),t._v(" "),a("div",{staticClass:"custom-block develop"},[a("p",{staticClass:"custom-block-title"},[t._v("coding tip")]),t._v(" "),a("p",[t._v("When using your own adapter, remember to configure the "),a("code",[t._v("instance")]),t._v(", "),a("code",[t._v("language")]),t._v(", "),a("code",[t._v("scope")]),t._v(", and "),a("code",[t._v("endpoint")]),t._v(" methods.")])]),t._v(" "),a("ol",{attrs:{start:"2"}},[a("li",[a("strong",[t._v("Store")]),t._v(": The Vuex store. If you use a store for Vuex, you need to provide the store you’re currently using for your project to the Vue instance.")])]),t._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[t._v("warning")]),t._v(" "),a("p",[t._v("If you don’t provide any parameters for the "),a("code",[t._v("store")]),t._v(", a default store is created automatically. Leave the "),a("code",[t._v("store")]),t._v(" blank "),a("strong",[t._v("only if you’re not using any store")]),t._v(" for Vuex.")])]),t._v(" "),a("h2",{attrs:{id:"_4-install-and-initialize-the-plugin"}},[a("a",{staticClass:"edoc-header-anchor",attrs:{href:"#_4-install-and-initialize-the-plugin"}},[a("div",{staticClass:"edoc-anchor-icon",staticStyle:{content:"url(/assets/icons/anchor-link.svg)"}})]),t._v(" 4. Install and initialize the plugin")]),t._v(" "),a("p",[t._v("Finally, the last step is to install and initialize the xPlugin. You need to do this in the "),a("code",[t._v("main.ts")]),t._v(" or "),a("code",[t._v("main.js file")]),t._v(" of the project.")]),t._v(" "),a("div",{staticClass:"language-typescript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-typescript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//Initialize the plugin. Pass the search adapter and the store you use as parameters.")]),t._v("\nVue"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("use")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("xPlugin"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" adapter"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" store "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("hr"),t._v(" "),a("h3",{attrs:{id:"next-steps"}},[a("a",{staticClass:"edoc-header-anchor",attrs:{href:"#next-steps"}},[a("div",{staticClass:"edoc-anchor-icon",staticStyle:{content:"url(/assets/icons/anchor-link.svg)"}})]),t._v(" Next steps")]),t._v(" "),a("p",[t._v("Watch how our frontend Team Lead, "),a("a",{attrs:{href:"https://github.com/tajespasarela",target:"_blank",rel:"noopener noreferrer"}},[t._v("Iván Tajes"),a("OutboundLink")],1),t._v(", integrates the Interface X Components in a project from scratch.")]),t._v(" "),a("VideoContent",{attrs:{title:"Want to learn more?",source:"/assets/media/videos/How-to-use-X-components-in-a-real-project.mp4",poster:"/assets/media/videos/How-to-use-X-components-in-a-real-project.jpeg",links:[{title:"Architecture",path:"/develop-empathy-platform/build-search-ui/x-architecture/"},{title:"UI reference",path:"/develop-empathy-platform/ui-reference/"}]}},[a("p",[t._v("Once you have integrated the Interface X Components in your project, you're ready to start building your search and discovery UI:")]),t._v(" "),a("ul",[a("li",[t._v("Change the configuration of the "),a("RouterLink",{attrs:{to:"/develop-empathy-platform/build-search-ui/web-use-x-components-guide.html"}},[t._v("X Components")]),t._v(" or create new ones.")],1),t._v(" "),a("li",[t._v("Adapt the "),a("a",{attrs:{href:"https://github.com/empathyco/x/blob/main/packages/x-components/contributing/design-system.md",target:"_blank",rel:"noopener noreferrer"}},[t._v("design system"),a("OutboundLink")],1),t._v(" to your branding.")])])])],1)}),[],!1,null,null,null);e.default=n.exports}}]);