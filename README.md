# react-navigation-guard
[![npm](https://img.shields.io/badge/npm-v1.0.1-blue.svg)](https://www.npmjs.com/package/react-navigation-guard)
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
  
### First  
You need to `import` everything you need.
```javascript
// using ES6 modules
import NavigationGuard from 'react-navigation-guard';
// and other things
import React, { Component } from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';
```  
### Second  
Make `Router` component. Point is, you have to pass these 6 props, `exaxt`, `component`, `path`, `returnBool`, `ifTrue` and `ifFalse`. First thing first, i will code 3 props at start. If you have used `react-router-dom` module, you will know what these props do.  
  
__exact__ : __Bool__. You can choose True or False. True will set `exact` option and false will not.  
__component__ : __Function__. Yes, react component is function. This is easy part, `import` or make component and pass it.  
__path__ : __String__. You can set a path for pages. It is kind of address to each component.  
  
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
Next is other 3 props. These are `react-navigation-guard` module's own props and you have to code your own function for these.  
  
__There's something you need to know__  
- You must pass these props. If you don't, module will throw error.
- You must code three parameters when you make functions. I will show you what it is.  
- Parameters are `parh`, `url` and `params`. `path` is component's path that you set. `url` is address of page that user redirect. `params` is url parameters of the page.  
  
__returnBool__ : __Function(path, url, params)__. This function must return bool type. You can use this like example code below.  
__ifTrue__ : __Function(path, url, params)__. This function ran when `returnBool` function's return value is true.  
__ifFalse__ : __Function(path, url, params)__. This function ran when `returnBool` function's return value is false.  
  
```javascript
class Router extends Component {
  returnBool = (path, url, params) => {
    console.log(path);
    console.log(url);
    console.log(params);
    if(url === 'some url') {
      return true;
    } else {
      return false;
    }
  }

  ifTrue = (path, url, params) => {
    console.log('do something when true');
  }

  ifFalse = (path, url, params) => {
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
### Third  
Set the root component.
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
  returnBool = (path, url, params) => {
    console.log(path);
    console.log(url);
    console.log(params);
    if(url === 'some url') {
      return true;
    } else {
      return false;
    }
  }

  ifTrue = (path, url, params) => {
    console.log('do something when true');
  }

  ifFalse = (path, url, params) => {
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