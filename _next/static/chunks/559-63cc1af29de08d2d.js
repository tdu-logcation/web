(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[559],{7389:function(e,t,n){"use strict";n.d(t,{z:function(){return k}});var r=n(7294);function a(e,t){if(null!=e)if("function"!==typeof e)try{e.current=t}catch(n){throw new Error("Cannot assign value '"+t+"' to ref '"+e+"'")}else e(t)}function o(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return r.useMemo((()=>t.every((e=>null==e))?null:e=>{t.forEach((t=>{t&&a(t,e)}))}),t)}var l=n(63),i=n(4915),c=n(5284),s=n(1440),u=n(8554),f=n.n(u),p=n(4461),d=n(3808),v=n(8500);function m(){return(m=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var[h,y]=(0,v.k)({strict:!1,name:"ButtonGroupContext"}),g=(0,l.G)(((e,t)=>{var{size:n,colorScheme:a,variant:o,className:l,spacing:i="0.5rem",isAttached:c,isDisabled:u}=e,f=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,["size","colorScheme","variant","className","spacing","isAttached","isDisabled"]),d=(0,p.cx)("chakra-button__group",l),v=r.useMemo((()=>({size:n,colorScheme:a,variant:o,isDisabled:u})),[n,a,o,u]),y={display:"inline-flex"};return y=m({},y,c?{"> *:first-of-type:not(:last-of-type)":{borderEndRadius:0},"> *:not(:first-of-type):not(:last-of-type)":{borderRadius:0},"> *:not(:first-of-type):last-of-type":{borderStartRadius:0}}:{"& > *:not(style) ~ *:not(style)":{marginStart:i}}),r.createElement(h,{value:v},r.createElement(s.m$.div,m({ref:t,role:"group",__css:y,className:d},f)))}));d.Ts&&(g.displayName="ButtonGroup");var b=n(5754);function E(){return(E=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var O=e=>{var{label:t,placement:n,children:a=r.createElement(b.$,{color:"currentColor",width:"1em",height:"1em"}),className:o,__css:l}=e,i=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,["label","placement","spacing","children","className","__css"]),c=(0,p.cx)("chakra-button__spinner",o),u="start"===n?"marginEnd":"marginStart",f=r.useMemo((()=>E({display:"flex",alignItems:"center",position:t?"relative":"absolute",[u]:t?"0.5rem":0,fontSize:"1em",lineHeight:"normal"},l)),[l,t,u]);return r.createElement(s.m$.div,E({className:c},i,{__css:f}),a)};function w(){return(w=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}d.Ts&&(O.displayName="ButtonSpinner");var _=e=>{var{children:t,className:n}=e,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,["children","className"]),o=r.isValidElement(t)?r.cloneElement(t,{"aria-hidden":!0,focusable:!1}):t,l=(0,p.cx)("chakra-button__icon",n);return r.createElement(s.m$.span,w({display:"inline-flex",alignSelf:"center",flexShrink:0},a,{className:l}),o)};function N(){return(N=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}d.Ts&&(_.displayName="ButtonIcon");var k=(0,l.G)(((e,t)=>{var n=y(),a=(0,i.m)("Button",N({},n,e)),l=(0,c.Lr)(e),{isDisabled:u=(null==n?void 0:n.isDisabled),isLoading:d,isActive:v,isFullWidth:m,children:h,leftIcon:g,rightIcon:b,loadingText:E,iconSpacing:w="0.5rem",type:_,spinner:k,spinnerPlacement:S="start",className:j,as:I}=l,C=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(l,["isDisabled","isLoading","isActive","isFullWidth","children","leftIcon","rightIcon","loadingText","iconSpacing","type","spinner","spinnerPlacement","className","as"]),L=r.useMemo((()=>{var e,t=f()({},null!=(e=null==a?void 0:a._focus)?e:{},{zIndex:1});return N({display:"inline-flex",appearance:"none",alignItems:"center",justifyContent:"center",userSelect:"none",position:"relative",whiteSpace:"nowrap",verticalAlign:"middle",outline:"none",width:m?"100%":"auto"},a,!!n&&{_focus:t})}),[a,n,m]),{ref:M,type:P}=function(e){var[t,n]=r.useState(!e);return{ref:r.useCallback((e=>{e&&n("BUTTON"===e.tagName)}),[]),type:t?"button":void 0}}(I),T={rightIcon:b,leftIcon:g,iconSpacing:w,children:h};return r.createElement(s.m$.button,N({disabled:u||d,ref:o(t,M),as:I,type:null!=_?_:P,"data-active":(0,p.PB)(v),"data-loading":(0,p.PB)(d),__css:L,className:(0,p.cx)("chakra-button",j)},C),d&&"start"===S&&r.createElement(O,{className:"chakra-button__spinner--start",label:E,placement:"start"},k),d?E||r.createElement(s.m$.span,{opacity:0},r.createElement(x,T)):r.createElement(x,T),d&&"end"===S&&r.createElement(O,{className:"chakra-button__spinner--end",label:E,placement:"end"},k))}));function x(e){var{leftIcon:t,rightIcon:n,children:a,iconSpacing:o}=e;return r.createElement(r.Fragment,null,t&&r.createElement(_,{marginEnd:o},t),a,n&&r.createElement(_,{marginStart:o},n))}d.Ts&&(k.displayName="Button")},8418:function(e,t,n){"use strict";function r(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=[],r=!0,a=!1,o=void 0;try{for(var l,i=e[Symbol.iterator]();!(r=(l=i.next()).done)&&(n.push(l.value),!t||n.length!==t);r=!0);}catch(c){a=!0,o=c}finally{try{r||null==i.return||i.return()}finally{if(a)throw o}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}t.default=void 0;var a,o=(a=n(7294))&&a.__esModule?a:{default:a},l=n(6273),i=n(387),c=n(7190);var s={};function u(e,t,n,r){if(e&&l.isLocalURL(t)){e.prefetch(t,n,r).catch((function(e){0}));var a=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;s[t+"%"+n+(a?"%"+a:"")]=!0}}var f=function(e){var t,n=!1!==e.prefetch,a=i.useRouter(),f=o.default.useMemo((function(){var t=r(l.resolveHref(a,e.href,!0),2),n=t[0],o=t[1];return{href:n,as:e.as?l.resolveHref(a,e.as):o||n}}),[a,e.href,e.as]),p=f.href,d=f.as,v=e.children,m=e.replace,h=e.shallow,y=e.scroll,g=e.locale;"string"===typeof v&&(v=o.default.createElement("a",null,v));var b=(t=o.default.Children.only(v))&&"object"===typeof t&&t.ref,E=r(c.useIntersection({rootMargin:"200px"}),2),O=E[0],w=E[1],_=o.default.useCallback((function(e){O(e),b&&("function"===typeof b?b(e):"object"===typeof b&&(b.current=e))}),[b,O]);o.default.useEffect((function(){var e=w&&n&&l.isLocalURL(p),t="undefined"!==typeof g?g:a&&a.locale,r=s[p+"%"+d+(t?"%"+t:"")];e&&!r&&u(a,p,d,{locale:t})}),[d,p,w,g,n,a]);var N={ref:_,onClick:function(e){t.props&&"function"===typeof t.props.onClick&&t.props.onClick(e),e.defaultPrevented||function(e,t,n,r,a,o,i,c){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&l.isLocalURL(n))&&(e.preventDefault(),null==i&&r.indexOf("#")>=0&&(i=!1),t[a?"replace":"push"](n,r,{shallow:o,locale:c,scroll:i}))}(e,a,p,d,m,h,y,g)},onMouseEnter:function(e){l.isLocalURL(p)&&(t.props&&"function"===typeof t.props.onMouseEnter&&t.props.onMouseEnter(e),u(a,p,d,{priority:!0}))}};if(e.passHref||"a"===t.type&&!("href"in t.props)){var k="undefined"!==typeof g?g:a&&a.locale,x=a&&a.isLocaleDomain&&l.getDomainLocale(d,k,a&&a.locales,a&&a.domainLocales);N.href=x||l.addBasePath(l.addLocale(d,k,a&&a.defaultLocale))}return o.default.cloneElement(t,N)};t.default=f},7190:function(e,t,n){"use strict";function r(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=[],r=!0,a=!1,o=void 0;try{for(var l,i=e[Symbol.iterator]();!(r=(l=i.next()).done)&&(n.push(l.value),!t||n.length!==t);r=!0);}catch(c){a=!0,o=c}finally{try{r||null==i.return||i.return()}finally{if(a)throw o}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootMargin,n=e.disabled||!l,c=a.useRef(),s=r(a.useState(!1),2),u=s[0],f=s[1],p=a.useCallback((function(e){c.current&&(c.current(),c.current=void 0),n||u||e&&e.tagName&&(c.current=function(e,t,n){var r=function(e){var t=e.rootMargin||"",n=i.get(t);if(n)return n;var r=new Map,a=new IntersectionObserver((function(e){e.forEach((function(e){var t=r.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return i.set(t,n={id:t,observer:a,elements:r}),n}(n),a=r.id,o=r.observer,l=r.elements;return l.set(e,t),o.observe(e),function(){l.delete(e),o.unobserve(e),0===l.size&&(o.disconnect(),i.delete(a))}}(e,(function(e){return e&&f(e)}),{rootMargin:t}))}),[n,t,u]);return a.useEffect((function(){if(!l&&!u){var e=o.requestIdleCallback((function(){return f(!0)}));return function(){return o.cancelIdleCallback(e)}}}),[u]),[p,u]};var a=n(7294),o=n(9311),l="undefined"!==typeof IntersectionObserver;var i=new Map},5063:function(e,t,n){e.exports=n(8418)},8357:function(e,t,n){"use strict";n.d(t,{w_:function(){return s}});var r=n(7294),a={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},o=r.createContext&&r.createContext(a),l=function(){return(l=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)},i=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n};function c(e){return e&&e.map((function(e,t){return r.createElement(e.tag,l({key:t},e.attr),c(e.child))}))}function s(e){return function(t){return r.createElement(u,l({attr:l({},e.attr)},t),c(e.child))}}function u(e){var t=function(t){var n,a=e.attr,o=e.size,c=e.title,s=i(e,["attr","size","title"]),u=o||t.size||"1em";return t.className&&(n=t.className),e.className&&(n=(n?n+" ":"")+e.className),r.createElement("svg",l({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,a,s,{className:n,style:l(l({color:e.color||t.color},t.style),e.style),height:u,width:u,xmlns:"http://www.w3.org/2000/svg"}),c&&r.createElement("title",null,c),e.children)};return void 0!==o?r.createElement(o.Consumer,null,(function(e){return t(e)})):t(a)}}}]);