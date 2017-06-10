## redux-breakpoin

> Make your component aware of breakpoint and device width just by connecting to store.

This is a helper library to make your redux based application more responsive. 

### Browser Support
This library is supported in all the browser where redux is supported. No extra dependencies are added.



## Intro

   _redux-breakpoint_  library is useful for the following cases:




1) When you have to write different rendering logic for different device width breakpoint. (Reminder! JS and CSS media-query are not mutual friends). 

2) If you are writing or using any component level responsive library to detect width change/ breakpoint change, then you're against the core principle of Redux - **Single source of truth** .  Device width change / breakpoint change is global for your application, So it must be in redux store.

3) This library uses breakpoint definition of bootstrap 4. It doesn't mean that, store will get dispatched only for those breakpoint change. Store gets dispatched for every resize of the device (Performance is taken care with debouncing). So you have full flexibility to have your own unlimited breakpoint definition by using the width from store.

> Theoritically, Every pixel is a breakpoint. 

4) It can be used in React/ Angular2 or in any other application where redux is used.

**[Live Demo](https://bala94.github.io/)**  (Note: This demo application uses Redux chart to visualize the store. IE doesn't support the demo. PS: redux-breakpoint is fully supported in IE) 


## Installation

`npm install redux-breakpoint --save`

## How to use

```js
import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import syncBreakpointWithStore, {breakpointReducer} from 'redux-breakpoint'

import reducers from '<file-path>/reducers'

// Add the breakpoint reducer to your store
const store = createStore(
  combineReducers({
    ...reducers,
    breakpoint: breakpointReducer
  })
)

// make your store sync with device width change.
syncBreakpointWithStore(store);

ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('root')
)
```

 


###  syncBreakPointWithStore(store,config) 
  This is similar to syncHistoryWithStore from react-redux-router.
  As soon as you created the store object, call syncBreakPointWithStore function by passing your store object as written in the above code.

  The second parameter config is an optional parameter. Use it only if you want to change the default debounce settings.
  By default, debounce is **_True_** and debounceTime is _**100ms**_. 

  ex:  
  ```
   syncBreakPointWithStore(store, {
          debounceTime: 200
       })
  ```

```
   syncBreakPointWithStore(store, {
          debounce: false
       })
```  

### breakpointReducer
  This is similar to routerReducer from react-redux-router. Wherever you combine your other reducers, just add this along. 


### Example usage
  We'll take one Real use case. Let's say we want to use [DateRangePicker](https://github.com/airbnb/react-dates) component from airbnb's react-dates library.
  It has a property called orientation. And the value can be either "horizontal" or "vertical". To make this component responsive, I have to pass the property value as "vertical" For xs breakpoint (Mobile potrait), for other breakpoints I want to pass it as "horizontal". It's obvious that CSS media-query can't help in this case. **redux-breakpoint** is there to help us.  **Let's go..**
  

```js
import React from 'react'
import {connect} from 'react-redux';
import {DateRangePicker} from 'react-dates'  //Sample

class ExampleComponent extends React.Component{
  
   render(){
      let orientation = "horizontal";
      let {breakpoint} = this.props;
      if(breakpoint.isExtraSmall){
         orientation = "vertical";
      } 
       
      return(

     <DateRangePicker orientation={orientation} /> 
     )
   }

}
mapStateToProps(state){ 
  return {
    breakpoint: state.breakpoint
  }
}
)
export default connect(mapStateToProps,null)(ExampleComponent);
```

If you want to have your own breakpoint, use breakpoint.width.

```js

 if(breakpoint.width < 400){
         orientation = "vertical";
      } 

```

That's all it takes. It's just one example. When your application grows, you might need more Components/Container to be aware of breakpoints. So it does make sense to keep the breakpoint in store and the calculation logic in reducer.

 

## Available breakpoints
   _isExtraSmall, isSmall, isMedium, isLarge, isExtraLarge_. (The breakpoint calculation is same as bootstrap's [breakpoint](https://v4-alpha.getbootstrap.com/layout/overview/).

   Apart from these store breakpoint variables,  _width_  and _height_ also available. So if you want your custom breakpoint logic, you can use these. 

   Store is dispatched for width or height change, so that you have the full flexiblity to have your own logic based on the width and even height.
   
   "Why store is dispatched for every width/height change instead of only breakpoint change ? " You may ask. 
   Answer - If we dispatch only for breakpoint change (Small to Medium), we're taking away the flexibility of having our own breakpoint. Theoritically, every pixel is a breakpoint. That's why we named our action type as 'BREAKPOINT_CHANGE' instead of 'SIZE_CHANGE'.



## Features
1. It uses [Debounce](https://medium.com/@_jh3y/throttling-and-debouncing-in-javascript-b01cad5c8edf) logic to avoid unwanted dispatches, in turn it'll avoid unwanted re-rendering.

2. This library is not only for breakpoint, it also can be used as window resize trigger. If any of your components/container has to use resize listener for xxx reason, it's very easy to subscribe to store rather than adding 'resize' listener to window and writing debounce or throttle logic again.  

## Next Steps

1. Accepting custom breakpoint in the config parameter.

2. @Breakpoint decorator to  subscribe to store breakpoint.


