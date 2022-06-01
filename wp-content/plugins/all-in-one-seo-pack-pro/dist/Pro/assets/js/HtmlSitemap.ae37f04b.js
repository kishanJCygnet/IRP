var h=Object.defineProperty,g=Object.defineProperties;var f=Object.getOwnPropertyDescriptors;var n=Object.getOwnPropertySymbols;var _=Object.prototype.hasOwnProperty,v=Object.prototype.propertyIsEnumerable;var l=(t,s,e)=>s in t?h(t,s,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[s]=e,i=(t,s)=>{for(var e in s||(s={}))_.call(s,e)&&l(t,e,s[e]);if(n)for(var e of n(s))v.call(s,e)&&l(t,e,s[e]);return t},p=(t,s)=>g(t,f(s));import{d}from"./index.8469931f.js";import{B as b}from"./Checkbox.5873a8d2.js";import{B as y}from"./RadioToggle.98e1e7ec.js";import{C as S}from"./Card.213902d3.js";import{C as x}from"./ExcludePosts.0351a5b4.js";import{C as $}from"./PostTypeOptions.f841640b.js";import{C as T}from"./SettingsRow.eb71f07b.js";import{C as k,k as L,a as w}from"./index.46919fbe.js";import{C}from"./Index.45bb8b07.js";import{C as A}from"./AttributesList.d348890d.js";import{C as D}from"./DisplayInfo.66233977.js";import{C as U}from"./Tooltip.674a9fb4.js";import{S as O}from"./Close.5e7bcb70.js";import{S as P}from"./External.8868c638.js";import{S as M}from"./File.f647fe1b.js";import{n as m}from"./vueComponentNormalizer.87056a83.js";import"./Checkmark.e7547654.js";import"./QuestionMark.83ebd18e.js";import"./Slide.f5d21606.js";import"./ToolsSettings.4e156902.js";import"./JsonValues.08065e69.js";import"./AddPlus.f69ce757.js";import"./HighlightToggle.47bdd2a8.js";import"./Radio.99a9886d.js";import"./Row.13b6f3f1.js";import"./client.93f15631.js";import"./Php.8f904d07.js";import"./CheckSolid.99652043.js";import"./Copy.a07db25e.js";var B=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("core-display-info",{attrs:{label:t.strings.label,options:t.displayOptions,url:t.url},scopedSlots:t._u([{key:"shortcodeAdvanced",fn:function(){return[e("core-attributes-list",{attrs:{description:t.strings.shortcodeAttributesDescription,attributes:t.attributes}})]},proxy:!0},{key:"phpAdvanced",fn:function(){return[e("core-attributes-list",{attrs:{description:t.strings.phpArgumentsDescription,attributes:t.attributes}})]},proxy:!0},{key:"extra",fn:function(){return[e("svg-file"),e("p",[t._v(t._s(t.strings.page))])]},proxy:!0},{key:"extraBox",fn:function(o){var a=o.item;return[e("div",{staticClass:"new-page"},[e("div",{staticClass:"aioseo-row"},[e("div",{staticClass:"aioseo-col col-xs-12 text-xs-left"},[a.desc?e("div",{staticClass:"aioseo-description",domProps:{innerHTML:t._s(a.desc)}}):t._e()]),e("div",{staticClass:"aioseo-col col-xs-12 col-md-7 text-xs-left"},[e("base-input",{class:{"aioseo-error":t.error,"aioseo-active":!t.error&&t.pageUrl},attrs:{size:"medium",placeholder:t.strings.placeholder},on:{keyup:t.validateNewSlug,blur:t.addSiteUrl,focus:function(r){t.showResults=!0}},scopedSlots:t._u([{key:"append-icon",fn:function(){return[e("div",{staticClass:"append-icon"},[t.isLoading?t._e():[t.error?e("svg-circle-close"):t._e(),!t.error&&t.pageUrl?e("svg-circle-check"):t._e()],t.isLoading?e("core-loader",{attrs:{dark:""}}):t._e()],2)]},proxy:!0}],null,!0),model:{value:t.pageUrl,callback:function(r){t.pageUrl=r},expression:"pageUrl"}})],1),e("div",{staticClass:"aioseo-col col-xs-12 col-md-5 text-xs-left"},[!t.pageUrl||t.buttonLocked||t.error?e("core-tooltip",{attrs:{type:"action",tag:"div"},scopedSlots:t._u([{key:"tooltip",fn:function(){return[t._v(" "+t._s(t.sitemapButtonDisabled)+" ")]},proxy:!0}],null,!0)},[e("base-button",{staticClass:"aioseo-html-sitemaps-disabled-button",attrs:{size:"medium",type:"blue",tag:"button"}},[e("svg-external"),t._v(" "+t._s(t.strings.pageButton)+" ")],1)],1):t._e(),t.pageUrl&&!t.buttonLocked&&!t.error?e("base-button",{attrs:{size:"medium",type:"blue",tag:"a",href:t.pageUrl,target:"_blank"}},[e("svg-external"),t._v(" "+t._s(t.strings.pageButton)+" ")],1):t._e()],1),t.showResults&&t.error?e("core-alert",{attrs:{type:"red",size:"medium"}},[t._v(" "+t._s(t.strings.errorMessage)+" ")]):t._e()],1)])]}}])})},H=[];const R={components:{CoreAlert:C,CoreAttributesList:A,CoreDisplayInfo:D,CoreLoader:k,CoreTooltip:U,SvgCircleCheck:L,SvgCircleClose:O,SvgExternal:P,SvgFile:M},props:{displayOptions:{type:Object,required:!0},url:{type:String}},data(){return{pageUrl:"",currentPageUrl:"",buttonLocked:!0,error:!1,isLoading:!1,showResults:!1,showAdvancedSettings:!1,strings:{label:"Display HTML Sitemap",page:"Dedicated Page",placeholder:this.$t.sprintf("e.g. %1$s",`${this.$aioseo.urls.home}/new-page`),pageButton:"Open HTML Sitemap",errorMessage:"The page that you have entered already exists. Please enter a page with a unique slug.",shortcodeAttributesDescription:"The following shortcode attributes can be used to override the default settings:",phpArgumentsDescription:"The function accepts an associative array with the following arguments that can be used to override the default settings:",advancedSettings:"Advanced Settings",editAndSaveFirst:"To view the sitemap, enter a URL and save changes.",saveFirst:"To view the new sitemap, first save changes."},attributes:[{name:"post_types",description:"The post types (by slug, comma-separated) that are included in the sitemap."},{name:"taxonomies",description:"The taxonomies (by slug, comma-separated) that are included in the sitemap."},{name:"label_tag",description:this.$t.sprintf("The HTML tag that is used for the label of each section. Defaults to %1$s.","<code>h4</code>")},{name:"show_label",description:this.$t.sprintf("Whether the labels should be shown or not. Defaults to %1$s.","<code>true</code>")},{name:"publication_date",description:"Whether the publication date of posts should be shown."},{name:"archives",description:"Whether the regular sitemap or compact date archive sitemap is output."},{name:"order",description:this.$t.sprintf("The sort direction. The supported values are %1$s and %2$s.","<code>ASC</code>","<code>DESC</code>")},{name:"order_by",description:this.$t.sprintf("The sort order. The supported values are %1$s, %2$s, %3$s and %4$s.","<code>publish_date</code>","<code>last_updated</code>","<code>alphabetical</code>","<code>id</code>")}]}},created(){this.pageUrl=this.options.sitemap.html.pageUrl,this.addSiteUrl(),this.pageUrl&&(this.buttonLocked=!1),this.$bus.$on("changes-saved",()=>{this.processChangesSaved()})},computed:p(i({},d(["options"])),{sitemapButtonDisabled(){return this.pageUrl?this.strings.saveFirst:this.strings.editAndSaveFirst}}),methods:{addSiteUrl(){!this.pageUrl||!this.pageUrl.startsWith(`http://${window.aioseo.urls.domain}`)&&!this.pageUrl.startsWith(`https://${window.aioseo.urls.domain}`)&&(this.pageUrl=this.$aioseo.data.isSsl?`https://${window.aioseo.urls.domain}/${this.pageUrl}`:`http://${window.aioseo.urls.domain}/${this.pageUrl}`)},validateNewSlug(t){if(this.pageUrl=t.target.value,!this.pageUrl){this.options.sitemap.html.pageUrl="";return}if(this.currentPageUrl===this.pageUrl){this.buttonLocked=!1,this.error=!1;return}else this.buttonLocked=!0;this.isLoading=!0,w(()=>{this.$http.post(this.$links.restUrl("sitemap/validate-html-sitemap-slug")).send({pageUrl:this.pageUrl}).then(s=>{s.body.exists?(this.error=!0,this.showResults=!0):(this.error=!1,this.options.sitemap.html.pageUrl=this.pageUrl),this.isLoading=!1}).catch(()=>{this.error=!0,this.isLoading=!1})},500)},processChangesSaved(){if(!this.pageUrl){this.buttonLocked=!0;return}this.currentPageUrl=this.pageUrl,this.buttonLocked=!1}}},c={};var G=m(R,B,H,!1,I,null,null,null);function I(t){for(let s in c)this[s]=c[s]}var E=function(){return G.exports}(),N=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"aioseo-html-sitemap"},[e("core-card",{attrs:{slug:"htmlSitemap"},scopedSlots:t._u([{key:"header",fn:function(){return[t._v(" "+t._s(t.strings.title)+" ")]},proxy:!0}])},[e("div",{staticClass:"aioseo-settings-row aioseo-section-description"},[t._v(" "+t._s(t.strings.description)+" "),e("span",{domProps:{innerHTML:t._s(t.$links.getDocLink(t.$constants.GLOBAL_STRINGS.learnMore,"htmlSitemap",!0))}})]),e("core-settings-row",{attrs:{name:t.strings.enableSitemap},scopedSlots:t._u([{key:"content",fn:function(){return[e("base-toggle",{model:{value:t.options.sitemap.html.enable,callback:function(o){t.$set(t.options.sitemap.html,"enable",o)},expression:"options.sitemap.html.enable"}})]},proxy:!0}])}),t.options.sitemap.html.enable?e("html-sitemap-display-info",{attrs:{label:t.strings.displayLabel,displayOptions:t.displayOptions,url:t.options.sitemap.html.pageUrl}}):t._e()],1),t.options.sitemap.html.enable?e("core-card",{staticClass:"aioseo-html-sitemap-settings",attrs:{slug:"htmlSitemapSettings"},scopedSlots:t._u([{key:"header",fn:function(){return[t._v(" "+t._s(t.strings.settings)+" ")]},proxy:!0}],null,!1,1126058562)},[e("core-settings-row",{attrs:{name:t.strings.postTypes},scopedSlots:t._u([{key:"content",fn:function(){return[e("base-checkbox",{attrs:{size:"medium"},model:{value:t.options.sitemap.html.postTypes.all,callback:function(o){t.$set(t.options.sitemap.html.postTypes,"all",o)},expression:"options.sitemap.html.postTypes.all"}},[t._v(" "+t._s(t.strings.includeAllPostTypes)+" ")]),t.options.sitemap.html.postTypes.all?t._e():e("core-post-type-options",{attrs:{options:t.options.sitemap.html,type:"postTypes",excluded:["attachment"]}}),e("div",{staticClass:"aioseo-description"},[t._v(" "+t._s(t.strings.selectPostTypes)+" ")])]},proxy:!0}],null,!1,1879190995)}),e("core-settings-row",{attrs:{name:t.strings.taxonomies},scopedSlots:t._u([{key:"content",fn:function(){return[e("base-checkbox",{attrs:{size:"medium"},model:{value:t.options.sitemap.html.taxonomies.all,callback:function(o){t.$set(t.options.sitemap.html.taxonomies,"all",o)},expression:"options.sitemap.html.taxonomies.all"}},[t._v(" "+t._s(t.strings.includeAllTaxonomies)+" ")]),t.options.sitemap.html.taxonomies.all?t._e():e("core-post-type-options",{attrs:{options:t.options.sitemap.html,type:"taxonomies"}}),e("div",{staticClass:"aioseo-description"},[t._v(" "+t._s(t.strings.selectTaxonomies)+" ")])]},proxy:!0}],null,!1,2105218266)}),e("core-settings-row",{staticClass:"aioseo-sort-order",attrs:{name:t.strings.sortOrder,align:""},scopedSlots:t._u([{key:"content",fn:function(){return[e("base-select",{attrs:{size:"medium",options:t.sortOrders,value:t.getSortOrder(t.options.sitemap.html.sortOrder)},on:{input:function(o){return t.options.sitemap.html.sortOrder=o.value}}})]},proxy:!0}],null,!1,1973041532)}),e("core-settings-row",{staticClass:"aioseo-sort-direction",attrs:{name:t.strings.sortDirection,align:""},scopedSlots:t._u([{key:"content",fn:function(){return[e("base-select",{attrs:{size:"medium",options:t.sortDirections,value:t.getSortDirection(t.options.sitemap.html.sortDirection)},on:{input:function(o){return t.options.sitemap.html.sortDirection=o.value}}})]},proxy:!0}],null,!1,3610521404)}),e("core-settings-row",{attrs:{name:t.strings.publicationDate,align:""},scopedSlots:t._u([{key:"content",fn:function(){return[e("base-radio-toggle",{attrs:{name:"publicationDate",options:[{label:t.$constants.GLOBAL_STRINGS.hide,value:!1,activeClass:"dark"},{label:t.$constants.GLOBAL_STRINGS.show,value:!0}]},model:{value:t.options.sitemap.html.publicationDate,callback:function(o){t.$set(t.options.sitemap.html,"publicationDate",o)},expression:"options.sitemap.html.publicationDate"}}),e("div",{staticClass:"aioseo-description"},[t._v(" "+t._s(t.strings.publicationDateDescription)+" ")])]},proxy:!0}],null,!1,2741867663)}),e("core-settings-row",{attrs:{name:t.strings.compactArchives,align:""},scopedSlots:t._u([{key:"content",fn:function(){return[e("base-radio-toggle",{attrs:{name:"compactArchives",options:[{label:t.$constants.GLOBAL_STRINGS.disabled,value:!1,activeClass:"dark"},{label:t.$constants.GLOBAL_STRINGS.enabled,value:!0}]},model:{value:t.options.sitemap.html.compactArchives,callback:function(o){t.$set(t.options.sitemap.html,"compactArchives",o)},expression:"options.sitemap.html.compactArchives"}}),e("div",{staticClass:"aioseo-description",domProps:{innerHTML:t._s(t.strings.compactArchivesDescription)}})]},proxy:!0}],null,!1,1373752516)})],1):t._e(),t.options.sitemap.html.enable?e("core-card",{attrs:{slug:"htmlSitemapAdvancedSettings",toggles:t.options.sitemap.html.advancedSettings.enable},scopedSlots:t._u([{key:"header",fn:function(){return[e("base-toggle",{model:{value:t.options.sitemap.html.advancedSettings.enable,callback:function(o){t.$set(t.options.sitemap.html.advancedSettings,"enable",o)},expression:"options.sitemap.html.advancedSettings.enable"}}),t._v(" "+t._s(t.strings.advancedSettings)+" ")]},proxy:!0}],null,!1,1408724889)},[t.options.sitemap.html.advancedSettings.enable?e("div",[e("core-settings-row",{staticClass:"aioseo-exclude-pages-posts",attrs:{name:t.strings.excludePostsPages,align:""},scopedSlots:t._u([{key:"content",fn:function(){return[e("core-exclude-posts",{attrs:{options:t.options.sitemap.html.advancedSettings,type:"posts"}})]},proxy:!0}],null,!1,241377281)}),e("core-settings-row",{staticClass:"aioseo-exclude-terms",attrs:{name:t.strings.excludeTerms,align:""},scopedSlots:t._u([{key:"content",fn:function(){return[e("core-exclude-posts",{attrs:{options:t.options.sitemap.html.advancedSettings,type:"terms"}})]},proxy:!0}],null,!1,279405175)})],1):t._e()]):t._e()],1)},z=[];const F={components:{BaseCheckbox:b,BaseRadioToggle:y,CoreCard:S,CoreExcludePosts:x,CorePostTypeOptions:$,CoreSettingsRow:T,HtmlSitemapDisplayInfo:E},data(){return{sortOrders:[{label:"Publish Date",value:"publish_date"},{label:"Last Updated Date",value:"last_updated"},{label:"Alphabetical",value:"alphabetical"},{label:"Post/Term ID",value:"id"}],sortDirections:[{label:"Ascending",value:"asc"},{label:"Descending",value:"desc"}],displayOptions:{extra:{desc:"Display the sitemap on a dedicated page:"},block:{copy:"",desc:this.$t.sprintf('To add this block, edit a page or post and search for the %1$s"%2$s - HTML Sitemap"%3$s block.',"<strong>","AIOSEO","</strong>")},shortcode:{copy:"[aioseo_html_sitemap]",desc:this.$t.sprintf("Use the following shortcode to display the HTML Sitemap. %1$s",this.$links.getDocLink(this.$constants.GLOBAL_STRINGS.learnMore,"htmlSitemapShortcode",!0))},widget:{copy:"",desc:this.$t.sprintf('To add this widget, visit the %1$swidgets page%2$s and look for the %3$s"%4$s - HTML Sitemap"%5$s widget.',`<a href="${this.$aioseo.urls.admin.widgets}" target="_blank">`,"</a>","<strong>","AIOSEO","</strong>")},php:{copy:"<?php if( function_exists( 'aioseo_html_sitemap' ) ) aioseo_html_sitemap(); ?>",desc:this.$t.sprintf("Use the following PHP code anywhere in your theme to display the sitemap. %1$s",this.$links.getDocLink(this.$constants.GLOBAL_STRINGS.learnMore,"htmlSitemapFunction",!0))}},strings:{title:"HTML Sitemap",enableSitemap:"Enable Sitemap",settings:"HTML Sitemap Settings",description:"Using the custom-built tools below, you can add an HTML sitemap to your website and help visitors discover all your content. Adding an HTML sitemap to your website may also help search engines find your content more easily.",displayLabel:"Display HTML Sitemap",postTypes:"Post Types",taxonomies:"Taxonomies",includeAllPostTypes:"Include All Post Types",selectPostTypes:"Select which Post Types appear in your sitemap.",includeAllTaxonomies:"Include All Taxonomies",selectTaxonomies:"Select which Taxonomies appear in your sitemap.",sortOrder:"Sort Order",sortDirection:"Sort Direction",publicationDate:"Publication Date",publicationDateDescription:"This setting only applies to posts and pages.",compactArchives:"Compact Archives",compactArchivesDescription:this.$t.sprintf("This setting allows you to toggle between the regular sitemap or the compact date archive sitemap. %1$s",this.$links.getDocLink(this.$constants.GLOBAL_STRINGS.learnMore,"htmlSitemapCompactArchives",!0)),advancedSettings:"Advanced Settings",excludePostsPages:"Exclude Posts / Pages",excludeTerms:"Exclude Terms"}}},computed:i({},d(["options","internalOptions"])),methods:{getSortOrder(t){return this.sortOrders.find(s=>s.value===t)},getSortDirection(t){return this.sortDirections.find(s=>s.value===t)}}},u={};var W=m(F,N,z,!1,j,null,null,null);function j(t){for(let s in u)this[s]=u[s]}var xt=function(){return W.exports}();export{xt as default};