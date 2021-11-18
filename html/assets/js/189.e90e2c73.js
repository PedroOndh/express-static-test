(window.webpackJsonp=window.webpackJsonp||[]).push([[189],{2116:function(e,t,a){"use strict";a.r(t);var r=a(3),o=Object(r.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"search-box"}},[a("a",{staticClass:"edoc-header-anchor",attrs:{href:"#search-box"}},[a("div",{staticClass:"edoc-anchor-icon",staticStyle:{content:"url(/assets/icons/anchor-link.svg)"}})]),e._v(" Search Box")]),e._v(" "),a("blockquote",[a("p",[e._v("The front door to your shopping experience")])]),e._v(" "),a("p",[e._v("The Search Box is the main entry point for search where shoppers can type what they're looking for in your store. In short, the Search Box opens a line of communication between your shoppers and the search engine.")]),e._v(" "),a("p",[a("img",{attrs:{src:e.$withBase("/assets/media/overview_searchbox.png"),alt:"Search Box"}}),e._v(" "),a("br")]),e._v(" "),a("p",[e._v("But it’s more than just a simple field, it can be populated with "),a("strong",[e._v("suggestions and recommendations")]),e._v(". For example, if a shopper selects a query suggestion, the query is instantly updated in the input field to the selected suggestion and the search is launched.")]),e._v(" "),a("p",[e._v("Usually the Search Box includes a search button to launch the search. However, there are other ways to start a search without using that button to submit the query. You can also implement "),a("strong",[e._v("instant search")]),e._v(" so that the search process is submitted automatically after a given time if the shopper pauses while typing the query. Although this mechanism minimizes human action and speeds up the search, there’s still a lot of people that feel more comfortable in pressing the search button to start the search process.")]),e._v(" "),a("p",[e._v("Furthermore, the Search Box has become paramount in the context of commerce search. It’s a vital source of "),a("strong",[e._v("information about shoppers and queries")]),e._v(", as shoppers enter their intent directly in the Search Box. Gather query-related data from the Search Box and create search experiences according to your shoppers’ preferences and intent, while obtaining useful statistics and insights.")]),e._v(" "),a("h2",{attrs:{id:"spot-the-difference"}},[a("a",{staticClass:"edoc-header-anchor",attrs:{href:"#spot-the-difference"}},[a("div",{staticClass:"edoc-anchor-icon",staticStyle:{content:"url(/assets/icons/anchor-link.svg)"}})]),e._v(" Spot the difference")]),e._v(" "),a("p",[e._v("The Search Box is generally recognized, especially in the context of search. But are you sure you know what the term "),a("em",[e._v("search box")]),e._v(" refers to? Some may call it the "),a("em",[e._v("search bar")]),e._v(", "),a("em",[e._v("search field")]),e._v(", "),a("em",[e._v("input field")]),e._v(", or even "),a("em",[e._v("input search")]),e._v("…")]),e._v(" "),a("p",[e._v("Definitely, there are lots of terms you can use. So, let’s dot the i’s and cross the t’s: the text-field or bar that allows you to type a search term is what we specifically call the "),a("strong",[e._v("input field")]),e._v(" (A). This field can be combined together with a "),a("strong",[e._v("search button")]),e._v(" (B) to trigger the search, and a "),a("strong",[e._v("clear icon or button")]),e._v(" (C) to delete the search term query entered in the input field. So when we’re talking about the search box (D), we’re referring to the whole set of elements: the input field, the search button, and the clear button.")]),e._v(" "),a("img",{attrs:{src:e.$withBase("/assets/media/xcomponents_func_searchbox_elements.svg"),alt:"Parts of the search box"}}),e._v(" "),a("FootNote",[a("p",[e._v("Parts in a search box - (A) Input field, (B) Search button, and (C) Clear icon or button")])]),e._v(" "),a("br"),e._v(" "),a("h2",{attrs:{id:"placement-matters"}},[a("a",{staticClass:"edoc-header-anchor",attrs:{href:"#placement-matters"}},[a("div",{staticClass:"edoc-anchor-icon",staticStyle:{content:"url(/assets/icons/anchor-link.svg)"}})]),e._v(" Placement matters")]),e._v(" "),a("p",[e._v("You can place the Search Box wherever you want. However, its location matters. As the Search Box links your shoppers with your product catalogue, it deserves a prime location that is easy to find for a maximum impact and usage. Imagine your shoppers having to search for the tool that allows them to search for?!")]),e._v(" "),a("p",[e._v("UX research indicates that the Search Box should be placed towards the "),a("strong",[e._v("top centre")]),e._v(" or "),a("strong",[e._v("top right")]),e._v(" of the page where users can easily find it, highlighting the importance and value of search. Instead of using a huge and prominent search box, you can also position a relatively small search box where most shoppers expect to find it, and then expand it in a dedicated layer over your commerce website to create an immersive search experience when your shoppers use it.")]),e._v(" "),a("h2",{attrs:{id:"try-search-box-to"}},[a("a",{staticClass:"edoc-header-anchor",attrs:{href:"#try-search-box-to"}},[a("div",{staticClass:"edoc-anchor-icon",staticStyle:{content:"url(/assets/icons/anchor-link.svg)"}})]),e._v(" Try Search Box to...")]),e._v(" "),a("ul",[a("li",[e._v("Offer your shoppers a faster way to find the product they are looking for.")]),e._v(" "),a("li",[e._v("Provide an alternative way to discover your product catalogue rather than the product navigation tree.")]),e._v(" "),a("li",[e._v("Track the queries performed in your shop to anticipate your shoppers’ intent and create shopping experiences adapted to your shoppers’ needs.")])]),e._v(" "),a("h2",{attrs:{id:"the-inner-workings-of-search-box"}},[a("a",{staticClass:"edoc-header-anchor",attrs:{href:"#the-inner-workings-of-search-box"}},[a("div",{staticClass:"edoc-anchor-icon",staticStyle:{content:"url(/assets/icons/anchor-link.svg)"}})]),e._v(" The inner workings of Search Box")]),e._v(" "),a("p",[e._v("The Search Box is the starting point for the search. It launches the search process, submitting the query to an index of products to retrieve the best matches.")]),e._v(" "),a("p",[e._v("But it is also an input point of information. Most of the behavioral information collected from the search UI by the "),a("RouterLink",{attrs:{to:"/explore-empathy-platform/capture-shopper-interaction/"}},[e._v("Tagging microservices")]),e._v(" comes from the Search Box. Any query launched is transformed into raw data by the Tagging microservices. This raw data is analyzed and refined to generate useful suggestions and recommendations to enhance your shoppers’ experience. What’s more, the data can be used to generate insights and statistical reports, allowing you to make important decisions about search configuration and management.")],1),e._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[e._v("warning")]),e._v(" "),a("p",[e._v("For a correct performance, make sure that your current search service supports this type of feature.")])]),e._v(" "),a("div",{staticClass:"custom-block interact"},[a("p",{staticClass:"custom-block-title"},[e._v("interact")]),e._v(" "),a("p",[e._v("Explore the "),a("RouterLink",{attrs:{to:"/explore-empathy-platform/diagram/interface/search-box.html"}},[e._v("interactive map")]),e._v(" to see how the Search Box relates to the other Empathy Platform features and microservices.")],1)])],1)}),[],!1,null,null,null);t.default=o.exports}}]);