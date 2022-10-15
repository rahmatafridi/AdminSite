"use strict";(self["webpackChunkclientapp"]=self["webpackChunkclientapp"]||[]).push([[661],{7661:function(a,e,l){l.r(e),l.d(e,{default:function(){return z}});var t=l(3396);const n=(0,t._)("strong",null,"Vue Pagination",-1),i=(0,t._)("p",{class:"text-medium-emphasis small"},[(0,t.Uk)(" We use a large block of connected links for our pagination, making links hard to miss and easily scalable—all while providing large hit areas. Pagination is built with list HTML elements so screen readers can announce the number of available links. Use a wrapping "),(0,t._)("code",null,"<nav>"),(0,t.Uk)(" element to identify it as a navigation section to screen readers and other assistive technologies. ")],-1),u=(0,t._)("p",{class:"text-medium-emphasis small"},[(0,t.Uk)(" In addition, as pages likely have more than one such navigation section, it's advisable to provide a descriptive "),(0,t._)("code",null,"aria-label"),(0,t.Uk)(" for the "),(0,t._)("code",null,"<nav>"),(0,t.Uk)(" to reflect its purpose. For example, if the pagination component is used to navigate between a set of search results, an appropriate label could be "),(0,t._)("code",null,'aria-label="Search results pages"'),(0,t.Uk)(". ")],-1),s=(0,t._)("strong",null,"Vue Pagination",-1),o=(0,t._)("small",null,"Working with icons",-1),d=(0,t._)("p",{class:"text-medium-emphasis small"},[(0,t.Uk)(" Looking to use an icon or symbol in place of text for some pagination links? Be sure to provide proper screen reader support with "),(0,t._)("code",null,"aria"),(0,t.Uk)(" attributes. ")],-1),m=(0,t._)("span",{"aria-hidden":"true"},"«",-1),r=(0,t._)("span",{"aria-hidden":"true"},"»",-1),f=(0,t._)("strong",null,"Vue Pagination",-1),_=(0,t._)("small",null,"Disabled and active states",-1),c=(0,t._)("p",{class:"text-medium-emphasis small"},[(0,t.Uk)(" Pagination links are customizable for different circumstances. Use "),(0,t._)("code",null,"disabled"),(0,t.Uk)(" for links that appear un-clickable and "),(0,t._)("code",null,".active"),(0,t.Uk)(" to indicate the current page. ")],-1),p=(0,t._)("p",{class:"text-medium-emphasis small"},[(0,t.Uk)(" While the "),(0,t._)("code",null,"disabled"),(0,t.Uk)(" prop uses "),(0,t._)("code",null,"pointer-events: none"),(0,t.Uk)(" to "),(0,t._)("em",null,"try"),(0,t.Uk)(" to disable the link functionality of "),(0,t._)("code",null,"<a>"),(0,t.Uk)("s, that CSS property is not yet standardized and doesn'taccount for keyboard navigation. As such, we always add "),(0,t._)("code",null,'tabindex="-1"'),(0,t.Uk)(" on disabled links and use custom JavaScript to fully disable their functionality. ")],-1),w=(0,t._)("span",{"aria-hidden":"true"},"«",-1),k=(0,t._)("span",{"aria-hidden":"true"},"»",-1),W=(0,t._)("strong",null,"Vue Pagination",-1),g=(0,t._)("small",null,"Sizing",-1),h=(0,t._)("p",{class:"text-medium-emphasis small"},[(0,t.Uk)(" Fancy larger or smaller pagination? Add "),(0,t._)("code",null,'size="lg"'),(0,t.Uk)(" or "),(0,t._)("code",null,'size="sm"'),(0,t.Uk)(" for additional sizes. ")],-1),U=(0,t._)("strong",null,"Vue Pagination",-1),b=(0,t._)("small",null,"Alignment",-1),v=(0,t._)("p",{class:"text-medium-emphasis small"},[(0,t.Uk)(" Change the alignment of pagination components with "),(0,t._)("a",{href:"https://coreui.io/docs/utilities/flex/"},"flexbox utilities"),(0,t.Uk)(". ")],-1);function x(a,e,l,x,P,y){const C=(0,t.up)("DocsCallout"),z=(0,t.up)("CCol"),N=(0,t.up)("CCardHeader"),S=(0,t.up)("CPaginationItem"),V=(0,t.up)("CPagination"),j=(0,t.up)("DocsExample"),A=(0,t.up)("CCardBody"),D=(0,t.up)("CCard"),B=(0,t.up)("CRow");return(0,t.wg)(),(0,t.j4)(B,null,{default:(0,t.w5)((()=>[(0,t.Wm)(z,{xs:12},{default:(0,t.w5)((()=>[(0,t.Wm)(C,{name:"Pagination",href:"components/pagination.html"})])),_:1}),(0,t.Wm)(z,{xs:12},{default:(0,t.w5)((()=>[(0,t.Wm)(D,{class:"mb-4"},{default:(0,t.w5)((()=>[(0,t.Wm)(N,null,{default:(0,t.w5)((()=>[n])),_:1}),(0,t.Wm)(A,null,{default:(0,t.w5)((()=>[i,u,(0,t.Wm)(j,{href:"components/pagination.html"},{default:(0,t.w5)((()=>[(0,t.Wm)(V,{"aria-label":"Page navigation example"},{default:(0,t.w5)((()=>[(0,t.Wm)(S,null,{default:(0,t.w5)((()=>[(0,t.Uk)("Previous")])),_:1}),(0,t.Wm)(S,null,{default:(0,t.w5)((()=>[(0,t.Uk)("1")])),_:1}),(0,t.Wm)(S,null,{default:(0,t.w5)((()=>[(0,t.Uk)("2")])),_:1}),(0,t.Wm)(S,null,{default:(0,t.w5)((()=>[(0,t.Uk)("3")])),_:1}),(0,t.Wm)(S,null,{default:(0,t.w5)((()=>[(0,t.Uk)("Next")])),_:1})])),_:1})])),_:1})])),_:1})])),_:1})])),_:1}),(0,t.Wm)(z,{xs:12},{default:(0,t.w5)((()=>[(0,t.Wm)(D,{class:"mb-4"},{default:(0,t.w5)((()=>[(0,t.Wm)(N,null,{default:(0,t.w5)((()=>[s,(0,t.Uk)(),o])),_:1}),(0,t.Wm)(A,null,{default:(0,t.w5)((()=>[d,(0,t.Wm)(j,{href:"components/pagination.html#working-with-icons"},{default:(0,t.w5)((()=>[(0,t.Wm)(V,{"aria-label":"Page navigation example"},{default:(0,t.w5)((()=>[(0,t.Wm)(S,{"aria-label":"Previous"},{default:(0,t.w5)((()=>[m])),_:1}),(0,t.Wm)(S,null,{default:(0,t.w5)((()=>[(0,t.Uk)("1")])),_:1}),(0,t.Wm)(S,null,{default:(0,t.w5)((()=>[(0,t.Uk)("2")])),_:1}),(0,t.Wm)(S,null,{default:(0,t.w5)((()=>[(0,t.Uk)("3")])),_:1}),(0,t.Wm)(S,{"aria-label":"Next"},{default:(0,t.w5)((()=>[r])),_:1})])),_:1})])),_:1})])),_:1})])),_:1})])),_:1}),(0,t.Wm)(z,{xs:12},{default:(0,t.w5)((()=>[(0,t.Wm)(D,{class:"mb-4"},{default:(0,t.w5)((()=>[(0,t.Wm)(N,null,{default:(0,t.w5)((()=>[f,_])),_:1}),(0,t.Wm)(A,null,{default:(0,t.w5)((()=>[c,p,(0,t.Wm)(j,{href:"components/pagination.html#disabled-and-active-states"},{default:(0,t.w5)((()=>[(0,t.Wm)(V,{"aria-label":"Page navigation example"},{default:(0,t.w5)((()=>[(0,t.Wm)(S,{"aria-label":"Previous",disabled:""},{default:(0,t.w5)((()=>[w])),_:1}),(0,t.Wm)(S,{active:""},{default:(0,t.w5)((()=>[(0,t.Uk)("1")])),_:1}),(0,t.Wm)(S,null,{default:(0,t.w5)((()=>[(0,t.Uk)("2")])),_:1}),(0,t.Wm)(S,null,{default:(0,t.w5)((()=>[(0,t.Uk)("3")])),_:1}),(0,t.Wm)(S,{"aria-label":"Next"},{default:(0,t.w5)((()=>[k])),_:1})])),_:1})])),_:1})])),_:1})])),_:1})])),_:1}),(0,t.Wm)(z,{xs:12},{default:(0,t.w5)((()=>[(0,t.Wm)(D,{class:"mb-4"},{default:(0,t.w5)((()=>[(0,t.Wm)(N,null,{default:(0,t.w5)((()=>[W,(0,t.Uk)(),g])),_:1}),(0,t.Wm)(A,null,{default:(0,t.w5)((()=>[h,(0,t.Wm)(j,{href:"components/pagination.html#sizing"},{default:(0,t.w5)((()=>[(0,t.Wm)(V,{size:"lg","aria-label":"Page navigation example"},{default:(0,t.w5)((()=>[(0,t.Wm)(S,null,{default:(0,t.w5)((()=>[(0,t.Uk)("Previous")])),_:1}),(0,t.Wm)(S,null,{default:(0,t.w5)((()=>[(0,t.Uk)("1")])),_:1}),(0,t.Wm)(S,null,{default:(0,t.w5)((()=>[(0,t.Uk)("2")])),_:1}),(0,t.Wm)(S,null,{default:(0,t.w5)((()=>[(0,t.Uk)("3")])),_:1}),(0,t.Wm)(S,null,{default:(0,t.w5)((()=>[(0,t.Uk)("Next")])),_:1})])),_:1})])),_:1}),(0,t.Wm)(j,{href:"components/pagination.html#sizing"},{default:(0,t.w5)((()=>[(0,t.Wm)(V,{size:"sm","aria-label":"Page navigation example"},{default:(0,t.w5)((()=>[(0,t.Wm)(S,null,{default:(0,t.w5)((()=>[(0,t.Uk)("Previous")])),_:1}),(0,t.Wm)(S,null,{default:(0,t.w5)((()=>[(0,t.Uk)("1")])),_:1}),(0,t.Wm)(S,null,{default:(0,t.w5)((()=>[(0,t.Uk)("2")])),_:1}),(0,t.Wm)(S,null,{default:(0,t.w5)((()=>[(0,t.Uk)("3")])),_:1}),(0,t.Wm)(S,null,{default:(0,t.w5)((()=>[(0,t.Uk)("Next")])),_:1})])),_:1})])),_:1})])),_:1})])),_:1})])),_:1}),(0,t.Wm)(z,{xs:12},{default:(0,t.w5)((()=>[(0,t.Wm)(D,{class:"mb-4"},{default:(0,t.w5)((()=>[(0,t.Wm)(N,null,{default:(0,t.w5)((()=>[U,(0,t.Uk)(),b])),_:1}),(0,t.Wm)(A,null,{default:(0,t.w5)((()=>[v,(0,t.Wm)(j,{href:"components/pagination.html#aligment"},{default:(0,t.w5)((()=>[(0,t.Wm)(V,{class:"justify-content-center","aria-label":"Page navigation example"},{default:(0,t.w5)((()=>[(0,t.Wm)(S,{disabled:""},{default:(0,t.w5)((()=>[(0,t.Uk)("Previous")])),_:1}),(0,t.Wm)(S,null,{default:(0,t.w5)((()=>[(0,t.Uk)("1")])),_:1}),(0,t.Wm)(S,null,{default:(0,t.w5)((()=>[(0,t.Uk)("2")])),_:1}),(0,t.Wm)(S,null,{default:(0,t.w5)((()=>[(0,t.Uk)("3")])),_:1}),(0,t.Wm)(S,null,{default:(0,t.w5)((()=>[(0,t.Uk)("Next")])),_:1})])),_:1})])),_:1}),(0,t.Wm)(j,{href:"components/pagination.html#aligment"},{default:(0,t.w5)((()=>[(0,t.Wm)(V,{class:"justify-content-end","aria-label":"Page navigation example"},{default:(0,t.w5)((()=>[(0,t.Wm)(S,{disabled:""},{default:(0,t.w5)((()=>[(0,t.Uk)("Previous")])),_:1}),(0,t.Wm)(S,null,{default:(0,t.w5)((()=>[(0,t.Uk)("1")])),_:1}),(0,t.Wm)(S,null,{default:(0,t.w5)((()=>[(0,t.Uk)("2")])),_:1}),(0,t.Wm)(S,null,{default:(0,t.w5)((()=>[(0,t.Uk)("3")])),_:1}),(0,t.Wm)(S,null,{default:(0,t.w5)((()=>[(0,t.Uk)("Next")])),_:1})])),_:1})])),_:1})])),_:1})])),_:1})])),_:1})])),_:1})}var P={name:"Paginations"},y=l(89);const C=(0,y.Z)(P,[["render",x]]);var z=C}}]);
//# sourceMappingURL=661.6be54c7f.js.map