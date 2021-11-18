(window.webpackJsonp=window.webpackJsonp||[]).push([[187],{2114:function(e,t,r){"use strict";r.r(t);var s=r(3),a=Object(s.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"product-scoring"}},[r("a",{staticClass:"edoc-header-anchor",attrs:{href:"#product-scoring"}},[r("div",{staticClass:"edoc-anchor-icon",staticStyle:{content:"url(/assets/icons/anchor-link.svg)"}})]),e._v(" Product scoring")]),e._v(" "),r("blockquote",[r("p",[e._v("How products are ranked in the results")])]),e._v(" "),r("p",[e._v("The order in which products are ranked in the search engine results page (SERP) or in the product listing page (PLP) is not random. Products are ranked internally by calculating a product score. Product scores are used by the search engine to order the product results.")]),e._v(" "),r("p",[e._v("Every time a shopper performs a search using a specific query, points are calculated for the product based on three key aspects:")]),e._v(" "),r("ul",[r("li",[r("strong",[e._v("Textual relevance")]),e._v(": the importance of the product attribute where the search term was found. The weighting of the product attribute is determined by "),r("RouterLink",{attrs:{to:"/explore-empathy-platform/search-features/equalize-overview.html"}},[e._v("Equalize")]),e._v(".")],1),e._v(" "),r("li",[r("strong",[e._v("Business rules")]),e._v(":  specific business rules that the product meets if there are any defined, e.g. product or attribute ranking rules that boost the product to the top or bottom of the results.")]),e._v(" "),r("li",[r("strong",[e._v("Context")]),e._v(": where Contextualize is used, the products and product types that shoppers has interacted with.")])]),e._v(" "),r("p",[e._v("Business rule points and context points are associated with the product itself, while textual relevance points are associated with the fields defined as searchable fields in the product catalogue index.")]),e._v(" "),r("p",[r("img",{attrs:{src:"/assets/media/ProductScoring_overview.svg",alt:"Product Scoring"}})]),e._v(" "),r("div",{staticClass:"custom-block note"},[r("p",{staticClass:"custom-block-title"},[e._v("notes")]),e._v(" "),r("p",[e._v("If you have set up specific business rules for your implementation, any points resulting from this search customization are reflected as a "),r("strong",[e._v("custom score")]),e._v(" and added to the overall product score.")])]),e._v(" "),r("p",[e._v("The points for each aspect are added up to give the product’s overall score:")]),e._v(" "),r("p",[r("strong",[e._v("Textual relevance points + Business rules points + Context points = Product’s overall score")])]),e._v(" "),r("p",[e._v("The products are then ranked in order using the overall score, from highest to lowest. Where there are more than one product with the same overall score, "),r("strong",[r("a",{attrs:{href:"#tie-breakers"}},[e._v("tie-breakers")])]),e._v(" are used as a secondary criterion to break any ties between identical or similar products.")]),e._v(" "),r("h2",{attrs:{id:"textual-relevance"}},[r("a",{staticClass:"edoc-header-anchor",attrs:{href:"#textual-relevance"}},[r("div",{staticClass:"edoc-anchor-icon",staticStyle:{content:"url(/assets/icons/anchor-link.svg)"}})]),e._v(" Textual relevance")]),e._v(" "),r("p",[e._v("Textual relevance calculates points for the product for each search term in a query that "),r("strong",[e._v("matches a word found in a product catalogue field")]),e._v(". In other words, it determines the product's organic position within the results based on exact matching with the search query.\nTextual relevance is associated with the "),r("strong",[e._v("catalogue definition")]),e._v(" and the fields that have been determined as "),r("strong",[e._v("searchable fields")]),e._v(", i.e. feed fields that have been indexed and indicated as searchable by the search engine during the indexing process. The search engine looks in these fields to find words that match the search term or terms. The importance and the weighting of the field in the calculation is determined by "),r("RouterLink",{attrs:{to:"/explore-empathy-platform/search-features/equalize-overview.html"}},[e._v("Equalize")]),e._v(".")],1),e._v(" "),r("p",[e._v("For example, if a search query contains more than one search term, it adds up the different points for each term found in any of the fields to determine the overall textual relevance points for the product.")]),e._v(" "),r("p",[e._v("If the search term appears in more than one field, only the field with the highest weighing in Equalize determines the points for that search term; it does not add up the points for each field where the term is present.")]),e._v(" "),r("p",[e._v("With broad search terms, i.e. T-shirt or milk, the number of product score ties resulting from textual relevance points is very high; therefore, the search engine uses business rules, context and tie-breakers to break any ties.")]),e._v(" "),r("details",{staticClass:"custom-block details"},[r("summary",[r("b",[e._v("Calculating textual relevance points")])]),e._v(" "),r("p",[e._v("To make it easier to understand, here is an example of how the points for textual relevance are calculated. In this example, points are referred to as being similar to values in the Equalize; however, in reality, the points usually contain decimals and are between 0 and 2.")]),e._v(" "),r("p",[e._v("Textual relevance fields should have a weighting of between 8 to 10 in Equalize for best performance.")]),e._v(" "),r("p",[e._v("If the configuration of the product attribute weighting in Equalize is that shown in the table:")]),e._v(" "),r("table",[r("thead",[r("tr",[r("th",[e._v("Field")]),e._v(" "),r("th",[e._v("Weight")])])]),e._v(" "),r("tbody",[r("tr",[r("td",[e._v("Name")]),e._v(" "),r("td",[e._v("10")])]),e._v(" "),r("tr",[r("td",[e._v("Reference")]),e._v(" "),r("td",[e._v("5")])]),e._v(" "),r("tr",[r("td",[e._v("Color")]),e._v(" "),r("td",[e._v("1")])]),e._v(" "),r("tr",[r("td",[e._v("RootCategories")]),e._v(" "),r("td",[e._v("1")])])])]),e._v(" "),r("p",[r("strong",[e._v("Example 1: Single term present in one field")]),e._v("\nA shopper searches for the term “T-shirt”. The term is found in the fields:")]),e._v(" "),r("table",[r("thead",[r("tr",[r("th",[e._v("Item")]),e._v(" "),r("th",[e._v("Field")])])]),e._v(" "),r("tbody",[r("tr",[r("td",[e._v("Product A")]),e._v(" "),r("td",[e._v("Reference")])]),e._v(" "),r("tr",[r("td",[e._v("Product B")]),e._v(" "),r("td",[e._v("RootCategories")])]),e._v(" "),r("tr",[r("td",[e._v("Product C")]),e._v(" "),r("td",[e._v("Name")])])])]),e._v(" "),r("p",[e._v("The products are ordered as first Product C, then Product A, and finally Product B.\n"),r("img",{attrs:{src:"/assets/media/ProductScoring_TextualRelevance_single.svg",alt:"Textual relevance for single term"}})]),e._v(" "),r("p",[r("strong",[e._v("Example 2: Single term present in multiple fields")]),r("br"),e._v("\nA shopper searches for the term “T-shirt”. The term is found in the fields:")]),e._v(" "),r("table",[r("thead",[r("tr",[r("th",[e._v("Item")]),e._v(" "),r("th",[e._v("Field")])])]),e._v(" "),r("tbody",[r("tr",[r("td",[e._v("Product A")]),e._v(" "),r("td",[e._v("Name "),r("br"),e._v(" Reference")])]),e._v(" "),r("tr",[r("td",[e._v("Product B")]),e._v(" "),r("td",[e._v("Reference")])]),e._v(" "),r("tr",[r("td",[e._v("Product C")]),e._v(" "),r("td",[e._v("RootCategories")])]),e._v(" "),r("tr",[r("td",[e._v("Product D")]),e._v(" "),r("td",[e._v("Name "),r("br"),e._v(" Reference "),r("br"),e._v(" RootCategories")])])])]),e._v(" "),r("p",[e._v("The points for each product are:")]),e._v(" "),r("table",[r("thead",[r("tr",[r("th",[e._v("Product")]),e._v(" "),r("th",[e._v("Score")])])]),e._v(" "),r("tbody",[r("tr",[r("td",[e._v("Product A")]),e._v(" "),r("td",[e._v("10")])]),e._v(" "),r("tr",[r("td",[e._v("Product B")]),e._v(" "),r("td",[e._v("5")])]),e._v(" "),r("tr",[r("td",[e._v("Product C")]),e._v(" "),r("td",[e._v("1")])]),e._v(" "),r("tr",[r("td",[e._v("Product D")]),e._v(" "),r("td",[e._v("10")])])])]),e._v(" "),r("p",[e._v("In this case, a tie-break occurs between Product A and D, however usually it is resolved by context or business rules. Product B is listed third, and finally, Product C.\n"),r("img",{attrs:{src:"/assets/media/ProductScoring_TextualRelevance_multiple.svg",alt:"Textual relevance for multiple matches"}})]),e._v(" "),r("p",[r("strong",[e._v("Example 3: Multiple terms found in one or more fields")]),r("br"),e._v("\nA shopper searches for the terms “graphic” and “T-shirt”:")]),e._v(" "),r("table",[r("thead",[r("tr",[r("th",[e._v("Item")]),e._v(" "),r("th",[e._v("Term")]),e._v(" "),r("th",[e._v("Field")])])]),e._v(" "),r("tbody",[r("tr",[r("td",[e._v("Product A")]),e._v(" "),r("td",[e._v("T-shirt"),r("br"),r("br"),r("br"),e._v(" Graphic")]),e._v(" "),r("td",[e._v("Name "),r("br"),e._v(" Reference"),r("br"),r("br"),e._v("Reference")])]),e._v(" "),r("tr",[r("td",[e._v("Product B")]),e._v(" "),r("td",[e._v("T-shirt"),r("br"),r("br"),e._v("Graphic")]),e._v(" "),r("td",[e._v("Reference"),r("br"),r("br"),e._v("Reference")])]),e._v(" "),r("tr",[r("td",[e._v("Product C")]),e._v(" "),r("td",[e._v("T-shirt")]),e._v(" "),r("td",[e._v("RootCategories")])]),e._v(" "),r("tr",[r("td",[e._v("Product D")]),e._v(" "),r("td",[e._v("T-shirt")]),e._v(" "),r("td",[e._v("Name  "),r("br"),e._v(" Reference "),r("br"),e._v(" RootCategories")])])])]),e._v(" "),r("p",[e._v("The scores for each product are:")]),e._v(" "),r("table",[r("thead",[r("tr",[r("th",[e._v("Product")]),e._v(" "),r("th",[e._v("Score")])])]),e._v(" "),r("tbody",[r("tr",[r("td",[e._v("Product A")]),e._v(" "),r("td",[e._v("10 + 10 = 20")])]),e._v(" "),r("tr",[r("td",[e._v("Product B")]),e._v(" "),r("td",[e._v("5 + 5 = 10")])]),e._v(" "),r("tr",[r("td",[e._v("Product C")]),e._v(" "),r("td",[e._v("1")])]),e._v(" "),r("tr",[r("td",[e._v("Product D")]),e._v(" "),r("td",[e._v("10")])])])]),e._v(" "),r("p",[e._v("In this case, Product A is listed in the first position. Although, Product D and Product B have the same textual score, Product D is listed next since the T-shirt term is found in the Name field, which has a higher relevancy.\n"),r("img",{attrs:{src:"/assets/media/ProductScoring_TextRelmultipleQueriesMatches.svg",alt:"Textual relevance for multiple term match"}})])]),e._v(" "),r("h2",{attrs:{id:"business-rules"}},[r("a",{staticClass:"edoc-header-anchor",attrs:{href:"#business-rules"}},[r("div",{staticClass:"edoc-anchor-icon",staticStyle:{content:"url(/assets/icons/anchor-link.svg)"}})]),e._v(" Business rules")]),e._v(" "),r("p",[e._v("The business rules aspect covers additional points that are added to the product’s score to cover "),r("strong",[e._v("business rule scenarios")]),e._v(" that the product meets.")]),e._v(" "),r("p",[e._v("When shoppers perform a search, after calculating the textual relevance points for the products that contain the search term, the search engine checks to see whether the products meet any business rules and the value assigned in Equalize. These additional points are added to the product’s overall score. If the product does not comply with any of the business rules, no additional points are added.")]),e._v(" "),r("p",[e._v("Business rule points are only added to those "),r("strong",[e._v("products that contain the searched term")]),e._v(" in one of the searchable fields of the product catalogue index. Therefore, the products are always those that are relevant to a given search query; the business rule points are only used to lift those products that meet the business rule criteria. For example, if you search for “T-shirt”, “trousers” results do not appear even though they may comply with the business rules established, as they were not included initially in the results set for the search.")]),e._v(" "),r("p",[e._v("Business rule points are associated with business logic: "),r("strong",[e._v("product and attribute ranking")]),e._v(" business rules for a specific product or group of products.\n")]),e._v(" "),r("p",[e._v("Products are boosted or buried in the SERP or the PLP using product and attribute ranking business rules. For more information on how boosting or burying products affects the product score, see "),r("strong",[r("RouterLink",{attrs:{to:"/explore-empathy-platform/search-features/product-ranking-overview.html#the-inner-working-of-product-ranking"}},[e._v("Product Ranking")])],1),e._v(". For groups of products with boosted product attributes, see "),r("strong",[r("RouterLink",{attrs:{to:"/explore-empathy-platform/search-features/attribute-ranking-overview.html"}},[e._v("Attribute Ranking")])],1),e._v(".")]),e._v(" "),r("h2",{attrs:{id:"context"}},[r("a",{staticClass:"edoc-header-anchor",attrs:{href:"#context"}},[r("div",{staticClass:"edoc-anchor-icon",staticStyle:{content:"url(/assets/icons/anchor-link.svg)"}})]),e._v(" Context")]),e._v(" "),r("p",[e._v("The context aspect determines the dynamic relevancy of the product. It calculates the additional points to be included in the overall score for products with which shoppers have had some type of interaction in the previous days, whether they are specific products or products with similar attributes. These wisdom of the crowd interactions are used to give an extra boost to products. If context is not enabled, then no additional points are added in the overall score.")]),e._v(" "),r("p",[e._v("There are two context types that can be used:")]),e._v(" "),r("ul",[r("li",[e._v("Context that affects "),r("strong",[e._v("specific products")])]),e._v(" "),r("li",[e._v("Context that affects "),r("strong",[e._v("products with similar attributes")])])]),e._v(" "),r("p",[r("img",{attrs:{src:"/assets/media/ProductScoring_Context.svg",alt:"Product scores for Context"}})]),e._v(" "),r("h4",{attrs:{id:"specific-product-context"}},[r("a",{staticClass:"edoc-header-anchor",attrs:{href:"#specific-product-context"}},[r("div",{staticClass:"edoc-anchor-icon",staticStyle:{content:"url(/assets/icons/anchor-link.svg)"}})]),e._v(" Specific product context")]),e._v(" "),r("p",[e._v("For each search query, Empathy Platform stores a list of the products that shoppers have had some type of interaction with during the day and assigns them points according to whether shoppers have clicked, added to the cart, or purchased the product.")]),e._v(" "),r("p",[e._v("For example, possible points for interactions might include:")]),e._v(" "),r("ul",[r("li",[r("strong",[e._v("Clicks")]),e._v(": 1 point per interaction")]),e._v(" "),r("li",[r("strong",[e._v("Add-to-cart")]),e._v(": 2 points per interaction")]),e._v(" "),r("li",[r("strong",[e._v("Checkout")]),e._v(": 3 points per interaction")])]),e._v(" "),r("div",{staticClass:"custom-block interact"},[r("p",{staticClass:"custom-block-title"},[e._v("interact")]),e._v(" "),r("p",[e._v("For more information on how product interactions are gathered, see "),r("RouterLink",{attrs:{to:"/capture-shopper-interaction/interaction-events.html"}},[e._v("Shopper interactions tracked in your store")]),e._v(".")],1)]),e._v(" "),r("p",[e._v("These interaction points are added for a given product and added to the product's overall score. Often points given for context do not modify the product’s position significantly. For example, a highly clicked product for a given query might result in the product receiving additional points equivalent to a business rule that has a weighting of 1 in Equalize.")]),e._v(" "),r("h4",{attrs:{id:"similar-attributes-context"}},[r("a",{staticClass:"edoc-header-anchor",attrs:{href:"#similar-attributes-context"}},[r("div",{staticClass:"edoc-anchor-icon",staticStyle:{content:"url(/assets/icons/anchor-link.svg)"}})]),e._v(" Similar attributes context")]),e._v(" "),r("p",[e._v("Depending on each product catalogue feed and merchandising scenario, you can configure the fields relevant for identifying products such as family, subfamily, and product attributes.")]),e._v(" "),r("p",[e._v("For each search, Empathy Platform stores shopper interactions with family, subfamily, and attribute values, storing values of these fields rather than product IDs themselves.")]),e._v(" "),r("p",[e._v("For example, a shopper searches for “T-shirt” and clicks on Product A, which comes from the “T-shirt” family, “Basic T-shirts” subfamily, and “Sleeveless” attribute.")]),e._v(" "),r("p",[e._v("Contextualize stores the interactions with these T-shirt types and builds intent models similar to the table below for the “T-shirt” query, where depending on the type of interaction, the points are added up for each family, subfamily, and attribute.")]),e._v(" "),r("table",[r("thead",[r("tr",[r("th",[e._v("Family")]),e._v(" "),r("th",[e._v("Context points")]),e._v(" "),r("th",[e._v("Subfamily")]),e._v(" "),r("th",[e._v("Context points")]),e._v(" "),r("th",[e._v("Attribute")]),e._v(" "),r("th",[e._v("Context points")])])]),e._v(" "),r("tbody",[r("tr",[r("td",[e._v("T-shirt")]),e._v(" "),r("td",[e._v("18,856")]),e._v(" "),r("td",[e._v("Basic t-shirts")]),e._v(" "),r("td",[e._v("10,856")]),e._v(" "),r("td",[e._v("Short sleeve")]),e._v(" "),r("td",[e._v("12,856")])]),e._v(" "),r("tr",[r("td",[e._v("Baby t-shirt")]),e._v(" "),r("td",[e._v("1,567")]),e._v(" "),r("td",[e._v("Graphic t-shirts")]),e._v(" "),r("td",[e._v("7,567")]),e._v(" "),r("td",[e._v("Sleeveless")]),e._v(" "),r("td",[e._v("9,567")])]),e._v(" "),r("tr",[r("td",[e._v("Tops")]),e._v(" "),r("td",[e._v("1,096")]),e._v(" "),r("td",[e._v("W-B t-shirts")]),e._v(" "),r("td",[e._v("6,096")]),e._v(" "),r("td",[e._v("Patterned")]),e._v(" "),r("td",[e._v("3,096")])])])]),e._v(" "),r("p",[e._v("With context enabled and for a given search query, additional points are awarded to each product that has one of the popular values in the Context intent model. By default, the top 5 most popular values are taken. For example, if Product A belongs to the Graphic t-shirts subfamily, additional points are awarded.")]),e._v(" "),r("p",[e._v("The points depend on the popularity of the search term. The equivalent weighting in Equalize would be a value of between 0 and 1 (remember usually these values are decimal numbers).")]),e._v(" "),r("h2",{attrs:{id:"tie-breakers"}},[r("a",{staticClass:"edoc-header-anchor",attrs:{href:"#tie-breakers"}},[r("div",{staticClass:"edoc-anchor-icon",staticStyle:{content:"url(/assets/icons/anchor-link.svg)"}})]),e._v(" Tie-breakers")]),e._v(" "),r("p",[e._v("There are times where the textual relevance may result in many products with an identical overall score. This usually happens where there are few or no business rules and context is not active.")]),e._v(" "),r("p",[e._v("In these cases, backup ordering criteria should be determined to decide which product should be ranked first or second. Tie-breakers are applied after the points for textual relevance, business rules, and context have been added up.")]),e._v(" "),r("p",[e._v("Fields that are commonly used to resolve tie-breaks are numerical fields:")]),e._v(" "),r("ul",[r("li",[e._v("Price")]),e._v(" "),r("li",[e._v("Created on")]),e._v(" "),r("li",[e._v("Business margin")]),e._v(" "),r("li",[e._v("Stock level")])]),e._v(" "),r("p",[e._v("If a tie-breaker is not set up to resolve conflicts resulting from identical product overall scores, products are shown in the order in which they are indexed by the search engine. Generally speaking, if business rules and context are set up for the product catalogue, few tie-break situations will occur; however, it is a good best practice to set up a tie-breaker to cover any eventualities.")])])}),[],!1,null,null,null);t.default=a.exports}}]);