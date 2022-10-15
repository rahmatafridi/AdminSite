(function(){"use strict";var e={533:function(e,a,n){var t=n(9242),o=n(3396);function r(e,a){const n=(0,o.up)("router-view");return(0,o.wg)(),(0,o.j4)(n)}var i=n(89);const l={},c=(0,i.Z)(l,[["render",r]]);var s=c,m=n(2483);const p={class:"wrapper d-flex flex-column min-vh-100 bg-light"},u={class:"body flex-grow-1 px-3"};function d(e,a,n,t,r,i){const l=(0,o.up)("AppSidebar"),c=(0,o.up)("AppHeader"),s=(0,o.up)("router-view"),m=(0,o.up)("CContainer"),d=(0,o.up)("AppFooter");return(0,o.wg)(),(0,o.iD)("div",null,[(0,o.Wm)(l),(0,o._)("div",p,[(0,o.Wm)(c),(0,o._)("div",u,[(0,o.Wm)(m,{lg:""},{default:(0,o.w5)((()=>[(0,o.Wm)(s)])),_:1})]),(0,o.Wm)(d)])])}var h=n(6947),b=n(7139);const f=(0,o._)("a",{href:"https://coreui.io",target:"_blank"},"CoreUI",-1),v={class:"ms-1"},g=(0,o._)("div",{class:"ms-auto"},[(0,o._)("span",{class:"me-1",target:"_blank"},"Powered by"),(0,o._)("a",{href:"https://coreui.io/vue"},"CoreUI for Vue")],-1);function C(e,a,n,t,r,i){const l=(0,o.up)("CFooter");return(0,o.wg)(),(0,o.j4)(l,null,{default:(0,o.w5)((()=>[(0,o._)("div",null,[f,(0,o._)("span",v,"© "+(0,b.zw)((new Date).getFullYear())+" creativeLabs.",1)]),g])),_:1})}var w={name:"AppFooter"};const W=(0,i.Z)(w,[["render",C]]);var V=W;function _(e,a,n,t,r,i){const l=(0,o.up)("CIcon"),c=(0,o.up)("CHeaderToggler"),s=(0,o.up)("CHeaderBrand"),m=(0,o.up)("CNavLink"),p=(0,o.up)("CNavItem"),u=(0,o.up)("CHeaderNav"),d=(0,o.up)("AppHeaderDropdownAccnt"),h=(0,o.up)("CContainer"),b=(0,o.up)("CHeaderDivider"),f=(0,o.up)("AppBreadcrumb"),v=(0,o.up)("CHeader");return(0,o.wg)(),(0,o.j4)(v,{position:"sticky",class:"mb-4"},{default:(0,o.w5)((()=>[(0,o.Wm)(h,{fluid:""},{default:(0,o.w5)((()=>[(0,o.Wm)(c,{class:"ps-1",onClick:a[0]||(a[0]=a=>e.$store.commit("toggleSidebar"))},{default:(0,o.w5)((()=>[(0,o.Wm)(l,{icon:"cil-menu",size:"lg"})])),_:1}),(0,o.Wm)(s,{class:"mx-auto d-lg-none",to:"/"},{default:(0,o.w5)((()=>[(0,o.Wm)(l,{icon:t.logo,height:"48",alt:"Logo"},null,8,["icon"])])),_:1}),(0,o.Wm)(u,{class:"d-none d-md-flex me-auto"},{default:(0,o.w5)((()=>[(0,o.Wm)(p,null,{default:(0,o.w5)((()=>[(0,o.Wm)(m,{href:"/dashboard"},{default:(0,o.w5)((()=>[(0,o.Uk)(" Dashboard ")])),_:1})])),_:1}),(0,o.Wm)(p,null,{default:(0,o.w5)((()=>[(0,o.Wm)(m,{href:"#"},{default:(0,o.w5)((()=>[(0,o.Uk)("Users")])),_:1})])),_:1}),(0,o.Wm)(p,null,{default:(0,o.w5)((()=>[(0,o.Wm)(m,{href:"#"},{default:(0,o.w5)((()=>[(0,o.Uk)("Settings")])),_:1})])),_:1})])),_:1}),(0,o.Wm)(u,null,{default:(0,o.w5)((()=>[(0,o.Wm)(p,null,{default:(0,o.w5)((()=>[(0,o.Wm)(m,{href:"#"},{default:(0,o.w5)((()=>[(0,o.Wm)(l,{class:"mx-2",icon:"cil-bell",size:"lg"})])),_:1})])),_:1}),(0,o.Wm)(p,null,{default:(0,o.w5)((()=>[(0,o.Wm)(m,{href:"#"},{default:(0,o.w5)((()=>[(0,o.Wm)(l,{class:"mx-2",icon:"cil-list",size:"lg"})])),_:1})])),_:1}),(0,o.Wm)(p,null,{default:(0,o.w5)((()=>[(0,o.Wm)(m,{href:"#"},{default:(0,o.w5)((()=>[(0,o.Wm)(l,{class:"mx-2",icon:"cil-envelope-open",size:"lg"})])),_:1})])),_:1}),(0,o.Wm)(d)])),_:1})])),_:1}),(0,o.Wm)(b),(0,o.Wm)(h,{fluid:""},{default:(0,o.w5)((()=>[(0,o.Wm)(f)])),_:1})])),_:1})}function N(e,a,n,t,r,i){const l=(0,o.up)("CBreadcrumbItem"),c=(0,o.up)("CBreadcrumb");return(0,o.wg)(),(0,o.j4)(c,{class:"d-md-down-none me-auto mb-0"},{default:(0,o.w5)((()=>[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(t.breadcrumbs,(e=>((0,o.wg)(),(0,o.j4)(l,{key:e,href:e.active?"":e.path,active:e.active},{default:(0,o.w5)((()=>[(0,o.Uk)((0,b.zw)(e.name),1)])),_:2},1032,["href","active"])))),128))])),_:1})}var y=n(4870),k={name:"AppBreadcrumb",setup(){const e=(0,y.iH)(),a=()=>ae.currentRoute.value.matched.map((e=>({active:e.path===ae.currentRoute.value.fullPath,name:e.name,path:`${ae.options.history.base}${e.path}`})));return ae.afterEach((()=>{e.value=a()})),(0,o.bv)((()=>{e.value=a()})),{breadcrumbs:e}}};const A=(0,i.Z)(k,[["render",N]]);var I=A;function U(e,a,n,t,r,i){const l=(0,o.up)("CAvatar"),c=(0,o.up)("CDropdownToggle"),s=(0,o.up)("CDropdownHeader"),m=(0,o.up)("CIcon"),p=(0,o.up)("CBadge"),u=(0,o.up)("CDropdownItem"),d=(0,o.up)("CDropdownDivider"),h=(0,o.up)("CDropdownMenu"),f=(0,o.up)("CDropdown");return(0,o.wg)(),(0,o.j4)(f,{variant:"nav-item"},{default:(0,o.w5)((()=>[(0,o.Wm)(c,{placement:"bottom-end",class:"py-0",caret:!1},{default:(0,o.w5)((()=>[(0,o.Wm)(l,{src:t.avatar,size:"md"},null,8,["src"])])),_:1}),(0,o.Wm)(h,{class:"pt-0"},{default:(0,o.w5)((()=>[(0,o.Wm)(s,{component:"h6",class:"bg-light fw-semibold py-2"},{default:(0,o.w5)((()=>[(0,o.Uk)(" Account ")])),_:1}),(0,o.Wm)(u,null,{default:(0,o.w5)((()=>[(0,o.Wm)(m,{icon:"cil-bell"}),(0,o.Uk)(" Updates "),(0,o.Wm)(p,{color:"info",class:"ms-auto"},{default:(0,o.w5)((()=>[(0,o.Uk)((0,b.zw)(t.itemsCount),1)])),_:1})])),_:1}),(0,o.Wm)(u,null,{default:(0,o.w5)((()=>[(0,o.Wm)(m,{icon:"cil-envelope-open"}),(0,o.Uk)(" Messages "),(0,o.Wm)(p,{color:"success",class:"ms-auto"},{default:(0,o.w5)((()=>[(0,o.Uk)((0,b.zw)(t.itemsCount),1)])),_:1})])),_:1}),(0,o.Wm)(u,null,{default:(0,o.w5)((()=>[(0,o.Wm)(m,{icon:"cil-task"}),(0,o.Uk)(" Tasks "),(0,o.Wm)(p,{color:"danger",class:"ms-auto"},{default:(0,o.w5)((()=>[(0,o.Uk)((0,b.zw)(t.itemsCount),1)])),_:1})])),_:1}),(0,o.Wm)(u,null,{default:(0,o.w5)((()=>[(0,o.Wm)(m,{icon:"cil-comment-square"}),(0,o.Uk)(" Comments "),(0,o.Wm)(p,{color:"warning",class:"ms-auto"},{default:(0,o.w5)((()=>[(0,o.Uk)((0,b.zw)(t.itemsCount),1)])),_:1})])),_:1}),(0,o.Wm)(s,{component:"h6",class:"bg-light fw-semibold py-2"},{default:(0,o.w5)((()=>[(0,o.Uk)(" Settings ")])),_:1}),(0,o.Wm)(u,null,{default:(0,o.w5)((()=>[(0,o.Wm)(m,{icon:"cil-user"}),(0,o.Uk)(" Profile ")])),_:1}),(0,o.Wm)(u,null,{default:(0,o.w5)((()=>[(0,o.Wm)(m,{icon:"cil-settings"}),(0,o.Uk)(" Settings ")])),_:1}),(0,o.Wm)(u,null,{default:(0,o.w5)((()=>[(0,o.Wm)(m,{icon:"cil-dollar"}),(0,o.Uk)(" Payments "),(0,o.Wm)(p,{color:"secondary",class:"ms-auto"},{default:(0,o.w5)((()=>[(0,o.Uk)((0,b.zw)(t.itemsCount),1)])),_:1})])),_:1}),(0,o.Wm)(u,null,{default:(0,o.w5)((()=>[(0,o.Wm)(m,{icon:"cil-file"}),(0,o.Uk)(" Projects "),(0,o.Wm)(p,{color:"primary",class:"ms-auto"},{default:(0,o.w5)((()=>[(0,o.Uk)((0,b.zw)(t.itemsCount),1)])),_:1})])),_:1}),(0,o.Wm)(d),(0,o.Wm)(u,null,{default:(0,o.w5)((()=>[(0,o.Wm)(m,{icon:"cil-shield-alt"}),(0,o.Uk)(" Lock Account ")])),_:1}),(0,o.Wm)(u,null,{default:(0,o.w5)((()=>[(0,o.Wm)(m,{icon:"cil-lock-locked"}),(0,o.Uk)(" Logout ")])),_:1})])),_:1})])),_:1})}var Z=n.p+"img/8.6d7480dd.jpg",M={name:"AppHeaderDropdownAccnt",setup(){return{avatar:Z,itemsCount:42}}};const L=(0,i.Z)(M,[["render",U]]);var S=L;const P=["556 134",'\n  <title>coreui vue</title>\n  <g>\n    <g style="fill:#1bbd93">\n      <path class="cls-1" d="M347.9818,90.0869l-11.84-43.52-.0644-.1924q0-.5112.6406-.5117h1.2793a.66.66,0,0,1,.7051.5762l10.623,39.68c.042.0859.0859.1279.1289.1279.041,0,.084-.042.127-.1279l10.625-39.68a.657.657,0,0,1,.7031-.5762h1.2168a.54.54,0,0,1,.5762.7041l-11.9043,43.52a.6584.6584,0,0,1-.7041.5761h-1.4082A.6577.6577,0,0,1,347.9818,90.0869Z"/>\n      <path class="cls-1" d="M382.2786,89.5751a10.9023,10.9023,0,0,1-4.3515-4.5439,14.4586,14.4586,0,0,1-1.5362-6.7842V46.5029a.5656.5656,0,0,1,.64-.64h1.2168a.5659.5659,0,0,1,.64.64v32a10.5488,10.5488,0,0,0,2.72,7.5527,10.36,10.36,0,0,0,14.3359,0,10.5493,10.5493,0,0,0,2.7207-7.5527v-32a.5655.5655,0,0,1,.64-.64h1.2159a.5666.5666,0,0,1,.6406.64V78.247a13.01,13.01,0,0,1-3.3926,9.376,11.8974,11.8974,0,0,1-9.0234,3.5527A12.8481,12.8481,0,0,1,382.2786,89.5751Z"/>\n      <path class="cls-1" d="M439.5843,48.1035H419.5521a.2263.2263,0,0,0-.2559.2558V66.8554a.2259.2259,0,0,0,.2559.2559h13.8242a.5665.5665,0,0,1,.6406.64v.96a.5665.5665,0,0,1-.6406.6406H419.5521a.2263.2263,0,0,0-.2559.2559v18.56a.2259.2259,0,0,0,.2559.2559h20.0322a.5665.5665,0,0,1,.64.6406v.96a.5655.5655,0,0,1-.64.64H417.4407a.5654.5654,0,0,1-.6406-.64v-43.52a.5658.5658,0,0,1,.6406-.64h22.1436a.5659.5659,0,0,1,.64.64v.96A.5658.5658,0,0,1,439.5843,48.1035Z"/>\n      <path class="cls-1" d="M454.5921,89.5117a2.8385,2.8385,0,0,1-.8-2.0489,2.9193,2.9193,0,0,1,.8-2.1113,2.7518,2.7518,0,0,1,2.0791-.832,2.8465,2.8465,0,0,1,2.9443,2.9433,2.7561,2.7561,0,0,1-.832,2.08,2.9208,2.9208,0,0,1-2.1123.8008A2.7521,2.7521,0,0,1,454.5921,89.5117Z"/>\n      <path class="cls-1" d="M474.931,88.0078a11.3087,11.3087,0,0,1-3.2-8.4161v-5.44a.5655.5655,0,0,1,.64-.64h1.2158a.5662.5662,0,0,1,.6407.64v5.5039a9.1421,9.1421,0,0,0,2.5283,6.72,8.9734,8.9734,0,0,0,6.6875,2.5606,8.7916,8.7916,0,0,0,9.28-9.28V46.5029a.5655.5655,0,0,1,.64-.64h1.2158a.5656.5656,0,0,1,.64.64V79.5917a11.2541,11.2541,0,0,1-3.2315,8.4161,13.0621,13.0621,0,0,1-17.0556,0Z"/>\n      <path class="cls-1" d="M512.8753,88.1035a10.4847,10.4847,0,0,1-3.36-8.128v-1.792a.5665.5665,0,0,1,.6406-.6406h1.0879a.5666.5666,0,0,1,.64.6406v1.6a8.5461,8.5461,0,0,0,2.752,6.6563,10.5361,10.5361,0,0,0,7.36,2.4961,9.8741,9.8741,0,0,0,6.9766-2.3682,8.2188,8.2188,0,0,0,2.56-6.3359,8.3952,8.3952,0,0,0-1.12-4.416,11.3752,11.3752,0,0,0-3.3281-3.3926,71.6866,71.6866,0,0,0-6.1758-3.7119,71.0151,71.0151,0,0,1-6.24-3.84,12.1824,12.1824,0,0,1-3.4238-3.68,10.2659,10.2659,0,0,1-1.28-5.3437,9.86,9.86,0,0,1,3.0723-7.7441,12.0126,12.0126,0,0,1,8.3193-2.752q5.6969,0,8.9609,3.1035a10.8247,10.8247,0,0,1,3.2637,8.2246v1.6a.5658.5658,0,0,1-.6406.64h-1.1514a.5651.5651,0,0,1-.64-.64V56.8076a8.8643,8.8643,0,0,0-2.6241-6.6885,9.9936,9.9936,0,0,0-7.2324-2.5274,9.37,9.37,0,0,0-6.5283,2.1436,7.8253,7.8253,0,0,0-2.3672,6.1123,7.8088,7.8088,0,0,0,1.0235,4.16,10.3978,10.3978,0,0,0,3.0078,3.039,63.0249,63.0249,0,0,0,5.9521,3.4883,70.7955,70.7955,0,0,1,6.72,4.2559,13.4613,13.4613,0,0,1,3.6485,3.9365,10.044,10.044,0,0,1,1.28,5.1836,10.7185,10.7185,0,0,1-3.2647,8.1924q-3.2637,3.0717-8.832,3.0722Q516.2342,91.1757,512.8753,88.1035Z"/>\n    </g>\n    <g style="fill:#3c4b64">\n      <g>\n        <path d="M99.835,36.0577l-39-22.5167a12,12,0,0,0-12,0l-39,22.5166a12.0339,12.0339,0,0,0-6,10.3924V91.4833a12.0333,12.0333,0,0,0,6,10.3923l39,22.5167a12,12,0,0,0,12,0l39-22.5167a12.0331,12.0331,0,0,0,6-10.3923V46.45A12.0334,12.0334,0,0,0,99.835,36.0577Zm-2,55.4256a4,4,0,0,1-2,3.4641l-39,22.5167a4.0006,4.0006,0,0,1-4,0l-39-22.5167a4,4,0,0,1-2-3.4641V46.45a4,4,0,0,1,2-3.4642l39-22.5166a4,4,0,0,1,4,0l39,22.5166a4,4,0,0,1,2,3.4642Z"/>\n        <path d="M77.8567,82.0046h-2.866a4,4,0,0,0-1.9247.4934L55.7852,91.9833,35.835,80.4648V57.4872l19.95-11.5185,17.2893,9.4549a3.9993,3.9993,0,0,0,1.9192.4906h2.8632a2,2,0,0,0,2-2V51.2024a2,2,0,0,0-1.04-1.7547L59.628,38.9521a8.0391,8.0391,0,0,0-7.8428.09L31.8346,50.56a8.0246,8.0246,0,0,0-4,6.9287v22.976a8,8,0,0,0,4,6.9283l19.95,11.5186a8.0429,8.0429,0,0,0,7.8433.0879l19.19-10.5312a2,2,0,0,0,1.0378-1.7533v-2.71A2,2,0,0,0,77.8567,82.0046Z"/>\n      </g>\n      <g>\n        <path d="M172.58,45.3618a15.0166,15.0166,0,0,0-15,14.9995V77.6387a15,15,0,0,0,30,0V60.3613A15.0166,15.0166,0,0,0,172.58,45.3618Zm7,32.2769a7,7,0,0,1-14,0V60.3613a7,7,0,0,1,14,0Z"/>\n        <path d="M135.9138,53.4211a7.01,7.01,0,0,1,7.8681,6.0752.9894.9894,0,0,0,.9843.865h6.03a1.0108,1.0108,0,0,0,.9987-1.0971,15.0182,15.0182,0,0,0-15.7162-13.8837,15.2881,15.2881,0,0,0-14.2441,15.4163V77.2037A15.288,15.288,0,0,0,136.0792,92.62a15.0183,15.0183,0,0,0,15.7162-13.8842,1.0107,1.0107,0,0,0-.9987-1.0971h-6.03a.9894.9894,0,0,0-.9843.865,7.01,7.01,0,0,1-7.8679,6.0757,7.1642,7.1642,0,0,1-6.0789-7.1849V60.6057A7.1638,7.1638,0,0,1,135.9138,53.4211Z"/>\n        <path d="M218.7572,72.9277a12.1585,12.1585,0,0,0,7.1843-11.0771V58.1494A12.1494,12.1494,0,0,0,213.7921,46H196.835a1,1,0,0,0-1,1V91a1,1,0,0,0,1,1h6a1,1,0,0,0,1-1V74h6.6216l7.9154,17.4138a1,1,0,0,0,.91.5862h6.5911a1,1,0,0,0,.91-1.4138Zm-.8157-11.0771A4.1538,4.1538,0,0,1,213.7926,66h-9.8511V54h9.8511a4.1538,4.1538,0,0,1,4.1489,4.1494Z"/>\n        <path d="M260.835,46h-26a1,1,0,0,0-1,1V91a1,1,0,0,0,1,1h26a1,1,0,0,0,1-1V85a1,1,0,0,0-1-1h-19V72h13a1,1,0,0,0,1-1V65a1,1,0,0,0-1-1h-13V54h19a1,1,0,0,0,1-1V47A1,1,0,0,0,260.835,46Z"/>\n        <path d="M298.835,46h-6a1,1,0,0,0-1,1V69.6475a7.0066,7.0066,0,1,1-14,0V47a1,1,0,0,0-1-1h-6a1,1,0,0,0-1,1V69.6475a15.0031,15.0031,0,1,0,30,0V47A1,1,0,0,0,298.835,46Z"/>\n        <rect x="307.835" y="46" width="8" height="38" rx="1"/>\n      </g>\n    </g>\n  </g>\n'];var B={name:"AppHeader",components:{AppBreadcrumb:I,AppHeaderDropdownAccnt:S},setup(){return{logo:P}}};const T=(0,i.Z)(B,[["render",_]]);var D=T;function x(e,a,n,t,r,i){const l=(0,o.up)("CIcon"),c=(0,o.up)("CSidebarBrand"),s=(0,o.up)("AppSidebarNav"),m=(0,o.up)("CSidebarToggler"),p=(0,o.up)("CSidebar");return(0,o.wg)(),(0,o.j4)(p,{position:"fixed",unfoldable:t.sidebarUnfoldable,visible:t.sidebarVisible,onVisibleChange:a[1]||(a[1]=a=>e.$store.commit({type:"updateSidebarVisible",value:a}))},{default:(0,o.w5)((()=>[(0,o.Wm)(c,null,{default:(0,o.w5)((()=>[(0,o.Wm)(l,{"custom-class-name":"sidebar-brand-full",icon:t.logoNegative,height:35},null,8,["icon"]),(0,o.Wm)(l,{"custom-class-name":"sidebar-brand-narrow",icon:t.sygnet,height:35},null,8,["icon"])])),_:1}),(0,o.Wm)(s),(0,o.Wm)(m,{class:"d-none d-lg-flex",onClick:a[0]||(a[0]=a=>e.$store.commit("toggleUnfoldable"))})])),_:1},8,["unfoldable","visible"])}var j=n(65),H=[{component:"CNavItem",name:"Dashboard",to:"/dashboard",icon:"cil-speedometer",badge:{color:"primary",text:"NEW"}},{component:"CNavTitle",name:"Theme"},{component:"CNavItem",name:"Colors",to:"/theme/colors",icon:"cil-drop"},{component:"CNavItem",name:"Typography",to:"/theme/typography",icon:"cil-pencil"},{component:"CNavTitle",name:"Components"},{component:"CNavGroup",name:"Base",to:"/base",icon:"cil-puzzle",items:[{component:"CNavItem",name:"Accordion",to:"/base/accordion"},{component:"CNavItem",name:"Breadcrumbs",to:"/base/breadcrumbs"},{component:"CNavItem",name:"Cards",to:"/base/cards"},{component:"CNavItem",name:"Carousels",to:"/base/carousels"},{component:"CNavItem",name:"Collapses",to:"/base/collapses"},{component:"CNavItem",name:"List Groups",to:"/base/list-groups"},{component:"CNavItem",name:"Navs & Tabs",to:"/base/navs"},{component:"CNavItem",name:"Paginations",to:"/base/paginations"},{component:"CNavItem",name:"Placeholders",to:"/base/placeholders"},{component:"CNavItem",name:"Popovers",to:"/base/popovers"},{component:"CNavItem",name:"Progress",to:"/base/progress"},{component:"CNavItem",name:"Spinners",to:"/base/spinners"},{component:"CNavItem",name:"Tables",to:"/base/tables"},{component:"CNavItem",name:"Tooltips",to:"/base/tooltips"}]},{component:"CNavGroup",name:"Buttons",to:"/buttons",icon:"cil-cursor",items:[{component:"CNavItem",name:"Buttons",to:"/buttons/standard-buttons"},{component:"CNavItem",name:"Button Groups",to:"/buttons/button-groups"},{component:"CNavItem",name:"Dropdowns",to:"/buttons/dropdowns"}]},{component:"CNavGroup",name:"Forms",to:"/forms",icon:"cil-notes",items:[{component:"CNavItem",name:"Form Control",to:"/forms/form-control"},{component:"CNavItem",name:"Select",to:"/forms/select"},{component:"CNavItem",name:"Checks & Radios",to:"/forms/checks-radios"},{component:"CNavItem",name:"Range",to:"/forms/range"},{component:"CNavItem",name:"Input Group",to:"/forms/input-group"},{component:"CNavItem",name:"Floating Labels",to:"/forms/floating-labels"},{component:"CNavItem",name:"Layout",to:"/forms/layout"},{component:"CNavItem",name:"Validation",to:"/forms/validation"}]},{component:"CNavItem",name:"Charts",to:"/charts",icon:"cil-chart-pie"},{component:"CNavGroup",name:"Icons",to:"/icons",icon:"cil-star",items:[{component:"CNavItem",name:"CoreUI Icons",to:"/icons/coreui-icons",badge:{color:"info",text:"NEW"}},{component:"CNavItem",name:"Brands",to:"/icons/brands"},{component:"CNavItem",name:"Flags",to:"/icons/flags"}]},{component:"CNavGroup",name:"Notifications",to:"/notifications",icon:"cil-bell",items:[{component:"CNavItem",name:"Alerts",to:"/notifications/alerts"},{component:"CNavItem",name:"Badges",to:"/notifications/badges"},{component:"CNavItem",name:"Modals",to:"/notifications/modals"}]},{component:"CNavItem",name:"Widgets",to:"/widgets",icon:"cil-calculator",badge:{color:"primary",text:"NEW",shape:"pill"}},{component:"CNavTitle",name:"Extras"},{component:"CNavGroup",name:"Pages",to:"/pages",icon:"cil-star",items:[{component:"CNavItem",name:"Login",to:"/pages/login"},{component:"CNavItem",name:"Register",to:"/pages/register"},{component:"CNavItem",name:"Error 404",to:"/pages/404"},{component:"CNavItem",name:"Error 500",to:"/pages/500"}]}];const F=e=>decodeURI(e).replace(/#.*$/,"").replace(/(index)?\.(html)$/,""),E=(e,a)=>{if(void 0===a)return!1;if(e.hash===a)return!0;const n=F(e.path),t=F(a);return n===t},z=(e,a)=>!!E(e,a.to)||!!a.items&&a.items.some((a=>z(e,a))),G=(0,o.aZ)({name:"AppSidebarNav",components:{CNavItem:h.U6,CNavGroup:h.dw,CNavTitle:h.fd},setup(){const e=(0,m.yj)(),a=(0,y.iH)(!0);(0,o.bv)((()=>{a.value=!1}));const n=t=>t.items?(0,o.h)(h.dw,{...a.value&&{visible:t.items.some((a=>z(e,a)))}},{togglerContent:()=>[(0,o.h)((0,o.up)("CIcon"),{customClassName:"nav-icon",name:t.icon}),t.name],default:()=>t.items.map((e=>n(e)))}):t.to?(0,o.h)(m.rH,{to:t.to,custom:!0},{default:e=>(0,o.h)((0,o.up)(t.component),{active:e.isActive,href:e.href,onClick:()=>e.navigate()},{default:()=>[t.icon&&(0,o.h)((0,o.up)("CIcon"),{customClassName:"nav-icon",name:t.icon}),t.name,t.badge&&(0,o.h)(h.C_,{class:"ms-auto",color:t.badge.color},{default:()=>t.badge.text})]})}):(0,o.h)((0,o.up)(t.component),{},{default:()=>t.name});return()=>(0,o.h)(h.Xk,{},{default:()=>H.map((e=>n(e)))})}}),O=["556 134",'\n  <title>coreui vue logo</title>\n  <g>\n    <g style="fill:#1bbd93">\n      <path class="cls-1" d="M347.9818,90.0869l-11.84-43.52-.0644-.1924q0-.5112.6406-.5117h1.2793a.66.66,0,0,1,.7051.5762l10.623,39.68c.042.0859.0859.1279.1289.1279.041,0,.084-.042.127-.1279l10.625-39.68a.657.657,0,0,1,.7031-.5762h1.2168a.54.54,0,0,1,.5762.7041l-11.9043,43.52a.6584.6584,0,0,1-.7041.5761h-1.4082A.6577.6577,0,0,1,347.9818,90.0869Z"/>\n      <path class="cls-1" d="M382.2786,89.5751a10.9023,10.9023,0,0,1-4.3515-4.5439,14.4586,14.4586,0,0,1-1.5362-6.7842V46.5029a.5656.5656,0,0,1,.64-.64h1.2168a.5659.5659,0,0,1,.64.64v32a10.5488,10.5488,0,0,0,2.72,7.5527,10.36,10.36,0,0,0,14.3359,0,10.5493,10.5493,0,0,0,2.7207-7.5527v-32a.5655.5655,0,0,1,.64-.64h1.2159a.5666.5666,0,0,1,.6406.64V78.247a13.01,13.01,0,0,1-3.3926,9.376,11.8974,11.8974,0,0,1-9.0234,3.5527A12.8481,12.8481,0,0,1,382.2786,89.5751Z"/>\n      <path class="cls-1" d="M439.5843,48.1035H419.5521a.2263.2263,0,0,0-.2559.2558V66.8554a.2259.2259,0,0,0,.2559.2559h13.8242a.5665.5665,0,0,1,.6406.64v.96a.5665.5665,0,0,1-.6406.6406H419.5521a.2263.2263,0,0,0-.2559.2559v18.56a.2259.2259,0,0,0,.2559.2559h20.0322a.5665.5665,0,0,1,.64.6406v.96a.5655.5655,0,0,1-.64.64H417.4407a.5654.5654,0,0,1-.6406-.64v-43.52a.5658.5658,0,0,1,.6406-.64h22.1436a.5659.5659,0,0,1,.64.64v.96A.5658.5658,0,0,1,439.5843,48.1035Z"/>\n      <path class="cls-1" d="M454.5921,89.5117a2.8385,2.8385,0,0,1-.8-2.0489,2.9193,2.9193,0,0,1,.8-2.1113,2.7518,2.7518,0,0,1,2.0791-.832,2.8465,2.8465,0,0,1,2.9443,2.9433,2.7561,2.7561,0,0,1-.832,2.08,2.9208,2.9208,0,0,1-2.1123.8008A2.7521,2.7521,0,0,1,454.5921,89.5117Z"/>\n      <path class="cls-1" d="M474.931,88.0078a11.3087,11.3087,0,0,1-3.2-8.4161v-5.44a.5655.5655,0,0,1,.64-.64h1.2158a.5662.5662,0,0,1,.6407.64v5.5039a9.1421,9.1421,0,0,0,2.5283,6.72,8.9734,8.9734,0,0,0,6.6875,2.5606,8.7916,8.7916,0,0,0,9.28-9.28V46.5029a.5655.5655,0,0,1,.64-.64h1.2158a.5656.5656,0,0,1,.64.64V79.5917a11.2541,11.2541,0,0,1-3.2315,8.4161,13.0621,13.0621,0,0,1-17.0556,0Z"/>\n      <path class="cls-1" d="M512.8753,88.1035a10.4847,10.4847,0,0,1-3.36-8.128v-1.792a.5665.5665,0,0,1,.6406-.6406h1.0879a.5666.5666,0,0,1,.64.6406v1.6a8.5461,8.5461,0,0,0,2.752,6.6563,10.5361,10.5361,0,0,0,7.36,2.4961,9.8741,9.8741,0,0,0,6.9766-2.3682,8.2188,8.2188,0,0,0,2.56-6.3359,8.3952,8.3952,0,0,0-1.12-4.416,11.3752,11.3752,0,0,0-3.3281-3.3926,71.6866,71.6866,0,0,0-6.1758-3.7119,71.0151,71.0151,0,0,1-6.24-3.84,12.1824,12.1824,0,0,1-3.4238-3.68,10.2659,10.2659,0,0,1-1.28-5.3437,9.86,9.86,0,0,1,3.0723-7.7441,12.0126,12.0126,0,0,1,8.3193-2.752q5.6969,0,8.9609,3.1035a10.8247,10.8247,0,0,1,3.2637,8.2246v1.6a.5658.5658,0,0,1-.6406.64h-1.1514a.5651.5651,0,0,1-.64-.64V56.8076a8.8643,8.8643,0,0,0-2.6241-6.6885,9.9936,9.9936,0,0,0-7.2324-2.5274,9.37,9.37,0,0,0-6.5283,2.1436,7.8253,7.8253,0,0,0-2.3672,6.1123,7.8088,7.8088,0,0,0,1.0235,4.16,10.3978,10.3978,0,0,0,3.0078,3.039,63.0249,63.0249,0,0,0,5.9521,3.4883,70.7955,70.7955,0,0,1,6.72,4.2559,13.4613,13.4613,0,0,1,3.6485,3.9365,10.044,10.044,0,0,1,1.28,5.1836,10.7185,10.7185,0,0,1-3.2647,8.1924q-3.2637,3.0717-8.832,3.0722Q516.2342,91.1757,512.8753,88.1035Z"/>\n    </g>\n  </g>\n  <g style="fill: currentColor">\n    <g>\n      <path d="M99.835,36.0577l-39-22.5167a12,12,0,0,0-12,0l-39,22.5166a12.0339,12.0339,0,0,0-6,10.3924V91.4833a12.0333,12.0333,0,0,0,6,10.3923l39,22.5167a12,12,0,0,0,12,0l39-22.5167a12.0331,12.0331,0,0,0,6-10.3923V46.45A12.0334,12.0334,0,0,0,99.835,36.0577Zm-2,55.4256a4,4,0,0,1-2,3.4641l-39,22.5167a4.0006,4.0006,0,0,1-4,0l-39-22.5167a4,4,0,0,1-2-3.4641V46.45a4,4,0,0,1,2-3.4642l39-22.5166a4,4,0,0,1,4,0l39,22.5166a4,4,0,0,1,2,3.4642Z"/>\n      <path d="M77.8567,82.0046h-2.866a4,4,0,0,0-1.9247.4934L55.7852,91.9833,35.835,80.4648V57.4872l19.95-11.5185,17.2893,9.4549a3.9993,3.9993,0,0,0,1.9192.4906h2.8632a2,2,0,0,0,2-2V51.2024a2,2,0,0,0-1.04-1.7547L59.628,38.9521a8.0391,8.0391,0,0,0-7.8428.09L31.8346,50.56a8.0246,8.0246,0,0,0-4,6.9287v22.976a8,8,0,0,0,4,6.9283l19.95,11.5186a8.0429,8.0429,0,0,0,7.8433.0879l19.19-10.5312a2,2,0,0,0,1.0378-1.7533v-2.71A2,2,0,0,0,77.8567,82.0046Z"/>\n    </g>\n    <g>\n      <path d="M172.58,45.3618a15.0166,15.0166,0,0,0-15,14.9995V77.6387a15,15,0,0,0,30,0V60.3613A15.0166,15.0166,0,0,0,172.58,45.3618Zm7,32.2769a7,7,0,0,1-14,0V60.3613a7,7,0,0,1,14,0Z"/>\n      <path d="M135.9138,53.4211a7.01,7.01,0,0,1,7.8681,6.0752.9894.9894,0,0,0,.9843.865h6.03a1.0108,1.0108,0,0,0,.9987-1.0971,15.0182,15.0182,0,0,0-15.7162-13.8837,15.2881,15.2881,0,0,0-14.2441,15.4163V77.2037A15.288,15.288,0,0,0,136.0792,92.62a15.0183,15.0183,0,0,0,15.7162-13.8842,1.0107,1.0107,0,0,0-.9987-1.0971h-6.03a.9894.9894,0,0,0-.9843.865,7.01,7.01,0,0,1-7.8679,6.0757,7.1642,7.1642,0,0,1-6.0789-7.1849V60.6057A7.1638,7.1638,0,0,1,135.9138,53.4211Z"/>\n      <path d="M218.7572,72.9277a12.1585,12.1585,0,0,0,7.1843-11.0771V58.1494A12.1494,12.1494,0,0,0,213.7921,46H196.835a1,1,0,0,0-1,1V91a1,1,0,0,0,1,1h6a1,1,0,0,0,1-1V74h6.6216l7.9154,17.4138a1,1,0,0,0,.91.5862h6.5911a1,1,0,0,0,.91-1.4138Zm-.8157-11.0771A4.1538,4.1538,0,0,1,213.7926,66h-9.8511V54h9.8511a4.1538,4.1538,0,0,1,4.1489,4.1494Z"/>\n      <path d="M260.835,46h-26a1,1,0,0,0-1,1V91a1,1,0,0,0,1,1h26a1,1,0,0,0,1-1V85a1,1,0,0,0-1-1h-19V72h13a1,1,0,0,0,1-1V65a1,1,0,0,0-1-1h-13V54h19a1,1,0,0,0,1-1V47A1,1,0,0,0,260.835,46Z"/>\n      <path d="M298.835,46h-6a1,1,0,0,0-1,1V69.6475a7.0066,7.0066,0,1,1-14,0V47a1,1,0,0,0-1-1h-6a1,1,0,0,0-1,1V69.6475a15.0031,15.0031,0,1,0,30,0V47A1,1,0,0,0,298.835,46Z"/>\n      <rect x="307.835" y="46" width="8" height="38" rx="1"/>\n    </g>\n  </g>\n</g>\n'],$=["160 160",'\n  <title>coreui logo</title>\n  <g>\n    <g style="fill:#fff;">\n      <path d="M125,47.091,86,24.5743a12,12,0,0,0-12,0L35,47.091a12.0336,12.0336,0,0,0-6,10.3923v45.0334a12.0335,12.0335,0,0,0,6,10.3923l39,22.5166a11.9993,11.9993,0,0,0,12,0l39-22.5166a12.0335,12.0335,0,0,0,6-10.3923V57.4833A12.0336,12.0336,0,0,0,125,47.091Zm-2,55.4257a4,4,0,0,1-2,3.464L82,128.4974a4,4,0,0,1-4,0L39,105.9807a4,4,0,0,1-2-3.464V57.4833a4,4,0,0,1,2-3.4641L78,31.5025a4,4,0,0,1,4,0l39,22.5167a4,4,0,0,1,2,3.4641Z"/>\n      <path d="M103.0216,93.0379h-2.866a4,4,0,0,0-1.9246.4935L80.95,103.0167,61,91.4981V68.5206L80.95,57.002l17.2894,9.455a4,4,0,0,0,1.9192.4905h2.8632a2,2,0,0,0,2-2V62.2357a2,2,0,0,0-1.04-1.7547L84.793,49.9854a8.0391,8.0391,0,0,0-7.8428.09L57,61.5929A8.0243,8.0243,0,0,0,53,68.5216v22.976a8,8,0,0,0,4,6.9283l19.95,11.5185a8.0422,8.0422,0,0,0,7.8433.0879l19.19-10.5311a2,2,0,0,0,1.0378-1.7534v-2.71A2,2,0,0,0,103.0216,93.0379Z"/>\n    </g>\n  </g>\n'];var q={name:"AppSidebar",components:{AppSidebarNav:G},setup(){const e=(0,j.oR)();return{logoNegative:O,sygnet:$,sidebarUnfoldable:(0,o.Fl)((()=>e.state.sidebarUnfoldable)),sidebarVisible:(0,o.Fl)((()=>e.state.sidebarVisible))}}};const R=(0,i.Z)(q,[["render",x]]);var J=R,Q={name:"DefaultLayout",components:{AppFooter:V,AppHeader:D,AppSidebar:J,CContainer:h.KB}};const Y=(0,i.Z)(Q,[["render",d]]);var K=Y;const X=[{path:"/",name:"Home",component:K,redirect:"/dashboard",children:[{path:"/dashboard",name:"Dashboard",component:()=>Promise.all([n.e(311),n.e(147),n.e(966)]).then(n.bind(n,7032))},{path:"/theme",name:"Theme",redirect:"/theme/typography"},{path:"/theme/colors",name:"Colors",component:()=>n.e(95).then(n.bind(n,8095))},{path:"/theme/typography",name:"Typography",component:()=>n.e(159).then(n.bind(n,2159))},{path:"/base",name:"Base",component:{render(){return(0,o.h)((0,o.up)("router-view"))}},redirect:"/base/breadcrumbs",children:[{path:"/base/accordion",name:"Accordion",component:()=>n.e(193).then(n.bind(n,2746))},{path:"/base/breadcrumbs",name:"Breadcrumbs",component:()=>n.e(577).then(n.bind(n,5577))},{path:"/base/cards",name:"Cards",component:()=>n.e(499).then(n.bind(n,9499))},{path:"/base/carousels",name:"Carousels",component:()=>n.e(428).then(n.bind(n,1698))},{path:"/base/collapses",name:"Collapses",component:()=>n.e(769).then(n.bind(n,769))},{path:"/base/list-groups",name:"List Groups",component:()=>n.e(746).then(n.bind(n,1746))},{path:"/base/navs",name:"Navs",component:()=>n.e(128).then(n.bind(n,3128))},{path:"/base/paginations",name:"Paginations",component:()=>n.e(661).then(n.bind(n,7661))},{path:"/base/placeholders",name:"Placeholders",component:()=>n.e(341).then(n.bind(n,1341))},{path:"/base/popovers",name:"Popovers",component:()=>n.e(943).then(n.bind(n,943))},{path:"/base/progress",name:"Progress",component:()=>n.e(711).then(n.bind(n,711))},{path:"/base/spinners",name:"Spinners",component:()=>n.e(218).then(n.bind(n,4218))},{path:"/base/tables",name:"Tables",component:()=>n.e(346).then(n.bind(n,7346))},{path:"/base/tooltips",name:"Tooltips",component:()=>n.e(496).then(n.bind(n,7496))}]},{path:"/buttons",name:"Buttons",component:{render(){return(0,o.h)((0,o.up)("router-view"))}},redirect:"/buttons/standard-buttons",children:[{path:"/buttons/standard-buttons",name:"Buttons",component:()=>n.e(951).then(n.bind(n,4951))},{path:"/buttons/dropdowns",name:"Dropdowns",component:()=>n.e(316).then(n.bind(n,316))},{path:"/buttons/button-groups",name:"Button Groups",component:()=>n.e(85).then(n.bind(n,9085))}]},{path:"/forms",name:"Forms",component:{render(){return(0,o.h)((0,o.up)("router-view"))}},redirect:"/forms/form-control",children:[{path:"/forms/form-control",name:"Form Control",component:()=>n.e(844).then(n.bind(n,1844))},{path:"/forms/select",name:"Select",component:()=>n.e(813).then(n.bind(n,3813))},{path:"/forms/checks-radios",name:"Checks & Radios",component:()=>n.e(494).then(n.bind(n,2494))},{path:"/forms/range",name:"Range",component:()=>n.e(305).then(n.bind(n,4305))},{path:"/forms/input-group",name:"Input Group",component:()=>n.e(38).then(n.bind(n,5038))},{path:"/forms/floating-labels",name:"Floating Labels",component:()=>n.e(860).then(n.bind(n,1860))},{path:"/forms/layout",name:"Layout",component:()=>n.e(697).then(n.bind(n,3697))},{path:"/forms/validation",name:"Validation",component:()=>n.e(854).then(n.bind(n,9854))}]},{path:"/charts",name:"Charts",component:()=>Promise.all([n.e(311),n.e(921)]).then(n.bind(n,2921))},{path:"/icons",name:"Icons",component:{render(){return(0,o.h)((0,o.up)("router-view"))}},redirect:"/icons/coreui-icons",children:[{path:"/icons/coreui-icons",name:"CoreUI Icons",component:()=>n.e(440).then(n.bind(n,5440))},{path:"/icons/brands",name:"Brands",component:()=>n.e(270).then(n.bind(n,3270))},{path:"/icons/flags",name:"Flags",component:()=>n.e(360).then(n.bind(n,998))}]},{path:"/notifications",name:"Notifications",component:{render(){return(0,o.h)((0,o.up)("router-view"))}},redirect:"/notifications/alerts",children:[{path:"/notifications/alerts",name:"Alerts",component:()=>n.e(437).then(n.bind(n,9437))},{path:"/notifications/badges",name:"Badges",component:()=>n.e(214).then(n.bind(n,5214))},{path:"/notifications/modals",name:"Modals",component:()=>n.e(239).then(n.bind(n,8711))}]},{path:"/widgets",name:"Widgets",component:()=>Promise.all([n.e(311),n.e(147),n.e(307)]).then(n.bind(n,6256))}]},{path:"/pages",redirect:"/pages/404",name:"Pages",component:{render(){return(0,o.h)((0,o.up)("router-view"))}},children:[{path:"404",name:"Page404",component:()=>n.e(410).then(n.bind(n,7410))},{path:"500",name:"Page500",component:()=>n.e(962).then(n.bind(n,1962))},{path:"login",name:"Login",component:()=>n.e(79).then(n.bind(n,5079))},{path:"register",name:"Register",component:()=>n.e(44).then(n.bind(n,6044))}]}],ee=(0,m.p7)({history:(0,m.r5)("/"),routes:X,scrollBehavior(){return{top:0}}});var ae=ee,ne=(0,j.MT)({state:{sidebarVisible:"",sidebarUnfoldable:!1},mutations:{toggleSidebar(e){e.sidebarVisible=!e.sidebarVisible},toggleUnfoldable(e){e.sidebarUnfoldable=!e.sidebarUnfoldable},updateSidebarVisible(e,a){e.sidebarVisible=a.value}},actions:{},modules:{}}),te=n(3116),oe=n(3947),re=n(1496),ie=n(9585),le=n(8857),ce=n(6009),se=n(3657),me=n(7405),pe=n(540),ue=n(8354),de=n(2927),he=n(257),be=n(752),fe=n(3727),ve=n(8011),ge=n(2122),Ce=n(5958),we=n(9436),We=n(5324),Ve=n(5416),_e=n(6945),Ne=n(7062),ye=n(9282),ke=n(1139),Ae=n(2816),Ie=n(265),Ue=n(6140),Ze=n(331),Me=n(5945),Le=n(3957),Se=n(661),Pe=n(9799),Be=n(2501),Te=n(7180),De=n(3404),xe=n(4108),je=n(1495),He=n(7738),Fe=n(739),Ee=n(583),ze=n(9517),Ge=n(4841),Oe=n(399),$e=n(5727),qe=n(3890),Re=n(929),Je=n(733),Qe=n(5657),Ye=n(9753),Ke=n(7354),Xe=n(2978),ea=n(320),aa=n(6444),na=n(2145),ta=n(3534),oa=n(7484),ra=n(123),ia=n(5936),la=n(1421),ca=n(8713),sa=n(1574),ma=n(3210),pa=n(5987),ua=n(9232),da=n(7411),ha=n(8868),ba=n(9252),fa=n(4988),va=n(8063),ga=n(3955),Ca=n(2887),wa=n(3306),Wa=n(6222),Va=n(6566),_a=n(6166),Na=n(5327),ya=n(3512),ka=n(2968),Aa=n(7712),Ia=n(6999),Ua=n(220),Za=n(7297);const Ma=Object.assign({},{cilArrowBottom:Pe.t,cilArrowRight:Be.n,cilArrowTop:Te.T,cilBan:De.E,cilBasket:xe.o,cilBell:je.$,cilCalculator:He.o,cilCalendar:Fe.J,cilCloudDownload:Ee.j,cilChartPie:ze.M,cilCheck:Ge.J,cilChevronBottom:Oe.b,cilChevronTop:$e.V,cilCheckCircle:qe._,cilCode:Re.I,cilCommentSquare:Je.S,cilCursor:Qe.t,cilDrop:Ye.M,cilDollar:Ke.T,cilEnvelopeClosed:Xe.W,cilEnvelopeOpen:ea.m,cilEuro:aa.z,cilGlobeAlt:na.e,cilGrid:ta.x,cilFile:oa.D,cilJustifyCenter:ra.h,cilLaptop:ia.U,cilLayers:la.H,cilLightbulb:ca.O,cilList:sa.A,cilLocationPin:ma.i,cilLockLocked:pa.U,cilMagnifyingGlass:ua.M,cilMediaPlay:da.B,cilMenu:ha.N,cilMoon:ba.S,cilNotes:fa.E,cilOptions:va.t,cilPencil:ga.l,cilPeople:Ca.g,cilPuzzle:wa.Q,cilSettings:Wa.M,cilShieldAlt:Va.t,cilSpeech:_a.B,cilSpeedometer:Na.h,cilStar:ya.m,cilTask:ka.W,cilUser:Aa.E,cilUserFemale:Ia.Q,cilUserFollow:Ua.H,cilXCircle:Za.J},{cifUs:Ie.E,cifBr:Ue.N,cifIn:Ze.J,cifFr:Me.A,cifEs:Le.z,cifPl:Se.I},{cibFacebook:oe.t,cibTwitter:re._,cibLinkedin:ie.n,cibFlickr:le.r,cibTumblr:ce.i,cibXing:se.n,cibGithub:me.G,cibGoogle:pe.N,cibStackoverflow:ue.F,cibYoutube:de.N,cibDribbble:he.x,cibInstagram:be.d,cibPinterest:fe.p,cibVk:ve.o,cibYahoo:ge.s,cibBehance:Ce.n,cibReddit:we.m,cibVimeo:We.R,cibCcMastercard:Ve.y,cibCcVisa:_e.W,cibCcStripe:Ne.I,cibCcPaypal:ye.K,cibCcApplePay:ke.D,cibCcAmex:Ae.I}),La=(0,o._)("br",null,null,-1),Sa=(0,o._)("br",null,null,-1);function Pa(e,a,n,t,r,i){const l=(0,o.up)("CLink"),c=(0,o.up)("CCallout");return(0,o.wg)(),(0,o.j4)(c,{color:"info",class:"bg-white"},{default:(0,o.w5)((()=>[(0,o.Uk)((0,b.zw)(n.content?n.content:`A Vue ${n.name} component ${n.plural?"have":"has"} been created as a native Vue.js version\n      of Bootstrap ${n.name}. ${n.name} ${n.plural?"are":"is"} delivered with some new features,\n      variants, and unique design that matches CoreUI Design System requirements.`)+" ",1),La,Sa,(0,o.Uk)(" For more information please visit our official "),(0,o.Wm)(l,{href:t.url,target:"_blank"},{default:(0,o.w5)((()=>[(0,o.Uk)(" documentation of CoreUI Components Library for Vue.js ")])),_:1},8,["href"]),(0,o.Uk)(" . ")])),_:1})}var Ba={},Ta={name:"DocsCallout",props:{content:{type:String,default:void 0,required:!1},href:{type:String,default:void 0,required:!1},name:{type:String,default:void 0,required:!1},plural:Boolean},setup(e){const a=`https://coreui.io/vue/docs/${Ba.config.coreui_library_short_version}/${e.url}`;return{url:a}}};const Da=(0,i.Z)(Ta,[["render",Pa]]);var xa=Da;const ja={class:"example"};function Ha(e,a,n,t,r,i){const l=(0,o.up)("CIcon"),c=(0,o.up)("CNavLink"),s=(0,o.up)("CNavItem"),m=(0,o.up)("CNav"),p=(0,o.up)("CTabPane"),u=(0,o.up)("CTabContent");return(0,o.wg)(),(0,o.iD)("div",ja,[(0,o.Wm)(m,{variant:"tabs"},{default:(0,o.w5)((()=>[(0,o.Wm)(s,null,{default:(0,o.w5)((()=>[(0,o.Wm)(c,{href:"#",active:""},{default:(0,o.w5)((()=>[(0,o.Wm)(l,{icon:"cil-media-play",class:"me-2"})])),_:1})])),_:1}),(0,o.Wm)(s,null,{default:(0,o.w5)((()=>[(0,o.Wm)(c,{href:t.url,target:"_blank"},{default:(0,o.w5)((()=>[(0,o.Wm)(l,{icon:"cil-code",class:"me-2"}),(0,o.Uk)(" Code ")])),_:1},8,["href"])])),_:1})])),_:1}),(0,o.Wm)(u,{class:"rounded-bottom"},{default:(0,o.w5)((()=>[(0,o.Wm)(p,{class:"p-3 preview",visible:""},{default:(0,o.w5)((()=>[(0,o.WI)(e.$slots,"default")])),_:3})])),_:3})])}var Fa={name:"DocsExample",props:{href:{type:String,default:void 0,required:!1}},setup(e){const a=`https://coreui.io/vue/docs/${Ba.config.coreui_library_short_version}/${e.href}`;return{url:a}}};const Ea=(0,i.Z)(Fa,[["render",Ha]]);var za=Ea;const Ga=(0,t.ri)(s);Ga.use(ne),Ga.use(ae),Ga.use(h.ZP),Ga.provide("icons",Ma),Ga.component("CIcon",te.Z),Ga.component("DocsCallout",xa),Ga.component("DocsExample",za),Ga.mount("#app")}},a={};function n(t){var o=a[t];if(void 0!==o)return o.exports;var r=a[t]={exports:{}};return e[t](r,r.exports,n),r.exports}n.m=e,function(){var e=[];n.O=function(a,t,o,r){if(!t){var i=1/0;for(m=0;m<e.length;m++){t=e[m][0],o=e[m][1],r=e[m][2];for(var l=!0,c=0;c<t.length;c++)(!1&r||i>=r)&&Object.keys(n.O).every((function(e){return n.O[e](t[c])}))?t.splice(c--,1):(l=!1,r<i&&(i=r));if(l){e.splice(m--,1);var s=o();void 0!==s&&(a=s)}}return a}r=r||0;for(var m=e.length;m>0&&e[m-1][2]>r;m--)e[m]=e[m-1];e[m]=[t,o,r]}}(),function(){n.n=function(e){var a=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(a,{a:a}),a}}(),function(){n.d=function(e,a){for(var t in a)n.o(a,t)&&!n.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:a[t]})}}(),function(){n.f={},n.e=function(e){return Promise.all(Object.keys(n.f).reduce((function(a,t){return n.f[t](e,a),a}),[]))}}(),function(){n.u=function(e){return"js/"+(966===e?"dashboard":e)+"."+{38:"2b7a4a41",44:"e09f1f13",79:"2dda3891",85:"f9948923",95:"5998b642",128:"a739208d",147:"660c70f4",159:"738aeaa5",193:"3bdcb6e0",214:"23b4376a",218:"1be442c5",239:"8e03ce10",270:"a45b1d32",305:"f5298b5e",307:"3659eabf",311:"ca830d6b",316:"d93ab42c",341:"a00f7f0d",346:"c13b87a5",360:"086a721c",410:"5481e5c4",428:"98017e78",437:"b721adda",440:"36a4b5bc",494:"baf88b78",496:"edb85b3b",499:"798f4bcd",577:"4cc0ae3f",661:"6be54c7f",697:"da641a19",711:"81c04a1e",746:"0efcaa3b",769:"da8e68c4",813:"670015a5",844:"7d1f89da",854:"33622d4a",860:"611ce277",921:"61e762d0",943:"50d195e5",951:"314233ba",962:"01ca7f01",966:"dad2b677"}[e]+".js"}}(),function(){n.miniCssF=function(e){}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,a){return Object.prototype.hasOwnProperty.call(e,a)}}(),function(){var e={},a="clientapp:";n.l=function(t,o,r,i){if(e[t])e[t].push(o);else{var l,c;if(void 0!==r)for(var s=document.getElementsByTagName("script"),m=0;m<s.length;m++){var p=s[m];if(p.getAttribute("src")==t||p.getAttribute("data-webpack")==a+r){l=p;break}}l||(c=!0,l=document.createElement("script"),l.charset="utf-8",l.timeout=120,n.nc&&l.setAttribute("nonce",n.nc),l.setAttribute("data-webpack",a+r),l.src=t),e[t]=[o];var u=function(a,n){l.onerror=l.onload=null,clearTimeout(d);var o=e[t];if(delete e[t],l.parentNode&&l.parentNode.removeChild(l),o&&o.forEach((function(e){return e(n)})),a)return a(n)},d=setTimeout(u.bind(null,void 0,{type:"timeout",target:l}),12e4);l.onerror=u.bind(null,l.onerror),l.onload=u.bind(null,l.onload),c&&document.head.appendChild(l)}}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){n.p="/"}(),function(){var e={143:0};n.f.j=function(a,t){var o=n.o(e,a)?e[a]:void 0;if(0!==o)if(o)t.push(o[2]);else{var r=new Promise((function(n,t){o=e[a]=[n,t]}));t.push(o[2]=r);var i=n.p+n.u(a),l=new Error,c=function(t){if(n.o(e,a)&&(o=e[a],0!==o&&(e[a]=void 0),o)){var r=t&&("load"===t.type?"missing":t.type),i=t&&t.target&&t.target.src;l.message="Loading chunk "+a+" failed.\n("+r+": "+i+")",l.name="ChunkLoadError",l.type=r,l.request=i,o[1](l)}};n.l(i,c,"chunk-"+a,a)}},n.O.j=function(a){return 0===e[a]};var a=function(a,t){var o,r,i=t[0],l=t[1],c=t[2],s=0;if(i.some((function(a){return 0!==e[a]}))){for(o in l)n.o(l,o)&&(n.m[o]=l[o]);if(c)var m=c(n)}for(a&&a(t);s<i.length;s++)r=i[s],n.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return n.O(m)},t=self["webpackChunkclientapp"]=self["webpackChunkclientapp"]||[];t.forEach(a.bind(null,0)),t.push=a.bind(null,t.push.bind(t))}();var t=n.O(void 0,[998],(function(){return n(533)}));t=n.O(t)})();
//# sourceMappingURL=app.3c07ea8d.js.map