(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["app"],{0:function(e,t,n){e.exports=n("56d7")},"028b":function(e,t,n){"use strict";n("a737")},"186a":function(e,t,n){"use strict";n("b9eb")},"23e8":function(e,t,n){},"34c8":function(e,t,n){"use strict";n("5269")},"41b2":function(e,t,n){"use strict";n("23e8")},4360:function(e,t,n){"use strict";var i=n("6e6d"),a=n("52c1"),o=(n("7241"),{sidebar:function(e){return e.app.sidebar},device:function(e){return e.app.device},token:function(e){return e.user.token},avatar:function(e){return e.user.avatar},name:function(e){return e.user.name}}),r=o,c=n("8c92"),s=n.n(c),u={sidebar:{opened:!s.a.get("sidebarStatus")||!!+s.a.get("sidebarStatus"),withoutAnimation:!1},device:"desktop"},l={TOGGLE_SIDEBAR:function(e){e.sidebar.opened=!e.sidebar.opened,e.sidebar.withoutAnimation=!1,e.sidebar.opened?s.a.set("sidebarStatus",1):s.a.set("sidebarStatus",0)},CLOSE_SIDEBAR:function(e,t){s.a.set("sidebarStatus",0),e.sidebar.opened=!1,e.sidebar.withoutAnimation=t},TOGGLE_DEVICE:function(e,t){e.device=t}},d={toggleSideBar:function(e){var t=e.commit;t("TOGGLE_SIDEBAR")},closeSideBar:function(e,t){var n=e.commit,i=t.withoutAnimation;n("CLOSE_SIDEBAR",i)},toggleDevice:function(e,t){var n=e.commit;n("TOGGLE_DEVICE",t)}},h={namespaced:!0,state:u,mutations:l,actions:d},p=n("83d6"),m=n.n(p),f=m.a.showSettings,b=m.a.fixedHeader,v=m.a.sidebarLogo,g={showSettings:f,fixedHeader:b,sidebarLogo:v},k={CHANGE_SETTING:function(e,t){var n=t.key,i=t.value;e.hasOwnProperty(n)&&(e[n]=i)}},w={changeSetting:function(e,t){var n=e.commit;n("CHANGE_SETTING",t)}},C={namespaced:!0,state:g,mutations:k,actions:w};i["default"].use(a["a"]);var _=new a["a"].Store({modules:{app:h,settings:C},getters:r});t["a"]=_},5269:function(e,t,n){},5273:function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("6302"),n("ce01"),n("1759"),n("7728");var i=n("6e6d"),a=(n("aa93"),n("b705")),o=n.n(a),r=(n("3880"),n("255a")),c=n.n(r),s=(n("b20f"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view")],1)}),u=[],l={name:"App"},d=l,h=n("cba8"),p=Object(h["a"])(d,s,u,!1,null,null,null),m=p.exports,f=n("4360"),b=(n("8300"),n("ea5b"),n("e551"),n("1e6f")),v=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"app-wrapper",class:e.classObj},["mobile"===e.device&&e.sidebar.opened?n("div",{staticClass:"drawer-bg",on:{click:e.handleClickOutside}}):e._e(),n("sidebar",{staticClass:"sidebar-container"}),n("div",{staticClass:"main-container"},[n("div",{class:{"fixed-header":e.fixedHeader}},[n("navbar")],1),n("app-main")],1)],1)},g=[],k=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"navbar"},[n("hamburger",{staticClass:"hamburger-container",attrs:{"is-active":e.sidebar.opened},on:{toggleClick:e.toggleSideBar}}),n("breadcrumb",{staticClass:"breadcrumb-container"})],1)},w=[],C=n("b49e"),_=n("52c1"),x=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("el-breadcrumb",{staticClass:"app-breadcrumb",attrs:{separator:"/"}},[n("transition-group",{attrs:{name:"breadcrumb"}},e._l(e.levelList,(function(t,i){return n("el-breadcrumb-item",{key:t.path},["noRedirect"===t.redirect||i==e.levelList.length-1?n("span",{staticClass:"no-redirect"},[e._v(e._s(t.meta.title))]):n("a",{on:{click:function(n){return n.preventDefault(),e.handleLink(t)}}},[e._v(e._s(t.meta.title))])])})),1)],1)},O=[],S=(n("1444"),n("654b"),n("7241"),n("041f"),n("c2ee")),y=n.n(S),E={data:function(){return{levelList:null}},watch:{$route:function(){this.getBreadcrumb()}},created:function(){this.getBreadcrumb()},methods:{getBreadcrumb:function(){var e=this.$route.matched.filter((function(e){return e.meta&&e.meta.title})),t=e[0];this.isDashboard(t)||(e=[{path:"/dashboard",meta:{title:"Dashboard"}}].concat(e)),this.levelList=e.filter((function(e){return e.meta&&e.meta.title&&!1!==e.meta.breadcrumb}))},isDashboard:function(e){var t=e&&e.name;return!!t&&t.trim().toLocaleLowerCase()==="Dashboard".toLocaleLowerCase()},pathCompile:function(e){var t=this.$route.params,n=y.a.compile(e);return n(t)},handleLink:function(e){var t=e.redirect,n=e.path;t?this.$router.push(t):this.$router.push(this.pathCompile(n))}}},$=E,B=(n("34c8"),Object(h["a"])($,x,O,!1,null,"62cc9144",null)),L=B.exports,A=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticStyle:{padding:"0 15px"},on:{click:e.toggleClick}},[n("svg",{staticClass:"hamburger",class:{"is-active":e.isActive},attrs:{viewBox:"0 0 1024 1024",xmlns:"http://www.w3.org/2000/svg",width:"64",height:"64"}},[n("path",{attrs:{d:"M408 442h480c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H408c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8zm-8 204c0 4.4 3.6 8 8 8h480c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H408c-4.4 0-8 3.6-8 8v56zm504-486H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 632H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zM142.4 642.1L298.7 519a8.84 8.84 0 0 0 0-13.9L142.4 381.9c-5.8-4.6-14.4-.5-14.4 6.9v246.3a8.9 8.9 0 0 0 14.4 7z"}})])])},M=[],j={name:"Hamburger",props:{isActive:{type:Boolean,default:!1}},methods:{toggleClick:function(){this.$emit("toggleClick")}}},P=j,H=(n("186a"),Object(h["a"])(P,A,M,!1,null,"49e15297",null)),T=H.exports,D={components:{Breadcrumb:L,Hamburger:T},computed:Object(C["a"])({},Object(_["b"])(["sidebar","avatar"])),methods:{toggleSideBar:function(){this.$store.dispatch("app/toggleSideBar")}}},I=D,G=(n("41b2"),Object(h["a"])(I,k,w,!1,null,"700d0034",null)),z=G.exports,R=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{class:{"has-logo":e.showLogo}},[e.showLogo?n("logo",{attrs:{collapse:e.isCollapse}}):e._e(),n("el-scrollbar",{attrs:{"wrap-class":"scrollbar-wrapper"}},[n("el-menu",{attrs:{"default-active":e.activeMenu,collapse:e.isCollapse,"background-color":e.variables.menuBg,"text-color":e.variables.menuText,"unique-opened":!1,"active-text-color":e.variables.menuActiveText,"collapse-transition":!1,mode:"vertical"}},e._l(e.routes,(function(e){return n("sidebar-item",{key:e.path,attrs:{item:e,"base-path":e.path}})})),1)],1)],1)},N=[],q=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"sidebar-logo-container",class:{collapse:e.collapse}},[n("transition",{attrs:{name:"sidebarLogoFade"}},[e.collapse?n("router-link",{key:"collapse",staticClass:"sidebar-logo-link",attrs:{to:"/"}},[e.logo?n("img",{staticClass:"sidebar-logo",attrs:{src:e.logo}}):n("h1",{staticClass:"sidebar-title"},[e._v(e._s(e.title)+" ")])]):n("router-link",{key:"expand",staticClass:"sidebar-logo-link",attrs:{to:"/"}},[e.logo?n("img",{staticClass:"sidebar-logo",attrs:{src:e.logo}}):e._e(),n("h1",{staticClass:"sidebar-title"},[e._v(e._s(e.title)+" ")])])],1)],1)},V=[],J={name:"SidebarLogo",props:{collapse:{type:Boolean,required:!0}},data:function(){return{title:"OCR"}}},W=J,F=(n("bc89"),Object(h["a"])(W,q,V,!1,null,"687c36b0",null)),U=F.exports,K=function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.item.hidden?e._e():n("div",[!e.hasOneShowingChild(e.item.children,e.item)||e.onlyOneChild.children&&!e.onlyOneChild.noShowingChildren||e.item.alwaysShow?n("el-submenu",{ref:"subMenu",attrs:{index:e.resolvePath(e.item.path),"popper-append-to-body":""}},[n("template",{slot:"title"},[e.item.meta?n("item",{attrs:{icon:e.item.meta&&e.item.meta.icon,title:e.item.meta.title}}):e._e()],1),e._l(e.item.children,(function(t){return n("sidebar-item",{key:t.path,staticClass:"nest-menu",attrs:{"is-nest":!0,item:t,"base-path":e.resolvePath(t.path)}})}))],2):[e.onlyOneChild.meta?n("app-link",{attrs:{to:e.resolvePath(e.onlyOneChild.path)}},[n("el-menu-item",{class:{"submenu-title-noDropdown":!e.isNest},attrs:{index:e.resolvePath(e.onlyOneChild.path)}},[n("item",{attrs:{icon:e.onlyOneChild.meta.icon||e.item.meta&&e.item.meta.icon,title:e.onlyOneChild.meta.title}})],1)],1):e._e()]],2)},Q=[],X=n("6266"),Y=n.n(X);n("2ce8"),n("274a");function Z(e){return/^(https?:|mailto:|tel:)/.test(e)}n("068b"),n("3bae");var ee,te,ne={name:"MenuItem",functional:!0,props:{icon:{type:String,default:""},title:{type:String,default:""}},render:function(e,t){var n=t.props,i=n.icon,a=n.title,o=[];return i&&(i.includes("el-icon")?o.push(e("i",{class:[i,"sub-el-icon"]})):o.push(e("svg-icon",{attrs:{"icon-class":i}}))),a&&o.push(e("span",{slot:"title"},[a])),o}},ie=ne,ae=(n("bf4f"),Object(h["a"])(ie,ee,te,!1,null,"18eeea00",null)),oe=ae.exports,re=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n(e.type,e._b({tag:"component"},"component",e.linkProps(e.to),!1),[e._t("default")],2)},ce=[],se={props:{to:{type:String,required:!0}},computed:{isExternal:function(){return Z(this.to)},type:function(){return this.isExternal?"a":"router-link"}},methods:{linkProps:function(e){return this.isExternal?{href:e,target:"_blank",rel:"noopener"}:{to:e}}}},ue=se,le=Object(h["a"])(ue,re,ce,!1,null,null,null),de=le.exports,he={computed:{device:function(){return this.$store.state.app.device}},mounted:function(){this.fixBugIniOS()},methods:{fixBugIniOS:function(){var e=this,t=this.$refs.subMenu;if(t){var n=t.handleMouseleave;t.handleMouseleave=function(t){"mobile"!==e.device&&n(t)}}}}},pe={name:"SidebarItem",components:{Item:oe,AppLink:de},mixins:[he],props:{item:{type:Object,required:!0},isNest:{type:Boolean,default:!1},basePath:{type:String,default:""}},data:function(){return this.onlyOneChild=null,{}},methods:{hasOneShowingChild:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],n=arguments.length>1?arguments[1]:void 0,i=t.filter((function(t){return!t.hidden&&(e.onlyOneChild=t,!0)}));return 1===i.length||0===i.length&&(this.onlyOneChild=Object(C["a"])(Object(C["a"])({},n),{},{path:"",noShowingChildren:!0}),!0)},resolvePath:function(e){return Z(e)?e:Z(this.basePath)?this.basePath:Y.a.resolve(this.basePath,e)}}},me=pe,fe=Object(h["a"])(me,K,Q,!1,null,null,null),be=fe.exports,ve=n("cf1e"),ge=n.n(ve),ke={components:{SidebarItem:be,Logo:U},computed:Object(C["a"])(Object(C["a"])({},Object(_["b"])(["sidebar"])),{},{routes:function(){return this.$router.options.routes},activeMenu:function(){var e=this.$route,t=e.meta,n=e.path;return t.activeMenu?t.activeMenu:n},showLogo:function(){return this.$store.state.settings.sidebarLogo},variables:function(){return ge.a},isCollapse:function(){return!this.sidebar.opened}})},we=ke,Ce=Object(h["a"])(we,R,N,!1,null,null,null),_e=Ce.exports,xe=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",{staticClass:"app-main"},[n("transition",{attrs:{name:"fade-transform",mode:"out-in"}},[n("router-view",{key:e.key})],1)],1)},Oe=[],Se={name:"AppMain",computed:{key:function(){return this.$route.path}}},ye=Se,Ee=(n("e4de"),n("028b"),Object(h["a"])(ye,xe,Oe,!1,null,"64cf4d83",null)),$e=Ee.exports,Be=document,Le=Be.body,Ae=992,Me={watch:{$route:function(e){"mobile"===this.device&&this.sidebar.opened&&f["a"].dispatch("app/closeSideBar",{withoutAnimation:!1})}},beforeMount:function(){window.addEventListener("resize",this.$_resizeHandler)},beforeDestroy:function(){window.removeEventListener("resize",this.$_resizeHandler)},mounted:function(){var e=this.$_isMobile();e&&(f["a"].dispatch("app/toggleDevice","mobile"),f["a"].dispatch("app/closeSideBar",{withoutAnimation:!0}))},methods:{$_isMobile:function(){var e=Le.getBoundingClientRect();return e.width-1<Ae},$_resizeHandler:function(){if(!document.hidden){var e=this.$_isMobile();f["a"].dispatch("app/toggleDevice",e?"mobile":"desktop"),e&&f["a"].dispatch("app/closeSideBar",{withoutAnimation:!0})}}}},je={name:"Layout",components:{Navbar:z,Sidebar:_e,AppMain:$e},mixins:[Me],computed:{sidebar:function(){return this.$store.state.app.sidebar},device:function(){return this.$store.state.app.device},fixedHeader:function(){return this.$store.state.settings.fixedHeader},classObj:function(){return{hideSidebar:!this.sidebar.opened,openSidebar:this.sidebar.opened,withoutAnimation:this.sidebar.withoutAnimation,mobile:"mobile"===this.device}}},methods:{handleClickOutside:function(){this.$store.dispatch("app/closeSideBar",{withoutAnimation:!1})}}},Pe=je,He=(n("9f2b"),Object(h["a"])(Pe,v,g,!1,null,"4f739cf0",null)),Te=He.exports;i["default"].use(b["a"]);var De=[{path:"/404",component:function(){return n.e("chunk-15ac51ae").then(n.bind(null,"8cdb"))},hidden:!0},{path:"/",component:Te,children:[{path:"index",component:function(){return Promise.all([n.e("chunk-de7178dc"),n.e("chunk-6566696a"),n.e("chunk-0343d5c2")]).then(n.bind(null,"3dae"))},name:"inference",meta:{title:"自由文本识别",icon:"el-icon-picture"}}]},{path:"/detection",component:Te,children:[{path:"detection",component:function(){return Promise.all([n.e("chunk-de7178dc"),n.e("chunk-6566696a"),n.e("chunk-10c9cd54")]).then(n.bind(null,"8107"))},name:"detection",meta:{title:"人脸检测",icon:"el-icon-picture"}}]},{path:"/feature",component:Te,children:[{path:"feature",component:function(){return Promise.all([n.e("chunk-de7178dc"),n.e("chunk-6566696a"),n.e("chunk-3ff36d20")]).then(n.bind(null,"9d99"))},name:"feature",meta:{title:"人脸特征提取",icon:"el-icon-picture"}}]},{path:"/comparison",component:Te,children:[{path:"comparison",component:function(){return Promise.all([n.e("chunk-de7178dc"),n.e("chunk-6566696a"),n.e("chunk-73d7088d")]).then(n.bind(null,"c083"))},name:"comparison",meta:{title:"人脸比对 (1:1)",icon:"el-icon-picture"}}]},{path:"/fire-smoke-detect",component:Te,children:[{path:"fire-smoke-detect",component:function(){return Promise.all([n.e("chunk-de7178dc"),n.e("chunk-6566696a"),n.e("chunk-13c2fbbf")]).then(n.bind(null,"2257"))},name:"fire-smoke-detect",meta:{title:"烟火检测",icon:"el-icon-picture"}}]},{path:"/helmet-detection",component:Te,children:[{path:"helmet-detection",component:function(){return Promise.all([n.e("chunk-de7178dc"),n.e("chunk-6566696a"),n.e("chunk-6979fff2")]).then(n.bind(null,"3997"))},name:"helmet-detection",meta:{title:"安全帽检测",icon:"el-icon-picture"}}]},{path:"/oral-detection",component:Te,children:[{path:"oral-detection",component:function(){return Promise.all([n.e("chunk-de7178dc"),n.e("chunk-6566696a"),n.e("chunk-40a8e8d4")]).then(n.bind(null,"181e"))},name:"oral-detection",meta:{title:"口咽检测",icon:"el-icon-picture"}}]},{path:"/speech-asr",component:Te,children:[{path:"speech-asr",component:function(){return Promise.all([n.e("chunk-de7178dc"),n.e("chunk-6566696a"),n.e("chunk-69f717b8"),n.e("chunk-1038e5c0")]).then(n.bind(null,"1b71"))},name:"speech-asr",meta:{title:"语音识别",icon:"el-icon-picture"}}]},{path:"/speech-tts",component:Te,children:[{path:"speech-tts",component:function(){return Promise.all([n.e("chunk-de7178dc"),n.e("chunk-a6b785f0")]).then(n.bind(null,"7a2b"))},name:"speech-tts",meta:{title:"语音合成",icon:"el-icon-picture"}}]},{path:"/audio",component:Te,children:[{path:"audio",component:function(){return Promise.all([n.e("chunk-69f717b8"),n.e("chunk-ef624544")]).then(n.bind(null,"90f1"))},name:"audio",meta:{title:"录音",icon:"el-icon-picture"}}]},{path:"*",redirect:"/404",hidden:!0}],Ie=function(){return new b["a"]({scrollBehavior:function(){return{y:0}},routes:De})},Ge=Ie();var ze=Ge,Re=n("291b"),Ne=(n("e186"),n("38bc")),qe=n.n(Ne),Ve=(n("70e7"),n("83d6")),Je=n.n(Ve),We=Je.a.title||"Vue Admin Template";function Fe(e){return e?"".concat(e," - ").concat(We):"".concat(We)}qe.a.configure({showSpinner:!1}),ze.beforeEach(function(){var e=Object(Re["a"])(regeneratorRuntime.mark((function e(t,n,i){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:qe.a.start(),document.title=Fe(t.meta.title),"/login"===t.path?(i({path:"/"}),qe.a.done()):i();case 3:case"end":return e.stop()}}),e)})));return function(t,n,i){return e.apply(this,arguments)}}()),ze.afterEach((function(){qe.a.done()})),i["default"].use(o.a,{locale:c.a}),i["default"].config.productionTip=!1,new i["default"]({el:"#app",router:ze,store:f["a"],render:function(e){return e(m)}})},7699:function(e,t,n){},"7c16":function(e,t,n){},"83d6":function(e,t){e.exports={title:"AI",fixedHeader:!1,sidebarLogo:!1}},"9f2b":function(e,t,n){"use strict";n("7c16")},a737:function(e,t,n){},b1c4:function(e,t,n){},b20f:function(e,t,n){e.exports={menuText:"#bfcbd9",menuActiveText:"#409eff",subMenuActiveText:"#f4f4f5",menuBg:"#304156",menuHover:"#263445",subMenuBg:"#1f2d3d",subMenuHover:"#001528",sideBarWidth:"210px"}},b9eb:function(e,t,n){},bc89:function(e,t,n){"use strict";n("7699")},bf4f:function(e,t,n){"use strict";n("b1c4")},cf1e:function(e,t,n){e.exports={menuText:"#bfcbd9",menuActiveText:"#409eff",subMenuActiveText:"#f4f4f5",menuBg:"#304156",menuHover:"#263445",subMenuBg:"#1f2d3d",subMenuHover:"#001528",sideBarWidth:"210px"}},e4de:function(e,t,n){"use strict";n("5273")}},[[0,"runtime","chunk-elementUI","chunk-libs"]]]);