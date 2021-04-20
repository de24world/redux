(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{158:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return b}));var a=n(0),i=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=i.a.createContext({}),d=function(e){var t=i.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=d(e.components);return i.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},h=i.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,o=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=d(n),h=a,b=p["".concat(o,".").concat(h)]||p[h]||u[h]||r;return n?i.a.createElement(b,c(c({ref:t},l),{},{components:n})):i.a.createElement(b,c({ref:t},l))}));function b(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=h;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var l=2;l<r;l++)o[l]=n[l];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},90:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return d}));var a=n(3),i=n(8),r=(n(0),n(158)),o={id:"middleware",title:"Middleware",description:"\uc5ed\uc0ac\uc640 \uc124\uacc4 > Middleware: How middleware enable adding additional capabilities to the Redux store",hide_title:!0},c={unversionedId:"understanding/history-and-design/middleware",id:"understanding/history-and-design/middleware",isDocsHomePage:!1,title:"Middleware",description:"\uc5ed\uc0ac\uc640 \uc124\uacc4 > Middleware: How middleware enable adding additional capabilities to the Redux store",source:"@site/i18n/ko/docusaurus-plugin-content-docs/current/understanding/history-and-design/middleware.md",slug:"/understanding/history-and-design/middleware",permalink:"/understanding/history-and-design/middleware",version:"current",sidebar:"docs",previous:{title:"\uae30\uc874 \uae30\uc220",permalink:"/understanding/history-and-design/prior-art"},next:{title:"FAQ \uc0c9\uc778",permalink:"/faq"}},s=[{value:"Understanding Middleware",id:"understanding-middleware",children:[{value:"Problem: Logging",id:"problem-logging",children:[]},{value:"Attempt #1: Logging Manually",id:"attempt-1-logging-manually",children:[]},{value:"Attempt #2: Wrapping Dispatch",id:"attempt-2-wrapping-dispatch",children:[]},{value:"Attempt #3: Monkeypatching Dispatch",id:"attempt-3-monkeypatching-dispatch",children:[]},{value:"Problem: Crash Reporting",id:"problem-crash-reporting",children:[]},{value:"Attempt #4: Hiding Monkeypatching",id:"attempt-4-hiding-monkeypatching",children:[]},{value:"Attempt #5: Removing Monkeypatching",id:"attempt-5-removing-monkeypatching",children:[]},{value:"Attempt #6: Na\xefvely Applying the Middleware",id:"attempt-6-na\xefvely-applying-the-middleware",children:[]},{value:"The Final Approach",id:"the-final-approach",children:[]}]},{value:"Seven Examples",id:"seven-examples",children:[]}],l={toc:s};function d(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h1",{id:"middleware"},"Middleware"),Object(r.b)("p",null,"You've seen middleware in action in the ",Object(r.b)("a",{parentName:"p",href:"/tutorials/fundamentals/part-4-store#middleware"},'"Redux \uae30\ubc18" \ud29c\ud1a0\ub9ac\uc5bc'),". If you've used server-side libraries like ",Object(r.b)("a",{parentName:"p",href:"https://expressjs.com/"},"Express")," and ",Object(r.b)("a",{parentName:"p",href:"https://koajs.com/"},"Koa"),", you were also probably already familiar with the concept of ",Object(r.b)("em",{parentName:"p"},"middleware"),". In these frameworks, middleware is some code you can put between the framework receiving a request, and the framework generating a response. For example, Express or Koa middleware may add CORS headers, logging, compression, and more. The best feature of middleware is that it's composable in a chain. You can use multiple independent third-party middleware in a single project."),Object(r.b)("p",null,"Redux middleware solves different problems than Express or Koa middleware, but in a conceptually similar way. ",Object(r.b)("strong",{parentName:"p"},"It provides a third-party extension point between dispatching an action, and the moment it reaches the reducer.")," People use Redux middleware for logging, crash reporting, talking to an asynchronous API, routing, and more."),Object(r.b)("p",null,"This article is divided into an in-depth intro to help you grok the concept, and ",Object(r.b)("a",{parentName:"p",href:"#seven-examples"},"a few practical examples")," to show the power of middleware at the very end. You may find it helpful to switch back and forth between them, as you flip between feeling bored and inspired."),Object(r.b)("h2",{id:"understanding-middleware"},"Understanding Middleware"),Object(r.b)("p",null,"While middleware can be used for a variety of things, including asynchronous API calls, it's really important that you understand where it comes from. We'll guide you through the thought process leading to middleware, by using logging and crash reporting as examples."),Object(r.b)("h3",{id:"problem-logging"},"Problem: Logging"),Object(r.b)("p",null,"One of the benefits of Redux is that it makes state changes predictable and transparent. Every time an action is dispatched, the new state is computed and saved. The state cannot change by itself, it can only change as a consequence of a specific action."),Object(r.b)("p",null,"Wouldn't it be nice if we logged every action that happens in the app, together with the state computed after it? When something goes wrong, we can look back at our log, and figure out which action corrupted the state."),Object(r.b)("img",{src:"https://i.imgur.com/BjGBlES.png",width:"70%"}),Object(r.b)("p",null,"How do we approach this with Redux?"),Object(r.b)("h3",{id:"attempt-1-logging-manually"},"Attempt #1: Logging Manually"),Object(r.b)("p",null,"The most na\xefve solution is just to log the action and the next state yourself every time you call ",Object(r.b)("a",{parentName:"p",href:"/api/store#dispatchaction"},Object(r.b)("inlineCode",{parentName:"a"},"store.dispatch(action)")),". It's not really a solution, but just a first step towards understanding the problem."),Object(r.b)("blockquote",null,Object(r.b)("h5",{parentName:"blockquote",id:"note"},"Note"),Object(r.b)("p",{parentName:"blockquote"},"If you're using ",Object(r.b)("a",{parentName:"p",href:"https://github.com/reduxjs/react-redux"},"react-redux")," or similar bindings, you likely won't have direct access to the store instance in your components. For the next few paragraphs, just assume you pass the store down explicitly.")),Object(r.b)("p",null,"Say, you call this when creating a todo:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-js"},"store.dispatch(addTodo('Use Redux'))\n")),Object(r.b)("p",null,"To log the action and state, you can change it to something like this:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-js"},"const action = addTodo('Use Redux')\n\nconsole.log('dispatching', action)\nstore.dispatch(action)\nconsole.log('next state', store.getState())\n")),Object(r.b)("p",null,"This produces the desired effect, but you wouldn't want to do it every time."),Object(r.b)("h3",{id:"attempt-2-wrapping-dispatch"},"Attempt #2: Wrapping Dispatch"),Object(r.b)("p",null,"You can extract logging into a function:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-js"},"function dispatchAndLog(store, action) {\n  console.log('dispatching', action)\n  store.dispatch(action)\n  console.log('next state', store.getState())\n}\n")),Object(r.b)("p",null,"You can then use it everywhere instead of ",Object(r.b)("inlineCode",{parentName:"p"},"store.dispatch()"),":"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-js"},"dispatchAndLog(store, addTodo('Use Redux'))\n")),Object(r.b)("p",null,"We could end this here, but it's not very convenient to import a special function every time."),Object(r.b)("h3",{id:"attempt-3-monkeypatching-dispatch"},"Attempt #3: Monkeypatching Dispatch"),Object(r.b)("p",null,"What if we just replace the ",Object(r.b)("inlineCode",{parentName:"p"},"dispatch")," function on the store instance? The Redux store is a plain object with ",Object(r.b)("a",{parentName:"p",href:"/api/store"},"a few methods"),", and we're writing JavaScript, so we can just monkeypatch the ",Object(r.b)("inlineCode",{parentName:"p"},"dispatch")," implementation:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-js"},"const next = store.dispatch\nstore.dispatch = function dispatchAndLog(action) {\n  console.log('dispatching', action)\n  let result = next(action)\n  console.log('next state', store.getState())\n  return result\n}\n")),Object(r.b)("p",null,"This is already closer to what we want! No matter where we dispatch an action, it is guaranteed to be logged. Monkeypatching never feels right, but we can live with this for now."),Object(r.b)("h3",{id:"problem-crash-reporting"},"Problem: Crash Reporting"),Object(r.b)("p",null,"What if we want to apply ",Object(r.b)("strong",{parentName:"p"},"more than one")," such transformation to ",Object(r.b)("inlineCode",{parentName:"p"},"dispatch"),"?"),Object(r.b)("p",null,"A different useful transformation that comes to my mind is reporting JavaScript errors in production. The global ",Object(r.b)("inlineCode",{parentName:"p"},"window.onerror")," event is not reliable because it doesn't provide stack information in some older browsers, which is crucial to understand why an error is happening."),Object(r.b)("p",null,"Wouldn't it be useful if, any time an error is thrown as a result of dispatching an action, we would send it to a crash reporting service like ",Object(r.b)("a",{parentName:"p",href:"https://getsentry.com/welcome/"},"Sentry")," with the stack trace, the action that caused the error, and the current state? This way it's much easier to reproduce the error in development."),Object(r.b)("p",null,"However, it is important that we keep logging and crash reporting separate. Ideally we want them to be different modules, potentially in different packages. Otherwise we can't have an ecosystem of such utilities. (Hint: we're slowly getting to what middleware is!)"),Object(r.b)("p",null,"If logging and crash reporting are separate utilities, they might look like this:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-js"},"function patchStoreToAddLogging(store) {\n  const next = store.dispatch\n  store.dispatch = function dispatchAndLog(action) {\n    console.log('dispatching', action)\n    let result = next(action)\n    console.log('next state', store.getState())\n    return result\n  }\n}\n\nfunction patchStoreToAddCrashReporting(store) {\n  const next = store.dispatch\n  store.dispatch = function dispatchAndReportErrors(action) {\n    try {\n      return next(action)\n    } catch (err) {\n      console.error('Caught an exception!', err)\n      Raven.captureException(err, {\n        extra: {\n          action,\n          state: store.getState()\n        }\n      })\n      throw err\n    }\n  }\n}\n")),Object(r.b)("p",null,"If these functions are published as separate modules, we can later use them to patch our store:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-js"},"patchStoreToAddLogging(store)\npatchStoreToAddCrashReporting(store)\n")),Object(r.b)("p",null,"Still, this isn't nice."),Object(r.b)("h3",{id:"attempt-4-hiding-monkeypatching"},"Attempt #4: Hiding Monkeypatching"),Object(r.b)("p",null,"Monkeypatching is a hack. \u201cReplace any method you like\u201d, what kind of API is that? Let's figure out the essence of it instead. Previously, our functions replaced ",Object(r.b)("inlineCode",{parentName:"p"},"store.dispatch"),". What if they ",Object(r.b)("em",{parentName:"p"},"returned")," the new ",Object(r.b)("inlineCode",{parentName:"p"},"dispatch")," function instead?"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-js"},"function logger(store) {\n  const next = store.dispatch\n\n  // Previously:\n  // store.dispatch = function dispatchAndLog(action) {\n\n  return function dispatchAndLog(action) {\n    console.log('dispatching', action)\n    let result = next(action)\n    console.log('next state', store.getState())\n    return result\n  }\n}\n")),Object(r.b)("p",null,"We could provide a helper inside Redux that would apply the actual monkeypatching as an implementation detail:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-js"},"function applyMiddlewareByMonkeypatching(store, middlewares) {\n  middlewares = middlewares.slice()\n  middlewares.reverse()\n\n  // Transform dispatch function with each middleware.\n  middlewares.forEach(middleware => (store.dispatch = middleware(store)))\n}\n")),Object(r.b)("p",null,"We could use it to apply multiple middleware like this:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-js"},"applyMiddlewareByMonkeypatching(store, [logger, crashReporter])\n")),Object(r.b)("p",null,"However, it is still monkeypatching.\nThe fact that we hide it inside the library doesn't alter this fact."),Object(r.b)("h3",{id:"attempt-5-removing-monkeypatching"},"Attempt #5: Removing Monkeypatching"),Object(r.b)("p",null,"Why do we even overwrite ",Object(r.b)("inlineCode",{parentName:"p"},"dispatch"),"? Of course, to be able to call it later, but there's also another reason: so that every middleware can access (and call) the previously wrapped ",Object(r.b)("inlineCode",{parentName:"p"},"store.dispatch"),":"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-js"},"function logger(store) {\n  // Must point to the function returned by the previous middleware:\n  const next = store.dispatch\n\n  return function dispatchAndLog(action) {\n    console.log('dispatching', action)\n    let result = next(action)\n    console.log('next state', store.getState())\n    return result\n  }\n}\n")),Object(r.b)("p",null,"It is essential to chaining middleware!"),Object(r.b)("p",null,"If ",Object(r.b)("inlineCode",{parentName:"p"},"applyMiddlewareByMonkeypatching")," doesn't assign ",Object(r.b)("inlineCode",{parentName:"p"},"store.dispatch")," immediately after processing the first middleware, ",Object(r.b)("inlineCode",{parentName:"p"},"store.dispatch")," will keep pointing to the original ",Object(r.b)("inlineCode",{parentName:"p"},"dispatch")," function. Then the second middleware will also be bound to the original ",Object(r.b)("inlineCode",{parentName:"p"},"dispatch")," function."),Object(r.b)("p",null,"But there's also a different way to enable chaining. The middleware could accept the ",Object(r.b)("inlineCode",{parentName:"p"},"next()")," dispatch function as a parameter instead of reading it from the ",Object(r.b)("inlineCode",{parentName:"p"},"store")," instance."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-js"},"function logger(store) {\n  return function wrapDispatchToAddLogging(next) {\n    return function dispatchAndLog(action) {\n      console.log('dispatching', action)\n      let result = next(action)\n      console.log('next state', store.getState())\n      return result\n    }\n  }\n}\n")),Object(r.b)("p",null,"It's a ",Object(r.b)("a",{parentName:"p",href:"https://knowyourmeme.com/memes/we-need-to-go-deeper"},"\u201cwe need to go deeper\u201d")," kind of moment, so it might take a while for this to make sense. The function cascade feels intimidating. ES6 arrow functions make this ",Object(r.b)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Currying"},"currying")," easier on eyes:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-js"},"const logger = store => next => action => {\n  console.log('dispatching', action)\n  let result = next(action)\n  console.log('next state', store.getState())\n  return result\n}\n\nconst crashReporter = store => next => action => {\n  try {\n    return next(action)\n  } catch (err) {\n    console.error('Caught an exception!', err)\n    Raven.captureException(err, {\n      extra: {\n        action,\n        state: store.getState()\n      }\n    })\n    throw err\n  }\n}\n")),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"This is exactly what Redux middleware looks like.")),Object(r.b)("p",null,"Now middleware takes the ",Object(r.b)("inlineCode",{parentName:"p"},"next()")," dispatch function, and returns a dispatch function, which in turn serves as ",Object(r.b)("inlineCode",{parentName:"p"},"next()")," to the middleware to the left, and so on. It's still useful to have access to some store methods like ",Object(r.b)("inlineCode",{parentName:"p"},"getState()"),", so ",Object(r.b)("inlineCode",{parentName:"p"},"store")," stays available as the top-level argument."),Object(r.b)("h3",{id:"attempt-6-na\xefvely-applying-the-middleware"},"Attempt #6: Na\xefvely Applying the Middleware"),Object(r.b)("p",null,"Instead of ",Object(r.b)("inlineCode",{parentName:"p"},"applyMiddlewareByMonkeypatching()"),", we could write ",Object(r.b)("inlineCode",{parentName:"p"},"applyMiddleware()")," that first obtains the final, fully wrapped ",Object(r.b)("inlineCode",{parentName:"p"},"dispatch()")," function, and returns a copy of the store using it:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-js"},"// Warning: Na\xefve implementation!\n// That's *not* Redux API.\nfunction applyMiddleware(store, middlewares) {\n  middlewares = middlewares.slice()\n  middlewares.reverse()\n  let dispatch = store.dispatch\n  middlewares.forEach(middleware => (dispatch = middleware(store)(dispatch)))\n  return Object.assign({}, store, { dispatch })\n}\n")),Object(r.b)("p",null,"The implementation of ",Object(r.b)("a",{parentName:"p",href:"/api/applymiddleware"},Object(r.b)("inlineCode",{parentName:"a"},"applyMiddleware()"))," that ships with Redux is similar, but ",Object(r.b)("strong",{parentName:"p"},"different in three important aspects"),":"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"It only exposes a subset of the ",Object(r.b)("a",{parentName:"p",href:"/api/store"},"store API")," to the middleware: ",Object(r.b)("a",{parentName:"p",href:"/api/store#dispatchaction"},Object(r.b)("inlineCode",{parentName:"a"},"dispatch(action)"))," and ",Object(r.b)("a",{parentName:"p",href:"/api/store#getState"},Object(r.b)("inlineCode",{parentName:"a"},"getState()")),".")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"It does a bit of trickery to make sure that if you call ",Object(r.b)("inlineCode",{parentName:"p"},"store.dispatch(action)")," from your middleware instead of ",Object(r.b)("inlineCode",{parentName:"p"},"next(action)"),", the action will actually travel the whole middleware chain again, including the current middleware. ",Object(r.b)("a",{parentName:"p",href:"/tutorials/fundamentals/part-6-async-logic"},"This is useful for asynchronous middleware"),". There is one caveat when calling ",Object(r.b)("inlineCode",{parentName:"p"},"dispatch")," during setup, described below.")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"To ensure that you may only apply middleware once, it operates on ",Object(r.b)("inlineCode",{parentName:"p"},"createStore()")," rather than on ",Object(r.b)("inlineCode",{parentName:"p"},"store")," itself. Instead of ",Object(r.b)("inlineCode",{parentName:"p"},"(store, middlewares) => store"),", its signature is ",Object(r.b)("inlineCode",{parentName:"p"},"(...middlewares) => (createStore) => createStore"),"."))),Object(r.b)("p",null,"Because it is cumbersome to apply functions to ",Object(r.b)("inlineCode",{parentName:"p"},"createStore()")," before using it, ",Object(r.b)("inlineCode",{parentName:"p"},"createStore()")," accepts an optional last argument to specify such functions."),Object(r.b)("h4",{id:"caveat-dispatching-during-setup"},"Caveat: Dispatching During Setup"),Object(r.b)("p",null,"While ",Object(r.b)("inlineCode",{parentName:"p"},"applyMiddleware")," executes and sets up your middleware, the ",Object(r.b)("inlineCode",{parentName:"p"},"store.dispatch")," function will point to the vanilla version provided by ",Object(r.b)("inlineCode",{parentName:"p"},"createStore"),". Dispatching would result in no other middleware being applied. If you are expecting an interaction with another middleware during setup, you will probably be disappointed. Because of this unexpected behavior, ",Object(r.b)("inlineCode",{parentName:"p"},"applyMiddleware")," will throw an error if you try to dispatch an action before the set up completes. Instead, you should either communicate directly with that other middleware via a common object (for an API-calling middleware, this may be your API client object) or waiting until after the middleware is constructed with a callback."),Object(r.b)("h3",{id:"the-final-approach"},"The Final Approach"),Object(r.b)("p",null,"Given this middleware we just wrote:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-js"},"const logger = store => next => action => {\n  console.log('dispatching', action)\n  let result = next(action)\n  console.log('next state', store.getState())\n  return result\n}\n\nconst crashReporter = store => next => action => {\n  try {\n    return next(action)\n  } catch (err) {\n    console.error('Caught an exception!', err)\n    Raven.captureException(err, {\n      extra: {\n        action,\n        state: store.getState()\n      }\n    })\n    throw err\n  }\n}\n")),Object(r.b)("p",null,"Here's how to apply it to a Redux store:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-js"},"import { createStore, combineReducers, applyMiddleware } from 'redux'\n\nconst todoApp = combineReducers(reducers)\nconst store = createStore(\n  todoApp,\n  // applyMiddleware() tells createStore() how to handle middleware\n  applyMiddleware(logger, crashReporter)\n)\n")),Object(r.b)("p",null,"That's it! Now any actions dispatched to the store instance will flow through ",Object(r.b)("inlineCode",{parentName:"p"},"logger")," and ",Object(r.b)("inlineCode",{parentName:"p"},"crashReporter"),":"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-js"},"// Will flow through both logger and crashReporter middleware!\nstore.dispatch(addTodo('Use Redux'))\n")),Object(r.b)("h2",{id:"seven-examples"},"Seven Examples"),Object(r.b)("p",null,"If your head boiled from reading the above section, imagine what it was like to write it. This section is meant to be a relaxation for you and me, and will help get your gears turning."),Object(r.b)("p",null,"Each function below is a valid Redux middleware. They are not equally useful, but at least they are equally fun."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-js"},"/**\n * Logs all actions and states after they are dispatched.\n */\nconst logger = store => next => action => {\n  console.group(action.type)\n  console.info('dispatching', action)\n  let result = next(action)\n  console.log('next state', store.getState())\n  console.groupEnd()\n  return result\n}\n\n/**\n * Sends crash reports as state is updated and listeners are notified.\n */\nconst crashReporter = store => next => action => {\n  try {\n    return next(action)\n  } catch (err) {\n    console.error('Caught an exception!', err)\n    Raven.captureException(err, {\n      extra: {\n        action,\n        state: store.getState()\n      }\n    })\n    throw err\n  }\n}\n\n/**\n * Schedules actions with { meta: { delay: N } } to be delayed by N milliseconds.\n * Makes `dispatch` return a function to cancel the timeout in this case.\n */\nconst timeoutScheduler = store => next => action => {\n  if (!action.meta || !action.meta.delay) {\n    return next(action)\n  }\n\n  const timeoutId = setTimeout(() => next(action), action.meta.delay)\n\n  return function cancel() {\n    clearTimeout(timeoutId)\n  }\n}\n\n/**\n * Schedules actions with { meta: { raf: true } } to be dispatched inside a rAF loop\n * frame.  Makes `dispatch` return a function to remove the action from the queue in\n * this case.\n */\nconst rafScheduler = store => next => {\n  const queuedActions = []\n  let frame = null\n\n  function loop() {\n    frame = null\n    try {\n      if (queuedActions.length) {\n        next(queuedActions.shift())\n      }\n    } finally {\n      maybeRaf()\n    }\n  }\n\n  function maybeRaf() {\n    if (queuedActions.length && !frame) {\n      frame = requestAnimationFrame(loop)\n    }\n  }\n\n  return action => {\n    if (!action.meta || !action.meta.raf) {\n      return next(action)\n    }\n\n    queuedActions.push(action)\n    maybeRaf()\n\n    return function cancel() {\n      queuedActions = queuedActions.filter(a => a !== action)\n    }\n  }\n}\n\n/**\n * Lets you dispatch promises in addition to actions.\n * If the promise is resolved, its result will be dispatched as an action.\n * The promise is returned from `dispatch` so the caller may handle rejection.\n */\nconst vanillaPromise = store => next => action => {\n  if (typeof action.then !== 'function') {\n    return next(action)\n  }\n\n  return Promise.resolve(action).then(store.dispatch)\n}\n\n/**\n * Lets you dispatch special actions with a { promise } field.\n *\n * This middleware will turn them into a single action at the beginning,\n * and a single success (or failure) action when the `promise` resolves.\n *\n * For convenience, `dispatch` will return the promise so the caller can wait.\n */\nconst readyStatePromise = store => next => action => {\n  if (!action.promise) {\n    return next(action)\n  }\n\n  function makeAction(ready, data) {\n    const newAction = Object.assign({}, action, { ready }, data)\n    delete newAction.promise\n    return newAction\n  }\n\n  next(makeAction(false))\n  return action.promise.then(\n    result => next(makeAction(true, { result })),\n    error => next(makeAction(true, { error }))\n  )\n}\n\n/**\n * Lets you dispatch a function instead of an action.\n * This function will receive `dispatch` and `getState` as arguments.\n *\n * Useful for early exits (conditions over `getState()`), as well\n * as for async control flow (it can `dispatch()` something else).\n *\n * `dispatch` will return the return value of the dispatched function.\n */\nconst thunk = store => next => action =>\n  typeof action === 'function'\n    ? action(store.dispatch, store.getState)\n    : next(action)\n\n// You can use all of them! (It doesn't mean you should.)\nconst todoApp = combineReducers(reducers)\nconst store = createStore(\n  todoApp,\n  applyMiddleware(\n    rafScheduler,\n    timeoutScheduler,\n    thunk,\n    vanillaPromise,\n    readyStatePromise,\n    logger,\n    crashReporter\n  )\n)\n")))}d.isMDXComponent=!0}}]);