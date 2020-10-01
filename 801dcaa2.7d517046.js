(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{103:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return i})),a.d(t,"rightToc",(function(){return s})),a.d(t,"default",(function(){return b}));var r=a(2),n=a(6),o=(a(0),a(149)),c={id:"performance",title:"Performance",hide_title:!0},i={unversionedId:"faq/performance",id:"faq/performance",isDocsHomePage:!1,title:"Performance",description:"Redux FAQ: Performance",source:"@site/../docs_kr/faq/Performance.md",slug:"/faq/performance",permalink:"/faq/performance",version:"current",sidebar:"docs",previous:{title:"Code Structure",permalink:"/faq/code-structure"},next:{title:"Design Decisions",permalink:"/faq/design-decisions"}},s=[{value:"Table of Contents",id:"table-of-contents",children:[]},{value:"Performance",id:"performance",children:[{value:"How well does Redux \u201cscale\u201d in terms of performance and architecture?",id:"how-well-does-redux-scale-in-terms-of-performance-and-architecture",children:[]},{value:"Won&#39;t calling \u201call my reducers\u201d for each action be slow?",id:"wont-calling-all-my-reducers-for-each-action-be-slow",children:[]},{value:"Do I have to deep-clone my state in a reducer? Isn&#39;t copying my state going to be slow?",id:"do-i-have-to-deep-clone-my-state-in-a-reducer-isnt-copying-my-state-going-to-be-slow",children:[]},{value:"How can I reduce the number of store update events?",id:"how-can-i-reduce-the-number-of-store-update-events",children:[]},{value:"Will having \u201cone state tree\u201d cause memory problems? Will dispatching many actions take up memory?",id:"will-having-one-state-tree-cause-memory-problems-will-dispatching-many-actions-take-up-memory",children:[]},{value:"Will caching remote data cause memory problems?",id:"will-caching-remote-data-cause-memory-problems",children:[]}]}],l={rightToc:s};function b(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},l,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h1",{id:"redux-faq-performance"},"Redux FAQ: Performance"),Object(o.b)("h2",{id:"table-of-contents"},"Table of Contents"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"#how-well-does-redux-scale-in-terms-of-performance-and-architecture"}),"How well does Redux \u201cscale\u201d in terms of performance and architecture?")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"#wont-calling-all-my-reducers-for-each-action-be-slow"}),"Won't calling \u201call my reducers\u201d for each action be slow?")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"#do-i-have-to-deep-clone-my-state-in-a-reducer-isnt-copying-my-state-going-to-be-slow"}),"Do I have to deep-clone my state in a reducer? Isn't copying my state going to be slow?")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"#how-can-i-reduce-the-number-of-store-update-events"}),"How can I reduce the number of store update events?")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"#will-having-one-state-tree-cause-memory-problems-will-dispatching-many-actions-take-up-memory"}),"Will having \u201cone state tree\u201d cause memory problems? Will dispatching many actions take up memory?")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"#will-caching-remote-data-cause-memory-problems"}),"Will caching remote data cause memory problems?"))),Object(o.b)("h2",{id:"performance"},"Performance"),Object(o.b)("h3",{id:"how-well-does-redux-scale-in-terms-of-performance-and-architecture"},"How well does Redux \u201cscale\u201d in terms of performance and architecture?"),Object(o.b)("p",null,"While there's no single definitive answer to this, most of the time this should not be a concern in either case."),Object(o.b)("p",null,"The work done by Redux generally falls into a few areas: processing actions in middleware and reducers (including object duplication for immutable updates), notifying subscribers after actions are dispatched, and updating UI components based on the state changes. While it's certainly ",Object(o.b)("em",{parentName:"p"},"possible")," for each of these to become a performance concern in sufficiently complex situations, there's nothing inherently slow or inefficient about how Redux is implemented. In fact, React Redux in particular is heavily optimized to cut down on unnecessary re-renders, and React-Redux v5 shows noticeable improvements over earlier versions."),Object(o.b)("p",null,"Redux may not be as efficient out of the box when compared to other libraries. For maximum rendering performance in a React application, state should be stored in a normalized shape, many individual components should be connected to the store instead of just a few, and connected list components should pass item IDs to their connected child list items (allowing the list items to look up their own data by ID). This minimizes the overall amount of rendering to be done. Use of memoized selector functions is also an important performance consideration."),Object(o.b)("p",null,"As for architecture, anecdotal evidence is that Redux works well for varying project and team sizes. Redux is currently used by hundreds of companies and thousands of developers, with several hundred thousand monthly installations from NPM. One developer reported:"),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"for scale, we have ~500 action types, ~400 reducer cases, ~150 components, 5 middlewares, ~200 actions, ~2300 tests")),Object(o.b)("h4",{id:"further-information"},"Further information"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Documentation")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"/recipes/structuring-reducers/normalizing-state-shape"}),"Recipes: Structuring Reducers - Normalizing State Shape"))),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Articles")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"https://www.smashingmagazine.com/2016/09/how-to-scale-react-applications/"}),"How to Scale React Applications")," (accompanying talk: ",Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"https://vimeo.com/168648012"}),"Scaling React Applications"),")"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"http://somebody32.github.io/high-performance-redux/"}),"High-Performance Redux")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"http://blog.rangle.io/react-and-redux-performance-with-reselect/"}),"Improving React and Redux Perf with Reselect")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"http://randycoulman.com/blog/2016/09/13/encapsulating-the-redux-state-tree/"}),"Encapsulating the Redux State Tree")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"https://github.com/markerikson/react-redux-links/blob/master/react-performance.md#redux-performance"}),"React/Redux Links: Performance - Redux"))),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Discussions")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"https://github.com/reduxjs/redux/issues/310"}),"#310: Who uses Redux?")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"https://github.com/reduxjs/redux/issues/1751"}),"#1751: Performance issues with large collections")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"https://github.com/reduxjs/react-redux/issues/269"}),"React Redux #269: Connect could be used with a custom subscribe method")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"https://github.com/reduxjs/react-redux/issues/407"}),"React Redux #407: Rewrite connect to offer an advanced API")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"https://github.com/reduxjs/react-redux/pull/416"}),"React Redux #416: Rewrite connect for better performance and extensibility")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"https://github.com/mweststrate/redux-todomvc/pull/1"}),"Redux vs MobX TodoMVC Benchmark: #1")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"https://www.reddit.com/r/reactjs/comments/47m9h5/whats_the_best_place_to_keep_the_initial_state/"}),"Reddit: What's the best place to keep the initial state?")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"https://www.reddit.com/r/reactjs/comments/48k852/help_designing_redux_state_for_a_single_page/"}),"Reddit: Help designing Redux state for a single page app")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"https://www.reddit.com/r/reactjs/comments/41wdqn/redux_performance_issues_with_a_large_state_object/"}),"Reddit: Redux performance issues with a large state object?")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"https://www.reddit.com/r/javascript/comments/49box8/reactredux_for_ultra_large_scale_apps/"}),"Reddit: React/Redux for Ultra Large Scale apps")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"https://twitter.com/NickPresta/status/684058236828266496"}),"Twitter: Redux scaling")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"https://twitter.com/dan_abramov/status/720219615041859584"}),"Twitter: Redux vs MobX benchmark graph - Redux state shape matters")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"http://stackoverflow.com/questions/37264415/how-to-optimize-small-updates-to-props-of-nested-component-in-react-redux"}),"Stack Overflow: How to optimize small updates to props of nested components?")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"https://gist.github.com/markerikson/53735e4eb151bc228d6685eab00f5f85"}),"Chat log: React/Redux perf - updating a 10K-item Todo list")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"https://gist.github.com/markerikson/6056565dd65d1232784bf42b65f8b2ad"}),"Chat log: React/Redux perf - single connection vs many connections"))),Object(o.b)("h3",{id:"wont-calling-all-my-reducers-for-each-action-be-slow"},"Won't calling \u201call my reducers\u201d for each action be slow?"),Object(o.b)("p",null,"It's important to note that a Redux store really only has a single reducer function. The store passes the current state and dispatched action to that one reducer function, and lets the reducer handle things appropriately."),Object(o.b)("p",null,"Obviously, trying to handle every possible action in a single function does not scale well, simply in terms of function size and readability, so it makes sense to split the actual work into separate functions that can be called by the top-level reducer. In particular, the common suggested pattern is to have a separate sub-reducer function that is responsible for managing updates to a particular slice of state at a specific key. The ",Object(o.b)("inlineCode",{parentName:"p"},"combineReducers()")," that comes with Redux is one of the many possible ways to achieve this. It's also highly suggested to keep your store state as flat and as normalized as possible. Ultimately, though, you are in charge of organizing your reducer logic any way you want."),Object(o.b)("p",null,"However, even if you happen to have many different reducer functions composed together, and even with deeply nested state, reducer speed is unlikely to be a problem. JavaScript engines are capable of running a very large number of function calls per second, and most of your reducers are probably just using a ",Object(o.b)("inlineCode",{parentName:"p"},"switch")," statement and returning the existing state by default in response to most actions."),Object(o.b)("p",null,"If you actually are concerned about reducer performance, you can use a utility such as ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/omnidan/redux-ignore"}),"redux-ignore")," or ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/chrisdavies/reduxr-scoped-reducer"}),"reduxr-scoped-reducer")," to ensure that only certain reducers listen to specific actions. You can also use ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/michaelcontento/redux-log-slow-reducers"}),"redux-log-slow-reducers")," to do some performance benchmarking."),Object(o.b)("h4",{id:"further-information-1"},"Further information"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Discussions")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"https://github.com/reduxjs/redux/issues/912"}),"#912: Proposal: action filter utility")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"https://github.com/reduxjs/redux/issues/1303"}),"#1303: Redux Performance with Large Store and frequent updates")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"http://stackoverflow.com/questions/35667775/state-in-redux-react-app-has-a-property-with-the-name-of-the-reducer/35674297"}),"Stack Overflow: State in Redux app has the name of the reducer")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"http://stackoverflow.com/questions/34494866/how-does-redux-deals-with-deeply-nested-models/34495397"}),"Stack Overflow: How does Redux deal with deeply nested models?"))),Object(o.b)("h3",{id:"do-i-have-to-deep-clone-my-state-in-a-reducer-isnt-copying-my-state-going-to-be-slow"},"Do I have to deep-clone my state in a reducer? Isn't copying my state going to be slow?"),Object(o.b)("p",null,"Immutably updating state generally means making shallow copies, not deep copies. Shallow copies are much faster than deep copies, because fewer objects and fields have to be copied, and it effectively comes down to moving some pointers around."),Object(o.b)("p",null,"In addition, deep cloning state creates new references for every field. Since the React-Redux ",Object(o.b)("inlineCode",{parentName:"p"},"connect")," function relies on reference comparisons to determine if data has changed, this means that UI components will be forced to re-render unnecessarily even though the other data hasn't meaningfully changed."),Object(o.b)("p",null,"However, you ",Object(o.b)("em",{parentName:"p"},"do")," need to create a copied and updated object for each level of nesting that is affected. Although that shouldn't be particularly expensive, it's another good reason why you should keep your state normalized and shallow if possible."),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"Common Redux misconception: you need to deeply clone the state. Reality: if something inside doesn't change, keep its reference the same!")),Object(o.b)("h4",{id:"further-information-2"},"Further information"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Documentation")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"/recipes/structuring-reducers/prerequisite-concepts"}),"Recipes: Structuring Reducers - Prerequisite Concepts")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"/recipes/structuring-reducers/immutable-update-patterns"}),"Recipes: Structuring Reducers - Immutable Update Patterns"))),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Discussions")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"https://github.com/reduxjs/redux/issues/454"}),"#454: Handling big states in reducer")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"https://github.com/reduxjs/redux/issues/758"}),"#758: Why can't state be mutated?")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"https://github.com/reduxjs/redux/issues/994"}),"#994: How to cut the boilerplate when updating nested entities?")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"https://twitter.com/dan_abramov/status/688087202312491008"}),"Twitter: common misconception - deep cloning")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"http://www.zsoltnagy.eu/cloning-objects-in-javascript/"}),"Cloning Objects in JavaScript"))),Object(o.b)("h3",{id:"how-can-i-reduce-the-number-of-store-update-events"},"How can I reduce the number of store update events?"),Object(o.b)("p",null,"Redux notifies subscribers after each successfully dispatched action (i.e. an action reached the store and was handled by reducers). In some cases, it may be useful to cut down on the number of times subscribers are called, particularly if an action creator dispatches multiple distinct actions in a row."),Object(o.b)("p",null,"There are several addons that add batching capabilities in various ways, like: ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/tshelburne/redux-batched-actions"}),"redux-batched-actions")," (a higher-order reducer that lets you dispatch several actions as if it was one and \u201cunpack\u201d them in the reducer), ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/tappleby/redux-batched-subscribe"}),"redux-batched-subscribe")," (a store enhancer that lets you debounce subscriber calls for multiple dispatches), or ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/manaflair/redux-batch"}),"redux-batch")," (a store enhancer that handles dispatching an array of actions with a single subscriber notification)."),Object(o.b)("p",null,"For React-Redux specifically, starting in ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/reduxjs/react-redux/releases/tag/v7.0.1"}),"React-Redux v7")," a new ",Object(o.b)("inlineCode",{parentName:"p"},"batch")," public API is available to help minimize the number of React re-renders when dispatching actions outside of React event handlers. It wraps React's ",Object(o.b)("inlineCode",{parentName:"p"},"unstable_batchedUpdate()")," API, allows any React updates in an event loop tick to be batched together into a single render pass. React already uses this internally for its own event handler callbacks. This API is actually part of the renderer packages like ReactDOM and React Native, not the React core itself."),Object(o.b)("p",null,"Since React-Redux needs to work in both ReactDOM and React Native environments, we've taken care of importing this API from the correct renderer at build time for our own use. We also now re-export this function publicly ourselves, renamed to ",Object(o.b)("inlineCode",{parentName:"p"},"batch()"),". You can use it to ensure that multiple actions dispatched outside of React only result in a single render update, like this:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"import { batch } from 'react-redux'\n\nfunction myThunk() {\n  return (dispatch, getState) => {\n    // should only result in one combined re-render, not two\n    batch(() => {\n      dispatch(increment())\n      dispatch(increment())\n    })\n  }\n}\n")),Object(o.b)("h4",{id:"further-information-3"},"Further information"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Discussions")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"https://github.com/reduxjs/redux/issues/125"}),"#125: Strategy for avoiding cascading renders")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"https://github.com/reduxjs/redux/issues/542"}),"#542: Idea: batching actions")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"https://github.com/reduxjs/redux/issues/911"}),"#911: Batching actions")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"https://github.com/reduxjs/redux/pull/1813"}),"#1813: Use a loop to support dispatching arrays")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"https://github.com/reduxjs/react-redux/issues/263"}),"React Redux #263: Huge performance issue when dispatching hundreds of actions")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"https://github.com/reduxjs/react-redux/issues/1177"}),"React-Redux #1177: Roadmap: v6, Context, Subscriptions, and Hooks"))),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Libraries")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"https://github.com/markerikson/redux-ecosystem-links/blob/master/store.md#store-change-subscriptions"}),"Redux Addons Catalog: Store - Change Subscriptions"))),Object(o.b)("h3",{id:"will-having-one-state-tree-cause-memory-problems-will-dispatching-many-actions-take-up-memory"},"Will having \u201cone state tree\u201d cause memory problems? Will dispatching many actions take up memory?"),Object(o.b)("p",null,"First, in terms of raw memory usage, Redux is no different than any other JavaScript library. The only difference is that all the various object references are nested together into one tree, instead of maybe saved in various independent model instances such as in Backbone. Second, a typical Redux app would probably have somewhat ",Object(o.b)("em",{parentName:"p"},"less")," memory usage than an equivalent Backbone app because Redux encourages use of plain JavaScript objects and arrays rather than creating instances of Models and Collections. Finally, Redux only holds onto a single state tree reference at a time. Objects that are no longer referenced in that tree will be garbage collected, as usual."),Object(o.b)("p",null,"Redux does not store a history of actions itself. However, the Redux DevTools do store actions so they can be replayed, but those are generally only enabled during development, and not used in production."),Object(o.b)("h4",{id:"further-information-4"},"Further information"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Documentation")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"/advanced/async-actions"}),"Docs: Async Actions"))),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Discussions")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"http://stackoverflow.com/questions/35627553/is-there-any-way-to-commit-the-state-in-redux-to-free-memory/35634004"}),'Stack Overflow: Is there any way to "commit" the state in Redux to free memory?')),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"https://stackoverflow.com/questions/39943762/can-a-redux-store-lead-to-a-memory-leak/40549594#40549594"}),"Stack Overflow: Can a Redux store lead to a memory leak?")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"https://stackoverflow.com/questions/42489557/redux-and-all-the-application-state/42491766#42491766"}),"Stack Overflow: Redux and ALL the application state")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"https://stackoverflow.com/questions/44956071/memory-usage-concern-with-controlled-components?noredirect=1&lq=1"}),"Stack Overflow: Memory Usage Concern with Controlled Components")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"https://www.reddit.com/r/reactjs/comments/47m9h5/whats_the_best_place_to_keep_the_initial_state/"}),"Reddit: What's the best place to keep initial state?"))),Object(o.b)("h3",{id:"will-caching-remote-data-cause-memory-problems"},"Will caching remote data cause memory problems?"),Object(o.b)("p",null,"The amount of memory available to JavaScript applications running in a browser is finite. Caching data will cause performance problems when the size of the cache approaches the amount of available memory. This tends to be a problem when the cached data is exceptionally large or the session is exceptionally long-running. And while it is good to be aware of the potential for these problems, this awareness should not discourage you from efficiently caching reasonable amounts of data."),Object(o.b)("p",null,"Here are a few approaches to caching remote data efficiently:"),Object(o.b)("p",null,"First, only cache as much data as the user needs. If your application displays a paginated list of records, you don't necessarily need to cache the entire collection. Instead, cache what is visible to the user and add to that cache when the user has (or will soon have) an immediate need for more data."),Object(o.b)("p",null,"Second, cache an abbreviated form of a record when possible. Sometimes a record includes data that is not relevant to the user. If the application does not depend on this data, it can be omitted from the cache."),Object(o.b)("p",null,"Third, only cache a single copy of a record. This is especially important when records contain copies of other records. Cache a unique copy for each record and replace each nested copy with a reference. This is called normalization. Normalization is the preferred approach to storing relational data for ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/recipes/structuring-reducers/normalizing-state-shape#designing-a-normalized-state"}),"several reasons"),", including efficient memory consumption."),Object(o.b)("h4",{id:"further-information-5"},"Further information"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Discussions")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"https://stackoverflow.com/questions/33940015/how-to-choose-the-redux-state-shape-for-an-app-with-list-detail-views-and-pagina"}),"Stack Overflow: How to choose the Redux state shape for an app with list/detail views and pagination?")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"https://twitter.com/acemarke/status/804071531844423683"}),'Twitter: ...concerns over having "too much data in the state tree"...')),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"https://medium.com/@dcousineau/advanced-redux-entity-normalization-f5f1fe2aefc5"}),"Advanced Redux entity normalization"))))}b.isMDXComponent=!0},149:function(e,t,a){"use strict";a.d(t,"a",(function(){return u})),a.d(t,"b",(function(){return m}));var r=a(0),n=a.n(r);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=n.a.createContext({}),b=function(e){var t=n.a.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=b(e.components);return n.a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},d=n.a.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=b(a),d=r,m=u["".concat(c,".").concat(d)]||u[d]||p[d]||o;return a?n.a.createElement(m,i(i({ref:t},l),{},{components:a})):n.a.createElement(m,i({ref:t},l))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,c=new Array(o);c[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var l=2;l<o;l++)c[l]=a[l];return n.a.createElement.apply(null,c)}return n.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"}}]);