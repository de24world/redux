(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{112:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return u})),r.d(t,"rightToc",(function(){return b})),r.d(t,"default",(function(){return l}));var n=r(1),c=r(6),a=(r(0),r(184)),i={id:"structuring-reducers",title:"\ub9ac\ub4c0\uc11c \uad6c\uc870 \uc7a1\uae30",description:"\ub9ac\ub4c0\uc11c \uad6c\uc870 \uc7a1\uae30 > Intro: overview and contents",hide_title:!0},u={id:"recipes/structuring-reducers/structuring-reducers",title:"\ub9ac\ub4c0\uc11c \uad6c\uc870 \uc7a1\uae30",description:"\ub9ac\ub4c0\uc11c \uad6c\uc870 \uc7a1\uae30 > Intro: overview and contents",source:"@site/../docs_kr/recipes/structuring-reducers/StructuringReducers.md",permalink:"/recipes/structuring-reducers/structuring-reducers",sidebar:"docs",previous:{title:"Code Splitting",permalink:"/recipes/code-splitting"},next:{title:"\uc0ac\uc804\uc5d0 \uc694\uad6c\ub418\ub294 \uac1c\ub150\ub4e4",permalink:"/recipes/structuring-reducers/prerequisite-concepts"}},b=[{value:"\ub9ac\ub4c0\uc11c \uc791\uc131\uc744 \uc704\ud574 \uc54c\uc544\uc57c \ud560 \uac1c\ub150",id:"\ub9ac\ub4c0\uc11c-\uc791\uc131\uc744-\uc704\ud574-\uc54c\uc544\uc57c-\ud560-\uac1c\ub150",children:[]},{value:"\ub9ac\ub4c0\uc11c \uac1c\ub150\uacfc \ud14c\ud06c\ub2c9",id:"\ub9ac\ub4c0\uc11c-\uac1c\ub150\uacfc-\ud14c\ud06c\ub2c9",children:[]}],o={rightToc:b};function l(e){var t=e.components,r=Object(c.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},o,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h1",{id:"\ub9ac\ub4c0\uc11c-\uad6c\uc870-\uc7a1\uae30"},"\ub9ac\ub4c0\uc11c \uad6c\uc870 \uc7a1\uae30"),Object(a.b)("p",null,'\ud575\uc2ec\uc801\uc73c\ub85c \ub9ac\ub355\uc2a4\ub294 \ub9e4\uc6b0 \uac04\ub2e8\ud55c \ub514\uc790\uc778 \ud328\ud134\uc785\ub2c8\ub2e4. \ub2f9\uc2e0\uc758 \ubaa8\ub4e0 "\uc791\uc131" \ub85c\uc9c1\uc740 \ud558\ub098\uc758 \ud568\uc218\ub85c \uadc0\uacb0\ub429\ub2c8\ub2e4. \uadf8\ub9ac\uace0 \uadf8 \ub85c\uc9c1\uc744 \uc2e4\ud589\ud560 \uc218 \uc788\ub294 \uc720\uc77c\ud55c \ubc29\ubc95\uc740 \ub9ac\ub355\uc2a4\uc5d0\uac8c \uc5b4\ub5a4 \uc77c\uc774 \uc77c\uc5b4\ub09c\ub2e4\ub294 \uac83\uc744 \ud45c\ud604\ud558\ub294 \uc77c\ubc18 \uac1d\uccb4\ub97c \ub118\uaca8\uc8fc\ub294 \uac83\uc785\ub2c8\ub2e4. \ub9ac\ub355\uc2a4 \uc2a4\ud1a0\uc5b4\ub294 \uc791\uc131\ub85c\uc9c1\uc744 \ud638\ucd9c, \ud604\uc7ac\uc758 \uc0c1\ud0dc\ud2b8\ub9ac\uc640 \uc124\uba85\uac1d\uccb4\ub97c \uc804\ub2ec\ud558\uace0 \uc791\uc131 \ub85c\uc9c1 \ud568\uc218\ub294 \uc0c8\ub85c\uc6b4 \uc0c1\ud0dc \ud2b8\ub9ac\ub97c \ubc18\ud658\ud569\ub2c8\ub2e4. \uadf8\ub9ac\uace0 \ub9ac\ub355\uc2a4 \uc2a4\ud1a0\uc5b4\ub294 \uad6c\ub3c5\uc790(subscribers)\uc5d0\uac8c \uc0c1\ud0dc\uac00 \ubc14\ub00c\uc5c8\uc74c\uc744 \uc54c\ub9bd\ub2c8\ub2e4.'),Object(a.b)("p",null,"\ub9ac\ub355\uc2a4\ub294 \uc791\uc131 \ub85c\uc9c1 \ud568\uc218\uc758 \ub3d9\uc791\uc5d0 \ub300\ud574 \uba87 \uac00\uc9c0 \uc81c\uc57d\uc744 \ub461\ub2c8\ub2e4. ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"../basics/Reducers.md"}),"\ub9ac\ub4c0\uc11c"),"\uc5d0\uc11c \uc124\uba85\ud55c \uac83\ucc98\ub7fc \ub9ac\ub4c0\uc11c \ud568\uc218\ub294 ",Object(a.b)("inlineCode",{parentName:"p"},"(previousState, action) => newState"),"\uc758 \ud615\ud0dc\ub97c \uac00\uc9c0\uace0, \uc21c\uc218\ud568\uc218\uc774\uba70 \uc608\uce21 \uac00\ub2a5\ud574\uc57c \ud569\ub2c8\ub2e4."),Object(a.b)("p",null,"\ub354\uc6b1\uc774 \uae30\ubcf8\uc801\uc778 \ud615\ud0dc\ub9cc \ub9de\ucd98\ub2e4\uba74 \ub9ac\ub355\uc2a4\ub294 \ub9ac\ub4c0\uc11c \ud568\uc218\uac00 \uc5b4\ub5a4 \ub85c\uc9c1\uc744 \uad6c\uc131\ud558\ub294\uc9c0\ub294 \uc2e0\uacbd\uc4f0\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4. \uc774\ub294 \uc790\uc720\uc758 \uadfc\uc6d0\uc774\uc790 \ud63c\ub780\uc758 \uadfc\uc6d0\uc774 \ub429\ub2c8\ub2e4. \ud558\uc9c0\ub9cc \ub9ac\ub4c0\uc11c\ub97c \uc791\uc131\ud558\ub294\ub370 \ub110\ub9ac \uc0ac\uc6a9\ub418\ub294 \ud328\ud134 \ubfd0\ub9cc\uc544\ub2c8\ub77c \uad00\ub828\ub41c \ub9ce\uc740 \uc8fc\uc81c\uc640 \uac1c\ub150\ub4e4\uc744 \uc54c\uace0 \uc788\uc5b4\uc57c \ud569\ub2c8\ub2e4. \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc758 \ud06c\uae30\uac00 \ucee4\uc9c0\uba74\uc11c \uc774 \ud328\ud134\uc740 \ub9ac\ub4c0\uc11c \ucf54\ub4dc\uc758 \ubcf5\uc7a1\uc131\uacfc \uc2e4\uc81c \ub370\uc774\ud130, UI \uc131\ub2a5 \ucd5c\uc801\ud654\uc5d0 \uacb0\uc815\uc801\uc778 \uc5ed\ud560\uc744 \ud569\ub2c8\ub2e4."),Object(a.b)("h3",{id:"\ub9ac\ub4c0\uc11c-\uc791\uc131\uc744-\uc704\ud574-\uc54c\uc544\uc57c-\ud560-\uac1c\ub150"},"\ub9ac\ub4c0\uc11c \uc791\uc131\uc744 \uc704\ud574 \uc54c\uc544\uc57c \ud560 \uac1c\ub150"),Object(a.b)("p",null,"\uac1c\ub150\uc911 \uc77c\ubd80\ub294 \uc774\uacf3 \uc5b4\ub518\uac00\uc5d0\uc11c \uc774\ubbf8 \uc124\uba85\ud588\uc2b5\ub2c8\ub2e4. \uc5b4\ub5a4 \uac83\ub4e4\uc740 \ub9ac\ub355\uc2a4\uc678\uc5d0\ub3c4 \uc77c\ubc18\uc801\uc73c\ub85c \uc0ac\uc6a9\ub418\uace0 \uc751\uc6a9\ub420 \uc218 \uc788\uc73c\uba70 \uc774\ub97c \uc790\uc138\ud788 \ub2e4\ub8e8\uace0 \uc788\ub294 \uc218\ub9ce\uc740 \uae00\ub4e4\uc774 \uc874\uc7ac\ud569\ub2c8\ub2e4."),Object(a.b)("p",null,"\ub9ac\ub355\uc2a4\uc758 \ub354 \uae4a\uc740 \ubd80\ubd84\uacfc \ud2b9\uc720\uc758 \ud14c\ud06c\ub2c9\uc744 \ubcf4\uae30\uc804\uc5d0 \uc774\ub7f0 \uac1c\ub150\ub4e4\uc744 \ucca0\uc800\ud788 \uc775\ud788\ub294 \uac83\uc740 \ud544\uc218\uc801\uc785\ub2c8\ub2e4. \ub2e4\uc74c\uc740 \uc77d\uae30\ubcf4\uae30\ub97c \ucd94\ucc9c\ud558\ub294 \ubaa9\ub85d\uc785\ub2c8\ub2e4:"),Object(a.b)("h4",{id:"\uc0ac\uc804\uc5d0-\uc694\uad6c\ub418\ub294-\uac1c\ub150\ub4e4"},Object(a.b)("a",Object(n.a)({parentName:"h4"},{href:"./reducers/PrerequisiteConcepts.md"}),"\uc0ac\uc804\uc5d0 \uc694\uad6c\ub418\ub294 \uac1c\ub150\ub4e4")),Object(a.b)("p",null,"\uc774\uac83\ub4e4\uc774 \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc758 \uc544\ud0a4\ud14d\ucc98 \uacb0\uc815\uc5d0 \uc9c1\uc811 \uc0ac\uc6a9\ub420 \uc218\ub3c4 \uc788\uace0 \uadf8\ub807\uc9c0 \uc54a\uc744 \uc218\ub3c4 \uc788\ub2e4\ub294 \uac83\uc5d0 \uc8fc\uc758\ud574\uc57c \ud569\ub2c8\ub2e4. \uc608\ub97c \ub4e4\uc5b4 \ub370\uc774\ud130\ub97c \uc800\uc7a5\ud558\ub294\ub370 Immutable.js Maps\ub97c \uc0ac\uc6a9\ud558\ub294 \uac83\uc740 \uc77c\ubc18\uc801\uc778 \uc790\ubc14\uc2a4\ud06c\ub9bd\ud2b8 \uac1d\uccb4\ub97c \uc0ac\uc6a9\ud558\ub294 \uac83\uacfc\ub294 \ucc28\uc774\uac00 \uc788\uc744\uac81\ub2c8\ub2e4. \uc5ec\uae30\uc11c \uc124\uba85\ud558\ub294 \uc774\ub860\ub4e4\uc740 \uc77c\ubc18\uc801\uc778 \uc790\ubc14\uc2a4\ud06c\ub9bd\ud2b8 \uac1d\uccb4\ub97c \uc0ac\uc6a9\ud55c\ub2e4\uace0 \uac00\uc815\ud558\uc9c0\ub9cc, \ub2e4\ub978 \uac83\ub4e4\uc744 \uc0ac\uc6a9\ud558\ub354\ub77c\ub3c4 \uc801\uc6a9\ub429\ub2c8\ub2e4."),Object(a.b)("h3",{id:"\ub9ac\ub4c0\uc11c-\uac1c\ub150\uacfc-\ud14c\ud06c\ub2c9"},"\ub9ac\ub4c0\uc11c \uac1c\ub150\uacfc \ud14c\ud06c\ub2c9"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(n.a)({parentName:"li"},{href:"./reducers/BasicReducerStructure.md"}),"\uae30\ubcf8 \ub9ac\ub4c0\uc11c \uad6c\uc870")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(n.a)({parentName:"li"},{href:"./reducers/SplittingReducerLogic.md"}),"\ub9ac\ub4c0\uc11c \ub85c\uc9c1 \ubd84\ub9ac\ud558\uae30")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(n.a)({parentName:"li"},{href:"./reducers/RefactoringReducersExample.md"}),"\ub9ac\ub4c0\uc11c \ub85c\uc9c1 \ub9ac\ud329\ud1a0\ub9c1\ud558\uae30")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(n.a)({parentName:"li"},{href:"./reducers/UsingCombineReducers.md"}),Object(a.b)("inlineCode",{parentName:"a"},"combineReducers"),"\uc0ac\uc6a9\ud558\uae30")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(n.a)({parentName:"li"},{href:"./reducers/BeyondCombineReducers.md"}),Object(a.b)("inlineCode",{parentName:"a"},"combineReducers"),"\ub354 \uc54c\uc544\ubcf4\uae30")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(n.a)({parentName:"li"},{href:"./reducers/NormalizingStateShape.md"}),"\uc0c1\ud0dc \uc815\uaddc\ud654\ud558\uae30")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(n.a)({parentName:"li"},{href:"./reducers/UpdatingNormalizedData.md"}),"\uc815\uaddc\ud654\ub41c \ub370\uc774\ud130 \uc5c5\ub370\uc774\ud2b8\ud558\uae30")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(n.a)({parentName:"li"},{href:"./reducers/ReusingReducerLogic.md"}),"\ub9ac\ub4c0\uc11c \ub85c\uc9c1 \uc7ac\uc0ac\uc6a9\ud558\uae30")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(n.a)({parentName:"li"},{href:"./reducers/ImmutableUpdatePatterns.md"}),"\ubdf8\ubcc0 \uc5c5\ub370\uc774\ud2b8 \ud328\ud134")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(n.a)({parentName:"li"},{href:"./reducers/InitializingState.md"}),"\uc0c1\ud0dc \ucd08\uae30\ud654\ud558\uae30"))))}l.isMDXComponent=!0},184:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return m}));var n=r(0),c=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function b(e,t){if(null==e)return{};var r,n,c=function(e,t){if(null==e)return{};var r,n,c={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(c[r]=e[r]);return c}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(c[r]=e[r])}return c}var o=c.a.createContext({}),l=function(e){var t=c.a.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):u({},t,{},e)),r},p=function(e){var t=l(e.components);return c.a.createElement(o.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return c.a.createElement(c.a.Fragment,{},t)}},d=Object(n.forwardRef)((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,i=e.parentName,o=b(e,["components","mdxType","originalType","parentName"]),p=l(r),d=n,m=p["".concat(i,".").concat(d)]||p[d]||s[d]||a;return r?c.a.createElement(m,u({ref:t},o,{components:r})):c.a.createElement(m,u({ref:t},o))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=d;var u={};for(var b in t)hasOwnProperty.call(t,b)&&(u[b]=t[b]);u.originalType=e,u.mdxType="string"==typeof e?e:n,i[1]=u;for(var o=2;o<a;o++)i[o]=r[o];return c.a.createElement.apply(null,i)}return c.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);