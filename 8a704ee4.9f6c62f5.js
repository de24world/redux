(window.webpackJsonp=window.webpackJsonp||[]).push([[48],{106:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"metadata",(function(){return o})),n.d(t,"rightToc",(function(){return b})),n.d(t,"default",(function(){return l}));var a=n(2),c=n(6),i=(n(0),n(149)),r={id:"reducers",title:"\ub9ac\ub4c0\uc11c",description:"\uae30\ucd08 \uac15\uc88c > \ub9ac\ub4c0\uc11c: Core concept - reducers are plain functions that return new state",hide_title:!0},o={unversionedId:"basics/reducers",id:"basics/reducers",isDocsHomePage:!1,title:"\ub9ac\ub4c0\uc11c",description:"\uae30\ucd08 \uac15\uc88c > \ub9ac\ub4c0\uc11c: Core concept - reducers are plain functions that return new state",source:"@site/../docs_kr/basics/Reducers.md",slug:"/basics/reducers",permalink:"/basics/reducers",version:"current",sidebar:"docs",previous:{title:"\uc561\uc158",permalink:"/basics/actions"},next:{title:"\uc800\uc7a5\uc18c",permalink:"/basics/store"}},b=[{value:"\uc0c1\ud0dc \uc124\uacc4\ud558\uae30",id:"\uc0c1\ud0dc-\uc124\uacc4\ud558\uae30",children:[]},{value:"\uc561\uc158 \ub2e4\ub8e8\uae30",id:"\uc561\uc158-\ub2e4\ub8e8\uae30",children:[]},{value:"\ub354 \ub9ce\uc740 \uc561\uc158 \ub2e4\ub8e8\uae30",id:"\ub354-\ub9ce\uc740-\uc561\uc158-\ub2e4\ub8e8\uae30",children:[]},{value:"\ub9ac\ub4c0\uc11c \ucabc\uac1c\uae30",id:"\ub9ac\ub4c0\uc11c-\ucabc\uac1c\uae30",children:[]},{value:"Source Code",id:"source-code",children:[]},{value:"\ub2e4\uc74c \ub2e8\uacc4",id:"\ub2e4\uc74c-\ub2e8\uacc4",children:[]}],s={rightToc:b};function l(e){var t=e.components,n=Object(c.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h1",{id:"\ub9ac\ub4c0\uc11c"},"\ub9ac\ub4c0\uc11c"),Object(i.b)("div",{className:"admonition admonition-info alert alert--info"},Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"info")),Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},'While the concepts in the "Basic" and "Advanced" tutorials are still valid, these pages are some of the oldest parts of our docs. We\'ll be updating those tutorials soon to improve the explanations and show some patterns that are simpler and easier to use. Keep an eye out for those updates. We\'ll also be reorganizing our docs to make it easier to find information.'),Object(i.b)("p",{parentName:"div"},Object(i.b)("strong",{parentName:"p"},"We recommend starting with the ",Object(i.b)("a",Object(a.a)({parentName:"strong"},{href:"../tutorials/essentials/part-1-overview-concepts"}),"Redux Essentials tutorial")),", since it covers the key points you need to know about how to get started using Redux to write actual applications."))),Object(i.b)("p",null,Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/basics/actions"}),"\uc561\uc158"),"\uc740 ",Object(i.b)("strong",{parentName:"p"},"\ubb34\uc5b8\uac00 \uc77c\uc5b4\ub09c\ub2e4"),"\ub294 \uc0ac\uc2e4\uc744 \uae30\uc220\ud558\uc9c0\ub9cc, \uadf8 \uacb0\uacfc \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc758 \uc0c1\ud0dc\uac00 \uc5b4\ub5bb\uac8c \ubc14\ub00c\ub294\uc9c0\ub294 \ud2b9\uc815\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4. \uc774\uac83\uc740 \ub9ac\ub4c0\uc11c\uac00 \ud560 \uc77c\uc774\uc8e0."),Object(i.b)("h2",{id:"\uc0c1\ud0dc-\uc124\uacc4\ud558\uae30"},"\uc0c1\ud0dc \uc124\uacc4\ud558\uae30"),Object(i.b)("p",null,"Redux\uc5d0\uc11c \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc758 \ubaa8\ub4e0 \uc0c1\ud0dc\ub294 \ud558\ub098\uc758 \uac1d\uccb4\uc5d0 \uc800\uc7a5\ub429\ub2c8\ub2e4. \uc5b4\ub5a4 \ucf54\ub4dc\uac74 \uc791\uc131\ud558\uae30 \uc804\uc5d0 \ud615\ud0dc\ub97c \uc0dd\uac01\ud574\ubcf4\ub294\uac74 \uc88b\uc740 \uc77c\uc774\uc8e0. \uc5ec\ub7ec\ubd84\uc758 \uc571\uc758 \uc0c1\ud0dc\ub97c \uac1d\uccb4\ub85c \ub9cc\ub4e0\ub2e4\uba74 \uc5b4\ub5a4 \ud45c\ud604\uc774 \uac00\uc7a5 \ub2e8\uc21c\ud560\uae4c\uc694?"),Object(i.b)("p",null,"\uc6b0\ub9ac\uc758 \ud560\uc77c \uc571\uc744 \uc704\ud574 \ub450 \uac00\uc9c0\ub97c \uc800\uc7a5\ud558\uace0 \uc2f6\uc2b5\ub2c8\ub2e4:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"\ud604\uc7ac \uc120\ud0dd\ub41c \ud544\ud130;"),Object(i.b)("li",{parentName:"ul"},"\ud560\uc77c\uc758 \uc2e4\uc81c \ubaa9\ub85d.")),Object(i.b)("p",null,"\uc5ec\ub7ec\ubd84\uc740 \uc885\uc885 \ub370\uc774\ud130 \ubfd0\ub9cc \uc544\ub2c8\ub77c UI \uc0c1\ud0dc\ub3c4 \uc0c1\ud0dc \ud2b8\ub9ac\uc5d0 \uc800\uc7a5\ud574\uc57c \ud55c\ub2e4\ub294\uac78 \ubc1c\uacac\ud558\uc2e4\uac81\ub2c8\ub2e4. \uadf8\ub798\ub3c4 \uc88b\uc9c0\ub9cc, \ub370\uc774\ud130\ub294 UI \uc0c1\ud0dc\uc640 \ubd84\ub9ac\ud558\ub3c4\ub85d \ud558\uc138\uc694."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"{\n  visibilityFilter: 'SHOW_ALL',\n  todos: [{\n    text: 'Consider using Redux',\n    completed: true,\n  }, {\n    text: 'Keep all state in a single tree',\n    completed: false\n  }]\n}\n")),Object(i.b)("blockquote",null,Object(i.b)("h5",Object(a.a)({parentName:"blockquote"},{id:"\uad00\uacc4\uc5d0-\ub300\ud55c-\ud55c\ub9c8\ub514"}),"\uad00\uacc4\uc5d0 \ub300\ud55c \ud55c\ub9c8\ub514")),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"\ub354 \ubcf5\uc7a1\ud55c \uc571\uc5d0\uc11c\ub294 \uac01\uae30 \ub2e4\ub978 \uac1c\uccb4\ub4e4\uc774 \uc11c\ub85c\ub97c \ucc38\uc870\ud558\uac8c \ub9cc\ub4e4\uace0 \uc2f6\uc73c\uc2e4\uac81\ub2c8\ub2e4. \uc6b0\ub9ac\ub294 \uc5ec\ub7ec\ubd84\uc774 \uc571\uc758 \uc0c1\ud0dc\ub97c \uac00\ub2a5\ud55c\ud55c \uc911\ucca9\ub418\uc9c0 \uc54a\ub3c4\ub85d \uc815\uaddc\ud654\ud560\uac83\uc744 \uad8c\ud569\ub2c8\ub2e4. \ubaa8\ub4e0 \uac1c\uccb4\uac00 ID\ub97c \ud0a4\ub85c \uac00\uc9c0\uace0, ID\ub97c \ud1b5\ud574 \ub2e4\ub978 \uac1c\uccb4\ub098 \ubaa9\ub85d\uc744 \ucc38\uc870\ud558\ub3c4\ub85d \ud558\uc138\uc694. \uc571\uc758 \uc0c1\ud0dc\ub97c \ub370\uc774\ud130\ubca0\uc774\uc2a4\ub77c\uace0 \uc0dd\uac01\ud558\uc2dc\uba74 \ub429\ub2c8\ub2e4. \uc774\ub7f0 \uc811\uadfc\uc740 ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/gaearon/normalizr"}),"normalizr's"),"\uc758 \ubb38\uc11c\uc5d0 \uc790\uc138\ud788 \ub098\uc640\uc788\uc2b5\ub2c8\ub2e4. \uc608\ub97c \ub4e4\uc5b4 \uc0c1\ud0dc \uc548\uc5d0 ",Object(i.b)("inlineCode",{parentName:"p"},"todosById: { id -> todo }"),"\uc640 ",Object(i.b)("inlineCode",{parentName:"p"},"todos: array<id>"),"\ucc98\ub7fc \uad6c\ud604\ud558\ub294 \uac83\uc774 \uc2e4\uc81c \uc571\uc5d0\uc11c\ub294 \ub354 \uc801\uc808\ud569\ub2c8\ub2e4. \ud558\uc9c0\ub9cc \uc608\uc81c\uc5d0\uc11c\ub294 \ub2e8\uc21c\ud558\uac8c \ud558\uaca0\uc2b5\ub2c8\ub2e4.")),Object(i.b)("h2",{id:"\uc561\uc158-\ub2e4\ub8e8\uae30"},"\uc561\uc158 \ub2e4\ub8e8\uae30"),Object(i.b)("p",null,"\uc0c1\ud0dc \uac1d\uccb4\uac00 \uc5b4\ub5bb\uac8c \uc0dd\uacbc\ub294\uc9c0 \uc815\ud588\uc73c\ub2c8 \ub9ac\ub4c0\uc11c\ub97c \uc791\uc131\ud574\ubd05\uc2dc\ub2e4. \ub9ac\ub4c0\uc11c\ub294 \uc774\uc804 \uc0c1\ud0dc\uc640 \uc561\uc158\uc744 \ubc1b\uc544\uc11c \ub2e4\uc74c \uc0c1\ud0dc\ub97c \ubc18\ud658\ud558\ub294 \uc21c\uc218 \ud568\uc218\uc785\ub2c8\ub2e4."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),";(previousState, action) => newState\n")),Object(i.b)("p",null,"\uc5ec\ub7ec\ubd84\uc774 \uc774 \ud615\ud0dc\uc758 \ud568\uc218\ub97c ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce"}),Object(i.b)("inlineCode",{parentName:"a"},"Array.prototype.reduce(reducer, ?initialValue)")),"\ub85c \ub118\uae38 \uac83\uc774\uae30 \ub54c\ubb38\uc5d0 \ub9ac\ub4c0\uc11c\ub77c\uace0 \ubd80\ub985\ub2c8\ub2e4. \ub9ac\ub4c0\uc11c\ub97c \uc21c\uc218\ud558\uac8c \uc720\uc9c0\ud558\ub294\uac83\uc740 \ub9e4\uc6b0 \uc911\uc694\ud569\ub2c8\ub2e4. \uc5ec\ub7ec\ubd84\uc774 ",Object(i.b)("strong",{parentName:"p"},"\uc808\ub300\ub85c")," \ub9ac\ub4c0\uc11c \ub0b4\uc5d0\uc11c \ud558\uc9c0 \ub9d0\uc544\uc57c \ud560 \uac83\ub4e4\uc740:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"\uc778\uc218\ub4e4\uc744 \ubcc0\uacbd(mutate)\ud558\uae30;"),Object(i.b)("li",{parentName:"ul"},"API \ud638\ucd9c\uc774\ub098 \ub77c\uc6b0\ud305 \uc804\ud658\uac19\uc740 \uc0ac\uc774\ub4dc\uc774\ud399\ud2b8\ub97c \uc77c\uc73c\ud0a4\uae30;"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"Date.now()"),"\ub098 ",Object(i.b)("inlineCode",{parentName:"li"},"Math.random()")," \uac19\uc774 \uc21c\uc218\ud558\uc9c0 \uc54a\uc740 \ud568\uc218\ub97c \ud638\ucd9c\ud558\uae30.")),Object(i.b)("p",null,"\uc0ac\uc774\ub4dc\uc774\ud399\ud2b8\ub97c \uc5b4\ub5bb\uac8c \uc77c\uc73c\ud0a4\ub294\uc9c0\ub294 ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/advanced/advanced-tutorial"}),"\uc2ec\ud654\uacfc\uc815"),"\uc5d0\uc11c \ud655\uc778\ud558\uac8c \ub420\uac81\ub2c8\ub2e4. \uc9c0\uae08\uc740 \ub9ac\ub4c0\uc11c\uac00 \ubc18\ub4dc\uc2dc \uc21c\uc218\ud574\uc57c \ud55c\ub2e4\ub294 \uc810\ub9cc \uae30\uc5b5\ud574\ub450\uc138\uc694. ",Object(i.b)("strong",{parentName:"p"},"\uc778\uc218\uac00 \uc8fc\uc5b4\uc9c0\uba74, \ub2e4\uc74c \uc0c1\ud0dc\ub97c \uacc4\uc0b0\ud574\uc11c \ubc18\ud658\ud558\uba74 \ub429\ub2c8\ub2e4. \uc608\uae30\uce58 \ubabb\ud55c \uc77c\uc740 \uc5c6\uc5b4\uc57c \ud569\ub2c8\ub2e4. \uc0ac\uc774\ub4dc \uc774\ud399\ud2b8\ub3c4 \uc5c6\uc5b4\uc57c \ud569\ub2c8\ub2e4. API \ud638\ucd9c\ub3c4 \uc548\ub429\ub2c8\ub2e4. \ubcc0\uacbd\ub3c4 \uc548\ub429\ub2c8\ub2e4. \uacc4\uc0b0\ub9cc \uac00\ub2a5\ud569\ub2c8\ub2e4.")),Object(i.b)("p",null,"\uc774 \uc815\ub3c4\ub85c \ud574\ub450\uace0, \uc6b0\ub9ac\uac00 \uc804\uc5d0 \uc815\uc758\ud588\ub358 ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/basics/actions"}),"actions"),"\uc744 \uc774\ud574\ud558\ub3c4\ub85d \ucc9c\ucc9c\ud788 \ub9ac\ub4c0\uc11c\ub97c \uc791\uc131\ud574\ubd05\uc2dc\ub2e4."),Object(i.b)("p",null,"\ucd08\uae30 \uc0c1\ud0dc\ub97c \uc815\ud558\ub294\ub370\uc11c \uc2dc\uc791\ud558\uaca0\uc2b5\ub2c8\ub2e4. Redux\ub294 \ucc98\uc74c\uc5d0 \ub9ac\ub4c0\uc11c\ub97c ",Object(i.b)("inlineCode",{parentName:"p"},"undefined")," \uc0c1\ud0dc\ub85c \ud638\ucd9c\ud569\ub2c8\ub2e4. \uadf8\ub54c\uac00 \ucd08\uae30 \uc0c1\ud0dc\ub97c \ubc18\ud658\ud560 \uae30\ud68c\uc785\ub2c8\ub2e4:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"import { VisibilityFilters } from './actions'\n\nconst initialState = {\n  visibilityFilter: VisibilityFilters.SHOW_ALL,\n  todos: []\n}\n\nfunction todoApp(state, action) {\n  if (typeof state === 'undefined') {\n    return initialState\n  }\n\n  // \uc9c0\uae08\uc740 \uc544\ubb34 \uc561\uc158\ub3c4 \ub2e4\ub8e8\uc9c0 \uc54a\uace0\n  // \uc8fc\uc5b4\uc9c4 \uc0c1\ud0dc\ub97c \uadf8\ub300\ub85c \ubc18\ud658\ud569\ub2c8\ub2e4.\n  return state\n}\n")),Object(i.b)("p",null,"\ub354 \uac04\ub2e8\ud558\uac8c \uc791\uc131\ud558\ub294 \ubc29\ubc95\uc740 ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Functions/default_parameters"}),"ES6 default arguments \ubb38\ubc95"),"\uc744 \uc0ac\uc6a9\ud558\ub294 \uac83\uc785\ub2c8\ub2e4:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"function todoApp(state = initialState, action) {\n  // \uc9c0\uae08\uc740 \uc544\ubb34 \uc561\uc158\ub3c4 \ub2e4\ub8e8\uc9c0 \uc54a\uace0\n  // \uc8fc\uc5b4\uc9c4 \uc0c1\ud0dc\ub97c \uadf8\ub300\ub85c \ubc18\ud658\ud569\ub2c8\ub2e4.\n  return state\n}\n")),Object(i.b)("p",null,"\uc774\uc81c ",Object(i.b)("inlineCode",{parentName:"p"},"SET_VISIBILITY_FILTER"),"\ub97c \ucc98\ub9ac\ud569\uc2dc\ub2e4. \uc6b0\ub9ac\uac00 \ud560 \uc77c\uc740 \uc0c1\ud0dc\uc5d0\uc11c ",Object(i.b)("inlineCode",{parentName:"p"},"visibilityFilter"),"\ub97c \ubc14\uafb8\ub294 \uac83 \ubfd0\uc785\ub2c8\ub2e4. \uac04\ub2e8\ud788:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"function todoApp(state = initialState, action) {\n  switch (action.type) {\n    case SET_VISIBILITY_FILTER:\n      return Object.assign({}, state, {\n        visibilityFilter: action.filter\n      })\n    default:\n      return state\n  }\n}\n")),Object(i.b)("p",null,"\uc9da\uace0 \ub118\uc5b4\uac08 \uc810\uc740:"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},Object(i.b)("strong",{parentName:"p"},"\uc6b0\ub9ac\ub294 ",Object(i.b)("inlineCode",{parentName:"strong"},"state"),"\ub97c \ubcc0\uacbd\ud558\uc9c0 \uc54a\uc558\uc2b5\ub2c8\ub2e4.")," ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Object/assign"}),Object(i.b)("inlineCode",{parentName:"a"},"Object.assign()")),"\uc744 \ud1b5\ud574 \ubcf5\uc0ac\ubcf8\uc744 \ub9cc\ub4e4\uc5c8\uc8e0. ",Object(i.b)("inlineCode",{parentName:"p"},"Object.assign(state, { visibilityFilter: action.filter })"),"\uc774\ub77c\uace0 \uc368\ub3c4 \uc5ec\uc804\ud788 \ud2c0\ub9bd\ub2c8\ub2e4: \uccab\ubc88\uc9f8 \uc778\uc218\ub97c \ubcc0\uacbd\ud558\uac8c \ub418\ub2c8\uae4c\uc694. \uc5ec\ub7ec\ubd84\uc740 ",Object(i.b)("strong",{parentName:"p"},"\ubc18\ub4dc\uc2dc")," \uccab\ubc88\uc9f8 \uc778\uc218\ub85c \ube48 \uac1d\uccb4\ub97c \uc804\ub2ec\ud574\uc57c \ud569\ub2c8\ub2e4. ES7\ub85c \uc81c\uc548\ub41c ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/sebmarkbage/ecmascript-rest-spread"}),"object spread syntax"),"\uc744 \uc368\uc11c ",Object(i.b)("inlineCode",{parentName:"p"},"{ ...state, ...newState }"),"\ub85c \uc791\uc131\ud560\uc218\ub3c4 \uc788\uc2b5\ub2c8\ub2e4.")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},Object(i.b)("strong",{parentName:"p"},Object(i.b)("inlineCode",{parentName:"strong"},"default")," \ucf00\uc774\uc2a4\uc5d0 \ub300\ud574 \uc774\uc804\uc758 ",Object(i.b)("inlineCode",{parentName:"strong"},"state"),"\ub97c \ubc18\ud658\ud588\uc2b5\ub2c8\ub2e4.")," \uc54c \uc218 \uc5c6\ub294 \uc561\uc158\uc5d0 \ub300\ud574\uc11c\ub294 \uc774\uc804\uc758 ",Object(i.b)("inlineCode",{parentName:"p"},"state"),"\ub97c \ubc18\ud658\ud558\ub294\uac83\uc774 \uc911\uc694\ud569\ub2c8\ub2e4."))),Object(i.b)("blockquote",null,Object(i.b)("h5",Object(a.a)({parentName:"blockquote"},{id:"objectassign\uc5d0-\uad00\ud558\uc5ec"}),Object(i.b)("inlineCode",{parentName:"h5"},"Object.assign"),"\uc5d0 \uad00\ud558\uc5ec")),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Object/assign"}),Object(i.b)("inlineCode",{parentName:"a"},"Object.assign()")),"\uc740 ES6\uc758 \uc77c\ubd80\uc774\uc9c0\ub9cc, \ub300\ubd80\ubd84\uc758 \ube0c\ub77c\uc6b0\uc800\uc5d0\uc11c \uad6c\ud604\ub418\uc9c0 \uc54a\uc558\uc2b5\ub2c8\ub2e4. \ud3f4\ub9ac\ud544\uc744 \uc0ac\uc6a9\ud558\uac70\ub098 ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.npmjs.com/package/babel-plugin-object-assign"}),"Babel \ud50c\ub7ec\uadf8\uc778"),"\uc774\ub098 ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://lodash.com/docs#assign"}),Object(i.b)("inlineCode",{parentName:"a"},"_.assign()")),"\uac19\uc774 \ub2e4\ub978 \ub77c\uc774\ube0c\ub7ec\ub9ac\uc758 \ud5ec\ud37c\ub97c \uc0ac\uc6a9\ud574\uc57c \ud569\ub2c8\ub2e4.")),Object(i.b)("blockquote",null,Object(i.b)("h5",Object(a.a)({parentName:"blockquote"},{id:"switch\uc640-\ubcf4\uc77c\ub7ec\ud50c\ub808\uc774\ud2b8\uc5d0-\uad00\ud558\uc5ec"}),Object(i.b)("inlineCode",{parentName:"h5"},"switch"),"\uc640 \ubcf4\uc77c\ub7ec\ud50c\ub808\uc774\ud2b8\uc5d0 \uad00\ud558\uc5ec")),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},Object(i.b)("inlineCode",{parentName:"p"},"switch"),"\ubb38\uc740 \uc9c4\uc9dc \ubcf4\uc77c\ub7ec\ud50c\ub808\uc774\ud2b8\uac00 ",Object(i.b)("strong",{parentName:"p"},"\uc544\ub2d9\ub2c8\ub2e4"),". Flux\uc758 \uc9c4\uc9dc \ubcf4\uc77c\ub7ec\ud50c\ub808\uc774\ud2b8\ub294 \uac1c\ub150\uc801\uc778 \ubd80\ubd84\uc785\ub2c8\ub2e4: \ubcc0\uacbd\uc0ac\ud56d\uc744 \ubcf4\ub0b4\uc57c \ud558\uace0, \ub514\uc2a4\ud328\uccd0\uc5d0 \uc800\uc7a5\uc18c\ub97c \ub4f1\ub85d\ud574\uc57c \ud558\uace0, \uc800\uc7a5\uc18c\uac00 \uac1d\uccb4\uac00 \ub418\uc5b4\uc57c \ud569\ub2c8\ub2e4(\uadf8\ub9ac\uace0 \uc720\ub2c8\ubc84\uc15c \uc571\uc744 \ub9cc\ub4e4\ub54c \uadf8 \ubcf5\uc7a1\uc131\uc774 \ub4dc\ub7ec\ub098\uc8e0). Redux\ub294 \uc774\ub7ec\ud55c \ubb38\uc81c\ub4e4\uc744 \uc774\ubca4\ud2b8 \uc774\ubbf8\ud130 \ub300\uc2e0 \uc21c\uc218 \ub9ac\ub4c0\uc11c\ub97c \uc0ac\uc6a9\ud568\uc73c\ub85c\uc368 \ud574\uacb0\ud588\uc2b5\ub2c8\ub2e4.")),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"\ub9ce\uc740 \uc774\ub4e4\uc774 \uc544\uc9c1\ub3c4 \ubb38\uc11c\uc5d0 ",Object(i.b)("inlineCode",{parentName:"p"},"switch"),"\ubb38\uc744 \uc0ac\uc6a9\ud558\ub294\uac00\ub97c \ubcf4\uace0 \ud504\ub808\uc784\uc6cc\ud06c\ub97c \uc120\ud0dd\ud55c\ub2e4\ub294\uac74 \ubd88\ud589\ud55c \uc77c\uc785\ub2c8\ub2e4. \ub9cc\uc57d \uc5ec\ub7ec\ubd84\uc774 ",Object(i.b)("inlineCode",{parentName:"p"},"switch"),"\ub97c \uc2eb\uc5b4\ud55c\ub2e4\uba74 ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/recipes/reducing-boilerplate#%EB%A6%AC%EB%93%80%EC%84%9C"}),"\u201c\ubcf4\uc77c\ub7ec\ud50c\ub808\uc774\ud2b8 \uc904\uc774\uae30\u201d"),"\uc5d0 \ub098\uc628 \uac83\ucc98\ub7fc \ud578\ub4e4\ub7ec \ub9f5\uc744 \ubc1b\ub3c4\ub85d \uc9c1\uc811 \ub9cc\ub4e0 ",Object(i.b)("inlineCode",{parentName:"p"},"createReducer")," \ud568\uc218\ub97c \uc0ac\uc6a9\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.")),Object(i.b)("h2",{id:"\ub354-\ub9ce\uc740-\uc561\uc158-\ub2e4\ub8e8\uae30"},"\ub354 \ub9ce\uc740 \uc561\uc158 \ub2e4\ub8e8\uae30"),Object(i.b)("p",null,"\ub2e4\ub8f0 \uc561\uc158\uc774 2\uac1c \ub354 \uc788\uc2b5\ub2c8\ub2e4! \uc6b0\ub9ac\uc758 \ub9ac\ub4c0\uc11c\uac00 ",Object(i.b)("inlineCode",{parentName:"p"},"ADD_TODO"),"\ub97c \ub2e4\ub8f0 \uc218 \uc788\ub3c4\ub85d \ud655\uc7a5\ud569\uc2dc\ub2e4."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"function todoApp(state = initialState, action) {\n  switch (action.type) {\n    case SET_VISIBILITY_FILTER:\n      return Object.assign({}, state, {\n        visibilityFilter: action.filter\n      })\n    case ADD_TODO:\n      return Object.assign({}, state, {\n        todos: [\n          ...state.todos,\n          {\n            text: action.text,\n            completed: false\n          }\n        ]\n      })\n    default:\n      return state\n  }\n}\n")),Object(i.b)("p",null,"\uc55e\uc5d0\uc11c\uc640 \ub9c8\ucc2c\uac00\uc9c0\ub85c ",Object(i.b)("inlineCode",{parentName:"p"},"state"),"\ub098 \uadf8 \ud544\ub4dc\ub4e4\uc744 \uc9c1\uc811 \uc4f0\ub294 \ub300\uc2e0 \uc0c8 \uac1d\uccb4\ub97c \ubc18\ud658\ud588\uc2b5\ub2c8\ub2e4. \uc0c8 ",Object(i.b)("inlineCode",{parentName:"p"},"todos"),"\ub294 \uc774\uc804\uc758 ",Object(i.b)("inlineCode",{parentName:"p"},"todos"),"\uc758 \ub05d\uc5d0 \uc0c8\ub85c\uc6b4 \ud560\uc77c \ud558\ub098\ub97c \ubd99\uc778 \uac83\uacfc \ub3d9\uc77c\ud569\ub2c8\ub2e4. \uc0c8\ub85c\uc6b4 \ud560\uc77c\uc740 \uc561\uc158\uc758 \ub370\uc774\ud130\ub97c \uc774\uc6a9\ud574\uc11c \ub9cc\ub4e4\uc5b4\uc84c\uc2b5\ub2c8\ub2e4."),Object(i.b)("p",null,"\ub9c8\uc9c0\ub9c9\uc73c\ub85c, ",Object(i.b)("inlineCode",{parentName:"p"},"COMPLETE_TODO")," \ud578\ub4e4\ub7ec\ub97c \uad6c\ud604\ud569\uc2dc\ub2e4."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"case COMPLETE_TODO:\n  return Object.assign({}, state, {\n    todos: [\n      ...state.todos.slice(0, action.index),\n      Object.assign({}, state.todos[action.index], {\n        completed: true\n      }),\n      ...state.todos.slice(action.index + 1)\n    ]\n  });\n")),Object(i.b)("p",null,"\ubcc0\uacbd \uc5c6\uc774 \ubc30\uc5f4\uc758 \ud2b9\uc815 \ud560\uc77c\ub9cc \uc218\uc815\ud558\uace0 \uc2f6\uae30 \ub54c\ubb38\uc5d0, \uadf8 \ud560\uc77c\uc758 \uc55e\uacfc \ub4a4\ub97c \uc798\ub77c\ub0c8\uc2b5\ub2c8\ub2e4. \ub9cc\uc57d \uc774\ub7f0 \ucf54\ub4dc\ub97c \uc790\uc8fc \uc791\uc131\ud574\uc57c \ud55c\ub2e4\uba74 ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://facebook.github.io/react/docs/update.html"}),"React.addons.update"),", ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/substantial/updeep"}),"updeep"),"\uac19\uc740 \ud5ec\ud37c\ub098 ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"http://facebook.github.io/immutable-js/"}),"Immutable")," \uac19\uc774 \uae4a\uc740 \uc218\uc815\uc744 \uc9c0\uc6d0\ud558\ub294 \ub77c\uc774\ube0c\ub7ec\ub9ac\ub97c \uc0ac\uc6a9\ud558\ub294\uac83\uc774 \uc88b\uc2b5\ub2c8\ub2e4. ",Object(i.b)("inlineCode",{parentName:"p"},"state"),"\ub97c \ubcf5\uc0ac\ud558\uae30 \uc804\uc5d4 \uadf8 \uc548\uc758 \ubb34\uc5c7\uc5d0\ub3c4 \ud560\ub2f9\ud558\uc9c0 \ub9d0\uc544\uc57c \ud55c\ub2e4\ub294\uac78 \uae30\uc5b5\ud558\uc138\uc694."),Object(i.b)("h2",{id:"\ub9ac\ub4c0\uc11c-\ucabc\uac1c\uae30"},"\ub9ac\ub4c0\uc11c \ucabc\uac1c\uae30"),Object(i.b)("p",null,"\uc6b0\ub9ac\uc758 \ucf54\ub4dc\uac00 \uc5ec\uae30\uae4c\uc9c0 \uc654\uc2b5\ub2c8\ub2e4. \uc880 \ubc88\uc7a1\uc2a4\ub7fd\ub124\uc694:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"function todoApp(state = initialState, action) {\n  switch (action.type) {\n    case SET_VISIBILITY_FILTER:\n      return Object.assign({}, state, {\n        visibilityFilter: action.filter\n      })\n    case ADD_TODO:\n      return Object.assign({}, state, {\n        todos: [\n          ...state.todos,\n          {\n            text: action.text,\n            completed: false\n          }\n        ]\n      })\n    case COMPLETE_TODO:\n      return Object.assign({}, state, {\n        todos: [\n          ...state.todos.slice(0, action.index),\n          Object.assign({}, state.todos[action.index], {\n            completed: true\n          }),\n          ...state.todos.slice(action.index + 1)\n        ]\n      })\n    default:\n      return state\n  }\n}\n")),Object(i.b)("p",null,"\uc880 \ub354 \uc774\ud574\ud558\uae30 \uc27d\uac8c \ub9cc\ub4e4 \ubc29\ubc95\uc774 \uc788\uc744\uae4c\uc694? ",Object(i.b)("inlineCode",{parentName:"p"},"todos"),"\uc640 ",Object(i.b)("inlineCode",{parentName:"p"},"visibilityFilter"),"\ub294 \uc11c\ub85c \uc644\uc804\ud788 \ub3c5\ub9bd\uc801\uc73c\ub85c \uc218\uc815\ub418\ub294\uac83 \uac19\uc2b5\ub2c8\ub2e4. \uac04\ud639 \uc0c1\ud0dc\uc758 \ud544\ub4dc\ub4e4\uc774 \uc11c\ub85c\uc5d0\uac8c \uc758\uc874\ud558\uace0 \uc788\uc5b4 \ub354 \uace0\ub824\ud560 \uc0ac\ud56d\uc774 \uc788\ub294 \uacbd\uc6b0\ub3c4 \uc788\uc9c0\ub9cc, \uc774\ubc88\uc5d4 \uc27d\uac8c ",Object(i.b)("inlineCode",{parentName:"p"},"todos"),"\uc758 \uc218\uc815\uc744 \ubcc4\ub3c4\uc758 \ud568\uc218\ub85c \ubd84\ub9ac\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"function todos(state = [], action) {\n  switch (action.type) {\n    case ADD_TODO:\n      return [\n        ...state,\n        {\n          text: action.text,\n          completed: false\n        }\n      ]\n    case COMPLETE_TODO:\n      return [\n        ...state.slice(0, action.index),\n        Object.assign({}, state[action.index], {\n          completed: true\n        }),\n        ...state.slice(action.index + 1)\n      ]\n    default:\n      return state\n  }\n}\n\nfunction todoApp(state = initialState, action) {\n  switch (action.type) {\n    case SET_VISIBILITY_FILTER:\n      return Object.assign({}, state, {\n        visibilityFilter: action.filter\n      })\n    case ADD_TODO:\n    case COMPLETE_TODO:\n      return Object.assign({}, state, {\n        todos: todos(state.todos, action)\n      })\n    default:\n      return state\n  }\n}\n")),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"todos"),"\uac00 ",Object(i.b)("inlineCode",{parentName:"p"},"state"),"\ub3c4 \ubc1b\uc9c0\ub9cc \uc774\uac74 \uadf8\ub0e5 \ubc30\uc5f4\uc774\ub77c\ub294\uac78 \uc798 \ubd10\ub450\uc138\uc694! \uc774\uc81c ",Object(i.b)("inlineCode",{parentName:"p"},"todoApp"),"\uc740 \uad00\ub9ac\ud560 \uc0c1\ud0dc\uc758 \uc870\uac01\ub9cc\uc744 \ub118\uae30\uace0, ",Object(i.b)("inlineCode",{parentName:"p"},"todos"),"\ub294 \uadf8 \uc870\uac01\uc744 \uc5b4\ub5bb\uac8c \uc218\uc815\ud560\uc9c0 \uc54c\uace0 \uc788\uc2b5\ub2c8\ub2e4. ",Object(i.b)("strong",{parentName:"p"},"\uc774\uac83\uc744 ",Object(i.b)("em",{parentName:"strong"},"\ub9ac\ub4c0\uc11c \uc870\ud569"),"\uc774\ub77c\uace0 \ubd80\ub974\uace0, \uc774\uac83\uc774 Redux \uc571\uc744 \ub9cc\ub4dc\ub294 \uae30\ubcf8 \ud328\ud134\uc774 \ub429\ub2c8\ub2e4.")),Object(i.b)("p",null,"\ub9ac\ub4c0\uc11c \uc870\ud569\uc5d0 \ub300\ud574 \ub354 \uc54c\uc544\ubd05\uc2dc\ub2e4. ",Object(i.b)("inlineCode",{parentName:"p"},"visibilityFilter"),"\ub9cc\uc744 \uad00\ub9ac\ud558\ub294 \ub9ac\ub4c0\uc11c\ub3c4 \ubf51\uc544\ub0bc \uc218 \uc788\uc744\uae4c\uc694? \uc774\ub807\uac8c \ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"function visibilityFilter(state = SHOW_ALL, action) {\n  switch (action.type) {\n    case SET_VISIBILITY_FILTER:\n      return action.filter\n    default:\n      return state\n  }\n}\n")),Object(i.b)("p",null,"\uc6b0\ub9ac\ub294 \uc774\uc81c \uba54\uc778 \ub9ac\ub4c0\uc11c\ub97c \uc0c1\ud0dc\uc758 \ubd80\ubd84\ub4e4\uc744 \uad00\ub9ac\ud558\ub294 \ub9ac\ub4c0\uc11c\ub97c \ubd80\ub974\uace0 \ud558\ub098\uc758 \uac1d\uccb4\ub85c \uc870\ud569\ud558\ub294 \ud568\uc218\ub85c \uc7ac\uc791\uc131\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \ub610\ud55c \uc774\uc81c \uc644\uc804\ud55c \ucd08\uae30 \uc0c1\ud0dc\ub3c4 \ud544\uc694 \uc5c6\uc2b5\ub2c8\ub2e4. \ucc98\uc74c\uc5d0 ",Object(i.b)("inlineCode",{parentName:"p"},"undefined"),"\uac00 \uc8fc\uc5b4\uc9c0\uba74 \uc790\uc2dd \ub9ac\ub4c0\uc11c\ub4e4\uc774 \uac01\uac01\uc758 \ucd08\uae30 \uc0c1\ud0dc\ub97c \ubc18\ud658\ud558\uba74 \ub429\ub2c8\ub2e4."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"function todos(state = [], action) {\n  switch (action.type) {\n    case ADD_TODO:\n      return [\n        ...state,\n        {\n          text: action.text,\n          completed: false\n        }\n      ]\n    case COMPLETE_TODO:\n      return [\n        ...state.slice(0, action.index),\n        Object.assign({}, state[action.index], {\n          completed: true\n        }),\n        ...state.slice(action.index + 1)\n      ]\n    default:\n      return state\n  }\n}\n\nfunction visibilityFilter(state = SHOW_ALL, action) {\n  switch (action.type) {\n    case SET_VISIBILITY_FILTER:\n      return action.filter\n    default:\n      return state\n  }\n}\n\nfunction todoApp(state = {}, action) {\n  return {\n    visibilityFilter: visibilityFilter(state.visibilityFilter, action),\n    todos: todos(state.todos, action)\n  }\n}\n")),Object(i.b)("p",null,"*","*","\uac01\uac01\uc758 \ub9ac\ub4c0\uc11c\ub294 \uc804\uccb4 \uc0c1\ud0dc\uc5d0\uc11c \uc790\uc2e0\uc758 \ubd80\ubd84\ub9cc\uc744 \uad00\ub9ac\ud569\ub2c8\ub2e4. \ubaa8\ub4e0 \ub9ac\ub4c0\uc11c\uc758 ",Object(i.b)("inlineCode",{parentName:"p"},"state")," \ub9e4\uac1c\ubcc0\uc218\ub294 \uc11c\ub85c \ub2e4\ub974\uace0, \uc790\uc2e0\uc774 \uad00\ub9ac\ud558\ub294 \ubd80\ubd84\uc5d0 \ud574\ub2f9\ud569\ub2c8\ub2e4."),Object(i.b)("p",null,"\ubc8c\uc368 \uadf8\ub7f4\ub4ef\ud574 \ubcf4\uc774\ub124\uc694! \uc571\uc774 \ucee4\uc9c0\uba74 \ub9ac\ub4c0\uc11c\ub97c \ubcc4\ub3c4\uc758 \ud30c\uc77c\ub85c \ubd84\ub9ac\ud574\uc11c \uc644\uc804\ud788 \ub3c5\ub9bd\uc801\uc774\uace0 \ub2e4\ub978 \ub370\uc774\ud130 \ub3c4\uba54\uc778\uc744 \uad00\ub9ac\ud558\ub3c4\ub85d \ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),Object(i.b)("p",null,"\ub9c8\uc9c0\ub9c9\uc73c\ub85c, Redux\ub294 ",Object(i.b)("inlineCode",{parentName:"p"},"todoApp"),"\uc774 \uc704\uc5d0\uc11c \ud588\ub358\uac83\uacfc \ub3d9\uc77c\ud55c \ubcf4\uc77c\ub7ec\ud50c\ub808\uc774\ud2b8 \ub85c\uc9c1\uc744 \uc9c0\uc6d0\ud558\ub294 ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/api/combinereducers"}),Object(i.b)("inlineCode",{parentName:"a"},"combineReducers()")),"\ub77c\ub294 \uc720\ud2f8\ub9ac\ud2f0\ub97c \uc81c\uacf5\ud569\ub2c8\ub2e4. \uc774\ub97c \uc774\uc6a9\ud558\uba74 ",Object(i.b)("inlineCode",{parentName:"p"},"todoApp"),"\uc744 \uc774\ub807\uac8c \uc7ac\uc791\uc131\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"import { combineReducers } from 'redux'\n\nconst todoApp = combineReducers({\n  visibilityFilter,\n  todos\n})\n\nexport default todoApp\n")),Object(i.b)("p",null,"\uc774\ub294 \uc544\ub798\uc640 \uc644\uc804\ud788 \uc758\ubbf8\uac00 \uac19\uc740 \ucf54\ub4dc\uc785\ub2c8\ub2e4:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"export default function todoApp(state, action) {\n  return {\n    visibilityFilter: visibilityFilter(state.visibilityFilter, action),\n    todos: todos(state.todos, action)\n  }\n}\n")),Object(i.b)("p",null,"\uc774\ub4e4\uc5d0\uac8c \uc11c\ub85c \ub2e4\ub978 \ud0a4\ub97c \uc8fc\uac70\ub098, \ub2e4\ub978 \ud568\uc218\ub97c \ud638\ucd9c\ud560 \uc218\ub3c4 \uc788\uc2b5\ub2c8\ub2e4. \uacb0\ud569\ub41c \ub9ac\ub4c0\uc11c\ub97c \uc791\uc131\ud558\ub294 \uc774 \ub450 \ubc29\ubc95\uc740 \uc644\uc804\ud788 \uc758\ubbf8\uac00 \uac19\uc2b5\ub2c8\ub2e4:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"const reducer = combineReducers({\n  a: doSomethingWithA,\n  b: processB,\n  c: c\n})\n")),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"function reducer(state, action) {\n  return {\n    a: doSomethingWithA(state.a, action),\n    b: processB(state.b, action),\n    c: c(state.c, action)\n  }\n}\n")),Object(i.b)("p",null,Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/api/combinereducers"}),Object(i.b)("inlineCode",{parentName:"a"},"combineReducers()")),"\uac00 \ud558\ub294 \uc77c\uc740 \uc5ec\ub7ec\ubd84\uc758 \ub9ac\ub4c0\uc11c\ub4e4\uc744 ",Object(i.b)("strong",{parentName:"p"},"\ud0a4\uc5d0 \ub530\ub77c \uc120\ud0dd\ud574\uc11c \uc798\ub77c\ub0b8 \uc0c1\ud0dc\ub4e4"),"\ub85c \ud638\ucd9c\ud558\uace0 \uadf8 \uacb0\uacfc\ub97c \ub2e4\uc2dc \ud558\ub098\uc758 \uac1d\uccb4\ub85c \ud569\uccd0\uc8fc\ub294 \ud568\uc218\ub97c \ub9cc\ub4dc\ub294 \uac83 \ubfd0\uc785\ub2c8\ub2e4. ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/rackt/redux/issues/428#issuecomment-129223274"}),"\ub531\ud788 \ub9c8\ubc95\uac19\uc740\uac74 \uc544\ub2d9\ub2c8\ub2e4.")),Object(i.b)("blockquote",null,Object(i.b)("h5",Object(a.a)({parentName:"blockquote"},{id:"es6\uc744-\uc774\ud574\ud558\ub294-\uc0ac\uc6a9\uc790\ub97c-\uc704\ud55c-\ud55c\ub9c8\ub514"}),"ES6\uc744 \uc774\ud574\ud558\ub294 \uc0ac\uc6a9\uc790\ub97c \uc704\ud55c \ud55c\ub9c8\ub514")),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},Object(i.b)("inlineCode",{parentName:"p"},"combineReducers"),"\ub294 \uac1d\uccb4\ub97c \uae30\ub300\ud558\uae30 \ub54c\ubb38\uc5d0, \ubaa8\ub4e0 \ucd5c\uc0c1\uc704 \ub9ac\ub4c0\uc11c\ub4e4\uc744 \uac01\uae30 \ub2e4\ub978 \ud30c\uc77c\uc5d0 \ub193\uace0 ",Object(i.b)("inlineCode",{parentName:"p"},"export"),"\ud55c \ub2e4\uc74c ",Object(i.b)("inlineCode",{parentName:"p"},"import * as reducers"),"\ub97c \uc774\uc6a9\ud574 \uac01\uac01\uc758 \uc774\ub984\uc744 \ud0a4\ub85c \uac00\uc9c0\ub294 \uac1d\uccb4\ub97c \uc5bb\uc744 \uc218 \uc788\uc2b5\ub2c8\ub2e4:")),Object(i.b)("blockquote",null,Object(i.b)("pre",{parentName:"blockquote"},Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"import { combineReducers } from 'redux'\nimport * as reducers from './reducers'\n\nconst todoApp = combineReducers(reducers)\n")),Object(i.b)("p",{parentName:"blockquote"},Object(i.b)("inlineCode",{parentName:"p"},"import *"),"\uc740 \uc544\uc9c1\uc740 \uc0c8\ub85c\uc6b4 \ubb38\ubc95\uc774\uae30 \ub54c\ubb38\uc5d0 \uc774 \ubb38\uc11c\uc5d0\uc11c\ub294 ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/rackt/redux/issues/428#issuecomment-129223274"}),"\ud63c\ub3d9"),"\uc744 \ub9c9\uae30 \uc704\ud574 \ub354 \uc774\uc0c1 \uc0ac\uc6a9\ud558\uc9c0 \uc54a\uaca0\uc9c0\ub9cc, \ucee4\ubba4\ub2c8\ud2f0\uc758 \uc608\uc81c\ub4e4\uc5d0\uc11c \ub9cc\ub0a0\uc218\ub3c4 \uc788\uc2b5\ub2c8\ub2e4.")),Object(i.b)("h2",{id:"source-code"},"Source Code"),Object(i.b)("h4",{id:"reducersjs"},Object(i.b)("inlineCode",{parentName:"h4"},"reducers.js")),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"import { combineReducers } from 'redux'\nimport {\n  ADD_TODO,\n  COMPLETE_TODO,\n  SET_VISIBILITY_FILTER,\n  VisibilityFilters\n} from './actions'\nconst { SHOW_ALL } = VisibilityFilters\n\nfunction visibilityFilter(state = SHOW_ALL, action) {\n  switch (action.type) {\n    case SET_VISIBILITY_FILTER:\n      return action.filter\n    default:\n      return state\n  }\n}\n\nfunction todos(state = [], action) {\n  switch (action.type) {\n    case ADD_TODO:\n      return [\n        ...state,\n        {\n          text: action.text,\n          completed: false\n        }\n      ]\n    case COMPLETE_TODO:\n      return [\n        ...state.slice(0, action.index),\n        Object.assign({}, state[action.index], {\n          completed: true\n        }),\n        ...state.slice(action.index + 1)\n      ]\n    default:\n      return state\n  }\n}\n\nconst todoApp = combineReducers({\n  visibilityFilter,\n  todos\n})\n\nexport default todoApp\n")),Object(i.b)("h2",{id:"\ub2e4\uc74c-\ub2e8\uacc4"},"\ub2e4\uc74c \ub2e8\uacc4"),Object(i.b)("p",null,"\ub2e4\uc74c\uc73c\ub85c\ub294 \uc0c1\ud0dc\ub97c \ubcf4\uad00\ud558\uace0 \uc561\uc158\uc744 \ubcf4\ub0bc \ub54c \ub9ac\ub4c0\uc11c\ub97c \ud638\ucd9c\ud574\uc8fc\ub294 ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/basics/store"}),"Redux \uc800\uc7a5\uc18c\ub97c \ub9cc\ub4dc\ub294 \ubc95"),"\uc5d0 \ub300\ud574 \uc54c\uc544\ubcf4\uaca0\uc2b5\ub2c8\ub2e4."))}l.isMDXComponent=!0},149:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return O}));var a=n(0),c=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function b(e,t){if(null==e)return{};var n,a,c=function(e,t){if(null==e)return{};var n,a,c={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(c[n]=e[n]);return c}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(c[n]=e[n])}return c}var s=c.a.createContext({}),l=function(e){var t=c.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=l(e.components);return c.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return c.a.createElement(c.a.Fragment,{},t)}},d=c.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,r=e.parentName,s=b(e,["components","mdxType","originalType","parentName"]),p=l(n),d=a,O=p["".concat(r,".").concat(d)]||p[d]||u[d]||i;return n?c.a.createElement(O,o(o({ref:t},s),{},{components:n})):c.a.createElement(O,o({ref:t},s))}));function O(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,r=new Array(i);r[0]=d;var o={};for(var b in t)hasOwnProperty.call(t,b)&&(o[b]=t[b]);o.originalType=e,o.mdxType="string"==typeof e?e:a,r[1]=o;for(var s=2;s<i;s++)r[s]=n[s];return c.a.createElement.apply(null,r)}return c.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);