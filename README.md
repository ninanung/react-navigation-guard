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

## How to use(example code)  
__1st__, you need to `import` everything you need.
```javascript
// using ES6 modules
import NavigationGuard from 'react-navigation-guard';
// and other things
import React, { Component } from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';
```  

__2nd__, make `Router` component. Point is, you have to pass the props `exaxt`, `component` and `path`. If you have used `react-router-dom` module, you will know what these props do.  
  
__exact__ :  You can choose True or False. True will set `exact` to `Route` and false will not.  
__component__ : It is easy, the component that you want to show.  
__path__ : You can set a path for rendering component. It is kind of address for eash page.  
  
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

__3rd__, set the root component.
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

__4th__, make few simple component for test.
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

__Last__, 

## License  
[MIT](https://github.com/ninanung/react-navigation-guard/blob/master/LICENSE)