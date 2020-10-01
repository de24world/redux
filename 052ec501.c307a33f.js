(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{149:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return h}));var n=a(0),r=a.n(n);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=r.a.createContext({}),b=function(e){var t=r.a.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},p=function(e){var t=b(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=b(a),d=n,h=p["".concat(o,".").concat(d)]||p[d]||u[d]||i;return a?r.a.createElement(h,s(s({ref:t},l),{},{components:a})):r.a.createElement(h,s({ref:t},l))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:n,o[1]=s;for(var l=2;l<i;l++)o[l]=a[l];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"},58:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"metadata",(function(){return s})),a.d(t,"rightToc",(function(){return c})),a.d(t,"default",(function(){return b}));var n=a(2),r=a(6),i=(a(0),a(149)),o={id:"store-setup",title:"Store Setup",hide_title:!0},s={unversionedId:"faq/store-setup",id:"faq/store-setup",isDocsHomePage:!1,title:"Store Setup",description:"Redux FAQ: Store Setup",source:"@site/../docs_kr/faq/StoreSetup.md",slug:"/faq/store-setup",permalink:"/faq/store-setup",version:"current",sidebar:"docs",previous:{title:"Organizing State",permalink:"/faq/organizing-state"},next:{title:"Actions",permalink:"/faq/actions"}},c=[{value:"Table of Contents",id:"table-of-contents",children:[]},{value:"Store Setup",id:"store-setup",children:[{value:"Can or should I create multiple stores? Can I import my store directly, and use it in components myself?",id:"can-or-should-i-create-multiple-stores-can-i-import-my-store-directly-and-use-it-in-components-myself",children:[]},{value:"Is it OK to have more than one middleware chain in my store enhancer? What is the difference between <code>next</code> and <code>dispatch</code> in a middleware function?",id:"is-it-ok-to-have-more-than-one-middleware-chain-in-my-store-enhancer-what-is-the-difference-between-next-and-dispatch-in-a-middleware-function",children:[]},{value:"How do I subscribe to only a portion of the state? Can I get the dispatched action as part of the subscription?",id:"how-do-i-subscribe-to-only-a-portion-of-the-state-can-i-get-the-dispatched-action-as-part-of-the-subscription",children:[]}]}],l={rightToc:c};function b(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},l,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h1",{id:"redux-faq-store-setup"},"Redux FAQ: Store Setup"),Object(i.b)("h2",{id:"table-of-contents"},"Table of Contents"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"#can-or-should-i-create-multiple-stores-can-i-import-my-store-directly-and-use-it-in-components-myself"}),"Can or should I create multiple stores? Can I import my store directly, and use it in components myself?")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"#is-it-ok-to-have-more-than-one-middleware-chain-in-my-store-enhancer-what-is-the-difference-between-next-and-dispatch-in-a-middleware-function"}),"Is it OK to have more than one middleware chain in my store enhancer? What is the difference between next and dispatch in a middleware function?")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"#how-do-i-subscribe-to-only-a-portion-of-the-state-can-i-get-the-dispatched-action-as-part-of-the-subscription"}),"How do I subscribe to only a portion of the state? Can I get the dispatched action as part of the subscription?"))),Object(i.b)("h2",{id:"store-setup"},"Store Setup"),Object(i.b)("h3",{id:"can-or-should-i-create-multiple-stores-can-i-import-my-store-directly-and-use-it-in-components-myself"},"Can or should I create multiple stores? Can I import my store directly, and use it in components myself?"),Object(i.b)("p",null,"The original Flux pattern describes having multiple \u201cstores\u201d in an app, each one holding a different area of domain data. This can introduce issues such as needing to have one store \u201c",Object(i.b)("inlineCode",{parentName:"p"},"waitFor"),"\u201d another store to update. This is not necessary in Redux because the separation between data domains is already achieved by splitting a single reducer into smaller reducers."),Object(i.b)("p",null,"As with several other questions, it is ",Object(i.b)("em",{parentName:"p"},"possible")," to create multiple distinct Redux stores in a page, but the intended pattern is to have only a single store. Having a single store enables using the Redux DevTools, makes persisting and rehydrating data simpler, and simplifies the subscription logic."),Object(i.b)("p",null,"Some valid reasons for using multiple stores in Redux might include:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Solving a performance issue caused by too frequent updates of some part of the state, when confirmed by profiling the app."),Object(i.b)("li",{parentName:"ul"},"Isolating a Redux app as a component in a bigger application, in which case you might want to create a store per root component instance.")),Object(i.b)("p",null,"However, creating new stores shouldn't be your first instinct, especially if you come from a Flux background. Try reducer composition first, and only use multiple stores if it doesn't solve your problem."),Object(i.b)("p",null,"Similarly, while you ",Object(i.b)("em",{parentName:"p"},"can")," reference your store instance by importing it directly, this is not a recommended pattern in Redux. If you create a store instance and export it from a module, it will become a singleton. This means it will be harder to isolate a Redux app as a component of a larger app, if this is ever necessary, or to enable server rendering, because on the server you want to create separate store instances for every request."),Object(i.b)("p",null,"With ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/reduxjs/react-redux"}),"React Redux"),", the wrapper classes generated by the ",Object(i.b)("inlineCode",{parentName:"p"},"connect()")," function do actually look for ",Object(i.b)("inlineCode",{parentName:"p"},"props.store")," if it exists, but it's best if you wrap your root component in ",Object(i.b)("inlineCode",{parentName:"p"},"<Provider store={store}>")," and let React Redux worry about passing the store down. This way components don't need to worry about importing a store module, and isolating a Redux app or enabling server rendering is much easier to do later."),Object(i.b)("h4",{id:"further-information"},"Further information"),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Documentation")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"/api/store"}),"API: Store"))),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Discussions")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/reduxjs/redux/issues/1436"}),"#1346: Is it bad practice to just have a 'stores' directory?")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"http://stackoverflow.com/questions/33619775/redux-multiple-stores-why-not"}),"Stack Overflow: Redux multiple stores, why not?")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"http://stackoverflow.com/questions/35667249/accessing-redux-state-in-an-action-creator"}),"Stack Overflow: Accessing Redux state in an action creator")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"https://gist.github.com/gaearon/eeee2f619620ab7b55673a4ee2bf8400"}),"Gist: Breaking out of Redux paradigm to isolate apps"))),Object(i.b)("h3",{id:"is-it-ok-to-have-more-than-one-middleware-chain-in-my-store-enhancer-what-is-the-difference-between-next-and-dispatch-in-a-middleware-function"},"Is it OK to have more than one middleware chain in my store enhancer? What is the difference between ",Object(i.b)("inlineCode",{parentName:"h3"},"next")," and ",Object(i.b)("inlineCode",{parentName:"h3"},"dispatch")," in a middleware function?"),Object(i.b)("p",null,"Redux middleware act like a linked list. Each middleware function can either call ",Object(i.b)("inlineCode",{parentName:"p"},"next(action)")," to pass an action along to the next middleware in line, call ",Object(i.b)("inlineCode",{parentName:"p"},"dispatch(action)")," to restart the processing at the beginning of the list, or do nothing at all to stop the action from being processed further."),Object(i.b)("p",null,"This chain of middleware is defined by the arguments passed to the ",Object(i.b)("inlineCode",{parentName:"p"},"applyMiddleware")," function used when creating a store. Defining multiple chains will not work correctly, as they would have distinctly different ",Object(i.b)("inlineCode",{parentName:"p"},"dispatch")," references and the different chains would effectively be disconnected."),Object(i.b)("h4",{id:"further-information-1"},"Further information"),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Documentation")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"/advanced/middleware"}),"Advanced: Middleware")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"/api/applymiddleware"}),"API: applyMiddleware"))),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Discussions")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/reduxjs/redux/issues/1051"}),"#1051: Shortcomings of the current applyMiddleware and composing createStore")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"https://medium.com/@meagle/understanding-87566abcfb7a"}),"Understanding Redux Middleware")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"http://blog.krawaller.se/posts/exploring-redux-middleware/"}),"Exploring Redux Middleware"))),Object(i.b)("h3",{id:"how-do-i-subscribe-to-only-a-portion-of-the-state-can-i-get-the-dispatched-action-as-part-of-the-subscription"},"How do I subscribe to only a portion of the state? Can I get the dispatched action as part of the subscription?"),Object(i.b)("p",null,"Redux provides a single ",Object(i.b)("inlineCode",{parentName:"p"},"store.subscribe")," method for notifying listeners that the store has updated. Listener callbacks do not receive the current state as an argument\u2014it is simply an indication that ",Object(i.b)("em",{parentName:"p"},"something")," has changed. The subscriber logic can then call ",Object(i.b)("inlineCode",{parentName:"p"},"getState()")," to get the current state value."),Object(i.b)("p",null,"This API is intended as a low-level primitive with no dependencies or complications, and can be used to build higher-level subscription logic. UI bindings such as React Redux can create a subscription for each connected component. It is also possible to write functions that can intelligently compare the old state vs the new state, and execute additional logic if certain pieces have changed. Examples include ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/jprichardson/redux-watch"}),"redux-watch"),", ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/ashaffer/redux-subscribe"}),"redux-subscribe")," and ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/ivantsov/redux-subscriber"}),"redux-subscriber")," which offer different approaches to specifying subscriptions and handling changes."),Object(i.b)("p",null,"The new state is not passed to the listeners in order to simplify implementing store enhancers such as the Redux DevTools. In addition, subscribers are intended to react to the state value itself, not the action. Middleware can be used if the action is important and needs to be handled specifically."),Object(i.b)("h4",{id:"further-information-2"},"Further information"),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Documentation")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"/basics/store"}),"Basics: Store")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"/api/store"}),"API: Store"))),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Discussions")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/reduxjs/redux/issues/303"}),"#303: subscribe API with state as an argument")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/reduxjs/redux/issues/580"}),"#580: Is it possible to get action and state in store.subscribe?")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/reduxjs/redux/issues/922"}),"#922: Proposal: add subscribe to middleware API")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/reduxjs/redux/issues/1057"}),"#1057: subscribe listener can get action param?")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/reduxjs/redux/issues/1300"}),"#1300: Redux is great but major feature is missing"))),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Libraries")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/markerikson/redux-ecosystem-links/blob/master/store.md#store-change-subscriptions"}),"Redux Addons Catalog: Store Change Subscriptions"))))}b.isMDXComponent=!0}}]);