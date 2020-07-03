(window.webpackJsonp=window.webpackJsonp||[]).push([[63],{165:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return i})),a.d(t,"rightToc",(function(){return s})),a.d(t,"default",(function(){return l}));var n=a(1),o=a(6),r=(a(0),a(184)),c={id:"react-redux",title:"React Redux",hide_title:!0},i={id:"faq/react-redux",title:"React Redux",description:"# Redux FAQ: React Redux",source:"@site/../docs_kr/faq/ReactRedux.md",permalink:"/faq/react-redux",sidebar:"docs",previous:{title:"Design Decisions",permalink:"/faq/design-decisions"},next:{title:"Miscellaneous",permalink:"/faq/miscellaneous"}},s=[{value:"Table of Contents",id:"table-of-contents",children:[]},{value:"React Redux",id:"react-redux",children:[{value:"Why should I use React-Redux?",id:"why-should-i-use-react-redux",children:[]},{value:"Why isn&#39;t my component re-rendering, or my mapStateToProps running?",id:"why-isnt-my-component-re-rendering-or-my-mapstatetoprops-running",children:[]},{value:"Why is my component re-rendering too often?",id:"why-is-my-component-re-rendering-too-often",children:[]},{value:"How can I speed up my <code>mapStateToProps</code>?",id:"how-can-i-speed-up-my-mapstatetoprops",children:[]},{value:"Why don&#39;t I have <code>this.props.dispatch</code> available in my connected component?",id:"why-dont-i-have-thispropsdispatch-available-in-my-connected-component",children:[]},{value:"Should I only connect my top component, or can I connect multiple components in my tree?",id:"should-i-only-connect-my-top-component-or-can-i-connect-multiple-components-in-my-tree",children:[]},{value:"How does Redux compare to the React Context API?",id:"how-does-redux-compare-to-the-react-context-api",children:[]}]}],p={rightToc:s};function l(e){var t=e.components,a=Object(o.a)(e,["components"]);return Object(r.b)("wrapper",Object(n.a)({},p,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h1",{id:"redux-faq-react-redux"},"Redux FAQ: React Redux"),Object(r.b)("h2",{id:"table-of-contents"},"Table of Contents"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"#why-should-i-use-react-redux"}),"Why should I use React-Redux?")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"#why-isnt-my-component-re-rendering-or-my-mapstatetoprops-running"}),"Why isn't my component re-rendering, or my mapStateToProps running?")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"#why-is-my-component-re-rendering-too-often"}),"Why is my component re-rendering too often?")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"#how-can-i-speed-up-my-mapstatetoprops"}),"How can I speed up my mapStateToProps?")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"#why-dont-i-have-thispropsdispatch-available-in-my-connected-component"}),"Why don't I have this.props.dispatch available in my connected component?")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"#should-i-only-connect-my-top-component-or-can-i-connect-multiple-components-in-my-tree"}),"Should I only connect my top component, or can I connect multiple components in my tree?")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"#how-does-redux-compare-to-the-react-context-api"}),"How does Redux compare to the React Context API?"))),Object(r.b)("h2",{id:"react-redux"},"React Redux"),Object(r.b)("h3",{id:"why-should-i-use-react-redux"},"Why should I use React-Redux?"),Object(r.b)("p",null,"Redux itself is a standalone library that can be used with any UI layer or framework, including React, Angular, Vue, Ember, and vanilla JS. Although Redux and React are commonly used together, they are independent of each other."),Object(r.b)("p",null,'If you are using Redux with any kind of UI framework, you will normally use a "UI binding" library to tie Redux together with your UI framework, rather than directly interacting with the store from your UI code.'),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"React-Redux is the official Redux UI binding library for React"),". If you are using Redux and React together, you should also use React-Redux to bind these two libraries."),Object(r.b)("p",null,"While it is possible to write Redux store subscription logic by hand, doing so would become very repetitive. In addition, optimizing UI performance would require complicated logic."),Object(r.b)("p",null,"The process of subscribing to the store, checking for updated data, and triggering a re-render can be made more generic and reusable. ",Object(r.b)("strong",{parentName:"p"},"A UI binding library like React-Redux handles the store interaction logic, so you don't have to write that code yourself.")),Object(r.b)("p",null,"Overall, React-Redux encourages good React architecture, and implements complex performance optimizations for you. It is also kept up-to-date with the latest API changes from Redux and React."),Object(r.b)("h4",{id:"further-information"},"Further Information"),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Documentation")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},Object(r.b)("a",Object(n.a)({parentName:"strong"},{href:"https://react-redux.js.org/introduction/why-use-react-redux"}),"React-Redux docs: Why Use React-Redux?")))),Object(r.b)("h3",{id:"why-isnt-my-component-re-rendering-or-my-mapstatetoprops-running"},"Why isn't my component re-rendering, or my mapStateToProps running?"),Object(r.b)("p",null,"Accidentally mutating or modifying your state directly is by far the most common reason why components do not re-render after an action has been dispatched. Redux expects that your reducers will update their state \u201cimmutably\u201d, which effectively means always making copies of your data, and applying your changes to the copies. If you return the same object from a reducer, Redux assumes that nothing has been changed, even if you made changes to its contents. Similarly, React Redux tries to improve performance by doing shallow equality reference checks on incoming props in ",Object(r.b)("inlineCode",{parentName:"p"},"shouldComponentUpdate"),", and if all references are the same, ",Object(r.b)("inlineCode",{parentName:"p"},"shouldComponentUpdate")," returns ",Object(r.b)("inlineCode",{parentName:"p"},"false")," to skip actually updating your original component."),Object(r.b)("p",null,"It's important to remember that whenever you update a nested value, you must also return new copies of anything above it in your state tree. If you have ",Object(r.b)("inlineCode",{parentName:"p"},"state.a.b.c.d"),", and you want to make an update to ",Object(r.b)("inlineCode",{parentName:"p"},"d"),", you would also need to return new copies of ",Object(r.b)("inlineCode",{parentName:"p"},"c"),", ",Object(r.b)("inlineCode",{parentName:"p"},"b"),", ",Object(r.b)("inlineCode",{parentName:"p"},"a"),", and ",Object(r.b)("inlineCode",{parentName:"p"},"state"),". This ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"http://arqex.com/wp-content/uploads/2015/02/trees.png"}),"state tree mutation diagram")," demonstrates how a change deep in a tree requires changes all the way up."),Object(r.b)("p",null,"Note that \u201cupdating data immutably\u201d does ",Object(r.b)("em",{parentName:"p"},"not")," mean that you must use ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://facebook.github.io/immutable-js/"}),"Immutable.js"),", although that is certainly an option. You can do immutable updates to plain JS objects and arrays using several different approaches:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Copying objects using functions like ",Object(r.b)("inlineCode",{parentName:"li"},"Object.assign()")," or ",Object(r.b)("inlineCode",{parentName:"li"},"_.extend()"),", and array functions such as ",Object(r.b)("inlineCode",{parentName:"li"},"slice()")," and ",Object(r.b)("inlineCode",{parentName:"li"},"concat()")),Object(r.b)("li",{parentName:"ul"},"The array spread operator in ES6, and the similar object spread operator that is proposed for a future version of JavaScript"),Object(r.b)("li",{parentName:"ul"},"Utility libraries that wrap immutable update logic into simpler functions")),Object(r.b)("h4",{id:"further-information-1"},"Further information"),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Documentation")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"/troubleshooting"}),"Troubleshooting")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"https://react-redux.js.org/troubleshooting"}),"React Redux: Troubleshooting")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"/recipes/using-object-spread-operator"}),"Recipes: Using the Object Spread Operator")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"/recipes/structuring-reducers/prerequisite-concepts"}),"Recipes: Structuring Reducers - Prerequisite Concepts")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"/recipes/structuring-reducers/immutable-update-patterns"}),"Recipes: Structuring Reducers - Immutable Update Patterns"))),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Articles")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"http://reactkungfu.com/2015/08/pros-and-cons-of-using-immutability-with-react-js/"}),"Pros and Cons of Using Immutability with React")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/markerikson/react-redux-links/blob/master/immutable-data.md"}),"React/Redux Links: Immutable Data"))),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Discussions")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/reduxjs/redux/issues/1262"}),"#1262: Immutable data + bad performance")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/reduxjs/react-redux/issues/235"}),"React Redux #235: Predicate function for updating component")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/reduxjs/react-redux/issues/291"}),"React Redux #291: Should mapStateToProps be called every time an action is dispatched?")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"http://stackoverflow.com/questions/35592078/cleaner-shorter-way-to-update-nested-state-in-redux"}),"Stack Overflow: Cleaner/shorter way to update nested state in Redux?")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"https://gist.github.com/amcdnl/7d93c0c67a9a44fe5761#gistcomment-1706579"}),"Gist: state mutations"))),Object(r.b)("h3",{id:"why-is-my-component-re-rendering-too-often"},"Why is my component re-rendering too often?"),Object(r.b)("p",null,"React Redux implements several optimizations to ensure your actual component only re-renders when actually necessary. One of those is a shallow equality check on the combined props object generated by the ",Object(r.b)("inlineCode",{parentName:"p"},"mapStateToProps")," and ",Object(r.b)("inlineCode",{parentName:"p"},"mapDispatchToProps")," arguments passed to ",Object(r.b)("inlineCode",{parentName:"p"},"connect"),". Unfortunately, shallow equality does not help in cases where new array or object instances are created each time ",Object(r.b)("inlineCode",{parentName:"p"},"mapStateToProps")," is called. A typical example might be mapping over an array of IDs and returning the matching object references, such as:"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"const mapStateToProps = state => {\n  return {\n    objects: state.objectIds.map(id => state.objects[id])\n  }\n}\n")),Object(r.b)("p",null,"Even though the array might contain the exact same object references each time, the array itself is a different reference, so the shallow equality check fails and React Redux would re-render the wrapped component."),Object(r.b)("p",null,"The extra re-renders could be resolved by saving the array of objects into the state using a reducer, caching the mapped array using ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/reduxjs/reselect"}),"Reselect"),", or implementing ",Object(r.b)("inlineCode",{parentName:"p"},"shouldComponentUpdate")," in the component by hand and doing a more in-depth props comparison using a function such as ",Object(r.b)("inlineCode",{parentName:"p"},"_.isEqual"),". Be careful to not make your custom ",Object(r.b)("inlineCode",{parentName:"p"},"shouldComponentUpdate()")," more expensive than the rendering itself! Always use a profiler to check your assumptions about performance."),Object(r.b)("p",null,"For non-connected components, you may want to check what props are being passed in. A common issue is having a parent component re-bind a callback inside its render function, like ",Object(r.b)("inlineCode",{parentName:"p"},"<Child onClick={this.handleClick.bind(this)} />"),". That creates a new function reference every time the parent re-renders. It's generally good practice to only bind callbacks once in the parent component's constructor."),Object(r.b)("h4",{id:"further-information-2"},"Further information"),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Documentation")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"/faq/performance#performance-scaling"}),"FAQ: Performance - Scaling"))),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Articles")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"http://benchling.engineering/deep-dive-react-perf-debugging/"}),"A Deep Dive into React Perf Debugging")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"https://medium.com/@esamatti/react-js-pure-render-performance-anti-pattern-fb88c101332f"}),"React.js pure render performance anti-pattern")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"http://blog.rangle.io/react-and-redux-performance-with-reselect/"}),"Improving React and Redux Performance with Reselect")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"http://randycoulman.com/blog/2016/09/13/encapsulating-the-redux-state-tree/"}),"Encapsulating the Redux State Tree")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/markerikson/react-redux-links/blob/master/react-performance.md"}),"React/Redux Links: React/Redux Performance"))),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Discussions")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"http://stackoverflow.com/questions/34782249/can-a-react-redux-app-really-scale-as-well-as-say-backbone-even-with-reselect"}),"Stack Overflow: Can a React Redux app scale as well as Backbone?"))),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Libraries")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/markerikson/redux-ecosystem-links/blob/master/devtools.md#component-update-monitoring"}),"Redux Addons Catalog: DevTools - Component Update Monitoring"))),Object(r.b)("h3",{id:"how-can-i-speed-up-my-mapstatetoprops"},"How can I speed up my ",Object(r.b)("inlineCode",{parentName:"h3"},"mapStateToProps"),"?"),Object(r.b)("p",null,"While React Redux does work to minimize the number of times that your ",Object(r.b)("inlineCode",{parentName:"p"},"mapStateToProps")," function is called, it's still a good idea to ensure that your ",Object(r.b)("inlineCode",{parentName:"p"},"mapStateToProps")," runs quickly and also minimizes the amount of work it does. The common recommended approach is to create memoized \u201cselector\u201d functions using ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/reduxjs/reselect"}),"Reselect"),". These selectors can be combined and composed together, and selectors later in a pipeline will only run if their inputs have changed. This means you can create selectors that do things like filtering or sorting, and ensure that the real work only happens if needed."),Object(r.b)("h4",{id:"further-information-3"},"Further information"),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Documentation")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"/recipes/computing-derived-data"}),"Recipes: Computed Derived Data"))),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Articles")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"http://blog.rangle.io/react-and-redux-performance-with-reselect/"}),"Improving React and Redux Performance with Reselect"))),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Discussions")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/reduxjs/redux/issues/815"}),"#815: Working with Data Structures")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/reduxjs/reselect/issues/47"}),"Reselect #47: Memoizing Hierarchical Selectors"))),Object(r.b)("h3",{id:"why-dont-i-have-thispropsdispatch-available-in-my-connected-component"},"Why don't I have ",Object(r.b)("inlineCode",{parentName:"h3"},"this.props.dispatch")," available in my connected component?"),Object(r.b)("p",null,"The ",Object(r.b)("inlineCode",{parentName:"p"},"connect()")," function takes two primary arguments, both optional. The first, ",Object(r.b)("inlineCode",{parentName:"p"},"mapStateToProps"),", is a function you provide to pull data from the store when it changes, and pass those values as props to your component. The second, ",Object(r.b)("inlineCode",{parentName:"p"},"mapDispatchToProps"),", is a function you provide to make use of the store's ",Object(r.b)("inlineCode",{parentName:"p"},"dispatch")," function, usually by creating pre-bound versions of action creators that will automatically dispatch their actions as soon as they are called."),Object(r.b)("p",null,"If you do not provide your own ",Object(r.b)("inlineCode",{parentName:"p"},"mapDispatchToProps")," function when calling ",Object(r.b)("inlineCode",{parentName:"p"},"connect()"),", React Redux will provide a default version, which simply returns the ",Object(r.b)("inlineCode",{parentName:"p"},"dispatch")," function as a prop. That means that if you ",Object(r.b)("em",{parentName:"p"},"do")," provide your own function, ",Object(r.b)("inlineCode",{parentName:"p"},"dispatch")," is ",Object(r.b)("em",{parentName:"p"},"not")," automatically provided. If you still want it available as a prop, you need to explicitly return it yourself in your ",Object(r.b)("inlineCode",{parentName:"p"},"mapDispatchToProps")," implementation."),Object(r.b)("h4",{id:"further-information-4"},"Further information"),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Documentation")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"https://react-redux.js.org/api/connect"}),"React Redux API: connect()"))),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Discussions")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/reduxjs/react-redux/issues/89"}),"React Redux #89: can i wrap multi actionCreators into one props with name?")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/reduxjs/react-redux/issues/145"}),"React Redux #145: consider always passing down dispatch regardless of what mapDispatchToProps does")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/reduxjs/react-redux/issues/255"}),"React Redux #255: this.props.dispatch is undefined if using mapDispatchToProps")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"http://stackoverflow.com/questions/34458261/how-to-get-simple-dispatch-from-this-props-using-connect-w-redux/34458710%5D"}),"Stack Overflow: How to get simple dispatch from this.props using connect w/ Redux?"))),Object(r.b)("h3",{id:"should-i-only-connect-my-top-component-or-can-i-connect-multiple-components-in-my-tree"},"Should I only connect my top component, or can I connect multiple components in my tree?"),Object(r.b)("p",null,"Early Redux documentation advised that you should only have a few connected components near the top of your component tree. However, time and experience has shown that such a component architecture generally requires a few components to know too much about the data requirements of all their descendants, and forces them to pass down a confusing number of props."),Object(r.b)("p",null,"The current suggested best practice is to categorize your components as \u201cpresentational\u201d or \u201ccontainer\u201d components, and extract a connected container component wherever it makes sense:"),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"Emphasizing \u201cone container component at the top\u201d in Redux examples was a mistake. Don't take this as a maxim. Try to keep your presentation components separate. Create container components by connecting them when it's convenient. Whenever you feel like you're duplicating code in parent components to provide data for same kinds of children, time to extract a container. Generally as soon as you feel a parent knows too much about \u201cpersonal\u201d data or actions of its children, time to extract a container.")),Object(r.b)("p",null,"In fact, benchmarks have shown that more connected components generally leads to better performance than fewer connected components."),Object(r.b)("p",null,"In general, try to find a balance between understandable data flow and areas of responsibility with your components."),Object(r.b)("h4",{id:"further-information-5"},"Further information"),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Documentation")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"/basics/usage-with-react"}),"Basics: Usage with React")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"/faq/performance#performance-scaling"}),"FAQ: Performance - Scaling"))),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Articles")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0"}),"Presentational and Container Components")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"http://somebody32.github.io/high-performance-redux/"}),"High-Performance Redux")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/markerikson/react-redux-links/blob/master/react-redux-architecture.md#redux-architecture"}),"React/Redux Links: Architecture - Redux Architecture")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/markerikson/react-redux-links/blob/master/react-performance.md#redux-performance"}),"React/Redux Links: Performance - Redux Performance"))),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Discussions")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"https://twitter.com/dan_abramov/status/668585589609005056"}),"Twitter: emphasizing \u201cone container\u201d was a mistake")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/reduxjs/redux/issues/419"}),"#419: Recommended usage of connect")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/reduxjs/redux/issues/756"}),"#756: container vs component?")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/reduxjs/redux/issues/1176"}),"#1176: Redux+React with only stateless components")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"http://stackoverflow.com/questions/34992247/can-a-dumb-component-use-render-redux-container-component"}),"Stack Overflow: can a dumb component use a Redux container?"))),Object(r.b)("h3",{id:"how-does-redux-compare-to-the-react-context-api"},"How does Redux compare to the React Context API?"),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Similarities")),Object(r.b)("p",null,'Both Redux and React\'s Context API deal with "prop drilling". That said, they both allow you to pass data without having to pass the props through multiple layers of components. Internally, Redux ',Object(r.b)("em",{parentName:"p"},"uses")," the React context API that allows it to pass the store along your component tree."),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Differences")),Object(r.b)("p",null,"With Redux, you get the the power of ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/zalmoxisus/redux-devtools-extension"}),"Redux Dev Tools Extension"),". It automatically logs every action your app performs, and it allows time traveling \u2013 you can click on any past action and jump to that point in time. Redux also supports the concept of middleware, where you may bind customized function calls on every action dispatch. Such examples include an automatic event logger, interception of certain actions, etc."),Object(r.b)("p",null,"With React's Context API, you deal with a pair of components speaking only to each other. This gives you nice isolation between irrelevant data. You also have the flexibility of how you may use the data with your components, i.e., you can provide the state of a parent component, and you may pass context data as props to wrapped components."),Object(r.b)("p",null,"There is a key difference in how Redux and React's Context treat data. Redux maintains the data of your whole app in a giant, stateful object. It deduces the changes of your data by running the reducer function you provide, and returns the next state that corresponds to every action dispatched. React Redux then optimizes component rendering and makes sure that each component re-renders only when the data it needs change. Context, on the other hand, does not hold any state. It is only a conduit for the data. To express changes in data you need to rely on the state of a parent component."),Object(r.b)("h4",{id:"further-information-6"},"Further information"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"https://daveceddia.com/context-api-vs-redux/"}),"Redux vs. The React Context API")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"https://www.simplethread.com/cant-replace-redux-with-hooks/"}),"You Might Not Need Redux (But You Can\u2019t Replace It With Hooks)"))))}l.isMDXComponent=!0},184:function(e,t,a){"use strict";a.d(t,"a",(function(){return b})),a.d(t,"b",(function(){return d}));var n=a(0),o=a.n(n);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var p=o.a.createContext({}),l=function(e){var t=o.a.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i({},t,{},e)),a},b=function(e){var t=l(e.components);return o.a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},m=Object(n.forwardRef)((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),b=l(a),m=n,d=b["".concat(c,".").concat(m)]||b[m]||u[m]||r;return a?o.a.createElement(d,i({ref:t},p,{components:a})):o.a.createElement(d,i({ref:t},p))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,c=new Array(r);c[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:n,c[1]=i;for(var p=2;p<r;p++)c[p]=a[p];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"}}]);