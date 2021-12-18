---
id: general
title: General
hide_title: true
---

&nbsp;

# Redux FAQ: 자주 묻는 질문

## 언제 리덕스를 써야할까요?

무엇을 배워야 하는가의 질문은 자바스크립트 개발자에게 매우 어려운 질문이 될 수 있습니다. 한 번에 한 가지씩 학습하고 업무에서 발견한 문제에 집중함으로써 선택의 폭을 좁히는 데 도움이 됩니다. 리덕스는 애플리케이션의 상태를 관리하기 위한 패턴입니다. 상태 관리에 문제가 없다면 리덕스의 이점을 이해하기 어려울 수 있습니다. 일부 UI 라이브러리(예:리액트)에는 자체 상태 관리 시스템이 있습니다. 이러한 라이브러리 중 하나를 사용하는 경우, 특히 이러한 라이브러리 사용법을 배우는 경우 먼저 해당 라이브러리에 내장된 기본 시스템을 학습하는 것이 좋습니다. 그것으로 애플리케이션이 필요로 하는 것을 모두 빌드할 수 있습니다. 애플리케이션이 너무 복잡해져서 상태가 어디에 있는지 모르거나 혹은 상태가 어떻게 변경되었는지 헷갈린다면 리덕스를 배우는 것이 좋습니다.

:::팁

**대부분의 새로운 학습자들은 먼저 리액트가 익숙해질 때까지 먼저 리액트를 학습하는 것을 권장합니다** 그렇게 하면, 한 번 배울 때 새로운 개념들이 적어지고, 리액트의 개념들과 리덕스의 개념들이 더욱 명확해집니다. 또한 리액트 앱에서 어떻게 알맞게 사용하는지, 그리고 왜 리덕스가 유용한지 보다 잘 이해할 수 있습니다.

:::

#### 추가 정보

**읽어볼 것들**

- [배우지 말아야 할 것 결정하기](https://gedd.ski/post/what-not-to-learn/)
- [어떻게 웹 프레임워크를 배울 것인가](https://ux.shopify.com/how-to-learn-web-frameworks-9d447cb71e68)
- [리덕스 vs MobX vs Flux vs... 그게 필요한가?](https://goshakkk.name/redux-vs-mobx-vs-flux-etoomanychoices/)

**토론**

- [Ask HN: 벅찬 프론트엔드 학습, 어떻게 진행해야 할까요?](https://news.ycombinator.com/item?id=12882816)
- [Twitter: 누군가에게 추상화 사용법을 가르치고 싶다면...](https://twitter.com/acemarke/status/901329101088215044)
- [Twitter: 전에는 배우려고 한적이 없었다...](https://twitter.com/dan_abramov/status/739961787295117312)
- [Twitter: 리액트 전에 리덕스 배우기?](https://twitter.com/dan_abramov/status/739962098030137344)
- [Twitter: 내가 리액트를 처음 사용 했을 때 사람들은 내게 리덕스가 필요하다고 말했습니다...](https://twitter.com/raquelxmoss/status/901576285020856320)
- [Twitter: 이것은 리덕스에 대한 나의 경험이었습니다...](https://twitter.com/garetmckinley/status/901500556568645634)
- [Dev.to: 언제 리덕스를 사용해야 합니까?](https://dev.to/dan_abramov/comment/1n2k)

## When should I use Redux?

**Not all apps need Redux. It's important to understand the kind of application you're building, the kinds of problems that you need to solve, and what tools can best solve the problems you're facing.**

Redux helps you deal with shared state management, but like any tool, it has tradeoffs. It's not designed to be the shortest or fastest way to write code. It's intended to help answer the question "When did a certain slice of state change, and where did the data come from?", with predictable behavior. There are more concepts to learn, and more code to write. It also adds some indirection to your code, and asks you to follow certain restrictions. It's a trade-off between short term and long term productivity.

As Pete Hunt, one of the early contributors to React, says:

> You'll know when you need Flux. If you aren't sure if you need it, you don't need it.

Similarly, Dan Abramov, one of the creators of Redux, says:

> I would like to amend this: don't use Redux until you have problems with vanilla React.

**Redux is most useful when in cases when**:

- You have large amounts of application state that are needed in many places in the app
- The app state is updated frequently
- The logic to update that state may be complex
- The app has a medium or large-sized codebase, and might be worked on by many people
- You need to see how that state is being updated over time

There are also many other tools available that can help solve some of the same problems Redux does: state management, caching fetched server data, and passing data through the UI.

:::info

If you're not sure whether Redux is a good choice for your app, these resources give some more guidance:

- **[When (and when not) to reach for Redux](https://changelog.com/posts/when-and-when-not-to-reach-for-redux)**
- **[The Tao of Redux, Part 1 - Implementation and Intent](https://blog.isquaredsoftware.com/2017/05/idiomatic-redux-tao-of-redux-part-1/)**
- **[You Might Not Need Redux](https://medium.com/@dan_abramov/you-might-not-need-redux-be46360cf367)**

:::

In the end, Redux is just a tool. It's a great tool, and there are some great reasons to use it, but there are also reasons you might not want to use it. Make informed decisions about your tools, and understand the tradeoffs involved in each decision.

#### Further information

**Documentation**

- [Thinking in Redux: Motivation](../understanding/thinking-in-redux/Motivation.md)

**Articles**

- **[When (and when not) to reach for Redux](https://changelog.com/posts/when-and-when-not-to-reach-for-redux)**
- **[The Tao of Redux, Part 1 - Implementation and Intent](https://blog.isquaredsoftware.com/2017/05/idiomatic-redux-tao-of-redux-part-1/)**
- [You Might Not Need Redux](https://medium.com/@dan_abramov/you-might-not-need-redux-be46360cf367)
- [The Case for Flux](https://medium.com/swlh/the-case-for-flux-379b7d1982c6)

**Discussions**

- [Twitter: Don't use Redux until...](https://twitter.com/dan_abramov/status/699241546248536064)
- [Twitter: Redux is designed to be predictable, not concise](https://twitter.com/dan_abramov/status/733742952657342464)
- [Twitter: Redux is useful to eliminate deep prop passing](https://twitter.com/dan_abramov/status/732912085840089088)
- [Twitter: Don't use Redux unless you're unhappy with local component state](https://twitter.com/dan_abramov/status/725089243836588032)
- [Twitter: You don't need Redux if your data never changes](https://twitter.com/dan_abramov/status/737036433215610880)
- [Twitter: If your reducer looks boring, don't use redux](https://twitter.com/dan_abramov/status/802564042648944642)
- [Reddit: You don't need Redux if your app just fetches something on a single page](https://www.reddit.com/r/reactjs/comments/5exfea/feedback_on_my_first_redux_app/dagglqp/)
- [Stack Overflow: Why use Redux over Facebook Flux?](https://stackoverflow.com/questions/32461229/why-use-redux-over-facebook-flux)
- [Stack Overflow: Why should I use Redux in this example?](https://stackoverflow.com/questions/35675339/why-should-i-use-redux-in-this-example)
- [Stack Overflow: What could be the downsides of using Redux instead of Flux?](https://stackoverflow.com/questions/32021763/what-could-be-the-downsides-of-using-redux-instead-of-flux)
- [Stack Overflow: When should I add Redux to a React app?](https://stackoverflow.com/questions/36631761/when-should-i-add-redux-to-a-react-app)
- [Stack Overflow: Redux vs plain React?](https://stackoverflow.com/questions/39260769/redux-vs-plain-react/39261546#39261546)
- [Twitter: Redux is a platform for developers to build customized state management with reusable things](https://twitter.com/acemarke/status/793862722253447168)

## Can Redux only be used with React?

Redux can be used as a data store for any UI layer. The most common usage is with React and React Native, but there are bindings available for Angular, Angular 2, Vue, Mithril, and more. Redux simply provides a subscription mechanism which can be used by any other code. That said, it is most useful when combined with a declarative view implementation that can infer the UI updates from the state changes, such as React or one of the similar libraries available.

## Do I need to have a particular build tool to use Redux?

Redux is originally written in ES6 and transpiled for production into ES5 with Webpack and Babel. You should be able to use it regardless of your JavaScript build process. Redux also offers a UMD build that can be used directly without any build process at all. The [counter-vanilla](https://github.com/reduxjs/redux/tree/master/examples/counter-vanilla) example demonstrates basic ES5 usage with Redux included as a `<script>` tag. As the relevant pull request says:

> The new Counter Vanilla example is aimed to dispel the myth that Redux requires Webpack, React, hot reloading, sagas, action creators, constants, Babel, npm, CSS modules, decorators, fluent Latin, an Egghead subscription, a PhD, or an Exceeds Expectations O.W.L. level.
>
> Nope, it's just HTML, some artisanal `<script>` tags, and plain old DOM manipulation. Enjoy!
