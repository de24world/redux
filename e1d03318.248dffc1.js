(window.webpackJsonp=window.webpackJsonp||[]).push([[71],{174:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return o})),a.d(t,"rightToc",(function(){return p})),a.d(t,"default",(function(){return i}));var r=a(1),n=a(6),b=(a(0),a(184)),c={id:"prior-art",title:"\uae30\uc874 \uae30\uc220",description:"\uc18c\uac1c > \uae30\uc874 \uae30\uc220: Redux\uc758 \ub514\uc790\uc778\uc5d0 \ub07c\uce5c \uc601\ud5a5",hide_title:!0},o={id:"introduction/prior-art",title:"\uae30\uc874 \uae30\uc220",description:"\uc18c\uac1c > \uae30\uc874 \uae30\uc220: Redux\uc758 \ub514\uc790\uc778\uc5d0 \ub07c\uce5c \uc601\ud5a5",source:"@site/../docs_kr/introduction/PriorArt.md",permalink:"/introduction/prior-art",sidebar:"docs",previous:{title:"3\uac00\uc9c0 \uc6d0\uce59",permalink:"/introduction/three-principles"},next:{title:"Learning Resources",permalink:"/introduction/learning-resources"}},p=[{value:"Flux",id:"flux",children:[]},{value:"Elm",id:"elm",children:[]},{value:"Immutable",id:"immutable",children:[]},{value:"Baobab",id:"baobab",children:[]},{value:"Rx",id:"rx",children:[]}],u={rightToc:p};function i(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(b.b)("wrapper",Object(r.a)({},u,a,{components:t,mdxType:"MDXLayout"}),Object(b.b)("h1",{id:"\uae30\uc874-\uae30\uc220"},"\uae30\uc874 \uae30\uc220"),Object(b.b)("p",null,"Redux\ub294 \uae30\uc874 \uae30\uc220\uc758 \ubcf5\ud569\uc801\uc778 \uc720\uc0b0\uc785\ub2c8\ub2e4. Redux\ub97c \uae30\uc874 \uae30\uc220\uacfc \ube44\uad50\ud574\ubcf4\uba74 \uc77c\ubd80 \ud328\ud134\uc774\ub098 \uae30\uc220\uc801\uc778 \uba74\uc5d0\uc11c \ube44\uc2b7\ud55c \uc810\uc744 \uac00\uc9c0\uace0 \uc788\uc2b5\ub2c8\ub2e4. \ud558\uc9c0\ub9cc \uc911\uc694\ud55c \ucc28\uc774\uc810\ub3c4 \uc788\uc2b5\ub2c8\ub2e4. \uc774 \uc808\uc5d0\uc11c\ub294 \uc774\ub7ec\ud55c \uc720\uc0ac\uc131\uacfc \ucc28\uc774\uc810\uc5d0 \ub300\ud574\uc11c \uc124\uba85\ud569\ub2c8\ub2e4."),Object(b.b)("h3",{id:"flux"},"Flux"),Object(b.b)("p",null,"Redux\ub97c ",Object(b.b)("a",Object(r.a)({parentName:"p"},{href:"https://facebook.github.io/flux/"}),"Flux"),"\uc758 \uad6c\ud604 \uc911 \ud558\ub098\ub77c\uace0 \uc0dd\uac01\ud560 \uc218 \uc788\uc744\uae4c\uc694? ",Object(b.b)("a",Object(r.a)({parentName:"p"},{href:"https://twitter.com/fisherwebdev/status/616278911886884864"}),"\uadf8\ub807\uae30\ub3c4 \ud558\uace0"),", ",Object(b.b)("a",Object(r.a)({parentName:"p"},{href:"https://twitter.com/andrestaltz/status/616270755605708800"}),"\uc544\ub2c8\uae30\ub3c4 \ud569\ub2c8\ub2e4"),"."),Object(b.b)("p",null,"(\ub2e8\uc9c0 \uad81\uae08\ud55c \uac8c \uadf8\uac70\ub77c\uba74 \uac71\uc815\ud558\uc9c0 \ub9c8\uc138\uc694. ",Object(b.b)("a",Object(r.a)({parentName:"p"},{href:"https://twitter.com/jingc/status/616608251463909376"}),"Flux\ub97c \ub9cc\ub4e0 \uac1c\ubc1c\uc790\ub3c4")," ",Object(b.b)("a",Object(r.a)({parentName:"p"},{href:"https://twitter.com/fisherwebdev/status/616286955693682688"}),"Redux\ub97c \uc88b\uc544\ud569\ub2c8\ub2e4"),")"),Object(b.b)("p",null,"Redux\ub294 Flux\uc758 \uc911\uc694\ud55c \ud2b9\uc9d5\ub4e4\ub85c\ubd80\ud130 \uc601\uac10\uc744 \uc5bb\uc5c8\uc2b5\ub2c8\ub2e4. Flux\uc640 \ub9c8\ucc2c\uac00\uc9c0\ub85c Redux\uc5d0\uc11c\ub294 \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc758 \ud2b9\uc815 \ub808\uc774\uc5b4\uc5d0 \uc788\uc744 \ubaa8\ub378 \uc5c5\ub370\uc774\ud2b8 \ub85c\uc9c1\uc5d0 \uc9d1\uc911\ud560 \uc218 \uc788\ub3c4\ub85d \ud574\uc90d\ub2c8\ub2e4(Flux\uc758 '\uc2a4\ud1a0\uc5b4', Redux\uc758 '\ub9ac\ub4c0\uc11c'). \uc2a4\ud1a0\uc5b4\ub098 \ub9ac\ub4c0\uc11c\ub294 \uc560\ud50c\ub9ac\ucf00\uc774\uc158 \ucf54\ub4dc\uac00 \uc9c1\uc811 \ub370\uc774\ud130\ub97c \uc870\uc791\ud558\ub294 \ub300\uc2e0 \uc561\uc158\uc774\ub77c\uace0 \ubd88\ub9ac\ub294 \ud3c9\ubc94\ud55c \uac1d\uccb4\ub85c\ub9cc \ubaa8\ub4e0 \ub370\uc774\ud130 \ubcc0\ud654\ub97c \ubb18\uc0ac\ud558\ub3c4\ub85d \uac15\uc81c\ud569\ub2c8\ub2e4."),Object(b.b)("p",null,"Flux\uc640 \ub2ec\ub9ac ",Object(b.b)("strong",{parentName:"p"},"Redux\uc5d0\ub294 \ub514\uc2a4\ud328\ucc98\ub77c\ub294 \uac1c\ub150\uc774 \uc874\uc7ac\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4"),". \uc774\ub294 Redux\uac00 \uc774\ubca4\ud2b8 \uc5d0\ubbf8\ud130\ubcf4\ub2e4 \uc21c\uc218 \ud568\uc218\ub4e4\uc5d0 \uc758\uc874\ud558\uace0 \uc788\uae30 \ub54c\ubb38\uc785\ub2c8\ub2e4. \uadf8\ub9ac\uace0 \uc21c\uc218 \ud568\uc218\ub294 \uc774\uac83\ub4e4\uc744 \uad00\ub9ac\ud558\ub294 \ucd94\uac00\uc801\uc778 \uc5d4\ud2f0\ud2f0 \uc5c6\uc774\ub3c4 \uc870\ud569\ud558\uae30 \uc27d\uc2b5\ub2c8\ub2e4. Flux\ub97c \uc5b4\ub5bb\uac8c \ubcf4\ub290\ub0d0\uc5d0 \ub530\ub77c\uc11c \uc774\ub97c \uc0c1\uc138 \uad6c\ud604 \ubc29\ubc95\uc758 \ud558\ub098\ub77c\uace0 \uc0dd\uac01\ud560 \uc218\ub3c4 \uc788\uc2b5\ub2c8\ub2e4. Flux\ub294 ",Object(b.b)("a",Object(r.a)({parentName:"p"},{href:"https://speakerdeck.com/jmorrell/jsconf-uy-flux-those-who-forget-the-past-dot-dot-dot"}),Object(b.b)("inlineCode",{parentName:"a"},"(state, action) => state"))," \ud615\uc2dd\uc73c\ub85c \ubb18\uc0ac\ub418\uace4 \ud569\ub2c8\ub2e4. \ub530\ub77c\uc11c Redux \uc5ed\uc2dc Flux \uc544\ud0a4\ud14d\ucc98\ub77c\uace0 \uc774\uc57c\uae30\ud560 \uc218 \uc788\uc9c0\ub9cc, \uc21c\uc218 \ud568\uc218\ub97c \ud1b5\ud574 \uc774\ub97c \ub354 \uac04\ub2e8\ud558\uac8c \ub9cc\ub4ed\ub2c8\ub2e4."),Object(b.b)("p",null,"Flux\uc640 \ub610 \ub2e4\ub978 \uc911\uc694\ud55c \ucc28\uc774\uc810\uc740 ",Object(b.b)("strong",{parentName:"p"},"Redux\ub294 \ub2f9\uc2e0\uc774 \uacb0\ucf54 \ub370\uc774\ud130\uc758 \uc0c1\ud0dc\ub97c \ubc14\uafb8\uc9c0 \uc54a\ub294\ub2e4\uace0 \uac00\uc815\ud55c\ub2e4\ub294 \uc810\uc785\ub2c8\ub2e4"),". \uc0c1\ud0dc\ub294 \ud3c9\ubc94\ud55c \uac1d\uccb4\ub098 \ubc30\uc5f4\uc774\uba74 \ucda9\ubd84\ud788 \ub2e4\ub8f0 \uc218 \uc788\uc9c0\ub9cc \ub9ac\ub4c0\uc11c\uc5d0\uc11c \uc0c1\ud0dc\ub97c \ubcc0\uacbd\ud558\uc9c0 \uc54a\ub294 \uac83\uc744 \uac15\ub825\ud788 \uad8c\uc7a5\ud569\ub2c8\ub2e4. \ub9ac\ub4c0\uc11c\uc5d0\uc11c\ub294 \ud56d\uc0c1 \uc0c8\ub85c\uc6b4 \uac1d\uccb4\ub97c \ubc18\ud658\ud574\uc57c\ud569\ub2c8\ub2e4. \uc774\ub97c \uc704\ud574 ",Object(b.b)("a",Object(r.a)({parentName:"p"},{href:"http://babeljs.io"}),"Babel"),"\uc5d0 \uad6c\ud604\ub418\uc5b4\uc788\ub294 ",Object(b.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/sebmarkbage/ecmascript-rest-spread"}),"ES7\uc5d0\uc11c \uc81c\uc548\ub41c object spread \ubb38\ubc95"),"\uc774\ub098 ",Object(b.b)("a",Object(r.a)({parentName:"p"},{href:"https://facebook.github.io/immutable-js"}),"Immutable"),"\uc744 \uc0ac\uc6a9\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),Object(b.b)("p",null,"\uc131\ub2a5\uc774\ub098 \ub2e4\ub978 \uc774\uc720 \ub54c\ubb38\uc5d0 \uc704\ud574 ",Object(b.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/rackt/redux/issues/328#issuecomment-125035516"}),"\uc21c\uc218\ud558\uc9c0 \uc54a\uc740 \ub9ac\ub4c0\uc11c\ub97c \uc791\uc131\ud558\ub294 \uac83\ub3c4")," \uae30\uc220\uc801\uc73c\ub85c\ub294 ",Object(b.b)("em",{parentName:"p"},"\uac00\ub2a5\ud558\uc9c0\ub9cc"),", \uc774\ub807\uac8c \ud558\uc9c0 \uc54a\uc744 \uac83\uc744 \uad8c\uc7a5\ud569\ub2c8\ub2e4. \uc21c\uc218\ud558\uc9c0 \uc54a\uc740 \ub9ac\ub4c0\uc11c \uad6c\ud604\uc740 \uc2dc\uac04 \uc5ec\ud589, \uae30\ub85d/\uc7ac\uc0dd, \ud56b \ub85c\ub529\uacfc \uac19\uc740 \uac1c\ubc1c \uc9c0\uc6d0 \uae30\ub2a5\uc744 \ub9dd\uac00\ub728\ub9bd\ub2c8\ub2e4. \ub354\uc6b1\uc774 \ubd88\ubcc0\uc131 \ub54c\ubb38\uc5d0 \ub300\ubd80\ubd84\uc758 \uc2e4\uc81c \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc5d0\uc11c \uc131\ub2a5 \ubb38\uc81c\uac00 \uc788\uc744 \uac83 \uac19\uc544\ubcf4\uc774\uc9c0\ub9cc, ",Object(b.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/omcljs/om"}),"Om"),"\uc774 \uc99d\uba85\ud588\ub4ef\uc774 \uac1d\uccb4 \ud560\ub2f9\uc5d0 \uc788\uc5b4\uc11c \uc131\ub2a5\uc5d0\uc11c \ubd88\ub9ac\ud560 \uc9c0\ub77c\ub3c4 \uc21c\uc218 \ud568\uc218\ub97c \ud1b5\ud574 \ubb34\uc5c7\uc774 \ubc14\ub00c\uc5c8\ub294\uc9c0 \uc815\ud655\ud788 \ud310\ub2e8\ud560 \uc218 \uc788\uae30 \ub54c\ubb38\uc5d0 \uc7ac\ub80c\ub354\ub9c1\uc774\ub098 \uc7ac\uacc4\uc0b0 \uac19\uc740 \uac12\ube44\uc2fc \uc5f0\uc0b0\uc744 \ud53c\ud55c\ub2e4\ub294 \uc810\uc5d0\uc11c\ub294 \uc5ec\uc804\ud788 \uc720\ub9ac\ud569\ub2c8\ub2e4."),Object(b.b)("h3",{id:"elm"},"Elm"),Object(b.b)("p",null,Object(b.b)("a",Object(r.a)({parentName:"p"},{href:"http://elm-lang.org/"}),"Elm"),"\uc740 ",Object(b.b)("a",Object(r.a)({parentName:"p"},{href:"https://twitter.com/czaplic"}),"Evan Czaplicki"),"\uc774 Haskell\uc5d0\uc11c \uc601\uac10\uc744 \ubc1b\uc544 \ub9cc\ub4e0 \ud568\uc218\ud615 \ud504\ub85c\uadf8\ub798\ubc0d \uc5b8\uc5b4\uc785\ub2c8\ub2e4. Elm\uc740 \uc5c5\ub370\uc774\ud2b8\uac00 ",Object(b.b)("inlineCode",{parentName:"p"},"(state, action) => state")," \uc2dc\uadf8\ub2c8\ucc98\ub97c \ub530\ub974\ub3c4\ub85d \ud558\ub294 ",Object(b.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/evancz/elm-architecture-tutorial/"}),"\u201c\ubaa8\ub378 \ubdf0 \uc5c5\ub370\uc774\ud2b8\u201d \uc544\ud0a4\ud14d\ucc98"),"\uc744 \uac15\uc81c\ud569\ub2c8\ub2e4. \uc5c4\ubc00\ud788 \ub9d0\ud574 Elm\uc758 \uc5c5\ub370\uc774\ud130(updater)\uc640 Redux\uc758 \ub9ac\ub4c0\uc11c(reducer)\ub294 \uac19\uc2b5\ub2c8\ub2e4."),Object(b.b)("p",null,"\ud558\uc9c0\ub9cc Redux\uc640 \ub2ec\ub9ac Elm\uc740 \uc5b8\uc5b4\uc785\ub2c8\ub2e4. \ub530\ub77c\uc11c \uac15\uc81c\ub41c \uc21c\uc218\uc131, \uc815\uc801 \ud0c0\uc785, \ub6f0\uc5b4\ub09c \ubd88\ubcc0\uc131\uacfc (",Object(b.b)("inlineCode",{parentName:"p"},"case")," \ud45c\ud604\uc2dd\uc744 \ud65c\uc6a9\ud55c) \ud328\ud134 \ub9e4\uce6d \ub4f1 \ub2e4\uc591\ud55c \uc7a5\uc810\uc744 \ub204\ub9b4 \uc218 \uc788\uc2b5\ub2c8\ub2e4. Elm\uc744 \uc0ac\uc6a9\ud560 \uacc4\ud68d\uc774 \uc5c6\ub354\ub77c\ub3c4 Elm\uc758 \uc544\ud0a4\ud14d\ucc98\ub97c \uacf5\ubd80\ud558\uac70\ub098 \uac00\uc9c0\uace0 \ub180\uc544\ubcf4\uae30\ub97c \uad8c\ud569\ub2c8\ub2e4. ",Object(b.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/paldepind/noname-functional-frontend-framework"}),"\ube44\uc2b7\ud55c \uc544\uc774\ub514\uc5b4\ub97c \uad6c\ud604\ud574\ub454 \ud765\ubbf8\ub85c\uc6b4 \uc790\ubc14\uc2a4\ud06c\ub9bd\ud2b8 \ub77c\uc774\ube0c\ub7ec\ub9ac \ud50c\ub808\uc774\uadf8\ub77c\uc6b4\ub4dc"),"\ub3c4 \uc788\uc2b5\ub2c8\ub2e4. Redux\uac00 \uc5b4\ub514\uc11c \uc601\uac10\uc744 \ubc1b\uc558\ub294 \uc9c0 \ucc3e\uc744 \uc218 \uc788\uc2b5\ub2c8\ub2e4. Elm\uc758 \uc815\uc801 \ud0c0\uc785\uc5d0 \uac00\uae4c\uc6cc\uc9c8 \uc218 \uc788\ub294 \ud55c \uac00\uc9c0 \ubc29\ubc95\uc740 ",Object(b.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/rackt/redux/issues/290"}),"Flow\uc640 \uac19\uc740 \uc810\uc9c4\uc801\uc778 \ud0c0\uc785(gradual typing) \uc194\ub8e8\uc158"),"\uc744 \uc0ac\uc6a9\ud558\ub294 \uac83\uc785\ub2c8\ub2e4."),Object(b.b)("h3",{id:"immutable"},"Immutable"),Object(b.b)("p",null,Object(b.b)("a",Object(r.a)({parentName:"p"},{href:"https://facebook.github.io/immutable-js"}),"Immutable"),"\uc740 \uc601\uc18d \ub370\uc774\ud130 \uad6c\uc870\ub97c \uad6c\ud604\ud55c \uc790\ubc14\uc2a4\ud06c\ub9bd\ud2b8 \ub77c\uc774\ube0c\ub7ec\ub9ac\uc785\ub2c8\ub2e4. \uc774\ub294 \uc131\ub2a5\ub3c4 \uad1c\ucc2e\uc744 \ubfd0\ub9cc \uc544\ub2c8\ub77c \uc790\ubc14\uc2a4\ud06c\ub9bd\ud2b8 API\uc640\ub3c4 \uc798 \uc5b4\uc6b8\ub9bd\ub2c8\ub2e4."),Object(b.b)("p",null,"Immutable\uc774\ub098 \uc720\uc0ac \ub77c\uc774\ube0c\ub7ec\ub9ac\ub4e4\uc740 Redux\uc640\ub3c4 \ubb38\uc81c\uc5c6\uc774 \uc798 \uc5b4\uc6b8\ub9bd\ub2c8\ub2e4. \ubd80\ub2f4\uc5c6\uc774 \ud568\uaed8 \uc0ac\uc6a9\ud558\uc138\uc694!"),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Redux\ub294 \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc5d0\uc11c ",Object(b.b)("em",{parentName:"strong"},"\uc5b4\ub5bb\uac8c")," \uc0c1\ud0dc\ub97c \uc800\uc7a5\ud560 \uc9c0\uc5d0 \ub300\ud574\uc11c \uc2e0\uacbd\uc4f0\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4. \ud3c9\ubc94\ud55c \uac1d\uccb4, \ubd88\ubcc0 \uac1d\uccb4, \uadf8 \uc678\uc758 \ubb34\uc5c7\uc774\ub77c\ub3c4 \uc0c1\uad00\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4.")," \ubc94\uc6a9\uc801\uc778 \uc560\ud50c\ub9ac\ucf00\uc774\uc158 \uc791\uc131\uc744 \uc704\ud574 (\ub514)\uc2dc\ub9ac\uc5bc\ub77c\uc774\uc81c\uc774\uc158 \ub9e4\ucee4\ub2c8\uc998\uc774\ub098 \uc11c\ubc84\uc5d0\uc11c \uc0c1\ud0dc\ub97c \uac00\uc838\uc640 \uc218\ud654\ud558\ub294(hydrating, \uae30\uc874 \uac1d\uccb4\uc5d0 \uac12\uc744 \ucc44\uc6b0\ub294 \uac83\uc744 \uc758\ubbf8\ud568.) \uae30\ub2a5\uc744 \uc6d0\ud560 \uc218\ub3c4 \uc788\ub294\ub370, ",Object(b.b)("em",{parentName:"p"},"\ubd88\ubcc0\uc131\uc744 \uc9c0\uc6d0\ud558\uae30\ub9cc \ud55c\ub2e4\uba74")," \uc5b4\ub5a4 \ub370\uc774\ud130 \uc2a4\ud1a0\ub9ac\uc9c0 \ub77c\uc774\ube0c\ub7ec\ub9ac\ub97c \uc0ac\uc6a9\ud574\ub3c4 \ubb34\ubc29\ud569\ub2c8\ub2e4. \uc608\ub97c \ub4e4\uc5b4 Redux \uc0c1\ud0dc\ub97c \uad00\ub9ac\ud558\uae30 \uc704\ud574 Backbone\uc744 \uc0ac\uc6a9\ud558\ub294 \uac83\uc740 \uc5b4\uc6b8\ub9ac\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4. \uc65c\ub0d0\uba74 Backbone \ubaa8\ub378\uc740 \uac00\ubcc0\uc801\uc774\uae30 \ub54c\ubb38\uc785\ub2c8\ub2e4."),Object(b.b)("p",null,"\uc0ac\uc6a9\ud558\uace0\uc790 \ud558\ub294 \ubd88\ubcc0 \ub77c\uc774\ube0c\ub7ec\ub9ac\uc5d0\uc11c \ucee4\uc11c(cursor)\ub97c \uc9c0\uc6d0\ud558\ub354\ub77c\ub3c4 \uc774\ub97c \uc0ac\uc6a9\ud574\uc11c\ub294 \uc548 \ub429\ub2c8\ub2e4. \uc804\uccb4 \uc0c1\ud0dc \ud2b8\ub9ac\ub294 \uc77d\uae30 \uc804\uc6a9\uc73c\ub85c \ub2e4\ub904\uc838\uc57c \ud558\uba70, Redux\ub85c \uc0c1\ud0dc\ub97c \uc5c5\ub370\uc774\ud2b8\ud558\uace0 \uc5c5\ub370\uc774\ud2b8\ub97c \uad6c\ub3c5\ud574\uc57c\ud569\ub2c8\ub2e4. \ub530\ub77c\uc11c \ucee4\uc11c\ub97c \uc0ac\uc6a9\ud558\ub294 \uac83\uc740 Redux\uc640\ub294 \uc5b4\uc6b8\ub9ac\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4. ",Object(b.b)("strong",{parentName:"p"},"\ucee4\uc11c\ub97c \uc624\uc9c1 \uc0c1\ud0dc \ud2b8\ub9ac\uc640 UI \ud2b8\ub9ac\ub97c \ubd84\ub9ac\ud558\uac70\ub098 \uc810\uc9c4\uc801\uc73c\ub85c \ucee4\uc11c\ub97c \ud55c\uc815\uc9d3\ub294(refine) \uacbd\uc6b0\uc5d0\ub9cc \uc0ac\uc6a9\ud558\ub354\ub77c\ub3c4, \ucee4\uc11c \ub300\uc2e0\uc5d0 \uc140\ub809\ud130\ub97c \uac80\ud1a0\ud574\ubcf4\uc544\uc57c\ud569\ub2c8\ub2e4.")," \uc140\ub809\ud130\ub294 \uc870\ud569 \uac00\ub2a5\ud55c getter \ud568\uc218\ub4e4\uc785\ub2c8\ub2e4. \uc870\ud569 \uac00\ub2a5\ud55c \ud6cc\ub96d\ud558\uba70 \uac04\uacb0\ud55c \uc140\ub809\ud130\ub97c \uc81c\uacf5\ud558\ub294 ",Object(b.b)("a",Object(r.a)({parentName:"p"},{href:"http://github.com/faassen/reselect"}),"reselect"),"\ub97c \uc0b4\ud3b4\ubcf4\uae30 \ubc14\ub78d\ub2c8\ub2e4."),Object(b.b)("h3",{id:"baobab"},"Baobab"),Object(b.b)("p",null,Object(b.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/Yomguithereal/baobab"}),"Baobab"),"\uc740 \ud50c\ub808\uc778 \uc790\ubc14\uc2a4\ud06c\ub9bd\ud2b8 \uac1d\uccb4\ub97c \uc5c5\ub370\uc774\ud2b8\ud558\uae30 \uc704\ud574 \ubd88\ubcc0(immutable) API\ub97c \uad6c\ud604\ud55c \ub610 \ub2e4\ub978 \uc720\uba85\ud55c \ub77c\uc774\ube0c\ub7ec\ub9ac\uc785\ub2c8\ub2e4. \ud558\uc9c0\ub9cc Redux\uc640 \ud568\uaed8 \uc0ac\uc6a9\ud574\uc11c \ub204\ub9b4 \uc218 \uc788\ub294 \uc774\uc810\uc740 \ud06c\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4."),Object(b.b)("p",null,"Baobab\uc5d0\uc11c \uc81c\uacf5\ud558\ub294 \ub300\ubd80\ubd84\uc758 \uae30\ub2a5\uc740 \ucee4\uc11c\ub97c \uc0ac\uc6a9\ud574 \ub370\uc774\ud130\ub97c \uc5c5\ub370\uc774\ud2b8\ud558\ub294 \uc77c\uc774\ubbc0\ub85c, \uc561\uc158\uc744 \ub514\uc2a4\ud328\uce58\ud558\ub294 \uac83\uc774 \ub370\uc774\ud130\ub97c \ubcc0\uacbd\ud558\ub294 \uc720\uc77c\ud55c \ubc29\ubc95\uc778 Redux\uc640\ub294 \uc5b4\uc6b8\ub9ac\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4. \ub530\ub77c\uc11c Baobab\uc740 \ub2e4\ub978 \ubc29\ubc95\uc73c\ub85c \uc774 \ubb38\uc81c\ub97c \ud574\uacb0\ud558\uc9c0\ub9cc, \uc774\ub4e4\uc740 \uc11c\ub85c \ubcf4\uc644\uc801\uc774\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4."),Object(b.b)("p",null,"Immutable\uacfc \ub2ec\ub9ac Baobab\uc740 \ub0b4\ubd80\uc801\uc73c\ub85c \uc5b4\ub5a4 \ud2b9\ubcc4\ud558\uace0 \ud6a8\uc728\uc801\uc778 \ub370\uc774\ud130 \uad6c\uc870\ub97c \uad6c\ud604\ud558\uc9c0\ub294 \uc54a\uc2b5\ub2c8\ub2e4. \ub530\ub77c\uc11c Redux\uc640 Baobab\uc744 \ud568\uaed8 \uc0ac\uc6a9\ud574\ub3c4 \ud070 \uc7a5\uc810\uc740 \uc5c6\uc2b5\ub2c8\ub2e4. \ud3c9\ubc94\ud55c \uac1d\uccb4\ub97c \uc0ac\uc6a9\ud558\ub294 \ud3b8\uc774 \ub354 \uc27d\uc2b5\ub2c8\ub2e4."),Object(b.b)("h3",{id:"rx"},"Rx"),Object(b.b)("p",null,Object(b.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/Reactive-Extensions/RxJS"}),"Reactive Extensions")," (\uadf8\ub9ac\uace0 ",Object(b.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/ReactiveX/RxJS"}),"\ud604\ub300\uc801\uc73c\ub85c \uc7ac\uc791\uc131\ud558\uace0 \uc788\ub294 RxJS"),")\ub294 \ube44\ub3d9\uae30 \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc758 \ubcf5\uc7a1\ub3c4\ub97c \uc81c\uc5b4\ud558\ub294 \uc544\uc8fc \ub6f0\uc5b4\ub09c \ubc29\ubc95\uc785\ub2c8\ub2e4. \uc2e4\uc81c\ub85c ",Object(b.b)("a",Object(r.a)({parentName:"p"},{href:"http://cycle.js.org"}),"\ub3c5\ub9bd\uc801\uc778 observables\ub85c\uc11c \uc0ac\ub78c\uacfc \ucef4\ud4e8\ud130\uac00 \uc778\ud130\ub809\uc158\ud558\ub294 \ubaa8\ub378\uc744 \uad6c\ud604\ud558\ub294 \ub77c\uc774\ube0c\ub7ec\ub9ac\ub97c \ub9cc\ub4dc\ub824\ub294 \ub178\ub825\ub3c4 \uc788\uc2b5\ub2c8\ub2e4."),"."),Object(b.b)("p",null,"Redux\uc640 Rx\ub97c \ud568\uaed8 \uc0ac\uc6a9\ud558\ub294 \uac8c \ud569\ub9ac\uc801\uc77c\uae4c\uc694? \ubb3c\ub860\uc785\ub2c8\ub2e4! Redux\uc640 Rx\ub294 \uc544\uc8fc \uc798 \uc5b4\uc6b8\ub9bd\ub2c8\ub2e4. \uc608\ub97c \ub4e4\uc5b4 Redux \uc2a4\ud1a0\uc5b4\ub97c observable\ub85c \uc0ac\uc6a9\ud558\ub294 \uac83\uc740 \uc544\uc8fc \uc27d\uc2b5\ub2c8\ub2e4."),Object(b.b)("pre",null,Object(b.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"function toObservable(store) {\n  return {\n    subscribe({ onNext }) {\n      let dispose = store.subscribe(() => onNext(store.getState()))\n      onNext(store.getState())\n      return { dispose }\n    }\n  }\n}\n")),Object(b.b)("p",null,"\ub9c8\ucc2c\uac00\uc9c0\ub85c \uc11c\ub85c \ub2e4\ub978 \ube44\ub3d9\uae30 \uc2a4\ud2b8\ub9bc\uc744 \uc870\ud569\ud574\uc11c ",Object(b.b)("inlineCode",{parentName:"p"},"store.dispatch()"),"\uc5d0\uc11c \uc0ac\uc6a9\ud558\uae30 \uc804\uc5d0 \uc561\uc158\uc5d0\uc11c \uc0ac\uc6a9\ud560 \uc218\ub3c4 \uc788\uc2b5\ub2c8\ub2e4."),Object(b.b)("p",null,"\uadf8\ub7fc \uc774\ub807\uac8c \uc9c8\ubb38\ud560 \uc218\ub3c4 \uc788\uc2b5\ub2c8\ub2e4. \uc774\ubbf8 Rx\ub97c \uc798 \uc0ac\uc6a9\ud558\ub294 \ub370 Redux\uac00 \ud544\uc694\ud560\uae4c\uc694? \uaf2d \uadf8\ub807\uc9c0\ub294 \uc54a\uc2b5\ub2c8\ub2e4. ",Object(b.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/jas-chen/rx-redux"}),"Rx \uc548\uc5d0\uc11c Redux\ub97c \uc7ac\uad6c\ud604"),"\ud558\ub294 \uac83\uc740 \uadf8\ub9ac \uc5b4\ub835\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4. Rx\uc758 ",Object(b.b)("inlineCode",{parentName:"p"},".scan()")," \uba54\uc11c\ub4dc\ub97c \ud65c\uc6a9\ud574 \ub450 \uc904\uc774\uba74 \ucda9\ubd84\ud558\ub2e4\uace0\ub3c4 \ud569\ub2c8\ub2e4. \uc815\ub9d0\ub85c \uadf8\ub807\uc2b5\ub2c8\ub2e4."),Object(b.b)("p",null,"\uc758\uc2ec\uc2a4\ub7fd\ub2e4\uba74 \ub354 \uba40\ub9ac \uac08 \ud544\uc694\ub3c4 \uc5c6\uc774 Redux \uc18c\uc2a4\ucf54\ub4dc\uc640 \uc0dd\ud0dc\uacc4(\uc608\ub97c \ub4e4\uc5b4, ",Object(b.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/gaearon/redux-devtools"}),"\uac1c\ubc1c\uc790 \ub3c4\uad6c"),")\ub97c \uc0b4\ud3b4\ubcf4\uae30 \ubc14\ub78d\ub2c8\ub2e4. \uc774\uc5d0 \ub300\ud574 \ud06c\uac8c \uc2e0\uacbd\uc4f0\uc9c0 \uc54a\uc9c0\ub9cc \ub9ac\uc5d1\ud2f0\ube0c \ub370\uc774\ud130 \ud750\ub984\uc744 \uc0ac\uc6a9\ud558\uace0 \uc2f6\ub2e4\uba74 ",Object(b.b)("a",Object(r.a)({parentName:"p"},{href:"http://cycle.js.org"}),"Cycle"),"\uc744 \uac80\ud1a0\ud558\uac70\ub098 Redux\uc640 \ud568\uaed8 \uc0ac\uc6a9\ud574\ubcf4\uae30 \ubc14\ub78d\ub2c8\ub2e4. \uc5b4\ub5a4 \uc9c0 \uc54c\ub824\uc8fc\uc138\uc694!"))}i.isMDXComponent=!0},184:function(e,t,a){"use strict";a.d(t,"a",(function(){return l})),a.d(t,"b",(function(){return O}));var r=a(0),n=a.n(r);function b(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){b(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},b=Object.keys(e);for(r=0;r<b.length;r++)a=b[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(e);for(r=0;r<b.length;r++)a=b[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var u=n.a.createContext({}),i=function(e){var t=n.a.useContext(u),a=t;return e&&(a="function"==typeof e?e(t):o({},t,{},e)),a},l=function(e){var t=i(e.components);return n.a.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},m=Object(r.forwardRef)((function(e,t){var a=e.components,r=e.mdxType,b=e.originalType,c=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),l=i(a),m=r,O=l["".concat(c,".").concat(m)]||l[m]||s[m]||b;return a?n.a.createElement(O,o({ref:t},u,{components:a})):n.a.createElement(O,o({ref:t},u))}));function O(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var b=a.length,c=new Array(b);c[0]=m;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,c[1]=o;for(var u=2;u<b;u++)c[u]=a[u];return n.a.createElement.apply(null,c)}return n.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"}}]);