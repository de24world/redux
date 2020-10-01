(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{149:function(e,n,t){"use strict";t.d(n,"a",(function(){return d})),t.d(n,"b",(function(){return m}));var r=t(0),c=t.n(r);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function u(e,n){if(null==e)return{};var t,r,c=function(e,n){if(null==e)return{};var t,r,c={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(c[t]=e[t]);return c}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(c[t]=e[t])}return c}var b=c.a.createContext({}),s=function(e){var n=c.a.useContext(b),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},d=function(e){var n=s(e.components);return c.a.createElement(b.Provider,{value:n},e.children)},l={inlineCode:"code",wrapper:function(e){var n=e.children;return c.a.createElement(c.a.Fragment,{},n)}},p=c.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,b=u(e,["components","mdxType","originalType","parentName"]),d=s(t),p=r,m=d["".concat(i,".").concat(p)]||d[p]||l[p]||a;return t?c.a.createElement(m,o(o({ref:n},b),{},{components:t})):c.a.createElement(m,o({ref:n},b))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,i=new Array(a);i[0]=p;var o={};for(var u in n)hasOwnProperty.call(n,u)&&(o[u]=n[u]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var b=2;b<a;b++)i[b]=t[b];return c.a.createElement.apply(null,i)}return c.a.createElement.apply(null,t)}p.displayName="MDXCreateElement"},54:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return o})),t.d(n,"rightToc",(function(){return u})),t.d(n,"default",(function(){return s}));var r=t(2),c=t(6),a=(t(0),t(149)),i={id:"beyond-combinereducers",title:"combineReducers \ub354 \uc54c\uc544\ubcf4\uae30",description:"\ub9ac\ub4c0\uc11c \uad6c\uc870 \uc7a1\uae30 > combineReducers \ub354 \uc54c\uc544\ubcf4\uae30: Examples of reducer logic for other use cases not handled by combineReducers",hide_title:!0},o={unversionedId:"recipes/structuring-reducers/beyond-combinereducers",id:"recipes/structuring-reducers/beyond-combinereducers",isDocsHomePage:!1,title:"combineReducers \ub354 \uc54c\uc544\ubcf4\uae30",description:"\ub9ac\ub4c0\uc11c \uad6c\uc870 \uc7a1\uae30 > combineReducers \ub354 \uc54c\uc544\ubcf4\uae30: Examples of reducer logic for other use cases not handled by combineReducers",source:"@site/../docs_kr/recipes/structuring-reducers/BeyondCombineReducers.md",slug:"/recipes/structuring-reducers/beyond-combinereducers",permalink:"/recipes/structuring-reducers/beyond-combinereducers",version:"current",sidebar:"docs",previous:{title:"combineReducers \uc0ac\uc6a9\ud558\uae30",permalink:"/recipes/structuring-reducers/using-combinereducers"},next:{title:"\uc0c1\ud0dc \uc815\uaddc\ud654\ud558\uae30",permalink:"/recipes/structuring-reducers/normalizing-state-shape"}},u=[{value:"\uc2ac\ub77c\uc774\uc2a4 \ub9ac\ub4c0\uc11c\ub97c Immutable.js \uac1d\uccb4\uc640 \uc0ac\uc6a9\ud558\uae30",id:"\uc2ac\ub77c\uc774\uc2a4-\ub9ac\ub4c0\uc11c\ub97c-immutablejs-\uac1d\uccb4\uc640-\uc0ac\uc6a9\ud558\uae30",children:[]},{value:"\uc2ac\ub77c\uc774\uc2a4 \ub9ac\ub4c0\uc11c\uac04\uc758 \ub370\uc774\ud130 \uacf5\uc720",id:"\uc2ac\ub77c\uc774\uc2a4-\ub9ac\ub4c0\uc11c\uac04\uc758-\ub370\uc774\ud130-\uacf5\uc720",children:[]},{value:"\ucd94\uac00\uc0ac\ud56d",id:"\ucd94\uac00\uc0ac\ud56d",children:[]}],b={rightToc:u};function s(e){var n=e.components,t=Object(c.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},b,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("h1",{id:"combinereducers-\ub354-\uc54c\uc544\ubcf4\uae30"},Object(a.b)("inlineCode",{parentName:"h1"},"combineReducers")," \ub354 \uc54c\uc544\ubcf4\uae30"),Object(a.b)("p",null,"\ub9ac\ub355\uc2a4\uc5d0 \ud3ec\ud568\ub41c ",Object(a.b)("inlineCode",{parentName:"p"},"combineReducers"),'\ub294 \ub9e4\uc6b0 \uc720\uc6a9\ud558\uc9c0\ub9cc \uc77c\ubc18\uc801\uc778 \uacbd\uc6b0\ub4e4\uc744 \ucc98\ub9ac\ud558\uae30 \uc704\ud574 \uac15\uc81c\ud558\ub294 \uaddc\uce59\uc774 \uc788\uc2b5\ub2c8\ub2e4: \ubd80\ubd84\uc801\uc778 \uc0c1\ud0dc\ub97c \uc5c5\ub370\uc774\ud2b8\ud558\ub294 \uc791\uc5c5\uc744 \uac01 \uc2ac\ub77c\uc774\uc2a4\ub9ac\ub4c0\uc11c\uc5d0 \uc704\uc784\ud568\uc73c\ub85c\uc11c \ud3c9\ubc94\ud55c \uc790\ubc14\uc2a4\ud06c\ub9bd\ud2b8 \uac1d\uccb4\uc778 \uc0c1\ud0dc\ud2b8\ub9ac\ub97c \uc5c5\ub370\uc774\ud2b8\ud569\ub2c8\ub2e4. \uc2ac\ub77c\uc774\uc2a4 \ub9ac\ub4c0\uc11c\uc758 "\uc815\ub82c", \uc0c1\ud0dc\ud2b8\ub9ac\uc758 \ub2e4\ub978 \ubd80\ubd84\uc744 \uc2ac\ub77c\uc774\uc2a4 \ub9ac\ub4c0\uc11c\uc758 \ucd94\uac00\uc801\uc778 \ub9e4\uac1c\ubcc0\uc218\ub85c \uc804\ub2ec, Immutable.js Maps\ub85c \uad6c\uc131\ub41c \uc0c1\ud0dc\ud2b8\ub9ac\ub4f1\uacfc \uac19\uc740 \ub2e4\ub978 \ucf00\uc774\uc2a4\ub97c \ucc98\ub9ac\ud558\uc9c4 ',Object(a.b)("em",{parentName:"p"},"\uc54a\uc2b5\ub2c8\ub2e4"),". \ub610\ud55c \uc8fc\uc5b4\uc9c4 \uc2ac\ub77c\uc774\uc2a4 \ub9ac\ub4c0\uc11c\uac00 \uc81c\ub300\ub85c \ub3d9\uc791\ud558\ub294\uc9c0\ub3c4 \ud655\uc778\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4."),Object(a.b)("p",null,'"\ub2e4\ub978 \ucf00\uc774\uc2a4\uc5d0 \ub300\ud574 ',Object(a.b)("inlineCode",{parentName:"p"},"combineReducers"),'\ub294 \uc5b4\ub5bb\uac8c \uc0ac\uc6a9\ud574\uc57c \ud558\ub098\uc694?" \ub77c\ub294 \uc9c8\ubb38\uc744 \ub9ce\uc774 \ud569\ub2c8\ub2e4. \ub2f5\uc740 \uac04\ub2e8\ud788 \ub9d0\ud574: "\ud558\uc9c0\ub9c8\uc138\uc694 - \ub2e4\ub978 \ubc29\ubc95\uc774 \uc788\uc744 \uac81\ub2c8\ub2e4". ',Object(a.b)("strong",{parentName:"p"},"\uc77c\ub2e8 ",Object(a.b)("inlineCode",{parentName:"strong"},"combineReducers"),"\uc5d0 \ub300\ud55c \ud575\uc2ec\uc801\uc778 \uc0ac\uc6a9\uc608\uc81c\ub97c \ubcf4\uace0\ub098\uba74"),' \uc77c\ud68c\uc6a9\uc774\ub4e0 \ub110\ub9ac \uc7ac\uc0ac\uc6a9\uac00\ub2a5\ud55c \ud568\uc218\ub358\uac04\uc5d0 \ub354 \ub9ce\uc740 "\ucee4\uc2a4\ud140"\ub9ac\ub4c0\uc11c\ub85c\uc9c1\uc744 \uc0ac\uc6a9\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uc5ec\uae30\uc120 \uc774\ub97c \ub2e4\ub8e8\ub294 \ub450\uac00\uc9c0 \uc804\ud615\uc801 \ucf00\uc774\uc2a4\uc774\uc9c0\ub9cc \uc790\uc720\ub86d\uac8c \uc811\uadfc\ud558\uc2dc\uae38 \uad8c\ud569\ub2c8\ub2e4.'),Object(a.b)("h2",{id:"\uc2ac\ub77c\uc774\uc2a4-\ub9ac\ub4c0\uc11c\ub97c-immutablejs-\uac1d\uccb4\uc640-\uc0ac\uc6a9\ud558\uae30"},"\uc2ac\ub77c\uc774\uc2a4 \ub9ac\ub4c0\uc11c\ub97c Immutable.js \uac1d\uccb4\uc640 \uc0ac\uc6a9\ud558\uae30"),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"combineReducers"),"\ub294 \ud604\uc7ac \uc77c\ubc18\uc801\uc778 \uc790\ubc14\uc2a4\ud06c\ub9bd\ud2b8 \uac1d\uccb4\ub85c\ub9cc \ub3d9\uc791\ud558\uae30 \ub54c\ubb38\uc5d0 \ucd5c\uc0c1\uc704 \uc0c1\ud0dc\uc5d0\uc11c Immutable.js Map \uac1d\uccb4\ub97c \uc0ac\uc6a9\ud558\ub294 \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc5d0\uc11c\ub294 Map\uad00\ub9ac\ub97c \uc704\ud574 ",Object(a.b)("inlineCode",{parentName:"p"},"combineReducers"),"\ub97c \uc0ac\uc6a9\ud560 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4. \ub9ce\uc740 \uac1c\ubc1c\uc790\ub4e4\uc774 Immutable.js\ub97c \uc0ac\uc6a9\ud558\uae30 \ub54c\ubb38\uc5d0 \ub3d9\uc77c\ud55c \uae30\ub2a5\uc744 \ud558\ub294 ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/gajus/redux-immutable"}),"redux-immutable"),"\uacfc \uac19\uc740 \ub9ce\uc740 \uc720\ud2f8\ub9ac\ud2f0\uac00 \uc788\uc2b5\ub2c8\ub2e4. \uc774 \ud328\ud0a4\uc9c0\ub294 \uc77c\ubc18\uc801\uc778 \uc790\ubc14\uc2a4\ud06c\ub9bd\ud2b8 \uac1d\uccb4 \ub300\uc2e0\uc5d0 Immutable Map\uc744 \uc0ac\uc6a9\ud560 \uc218 \uc788\uac8c\ud558\ub294 ",Object(a.b)("inlineCode",{parentName:"p"},"combineReducers"),"\ub97c \uc790\uccb4\uc801\uc73c\ub85c \uad6c\ud604\ud588\uc2b5\ub2c8\ub2e4."),Object(a.b)("h2",{id:"\uc2ac\ub77c\uc774\uc2a4-\ub9ac\ub4c0\uc11c\uac04\uc758-\ub370\uc774\ud130-\uacf5\uc720"},"\uc2ac\ub77c\uc774\uc2a4 \ub9ac\ub4c0\uc11c\uac04\uc758 \ub370\uc774\ud130 \uacf5\uc720"),Object(a.b)("p",null,"\ub9c8\ucc2c\uac00\uc9c0\ub85c, \ud2b9\uc815 \uc561\uc158\uc5d0\uc11c ",Object(a.b)("inlineCode",{parentName:"p"},"sliceReducerA"),"\uac00 ",Object(a.b)("inlineCode",{parentName:"p"},"sliceReducerB"),"\uc758 \ub370\uc774\ud130\uc758 \ubd80\ubd84\uc801\uc778 \uc0c1\ud0dc\uac00 \ud544\uc694\ud558\ub2e4\ub358\uc9c0, ",Object(a.b)("inlineCode",{parentName:"p"},"sliceReducerB"),"\uac00 \ub9e4\uac1c\ubcc0\uc218\ub85c \uc804\uccb4 \uc0c1\ud0dc\uac00 \ud544\uc694\ud55c \uacbd\uc6b0 ",Object(a.b)("inlineCode",{parentName:"p"},"combineReducers"),"\uac00 \ud574\ub2f9 \uc791\uc5c5\uc744 \ucc98\ub9ac\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4. \uc774\ub294 \ub2e4\uc74c\uacfc \uac19\uc774 \ud544\uc694\ud55c \ub370\uc774\ud130\ub97c \uc54c\uace0\uc788\ub294 \ud2b9\uc815 \ud568\uc218\ub97c \ucd94\uac00\uc801\uc778 \ub9e4\uac1c\ubcc0\uc218\ub85c \ub118\uae40\uc73c\ub85c\uc11c \ud574\uacb0\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"function combinedReducer(state, action) {\n  switch (action.type) {\n    case 'A_TYPICAL_ACTION': {\n      return {\n        a: sliceReducerA(state.a, action),\n        b: sliceReducerB(state.b, action)\n      }\n    }\n    case 'SOME_SPECIAL_ACTION': {\n      return {\n        // \ucd94\uac00\uc801\uc778 \ub9e4\uac1c\ubcc0\uc218\ub85c state.b\ub97c \ub118\uae41\ub2c8\ub2e4\n        a: sliceReducerA(state.a, action, state.b),\n        b: sliceReducerB(state.b, action)\n      }\n    }\n    case 'ANOTHER_SPECIAL_ACTION': {\n      return {\n        a: sliceReducerA(state.a, action),\n        // \uc804\uccb4 \uc0c1\ud0dc\ub97c \ucd94\uac00\uc801\uc778 \ub9e4\uac1c\ubcc0\uc218\ub85c \ub118\uae41\ub2c8\ub2e4.\n        b: sliceReducerB(state.b, action, state)\n      }\n    }\n    default:\n      return state\n  }\n}\n")),Object(a.b)("p",null,'"\uc2ac\ub77c\uc774\uc2a4 \uacf5\uc720 \uc5c5\ub370\uc774\ud2b8" \ubb38\uc81c\uc5d0 \ub300\ud55c \ub610 \ub2e4\ub978 \ub300\uc548\uc740 \ub354 \ub9ce\uc740 \ub370\uc774\ud130\ub97c \uc561\uc158\uc5d0 \ub123\ub294\uac83\uc785\ub2c8\ub2e4. \uc774\ub294 \ub2e4\uc74c \uc608\uc5d0\uc11c \ucc98\ub7fc thunk\ud568\uc218 \ud639\uc740 \uc720\uc0ac\ud55c \uac83\uc744 \uc0ac\uc6a9\ud574\uc11c \uc27d\uac8c \ud574\uacb0\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.'),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"function someSpecialActionCreator() {\n  return (dispatch, getState) => {\n    const state = getState()\n    const dataFromB = selectImportantDataFromB(state)\n\n    dispatch({\n      type: 'SOME_SPECIAL_ACTION',\n      payload: {\n        dataFromB\n      }\n    })\n  }\n}\n")),Object(a.b)("p",null,"B\uc758 \ubd80\ubd84\uc73c\ub85c \ubd80\ud130 \uc628 \ub370\uc774\ud130\uac00 \uc774\ubbf8 \uc561\uc158\uc18d\uc5d0 \uc788\uae30 \ub54c\ubb38\uc5d0 \ubd80\ubaa8 \ub9ac\ub4c0\uc11c\ub294 ",Object(a.b)("inlineCode",{parentName:"p"},"sliceReducerA"),"\ub97c \uc0ac\uc6a9\ud558\uae30 \uc704\ud574 \ubcc4 \ub2e4\ub978 \uc77c\uc744 \ud558\uc9c0 \uc54a\uc544\ub3c4 \ub429\ub2c8\ub2e4."),Object(a.b)("p",null,'\uc138\ubc88 \uc9f8 \ubc29\ubc95\uc740 \uac01 \uc2ac\ub77c\uc774\uc2a4 \ub9ac\ub4c0\uc11c\uac00 \ub3c5\ub9bd\uc801\uc73c\ub85c \uc5c5\ub370\uc774\ud2b8 \ub420 \uc218 \uc788\ub294 "\uac04\ub2e8\ud55c" \ucf00\uc774\uc2a4\ub97c \ucc98\ub9ac\ud558\uae30 \uc704\ud574 ',Object(a.b)("inlineCode",{parentName:"p"},"combineReducers"),'\ub85c\ubd80\ud130 \uc0dd\uc131\ub41c \ub9ac\ub4c0\uc11c\ub97c \uc0ac\uc6a9\ud558\ub294 \uac83\uc774\uc9c0\ub9cc \uc774\ub610\ud55c \uc2ac\ub77c\uc774\uc2a4\uac04\uc758 \ub370\uc774\ud130 \uacf5\uc720\uac00 \ud544\uc694\ud55c "\ud2b9\ubcc4\ud55c" \ucf00\uc774\uc2a4\ub97c \ucc98\ub9ac\ud560 \uc218 \uc788\ub294 \ub9ac\ub4c0\uc11c\uac00 \ud544\uc694\ud569\ub2c8\ub2e4. \uadf8\ub7f0\ub2e4\uc74c \ub798\ud551 \ud568\uc218\ub294 \ub450 \ub9ac\ub4c0\uc11c\ub97c \ucc28\ub840\ub85c \ud638\ucd9c\ud574\uc11c \ucd5c\uc885\uacb0\uacfc\ub97c \uc0dd\uc131 \ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4:'),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"const combinedReducer = combineReducers({\n  a: sliceReducerA,\n  b: sliceReducerB\n})\n\nfunction crossSliceReducer(state, action) {\n  switch (action.type) {\n    case 'SOME_SPECIAL_ACTION': {\n      return {\n        // \ucd94\uac00\uc801\uc778 \ub9e4\uac1c\ubcc0\uc218\ub85c state.b\ub97c \ub118\uae41\ub2c8\ub2e4\n        a: handleSpecialCaseForA(state.a, action, state.b),\n        b: sliceReducerB(state.b, action)\n      }\n    }\n    default:\n      return state\n  }\n}\n\nfunction rootReducer(state, action) {\n  const intermediateState = combinedReducer(state, action)\n  const finalState = crossSliceReducer(intermediateState, action)\n  return finalState\n}\n")),Object(a.b)("p",null,"\uacb0\ub860\uc801\uc73c\ub85c \uc774\ub7f0 \ud504\ub85c\uc138\uc2a4\ub97c \uc27d\uac8c \ub9cc\ub4e4 \uc218 \uc788\ub294 ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/acdlite/reduce-reducers"}),"reduce-reducers"),"\ub77c\ub294 \uc720\ud2f8\uc774 \uc788\uc2b5\ub2c8\ub2e4. \uc774\ub294 \uc5ec\ub7ec\uac1c\uc758 \ub9ac\ub4c0\uc11c\ub97c ",Object(a.b)("inlineCode",{parentName:"p"},"reduce()"),"\uc5d0 \uc804\ub2ec\ud558\uace0 \uc911\uac04\uc0c1\ud0dc\ub97c \ub2e4\uc74c \ub9ac\ub4c0\uc11c\uc5d0 \uc804\ub2ec\ud569\ub2c8\ub2e4:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"// \uc704\uc758 \uc218\ub3d9\uc73c\ub85c \ub9cc\ub4e0 rootReducer\uc640 \uac19\uc2b5\ub2c8\ub2e4.\nconst rootReducer = reduceReducers(combinedReducers, crossSliceReducer)\n")),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"reduceReducers"),"\ub97c \uc0ac\uc6a9\ud55c\ub2e4\uba74 \uc804\ub2ec\ub41c \ub9ac\uc2a4\ud2b8\uc5d0\uc11c \ucc98\uc74c \ub9ac\ub4c0\uc11c\uac00 \ucd08\uae30 \uc0c1\ud0dc\ub97c \uc815\uc758\ud574\uc57c\ud568\uc744 \uc8fc\uc758\ud558\uc138\uc694. \uc774\ud6c4\uc758 \ub9ac\ub4c0\uc11c\ub4e4\uc740 \uc774\ubbf8 \uc0c1\ud0dc\uac00 \uc874\uc7ac\ud55c\ub2e4\uace0 \uac00\uc815\ud558\uace0 \uae30\ubcf8\uac12\uc744 \uc81c\uacf5\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4."),Object(a.b)("h2",{id:"\ucd94\uac00\uc0ac\ud56d"},"\ucd94\uac00\uc0ac\ud56d"),Object(a.b)("p",null,"\ub9ac\ub355\uc2a4 \ub9ac\ub4c0\uc11c\ub294 ",Object(a.b)("em",{parentName:"p"},"\ub2e8\uc21c\ud55c")," \ud568\uc218 \uc784\uc744 \uc774\ud574\ud558\ub294 \uac83\uc774 \uc911\uc694\ud568\uc744 \ub2e4\uc2dc\ud55c\ubc88 \uac15\uc870\ud569\ub2c8\ub2e4. ",Object(a.b)("inlineCode",{parentName:"p"},"combineReducer"),"\uac00 \uc720\uc6a9\ud558\uc9c0\ub9cc \uc774\ub294 \uadf8\uc800 \ud558\ub098\uc758 \ub3c4\uad6c\uc77c \ubfd0\uc785\ub2c8\ub2e4. \ud568\uc218\ub294 swich\ubb38\uc774 \uc544\ub2c8\ub354\ub77c\ub3c4 \ub2e4\ub978 \uc870\uac74\uc808\uc744 \ud3ec\ud568 \ud560 \uc218 \uc788\uace0, \ub2e4\ub978 \ud568\uc218\ub4e4\uc744 \ub798\ud551\ud560 \uc218 \uc788\uc73c\uba70, \ub2e4\ub978 \ud568\uc218\ub97c \ud638\ucd9c\ud560 \uc218\ub3c4 \uc788\uc2b5\ub2c8\ub2e4. \ub2f9\uc2e0\uc758 \uc2ac\ub77c\uc774\uc2a4 \ub9ac\ub4c0\uc11c\ub97c \uc0c1\ud0dc\ub97c \ub9ac\uc14b\ud558\ub294\ub370 \uc0ac\uc6a9\ud560 \uc218\ub3c4 \uc788\uc2b5\ub2c8\ub2e4. \ub610\ud55c \ud2b9\uc815 \uc561\uc158\uc5d0\ub300\ud574\uc11c\ub9cc \uc804\ubc18\uc801\uc73c\ub85c \uc0ac\uc6a9\ud560 \uc218\ub3c4 \uc788\uc2b5\ub2c8\ub2e4. \ub2e4\uc74c\uc744 \ubcf4\uc138\uc694:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"const undoableFilteredSliceA = compose(\n  undoReducer,\n  filterReducer('ACTION_1', 'ACTION_2'),\n  sliceReducerA\n)\nconst rootReducer = combineReducers({\n  a: undoableFilteredSliceA,\n  b: normalSliceReducerB\n})\n")),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"combineReducers"),"\ub294 ",Object(a.b)("inlineCode",{parentName:"p"},"a"),"\uc5d0 \ub300\ud574 \ud2b9\ubcc4\ud788 \uad00\ub9ac\ud560 \ucc45\uc784\uc774 \uc5c6\uace0 \uc54c\uc9c0\ub3c4 \ubabb \ud55c\ub2e4\ub294 \uac83\uc5d0 \uc8fc\uc758\ud558\uc138\uc694. \uc6b0\ub9ac\ub294 \uc2e4\ud589\ucde8\uc18c\ud558\ub294 \ubc95\uc744 \uc54c\uae30 \uc704\ud574 ",Object(a.b)("inlineCode",{parentName:"p"},"combineReducers"),"\ub97c \uc218\uc815\ud560 \ud544\uc694\uac00 \uc5c6\uc2b5\ub2c8\ub2e4 - \uc6b0\ub9ac\ub294 \uadf8\uc800 \uc6b0\ub9ac\uac00 \ud544\uc694\ud55c \uc870\uac01\ub4e4\ub85c \uc0c8\ub85c\uc6b4 \ud568\uc218\ub85c \uad6c\ucd95\ud558\uae30\ub9cc \ud558\uba74 \ub429\ub2c8\ub2e4."),Object(a.b)("p",null,"\ub610\ud55c ",Object(a.b)("inlineCode",{parentName:"p"},"combineReducers"),"\ub294 \ub9ac\ub355\uc2a4\uc5d0 \ud3ec\ud568\ub41c \ud558\ub098\uc758 \ub9ac\ub4c0\uc11c \uc720\ud2f8\ub9ac\ud2f0\uc9c0\ub9cc \uc7ac\uc0ac\uc6a9\uc744 \uc704\ud574 \ub2e4\uc591\ud55c third-party \ub9ac\ub4c0\uc11c \uc720\ud2f8\ub9ac\ud2f0\ub4e4\uc774 \ub098\uc654\uc2b5\ub2c8\ub2e4. ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/markerikson/redux-ecosystem-links"})," Redux Addons Catalog"),"\uc5d0\ub294 \ub9ce\uc740 third-party \ub77c\uc774\ube0c\ub7ec\ub9ac\ub4e4\uc774 \ub098\uc640\uc788\uc2b5\ub2c8\ub2e4. \ub098\uc640\uc788\ub294 \uc720\ud2f8\ub9ac\ud2f0\uc911 \ub2f9\uc2e0\uc758 \ubb38\uc81c\ub97c \ud574\uacb0\ud560 \uc218 \uc788\ub294 \uc720\ud2f8\ub9ac\ud2f0\uac00 \uc5c6\ub2e4\uba74, \ud544\uc694\ud55c \ud568\uc218\ub97c \uc9c1\uc811 \ub9cc\ub4e4 \uc218 \uc788\uc2b5\ub2c8\ub2e4."))}s.isMDXComponent=!0}}]);