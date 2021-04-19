(window.webpackJsonp=window.webpackJsonp||[]).push([[78],{153:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return d}));var a=n(3),r=n(8),o=(n(0),n(158)),i={id:"implementing-undo-history",title:"Implementing Undo History",hide_title:!0},s={unversionedId:"recipes/implementing-undo-history",id:"recipes/implementing-undo-history",isDocsHomePage:!1,title:"Implementing Undo History",description:"Implementing Undo History",source:"@site/i18n/ko/docusaurus-plugin-content-docs/current/recipes/ImplementingUndoHistory.md",slug:"/recipes/implementing-undo-history",permalink:"/recipes/implementing-undo-history",version:"current",sidebar:"docs",previous:{title:"Computing Derived Data",permalink:"/recipes/computing-derived-data"},next:{title:"Isolating Redux Sub-Apps",permalink:"/recipes/isolating-redux-sub-apps"}},c=[{value:"Understanding Undo History",id:"understanding-undo-history",children:[{value:"Designing the State Shape",id:"designing-the-state-shape",children:[]},{value:"Designing the Algorithm",id:"designing-the-algorithm",children:[]},{value:"First Attempt: Writing a Reducer",id:"first-attempt-writing-a-reducer",children:[]},{value:"Meet Reducer Enhancers",id:"meet-reducer-enhancers",children:[]},{value:"Second Attempt: Writing a Reducer Enhancer",id:"second-attempt-writing-a-reducer-enhancer",children:[]}]},{value:"Using Redux Undo",id:"using-redux-undo",children:[{value:"Installation",id:"installation",children:[]},{value:"Wrapping the Reducer",id:"wrapping-the-reducer",children:[]},{value:"Updating the Selectors",id:"updating-the-selectors",children:[]},{value:"Adding the Buttons",id:"adding-the-buttons",children:[]}]}],l={toc:c};function d(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h1",{id:"implementing-undo-history"},"Implementing Undo History"),Object(o.b)("p",null,":::Prerequisites"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Completion of the ",Object(o.b)("a",{parentName:"li",href:"/tutorials/fundamentals/part-1-overview"},'"Redux \uae30\ubc18" \ud29c\ud1a0\ub9ac\uc5bc')),Object(o.b)("li",{parentName:"ul"},"Understanding of ",Object(o.b)("a",{parentName:"li",href:"/tutorials/fundamentals/part-3-state-actions-reducers#splitting-reducers"},'"reducer composition"'))),Object(o.b)("p",null,":::"),Object(o.b)("p",null,"Building an Undo and Redo functionality into an app has traditionally required conscious effort from the developer. It is not an easy problem with classical MVC frameworks because you need to keep track of every past state by cloning all relevant models. In addition, you need to be mindful of the undo stack because the user-initiated changes should be undoable."),Object(o.b)("p",null,"This means that implementing Undo and Redo in an MVC application usually forces you to rewrite parts of your application to use a specific data mutation pattern like ",Object(o.b)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Command_pattern"},"Command"),"."),Object(o.b)("p",null,"With Redux, however, implementing undo history is a breeze. There are three reasons for this:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"There are no multiple models\u2014just a state subtree that you want to keep track of."),Object(o.b)("li",{parentName:"ul"},"The state is already immutable, and mutations are already described as discrete actions, which is close to the undo stack mental model."),Object(o.b)("li",{parentName:"ul"},"The reducer ",Object(o.b)("inlineCode",{parentName:"li"},"(state, action) => state")," signature makes it natural to implement generic \u201creducer enhancers\u201d or \u201chigher order reducers\u201d. They are functions that take your reducer and enhance it with some additional functionality while preserving its signature. Undo history is exactly such a case.")),Object(o.b)("p",null,"In the first part of this recipe, we will explain the underlying concepts that make Undo and Redo possible to implement in a generic way."),Object(o.b)("p",null,"In the second part of this recipe, we will show how to use ",Object(o.b)("a",{parentName:"p",href:"https://github.com/omnidan/redux-undo"},"Redux Undo")," package that provides this functionality out of the box."),Object(o.b)("p",null,Object(o.b)("a",{parentName:"p",href:"https://twitter.com/dan_abramov/status/647038407286390784"},Object(o.b)("img",{parentName:"a",src:"https://i.imgur.com/lvDFHkH.gif",alt:"demo of todos-with-undo"}))),Object(o.b)("h2",{id:"understanding-undo-history"},"Understanding Undo History"),Object(o.b)("h3",{id:"designing-the-state-shape"},"Designing the State Shape"),Object(o.b)("p",null,"Undo history is also part of your app's state, and there is no reason why we should approach it differently. Regardless of the type of the state changing over time, when you implement Undo and Redo, you want to keep track of the ",Object(o.b)("em",{parentName:"p"},"history")," of this state at different points in time."),Object(o.b)("p",null,"For example, the state shape of a counter app might look like this:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},"{\n  counter: 10\n}\n")),Object(o.b)("p",null,"If we wanted to implement Undo and Redo in such an app, we'd need to store more state so we can answer the following questions:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Is there anything left to undo or redo?"),Object(o.b)("li",{parentName:"ul"},"What is the current state?"),Object(o.b)("li",{parentName:"ul"},"What are the past (and future) states in the undo stack?")),Object(o.b)("p",null,"It is reasonable to suggest that our state shape should change to answer these questions:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},"{\n  counter: {\n    past: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],\n    present: 10,\n    future: []\n  }\n}\n")),Object(o.b)("p",null,"Now, if user presses \u201cUndo\u201d, we want it to change to move into the past:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},"{\n  counter: {\n    past: [0, 1, 2, 3, 4, 5, 6, 7, 8],\n    present: 9,\n    future: [10]\n  }\n}\n")),Object(o.b)("p",null,"And further yet:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},"{\n  counter: {\n    past: [0, 1, 2, 3, 4, 5, 6, 7],\n    present: 8,\n    future: [9, 10]\n  }\n}\n")),Object(o.b)("p",null,"When the user presses \u201cRedo\u201d, we want to move one step back into the future:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},"{\n  counter: {\n    past: [0, 1, 2, 3, 4, 5, 6, 7, 8],\n    present: 9,\n    future: [10]\n  }\n}\n")),Object(o.b)("p",null,"Finally, if the user performs an action (e.g. decrement the counter) while we're in the middle of the undo stack, we're going to discard the existing future:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},"{\n  counter: {\n    past: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],\n    present: 8,\n    future: []\n  }\n}\n")),Object(o.b)("p",null,"The interesting part here is that it does not matter whether we want to keep an undo stack of numbers, strings, arrays, or objects. The structure will always be the same:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},"{\n  counter: {\n    past: [0, 1, 2],\n    present: 3,\n    future: [4]\n  }\n}\n")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},"{\n  todos: {\n    past: [\n      [],\n      [{ text: 'Use Redux' }],\n      [{ text: 'Use Redux', complete: true }]\n    ],\n    present: [\n      { text: 'Use Redux', complete: true },\n      { text: 'Implement Undo' }\n    ],\n    future: [\n      [\n        { text: 'Use Redux', complete: true },\n        { text: 'Implement Undo', complete: true }\n      ]\n    ]\n  }\n}\n")),Object(o.b)("p",null,"In general, it looks like this:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},"{\n  past: Array<T>,\n  present: T,\n  future: Array<T>\n}\n")),Object(o.b)("p",null,"It is also up to us whether to keep a single top-level history:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},"{\n  past: [\n    { counterA: 1, counterB: 1 },\n    { counterA: 1, counterB: 0 },\n    { counterA: 0, counterB: 0 }\n  ],\n  present: { counterA: 2, counterB: 1 },\n  future: []\n}\n")),Object(o.b)("p",null,"Or many granular histories so user can undo and redo actions in them independently:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},"{\n  counterA: {\n    past: [1, 0],\n    present: 2,\n    future: []\n  },\n  counterB: {\n    past: [0],\n    present: 1,\n    future: []\n  }\n}\n")),Object(o.b)("p",null,"We will see later how the approach we take lets us choose how granular Undo and Redo need to be."),Object(o.b)("h3",{id:"designing-the-algorithm"},"Designing the Algorithm"),Object(o.b)("p",null,"Regardless of the specific data type, the shape of the undo history state is the same:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},"{\n  past: Array<T>,\n  present: T,\n  future: Array<T>\n}\n")),Object(o.b)("p",null,"Let's talk through the algorithm to manipulate the state shape described above. We can define two actions to operate on this state: ",Object(o.b)("inlineCode",{parentName:"p"},"UNDO")," and ",Object(o.b)("inlineCode",{parentName:"p"},"REDO"),". In our reducer, we will do the following steps to handle these actions:"),Object(o.b)("h4",{id:"handling-undo"},"Handling Undo"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Remove the ",Object(o.b)("em",{parentName:"li"},"last")," element from the ",Object(o.b)("inlineCode",{parentName:"li"},"past"),"."),Object(o.b)("li",{parentName:"ul"},"Set the ",Object(o.b)("inlineCode",{parentName:"li"},"present")," to the element we removed in the previous step."),Object(o.b)("li",{parentName:"ul"},"Insert the old ",Object(o.b)("inlineCode",{parentName:"li"},"present")," state at the ",Object(o.b)("em",{parentName:"li"},"beginning")," of the ",Object(o.b)("inlineCode",{parentName:"li"},"future"),".")),Object(o.b)("h4",{id:"handling-redo"},"Handling Redo"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Remove the ",Object(o.b)("em",{parentName:"li"},"first")," element from the ",Object(o.b)("inlineCode",{parentName:"li"},"future"),"."),Object(o.b)("li",{parentName:"ul"},"Set the ",Object(o.b)("inlineCode",{parentName:"li"},"present")," to the element we removed in the previous step."),Object(o.b)("li",{parentName:"ul"},"Insert the old ",Object(o.b)("inlineCode",{parentName:"li"},"present")," state at the ",Object(o.b)("em",{parentName:"li"},"end")," of the ",Object(o.b)("inlineCode",{parentName:"li"},"past"),".")),Object(o.b)("h4",{id:"handling-other-actions"},"Handling Other Actions"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Insert the ",Object(o.b)("inlineCode",{parentName:"li"},"present")," at the end of the ",Object(o.b)("inlineCode",{parentName:"li"},"past"),"."),Object(o.b)("li",{parentName:"ul"},"Set the ",Object(o.b)("inlineCode",{parentName:"li"},"present")," to the new state after handling the action."),Object(o.b)("li",{parentName:"ul"},"Clear the ",Object(o.b)("inlineCode",{parentName:"li"},"future"),".")),Object(o.b)("h3",{id:"first-attempt-writing-a-reducer"},"First Attempt: Writing a Reducer"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},"const initialState = {\n  past: [],\n  present: null, // (?) How do we initialize the present?\n  future: []\n}\n\nfunction undoable(state = initialState, action) {\n  const { past, present, future } = state\n\n  switch (action.type) {\n    case 'UNDO':\n      const previous = past[past.length - 1]\n      const newPast = past.slice(0, past.length - 1)\n      return {\n        past: newPast,\n        present: previous,\n        future: [present, ...future]\n      }\n    case 'REDO':\n      const next = future[0]\n      const newFuture = future.slice(1)\n      return {\n        past: [...past, present],\n        present: next,\n        future: newFuture\n      }\n    default:\n      // (?) How do we handle other actions?\n      return state\n  }\n}\n")),Object(o.b)("p",null,"This implementation isn't usable because it leaves out three important questions:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Where do we get the initial ",Object(o.b)("inlineCode",{parentName:"li"},"present")," state from? We don't seem to know it beforehand."),Object(o.b)("li",{parentName:"ul"},"Where do we react to the external actions to save the ",Object(o.b)("inlineCode",{parentName:"li"},"present")," to the ",Object(o.b)("inlineCode",{parentName:"li"},"past"),"?"),Object(o.b)("li",{parentName:"ul"},"How do we actually delegate the control over the ",Object(o.b)("inlineCode",{parentName:"li"},"present")," state to a custom reducer?")),Object(o.b)("p",null,"It seems that reducer isn't the right abstraction, but we're very close."),Object(o.b)("h3",{id:"meet-reducer-enhancers"},"Meet Reducer Enhancers"),Object(o.b)("p",null,"You might be familiar with ",Object(o.b)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Higher-order_function"},"higher order functions"),". If you use React, you might be familiar with ",Object(o.b)("a",{parentName:"p",href:"https://medium.com/@dan_abramov/mixins-are-dead-long-live-higher-order-components-94a0d2f9e750"},"higher order components"),". Here is a variation on the same pattern, applied to reducers."),Object(o.b)("p",null,"A ",Object(o.b)("em",{parentName:"p"},"reducer enhancer")," (or a ",Object(o.b)("em",{parentName:"p"},"higher order reducer"),") is a function that takes a reducer, and returns a new reducer that is able to handle new actions, or to hold more state, delegating control to the inner reducer for the actions it doesn't understand. This isn't a new pattern\u2014technically, ",Object(o.b)("a",{parentName:"p",href:"/api/combinereducers"},Object(o.b)("inlineCode",{parentName:"a"},"combineReducers()"))," is also a reducer enhancer because it takes reducers and returns a new reducer."),Object(o.b)("p",null,"A reducer enhancer that doesn't do anything looks like this:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},"function doNothingWith(reducer) {\n  return function (state, action) {\n    // Just call the passed reducer\n    return reducer(state, action)\n  }\n}\n")),Object(o.b)("p",null,"A reducer enhancer that combines other reducers might look like this:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},"function combineReducers(reducers) {\n  return function (state = {}, action) {\n    return Object.keys(reducers).reduce((nextState, key) => {\n      // Call every reducer with the part of the state it manages\n      nextState[key] = reducers[key](state[key], action)\n      return nextState\n    }, {})\n  }\n}\n")),Object(o.b)("h3",{id:"second-attempt-writing-a-reducer-enhancer"},"Second Attempt: Writing a Reducer Enhancer"),Object(o.b)("p",null,"Now that we have a better understanding of reducer enhancers, we can see that this is exactly what ",Object(o.b)("inlineCode",{parentName:"p"},"undoable")," should have been:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},"function undoable(reducer) {\n  // Call the reducer with empty action to populate the initial state\n  const initialState = {\n    past: [],\n    present: reducer(undefined, {}),\n    future: []\n  }\n\n  // Return a reducer that handles undo and redo\n  return function (state = initialState, action) {\n    const { past, present, future } = state\n\n    switch (action.type) {\n      case 'UNDO':\n        const previous = past[past.length - 1]\n        const newPast = past.slice(0, past.length - 1)\n        return {\n          past: newPast,\n          present: previous,\n          future: [present, ...future]\n        }\n      case 'REDO':\n        const next = future[0]\n        const newFuture = future.slice(1)\n        return {\n          past: [...past, present],\n          present: next,\n          future: newFuture\n        }\n      default:\n        // Delegate handling the action to the passed reducer\n        const newPresent = reducer(present, action)\n        if (present === newPresent) {\n          return state\n        }\n        return {\n          past: [...past, present],\n          present: newPresent,\n          future: []\n        }\n    }\n  }\n}\n")),Object(o.b)("p",null,"We can now wrap any reducer into ",Object(o.b)("inlineCode",{parentName:"p"},"undoable")," reducer enhancer to teach it to react to ",Object(o.b)("inlineCode",{parentName:"p"},"UNDO")," and ",Object(o.b)("inlineCode",{parentName:"p"},"REDO")," actions."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},"// This is a reducer\nfunction todos(state = [], action) {\n  /* ... */\n}\n\n// This is also a reducer!\nconst undoableTodos = undoable(todos)\n\nimport { createStore } from 'redux'\nconst store = createStore(undoableTodos)\n\nstore.dispatch({\n  type: 'ADD_TODO',\n  text: 'Use Redux'\n})\n\nstore.dispatch({\n  type: 'ADD_TODO',\n  text: 'Implement Undo'\n})\n\nstore.dispatch({\n  type: 'UNDO'\n})\n")),Object(o.b)("p",null,"There is an important gotcha: you need to remember to append ",Object(o.b)("inlineCode",{parentName:"p"},".present")," to the current state when you retrieve it. You may also check ",Object(o.b)("inlineCode",{parentName:"p"},".past.length")," and ",Object(o.b)("inlineCode",{parentName:"p"},".future.length")," to determine whether to enable or to disable the Undo and Redo buttons, respectively."),Object(o.b)("p",null,"You might have heard that Redux was influenced by ",Object(o.b)("a",{parentName:"p",href:"https://github.com/evancz/elm-architecture-tutorial/"},"Elm Architecture"),". It shouldn't come as a surprise that this example is very similar to ",Object(o.b)("a",{parentName:"p",href:"https://package.elm-lang.org/packages/TheSeamau5/elm-undo-redo/2.0.0"},"elm-undo-redo package"),"."),Object(o.b)("h2",{id:"using-redux-undo"},"Using Redux Undo"),Object(o.b)("p",null,"This was all very informative, but can't we just drop a library and use it instead of implementing ",Object(o.b)("inlineCode",{parentName:"p"},"undoable")," ourselves? Sure, we can! Meet ",Object(o.b)("a",{parentName:"p",href:"https://github.com/omnidan/redux-undo"},"Redux Undo"),", a library that provides simple Undo and Redo functionality for any part of your Redux tree."),Object(o.b)("p",null,'In this part of the recipe, you will learn how to make a small "todo list" app logic undoable. You can find the full source of this recipe in the ',Object(o.b)("a",{parentName:"p",href:"https://github.com/reduxjs/redux/tree/master/examples/todos-with-undo"},Object(o.b)("inlineCode",{parentName:"a"},"todos-with-undo")," example that comes with Redux"),"."),Object(o.b)("h3",{id:"installation"},"Installation"),Object(o.b)("p",null,"First of all, you need to run"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-sh"},"npm install redux-undo\n")),Object(o.b)("p",null,"This installs the package that provides the ",Object(o.b)("inlineCode",{parentName:"p"},"undoable")," reducer enhancer."),Object(o.b)("h3",{id:"wrapping-the-reducer"},"Wrapping the Reducer"),Object(o.b)("p",null,"You will need to wrap the reducer you wish to enhance with ",Object(o.b)("inlineCode",{parentName:"p"},"undoable")," function. For example, if you exported a ",Object(o.b)("inlineCode",{parentName:"p"},"todos")," reducer from a dedicated file, you will want to change it to export the result of calling ",Object(o.b)("inlineCode",{parentName:"p"},"undoable()")," with the reducer you wrote:"),Object(o.b)("h4",{id:"reducerstodosjs"},Object(o.b)("inlineCode",{parentName:"h4"},"reducers/todos.js")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},"import undoable from 'redux-undo'\n\n/* ... */\n\nconst todos = (state = [], action) => {\n  /* ... */\n}\n\nconst undoableTodos = undoable(todos)\n\nexport default undoableTodos\n")),Object(o.b)("p",null,"There are ",Object(o.b)("a",{parentName:"p",href:"https://github.com/omnidan/redux-undo#configuration"},"many other options")," to configure your undoable reducer, like setting the action type for Undo and Redo actions."),Object(o.b)("p",null,"Note that your ",Object(o.b)("inlineCode",{parentName:"p"},"combineReducers()")," call will stay exactly as it was, but the ",Object(o.b)("inlineCode",{parentName:"p"},"todos")," reducer will now refer to the reducer enhanced with Redux Undo:"),Object(o.b)("h4",{id:"reducersindexjs"},Object(o.b)("inlineCode",{parentName:"h4"},"reducers/index.js")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},"import { combineReducers } from 'redux'\nimport todos from './todos'\nimport visibilityFilter from './visibilityFilter'\n\nconst todoApp = combineReducers({\n  todos,\n  visibilityFilter\n})\n\nexport default todoApp\n")),Object(o.b)("p",null,"You may wrap one or more reducers in ",Object(o.b)("inlineCode",{parentName:"p"},"undoable")," at any level of the reducer composition hierarchy. We choose to wrap ",Object(o.b)("inlineCode",{parentName:"p"},"todos")," instead of the top-level combined reducer so that changes to ",Object(o.b)("inlineCode",{parentName:"p"},"visibilityFilter")," are not reflected in the undo history."),Object(o.b)("h3",{id:"updating-the-selectors"},"Updating the Selectors"),Object(o.b)("p",null,"Now the ",Object(o.b)("inlineCode",{parentName:"p"},"todos")," part of the state looks like this:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},"{\n  visibilityFilter: 'SHOW_ALL',\n  todos: {\n    past: [\n      [],\n      [{ text: 'Use Redux' }],\n      [{ text: 'Use Redux', complete: true }]\n    ],\n    present: [\n      { text: 'Use Redux', complete: true },\n      { text: 'Implement Undo' }\n    ],\n    future: [\n      [\n        { text: 'Use Redux', complete: true },\n        { text: 'Implement Undo', complete: true }\n      ]\n    ]\n  }\n}\n")),Object(o.b)("p",null,"This means you need to access your state with ",Object(o.b)("inlineCode",{parentName:"p"},"state.todos.present")," instead of\njust ",Object(o.b)("inlineCode",{parentName:"p"},"state.todos"),":"),Object(o.b)("h4",{id:"containersvisibletodolistjs"},Object(o.b)("inlineCode",{parentName:"h4"},"containers/VisibleTodoList.js")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},"const mapStateToProps = state => {\n  return {\n    todos: getVisibleTodos(state.todos.present, state.visibilityFilter)\n  }\n}\n")),Object(o.b)("h3",{id:"adding-the-buttons"},"Adding the Buttons"),Object(o.b)("p",null,"Now all you need to do is add the buttons for the Undo and Redo actions."),Object(o.b)("p",null,"First, create a new container component called ",Object(o.b)("inlineCode",{parentName:"p"},"UndoRedo")," for these buttons. We won't bother to split the presentational part into a separate file because it is very small:"),Object(o.b)("h4",{id:"containersundoredojs"},Object(o.b)("inlineCode",{parentName:"h4"},"containers/UndoRedo.js")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},"import React from 'react'\n\n/* ... */\n\nlet UndoRedo = ({ canUndo, canRedo, onUndo, onRedo }) => (\n  <p>\n    <button onClick={onUndo} disabled={!canUndo}>\n      Undo\n    </button>\n    <button onClick={onRedo} disabled={!canRedo}>\n      Redo\n    </button>\n  </p>\n)\n")),Object(o.b)("p",null,"You will use ",Object(o.b)("inlineCode",{parentName:"p"},"connect()")," from ",Object(o.b)("a",{parentName:"p",href:"https://github.com/reduxjs/react-redux"},"React Redux")," to generate a container component. To determine whether to enable Undo and Redo buttons, you can check ",Object(o.b)("inlineCode",{parentName:"p"},"state.todos.past.length")," and ",Object(o.b)("inlineCode",{parentName:"p"},"state.todos.future.length"),". You won't need to write action creators for performing undo and redo because Redux Undo already provides them:"),Object(o.b)("h4",{id:"containersundoredojs-1"},Object(o.b)("inlineCode",{parentName:"h4"},"containers/UndoRedo.js")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},"/* ... */\n\nimport { ActionCreators as UndoActionCreators } from 'redux-undo'\nimport { connect } from 'react-redux'\n\n/* ... */\n\nconst mapStateToProps = state => {\n  return {\n    canUndo: state.todos.past.length > 0,\n    canRedo: state.todos.future.length > 0\n  }\n}\n\nconst mapDispatchToProps = dispatch => {\n  return {\n    onUndo: () => dispatch(UndoActionCreators.undo()),\n    onRedo: () => dispatch(UndoActionCreators.redo())\n  }\n}\n\nUndoRedo = connect(mapStateToProps, mapDispatchToProps)(UndoRedo)\n\nexport default UndoRedo\n")),Object(o.b)("p",null,"Now you can add ",Object(o.b)("inlineCode",{parentName:"p"},"UndoRedo")," component to the ",Object(o.b)("inlineCode",{parentName:"p"},"App")," component:"),Object(o.b)("h4",{id:"componentsappjs"},Object(o.b)("inlineCode",{parentName:"h4"},"components/App.js")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},"import React from 'react'\nimport Footer from './Footer'\nimport AddTodo from '../containers/AddTodo'\nimport VisibleTodoList from '../containers/VisibleTodoList'\nimport UndoRedo from '../containers/UndoRedo'\n\nconst App = () => (\n  <div>\n    <AddTodo />\n    <VisibleTodoList />\n    <Footer />\n    <UndoRedo />\n  </div>\n)\n\nexport default App\n")),Object(o.b)("p",null,"This is it! Run ",Object(o.b)("inlineCode",{parentName:"p"},"npm install")," and ",Object(o.b)("inlineCode",{parentName:"p"},"npm start")," in the ",Object(o.b)("a",{parentName:"p",href:"https://github.com/reduxjs/redux/tree/master/examples/todos-with-undo"},"example folder")," and try it out!"))}d.isMDXComponent=!0},158:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return h}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),d=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=d(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},b=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=d(n),b=a,h=u["".concat(i,".").concat(b)]||u[b]||p[b]||o;return n?r.a.createElement(h,s(s({ref:t},l),{},{components:n})):r.a.createElement(h,s({ref:t},l))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=b;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);