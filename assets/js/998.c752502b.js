"use strict";(self.webpackChunkmemlab_website=self.webpackChunkmemlab_website||[]).push([[998],{2503:(e,n,t)=>{t.d(n,{Z:()=>m});var l=t(7462),a=t(7294),r=t(6010),i=t(5999),c=t(6668);const s="anchorWithStickyNavbar_LWe7",o="anchorWithHideOnScrollNavbar_WYt5";function m(e){let{as:n,id:t,...m}=e;const{navbar:{hideOnScroll:u}}=(0,c.L)();return"h1"!==n&&t?a.createElement(n,(0,l.Z)({},m,{className:(0,r.Z)("anchor",u?o:s),id:t}),m.children,a.createElement("a",{className:"hash-link",href:"#"+t,title:(0,i.I)({id:"theme.common.headingLinkTitle",message:"Direct link to heading",description:"Title for link to heading"})},"\u200b")):a.createElement(n,(0,l.Z)({},m,{id:void 0}))}},76:(e,n,t)=>{t.d(n,{Z:()=>k});var l=t(7294),a=t(3905),r=t(7462),i=t(5742);var c=t(1698);var s=t(9960);var o=t(6010),m=t(2389),u=t(6043);const d="details_lb9f",f="isBrowser_bmU9",v="collapsibleContent_i85q";function h(e){return!!e&&("SUMMARY"===e.tagName||h(e.parentElement))}function p(e,n){return!!e&&(e===n||p(e.parentElement,n))}function g(e){let{summary:n,children:t,...a}=e;const i=(0,m.Z)(),c=(0,l.useRef)(null),{collapsed:s,setCollapsed:g}=(0,u.u)({initialState:!a.open}),[E,L]=(0,l.useState)(a.open);return l.createElement("details",(0,r.Z)({},a,{ref:c,open:E,"data-collapsed":s,className:(0,o.Z)(d,i&&f,a.className),onMouseDown:e=>{h(e.target)&&e.detail>1&&e.preventDefault()},onClick:e=>{e.stopPropagation();const n=e.target;h(n)&&p(n,c.current)&&(e.preventDefault(),s?(g(!1),L(!0)):g(!0))}}),null!=n?n:l.createElement("summary",null,"Details"),l.createElement(u.z,{lazy:!1,collapsed:s,disableSSRStyle:!0,onCollapseTransitionEnd:e=>{g(e),L(!e)}},l.createElement("div",{className:v},t)))}const E="details_b_Ee";function L(e){let{...n}=e;return l.createElement(g,(0,r.Z)({},n,{className:(0,o.Z)("alert alert--info",E,n.className)}))}var N=t(2503);function b(e){return l.createElement(N.Z,e)}const Z="containsTaskList_mC6p";const C="img_ev3q";const y={head:function(e){const n=l.Children.map(e.children,(e=>l.isValidElement(e)?function(e){var n;if(null!=(n=e.props)&&n.mdxType&&e.props.originalType){const{mdxType:n,originalType:t,...a}=e.props;return l.createElement(e.props.originalType,a)}return e}(e):e));return l.createElement(i.Z,e,n)},code:function(e){const n=["a","b","big","i","span","em","strong","sup","sub","small"];return l.Children.toArray(e.children).every((e=>"string"==typeof e&&!e.includes("\n")||(0,l.isValidElement)(e)&&n.includes(e.props.mdxType)))?l.createElement("code",e):l.createElement(c.Z,e)},a:function(e){return l.createElement(s.Z,e)},pre:function(e){var n;return l.createElement(c.Z,(0,l.isValidElement)(e.children)&&"code"===(null==(n=e.children.props)?void 0:n.originalType)?e.children.props:{...e})},details:function(e){const n=l.Children.toArray(e.children),t=n.find((e=>{var n;return l.isValidElement(e)&&"summary"===(null==(n=e.props)?void 0:n.mdxType)})),a=l.createElement(l.Fragment,null,n.filter((e=>e!==t)));return l.createElement(L,(0,r.Z)({},e,{summary:t}),a)},ul:function(e){return l.createElement("ul",(0,r.Z)({},e,{className:(n=e.className,(0,o.Z)(n,(null==n?void 0:n.includes("contains-task-list"))&&Z))}));var n},img:function(e){return l.createElement("img",(0,r.Z)({loading:"lazy"},e,{className:(n=e.className,(0,o.Z)(n,C))}));var n},h1:e=>l.createElement(b,(0,r.Z)({as:"h1"},e)),h2:e=>l.createElement(b,(0,r.Z)({as:"h2"},e)),h3:e=>l.createElement(b,(0,r.Z)({as:"h3"},e)),h4:e=>l.createElement(b,(0,r.Z)({as:"h4"},e)),h5:e=>l.createElement(b,(0,r.Z)({as:"h5"},e)),h6:e=>l.createElement(b,(0,r.Z)({as:"h6"},e))};function k(e){let{children:n}=e;return l.createElement(a.Zo,{components:y},n)}},9407:(e,n,t)=>{t.d(n,{Z:()=>s});var l=t(7462),a=t(7294),r=t(6010),i=t(3743);const c="tableOfContents_bqdL";function s(e){let{className:n,...t}=e;return a.createElement("div",{className:(0,r.Z)(c,"thin-scrollbar",n)},a.createElement(i.Z,(0,l.Z)({},t,{linkClassName:"table-of-contents__link toc-highlight",linkActiveClassName:"table-of-contents__link--active"})))}},3743:(e,n,t)=>{t.d(n,{Z:()=>v});var l=t(7462),a=t(7294);function r(e){const n=e.map((e=>({...e,parentIndex:-1,children:[]}))),t=Array(7).fill(-1);n.forEach(((e,n)=>{const l=t.slice(2,e.level);e.parentIndex=Math.max(...l),t[e.level]=n}));const l=[];return n.forEach((e=>{const{parentIndex:t,...a}=e;t>=0?n[t].children.push(a):l.push(a)})),l}function i(e){let{toc:n,minHeadingLevel:t,maxHeadingLevel:l}=e;return n.flatMap((e=>{const n=i({toc:e.children,minHeadingLevel:t,maxHeadingLevel:l});return function(e){return e.level>=t&&e.level<=l}(e)?[{...e,children:n}]:n}))}var c=t(6668);function s(e){const n=e.getBoundingClientRect();return n.top===n.bottom?s(e.parentNode):n}function o(e,n){var t;let{anchorTopOffset:l}=n;const a=e.find((e=>s(e).top>=l));if(a){var r;return function(e){return e.top>0&&e.bottom<window.innerHeight/2}(s(a))?a:null!=(r=e[e.indexOf(a)-1])?r:null}return null!=(t=e[e.length-1])?t:null}function m(){const e=(0,a.useRef)(0),{navbar:{hideOnScroll:n}}=(0,c.L)();return(0,a.useEffect)((()=>{e.current=n?0:document.querySelector(".navbar").clientHeight}),[n]),e}function u(e){const n=(0,a.useRef)(void 0),t=m();(0,a.useEffect)((()=>{if(!e)return()=>{};const{linkClassName:l,linkActiveClassName:a,minHeadingLevel:r,maxHeadingLevel:i}=e;function c(){const e=function(e){return Array.from(document.getElementsByClassName(e))}(l),c=function(e){let{minHeadingLevel:n,maxHeadingLevel:t}=e;const l=[];for(let a=n;a<=t;a+=1)l.push("h"+a+".anchor");return Array.from(document.querySelectorAll(l.join()))}({minHeadingLevel:r,maxHeadingLevel:i}),s=o(c,{anchorTopOffset:t.current}),m=e.find((e=>s&&s.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)));e.forEach((e=>{!function(e,t){t?(n.current&&n.current!==e&&n.current.classList.remove(a),e.classList.add(a),n.current=e):e.classList.remove(a)}(e,e===m)}))}return document.addEventListener("scroll",c),document.addEventListener("resize",c),c(),()=>{document.removeEventListener("scroll",c),document.removeEventListener("resize",c)}}),[e,t])}function d(e){let{toc:n,className:t,linkClassName:l,isChild:r}=e;return n.length?a.createElement("ul",{className:r?void 0:t},n.map((e=>a.createElement("li",{key:e.id},a.createElement("a",{href:"#"+e.id,className:null!=l?l:void 0,dangerouslySetInnerHTML:{__html:e.value}}),a.createElement(d,{isChild:!0,toc:e.children,className:t,linkClassName:l}))))):null}const f=a.memo(d);function v(e){let{toc:n,className:t="table-of-contents table-of-contents__left-border",linkClassName:s="table-of-contents__link",linkActiveClassName:o,minHeadingLevel:m,maxHeadingLevel:d,...v}=e;const h=(0,c.L)(),p=null!=m?m:h.tableOfContents.minHeadingLevel,g=null!=d?d:h.tableOfContents.maxHeadingLevel,E=function(e){let{toc:n,minHeadingLevel:t,maxHeadingLevel:l}=e;return(0,a.useMemo)((()=>i({toc:r(n),minHeadingLevel:t,maxHeadingLevel:l})),[n,t,l])}({toc:n,minHeadingLevel:p,maxHeadingLevel:g});return u((0,a.useMemo)((()=>{if(s&&o)return{linkClassName:s,linkActiveClassName:o,minHeadingLevel:p,maxHeadingLevel:g}}),[s,o,p,g])),a.createElement(f,(0,l.Z)({toc:E,className:t,linkClassName:s},v))}}}]);