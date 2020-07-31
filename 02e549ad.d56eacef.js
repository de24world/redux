(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{103:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"metadata",(function(){return c})),a.d(t,"rightToc",(function(){return s})),a.d(t,"default",(function(){return b}));var n=a(1),r=a(6),i=(a(0),a(191)),o={id:"basic-tutorial",title:"\uae30\ucd08 \uac15\uc88c: \uc18c\uac1c",hide_title:!0},c={id:"basics/basic-tutorial",title:"\uae30\ucd08 \uac15\uc88c: \uc18c\uac1c",description:"# \uae30\ucd08",source:"@site/../docs_kr/basics/README.md",permalink:"/basics/basic-tutorial",sidebar:"docs",previous:{title:"Redux Essentials, Part 6: Performance and Normalizing Data",permalink:"/tutorials/essentials/part-6-performance-normalization"},next:{title:"\uc561\uc158",permalink:"/basics/actions"}},s=[],l={rightToc:s};function b(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},l,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h1",{id:"\uae30\ucd08"},"\uae30\ucd08"),Object(i.b)("p",null,"\uc774 \uac15\uc88c\uc5d0\uc11c\ub294 Redux \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc774 \uc5b4\ub5bb\uac8c \ub3d9\uc791\ud558\ub294\uc9c0 \ucc28\uadfc\ucc28\uadfc \uac00\ub974\uccd0\ub4dc\ub9bd\ub2c8\ub2e4."),Object(i.b)("p",null,"\uc5ec\uae30\uc11c \uc6b0\ub9ac\ub294 \uac04\ub2e8\ud55c Todo \uc571\uc744 \ub9cc\ub4dc\ub294 \uacfc\uc815\uc744 \ub530\ub77c\uac00\uaca0\uc2b5\ub2c8\ub2e4."),Object(i.b)("div",{className:"admonition admonition-info alert alert--info"},Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"info")),Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},'While the concepts in the "Basic" and "Advanced" tutorials are still valid, these pages are some of the oldest parts of our docs. We\'ll be updating those tutorials soon to improve the explanations and show some patterns that are simpler and easier to use. Keep an eye out for those updates. We\'ll also be reorganizing our docs to make it easier to find information.'),Object(i.b)("p",{parentName:"div"},Object(i.b)("strong",{parentName:"p"},"We recommend starting with the ",Object(i.b)("a",Object(n.a)({parentName:"strong"},{href:"../tutorials/essentials/part-1-overview-concepts"}),"Redux Essentials tutorial")),", since it covers the key points you need to know about how to get started using Redux to write actual applications."))),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"/basics/actions"}),"\uc561\uc158")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"/basics/reducers"}),"\ub9ac\ub4c0\uc11c")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"/basics/store"}),"\uc2a4\ud1a0\uc5b4")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"/basics/data-flow"}),"\ub370\uc774\ud130 \ud750\ub984")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"/basics/usage-with-react"}),"React\uc640 \ud568\uaed8 \uc0ac\uc6a9\ud558\uae30")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"/basics/example"}),"\uc608\uc81c: Todo List"))))}b.isMDXComponent=!0},191:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return d}));var n=a(0),r=a.n(n);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=r.a.createContext({}),b=function(e){var t=r.a.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):c({},t,{},e)),a},p=function(e){var t=b(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=Object(n.forwardRef)((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=b(a),m=n,d=p["".concat(o,".").concat(m)]||p[m]||u[m]||i;return a?r.a.createElement(d,c({ref:t},l,{components:a})):r.a.createElement(d,c({ref:t},l))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:n,o[1]=c;for(var l=2;l<i;l++)o[l]=a[l];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"}}]);