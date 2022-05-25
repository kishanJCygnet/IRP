var m=Object.defineProperty,p=Object.defineProperties;var g=Object.getOwnPropertyDescriptors;var i=Object.getOwnPropertySymbols;var v=Object.prototype.hasOwnProperty,f=Object.prototype.propertyIsEnumerable;var r=(s,t,e)=>t in s?m(s,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):s[t]=e,o=(s,t)=>{for(var e in t||(t={}))v.call(t,e)&&r(s,e,t[e]);if(i)for(var e of i(t))f.call(t,e)&&r(s,e,t[e]);return s},n=(s,t)=>p(s,g(t));import{W as h}from"./ToolsSettings.4e156902.js";import{d as l,j as c}from"./index.8469931f.js";import{n as _}from"./vueComponentNormalizer.87056a83.js";import{B as k}from"./Checkbox.5873a8d2.js";import{C as y}from"./Index.45bb8b07.js";import{C}from"./Modal.0cad4e05.js";import{C as b}from"./ProBadge.7c0de2f7.js";import{C as w}from"./Tooltip.674a9fb4.js";import{G as A,a as $}from"./Row.13b6f3f1.js";import{S as x}from"./QuestionMark.83ebd18e.js";import{S}from"./index.46919fbe.js";import{W as z,a as T,b as M}from"./Header.bde5a5e1.js";import{W as I,a as L}from"./Steps.4ea8d132.js";import"./Checkmark.e7547654.js";import"./client.93f15631.js";import"./Logo.1a5e022a.js";var R=function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("div",{staticClass:"aioseo-wizard-smart-recommendations"},[e("wizard-header"),e("wizard-container",[e("wizard-body",{scopedSlots:s._u([{key:"footer",fn:function(){return[e("div",{staticClass:"go-back"},[e("router-link",{staticClass:"no-underline",attrs:{to:s.getPrevLink}},[s._v("\u2190")]),s._v(" \xA0 "),e("router-link",{attrs:{to:s.getPrevLink}},[s._v(s._s(s.strings.goBack))])],1),e("div",{staticClass:"spacer"}),e("base-button",{attrs:{type:"gray"},on:{click:s.skipStep}},[s._v(s._s(s.strings.skipThisStep))]),e("base-button",{attrs:{type:"blue",loading:s.loading},on:{click:s.saveAndContinue}},[s._v(s._s(s.strings.saveAndContinue)+" \u2192")])]},proxy:!0}])},[e("wizard-steps"),e("div",{staticClass:"header"},[s._v(" "+s._s(s.strings.setupSiteAnalyzer)+" ")]),e("div",{staticClass:"description"},[s._v(" "+s._s(s.strings.description)+" ")]),e("div",{staticClass:"aioseo-settings-row no-border small-padding"},[e("div",{staticClass:"settings-name"},[e("div",{staticClass:"name small-margin"},[s._v(" "+s._s(s.strings.yourEmailAddress)+" ")])]),e("base-input",{attrs:{size:"medium"},model:{value:s.smartRecommendations.accountInfo,callback:function(a){s.$set(s.smartRecommendations,"accountInfo",a)},expression:"smartRecommendations.accountInfo"}}),e("div",{staticClass:"aioseo-description"},[s._v(" "+s._s(s.strings.yourEmailIsNeeded)+" ")])],1),s.$isPro?s._e():e("div",{staticClass:"aioseo-settings-row no-border no-margin small-padding"},[e("div",{staticClass:"settings-name"},[e("div",{staticClass:"name small-margin"},[s._v(" "+s._s(s.strings.helpMakeAioseoBetter)+" "),e("core-tooltip",{scopedSlots:s._u([{key:"tooltip",fn:function(){return[e("div",{domProps:{innerHTML:s._s(s.strings.usageTrackingTooltip)}})]},proxy:!0}],null,!1,1886299547)},[e("svg-circle-question-mark")],1)],1)]),e("base-toggle",{model:{value:s.smartRecommendations.usageTracking,callback:function(a){s.$set(s.smartRecommendations,"usageTracking",a)},expression:"smartRecommendations.usageTracking"}},[s._v(" "+s._s(s.strings.yesCountMeIn)+" ")])],1)],1),e("wizard-close-and-exit")],1),s.showModal?e("core-modal",{attrs:{"no-header":""},scopedSlots:s._u([{key:"body",fn:function(){return[e("div",{staticClass:"aioseo-modal-body"},[e("button",{staticClass:"close",on:{click:function(a){a.stopPropagation(),s.showModal=!1}}},[e("svg-close",{on:{click:function(a){s.showModal=!1}}})],1),e("h3",[s._v(s._s(s.strings.wouldYouLikeToPurchase))]),e("div",{staticClass:"available-features",domProps:{innerHTML:s._s(s.strings.theseFeaturesAreAvailable)}}),s._l(s.getSelectedUpsellFeatures,function(a,d){return e("div",{key:d,staticClass:"aioseo-settings-row feature-grid small-padding medium-margin"},[e("grid-row",[e("grid-column",{attrs:{xs:"11"}},[e("div",{staticClass:"settings-name"},[e("div",{staticClass:"name small-margin"},[s._v(" "+s._s(a.name)+" "),s.needsUpsell(a)?e("core-pro-badge"):s._e()],1),e("div",{staticClass:"aioseo-description-text"},[s._v(" "+s._s(a.description)+" ")])])]),e("grid-column",{attrs:{xs:"1"}},[e("base-checkbox",{staticClass:"no-clicks",attrs:{round:"",type:"green",value:!0},nativeOn:{click:function(U){return s.preventUncheck.apply(null,arguments)}}})],1)],1)],1)}),e("div",{staticClass:"available-features no-access",domProps:{innerHTML:s._s(s.strings.youWontHaveAccess)}}),e("div",{staticClass:"actions"},[e("div",{staticClass:"spacer"}),e("div",{staticClass:"go-back"},[e("router-link",{attrs:{to:s.getNextLink}},[s._v(s._s(s.strings.illDoItLater))])],1),e("base-button",{attrs:{type:"green",loading:s.loadingModal},on:{click:s.purchase}},[s._v(s._s(s.strings.purchaseAndInstallNow))])],1),e("core-alert",{attrs:{type:"yellow"},domProps:{innerHTML:s._s(s.strings.bonusText)}})],2)]},proxy:!0}],null,!1,721331571)}):s._e()],1)},P=[];const W={components:{BaseCheckbox:k,CoreAlert:y,CoreModal:C,CoreProBadge:b,CoreTooltip:w,GridColumn:A,GridRow:$,SvgCircleQuestionMark:x,SvgClose:S,WizardBody:z,WizardCloseAndExit:I,WizardContainer:T,WizardHeader:M,WizardSteps:L},mixins:[h],data(){return{loading:!1,stage:"smart-recommendations",showModal:!1,loadingModal:!1,strings:{setupSiteAnalyzer:"Setup Site Analyzer + Smart Recommendations",description:this.$t.sprintf("Get helpful suggestions from %1$s on how to optimize your website content, so you can rank higher in search results.","AIOSEO"),yourEmailAddress:"Your Email Address",yourEmailIsNeeded:"Your email is needed so you can receive SEO recommendations. This email will also be used to connect your site with our SEO API.",helpMakeAioseoBetter:this.$t.sprintf("Help make %1$s better for everyone","AIOSEO"),yesCountMeIn:"Yes, count me in",wouldYouLikeToPurchase:"Would you like to purchase and install the following features now?",theseFeaturesAreAvailable:"An upgrade is required to unlock the following features.",youWontHaveAccess:"You won't have access to this functionality until the extensions have been purchased and installed.",illDoItLater:"I'll do it later",purchaseAndInstallNow:"Purchase and Install Now",bonusText:this.$t.sprintf("%1$sBonus:%2$s You can upgrade your plan today and %3$ssave %4$s off%5$s (discount auto-applied).","<strong>","</strong>","<strong>","50%","</strong>"),usageTrackingTooltip:this.$t.sprintf("Complete documentation on usage tracking is available %1$shere%2$s.",this.$t.sprintf('<strong><a href="%1$s" target="_blank">',this.$links.getDocUrl("usageTracking")),"</a></strong>")}}},computed:n(o(o({},l(["internalOptions"])),l("wizard",{smartRecommendations:"smartRecommendations",presetFeatures:"features"})),{selectedFeaturesNeedsUpsell(){let s=!1;return this.presetFeatures.forEach(t=>{this.needsUpsell(this.features.find(e=>e.value===t))&&(s=!0)}),s}}),methods:n(o(o({},c(["saveConnectToken"])),c("wizard",["saveWizard"])),{purchase(){this.modalLoading=!0;const s=`&license-redirect=${btoa(this.$aioseo.urls.aio.wizard)}#/license-key`;window.open("https://aioseo.com/pricing/?features[]="+this.getSelectedUpsellFeatures.map(t=>t.value).join("&features[]=")+s),this.$router.push(this.getNextLink)},saveAndContinue(){this.loading=!0,this.saveWizard("smartRecommendations").then(()=>{if(!this.selectedFeaturesNeedsUpsell)return this.$router.push(this.getNextLink);this.showModal=!0,this.loading=!1})},skipStep(){this.saveWizard(),this.$router.push(this.getNextLink)},preventUncheck(s){s.preventDefault(),s.stopPropagation()}}),mounted(){this.smartRecommendations.accountInfo=this.$aioseo.user.email}},u={};var E=_(W,R,P,!1,N,null,null,null);function N(s){for(let t in u)this[t]=u[t]}var ts=function(){return E.exports}();export{ts as default};
