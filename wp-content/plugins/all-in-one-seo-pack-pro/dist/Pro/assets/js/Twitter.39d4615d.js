var u=Object.defineProperty,m=Object.defineProperties;var g=Object.getOwnPropertyDescriptors;var r=Object.getOwnPropertySymbols;var p=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable;var n=(e,s,t)=>s in e?u(e,s,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[s]=t,i=(e,s)=>{for(var t in s||(s={}))p.call(s,t)&&n(e,t,s[t]);if(r)for(var t of r(s))d.call(s,t)&&n(e,t,s[t]);return e},l=(e,s)=>m(e,g(s));import{T as f}from"./ToolsSettings.7cc9335c.js";import{B as w,I as _,U as y}from"./Img.bb1ffd57.js";import{J as h}from"./JsonValues.08065e69.js";import{M as T}from"./MaxCounts.3eed5286.js";import{n as v}from"./vueComponentNormalizer.4c221f82.js";import{a0 as P,j as S}from"./vendor.f6bbc087.js";import{B as b}from"./RadioToggle.7eca84f0.js";import{C}from"./Index.d771a71f.js";import{C as I}from"./Card.75bef818.js";import{C as k}from"./HtmlTagsEditor.70cb327f.js";import{C as x}from"./SettingsRow.e87657d6.js";import{C as $}from"./TwitterPreview.eddc0b01.js";import{S as L}from"./Plus.4a10b727.js";import"./index.2a722b10.js";import"./helpers.46947768.js";import"./index.0c09686e.js";import"./context.0a0c6a10.js";import"./Tooltip.b5773cff.js";import"./QuestionMark.4dbc0d97.js";import"./Slide.c8a2867c.js";import"./Editor.aa430cd0.js";import"./UnfilteredHtml.9dfe648c.js";import"./Row.de5121b5.js";import"./dannie-profile.41545edf.js";import"./Book.356288e0.js";var D=function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",{staticClass:"aioseo-twitter"},[t("core-card",{attrs:{slug:"twitter","header-text":e.strings.twitterCardSettings}},[t("div",{staticClass:"aioseo-settings-row aioseo-section-description"},[e._v(" "+e._s(e.strings.description)+" "),t("span",{domProps:{innerHTML:e._s(e.$links.getDocLink(e.$constants.GLOBAL_STRINGS.learnMore,"twitter",!0))}})]),t("core-settings-row",{attrs:{name:e.strings.enableTwitterCard},scopedSlots:e._u([{key:"content",fn:function(){return[t("base-toggle",{model:{value:e.options.social.twitter.general.enable,callback:function(a){e.$set(e.options.social.twitter.general,"enable",a)},expression:"options.social.twitter.general.enable"}})]},proxy:!0}])}),e.options.social.twitter.general.enable?t("core-settings-row",{staticClass:"default-card-type",attrs:{name:e.strings.defaultCardType,align:""},scopedSlots:e._u([{key:"content",fn:function(){return[t("base-select",{attrs:{size:"medium",options:e.twitterCards,value:e.getCardOptions(e.options.social.twitter.general.defaultCardType)},on:{input:function(a){return e.options.social.twitter.general.defaultCardType=a.value}}})]},proxy:!0}],null,!1,4142204625)}):e._e(),e.options.social.twitter.general.enable?t("core-settings-row",{staticClass:"twitter-default-image-source",attrs:{name:e.strings.defaultImageSourcePosts,align:""},scopedSlots:e._u([{key:"content",fn:function(){return[t("base-select",{attrs:{size:"medium",options:e.imageSourceOptions,value:e.getImageSourceOption(e.options.social.twitter.general.defaultImageSourcePosts)},on:{input:function(a){return e.options.social.twitter.general.defaultImageSourcePosts=a.value}}})]},proxy:!0}],null,!1,3131312444)}):e._e(),e.options.social.twitter.general.enable&&e.options.social.twitter.general.defaultImageSourcePosts==="custom"?t("core-settings-row",{attrs:{name:e.strings.postCustomFieldName,align:""},scopedSlots:e._u([{key:"content",fn:function(){return[t("base-input",{attrs:{size:"medium"},model:{value:e.options.social.twitter.general.customFieldImagePosts,callback:function(a){e.$set(e.options.social.twitter.general,"customFieldImagePosts",a)},expression:"options.social.twitter.general.customFieldImagePosts"}})]},proxy:!0}],null,!1,3337947198)}):e._e(),e.options.social.twitter.general.enable?t("core-settings-row",{staticClass:"twitter-image",attrs:{name:e.strings.defaultTwitterImagePosts,align:""},scopedSlots:e._u([{key:"content",fn:function(){return[t("div",{staticClass:"twitter-image-upload"},[t("base-input",{attrs:{size:"medium",placeholder:e.strings.pasteYourImageUrl},model:{value:e.options.social.twitter.general.defaultImagePosts,callback:function(a){e.$set(e.options.social.twitter.general,"defaultImagePosts",a)},expression:"options.social.twitter.general.defaultImagePosts"}}),t("base-button",{staticClass:"insert-image",attrs:{size:"medium",type:"black"},on:{click:function(a){e.openUploadModal("defaultImagePosts",function(o){return e.options.social.twitter.general.defaultImagePosts=o})}}},[t("svg-circle-plus"),e._v(" "+e._s(e.strings.uploadOrSelectImage)+" ")],1),t("base-button",{staticClass:"remove-image",attrs:{size:"medium",type:"gray"},on:{click:function(a){e.options.social.twitter.general.defaultImagePosts=null}}},[e._v(" "+e._s(e.strings.remove)+" ")])],1),t("div",{staticClass:"aioseo-description"},[e.options.social.twitter.general.defaultCardType==="summary"?t("span",[e._v(e._s(e.strings.minimumSizeSummary))]):e._e(),e.options.social.twitter.general.defaultCardType==="summary_large_image"?t("span",[e._v(e._s(e.strings.minimumSizeSummaryWithLarge))]):e._e()]),t("base-img",{attrs:{src:e.options.social.twitter.general.defaultImagePosts}})]},proxy:!0}],null,!1,3356147045)}):e._e(),e.options.social.twitter.general.enable?t("core-settings-row",{staticClass:"twitter-default-image-source",attrs:{name:e.strings.defaultImageSourceTerms,align:""},scopedSlots:e._u([{key:"content",fn:function(){return[e.isUnlicensed?e._e():t("base-select",{attrs:{size:"medium",options:e.getTermImageSourceOptions(),value:e.getImageSourceOption(e.options.social.twitter.general.defaultImageSourceTerms)},on:{input:function(a){return e.options.social.twitter.general.defaultImageSourceTerms=a.value}}}),e.isUnlicensed?t("base-select",{attrs:{size:"medium",options:e.getTermImageSourceOptions(),value:e.getImageSourceOption("default"),disabled:""}}):e._e(),e.isUnlicensed?t("core-alert",{staticClass:"inline-upsell",attrs:{type:"blue"}},[t("div",{domProps:{innerHTML:e._s(e.strings.defaultTermImageSourceUpsell)}})]):e._e()]},proxy:!0}],null,!1,4034726477)}):e._e(),e.options.social.twitter.general.enable&&e.options.social.twitter.general.defaultImageSourceTerms==="custom"&&!e.isUnlicensed?t("core-settings-row",{attrs:{name:e.strings.termsCustomFieldName,align:""},scopedSlots:e._u([{key:"content",fn:function(){return[t("base-input",{attrs:{size:"medium"},model:{value:e.options.social.twitter.general.customFieldImageTerms,callback:function(a){e.$set(e.options.social.twitter.general,"customFieldImageTerms",a)},expression:"options.social.twitter.general.customFieldImageTerms"}})]},proxy:!0}],null,!1,2341435720)}):e._e(),e.options.social.twitter.general.enable&&!e.isUnlicensed?t("core-settings-row",{staticClass:"twitter-image",attrs:{name:e.strings.defaultTwitterImageTerms,align:""},scopedSlots:e._u([{key:"content",fn:function(){return[t("div",{staticClass:"twitter-image-upload"},[t("base-input",{attrs:{size:"medium",placeholder:e.strings.pasteYourImageUrl},model:{value:e.options.social.twitter.general.defaultImageTerms,callback:function(a){e.$set(e.options.social.twitter.general,"defaultImageTerms",a)},expression:"options.social.twitter.general.defaultImageTerms"}}),t("base-button",{staticClass:"insert-image",attrs:{size:"medium",type:"black"},on:{click:function(a){e.openUploadModal("defaultImageTerms",function(o){return e.options.social.twitter.general.defaultImageTerms=o})}}},[t("svg-circle-plus"),e._v(" "+e._s(e.strings.uploadOrSelectImage)+" ")],1),t("base-button",{staticClass:"remove-image",attrs:{size:"medium",type:"gray"},on:{click:function(a){e.options.social.twitter.general.defaultImageTerms=null}}},[e._v(" "+e._s(e.strings.remove)+" ")])],1),t("div",{staticClass:"aioseo-description"},[e.options.social.twitter.general.defaultCardType==="summary"?t("span",[e._v(e._s(e.strings.minimumSizeSummary))]):e._e(),e.options.social.twitter.general.defaultCardType==="summary_large_image"?t("span",[e._v(e._s(e.strings.minimumSizeSummaryWithLarge))]):e._e()]),t("base-img",{attrs:{src:e.options.social.twitter.general.defaultImageTerms}})]},proxy:!0}],null,!1,902467603)}):e._e(),e.options.social.twitter.general.enable?t("core-settings-row",{attrs:{name:e.strings.showTwitterAuthor,align:""},scopedSlots:e._u([{key:"content",fn:function(){return[t("base-radio-toggle",{attrs:{name:"showTwitterAuthor",options:[{label:e.$constants.GLOBAL_STRINGS.no,value:!1,activeClass:"dark"},{label:e.$constants.GLOBAL_STRINGS.yes,value:!0}]},model:{value:e.options.social.twitter.general.showAuthor,callback:function(a){e.$set(e.options.social.twitter.general,"showAuthor",a)},expression:"options.social.twitter.general.showAuthor"}})]},proxy:!0}],null,!1,536929787)}):e._e(),e.options.social.twitter.general.enable?t("core-settings-row",{attrs:{name:e.strings.additionalData,align:""},scopedSlots:e._u([{key:"content",fn:function(){return[t("base-radio-toggle",{attrs:{name:"additionalData",options:[{label:e.$constants.GLOBAL_STRINGS.disabled,value:!1,activeClass:"dark"},{label:e.$constants.GLOBAL_STRINGS.enabled,value:!0}]},model:{value:e.options.social.twitter.general.additionalData,callback:function(a){e.$set(e.options.social.twitter.general,"additionalData",a)},expression:"options.social.twitter.general.additionalData"}}),t("div",{staticClass:"aioseo-description"},[e._v(" "+e._s(e.strings.additionalDataDescription)+" ")])]},proxy:!0}],null,!1,4194794700)}):e._e(),e.options.social.twitter.general.enable?t("core-settings-row",{attrs:{name:e.strings.useDataFromFacebook,align:""},scopedSlots:e._u([{key:"content",fn:function(){return[t("base-radio-toggle",{attrs:{name:"useOgData",options:[{label:e.$constants.GLOBAL_STRINGS.no,value:!1,activeClass:"dark"},{label:e.$constants.GLOBAL_STRINGS.yes,value:!0}]},model:{value:e.options.social.twitter.general.useOgData,callback:function(a){e.$set(e.options.social.twitter.general,"useOgData",a)},expression:"options.social.twitter.general.useOgData"}}),t("div",{staticClass:"aioseo-description"},[e._v(" "+e._s(e.strings.useOgDataDescription)+" ")])]},proxy:!0}],null,!1,3629670821)}):e._e()],1),e.options.social.twitter.general.enable?t("core-card",{attrs:{slug:"twitterHomePageSettings","header-text":e.strings.homePageSettings}},[e.$aioseo.data.staticHomePage?t("div",{staticClass:"aioseo-settings-row aioseo-section-description"},[t("span",{domProps:{innerHTML:e._s(e.strings.homePageDisabledDescription)}}),e._v(" \xA0 "),t("span",{domProps:{innerHTML:e._s(e.$links.getDocLink(e.$constants.GLOBAL_STRINGS.learnMore,"staticHomePageTwitter",!0))}})]):e._e(),e.$aioseo.data.staticHomePage?t("br"):e._e(),t("core-settings-row",{attrs:{name:e.$constants.GLOBAL_STRINGS.preview},scopedSlots:e._u([{key:"content",fn:function(){return[t("core-twitter-preview",{attrs:{image:e.options.social.twitter.homePage.image,card:e.options.social.twitter.homePage.cardType},scopedSlots:e._u([{key:"site-title",fn:function(){return[e.$aioseo.data.staticHomePage?t("span",{domProps:{innerHTML:e._s(e.truncate(e.parseTags(e.$aioseo.data.staticHomePageTwitterTitle||"#site_title"),100))}}):e._e(),e.$aioseo.data.staticHomePage?e._e():t("span",{domProps:{innerHTML:e._s(e.truncate(e.parseTags(e.options.social.twitter.homePage.title||"#site_title"),100))}})]},proxy:!0},{key:"site-description",fn:function(){return[e.$aioseo.data.staticHomePage?t("span",{domProps:{innerHTML:e._s(e.truncate(e.parseTags(e.$aioseo.data.staticHomePageTwitterDescription||"#tagline")))}}):e._e(),e.$aioseo.data.staticHomePage?e._e():t("span",{domProps:{innerHTML:e._s(e.truncate(e.parseTags(e.options.social.twitter.homePage.description||"#tagline")))}})]},proxy:!0}],null,!1,1448835471)})]},proxy:!0}],null,!1,1072122056)}),e.$aioseo.data.staticHomePage?e._e():t("core-settings-row",{staticClass:"default-card-type",attrs:{name:e.strings.cardType,align:""},scopedSlots:e._u([{key:"content",fn:function(){return[t("base-select",{attrs:{size:"medium",options:e.twitterCards,value:e.getCardOptions(e.options.social.twitter.homePage.cardType)},on:{input:function(a){return e.options.social.twitter.homePage.cardType=a.value}}})]},proxy:!0}],null,!1,3610407505)}),e.$aioseo.data.staticHomePage?e._e():t("core-settings-row",{staticClass:"twitter-image",attrs:{name:e.strings.homePageImage,align:""},scopedSlots:e._u([{key:"content",fn:function(){return[t("div",{staticClass:"twitter-image-upload"},[t("base-input",{attrs:{size:"medium",placeholder:e.strings.pasteYourImageUrl},model:{value:e.options.social.twitter.homePage.image,callback:function(a){e.$set(e.options.social.twitter.homePage,"image",a)},expression:"options.social.twitter.homePage.image"}}),t("base-button",{staticClass:"insert-image",attrs:{size:"medium",type:"black"},on:{click:function(a){e.openUploadModal("homePageImage",function(o){return e.options.social.twitter.homePage.image=o})}}},[t("svg-circle-plus"),e._v(" "+e._s(e.strings.uploadOrSelectImage)+" ")],1),t("base-button",{staticClass:"remove-image",attrs:{size:"medium",type:"gray"},on:{click:function(a){e.options.social.twitter.homePage.image=null}}},[e._v(" "+e._s(e.strings.remove)+" ")])],1),t("div",{staticClass:"aioseo-description"},[e.options.social.twitter.homePage.cardType==="summary"?t("span",[e._v(e._s(e.strings.minimumSizeSummary))]):e._e(),e.options.social.twitter.homePage.cardType==="summary_large_image"?t("span",[e._v(e._s(e.strings.minimumSizeSummaryWithLarge))]):e._e()]),t("base-img",{attrs:{src:e.options.social.twitter.homePage.image}})]},proxy:!0}],null,!1,1972909273)}),e.$aioseo.data.staticHomePage?e._e():t("core-settings-row",{attrs:{name:e.strings.homePageTitle},scopedSlots:e._u([{key:"content",fn:function(){return[t("core-html-tags-editor",{staticClass:"twitter-meta-input",attrs:{"line-numbers":!1,single:"","tags-context":"homePage","default-tags":["site_title","tagline","separator_sa"]},on:{counter:function(a){return e.updateCount(a,"titleCount")}},scopedSlots:e._u([{key:"tags-description",fn:function(){return[e._v(" "+e._s(e.strings.clickToAddHomePageTitle)+" ")]},proxy:!0}],null,!1,4162175994),model:{value:e.options.social.twitter.homePage.title,callback:function(a){e.$set(e.options.social.twitter.homePage,"title",a)},expression:"options.social.twitter.homePage.title"}}),t("div",{staticClass:"max-recommended-count",domProps:{innerHTML:e._s(e.maxRecommendedCount(e.titleCount,70))}})]},proxy:!0}],null,!1,1897915047)}),e.$aioseo.data.staticHomePage?e._e():t("core-settings-row",{attrs:{name:e.strings.homePageDescription},scopedSlots:e._u([{key:"content",fn:function(){return[t("core-html-tags-editor",{staticClass:"twitter-meta-input",attrs:{"line-numbers":!1,"tags-context":"homePage","default-tags":["site_title","tagline","separator_sa"]},on:{counter:function(a){return e.updateCount(a,"descriptionCount")}},scopedSlots:e._u([{key:"tags-description",fn:function(){return[e._v(" "+e._s(e.strings.clickToAddHomePageDescription)+" ")]},proxy:!0}],null,!1,3376949532),model:{value:e.options.social.twitter.homePage.description,callback:function(a){e.$set(e.options.social.twitter.homePage,"description",a)},expression:"options.social.twitter.homePage.description"}}),t("div",{staticClass:"max-recommended-count",domProps:{innerHTML:e._s(e.maxRecommendedCount(e.descriptionCount,200))}})]},proxy:!0}],null,!1,2511677049)})],1):e._e()],1)},H=[];const O={components:{BaseImg:w,BaseRadioToggle:b,CoreAlert:C,CoreCard:I,CoreHtmlTagsEditor:k,CoreSettingsRow:x,CoreTwitterPreview:$,SvgCirclePlus:L},mixins:[_,h,T,f,y],data(){return{titleCount:0,descriptionCount:0,option:null,pagePostOptions:[],strings:{twitterCardSettings:"Twitter Card Settings",description:"Enable this feature if you want Twitter to display a preview card with images and a text excerpt when a link to your site is shared.",enableTwitterCard:"Enable Twitter Card",useDataFromFacebook:"Use Data from Facebook Tab",useOgDataDescription:"Choose whether you want to use the OG data from the Facebook tab in your individual pages/posts by default.",defaultCardType:"Default Card Type",summary:"Summary",summaryLarge:"Summary with Large Image",defaultImageSourcePosts:"Default Post Image Source",defaultImageSourceTerms:"Default Term Image Source",width:"Width",height:"Height",postCustomFieldName:"Post Custom Field Name",termsCustomFieldName:"Term Custom Field Name",defaultTwitterImagePosts:"Default Post Twitter Image",defaultTwitterImageTerms:"Default Term Twitter Image",uploadOrSelectImage:"Upload or Select Image",pasteYourImageUrl:"Paste your image URL or select a new image",minimumSizeSummary:"Minimum size: 144px x 144px, ideal ratio 1:1, 5MB max. JPG, PNG, WEBP and GIF formats only.",minimumSizeSummaryWithLarge:"Minimum size: 300px x 157px, ideal ratio 2:1, 5MB max. JPG, PNG, WEBP and GIF formats only.",homePageSettings:"Home Page Settings",homePageImage:"Home Page Image",homePageTitle:"Home Page Title",useHomePageTitle:"Use the home page title",clickToAddHomePageTitle:"Click on the tags below to insert variables into your home page title.",homePageDescription:"Description",useHomePageDescription:"Use the home page description",clickToAddHomePageDescription:"Click on the tags below to insert variables into your description.",remove:"Remove",showTwitterAuthor:"Show Twitter Author",homePageDisabledDescription:this.$t.sprintf("The home page settings below have been disabled because you are using a static home page. You can %1$sedit your home page settings%2$s directly to change the title, meta and image.",`<a href="${this.$aioseo.urls.staticHomePage}">`,"</a>"),cardType:"Card Type",additionalData:"Additional Data",additionalDataDescription:"Enable this option to show additional Twitter data on your posts and pages (i.e., who the post was written by and how long it might take to read the article).",defaultTermImageSourceUpsell:this.$t.sprintf("Default Term Image Source is only available for licensed %1$s users. %2$s","<strong>AIOSEO Pro</strong>",this.$links.getUpsellLink("general-facebook-settings",this.$constants.GLOBAL_STRINGS.learnMore,"default-term-image-soruce",!0))}}},computed:l(i(i({},P(["isUnlicensed"])),S(["options"])),{twitterCards(){return[{label:this.strings.summary,value:"summary"},{label:this.strings.summaryLarge,value:"summary_large_image"}]}}),methods:{getCardOptions(e){return this.twitterCards.find(s=>s.value===e)}}},c={};var G=v(O,D,H,!1,z,null,null,null);function z(e){for(let s in c)this[s]=c[s]}var le=function(){return G.exports}();export{le as default};
