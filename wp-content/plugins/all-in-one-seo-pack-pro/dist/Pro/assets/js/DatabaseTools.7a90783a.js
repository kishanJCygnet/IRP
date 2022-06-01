var d=Object.defineProperty,u=Object.defineProperties;var p=Object.getOwnPropertyDescriptors;var a=Object.getOwnPropertySymbols;var _=Object.prototype.hasOwnProperty,m=Object.prototype.propertyIsEnumerable;var r=(s,t,e)=>t in s?d(s,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):s[t]=e,i=(s,t)=>{for(var e in t||(t={}))_.call(t,e)&&r(s,e,t[e]);if(a)for(var e of a(t))m.call(t,e)&&r(s,e,t[e]);return s},n=(s,t)=>u(s,p(t));import{j as f}from"./index.8469931f.js";import{a as h}from"./ToolsSettings.4e156902.js";import{n as b}from"./vueComponentNormalizer.87056a83.js";import{B as L}from"./Checkbox.5873a8d2.js";import{C as v}from"./Index.45bb8b07.js";import{C as S}from"./Card.213902d3.js";import{C as k}from"./Modal.0cad4e05.js";import{C as B}from"./SettingsRow.eb71f07b.js";import{G as y,a as C}from"./Row.13b6f3f1.js";import{S as w}from"./Checkmark.e7547654.js";import{S as z}from"./index.46919fbe.js";import"./Tooltip.674a9fb4.js";import"./client.93f15631.js";import"./QuestionMark.83ebd18e.js";import"./Slide.f5d21606.js";var $=function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("div",{staticClass:"aioseo-tools-database-tools"},[e("core-card",{attrs:{slug:"databaseTools","header-text":s.strings.resetRestoreSettings}},[e("core-settings-row",{attrs:{name:s.strings.selectSettings},scopedSlots:s._u([{key:"content",fn:function(){return[s.showSuccess?e("core-alert",{staticClass:"reset-success",attrs:{type:"green"}},[s._v(" "+s._s(s.strings.resetSuccess)+" ")]):s._e(),e("div",{staticClass:"reset-settings"},[s._v(" "+s._s(s.strings.selectSettingsToReset)+" "),e("br"),e("br"),e("grid-row",{staticClass:"settings"},[e("grid-column",[e("base-checkbox",{attrs:{size:"medium"},model:{value:s.options.all,callback:function(o){s.$set(s.options,"all",o)},expression:"options.all"}},[s._v(" "+s._s(s.strings.allSettings)+" ")])],1),s._l(s.toolsSettings,function(o,c){return e("grid-column",{key:c,attrs:{xl:"3",md:"4",sm:"6"}},[s.options.all?s._e():e("base-checkbox",{attrs:{size:"medium"},model:{value:s.options[o.value],callback:function(g){s.$set(s.options,o.value,g)},expression:"options[setting.value]"}},[s._v(" "+s._s(o.label)+" ")]),o.value!=="all"&&s.options.all?e("base-checkbox",{attrs:{size:"medium",value:!0,disabled:""}},[s._v(" "+s._s(o.label)+" ")]):s._e()],1)})],2),e("base-button",{attrs:{type:"gray",size:"medium",disabled:s.canReset},on:{click:function(o){s.showModal=!0}}},[s._v(" "+s._s(s.strings.resetSelectedSettings)+" ")])],1)]},proxy:!0}])})],1),s.showLogs?e("core-card",{attrs:{slug:"databaseToolsLogs","header-text":s.strings.logs},scopedSlots:s._u([{key:"tooltip",fn:function(){return[s._v(" "+s._s(s.strings.logsTooltip)+" ")]},proxy:!0}],null,!1,3934548655)},[s.$aioseo.data.logSizes.logs404?e("core-settings-row",{attrs:{name:s.strings.logs404,align:""},scopedSlots:s._u([{key:"content",fn:function(){return[e("base-button",{staticClass:"clear-log",attrs:{type:"gray",size:"medium",loading:s.loadingLog==="logs404",disabled:s.disabledLog("logs404")},on:{click:function(o){return s.processClearLog("logs404")}}},[s.disabledLog("logs404")?e("span",[e("svg-checkmark"),s._v(" "+s._s(s.strings.cleared)+" ")],1):s._e(),s.disabledLog("logs404")?s._e():e("span",[s._v(" "+s._s(s.strings.clear404Logs)+" ")])]),e("div",{staticClass:"log-size"},[e("span",{staticClass:"size-dot",class:s.getSizeClass(s.$aioseo.data.logSizes.logs404.original)}),s._v(" "+s._s(s.$aioseo.data.logSizes.logs404.readable)+" ")])]},proxy:!0}],null,!1,1716809233)}):s._e(),s.$aioseo.data.logSizes.redirectLogs?e("core-settings-row",{attrs:{name:s.strings.redirectLogs,align:""},scopedSlots:s._u([{key:"content",fn:function(){return[e("base-button",{staticClass:"clear-log",attrs:{type:"gray",size:"medium",loading:s.loadingLog==="redirectLogs",disabled:s.disabledLog("redirectLogs")},on:{click:function(o){return s.processClearLog("redirectLogs")}}},[s.disabledLog("redirectLogs")?e("span",[e("svg-checkmark"),s._v(" "+s._s(s.strings.cleared)+" ")],1):s._e(),s.disabledLog("redirectLogs")?s._e():e("span",[s._v(" "+s._s(s.strings.clearRedirectLogs)+" ")])]),e("div",{staticClass:"log-size"},[e("span",{staticClass:"size-dot",class:s.getSizeClass(s.$aioseo.data.logSizes.redirectLogs.original)}),s._v(" "+s._s(s.$aioseo.data.logSizes.redirectLogs.readable)+" ")])]},proxy:!0}],null,!1,4167017073)}):s._e(),s.showBadBotBlockerLogs?e("core-settings-row",{attrs:{name:s.strings.badBotBlockerLogs,align:""},scopedSlots:s._u([{key:"content",fn:function(){return[e("base-button",{staticClass:"clear-log",attrs:{type:"gray",size:"medium",loading:s.loadingLog==="badBotBlockerLog",disabled:s.disabledLog("badBotBlockerLog")},on:{click:function(o){return s.processClearLog("badBotBlockerLog")}}},[s.disabledLog("badBotBlockerLog")?e("span",[e("svg-checkmark"),s._v(" "+s._s(s.strings.cleared)+" ")],1):s._e(),s.disabledLog("badBotBlockerLog")?s._e():e("span",[s._v(" "+s._s(s.strings.clearBadBotBlockerLogs)+" ")])]),e("div",{staticClass:"log-size"},[e("span",{staticClass:"size-dot",class:s.getSizeClass(s.$aioseo.data.logSizes.badBotBlockerLog.original)}),s._v(" "+s._s(s.$aioseo.data.logSizes.badBotBlockerLog.readable)+" ")])]},proxy:!0}],null,!1,649968002)}):s._e()],1):s._e(),s.showModal?e("core-modal",{attrs:{"no-header":""},scopedSlots:s._u([{key:"body",fn:function(){return[e("div",{staticClass:"aioseo-modal-body"},[e("button",{staticClass:"close",on:{click:function(o){o.stopPropagation(),s.showModal=!1}}},[e("svg-close",{on:{click:function(o){s.showModal=!1}}})],1),e("h3",[s._v(s._s(s.strings.areYouSureReset))]),e("div",{staticClass:"reset-description",domProps:{innerHTML:s._s(s.strings.actionCannotBeUndone)}}),e("base-button",{attrs:{type:"blue",size:"medium",loading:s.loading},on:{click:s.processResetSettings}},[s._v(" "+s._s(s.strings.yesIHaveBackup)+" ")]),e("base-button",{attrs:{type:"gray",size:"medium"},on:{click:function(o){s.showModal=!1}}},[s._v(" "+s._s(s.strings.noBackup)+" ")])],1)]},proxy:!0}],null,!1,2298756748)}):s._e()],1)},x=[];const R={components:{BaseCheckbox:L,CoreAlert:v,CoreCard:S,CoreModal:k,CoreSettingsRow:B,GridColumn:y,GridRow:C,SvgCheckmark:w,SvgClose:z},mixins:[h],data(){return{clearedLogs:{badBotBlockerLogs:!1,redirectLogs:!1,logs404:!1},showModal:!1,loading:!1,loadingLog:null,showSuccess:!1,options:{},strings:{resetRestoreSettings:"Reset / Restore Settings",selectSettings:"Select Settings",selectSettingsToReset:"Select settings that you would like to reset:",resetSelectedSettings:"Reset Selected Settings to Default",resetSuccess:"Your settings have been reset successfully!",areYouSureReset:"Are you sure you want to reset the selected settings to default?",actionCannotBeUndone:this.$t.sprintf("This action cannot be undone. Before taking this action, we recommend that you make a %1$sfull website backup first%2$s.","<strong>","</strong>"),yesIHaveBackup:"Yes, I have a backup and want to reset the settings",noBackup:"No, I need to make a backup",logs:"Logs",badBotBlockerLogs:"Bad Bot Blocker Logs",cleared:"Cleared",clearBadBotBlockerLogs:"Clear Bad Bot Blocker Logs",logs404:"404 Logs",clear404Logs:"Clear 404 Logs",redirectLogs:"Redirect Logs",clearRedirectLogs:"Clear Redirect Logs",allSettings:this.$t.sprintf("All %1$s Settings","AIOSEO"),logsTooltip:`Log sizes may fluctuate and not always be 100% accurate since the results can be cached. Also after clearing a log, it may not show as "0" since database tables also include additional information such as indexes that we don't clear.`}}},computed:{canReset(){const s=[];return Object.keys(this.options).forEach(t=>{s.push(this.options[t])}),!s.some(t=>t)},showLogs(){return this.showBadBotBlockerLogs||this.$aioseo.data.logSizes.redirectLogs||this.$aioseo.data.logSizes.logs404},showBadBotBlockerLogs(){return window.aioseo.internalOptions.internal.deprecatedOptions.includes("badBotBlocker")}},methods:n(i({},f(["resetSettings","clearLog"])),{processResetSettings(){const s=[];this.options.all?this.toolsSettings.filter(t=>t.value!=="all").forEach(t=>{s.push(t.value)}):Object.keys(this.options).forEach(t=>{this.options[t]&&s.push(t)}),this.loading=!0,this.resetSettings(s).then(()=>{this.showModal=!1,this.loading=!1,this.showSuccess=!0,this.options={},setTimeout(()=>{this.showSuccess=!1},5e3)})},getSizeClass(s){let t="green";return 262144e3<s?t="orange":1073741274<s&&(t="red"),t},processClearLog(s){this.loadingLog=s,this.clearLog(s).then(()=>{this.loadingLog=null,this.clearedLogs[s]=!0})},disabledLog(s){return!this.$aioseo.data.logSizes[s].original||this.clearedLogs[s]}})},l={};var T=b(R,$,x,!1,M,null,null,null);function M(s){for(let t in l)this[t]=l[t]}var Q=function(){return T.exports}();export{Q as default};