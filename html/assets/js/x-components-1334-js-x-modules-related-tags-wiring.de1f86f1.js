(window.webpackJsonp=window.webpackJsonp||[]).push([[154],{424:function(e,a,t){"use strict";t.r(a),t.d(a,"cancelFetchAndSaveRelatedTagsWire",(function(){return u})),t.d(a,"clearRelatedTagsQuery",(function(){return o})),t.d(a,"clearSelectedRelatedTags",(function(){return R})),t.d(a,"fetchAndSaveRelatedTagsWire",(function(){return i})),t.d(a,"relatedTagsWiring",(function(){return W})),t.d(a,"setRelatedTagsExtraParams",(function(){return g})),t.d(a,"setRelatedTagsQuery",(function(){return l})),t.d(a,"setUrlParamsWire",(function(){return m})),t.d(a,"toggleRelatedTagWire",(function(){return T}));var r=t(35),d=t(50),s=Object(d.namespacedWireCommit)("relatedTags"),n=Object(d.namespacedWireDispatch)("relatedTags"),c=Object(d.namespacedWireDispatchWithoutPayload)("relatedTags"),l=s("setQuery"),g=s("setParams"),i=n("fetchAndSaveRelatedTags"),u=c("cancelFetchAndSaveRelatedTags"),T=n("toggleRelatedTag"),R=s("setSelectedRelatedTags",[]),o=s("setQuery",""),m=n("setUrlParams"),W=Object(r.createWiring)({UserAcceptedAQuery:{setRelatedTagsQuery:l,clearSelectedRelatedTags:R},UserPickedARelatedTag:{toggleRelatedTagWire:T},UserChangedExtraParams:{clearSelectedRelatedTags:R},RelatedTagsRequestChanged:{fetchAndSaveRelatedTagsWire:i},UserClearedQuery:{cancelFetchAndSaveRelatedTagsWire:u,clearRelatedTagsQuery:o,clearSelectedRelatedTags:R},ExtraParamsChanged:{setRelatedTagsExtraParams:g},ParamsLoadedFromUrl:{setUrlParamsWire:m}})}}]);