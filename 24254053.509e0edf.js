(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{121:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return p})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return i}));var r=n(1),a=n(6),c=(n(0),n(191)),o={id:"examples",title:"\uc608\uc81c",description:"\uc18c\uac1c > \uc608\uc81c: Redux \uc778\ud130\ub809\ud2f0\ube0c \uc571\ub4e4",hide_title:!0},p={id:"introduction/examples",title:"\uc608\uc81c",description:"\uc18c\uac1c > \uc608\uc81c: Redux \uc778\ud130\ub809\ud2f0\ube0c \uc571\ub4e4",source:"@site/../docs_kr/introduction/Examples.md",permalink:"/introduction/examples",sidebar:"docs",previous:{title:"\uc0dd\ud0dc\uacc4",permalink:"/introduction/ecosystem"},next:{title:"Redux Tutorials Index",permalink:"/tutorials/tutorials-index"}},l=[{value:"\uce74\uc6b4\ud130 \ubc14\ub2d0\ub77c(Counter Vanilla)",id:"\uce74\uc6b4\ud130-\ubc14\ub2d0\ub77ccounter-vanilla",children:[]},{value:"\uce74\uc6b4\ud130(Counter)",id:"\uce74\uc6b4\ud130counter",children:[]},{value:"Todos",id:"todos",children:[]},{value:"Todos with Undo",id:"todos-with-undo",children:[]},{value:"TodoMVC",id:"todomvc",children:[]},{value:"\uc1fc\ud551 \uce74\ud2b8(Shopping Cart)",id:"\uc1fc\ud551-\uce74\ud2b8shopping-cart",children:[]},{value:"Tree View",id:"tree-view",children:[]},{value:"\ube44\ub3d9\uae30(Async)",id:"\ube44\ub3d9\uae30async",children:[]},{value:"\ubc94\uc6a9(Universal)",id:"\ubc94\uc6a9universal",children:[]},{value:"\ub9ac\uc5bc \uc6d4\ub4dc(Real World)",id:"\ub9ac\uc5bc-\uc6d4\ub4dcreal-world",children:[]},{value:"\ub354 \ub9ce\uc740 \uc608\uc81c",id:"\ub354-\ub9ce\uc740-\uc608\uc81c",children:[]}],b={rightToc:l};function i(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(c.b)("wrapper",Object(r.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("h1",{id:"\uc608\uc81c"},"\uc608\uc81c"),Object(c.b)("p",null,"Redux ",Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/rackt/redux/tree/master/examples"}),"\uc18c\uc2a4\ucf54\ub4dc"),"\uc5d0\ub294 \uba87 \uac00\uc9c0 \uc608\uc81c \ucf54\ub4dc\uc640 \ud568\uaed8 \ubc30\ud3ec\ub429\ub2c8\ub2e4."),Object(c.b)("blockquote",null,Object(c.b)("h5",Object(r.a)({parentName:"blockquote"},{id:"\ubcf5\uc0ac\uc5d0-\ub300\ud558\uc5ec"}),"\ubcf5\uc0ac\uc5d0 \ub300\ud558\uc5ec"),Object(c.b)("p",{parentName:"blockquote"},"Redux \uc608\uc81c\ub97c \uc608\uc81c \ud3f4\ub354 \ubc16\uc5d0 \ubcf5\uc0ac\ud574\uc11c \uc0ac\uc6a9\ud55c\ub2e4\uba74, ",Object(c.b)("inlineCode",{parentName:"p"},"webpack.config.js"),' \ud30c\uc77c\uc758 \ub9c8\uc9c0\ub9c9 \uba87 \uc904\uc740 \uc9c0\uc6cc\ub3c4 \uad1c\ucc2e\uc2b5\ub2c8\ub2e4. \uc774\ub294 "\uc5ec\ub7ec\ubd84\uc758 \ud504\ub85c\uc81d\ud2b8\uc5d0\uc11c \uc774 \ubd80\ubd84\uc744 \uc548\uc804\ud558\uac8c \uc9c0\uc6b8 \uc218 \uc788\uc2b5\ub2c8\ub2e4(You can safely delete these lines in your project)."\ub77c\ub294 \uc8fc\uc11d\uc774 \uc788\uc2b5\ub2c8\ub2e4.')),Object(c.b)("h2",{id:"\uce74\uc6b4\ud130-\ubc14\ub2d0\ub77ccounter-vanilla"},"\uce74\uc6b4\ud130 \ubc14\ub2d0\ub77c(Counter Vanilla)"),Object(c.b)("p",null,"\ub2e4\uc74c \uba85\ub839\uc5b4\ub85c ",Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/reactjs/redux/tree/master/examples/counter-vanilla"}),"\uce74\uc6b4\ud130 \ubc14\ub2d0\ub77c(Counter Vanilla)")," \uc608\uc81c\ub97c \uc2e4\ud589\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{}),"git clone https://github.com/reactjs/redux.git\n\ncd redux/examples/counter-vanilla\nopen index.html\n")),Object(c.b)("p",null,"\uc774 \uc608\uc81c\ub294 \ube4c\ub4dc \uc2dc\uc2a4\ud15c\uc774\ub098 \ubdf0 \ud504\ub808\uc784 \uc6cc\ud06c\uac00 \ud544\uc694\ud558\uc9c0 \uc54a\uc73c\uba70, ES5\uc5d0\uc11c \uc0ac\uc6a9\ub418\ub294 Redux API\ub97c \ubcf4\uc5ec\uc90d\ub2c8\ub2e4."),Object(c.b)("h2",{id:"\uce74\uc6b4\ud130counter"},"\uce74\uc6b4\ud130(Counter)"),Object(c.b)("p",null,"\ub2e4\uc74c \uba85\ub839\uc5b4\ub85c ",Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/rackt/redux/tree/master/examples/counter"}),"\uce74\uc6b4\ud130(Counter)")," \uc608\uc81c\ub97c \uc2e4\ud589\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{}),"git clone https://github.com/rackt/redux.git\n\ncd redux/examples/counter\nnpm install\nnpm start\n\nopen http://localhost:3000/\n")),Object(c.b)("p",null,"\uc774 \uc608\uc81c\ub294 Redux\ub97c React\uc640 \ud568\uaed8 \uc0ac\uc6a9\ud558\ub294 \uac00\uc7a5 \uae30\ubcf8\uc801\uc778 \uc608\uc785\ub2c8\ub2e4. \uac04\ub2e8\ud558\uac8c\ud558\uae30 \uc704\ud574 \uc800\uc7a5\uc18c\uac00 \ubcc0\uacbd \ub420 \ub54c React \uad6c\uc131 \uc694\uc18c\ub97c \uc218\ub3d9\uc73c\ub85c \ub2e4\uc2dc \ub80c\ub354\ub9c1\ud569\ub2c8\ub2e4. \uc2e4\uc81c \ud504\ub85c\uc81d\ud2b8\uc5d0\uc11c\ub294 \uace0\uc131\ub2a5 ",Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/reactjs/react-redux"}),"React Redux"),"\ubc14\uc778\ub529\uc744 \uc0ac\uc6a9\ud558\ub294 \uac83\uc774 \uc88b\uc2b5\ub2c8\ub2e4."),Object(c.b)("h2",{id:"todos"},"Todos"),Object(c.b)("p",null,"\ub2e4\uc74c \uba85\ub839\uc5b4\ub85c ",Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/reactjs/redux/tree/master/examples/todos"}),"Todos")," \uc608\uc81c\ub97c \uc2e4\ud589\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{}),"git clone https://github.com/reactjs/redux.git\n\ncd redux/examples/todos\nnpm install\nnpm start\n\nopen http://localhost:3000/\n")),Object(c.b)("p",null,"\uc0c1\ud0dc(state) \uc5c5\ub370\uc774\ud2b8\uac00 Redux\uc758 \uad6c\uc131 \uc694\uc18c\uc640 \ud568\uaed8 \uc791\ub3d9\ud558\ub294 \ubc29\ubc95\uc744 \uc798 \uc774\ud574\ud560 \uc218\uc788\ub294 \uac00\uc7a5 \uc88b\uc740 \uc608\uc81c\uc785\ub2c8\ub2e4.\n\uc774 \uc608\uc81c\ub294 \ub9ac\ub4c0\uc11c\uac00 \ucde8\uae09\ud558\ub294 \uc561\uc158(action)\uc744 \ub2e4\ub978 \ub9ac\ub4c0\uc11c\uc5d0 \uc704\uc784\ud558\ub294 \ubc29\ubc95\uacfc ",Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/reactjs/react-redux"}),"React Redux"),"\ub97c \uc0ac\uc6a9\ud558\uc5ec \ud504\ub9ac\uc820\ud14c\uc774\uc158 \uad6c\uc131\uc694\uc18c\uc5d0\uc11c \ucee8\ud14c\uc774\ub108 \uad6c\uc131\uc694\uc18c\ub97c \uc0dd\uc131\ud558\ub294 \ubc29\ubc95\uc744 \ubcf4\uc5ec\uc90d\ub2c8\ub2e4."),Object(c.b)("p",null,"\uc774 \uc608\uc81c\ub294 \ud14c\uc2a4\ud2b8\uac00 \ud3ec\ud568\ub418\uc5b4 \uc788\uc2b5\ub2c8\ub2e4."),Object(c.b)("h2",{id:"todos-with-undo"},"Todos with Undo"),Object(c.b)("p",null,"\ub2e4\uc74c \uba85\ub839\uc5b4\ub85c ",Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/reactjs/redux/tree/master/examples/todos-with-undo"}),"Todos with Undo")," \uc608\uc81c\ub97c \uc2e4\ud589\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{}),"git clone https://github.com/reactjs/redux.git\n\ncd redux/examples/todos-with-undo\nnpm install\nnpm start\n\nopen http://localhost:3000/\n")),Object(c.b)("p",null,"\uc774 \uc608\uc81c\ub294 \uc774\uc804 \uc608\uc81c(todo)\uc758 \ubcc0\ud615\uc785\ub2c8\ub2e4. \uac70\uc758 \ub3d9\uc77c\ud558\uc9c0\ub9cc, ",Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/omnidan/redux-undo"}),"Redux Undo"),"\ub85c \ub9ac\ub4c0\uc11c\ub97c \uac10\uc2f8\uba74 \uba87 \uc904\uc758 \ucf54\ub4dc\ub85c \uc571\uc5d0 \uc2e4\ud589\ucde8\uc18c/\ub2e4\uc2dc\uc2e4\ud589 \uae30\ub2a5\uc744 \ucd94\uac00 \ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),Object(c.b)("h2",{id:"todomvc"},"TodoMVC"),Object(c.b)("p",null,"\ub2e4\uc74c \uba85\ub839\uc5b4\ub85c ",Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/rackt/redux/tree/master/examples/todomvc"}),"TodoMVC")," \uc608\uc81c\ub97c \uc2e4\ud589\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{}),"git clone https://github.com/rackt/redux.git\n\ncd redux/examples/todomvc\nnpm install\nnpm start\n\nopen http://localhost:3000/\n")),Object(c.b)("p",null,"\uc774\uac83\uc740 \uace0\uc804\uc801\uc778 ",Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"http://todomvc.com/"}),"TodoMVC")," \uc608\uc81c\uc785\ub2c8\ub2e4. \ube44\uad50\ub97c \uc704\ud574 \uc5ec\uae30\uc5d0 \uc788\uc9c0\ub9cc, Todos \uc608\uc81c\uc640 \uac19\uc740 \uac83\uc744 \ub2e4\ub8f9\ub2c8\ub2e4."),Object(c.b)("p",null,"\uc774 \uc608\uc81c\ub294 \ud14c\uc2a4\ud2b8\uac00 \ud3ec\ud568\ub418\uc5b4 \uc788\uc2b5\ub2c8\ub2e4."),Object(c.b)("h2",{id:"\uc1fc\ud551-\uce74\ud2b8shopping-cart"},"\uc1fc\ud551 \uce74\ud2b8(Shopping Cart)"),Object(c.b)("p",null,"\ub2e4\uc74c \uba85\ub839\uc5b4\ub85c ",Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/reactjs/redux/tree/master/examples/shopping-cart"}),"\uc1fc\ud551 \uce74\ud2b8(Shopping Cart)")," \uc608\uc81c\ub97c \uc2e4\ud589\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{}),"git clone https://github.com/reactjs/redux.git\n\ncd redux/examples/shopping-cart\nnpm install\nnpm start\n\nopen http://localhost:3000/\n")),Object(c.b)("p",null,"\uc774 \uc608\uc81c\ub294 \uc571\uc774 \ucee4\uc9d0\uc5d0 \ub530\ub77c \uc911\uc694\ud55c \ud2b9\uc9d5\uc801\uc778 Redux \ud328\ud134\uc744 \ubcf4\uc5ec\uc90d\ub2c8\ub2e4. \ud2b9\ud788 ID\ub97c \ud1b5\ud574 \uc815\uaddc\ud654\ub41c \ubc29\ubc95\uc73c\ub85c \uc5d4\ud2f0\ud2f0(entities)\ub97c \uc800\uc7a5\ud558\ub294 \ubc29\ubc95, \uc5ec\ub7ec \ub808\ubca8\uc5d0\uc11c \ub9ac\ub4c0\uc11c\ub97c \uc791\uc131\ud558\ub294 \ubc29\ubc95 \ubc0f \ub9ac\ub4c0\uc11c\uc640 \ud568\uaed8 \uc140\ub809\ud130\ub97c \uc815\uc758\ud558\uc5ec \uc0c1\ud0dc \ubaa8\uc591\uc5d0 \ub300\ud55c \uc9c0\uc2dd\uc744 \ucea1\uc290\ud654\ud558\ub294 \ubc29\ubc95\uc744 \ubcf4\uc5ec\uc90d\ub2c8\ub2e4. \ub610\ud55c ",Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/fcomb/redux-logger"}),"Redux Logger"),"\ub97c \uc0ac\uc6a9\ud558\uc5ec \ub85c\uadf8\ub97c \ub0a8\uae30\uace0, ",Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/gaearon/redux-thunk"}),"Redux Thunk")," \ubbf8\ub4e4\uc6e8\uc5b4\ub97c \uc0ac\uc6a9\ud558\uc5ec \uc870\uac74\ubd80\ub85c \uc561\uc158\uc744 \ucc98\ub9ac(dispatch)\ud558\ub294 \ubc29\ubc95\uc744 \ubcf4\uc5ec\uc90d\ub2c8\ub2e4. ."),Object(c.b)("h2",{id:"tree-view"},"Tree View"),Object(c.b)("p",null,"\ub2e4\uc74c \uba85\ub839\uc5b4\ub85c ",Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/reactjs/redux/tree/master/examples/tree-view"}),"Tree View")," \uc608\uc81c\ub97c \uc2e4\ud589\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{}),"git clone https://github.com/reactjs/redux.git\n\ncd redux/examples/tree-view\nnpm install\nnpm start\n\nopen http://localhost:3000/\n")),Object(c.b)("p",null,"\uc774 \uc608\uc81c\ub294 \uae4a\uc774 \uc911\ucca9\ub41c \ud2b8\ub9ac\ubdf0\ub97c \ub80c\ub354\ub9c1\ud558\uace0 \uc815\uaddc\ud654\ub41c \ud615\uc2dd\uc73c\ub85c \uc0c1\ud0dc(state)\ub97c \ub098\ud0c0\ub0b4\ub294 \ubc29\ubc95\uc744 \ubcf4\uc5ec \uc90d\ub2c8\ub2e4. \uc774\ub97c \ud1b5\ud574 \ub9ac\ub4c0\uc11c\uc5d0\uc11c \uc27d\uac8c \uc5c5\ub370\uc774\ud2b8 \ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \ucee8\ud14c\uc774\ub108 \ucef4\ud3ec\ub10c\ud2b8\ub294 \uc790\uc2e0\ub4e4\uc774 \ub80c\ub354\ub9c1\ud558\ub294 \ud2b8\ub9ac \ub178\ub4dc\uc5d0\ub9cc \uad00\uc5ec\ud568\uc73c\ub85c\uc368 \uc6b0\uc218\ud55c \ub80c\ub354\ub9c1 \uc131\ub2a5\uc744 \uac16\uc744 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),Object(c.b)("p",null,"\uc774 \uc608\uc81c\ub294 \ud14c\uc2a4\ud2b8\uac00 \ud3ec\ud568\ub418\uc5b4 \uc788\uc2b5\ub2c8\ub2e4."),Object(c.b)("h2",{id:"\ube44\ub3d9\uae30async"},"\ube44\ub3d9\uae30(Async)"),Object(c.b)("p",null,"\ub2e4\uc74c \uba85\ub839\uc5b4\ub85c ",Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/rackt/redux/tree/master/examples/async"}),"\ube44\ub3d9\uae30(Async)")," \uc608\uc81c\ub97c \uc2e4\ud589\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{}),"git clone https://github.com/rackt/redux.git\n\ncd redux/examples/async\nnpm install\nnpm start\n\nopen http://localhost:3000/\n")),Object(c.b)("p",null,"\uc774 \uc608\uc81c\ub294 \ube44\ub3d9\uae30API \uc77d\uae30, \uc0ac\uc6a9\uc790 \uc785\ub825\uc5d0 \uc751\ub2f5\ud558\uc5ec \ub370\uc774\ud130 \uac00\uc838\uc624\uae30, \ub85c\ub529\uc911 \ud45c\uc2dc \ubcf4\uc5ec\uc8fc\uae30, \uc751\ub2f5\uc744 \uce90\uc2f1\ud558\uae30 \ubc0f \uce90\uc2dc \ubb34\ud6a8\ud654\ud558\uae30\ub97c \ud3ec\ud568\ud558\uace0 \uc788\uc2b5\ub2c8\ub2e4. \ub610\ud55c ",Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/gaearon/redux-thunk"}),"Redux Thunk")," \ubbf8\ub4e4\uc6e8\uc5b4\ub97c \uc0ac\uc6a9\ud558\uc5ec \ube44\ub3d9\uae30\uc758 \ubd80\uc791\uc6a9\uc744 \ucea1\uc290\ud654\ud569\ub2c8\ub2e4."),Object(c.b)("h2",{id:"\ubc94\uc6a9universal"},"\ubc94\uc6a9(Universal)"),Object(c.b)("p",null,"\ub2e4\uc74c \uba85\ub839\uc5b4\ub85c ",Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/rackt/redux/tree/master/examples/universal"}),"Universal")," \uc608\uc81c\ub97c \uc2e4\ud589\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{}),"git clone https://github.com/rackt/redux.git\n\ncd redux/examples/universal\nnpm install\nnpm start & npm run client\n\nopen http://localhost:3000/\n")),Object(c.b)("p",null,"\uc774\uac83\uc740 Redux\uc640 React\ub97c \uc0ac\uc6a9\ud55c ",Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"/recipes/server-rendering"}),"\uc11c\ubc84 \ub80c\ub354\ub9c1"),"\uc758 \uae30\ubcf8 \ub370\ubaa8\uc785\ub2c8\ub2e4. \ud074\ub77c\uc774\uc5b8\ud2b8 \uc800\uc7a5\uc18c\uac00 \uae30\uc874 \uc0c1\ud0dc\uc5d0\uc11c \ubd80\ud305\ud560 \uc218 \uc788\ub3c4\ub85d \uc11c\ubc84\uc5d0\uc11c \ucd08\uae30 \uc800\uc7a5\uc18c \uc0c1\ud0dc\ub97c \uc900\ube44\ud558\uace0 \ud074\ub77c\uc774\uc5b8\ud2b8\uc5d0 \uc804\ub2ec\ud558\ub294 \ubc29\ubc95\uc744 \ubcf4\uc5ec\uc90d\ub2c8\ub2e4.\n","[Universal]"," \uc608\uc81c\uc5d0\uc11c\ub294 \ub2e4\uc74c\uc744 \ub2e4\ub8f9\ub2c8\ub2e4."),Object(c.b)("h2",{id:"\ub9ac\uc5bc-\uc6d4\ub4dcreal-world"},"\ub9ac\uc5bc \uc6d4\ub4dc(Real World)"),Object(c.b)("p",null,"\ub2e4\uc74c \uba85\ub839\uc5b4\ub85c ",Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/rackt/redux/tree/master/examples/real-world"}),"\ub9ac\uc5bc \uc6d4\ub4dc(Read World)")," \uc608\uc81c\ub97c \uc2e4\ud589\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{}),"git clone https://github.com/rackt/redux.git\n\ncd redux/examples/real-world\nnpm install\nnpm start\n\nopen http://localhost:3000/\n")),Object(c.b)("p",null,"\uc774 \uc608\uc81c\ub294 \ucd5c\uc0c1\uae09 \uc608\uc81c\uc785\ub2c8\ub2e4. \ub514\uc790\uc778\ub3c4 \ubc18\uc601\ub418\uc5b4 \uc788\uc2b5\ub2c8\ub2e4. \uc774\uc81c\ub294 \ub4e4\uc5b4\uc628 \uc5d4\ud2f0\ud2f0(entities)\ub97c \ud45c\uc900\ud654 \ub41c \uce90\uc2dc\uc5d0 \uc720\uc9c0\ud558\uae30, API \ud638\ucd9c\uc744 \uc704\ud55c \uc0ac\uc6a9\uc790 \uc815\uc758 \ubbf8\ub4e4\uc6e8\uc5b4 \uad6c\ud604, \ubd80\ubd84\uc801\uc73c\ub85c \ub85c\ub4dc\ub41c \ub370\uc774\ud130 \ub80c\ub354\ub9c1, \ud398\uc774\uc9c0\ub124\uc774\uc158, \uc751\ub2f5 \uce90\uc2f1, \uc5d0\ub7ec\uba54\uc2dc\uc9c0 \ud45c\uc2dc \ubc0f \ub77c\uc6b0\ud305\uc5d0 \ub300\ud574 \ub2e4\ub8f9\ub2c8\ub2e4. \ub610\ud55c Redux DevTools\ub3c4 \ud3ec\ud568\ub429\ub2c8\ub2e4."),Object(c.b)("h2",{id:"\ub354-\ub9ce\uc740-\uc608\uc81c"},"\ub354 \ub9ce\uc740 \uc608\uc81c"),Object(c.b)("p",null,Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/xgrommx/awesome-redux"}),"Awesome Redux"),"\uc5d0\uc11c \ub354 \ub9ce\uc740 \uc608\uc81c\ub97c \ucc3e\uc544\ubcfc \uc218 \uc788\uc2b5\ub2c8\ub2e4."))}i.isMDXComponent=!0},191:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var b=a.a.createContext({}),i=function(e){var t=a.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):p({},t,{},e)),n},u=function(e){var t=i(e.components);return a.a.createElement(b.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},s=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,c=e.originalType,o=e.parentName,b=l(e,["components","mdxType","originalType","parentName"]),u=i(n),s=r,m=u["".concat(o,".").concat(s)]||u[s]||d[s]||c;return n?a.a.createElement(m,p({ref:t},b,{components:n})):a.a.createElement(m,p({ref:t},b))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=n.length,o=new Array(c);o[0]=s;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:r,o[1]=p;for(var b=2;b<c;b++)o[b]=n[b];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}s.displayName="MDXCreateElement"}}]);