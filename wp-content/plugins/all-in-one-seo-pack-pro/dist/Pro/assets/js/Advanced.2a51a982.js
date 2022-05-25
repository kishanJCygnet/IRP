var d=Object.defineProperty,c=Object.defineProperties;var u=Object.getOwnPropertyDescriptors;var a=Object.getOwnPropertySymbols;var p=Object.prototype.hasOwnProperty,m=Object.prototype.propertyIsEnumerable;var i=(e,t,s)=>t in e?d(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s,o=(e,t)=>{for(var s in t||(t={}))p.call(t,s)&&i(e,s,t[s]);if(a)for(var s of a(t))m.call(t,s)&&i(e,s,t[s]);return e},r=(e,t)=>c(e,u(t));import{e as g,d as v}from"./index.8469931f.js";import{v as _}from"./index.46919fbe.js";import{B as y}from"./Checkbox.5873a8d2.js";import{B as f}from"./RadioToggle.98e1e7ec.js";import{C as h}from"./Index.45bb8b07.js";import{C as b}from"./Card.213902d3.js";import{C as T}from"./PostTypeOptions.f841640b.js";import{C as k}from"./ProBadge.7c0de2f7.js";import{C as S}from"./SettingsRow.eb71f07b.js";import{C as $}from"./Tooltip.674a9fb4.js";import{S as x}from"./QuestionMark.83ebd18e.js";import{n as A}from"./vueComponentNormalizer.87056a83.js";import"./client.93f15631.js";import"./Checkmark.e7547654.js";import"./Slide.f5d21606.js";import"./HighlightToggle.47bdd2a8.js";import"./Radio.99a9886d.js";import"./Row.13b6f3f1.js";var C=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"aioseo-advanced"},[s("core-card",{attrs:{slug:"advanced","header-text":e.strings.advanced}},[s("core-settings-row",{attrs:{name:e.strings.truSeo},scopedSlots:e._u([{key:"content",fn:function(){return[s("base-toggle",{model:{value:e.options.advanced.truSeo,callback:function(n){e.$set(e.options.advanced,"truSeo",n)},expression:"options.advanced.truSeo"}}),s("div",{staticClass:"aioseo-description"},[e._v(" "+e._s(e.strings.truSeoDescription)+" ")])]},proxy:!0}])}),s("core-settings-row",{attrs:{name:e.strings.headlineAnalyzer},scopedSlots:e._u([{key:"content",fn:function(){return[s("base-toggle",{attrs:{disabled:e.versionCompare(e.$aioseo.wpVersion,"5.2","<")},model:{value:e.options.advanced.headlineAnalyzer,callback:function(n){e.$set(e.options.advanced,"headlineAnalyzer",n)},expression:"options.advanced.headlineAnalyzer"}}),s("div",{staticClass:"aioseo-description"},[e._v(" "+e._s(e.strings.headlineAnalyzerDescription)+" ")]),e.versionCompare(e.$aioseo.wpVersion,"5.2","<")?s("core-alert",{staticClass:"warning",attrs:{type:"yellow"}},[s("div",{domProps:{innerHTML:e._s(e.strings.headlineAnalyzerWarning)}})]):e._e()]},proxy:!0}])}),s("core-settings-row",{attrs:{name:e.strings.postTypeColumns},scopedSlots:e._u([{key:"content",fn:function(){return[s("base-checkbox",{attrs:{size:"medium"},model:{value:e.options.advanced.postTypes.all,callback:function(n){e.$set(e.options.advanced.postTypes,"all",n)},expression:"options.advanced.postTypes.all"}},[e._v(" "+e._s(e.strings.includeAllPostTypes)+" ")]),e.options.advanced.postTypes.all?e._e():s("core-post-type-options",{attrs:{options:e.options.advanced,type:"postTypes"}}),s("div",{staticClass:"aioseo-description"},[e._v(" "+e._s(e.strings.selectPostTypes)+" "),s("span",{domProps:{innerHTML:e._s(e.$links.getDocLink(e.$constants.GLOBAL_STRINGS.learnMore,"selectPostTypesColumns",!0))}})])]},proxy:!0}])}),s("core-settings-row",{scopedSlots:e._u([{key:"name",fn:function(){return[e._v(" "+e._s(e.strings.taxonomyColumns)+" "),e.isUnlicensed?s("core-pro-badge"):e._e()]},proxy:!0},{key:"content",fn:function(){return[e.isUnlicensed?s("base-checkbox",{attrs:{disabled:"",size:"medium",value:!0}},[e._v(" "+e._s(e.strings.includeAllTaxonomies)+" ")]):e._e(),e.isUnlicensed?e._e():s("base-checkbox",{attrs:{size:"medium"},model:{value:e.options.advanced.taxonomies.all,callback:function(n){e.$set(e.options.advanced.taxonomies,"all",n)},expression:"options.advanced.taxonomies.all"}},[e._v(" "+e._s(e.strings.includeAllTaxonomies)+" ")]),!e.options.advanced.taxonomies.all&&!e.isUnlicensed?s("core-post-type-options",{attrs:{options:e.options.advanced,type:"taxonomies"}}):e._e(),s("div",{staticClass:"aioseo-description"},[e._v(" "+e._s(e.strings.selectTaxonomies)+" "),s("span",{domProps:{innerHTML:e._s(e.$links.getDocLink(e.$constants.GLOBAL_STRINGS.learnMore,"selectTaxonomiesColumns",!0))}})]),e.isUnlicensed?s("core-alert",{staticClass:"inline-upsell",attrs:{type:"blue"}},[s("div",{domProps:{innerHTML:e._s(e.strings.taxonomyColumnsUpsell)}})]):e._e()]},proxy:!0}])}),s("core-settings-row",{attrs:{align:""},scopedSlots:e._u([{key:"name",fn:function(){return[e._v(" "+e._s(e.strings.adminBarMenu)+" "),e.isUnlicensed?s("core-pro-badge"):e._e()]},proxy:!0},{key:"content",fn:function(){return[s("base-radio-toggle",{attrs:{disabled:e.isUnlicensed,name:"adminBarMenu",options:[{label:e.$constants.GLOBAL_STRINGS.hide,value:!1,activeClass:"dark"},{label:e.$constants.GLOBAL_STRINGS.show,value:!0}]},model:{value:e.adminBarMenu,callback:function(n){e.adminBarMenu=n},expression:"adminBarMenu"}}),s("div",{staticClass:"aioseo-description"},[e._v(" "+e._s(e.strings.adminBarMenuDescription)+" ")]),e.isUnlicensed?s("core-alert",{staticClass:"inline-upsell",attrs:{type:"blue"}},[s("div",{domProps:{innerHTML:e._s(e.strings.adminBarMenuUpsell)}})]):e._e()]},proxy:!0}])}),s("core-settings-row",{attrs:{align:""},scopedSlots:e._u([{key:"name",fn:function(){return[e._v(" "+e._s(e.strings.dashboardWidgets)+" "),e.isUnlicensed?s("core-pro-badge"):e._e()]},proxy:!0},{key:"content",fn:function(){return[s("base-radio-toggle",{attrs:{disabled:e.isUnlicensed,name:"dashboardWidgets",options:[{label:e.$constants.GLOBAL_STRINGS.hide,value:!1,activeClass:"dark"},{label:e.$constants.GLOBAL_STRINGS.show,value:!0}]},model:{value:e.dashboardWidgets,callback:function(n){e.dashboardWidgets=n},expression:"dashboardWidgets"}}),s("div",{staticClass:"aioseo-description"},[e._v(" "+e._s(e.strings.dashboardWidgetsDescription)+" ")]),e.isUnlicensed?s("core-alert",{staticClass:"inline-upsell",attrs:{type:"blue"}},[s("div",{domProps:{innerHTML:e._s(e.strings.dashboardWidgetsUpsell)}})]):e._e()]},proxy:!0}])}),s("core-settings-row",{attrs:{name:e.strings.announcements,align:""},scopedSlots:e._u([{key:"content",fn:function(){return[s("base-radio-toggle",{attrs:{name:"announcements",options:[{label:e.$constants.GLOBAL_STRINGS.hide,value:!1,activeClass:"dark"},{label:e.$constants.GLOBAL_STRINGS.show,value:!0}]},model:{value:e.options.advanced.announcements,callback:function(n){e.$set(e.options.advanced,"announcements",n)},expression:"options.advanced.announcements"}}),s("div",{staticClass:"aioseo-description"},[e._v(" "+e._s(e.strings.announcementsDescription)+" ")])]},proxy:!0}])}),e.$isPro?s("core-settings-row",{attrs:{align:""},scopedSlots:e._u([{key:"name",fn:function(){return[e._v(" "+e._s(e.strings.automaticUpdates)+" ")]},proxy:!0},{key:"content",fn:function(){return[s("base-radio-toggle",{attrs:{name:"autoUpdates",options:[{label:e.strings.all,value:"all"},{label:e.strings.minor,value:"minor"},{label:e.strings.none,value:"none",activeClass:"dark"}]},model:{value:e.options.advanced.autoUpdates,callback:function(n){e.$set(e.options.advanced,"autoUpdates",n)},expression:"options.advanced.autoUpdates"}}),s("div",{staticClass:"aioseo-description"},[e.options.advanced.autoUpdates==="all"?s("span",[e._v(e._s(e.strings.allDescription))]):e._e(),e.options.advanced.autoUpdates==="minor"?s("span",[e._v(e._s(e.strings.minorDescription))]):e._e(),e.options.advanced.autoUpdates==="none"?s("span",[e._v(e._s(e.strings.noneDescription))]):e._e()])]},proxy:!0}],null,!1,89936591)}):e._e(),e.$isPro?e._e():s("core-settings-row",{scopedSlots:e._u([{key:"name",fn:function(){return[e._v(" "+e._s(e.strings.usageTracking)+" "),s("core-tooltip",{scopedSlots:e._u([{key:"tooltip",fn:function(){return[s("div",{domProps:{innerHTML:e._s(e.strings.usageTrackingTooltip)}})]},proxy:!0}],null,!1,1886299547)},[s("svg-circle-question-mark")],1)]},proxy:!0},{key:"content",fn:function(){return[s("base-toggle",{model:{value:e.options.advanced.usageTracking,callback:function(n){e.$set(e.options.advanced,"usageTracking",n)},expression:"options.advanced.usageTracking"}}),s("div",{staticClass:"aioseo-description"},[e._v(" "+e._s(e.strings.usageTrackingDescription)+" ")])]},proxy:!0}],null,!1,309685458)}),s("core-settings-row",{attrs:{name:e.strings.uninstallAioseo},scopedSlots:e._u([{key:"content",fn:function(){return[s("base-toggle",{model:{value:e.options.advanced.uninstall,callback:function(n){e.$set(e.options.advanced,"uninstall",n)},expression:"options.advanced.uninstall"}}),s("div",{staticClass:"aioseo-description"},[e._v(" "+e._s(e.strings.uninstallAioseoDescription)+" ")])]},proxy:!0}])})],1)],1)},L=[];const w={components:{BaseCheckbox:y,BaseRadioToggle:f,CoreAlert:h,CoreCard:b,CorePostTypeOptions:T,CoreProBadge:k,CoreSettingsRow:S,CoreTooltip:$,SvgCircleQuestionMark:x},data(){return{strings:{advanced:"Advanced Settings",truSeo:"TruSEO Score & Content",truSeoDescription:"Enable our TruSEO score to help you optimize your content for maximum traffic.",headlineAnalyzer:"Headline Analyzer",headlineAnalyzerDescription:"Enable our Headline Analyzer to help you write irresistible headlines and rank better in search results.",seoAnalysis:"SEO Analysis",postTypeColumns:"Post Type Columns",includeAllPostTypes:"Include All Post Types",selectPostTypes:this.$t.sprintf("Select which Post Types you want to use the %1$s columns with.","AIOSEO"),usageTracking:"Usage Tracking",adminBarMenu:"Admin Bar Menu",adminBarMenuDescription:this.$t.sprintf("This adds %1$s to the admin toolbar for easy access to your SEO settings.","AIOSEO"),dashboardWidgets:"Dashboard Widgets",dashboardWidgetsDescription:this.$t.sprintf("This displays %1$s widgets on the dashboard.","AIOSEO"),announcements:"Announcements",announcementsDescription:"This allows you to hide plugin announcements and update details.",automaticUpdates:"Automatic Updates",all:"All (recommended)",allDescription:"You are getting the latest features, bugfixes, and security updates as they are released.",minor:"Minor Only",minorDescription:"You are getting bugfixes and security updates, but not major features.",none:"None",noneDescription:"You will need to manually update everything.",usageTrackingDescription:"By allowing us to track usage data we can better help you because we know with which WordPress configurations, themes and plugins we should test.",usageTrackingTooltip:this.$t.sprintf("Complete documentation on usage tracking is available %1$shere%2$s.",this.$t.sprintf('<strong><a href="%1$s" target="_blank">',this.$links.getDocUrl("usageTracking")),"</a></strong>"),adminBarMenuUpsell:this.$t.sprintf("This Admin Bar feature is only available for licensed %1$s users. %2$s","<strong>AIOSEO Pro</strong>",this.$links.getUpsellLink("general-settings-advanced",this.$constants.GLOBAL_STRINGS.learnMore,"admin-bar-menu",!0)),dashboardWidgetsUpsell:this.$t.sprintf("The Dashboard Widget feature is only available for licensed %1$s users. %2$s","<strong>AIOSEO Pro</strong>",this.$links.getUpsellLink("general-settings-advanced",this.$constants.GLOBAL_STRINGS.learnMore,"dashboard-widget",!0)),taxonomyColumns:"Taxonomy Columns",includeAllTaxonomies:"Include All Taxonomies",selectTaxonomies:this.$t.sprintf("Select which Taxonomies you want to use the %1$s columns with.","AIOSEO"),taxonomyColumnsUpsell:this.$t.sprintf("This feature is only for licensed %1$s users. %2$s","<strong>AIOSEO Pro</strong>",this.$links.getUpsellLink("general-settings-advanced",this.$constants.GLOBAL_STRINGS.learnMore,"taxonomy-columns",!0)),uninstallAioseo:this.$t.sprintf("Uninstall %1$s","AIOSEO"),uninstallAioseoDescription:this.$t.sprintf("Check this if you would like to remove ALL %1$s data upon plugin deletion. All settings and SEO data will be unrecoverable.","AIOSEO"),headlineAnalyzerWarning:this.$t.sprintf("The Headline Analyzer is only available in %1$s and up. %2$s","WordPress 5.2",this.$links.getDocLink(this.$constants.GLOBAL_STRINGS.learnMore,"updateWordPress",!0))}}},computed:r(o(o({},g(["settings","isUnlicensed"])),v(["options"])),{adminBarMenu:{get(){return this.isUnlicensed?!0:this.options.advanced.adminBarMenu},set(e){this.options.advanced.adminBarMenu=e}},dashboardWidgets:{get(){return this.isUnlicensed?!0:this.options.advanced.dashboardWidgets},set(e){this.options.advanced.dashboardWidgets=e}}}),methods:{versionCompare:_}},l={};var O=A(w,C,L,!1,U,null,null,null);function U(e){for(let t in l)this[t]=l[t]}var K=function(){return O.exports}();export{K as default};
