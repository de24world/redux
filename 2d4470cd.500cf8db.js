(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{149:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return u}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function b(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?b(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):b(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=r.a.createContext({}),l=function(e){var t=r.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},d=function(e){var t=l(e.components);return r.a.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,b=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=l(n),m=a,u=d["".concat(b,".").concat(m)]||d[m]||s[m]||i;return n?r.a.createElement(u,c(c({ref:t},p),{},{components:n})):r.a.createElement(u,c({ref:t},p))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,b=new Array(i);b[0]=m;var c={};for(var o in t)hasOwnProperty.call(t,o)&&(c[o]=t[o]);c.originalType=e,c.mdxType="string"==typeof e?e:a,b[1]=c;for(var p=2;p<i;p++)b[p]=n[p];return r.a.createElement.apply(null,b)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},81:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return b})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return o})),n.d(t,"default",(function(){return l}));var a=n(2),r=n(6),i=(n(0),n(149)),b={id:"initializing-state",title:"\uc0c1\ud0dc \ucd08\uae30\ud654\ud558\uae30",description:"\ub9ac\ub4c0\uc11c \uad6c\uc870 \uc7a1\uae30 > \uc0c1\ud0dc \ucd08\uae30\ud654\ud558\uae30: How Redux state is initialized",hide_title:!0},c={unversionedId:"recipes/structuring-reducers/initializing-state",id:"recipes/structuring-reducers/initializing-state",isDocsHomePage:!1,title:"\uc0c1\ud0dc \ucd08\uae30\ud654\ud558\uae30",description:"\ub9ac\ub4c0\uc11c \uad6c\uc870 \uc7a1\uae30 > \uc0c1\ud0dc \ucd08\uae30\ud654\ud558\uae30: How Redux state is initialized",source:"@site/../docs_kr/recipes/structuring-reducers/InitializingState.md",slug:"/recipes/structuring-reducers/initializing-state",permalink:"/recipes/structuring-reducers/initializing-state",version:"current",sidebar:"docs",previous:{title:"\ubd88\ubcc0 \uc5c5\ub370\uc774\ud2b8 \ud328\ud134",permalink:"/recipes/structuring-reducers/immutable-update-patterns"},next:{title:"\ub3d9\uae30",permalink:"/understanding/thinking-in-redux/motivation"}},o=[{value:"\uc694\uc57d",id:"\uc694\uc57d",children:[]},{value:"\uc2ec\ud654",id:"\uc2ec\ud654",children:[{value:"\uac04\ub2e8\ud55c \ub2e8\uc77c \ub9ac\ub4c0\uc11c",id:"\uac04\ub2e8\ud55c-\ub2e8\uc77c-\ub9ac\ub4c0\uc11c",children:[]},{value:"\ub9ac\ub4c0\uc11c \uacb0\ud569",id:"\ub9ac\ub4c0\uc11c-\uacb0\ud569",children:[]}]},{value:"\uc694\uc57d",id:"\uc694\uc57d-1",children:[]}],p={rightToc:o};function l(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h1",{id:"\uc0c1\ud0dc-\ucd08\uae30\ud654\ud558\uae30"},"\uc0c1\ud0dc \ucd08\uae30\ud654\ud558\uae30"),Object(i.b)("p",null,"\uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc758 \uc0c1\ud0dc\ub97c \ucd08\uae30\ud654\ud558\ub294 \ubc29\ubc95\uc740 \ud06c\uac8c \ub450 \uac00\uc9c0\uac00 \uc788\uc2b5\ub2c8\ub2e4. ",Object(i.b)("inlineCode",{parentName:"p"},"createStore")," \uba54\uc18c\ub4dc\ub294 \ucd94\uac00\uc801\uc778 \ub450 \ubc88\uc9f8 \uc778\uc790\ub85c ",Object(i.b)("inlineCode",{parentName:"p"},"preloadedState"),"\uac12\uc744 \ubc1b\uc744 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \ub610\ud55c \ub9ac\ub4c0\uc11c\ub294 ",Object(i.b)("inlineCode",{parentName:"p"},"undefined"),"\uc778 \uc778\uc790\ub97c \ucc3e\uace0 \ucd08\uae43\uac12\uc73c\ub85c \uc0ac\uc6a9\ud560 \uac12\uc744 \ubc18\ud658\ud574\uc11c \ucd08\uae43\uac12\uc744 \uc9c0\uc815\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uc774\ub294 \ub9ac\ub4c0\uc11c \ub0b4\ubd80\uc5d0\uc11c \uba85\uc2dc\uc801\uc73c\ub85c \ud655\uc778\ud558\uac70\ub098 ",Object(i.b)("inlineCode",{parentName:"p"},"function myReducer(state = someDefaultValue, action)")," \ucc98\ub7fc ES6\uc758 \uae30\ubcf8 \uc778\uc790 \uad6c\ubb38\uc744 \ud1b5\ud574 \uc0ac\uc6a9\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),Object(i.b)("p",null,"\uc774 \ub450 \uac00\uc9c0 \uc811\uadfc\uc774 \ud56d\uc0c1 \uba85\ud655\ud55c \uac83\uc740 \uc544\ub2d9\ub2c8\ub2e4. \ub2e4\ud589\ud788 \ud504\ub85c\uc138\uc2a4\ub294 \uc608\uce21 \uac00\ub2a5\ud55c \uaddc\uce59\uc744 \ub530\ub974\uace0 \uc788\uc2b5\ub2c8\ub2e4. \uc5ec\uae30\uc11c\ub294 \uadf8 \uc870\uac01\ub4e4\uc744 \uc5b4\ub5bb\uac8c \ub9de\ucd94\ub294\uc9c0 \uc54c\uc544\ubd05\ub2c8\ub2e4."),Object(i.b)("h2",{id:"\uc694\uc57d"},"\uc694\uc57d"),Object(i.b)("p",null,"\ub9ac\ub4c0\uc11c\uc5d0\uc11c ",Object(i.b)("inlineCode",{parentName:"p"},"combineReducers()"),"\uc640 \uac19\uc740 \ucf54\ub4dc\uac00 \uc5c6\ub2e4\uba74 ",Object(i.b)("inlineCode",{parentName:"p"},"preloadedState"),"\ub294 \ud56d\uc0c1 ",Object(i.b)("inlineCode",{parentName:"p"},"state = ..."),"\ubcf4\ub2e4 \uc6b0\uc120\ud569\ub2c8\ub2e4. \ub9ac\ub4c0\uc11c\uc5d0 \uc804\ub2ec\ub41c ",Object(i.b)("inlineCode",{parentName:"p"},"state")," ",Object(i.b)("em",{parentName:"p"},"\ub294")," ",Object(i.b)("inlineCode",{parentName:"p"},"preloadedState"),"\uc774\uace0 ",Object(i.b)("inlineCode",{parentName:"p"},"undefined"),"\uac00 ",Object(i.b)("em",{parentName:"p"},"\uc544\ub2c8\uae30")," \ub54c\ubb38\uc785\ub2c8\ub2e4. \ub530\ub77c\uc11c ES6 \uc778\uc218 \uad6c\ubb38\uc774 \uc801\uc6a9\ub418\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4."),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"combineReducers()"),"\uc758 \ub3d9\uc791\uc740 \ub354\uc6b1 \ubbf8\ubb18\ud569\ub2c8\ub2e4. ",Object(i.b)("inlineCode",{parentName:"p"},"preloadedState"),"\ub85c \uc0c1\ud0dc\uac00 \uc9c0\uc815\ub41c \ub9ac\ub4c0\uc11c\ub294 \ud574\ub2f9 \uc0c1\ud0dc\ub97c \ubc1b\uc2b5\ub2c8\ub2e4. \ub2e4\ub978 \ub9ac\ub4c0\uc11c\ub294 \uae30\ubcf8\uc73c\ub85c \uc815\uc758\ud55c ",Object(i.b)("inlineCode",{parentName:"p"},"state = ..."),"\ub85c \ub3cc\uc544\uac08 \uac83\uc774\uae30 \ub54c\ubb38\uc5d0 ",Object(i.b)("inlineCode",{parentName:"p"},"undefined"),"\ub97c \ubc1b\uc2b5\ub2c8\ub2e4."),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"\uc77c\ubc18\uc801\uc73c\ub85c ",Object(i.b)("inlineCode",{parentName:"strong"},"preloadedState"),"\ub294 \ub9ac\ub4c0\uc11c\ub85c \ubd80\ud130 \uc815\uc758\ub41c \uc0c1\ud0dc\ubcf4\ub2e4 \uc6b0\uc120\uc2dc\ub429\ub2c8\ub2e4. \uc774\ub294 \ub9ac\ub4c0\uc11c\uc5d0 \ucd08\uae43\uac12\uc73c\ub85c \uc0ac\uc6a9\ub420 \uac12\uc744 \uc9c0\uc815\ud560 \uc218 \uc788\uc744 \ubfd0\ub9cc\uc544\ub2c8\ub77c \uc601\uad6c\uc801\uc778 \uc800\uc7a5\uc18c\ub098 \uc11c\ubc84\ub85c \ubd80\ud130 \uc800\uc7a5\uc18c\ub97c \uac00\uc838\uc62c \ub54c (\uc804\uccb4 \ud639\uc740 \ubd80\ubd84\uc801\uc73c\ub85c) \uc774\ubbf8 \uc874\uc7ac\ud558\ub294 \ub370\uc774\ud130\ub97c \ubd88\ub7ec\uc62c \uc218 \uc788\uc2b5\ub2c8\ub2e4.")),Object(i.b)("p",null,Object(i.b)("em",{parentName:"p"},"\uc8fc\uc758: ",Object(i.b)("inlineCode",{parentName:"em"},"preloadedState"),"\ub97c \ud1b5\ud574 \ucd08\uae30\uc0c1\ud0dc\uac00 \uc9c0\uc815\ub41c \ub9ac\ub4c0\uc11c",Object(i.b)("strong",{parentName:"em"},"\ub610\ud55c ",Object(i.b)("inlineCode",{parentName:"strong"},"undefined"),"\uc778 \uc0c1\ud0dc\ub97c \ucc98\ub9ac\ud558\uae30\uc704\ud574 \uae30\ubcf8\uac12\uc774 \ud544\uc694\ud569\ub2c8\ub2e4.")," \ubaa8\ub4e0 \ub9ac\ub4c0\uc11c\uc5d0\ub294 \ucd08\uae30\uc5d0 ",Object(i.b)("inlineCode",{parentName:"em"},"undefined"),"\uac00 \uc804\ub2ec\ub429\ub2c8\ub2e4. \ub530\ub77c\uc11c \ubc18\ub4dc\uc2dc ",Object(i.b)("inlineCode",{parentName:"em"},"undefined"),"\uc778 \uacbd\uc6b0\uc5d0 \uc5b4\ub5a4 \uac12\uc774 \ubc18\ud658\ub420\uc9c0\uac00 \uc791\uc131\ub418\uc5b4\uc57c \ud569\ub2c8\ub2e4. \uc774\ub294 ",Object(i.b)("inlineCode",{parentName:"em"},"undefined"),"\uac00 \uc544\ub2cc \uc5b4\ub5a4 \uac12\uc774\ub77c\ub3c4 \uac00\ub2a5\ud569\ub2c8\ub2e4; \uc5ec\uae30\uc5d0 \uae30\ubcf8\uac12\uc73c\ub85c ",Object(i.b)("inlineCode",{parentName:"em"},"preloadedState"),"\uc758 \uc139\uc158\uc744 \ubcf5\uc0ac\ud560 \ud544\uc694\uac00 \uc5c6\uc2b5\ub2c8\ub2e4.")),Object(i.b)("h2",{id:"\uc2ec\ud654"},"\uc2ec\ud654"),Object(i.b)("h3",{id:"\uac04\ub2e8\ud55c-\ub2e8\uc77c-\ub9ac\ub4c0\uc11c"},"\uac04\ub2e8\ud55c \ub2e8\uc77c \ub9ac\ub4c0\uc11c"),Object(i.b)("p",null,"\uba3c\uc800 \ub9ac\ub4c0\uc11c\uac00 \ud558\ub098\uc778 \uacbd\uc6b0\ub97c \uc0dd\uac01\ud574\ubd05\uc2dc\ub2e4. ",Object(i.b)("inlineCode",{parentName:"p"},"combineReducers()"),"\ub97c \uc0ac\uc6a9\ud558\uc9c0\uc54a\uc2b5\ub2c8\ub2e4."),Object(i.b)("p",null,"\uc774\ub54c \ub9ac\ub4c0\uc11c\ub294 \ub2e4\uc74c\ucc98\ub7fc \uc0dd\uacbc\uc744 \uac81\ub2c8\ub2e4."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"function counter(state = 0, action) {\n  switch (action.type) {\n    case 'INCREMENT':\n      return state + 1\n    case 'DECREMENT':\n      return state - 1\n    default:\n      return state\n  }\n}\n")),Object(i.b)("p",null,"\uc774\uc81c \uc800\uc7a5\uc18c\ub97c \ub2e4\uc74c\ucc98\ub7fc \ub9cc\ub4e4\uc5c8\ub2e4\uace0 \uac00\uc815\ud574\ubd05\uc2dc\ub2e4."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"import { createStore } from 'redux'\nlet store = createStore(counter)\nconsole.log(store.getState()) // 0\n")),Object(i.b)("p",null,"\ucd08\uae30 \uc0c1\ud0dc\ub294 0\uc785\ub2c8\ub2e4. \uc65c \uadf8\ub7f4\uae4c\uc694? ",Object(i.b)("inlineCode",{parentName:"p"},"createStore"),"\uc758 \ub450 \ubc88\uc9f8 \uc778\uc790\uac00 ",Object(i.b)("inlineCode",{parentName:"p"},"undefined"),"\uc774\uae30 \ub54c\ubb38\uc785\ub2c8\ub2e4. \uc774\ub294 \ub9ac\ub4c0\uc11c\uc5d0 \ucc98\uc74c\uc73c\ub85c \uc804\ub2ec\ub41c ",Object(i.b)("inlineCode",{parentName:"p"},"state"),'\uc785\ub2c8\ub2e4. \ub9ac\ub355\uc2a4\uac00 \ucd08\uae30\ud654\ub420 \ub54c \ub514\uc2a4\ud328\ucc98\ub294 \uc0c1\ud0dc\ub97c \ucc44\uc6b0\uae30 \uc704\ud574 "\ub354\ubbf8" \uc561\uc158\uc744 \uc804\ub2ec\ud569\ub2c8\ub2e4. \ub530\ub77c\uc11c \ub2f9\uc2e0\uc758 ',Object(i.b)("inlineCode",{parentName:"p"},"counter"),"\ub9ac\ub4c0\uc11c\ub294 ",Object(i.b)("inlineCode",{parentName:"p"},"state"),"\uac00 ",Object(i.b)("inlineCode",{parentName:"p"},"undefined"),"\uc778 \uc0c1\ud0dc\ub85c \ud638\ucd9c\ub418\uc5c8\uc2b5\ub2c8\ub2e4. ",Object(i.b)("strong",{parentName:"p"},'\uc774\ub294 \uae30\ubcf8 \uc778\uc790\ub97c "\ud65c\uc131\ud654"\ud558\ub294 \uacbd\uc6b0\uc785\ub2c8\ub2e4.')," \ub530\ub77c\uc11c ",Object(i.b)("inlineCode",{parentName:"p"},"state"),"\ub294 \uae30\ubcf8\uac12 (",Object(i.b)("inlineCode",{parentName:"p"},"state = 0"),")\uc5d0 \ub530\ub77c ",Object(i.b)("inlineCode",{parentName:"p"},"0"),"\uc774 \ub429\ub2c8\ub2e4. \uadf8\ub9ac\uace0 \uc774 \uc0c1\ud0dc\uac00 \ubc18\ud658\ub429\ub2c8\ub2e4."),Object(i.b)("p",null,"\ub2e4\ub978 \uc2dc\ub098\ub9ac\uc624\ub97c \uc0dd\uac01\ud574\ubd05\uc2dc\ub2e4."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"import { createStore } from 'redux'\nlet store = createStore(counter, 42)\nconsole.log(store.getState()) // 42\n")),Object(i.b)("p",null,"\uc774 \uacbd\uc6b0\uc5d0 \uc65c ",Object(i.b)("inlineCode",{parentName:"p"},"0"),"\uc774 \uc544\ub2cc ",Object(i.b)("inlineCode",{parentName:"p"},"42"),"\uc77c\uae4c\uc694? ",Object(i.b)("inlineCode",{parentName:"p"},"createStore"),"\ub294 \ub450 \ubc88\uc9f8 \uc778\uc790\ub85c ",Object(i.b)("inlineCode",{parentName:"p"},"42"),"\uc640 \ud568\uaed8 \ud638\ucd9c\ub418\uc5c8\uae30 \ub54c\ubb38\uc785\ub2c8\ub2e4. \uc774 \uc778\uc790\ub294 \ub2f9\uc2e0\uc758 \ub9ac\ub4c0\uc11c\uc5d0 \ub354\ubbf8 \uc561\uc158\uacfc \ud568\uaed8 \uc804\ub2ec\ub418\ub294 ",Object(i.b)("inlineCode",{parentName:"p"},"state"),"\uac00 \ub429\ub2c8\ub2e4. ",Object(i.b)("strong",{parentName:"p"},"\uc774\ubc88\uc5d0\ub294 ",Object(i.b)("inlineCode",{parentName:"strong"},"state"),"\uac00 undefined\uac00 \uc544\ub2d9\ub2c8\ub2e4.(",Object(i.b)("inlineCode",{parentName:"strong"},"42"),"\uac00 \ub429\ub2c8\ub2e4!) \uadf8\ub7ec\ubbc0\ub85c ES6\uc758 \uae30\ubcf8 \uc778\uc790 \ubb38\ubc95\uc740 \ud6a8\ub825\uc774 \uc5c6\uc2b5\ub2c8\ub2e4.")," ",Object(i.b)("inlineCode",{parentName:"p"},"state"),"\ub294 ",Object(i.b)("inlineCode",{parentName:"p"},"42"),"\uc774\uace0 ",Object(i.b)("inlineCode",{parentName:"p"},"42"),"\ub294 \ub9ac\ub4c0\uc11c\ub85c\ubd80\ud130 \ubc18\ud658\ub429\ub2c8\ub2e4."),Object(i.b)("h3",{id:"\ub9ac\ub4c0\uc11c-\uacb0\ud569"},"\ub9ac\ub4c0\uc11c \uacb0\ud569"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"combineReducers()"),"\ub97c \uc0ac\uc6a9\ud558\ub294 \uacbd\uc6b0\ub97c \uc0dd\uac01\ud574\ubd05\uc2dc\ub2e4.\n\ub450 \uac1c\uc758 \ub9ac\ub4c0\uc11c\uac00 \uc788\uc2b5\ub2c8\ub2e4:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"function a(state = 'lol', action) {\n  return state\n}\n\nfunction b(state = 'wat', action) {\n  return state\n}\n")),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"combineReducers({ a, b })"),"\uc5d0 \uc758\ud574 \ub9cc\ub4e4\uc5b4\uc9c4 \ub9ac\ub4c0\uc11c\ub294 \ub2e4\uc74c\uacfc\uac19\uc2b5\ub2c8\ub2e4:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"// const combined = combineReducers({ a, b })\nfunction combined(state = {}, action) {\n  return {\n    a: a(state.a, action),\n    b: b(state.b, action)\n  }\n}\n")),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"preloadedState"),"\uc5c6\uc774 ",Object(i.b)("inlineCode",{parentName:"p"},"createStore"),"\ub97c \ubd80\ub978\ub2e4\uba74 ",Object(i.b)("inlineCode",{parentName:"p"},"state"),"\ub97c ",Object(i.b)("inlineCode",{parentName:"p"},"{}"),"\ub85c \ucd08\uae30\ud654\ud560\uac81\ub2c8\ub2e4. \ub530\ub77c\uc11c ",Object(i.b)("inlineCode",{parentName:"p"},"a"),"\uc640 ",Object(i.b)("inlineCode",{parentName:"p"},"b"),"\ub9ac\ub4c0\uc11c\uac00 \ubd88\ub9ac\ub294 \uc2dc\uc810\uc5d0 ",Object(i.b)("inlineCode",{parentName:"p"},"state.a"),", ",Object(i.b)("inlineCode",{parentName:"p"},"state.b"),"\ub294 ",Object(i.b)("inlineCode",{parentName:"p"},"undefined"),"\ub85c \ucd08\uae30\ud654\ub420\uac81\ub2c8\ub2e4. ",Object(i.b)("strong",{parentName:"p"},Object(i.b)("inlineCode",{parentName:"strong"},"a"),"\uc640 ",Object(i.b)("inlineCode",{parentName:"strong"},"b"),"\ub9ac\ub4c0\uc11c \ub458 \ub2e4 ",Object(i.b)("inlineCode",{parentName:"strong"},"undefined"),"\ub97c ",Object(i.b)("em",{parentName:"strong"},"\uadf8\uac83\ub4e4\uc758")," \uc0c1\ud0dc \uc778\uc790\ub85c \ubc1b\uace0, \uae30\ubcf8 ",Object(i.b)("inlineCode",{parentName:"strong"},"state"),"\uac12\uc744 \uc9c0\uc815\ud55c\ub2e4\uba74 \ud574\ub2f9\uac12\uc774 \ubc18\ud658\ub420\uac81\ub2c8\ub2e4.")," \uc774\uac83\uc774 \uacb0\ud569\ub41c \ub9ac\ub4c0\uc11c\uac00 \uccab \ud638\ucd9c\uc5d0\uc11c ",Object(i.b)("inlineCode",{parentName:"p"},"{ a: 'lol', b: 'wat' }")," \uc0c1\ud0dc \uac1d\uccb4\ub97c \ubc18\ud658\ud558\ub294 \ubc29\ubc95\uc785\ub2c8\ub2e4."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"import { createStore } from 'redux'\nlet store = createStore(combined)\nconsole.log(store.getState()) // { a: 'lol', b: 'wat' }\n")),Object(i.b)("p",null,"\ub2e4\ub978 \uc2dc\ub098\ub9ac\uc624\ub97c \uc0dd\uac01\ud574\ubd05\uc2dc\ub2e4."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"import { createStore } from 'redux'\nlet store = createStore(combined, { a: 'horse' })\nconsole.log(store.getState()) // { a: 'horse', b: 'wat' }\n")),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"preloadedState"),"\ub97c ",Object(i.b)("inlineCode",{parentName:"p"},"createStore()"),"\uc758 \uc778\uc790\ub85c \uc9c0\uc815\ud588\uc2b5\ub2c8\ub2e4. \uacb0\ud569\ub41c \ub9ac\ub4c0\uc11c\uc5d0\uc11c \ubc18\ud658\ub418\ub294 \uc0c1\ud0dc\ub294 ",Object(i.b)("inlineCode",{parentName:"p"},"a"),"\ub9ac\ub4c0\uc11c\uc5d0 \uc9c0\uc815\ub41c \ucd08\uae30 \uc0c1\ud0dc\ub97c ",Object(i.b)("inlineCode",{parentName:"p"},"b"),"\ub9ac\ub4c0\uc11c\uc758 \uae30\ubcf8 \uc778\uc790\ub85c \uc120\ud0dd\ub41c ",Object(i.b)("inlineCode",{parentName:"p"},"'wat'"),"\uacfc \uacb0\ud569\ud569\ub2c8\ub2e4.","*","*"),Object(i.b)("p",null,"\uacb0\ud569\ub41c \ub9ac\ub4c0\uc11c\uac00 \ud558\ub294 \uc77c\uc744 \ub2e4\uc2dc \ud55c\ubc88 \uc0dd\uac01\ud574\ubd05\uc2dc\ub2e4."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"// const combined = combineReducers({ a, b })\nfunction combined(state = {}, action) {\n  return {\n    a: a(state.a, action),\n    b: b(state.b, action)\n  }\n}\n")),Object(i.b)("p",null,"\uc774 \uacbd\uc6b0\uc5d0, ",Object(i.b)("inlineCode",{parentName:"p"},"state"),"\uac00 \uc9c0\uc815\ub418\uc5c8\uae30 \ub54c\ubb38\uc5d0 ",Object(i.b)("inlineCode",{parentName:"p"},"{}"),"\ub85c \ub418\ub3cc\uc544\uac00\uc9c0 \uc54a\uc558\uc2b5\ub2c8\ub2e4. ",Object(i.b)("inlineCode",{parentName:"p"},"a"),"\uc758 \uac12\uc740 ",Object(i.b)("inlineCode",{parentName:"p"},"horse"),"\uc774\uc9c0\ub9cc ",Object(i.b)("inlineCode",{parentName:"p"},"b"),"\uc758 \uac12\uc774 \uc5c6\uc2b5\ub2c8\ub2e4. ",Object(i.b)("inlineCode",{parentName:"p"},"a"),"\ub9ac\ub4c0\uc11c\uac00 ",Object(i.b)("inlineCode",{parentName:"p"},"state"),"\ub85c ",Object(i.b)("inlineCode",{parentName:"p"},"'horse'"),"\ub97c \ubc1b\uc544 \ubc18\ud658\ud588\uc9c0\ub9cc ",Object(i.b)("inlineCode",{parentName:"p"},"b"),"\ub9ac\ub4c0\uc11c\uac00 ",Object(i.b)("inlineCode",{parentName:"p"},"state"),"\ub85c ",Object(i.b)("inlineCode",{parentName:"p"},"undefined"),"\ub97c \ubc1b\uae30 \ub54c\ubb38\uc5d0 \uc774\ub97c \uae30\ubcf8 ",Object(i.b)("inlineCode",{parentName:"p"},"state"),"\ub85c \ubc18\ud658\ud569\ub2c8\ub2e4. \uc774\uac83\uc774 \ubc18\ud658 \uac12\uc73c\ub85c ",Object(i.b)("inlineCode",{parentName:"p"},"{ a: 'horse', b: 'wat' }"),"\ub97c \uc5bb\uc744 \uc218 \uc788\ub294 \uc774\uc720\uc785\ub2c8\ub2e4."),Object(i.b)("h2",{id:"\uc694\uc57d-1"},"\uc694\uc57d"),Object(i.b)("p",null,"\uc694\uc57d\ud558\uba74, \ub9ac\ub355\uc2a4\uc758 \ucee8\ubca4\uc158\uc744 \uc9c0\ud0a4\uace0 ",Object(i.b)("inlineCode",{parentName:"p"},"undefined"),"\ub97c ",Object(i.b)("inlineCode",{parentName:"p"},"state"),"\uc778\uc790\ub85c \ud638\ucd9c\ud588\uc744 \ub54c \ub9ac\ub4c0\uc11c\uc758 \ucd08\uae30 \uc0c1\ud0dc\ub97c \ubc18\ud658\ud558\ub824\uba74 (\uc774\ub97c \uad6c\ud604\ud558\uae30 \uc704\ud55c \uac00\uc7a5 \uc26c\uc6b4 \ubc29\ubc95\uc740 ",Object(i.b)("inlineCode",{parentName:"p"},"state"),"\ub97c ES6\uc758 \uae30\ubcf8 \uc778\uc790 \uac12\uc744 \uc774\uc6a9\ud558\ub294\uac83) \uacb0\ud569\ub41c \ub9ac\ub4c0\uc11c\ub97c \uc704\ud574 \uc801\uc808\ud55c \uc77c\uc744 \ud574\uc57c \ud569\ub2c8\ub2e4. ",Object(i.b)("strong",{parentName:"p"},Object(i.b)("inlineCode",{parentName:"strong"},"createStore()"),"\ud568\uc218\uc5d0 \uc804\ub2ec\ub41c ",Object(i.b)("inlineCode",{parentName:"strong"},"preloadedState"),"\uac1d\uccb4\uc5d0\uc11c \uc0c1\uc751\ud558\ub294 \uac12\uc744 \ub118\uaca8\uc8fc\uaca0\uc9c0\ub9cc, \uc544\ubb34\uac83\ub3c4 \uc804\ub2ec\ud558\uc9c0 \uc54a\uac70\ub098 \ub300\uc751\ub418\ub294 \uac12\uc774 \uc5c6\ub2e4\uba74 \uae30\ubcf8 ",Object(i.b)("inlineCode",{parentName:"strong"},"state")," \uc778\uc790\uac00 \ucd08\uae43\uac12\uc73c\ub85c \ub300\uc2e0 \uc9c0\uc815\ub429\ub2c8\ub2e4.")," \uc774 \ubc29\ubc95\uc740 \uae30\uc874 \ub370\uc774\ud130\ub97c \uc8fc\uc785, \ucd08\uae30\ud654\ud558\uace0 \ub370\uc774\ud130\uac00 \ubcf4\uc874\ub418\uc9c0 \uc54a\ub294 \uacbd\uc6b0 \uac01 \uc0c1\ud0dc\ub97c \ub2e4\uc2dc \uc124\uc815\ud560 \uc218 \uc788\ub2e4\ub294 \uc810\uc5d0\uc11c \ud6a8\uacfc\uc801\uc785\ub2c8\ub2e4. \ubb3c\ub860 ",Object(i.b)("inlineCode",{parentName:"p"},"combineReducers()"),"\ub97c \ub9ce\uc740 \ub2e8\uacc4\uc5d0\uc11c \uc0ac\uc6a9\ud574\uc11c \uc774 \ud328\ud134\uc744 \uc7ac\uadc0\uc801\uc73c\ub85c \uc0ac\uc6a9\ud560 \uc218\ub3c4 \uc788\uc2b5\ub2c8\ub2e4. \ud639\uc740 \uad00\ub828 \uc0c1\ud0dc \ud2b8\ub9ac\uc758 \uc77c\ubd80\ub97c \uc804\ub2ec\ud568\uc73c\ub85c\uc368 \ubd80\ubd84\uc801\uc73c\ub85c \uc0ac\uc6a9\ud560 \uc218\ub3c4 \uc788\uc2b5\ub2c8\ub2e4."))}l.isMDXComponent=!0}}]);