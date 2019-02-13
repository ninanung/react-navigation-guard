# react-navigation-guard
[![npm](https://img.shields.io/badge/npm-v1.0.4-blue.svg)](https://www.npmjs.com/package/react-navigation-guard)
[![license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/ninanung/react-navigation-guard/blob/master/LICENSE)

## Why React need navigation guard?  
React is pretty cool. I like to make something with React, but there's something React doesn't have. Navigation-Guard, Vue has 'navigation guard' basically, it is kinda function that activated when url changed(it means, when user redirect). React also can use 'history' for navigation checking and it makes developer control component in the react-router. But, 'history' options needed to set in the each of every component and i don't wanna do that. Nevertheless, React is nice, there's no doubt. But i'm greedy. I want more.  

## So?  
So! I made a simple navigation guard module for React. It is really simple, but you can use this to check url, url parameter and route path. If you want, also you can use this with Redux(react-redux etc...). I hope you geeks like this! Enjoy!  

## How to install  
Install with npm.
```
cd to/your/npm/project
npm install --save react-navigation-guard
```  

## Before using  
react-navigation-guard is a React Component and wrap the `Route` that imported from `react-router-dom`. So, you will need several `react-router-dom` module's object, like `Switch` and `BrowserRouter`. I will show you the example in the "how to use" part.  

## How to use(with example code)  
I will let you know how to set this module and show you the sample code of `src/App.js` file of React project.  
Also you can see this sample code in [react-navigation-guard-sample](https://github.com/ninanung/react-navigation-guard-sample) repo.  

------------------------------------------
### First  
You need to `import` everything you need.
```javascript
// using ES6 modules
import NavigationGuard from 'react-navigation-guard';
// and other things
import React, { Component } from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';
```  
------------------------------------------
### Second  
Make `Router` component. Point is, you have to pass these 6 props, `exaxt`, `component`, `path`, `returnBool`, `ifTrue` and `ifFalse`, and it is not optional. First thing first, i will use 3 basic props. If you have used `react-router-dom` module, you will know what these props do.  
  
__exact__ : __Bool__. You can choose True or False. True will set `exact` option and false will not.  
__component__ : __Function__. Yes, react component is function. This is easy part, `import` or make component and pass it.  
__path__ : __String__. You can set a path for pages. It is kind of address to each component.  
  
Example Code
```javascript
class Router extends Component {
  render() {
    return (
      <Switch>
        <NavigationGuard exact={true} component={Home} path='/' />
        <NavigationGuard exact={true} component={Test} path='/test' />
      </Switch>
    )
  }
}
```  
Next is other 3 props. These are `react-navigation-guard`'s own props and you have to make your own functions for these.  
  
__NOTICE__  
- You must write two or three parameters when you make functions.  
  
__returnBool__ : __Function(path, params)__. This function must return bool type. You can use this like example code below.  
__ifTrue__ : __Function(path, params, stopRender)__. This function ran when `returnBool` function's return value is true.  
__ifFalse__ : __Function(path, params, stopRender)__. This function ran when `returnBool` function's return value is false.  
> path : `string`, __NOT optional__. path of component you want to move.  
> params : `object`, __NOT optional__. path parameters of URL.  
> blockRender : `function`, __NOT optional__. if you want to block rendering the component, use this parameter.  

Example Code
```javascript
class Router extends Component {
  returnBool = (path, params) => {
    console.log(path); // will show you like this "/sample/path"
    console.log(params); // will show you like this {some: "something", some2: "something2"}
    if(path === '/path/example') {
      return true;
    } else {
      return false;
    }
  }

  ifTrue = (path, params, blockRender) => {
    // will render the component you set after this function end.
    console.log('do something when true');
  }

  ifFalse = (path, params, blockRender) => {
    blockRender(); // will not render the component you set
    console.log('do something when false');
  }

  render() {
    return (
      <Switch>
        <NavigationGuard exact={true} component={Home} path='/' returnBool={this.returnBool} ifTrue={this.ifTrue} ifFalse={this.ifFalse} />
        <NavigationGuard exact={true} component={Test} path='/test/:test' returnBool={this.returnBool} ifTrue={this.ifTrue} ifFalse={this.ifFalse} />
      </Switch>
    )
  }
}
```  
One more thing, you don't need to use `NavigationGuard` if some component is not needed to check. You can just use `Route`.  
  
Example Code
```javascript
  render() {
    return (
      <Switch>
        <NavigationGuard exact={true} component={Home} path='/' returnBool={this.returnBool} ifTrue={this.ifTrue} ifFalse={this.ifFalse} />
        <NavigationGuard exact={true} component={Test} path='/test/:test' returnBool={this.returnBool} ifTrue={this.ifTrue} ifFalse={this.ifFalse} />
        <Route path='/dont/need/to/check' component={DontCheck} />
      </Switch>
    )
  }
```
------------------------------------------
### Third  
Set the `App` component.
```javascript
class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Router/>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
```  
------------------------------------------
### Fourth  
Make few simple component for test. I already use these component for __second__ part.
```javascript
class Home extends Component {
  render() {
    return (
      <h1>home</h1>
    )
  }
}

class Test extends Component {
  render() {
    return (
      <h1>test</h1>
    )
  }
}
```  
------------------------------------------
### Full code of example  
```javascript
import React, { Component } from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';
import NavigationGuard from 'react-navigation-guard';

class Home extends Component {
  render() {
    return (
      <h1>home</h1>
    )
  }
}

class Test extends Component {
  render() {
    return (
      <h1>test</h1>
    )
  }
}

class Router extends Component {
  returnBool = (path, params) => {
    console.log(path); // will show you like this "/sample/path"
    console.log(params); // will show you like this {some: "something", some2: "something2"}
    if(path === '/path/example') {
      return true;
    } else {
      return false;
    }
  }

  ifTrue = (path, params, blockRender) => {
    // will render the component you set after this function end.
    console.log('do something when true');
  }

  ifFalse = (path, params, blockRender) => {
    blockRender(); // will not render the component you set
    console.log('do something when false');
  }

  render() {
    return (
      <Switch>
        <NavigationGuard exact={true} component={Home} path='/' returnBool={this.returnBool} ifTrue={this.ifTrue} ifFalse={this.ifFalse} />
        <NavigationGuard exact={true} component={Test} path='/test/:test' returnBool={this.returnBool} ifTrue={this.ifTrue} ifFalse={this.ifFalse} />
      </Switch>
    )
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Router/>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
```

## License  
[MIT](https://github.com/ninanung/react-navigation-guard/blob/master/LICENSE)