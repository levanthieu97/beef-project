(this["webpackJsonpbeef-project"]=this["webpackJsonpbeef-project"]||[]).push([[5],{60:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var c=n(25);function r(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var n=[],c=!0,r=!1,o=void 0;try{for(var a,s=e[Symbol.iterator]();!(c=(a=s.next()).done)&&(n.push(a.value),!t||n.length!==t);c=!0);}catch(i){r=!0,o=i}finally{try{c||null==s.return||s.return()}finally{if(r)throw o}}return n}}(e,t)||Object(c.a)(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},63:function(e,t,n){"use strict";n(2)},96:function(e,t,n){"use strict";n.r(t);var c,r=n(60),o=n(0),a=n.n(o);var s=function(){if(void 0!==c)return c;var e=!1,t={get passive(){e=!0}},n=function(){};return window.addEventListener("t",n,t),window.removeEventListener("t",n,t),c=e,e},i=o.useLayoutEffect,u=function(e){var t=Object(o.useRef)(e);return i((function(){t.current=e})),t},l="touchstart",b=["mousedown",l],j=function(e){if(e===l)return s()?{passive:!0}:void 0};var f=function(e,t){var n=u(t);Object(o.useEffect)((function(){if(t){var c=function(t){e.current&&n.current&&!e.current.contains(t.target)&&n.current(t)};return b.forEach((function(e){document.addEventListener(e,c,j(e))})),function(){b.forEach((function(e){document.removeEventListener(e,c,j(e))}))}}}),[!t])},d=n(4),h=n(24),O=(n(63),n(2)),m=function(e){var t=Object(d.f)();console.log(t);var n=Object(o.useState)("/"===t.pathname),c=Object(r.a)(n,2),a=c[0],s=c[1],i=Object(o.useState)(!1),u=Object(r.a)(i,2),l=u[0],b=u[1],j=Object(o.useState)(!1),m=Object(r.a)(j,2),v=m[0],x=m[1],p=Object(o.useRef)(null),N=Object(o.useRef)(null),w=function(){0===window.pageYOffset?(console.log(a),s(!0)):s(!1)};Object(o.useEffect)((function(){if("/"===t.pathname)return w(),console.log(a),window.onscroll=function(){w()},function(){w()}}),[a]);return f(p,(function(){x(!1)})),f(N,(function(){b(!1)})),Object(O.jsx)("header",{className:"site-header ".concat(a?"":"site-header--fixed"),children:Object(O.jsxs)("div",{className:"component-container",children:[Object(O.jsx)(h.b,{to:"/",children:Object(O.jsx)("h1",{className:"site-logo",children:"NOW DELI"})}),Object(O.jsxs)("nav",{ref:p,className:"site-nav ".concat(v?"site-nav--open":""),children:[Object(O.jsx)(h.b,{to:"/collections",children:"Collections"}),Object(O.jsx)(h.b,{to:"#",children:"Sale"}),Object(O.jsx)(h.b,{to:"/",children:"Home"}),Object(O.jsx)(h.b,{to:"#",children:"About"}),Object(O.jsx)(h.b,{to:"#",children:"FAQ"})]}),Object(O.jsxs)("div",{className:"site-header__actions",children:[Object(O.jsxs)("button",{ref:N,className:"search-form-wrapper ".concat(l?"search-form--active":""),children:[Object(O.jsxs)("form",{className:"search-form",children:[Object(O.jsx)("i",{className:"icon-cancel",onClick:function(){return b(!l)}}),Object(O.jsx)("input",{text:"text",name:"search",placeholder:"Enter the product are looking for"})]}),Object(O.jsx)("i",{onClick:function(){return b(!l)},className:"icon-search"})]}),Object(O.jsx)(h.b,{to:"#",children:Object(O.jsx)("button",{className:"btn-cart",children:Object(O.jsx)("i",{className:"icon-cart"})})}),Object(O.jsx)(h.b,{to:"#",children:Object(O.jsx)("button",{className:"site-header__btn-avatar",children:Object(O.jsx)("i",{className:"icon-avatar"})})}),Object(O.jsx)("button",{onClick:function(){return x(!0)},className:"site-header__btn-menu",children:Object(O.jsx)("i",{className:"btn-hamburger",children:Object(O.jsx)("span",{})})})]})]})})};t.default=a.a.memo(m)}}]);
//# sourceMappingURL=5.a1975923.chunk.js.map