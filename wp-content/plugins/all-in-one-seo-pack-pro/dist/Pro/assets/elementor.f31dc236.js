var g=Object.defineProperty;var r=Object.getOwnPropertySymbols;var h=Object.prototype.hasOwnProperty,y=Object.prototype.propertyIsEnumerable;var s=(t,e,o)=>e in t?g(t,e,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[e]=o,a=(t,e)=>{for(var o in e||(e={}))h.call(e,o)&&s(t,o,e[o]);if(r)for(var o of r(e))y.call(e,o)&&s(t,o,e[o]);return t};import{V as d}from"./js/vueComponentNormalizer.87056a83.js";import"./js/index.46919fbe.js";import{i as k,T as E}from"./js/index.e9e9dda5.js";import{a as n,s as m}from"./js/index.8469931f.js";import{x as $,p as l}from"./js/helpers.8d0189da.js";import{i as b}from"./js/isEqual.5d32e77c.js";import{A as v}from"./js/App.5e3181a8.js";import"./js/client.93f15631.js";import"./js/_baseIsEqual.ec269ff9.js";import"./js/context.2889af91.js";/* empty css                */import"./js/params.bea1a08d.js";import"./js/ToolsSettings.4e156902.js";import"./js/JsonValues.08065e69.js";import"./js/Index.45bb8b07.js";import"./js/SettingsRow.eb71f07b.js";import"./js/Row.13b6f3f1.js";import"./js/Checkbox.5873a8d2.js";import"./js/Checkmark.e7547654.js";import"./js/Tabs.861c9e1a.js";import"./js/TruSeoScore.a520926e.js";import"./js/Information.f4b75b56.js";import"./js/Slide.f5d21606.js";import"./js/Modal.0cad4e05.js";import"./js/MaxCounts.3eed5286.js";import"./js/RadioToggle.98e1e7ec.js";import"./js/GoogleSearchPreview.afe29ac4.js";import"./js/HtmlTagsEditor.7e29b31c.js";import"./js/Editor.b10855bd.js";import"./js/UnfilteredHtml.8e6e262f.js";import"./js/Tooltip.674a9fb4.js";import"./js/QuestionMark.83ebd18e.js";import"./js/Mobile.1d1f77a8.js";import"./js/Pencil.d547ebca.js";import"./js/Trash.214b5744.js";import"./js/Plus.a9b9ba75.js";import"./js/Close.5e7bcb70.js";import"./js/popup.25df8419.js";import"./js/Index.06903a01.js";import"./js/Table.7871e10d.js";import"./js/Affiliate.22291be4.js";import"./js/Blur.8490ecd2.js";import"./js/Index.ea263432.js";import"./js/Img.5f041a4d.js";import"./js/FacebookPreview.df07ea56.js";import"./js/dannie-profile.41545edf.js";import"./js/TwitterPreview.2a83c6bf.js";import"./js/Book.b6a9040c.js";import"./js/Build.1297b1bd.js";import"./js/Redirects.683302b0.js";import"./js/ProBadge.7c0de2f7.js";import"./js/External.8868c638.js";import"./js/Exclamation.356738ce.js";import"./js/Gear.c974e953.js";import"./js/Card.213902d3.js";import"./js/Textarea.d161fc2e.js";import"./js/Datepicker.a1b1f559.js";import"./js/NewsChannel.fc0a5ed5.js";import"./js/LicenseKeyBar.850cb053.js";import"./js/LogoGear.0c3dd5e3.js";class _ extends window.$e.modules.hookUI.Base{constructor(e,o,i){super(),this.hook=e,this.id=o,this.callback=i}getCommand(){return this.hook}getId(){return this.id}apply(){return this.callback()}}class A extends window.$e.modules.hookData.Base{constructor(e,o,i){super(),this.hook=e,this.id=o,this.callback=i}getCommand(){return this.hook}getId(){return this.id}apply(){return this.callback()}}function p(t,e,o){window.$e.hooks.registerUIAfter(new _(t,e,o))}function I(t,e,o){window.$e.hooks.registerDataAfter(new A(t,e,o))}let c={};const u=()=>{const t=window.elementor.documents.getCurrent();if(!["wp-post","wp-page"].includes(t.config.type))return;const e=a({},c),o=$();b(e,o)||(c=o,l())},C=()=>{k(n.state.currentPost)||window.elementor.config.document.id===window.elementor.config.document.revisions.current_id&&n.dispatch("saveCurrentPost",n.state.currentPost)},O=()=>{window.$e.internal("document/save/set-is-modified",{status:!0})};var S=()=>{p("editor/documents/attach-preview","aioseo-content-scraper-attach-preview",u),p("document/save/set-is-modified","aioseo-content-scraper-on-modified",u),I("document/save/save","aioseo-save",C),window.aioseoBus.$on("postSettingsUpdated",O)},x=()=>{if(window.elementor.config.user.introduction["aioseo-introduction"]===!0)return;const t=new window.elementorModules.editor.utils.Introduction({introductionKey:"aioseo-introduction",dialogType:"alert",dialogOptions:{id:"aioseo-introduction",headerMessage:m("New: %1$s %2$s integration","AIOSEO","Elementor"),message:m("You can now manage your SEO settings inside of %1$s via %2$s before you publish your post!","Elementor","All in One SEO"),position:{my:"center center",at:"center center"},strings:{confirm:"Got It!"},hide:{onButtonClick:!1},onConfirm:()=>{t.setViewed(),t.getDialog().hide()}}});t.show()};d.prototype.$truSEO=new E;const D=()=>{let t=window.elementor.getPreferences("ui_theme")||"auto";t==="auto"&&(t=matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"),document.body.classList.forEach(e=>{e.startsWith("aioseo-elementor-")&&document.body.classList.remove(e)}),document.body.classList.add("aioseo-elementor-"+t)},P=()=>{window.$e.routes.on("run:after",function(t,e){D(),e==="panel/page-settings/aioseo"&&(new d({store:n,data:{tableContext:window.aioseo.currentPost.context,screenContext:"sidebar"},render:o=>o(v)}).$mount("#elementor-panel-page-settings-controls"),document.getElementById("elementor-panel-page-settings").classList.add("edit-post-sidebar","aioseo-elementor-panel"),l())})},B=()=>{const t=window.elementor.modules.layouts.panel.pages.menu.Menu,e=window.elementor.getPreferences("ui_theme");t.addItem({name:"aioseo",icon:"aioseo aioseo-element-menu-icon aioseo-element-menu-icon-"+e,title:"All in One SEO",type:"page",callback:()=>{try{window.$e.routes.run("panel/page-settings/aioseo")}catch{window.$e.routes.run("panel/page-settings/settings"),window.$e.routes.run("panel/page-settings/aioseo")}}},"more")},w=()=>{B(),P(),x(),S()};let f=!1;window.elementor&&(setTimeout(w),f=!0);(function(t){f||t(window).on("elementor:init",()=>{window.elementor.on("panel:init",()=>{setTimeout(w)})})})(window.jQuery);
