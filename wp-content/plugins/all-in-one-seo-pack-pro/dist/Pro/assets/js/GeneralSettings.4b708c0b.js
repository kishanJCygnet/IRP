var d=Object.defineProperty,g=Object.defineProperties;var h=Object.getOwnPropertyDescriptors;var o=Object.getOwnPropertySymbols;var _=Object.prototype.hasOwnProperty,y=Object.prototype.propertyIsEnumerable;var a=(e,s,t)=>s in e?d(e,s,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[s]=t,i=(e,s)=>{for(var t in s||(s={}))_.call(s,t)&&a(e,t,s[t]);if(o)for(var t of o(s))y.call(s,t)&&a(e,t,s[t]);return e},r=(e,s)=>g(e,h(s));import{d as m,j as f,e as v}from"./index.8469931f.js";import{C as x}from"./Card.213902d3.js";import{C as $}from"./GettingStarted.125797ff.js";import{C as p}from"./SettingsRow.eb71f07b.js";import"./ToolsSettings.4e156902.js";import{L as k}from"./License.429f3655.js";import{n as u}from"./vueComponentNormalizer.87056a83.js";import{C as T}from"./Index.45bb8b07.js";import{u as K}from"./index.46919fbe.js";import{S as b}from"./Rocket.8cc34606.js";import"./Tooltip.674a9fb4.js";import"./client.93f15631.js";import"./QuestionMark.83ebd18e.js";import"./Slide.f5d21606.js";import"./Row.13b6f3f1.js";import"./Book.b6a9040c.js";var S=function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("core-settings-row",{attrs:{name:e.strings.licenseKey},scopedSlots:e._u([{key:"description",fn:function(){return[e._v(" "+e._s(e.strings.licenseKeyDescription)+" ")]},proxy:!0},{key:"content",fn:function(){return[e.options.general.licenseKey?e._e():t("div",{domProps:{innerHTML:e._s(e.enterKey)}}),e.license.isActive?t("div",{domProps:{innerHTML:e._s(e.planIsActive)}}):e._e(),e.options.general.licenseKey&&!e.license.isActive?t("core-alert",{attrs:{type:"red"}},[t("strong",[e._v(e._s(e.yourLicenseIsText))]),e._v(" "+e._s(e.strings.aValidLicenseIsRequired)+" "),t("div",{staticClass:"buttons"},[t("base-button",{attrs:{type:"green",size:"small",tag:"a",target:"_blank",href:e.$links.getUpsellUrl("feature-manager-upgrade","no-license-key","pricing")}},[e._v(" "+e._s(e.strings.purchaseLicense)+" ")])],1)]):e._e(),t("form",{staticClass:"license-key"},[t("input",{staticStyle:{display:"none"},attrs:{type:"text",name:"username",autocomplete:"username"}}),t("base-input",{class:{"aioseo-active":e.options.general.licenseKey,"aioseo-error":e.error&&!e.licenseKey||e.options.general.licenseKey&&!e.license.isActive},attrs:{type:"password",placeholder:e.strings.placeholder,readonly:!!e.options.general.licenseKey,disabled:!!e.options.general.licenseKey,"append-icon":"circle-check",autocomplete:"new-password"},model:{value:e.licenseKey,callback:function(n){e.licenseKey=n},expression:"licenseKey"}}),!e.options.general.licenseKey||e.deactivating?t("base-button",{attrs:{type:"green",loading:e.loading,disabled:!e.licenseKey},on:{click:function(n){return n.preventDefault(),e.processActivateLicense.apply(null,arguments)}}},[e._v(" "+e._s(e.strings.connect)+" ")]):e._e()],1),e.error?t("core-alert",{staticClass:"license-key-error",attrs:{type:"red"},domProps:{innerHTML:e._s(e.error)}}):e._e(),e.internalOptions.internal.license.level?t("div",{staticClass:"aioseo-description",domProps:{innerHTML:e._s(e.licenseKeyTypeExpiration)}}):e._e(),e.options.general.licenseKey&&e.$allowed("aioseo_admin")?t("a",{staticClass:"deactivate-license",attrs:{href:"#"},on:{click:function(n){return n.preventDefault(),e.processDeactivate.apply(null,arguments)}}},[e._v(" "+e._s(e.strings.deactivate)+" ")]):e._e()]},proxy:!0}])})},w=[];const L={components:{CoreAlert:T,CoreSettingsRow:p},mixins:[k],data(){return{loading:!1,deactivating:!1,error:null,licenseKey:null,strings:{purchasedBoldText:this.$t.sprintf("<strong>%1$s %2$s</strong>","All in One SEO","Pro"),licenseKey:"License Key",licenseKeyDescription:"Your license key provides access to updates and addons.",placeholder:"Paste your license key here",connect:"Connect",deactivate:"Deactivate this license key",aValidLicenseIsRequired:"A valid license key is required in order to enable Pro features and continue to receive automatic updates.",purchaseLicense:"Purchase License"}}},computed:r(i({},m(["internalOptions","options","license"])),{enterKey(){return this.$t.sprintf("Enter your license key below to activate %1$s!",this.strings.purchasedBoldText)},planIsActive(){return this.$t.sprintf("Your %1$s plan is active! \u{1F642}",this.strings.purchasedBoldText)},licenseKeyTypeExpiration(){const e=this.internalOptions.internal.license.expires?this.$moment.unix(this.internalOptions.internal.license.expires).format("MM/DD/YYYY"):null,s=this.internalOptions.internal.license.expires?this.$t.sprintf("(expires: %1$s)","<strong>"+e+"</strong>"):"",t="<strong>"+K(this.internalOptions.internal.license.level)+"</strong>";return this.$t.sprintf("Your license level is %1$s %2$s",t,s)},licenseKeyExpired(){return this.$t.sprintf("The license key provided has expired. Please %1$srenew your license%2$s to continue receiving automatic updates.",'<a href="'+this.$links.utmUrl("general-settings","license-box-error")+'">',"</a>")}}),methods:r(i({},f(["activate","deactivate"])),{processActivateLicense(){this.error=null,this.loading=!0,this.activate(this.licenseKey).then(()=>{this.loading=!1,this.$aioseo.internalOptions.internal.license.expired=!1}).catch(e=>{if(this.licenseKey=null,this.loading=!1,!e||!e.response||!e.response.body||!e.response.body.error||!e.response.body.licenseData){this.error="An unknown error occurred, please try again later.";return}const s=e.response.body.licenseData;s.invalid?this.error="The license key provided is invalid. Please use a different key to continue receiving automatic updates.":s.disabled?this.error="The license key provided is disabled. Please use a different key to continue receiving automatic updates.":s.expired?this.error=this.licenseKeyExpired:s.activationsError?this.error="This license key has reached the maximum number of activations. Please deactivate it from another site or purchase a new license to continue receiving automatic updates.":(s.connectionError||s.requestError)&&(this.error="There was an error connecting to the licensing API. Please try again later.")})},processDeactivate(){this.loading=!0,this.deactivating=!0,this.error=null,this.$store.commit("updateInternalOption",{groups:["internal","license"],key:"expired",value:!1}),this.$aioseo.internalOptions.internal.license.expired=!1,this.deactivate().then(()=>this.licenseKey=null).then(()=>this.deactivating=!1).then(()=>this.loading=!1)}}),mounted(){this.licenseKey=this.options.general.licenseKey}},l={};var P=u(L,S,w,!1,A,null,null,null);function A(e){for(let s in l)this[s]=l[s]}var C=function(){return P.exports}(),z=function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",{staticClass:"aioseo-general-settings"},[e.settings.showSetupWizard&&e.$allowed("aioseo_setup_wizard")?t("core-getting-started"):e._e(),t("core-card",{attrs:{slug:"license","header-text":e.strings.license},scopedSlots:e._u([e.$isPro?null:{key:"tooltip",fn:function(){return[t("div",{domProps:{innerHTML:e._s(e.tooltipText)}}),t("br"),t("div",{staticClass:"more-tooltip-text",domProps:{innerHTML:e._s(e.moreToolTipText)}})]},proxy:!0}],null,!0)},[t("settings-license-key"),!e.settings.showSetupWizard&&e.$allowed("aioseo_setup_wizard")?t("core-settings-row",{attrs:{name:e.strings.setupWizard},scopedSlots:e._u([{key:"content",fn:function(){return[t("base-button",{attrs:{type:"blue",size:"medium",tag:"a",href:e.$aioseo.urls.aio.wizard}},[t("svg-rocket"),e._v(" "+e._s(e.strings.relaunchSetupWizard)+" ")],1),t("p",{staticClass:"aioseo-description"},[e._v(e._s(e.strings.setupWizardText))])]},proxy:!0}],null,!1,2504899611)}):e._e()],1)],1)},O=[];const E={components:{CoreCard:x,CoreGettingStarted:$,CoreSettingsRow:p,SettingsLicenseKey:C,SvgRocket:b},data(){return{strings:{license:"License",boldText:this.$t.sprintf("<strong>%1$s %2$s</strong>","All in One SEO","Free"),purchasedBoldText:this.$t.sprintf("<strong>%1$s %2$s</strong>","All in One SEO","Pro"),linkText:this.$t.sprintf("upgrading to %1$s","Pro"),moreBoldText:this.$t.sprintf("<strong>%1$s</strong>","50% off"),setupWizard:"Setup Wizard",relaunchSetupWizard:"Relaunch Setup Wizard",setupWizardText:this.$t.sprintf("Use our configuration wizard to properly set up %1$s with your WordPress website.","All in One SEO")}}},computed:r(i({},v(["settings"])),{link(){return this.$t.sprintf('<strong><a href="%1$s" target="_blank">%2$s</a></strong>',this.$links.utmUrl("general-settings","license-box-tooltip"),this.strings.linkText)},tooltipText(){return this.$t.sprintf("To unlock more features, consider %1$s.",this.link)},moreToolTipText(){return this.$t.sprintf("As a valued user you receive %1$s, automatically applied at checkout!",this.strings.moreBoldText)}})},c={};var D=u(E,z,O,!1,W,null,null,null);function W(e){for(let s in c)this[s]=c[s]}var ee=function(){return D.exports}();export{ee as default};
