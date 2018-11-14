# react-navigation-guard
[![npm](https://img.shields.io/badge/npm-v1.0.0-blue.svg)]()
[![license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/ninanung/react-navigation-guard/blob/master/LICENSE)

## Why React need navigation guard?  
React is pretty cool. I like to make something with React, but there's something React doesn't have. Navigation-Guard, Vue has 'navigation guard' basically, it is kinda function that activated when url changed(it means, when user redirect). React also can use 'history' for navigation checking and it makes developer control component in the react-router. But, 'history' options needed to set in the each of every component and i don't wanna do that. Nevertheless, React is nice, there's no doubt. But i'm greedy. I want more.  

## So?  
So! I made a simple navigation guard module for React. It is really simple, but you can use this to check url, url parameter and route path. If you want, also you can use this with Redux(react-redux etc...). I hope you geeks like this! Enjoy!  

## How to install  
Install with npm.
```
cd your/some/npm/project
npm install --save react-navigation-guard
```  

## Before using  
This module is React Component

## How to use  
First, you need to `import`.
```javascript
// using ES6 modules
import NavigationGuard from 'react-navigation-guard';
// using CommonJS modules. I don't know, maybe this form of importing doesn't need for React.
const NavigationGuard = require('react-navigation-guard');

const someString = "someStringThatIWantToCheck";
const checkResult = someFunction(someString);
if(checkResult) {
    doingSomething();
} else {
    doingOtherthing();
}
```  

## License  
[MIT](https://github.com/ninanung/react-navigation-guard/blob/master/LICENSE)