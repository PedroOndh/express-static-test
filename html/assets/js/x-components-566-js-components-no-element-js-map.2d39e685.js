(window.webpackJsonp=window.webpackJsonp||[]).push([[893],{1173:function(e,n){throw new Error('Module parse failed: Unexpected token (1:10)\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\n> {"version":3,"file":"no-element.js","sources":["../../../src/components/no-element.ts"],"sourcesContent":["import Vue, { CreateElement, VNode } from \'vue\';\\n\\n/**\\n * The purpose of this Component is to use as default value for props that receive a Component that\\n * doesn\'t render any DOM element. For example the animations with `Transition` component.\\n *\\n * @internal\\n */\\nexport const NoElement = Vue.extend({\\n  render(h: CreateElement): VNode {\\n    return this.$slots.default?.[0] ?? h();\\n  }\\n});\\n"],"names":[],"mappings":";;AAEA;;;;;;IAMa,SAAS,GAAG,GAAG,CAAC,MAAM,CAAC;IAClC,MAAM,EAAN,UAAO,CAAgB;;QACrB,OAAO,MAAA,MAAA,IAAI,CAAC,MAAM,CAAC,OAAO,0CAAG,CAAC,CAAC,mCAAI,CAAC,EAAE,CAAC;KACxC;CACF;;;;"}')}}]);