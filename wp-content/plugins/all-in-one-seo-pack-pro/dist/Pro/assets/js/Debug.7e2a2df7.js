var b=Object.defineProperty,C=Object.defineProperties;var D=Object.getOwnPropertyDescriptors;var n=Object.getOwnPropertySymbols;var f=Object.prototype.hasOwnProperty,M=Object.prototype.propertyIsEnumerable;var r=(e,t,s)=>t in e?b(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s,i=(e,t)=>{for(var s in t||(t={}))f.call(t,s)&&r(e,s,t[s]);if(n)for(var s of n(t))M.call(t,s)&&r(e,s,t[s]);return e},c=(e,t)=>C(e,D(t));import{j as y,e as k}from"./index.a8d44ca5.js";import{C as g}from"./Index.1acf3545.js";import{C as p}from"./Card.40fd6ded.js";import{C as m}from"./Modal.b59fb525.js";import{C as _}from"./SettingsRow.eb71f07b.js";import{S as h}from"./index.9b0095cc.js";import{n as o}from"./vueComponentNormalizer.87056a83.js";import"./Tooltip.674a9fb4.js";import"./client.93f15631.js";import"./QuestionMark.83ebd18e.js";import"./Slide.f5d21606.js";import"./Row.13b6f3f1.js";var v={data(){const e=this.$t.sprintf('<a href="%1$s" target="_blank">Scheduled Actions</a>',this.$aioseo.urls.admin.scheduledActions);return{showAreYouSureModal:!1,loading:{clearCache:!1,readdCapabilities:!1,rerunMigrations:!1,removeDuplicates:!1,unescapeData:!1,clearImageData:!1,clearVideoData:!1,restartMigration:!1,undismissSuggestions:!1,clearLinkAssistantData:!1},strings:{debug:"Debug",warning:"Before you run any of these actions, make sure that you have fully read the description and understand the consequences as these cannot be reverted.",general:"General",clearCache:"Clear Cache",clearCacheDescription:"This action deletes all cache records in the database.",rerunMigrations:"Rerun Migrations",rerunMigrationsDescription:"This action will rerun all update migrations since 4.0.0, excluding the V3 migration (which can be retriggered below).",readdCapabilities:"Readd Capabilities",readdCapabilitiesDescription:"This action will readd our capabilities (permissions) for all users.",removeDuplicates:"Remove Duplicates",removeDuplicatesDescription:"This action will remove any duplicate records that are found in the <code>aioseo_posts</code> or <code>aioseo_terms</code> table.",unescapeData:"Unescape Data",unescapeDataDescription:this.$t.sprintf("This action will clean posts/terms whose data is corrupted via Action Scheduler. To speed up this process, go to %1$s and run the <code>aioseo_unslash_escaped_data_posts</code> or <code>aioseo_unslash_escaped_data_terms</code> action.",e),sitemap:"Sitemap",clearImageData:"Clear Image Data",clearImageDataDescription:this.$t.sprintf("This action removes all image data from the database, forcing a site-wide rescan via Action Scheduler. To speed up the image scan, go to %1$s and run the <code>aioseo_video_sitemap_scan</code> action.",e),clearVideoData:"Clear Video Data",clearVideoDataDescription:this.$t.sprintf("This action removes all video data from the database, forcing a site-wide rescan via Action Scheduler. To speed up the video scan, go to %1$s and run the <code>aioseo_video_sitemap_scan</code> action.",e),linkAssistant:"Link Assistant",undismissSuggestions:"Undismiss Suggestions",undismissSuggestionsDescription:this.$t.sprintf("This action removes the dismissed state from all suggestions, which makes them appear in the UI again.",e),clearLinkAssistantData:"Clear Data",clearLinkAssistantDataDescription:this.$t.sprintf("This action removes all Link Assistant data from the database, forcing a site-wide rescan via Action Scheduler. The various Link Assistant scans can be sped up through the %1$s",e),restartMigration:"Restart v3 Migration",restartMigrationDescriptionPart1:"This action restarts the migration from v3 to v4. All settings are overidden immediately; the post/term meta will gradually be updated via Action Scheduler.",restartMigrationDescriptionPart2:this.$t.sprintf("To speed up the post/term meta migration, go to %1$s and run the <code>aioseo_migrate_post_meta</code> or <code>aioseo_migrate_term_meta action</code>.",e),areYouSureTitle:"Are you sure you want to restart the migration?",cannotBeUndone:"This action cannot be undone.",startMigration:"Yes, restart the migration",noChangedMind:"No, I changed my mind",migration:"Migration"}}},methods:c(i({},y(["doTask"])),{clearCache(){this.loading.clearingCache=!0,this.doTask("clear-cache").then(()=>{this.loading.clearingCache=!1,console.log("Cache has been cleared.")},e=>console.error("Cache could not be cleared:",e))},readdCapabilities(){this.loading.readdCapabilities=!0,this.doTask("readd-capabilities").then(()=>{this.loading.readdCapabilities=!1,console.log("Capabilities have been readded.")},e=>console.error("Capabilities could not be readded:",e))},rerunMigrations(){this.loading.rerunMigrations=!0,this.doTask("rerun-migrations").then(()=>{this.loading.rerunMigrations=!1,console.log("Migrations have been restarted.")},e=>console.error("Migrations could not be restarted:",e))},removeDuplicates(){this.loading.removeDuplicates=!0,this.doTask("remove-duplicates").then(()=>{this.loading.removeDuplicates=!1,console.log("Duplicates have been removed.")},e=>console.error("Duplicates could not be removed:",e))},unescapeData(){this.loading.unescapeData=!0,this.doTask("unescape-data").then(()=>{this.loading.unescapeData=!1,console.log("Cleaning procedure for escaped data has been scheduled.")},e=>console.error("Cleaning procedure for escaped data could not be scheduled:",e))},clearImageData(){this.loading.clearImageData=!0,this.doTask("clear-image-data").then(()=>{this.loading.clearImageData=!1,console.log("Image data has been wiped.")},e=>console.error("Image data could not be wiped:",e))},clearVideoData(){this.loading.clearVideoData=!0,this.doTask("clear-video-data").then(()=>{this.loading.clearVideoData=!1,console.log("Video data has been cleared.")},e=>console.error("Video data could not be cleared:",e))},undismissSuggestions(){this.loading.undismissSuggestions=!0,this.doTask("undismiss-suggestions").then(()=>{this.loading.undismissSuggestions=!1,console.log("Suggestions have been undismissed.")},e=>console.error("Suggestions could not be undismissed:",e))},clearLinkAssistantData(){this.loading.clearLinkAssistantData=!0,this.doTask("clear-link-assistant-data").then(()=>{this.loading.clearLinkAssistantData=!1,console.log("Link Assistant data has been cleared.")},e=>console.error("Link data Assistant could not be cleared:",e))},maybeRestartMigration(){this.showAreYouSureModal=!0},restartMigration(){this.showAreYouSureModal=!1,this.loading.restartMigration=!0,this.doTask("restart-v3-migration").then(()=>{this.loading.restartMigration=!1,console.log("Migration has been restarted.")},e=>console.error("Migration could not be restarted:",e))}})},w=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"aioseo-tools-debug"},[s("core-card",{attrs:{slug:"debug","header-text":e.strings.debug}},[s("core-alert",{staticClass:"warning",attrs:{type:"yellow"}},[e._v(" "+e._s(e.strings.warning)+" ")]),s("core-settings-row",{staticClass:"first-row",attrs:{name:e.strings.general,align:""},scopedSlots:e._u([{key:"content",fn:function(){return[s("div",{staticClass:"action-row"},[s("base-button",{staticClass:"clear-cache",attrs:{type:"blue",size:"medium",loading:e.loading.clearCache},on:{click:e.clearCache}},[e._v(" "+e._s(e.strings.clearCache)+" ")]),s("div",{staticClass:"aioseo-description"},[e._v(" "+e._s(e.strings.clearCacheDescription)+" ")])],1),s("div",{staticClass:"action-row"},[s("base-button",{staticClass:"readd-capabilities",attrs:{type:"blue",size:"medium",loading:e.loading.readdCapabilities},on:{click:e.readdCapabilities}},[e._v(" "+e._s(e.strings.readdCapabilities)+" ")]),s("div",{staticClass:"aioseo-description"},[e._v(" "+e._s(e.strings.readdCapabilitiesDescription)+" ")])],1),s("div",{staticClass:"action-row"},[s("base-button",{staticClass:"rerun-migrations",attrs:{type:"blue",size:"medium",loading:e.loading.rerunMigrations},on:{click:e.rerunMigrations}},[e._v(" "+e._s(e.strings.rerunMigrations)+" ")]),s("div",{staticClass:"aioseo-description"},[e._v(" "+e._s(e.strings.rerunMigrationsDescription)+" ")])],1),s("div",{staticClass:"action-row"},[s("base-button",{staticClass:"remove-duplicates",attrs:{type:"blue",size:"medium",loading:e.loading.removeDuplicates},on:{click:e.removeDuplicates}},[e._v(" "+e._s(e.strings.removeDuplicates)+" ")]),s("div",{staticClass:"aioseo-description",domProps:{innerHTML:e._s(e.strings.removeDuplicatesDescription)}})],1),s("div",{staticClass:"action-row"},[s("base-button",{staticClass:"unescape-data",attrs:{type:"blue",size:"medium",loading:e.loading.unescapeData},on:{click:e.unescapeData}},[e._v(" "+e._s(e.strings.unescapeData)+" ")]),s("div",{staticClass:"aioseo-description",domProps:{innerHTML:e._s(e.strings.unescapeDataDescription)}})],1)]},proxy:!0}])}),s("core-settings-row",{attrs:{name:e.strings.sitemap,align:""},scopedSlots:e._u([{key:"content",fn:function(){return[s("div",{staticClass:"action-row"},[s("base-button",{staticClass:"clear-image-data",attrs:{type:"blue",size:"medium",loading:e.loading.clearImageData},on:{click:e.clearImageData}},[e._v(" "+e._s(e.strings.clearImageData)+" ")]),s("div",{staticClass:"aioseo-description",domProps:{innerHTML:e._s(e.strings.clearImageDataDescription)}})],1),s("div",{staticClass:"action-row"},[s("base-button",{staticClass:"clear-video-data",attrs:{type:"blue",size:"medium",loading:e.loading.clearVideoData},on:{click:e.clearVideoData}},[e._v(" "+e._s(e.strings.clearVideoData)+" ")]),s("div",{staticClass:"aioseo-description",domProps:{innerHTML:e._s(e.strings.clearVideoDataDescription)}})],1)]},proxy:!0}])}),s("core-settings-row",{attrs:{name:e.strings.linkAssistant,align:""},scopedSlots:e._u([{key:"content",fn:function(){return[s("div",{staticClass:"action-row"},[s("base-button",{staticClass:"undismiss-suggestions",attrs:{type:"blue",size:"medium",loading:e.loading.undismissSuggestions},on:{click:e.undismissSuggestions}},[e._v(" "+e._s(e.strings.undismissSuggestions)+" ")]),s("div",{staticClass:"aioseo-description",domProps:{innerHTML:e._s(e.strings.undismissSuggestionsDescription)}})],1),s("div",{staticClass:"action-row"},[s("base-button",{staticClass:"clear-link-data",attrs:{type:"blue",size:"medium",loading:e.loading.clearLinkAssistantData},on:{click:e.clearLinkAssistantData}},[e._v(" "+e._s(e.strings.clearLinkAssistantData)+" ")]),s("div",{staticClass:"aioseo-description",domProps:{innerHTML:e._s(e.strings.clearLinkAssistantDataDescription)}})],1)]},proxy:!0}])}),s("core-settings-row",{attrs:{name:e.strings.migration,align:""},scopedSlots:e._u([{key:"content",fn:function(){return[e.$aioseo.data.isDev?s("base-button",{staticClass:"redo-v3-migration",attrs:{type:"blue",size:"medium",loading:e.loading.restartMigration},on:{click:e.maybeRestartMigration}},[e._v(" "+e._s(e.strings.restartMigration)+" ")]):e._e(),s("div",{staticClass:"aioseo-description"},[e._v(" "+e._s(e.strings.restartMigrationDescriptionPart1)+" ")]),s("div",{staticClass:"aioseo-description",domProps:{innerHTML:e._s(e.strings.restartMigrationDescriptionPart2)}})]},proxy:!0}])}),e.showAreYouSureModal?s("core-modal",{attrs:{"no-header":""},scopedSlots:e._u([{key:"body",fn:function(){return[s("div",{staticClass:"aioseo-modal-body"},[s("button",{staticClass:"close",on:{click:function(a){a.stopPropagation(),e.showAreYouSureModal=!1}}},[s("svg-close",{on:{click:function(a){e.showDeleteModal=!1}}})],1),s("h3",[e._v(e._s(e.strings.areYouSureTitle))]),s("div",{staticClass:"reset-description",domProps:{innerHTML:e._s(e.strings.cannotBeUndone)}}),s("base-button",{attrs:{type:"blue",size:"medium"},on:{click:e.restartMigration}},[e._v(" "+e._s(e.strings.startMigration)+" ")]),s("base-button",{attrs:{type:"gray",size:"medium"},on:{click:function(a){e.showAreYouSureModal=!1}}},[e._v(" "+e._s(e.strings.noChangedMind)+" ")])],1)]},proxy:!0}],null,!1,14870036)}):e._e()],1)],1)},S=[];const T={components:{CoreAlert:g,CoreCard:p,CoreModal:m,CoreSettingsRow:_,SvgClose:h},mixins:[v]},l={};var A=o(T,w,S,!1,$,null,null,null);function $(e){for(let t in l)this[t]=l[t]}var L=function(){return A.exports}(),x=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"aioseo-tools-debug"},[s("core-card",{attrs:{slug:"debug","header-text":e.strings.debug}},[s("core-alert",{staticClass:"warning",attrs:{type:"yellow"}},[e._v(" "+e._s(e.strings.warning)+" ")]),s("core-settings-row",{staticClass:"first-row",attrs:{name:e.strings.general,align:""},scopedSlots:e._u([{key:"content",fn:function(){return[s("div",{staticClass:"action-row"},[s("base-button",{staticClass:"clear-cache",attrs:{type:"blue",size:"medium",loading:e.loading.clearCache},on:{click:e.clearCache}},[e._v(" "+e._s(e.strings.clearCache)+" ")]),s("div",{staticClass:"aioseo-description"},[e._v(" "+e._s(e.strings.clearCacheDescription)+" ")])],1),s("div",{staticClass:"action-row"},[s("base-button",{staticClass:"readd-capabilities",attrs:{type:"blue",size:"medium",loading:e.loading.readdCapabilities},on:{click:e.readdCapabilities}},[e._v(" "+e._s(e.strings.readdCapabilities)+" ")]),s("div",{staticClass:"aioseo-description"},[e._v(" "+e._s(e.strings.readdCapabilitiesDescription)+" ")])],1),s("div",{staticClass:"action-row"},[s("base-button",{staticClass:"rerun-migrations",attrs:{type:"blue",size:"medium",loading:e.loading.rerunMigrations},on:{click:e.rerunMigrations}},[e._v(" "+e._s(e.strings.rerunMigrations)+" ")]),s("div",{staticClass:"aioseo-description"},[e._v(" "+e._s(e.strings.rerunMigrationsDescription)+" ")])],1),s("div",{staticClass:"action-row"},[s("base-button",{staticClass:"remove-duplicates",attrs:{type:"blue",size:"medium",loading:e.loading.removeDuplicates},on:{click:e.removeDuplicates}},[e._v(" "+e._s(e.strings.removeDuplicates)+" ")]),s("div",{staticClass:"aioseo-description",domProps:{innerHTML:e._s(e.strings.removeDuplicatesDescription)}})],1),s("div",{staticClass:"action-row"},[s("base-button",{staticClass:"unescape-data",attrs:{type:"blue",size:"medium",loading:e.loading.unescapeData},on:{click:e.unescapeData}},[e._v(" "+e._s(e.strings.unescapeData)+" ")]),s("div",{staticClass:"aioseo-description",domProps:{innerHTML:e._s(e.strings.unescapeDataDescription)}})],1)]},proxy:!0}])}),s("core-settings-row",{attrs:{name:"Sitemap",align:""},scopedSlots:e._u([{key:"content",fn:function(){return[s("div",{staticClass:"action-row"},[s("base-button",{staticClass:"clear-image-data",attrs:{type:"blue",size:"medium",loading:e.loading.clearImageData},on:{click:e.clearImageData}},[e._v(" "+e._s(e.strings.clearImageData)+" ")]),s("div",{staticClass:"aioseo-description",domProps:{innerHTML:e._s(e.strings.clearImageDataDescription)}})],1)]},proxy:!0}])}),s("core-settings-row",{attrs:{name:e.strings.migration,align:""},scopedSlots:e._u([{key:"content",fn:function(){return[e.$aioseo.data.isDev?s("base-button",{staticClass:"redo-v3-migration",attrs:{type:"blue",size:"medium",loading:e.loading.restartMigration},on:{click:e.maybeRestartMigration}},[e._v(" "+e._s(e.strings.restartMigration)+" ")]):e._e(),s("div",{staticClass:"aioseo-description"},[e._v(" "+e._s(e.strings.restartMigrationDescriptionPart1)+" ")]),s("div",{staticClass:"aioseo-description",domProps:{innerHTML:e._s(e.strings.restartMigrationDescriptionPart2)}})]},proxy:!0}])}),e.showAreYouSureModal?s("core-modal",{attrs:{"no-header":""},scopedSlots:e._u([{key:"body",fn:function(){return[s("div",{staticClass:"aioseo-modal-body"},[s("button",{staticClass:"close",on:{click:function(a){a.stopPropagation(),e.showAreYouSureModal=!1}}},[s("svg-close",{on:{click:function(a){e.showDeleteModal=!1}}})],1),s("h3",[e._v(e._s(e.strings.areYouSureTitle))]),s("div",{staticClass:"reset-description",domProps:{innerHTML:e._s(e.strings.cannotBeUndone)}}),s("base-button",{attrs:{type:"blue",size:"medium"},on:{click:e.restartMigration}},[e._v(" "+e._s(e.strings.startMigration)+" ")]),s("base-button",{attrs:{type:"gray",size:"medium"},on:{click:function(a){e.showAreYouSureModal=!1}}},[e._v(" "+e._s(e.strings.noChangedMind)+" ")])],1)]},proxy:!0}],null,!1,14870036)}):e._e()],1)],1)},P=[];const z={components:{CoreAlert:g,CoreCard:p,CoreModal:m,CoreSettingsRow:_,SvgClose:h},mixins:[v]},d={};var I=o(z,x,P,!1,V,null,null,null);function V(e){for(let t in d)this[t]=d[t]}var H=function(){return I.exports}(),Y=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"aioseo-tools-debug"},[e.$isPro&&e.$aioseo.data.isDev?s("Debug"):e._e(),!e.$isPro&&e.$aioseo.data.isDev?s("DebugLite"):e._e()],1)},R=[];const U={components:{Debug:L,DebugLite:H},computed:i({},k(["isUnlicensed"]))},u={};var j=o(U,Y,R,!1,B,null,null,null);function B(e){for(let t in u)this[t]=u[t]}var se=function(){return j.exports}();export{se as default};
