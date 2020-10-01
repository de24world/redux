(window.webpackJsonp=window.webpackJsonp||[]).push([[78],{139:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return p})),n.d(t,"default",(function(){return b}));var r=n(2),i=n(6),a=(n(0),n(149)),o={id:"motivation",title:"\ub3d9\uae30",description:"\uc18c\uac1c > \ub3d9\uae30: Redux\ub294 \uc5b4\ub5a4 \ubb38\uc81c\ub97c \ud574\uacb0\ud558\ub824 \ud558\ub098\uc694?",hide_title:!0},c={unversionedId:"understanding/thinking-in-redux/motivation",id:"understanding/thinking-in-redux/motivation",isDocsHomePage:!1,title:"\ub3d9\uae30",description:"\uc18c\uac1c > \ub3d9\uae30: Redux\ub294 \uc5b4\ub5a4 \ubb38\uc81c\ub97c \ud574\uacb0\ud558\ub824 \ud558\ub098\uc694?",source:"@site/../docs_kr/understanding/thinking-in-redux/Motivation.md",slug:"/understanding/thinking-in-redux/motivation",permalink:"/understanding/thinking-in-redux/motivation",version:"current",sidebar:"docs",previous:{title:"\uc0c1\ud0dc \ucd08\uae30\ud654\ud558\uae30",permalink:"/recipes/structuring-reducers/initializing-state"},next:{title:"3\uac00\uc9c0 \uc6d0\uce59",permalink:"/understanding/thinking-in-redux/three-principles"}},p=[],u={rightToc:p};function b(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h1",{id:"\ub3d9\uae30"},"\ub3d9\uae30"),Object(a.b)("p",null,"\uc790\ubc14\uc2a4\ud06c\ub9bd\ud2b8 \uc2f1\uae00 \ud398\uc774\uc9c0 \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc774 \uac16\ucd94\uc5b4\ud560 \uc694\uac74\uc774 \uc810\uc810 \ub354 \ubcf5\uc7a1\ud574\uc9c0\uace0\uc788\ub294 \ub9cc\ud07c, \uc5b4\ub290 \ub54c\ubcf4\ub2e4\ub3c4 ",Object(a.b)("strong",{parentName:"p"},"\ub9ce\uc740 \uc0c1\ud0dc\ub97c")," \uc790\ubc14\uc2a4\ud06c\ub9bd\ud2b8 \ucf54\ub4dc\ub85c ",Object(a.b)("strong",{parentName:"p"},"\uad00\ub9ac\ud560 \ud544\uc694\uac00 \uc0dd\uaca8\ub0ac\uc2b5\ub2c8\ub2e4"),". \uc5ec\uae30\uc5d0\uc11c \uc0c1\ud0dc\uc5d0\ub294 \uc11c\ubc84 \uc751\ub2f5, \uce90\uc2dc \ub370\uc774\ud130, \uc9c0\uc5ed\uc801\uc73c\ub85c \uc0dd\uc131\ud574\uc11c \uc0ac\uc6a9\ud558\uace0 \uc788\uc9c0\ub9cc \uc544\uc9c1 \uc11c\ubc84\uc5d0 \uc800\uc7a5\ub418\uc9c0 \uc54a\uc740 \ub370\uc774\ud130\ub97c \uc758\ubbf8\ud569\ub2c8\ub2e4. \uc774\uc678\uc5d0\ub3c4 \ud65c\uc131\ud654\ub41c \ub77c\uc6b0\ud2b8, \uc120\ud0dd\ub41c \ud0ed, \ub85c\ub529\uc744 \ubcf4\uc5ec\uc904\uc9c0 \uc5ec\ubd80, \ud398\uc774\uc9c0\ub124\uc774\uc158 \ucee8\ud2b8\ub864 \ub4f1 \ub2e4\uc591\ud55c UI \uc0c1\ud0dc\ub3c4 \ud3ec\ud568\ud569\ub2c8\ub2e4."),Object(a.b)("p",null,"\ud56d\uc0c1 \ubcc0\ud558\ub294 \uc0c1\ud0dc\ub97c \uad00\ub9ac\ud558\uae30\ub780 \uc5b4\ub835\uc2b5\ub2c8\ub2e4. \ubaa8\ub378\uc774 \ub2e4\ub978 \ubaa8\ub378\uc744 \uc5c5\ub370\uc774\ud2b8\ud558\uace0, \uadf8\ub9ac\uace0 \ubdf0\uac00 \ubaa8\ub378\uc744 \uc5c5\ub370\uc774\ud2b8 \ud560 \uc218 \uc788\uace0, \uc774 \ubdf0\uac00 \ub2e4\uc2dc \ub2e4\ub978 \ubaa8\ub378\uc744 \uc5c5\ub370\uc774\ud2b8\ud558\uace0, \uc774\uc5d0 \ub530\ub77c \ub610 \ub2e4\ub978 \ubdf0\uac00 \uc5c5\ub370\uc774\ud2b8 \ub429\ub2c8\ub2e4. \uc5b4\ub290 \uc2dc\uc810\uc5d0\uc11c\ub294 \ud504\ub85c\uadf8\ub798\uba38\uc870\ucc28 \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc5d0\uc11c \ubb34\uc2a8 \uc77c\uc774 \uc77c\uc5b4\ub098\ub294\uc9c0 \uc54c \uc218 \uc5c6\uac8c \ub429\ub2c8\ub2e4. ",Object(a.b)("strong",{parentName:"p"},"\uc0c1\ud0dc\ub97c \uc5b8\uc81c, \uc65c, \uc5b4\ub5bb\uac8c \uc5c5\ub370\uc774\ud2b8\ud560\uc9c0 \uc81c\uc5b4\ud560 \uc218 \uc5c6\ub294 \uc9c0\uacbd\uc5d0 \uc774\ub974\uace0 \ub9d9\ub2c8\ub2e4.")," \uc2dc\uc2a4\ud15c\uc774 \ubd88\ud22c\uba85\ud558\uace0 \ube44\uacb0\uc815\uc801\uc77c \ub54c \ubc84\uadf8\ub97c \uc7ac\ud604\ud558\uac70\ub098 \uc0c8\ub85c\uc6b4 \uae30\ub2a5\ub4e4\uc744 \ucd94\uac00\ud558\uae30\ub780 \ub9e4\uc6b0 \uc5b4\ub835\uc2b5\ub2c8\ub2e4."),Object(a.b)("p",null,"\ub354\uc6b1 \uc548 \uc88b\uc740 \uc18c\uc2dd\uc740 ",Object(a.b)("strong",{parentName:"p"},"\ud504\ub860\ud2b8\uc5d4\ud2b8 \uc81c\ud488 \uac1c\ubc1c\uc5d0 \uc788\uc5b4\uc11c \uc0c8\ub85c \uac16\ucdb0\uc57c\ud560 \uc694\uac74\ub4e4\uc774 \ub298\uc5b4\ub098\uace0 \uc788\ub2e4\ub294 \uc810"),"\uc785\ub2c8\ub2e4. \uc774\ub7ec\ud55c \uc608\ub85c \ub099\uad00\uc801 \uc5c5\ub370\uc774\ud2b8(Optimistic update), \uc11c\ubc84 \ub80c\ub354\ub9c1, \ub77c\uc6b0\ud2b8\uac00 \uc77c\uc5b4\ub098\uae30 \uc804\uc5d0 \ub370\uc774\ud130 \uac00\uc838\uc624\uae30 \ub4f1\uc774 \uc788\uc2b5\ub2c8\ub2e4. \ud504\ub860\ud2b8\uc5d4\ub4dc \uac1c\ubc1c\uc790\ub4e4\uc740 \uc774\uc804\uc5d0 \uacaa\uc5b4\ubcf4\uc9c0 \ubabb \ud588\ub358 \ubcf5\uc7a1\ud55c \uc0c1\ud669\uc5d0 \ub458\ub7ec\uc2f8\uc5ec \uc788\uc2b5\ub2c8\ub2e4. ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"http://www.quirksmode.org/blog/archives/2015/07/stop_pushing_th.html"}),"\uc774\uc81c \ud3ec\uae30\ud560 \ub54c\uac00 \ub41c \uac78\uae4c\uc694?")),Object(a.b)("p",null,"\uc774\ub7ec\ud55c \ubcf5\uc7a1\ud568\uc740 \ubcc0\ud654(mutation)\ub098 \ube44\ub3d9\uae30(asyncronicity)\uc640 \uac19\uc774 \uc0ac\ub78c\uc774 \ucd94\ub860\ud574\ub0b4\uae30 \uc5b4\ub824\uc6b4 ",Object(a.b)("strong",{parentName:"p"},"\ub450 \uac00\uc9c0 \uac1c\ub150\uc744 \uc11e\uc5b4\uc11c \uc0ac\uc6a9\ud55c\ub2e4\ub294 \ub370"),"\uc11c \uc635\ub2c8\ub2e4. \uc800\ub294 \uc774 \ub450 \uac00\uc9c0\ub97c ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://en.wikipedia.org/wiki/Diet_Coke_and_Mentos_eruption"}),"\uba58\ud1a0\uc2a4\uc640 \ucf5c\ub77c"),"\ub77c\uace0 \ubd80\ub985\ub2c8\ub2e4. \uc774 \ub458\uc740 \ub098\ub220\uc11c \ubcf4\uba74 \ud6cc\ub96d\ud558\uc9c0\ub9cc \ud568\uaed8 \ub450\uba74 \uc5c9\ub9dd\uc774 \ub429\ub2c8\ub2e4. ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"http://facebook.github.io/react"}),"React"),"\uc640 \uac19\uc740 \ub77c\uc774\ube0c\ub7ec\ub9ac\ub4e4\uc5d0\uc11c\ub294 \uc774 \ubb38\uc81c\ub97c \ud574\uacb0\ud558\uae30 \uc704\ud574 \ubdf0 \ub808\uc774\uc5b4\uc5d0\uc11c \ube44\ub3d9\uae30\uc640 DOM \uc870\uc791\ub4e4\uc744 \uc5c6\uc560\ubc84\ub838\uc2b5\ub2c8\ub2e4. \ud558\uc9c0\ub9cc React\ub294 \ub370\uc774\ud130\ub97c \uad00\ub9ac\ud558\ub294 \uc77c\uc5d0\ub294 \uad00\uc5ec\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4."),Object(a.b)("p",null,Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"http://facebook.github.io/flux"}),"Flux"),", ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"http://martinfowler.com/bliki/CQRS.html"}),"CQRS"),", ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"http://martinfowler.com/eaaDev/EventSourcing.html"}),"Event Sourcing"),"\uc744 \ub530\ub77c, Redux\ub294 \uc0c1\ud0dc \ubcc0\ud654\uac00 \uc77c\uc5b4\ub098\ub294 \uc2dc\uc810\uc5d0 \uc81c\uc57d\uc744 \ub450\uc5b4 \uc0c1\ud0dc \ubcc0\ud654\ub97c \uc608\uce21 \uac00\ub2a5\ud558\uac8c \ub9cc\ub4e4\uace0\uc790 \uc2dc\ub3c4\ud569\ub2c8\ub2e4. \uc774\ub7ec\ud55c \uc81c\uc57d\uc740 ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"/understanding/thinking-in-redux/three-principles"}),"\uc138\uac00\uc9c0 \uc6d0\uce59"),"\uc5d0 \ubc18\uc601\ub418\uc5b4 \uc788\uc2b5\ub2c8\ub2e4."))}b.isMDXComponent=!0},149:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return m}));var r=n(0),i=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var u=i.a.createContext({}),b=function(e){var t=i.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},l=function(e){var t=b(e.components);return i.a.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},d=i.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,o=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),l=b(n),d=r,m=l["".concat(o,".").concat(d)]||l[d]||s[d]||a;return n?i.a.createElement(m,c(c({ref:t},u),{},{components:n})):i.a.createElement(m,c({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=d;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var u=2;u<a;u++)o[u]=n[u];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);