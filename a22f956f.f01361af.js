(window.webpackJsonp=window.webpackJsonp||[]).push([[59],{117:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return p})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return u}));var r=n(2),a=n(6),o=(n(0),n(149)),p={id:"isolating-redux-sub-apps",title:"Isolating Redux Sub-Apps",hide_title:!0},i={unversionedId:"recipes/isolating-redux-sub-apps",id:"recipes/isolating-redux-sub-apps",isDocsHomePage:!1,title:"Isolating Redux Sub-Apps",description:"Isolating Redux Sub-Apps",source:"@site/../docs_kr/recipes/IsolatingSubapps.md",slug:"/recipes/isolating-redux-sub-apps",permalink:"/recipes/isolating-redux-sub-apps",version:"current",sidebar:"docs",previous:{title:"Implementing Undo History",permalink:"/recipes/implementing-undo-history"},next:{title:"Using Immutable.JS with Redux",permalink:"/recipes/using-immutablejs-with-redux"}},c=[],s={rightToc:c};function u(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h1",{id:"isolating-redux-sub-apps"},"Isolating Redux Sub-Apps"),Object(o.b)("p",null,"Consider the case of a \u201cbig\u201d app (contained in a ",Object(o.b)("inlineCode",{parentName:"p"},"<BigApp>")," component)\nthat embeds smaller \u201csub-apps\u201d (contained in ",Object(o.b)("inlineCode",{parentName:"p"},"<SubApp>")," components):"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"import React, { Component } from 'react'\nimport SubApp from './subapp'\n\nclass BigApp extends Component {\n  render() {\n    return (\n      <div>\n        <SubApp />\n        <SubApp />\n        <SubApp />\n      </div>\n    )\n  }\n}\n")),Object(o.b)("p",null,"These ",Object(o.b)("inlineCode",{parentName:"p"},"<SubApp>"),"s will be completely independent. They won't share data or\nactions, and won't see or communicate with each other."),Object(o.b)("p",null,"It's best not to mix this approach with standard Redux reducer composition.\nFor typical web apps, stick with reducer composition. For\n\u201cproduct hubs\u201d, \u201cdashboards\u201d, or enterprise software that groups disparate\ntools into a unified package, give the sub-app approach a try."),Object(o.b)("p",null,"The sub-app approach is also useful for large teams that are divided by product\nor feature verticals. These teams can ship sub-apps independently or in combination\nwith an enclosing \u201capp shell\u201d."),Object(o.b)("p",null,"Below is a sub-app's root connected component.\nAs usual, it can render more components, connected or not, as children.\nUsually we'd render it in ",Object(o.b)("inlineCode",{parentName:"p"},"<Provider>")," and be done with it."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"class App extends Component { ... }\nexport default connect(mapStateToProps)(App)\n")),Object(o.b)("p",null,"However, we don't have to call ",Object(o.b)("inlineCode",{parentName:"p"},"ReactDOM.render(<Provider><App /></Provider>)"),"\nif we're interested in hiding the fact that the sub-app component is a Redux app."),Object(o.b)("p",null,"Maybe we want to be able to run multiple instances of it in the same \u201cbigger\u201d app\nand keep it as a complete black box, with Redux being an implementation detail."),Object(o.b)("p",null,"To hide Redux behind a React API, we can wrap it in a special component that\ninitializes the store in the constructor:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"import React, { Component } from 'react'\nimport { Provider } from 'react-redux'\nimport { createStore } from 'redux'\nimport reducer from './reducers'\nimport App from './App'\n\nclass SubApp extends Component {\n  constructor(props) {\n    super(props)\n    this.store = createStore(reducer)\n  }\n\n  render() {\n    return (\n      <Provider store={this.store}>\n        <App />\n      </Provider>\n    )\n  }\n}\n")),Object(o.b)("p",null,"This way every instance will be independent."),Object(o.b)("p",null,"This pattern is ",Object(o.b)("em",{parentName:"p"},"not")," recommended for parts of the same app that share data.\nHowever, it can be useful when the bigger app has zero access to the smaller apps' internals,\nand we'd like to keep the fact that they are implemented with Redux as an implementation detail.\nEach component instance will have its own store, so they won't \u201cknow\u201d about each other."))}u.isMDXComponent=!0},149:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),u=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=u(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),l=u(n),b=r,m=l["".concat(p,".").concat(b)]||l[b]||d[b]||o;return n?a.a.createElement(m,i(i({ref:t},s),{},{components:n})):a.a.createElement(m,i({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,p=new Array(o);p[0]=b;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:r,p[1]=i;for(var s=2;s<o;s++)p[s]=n[s];return a.a.createElement.apply(null,p)}return a.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);