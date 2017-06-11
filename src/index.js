import breakpointReducer from './breakPointReducer';
import debouncer from './debouncer';

//Initial values
let storeRef = null;
let debounceDelay = 100;
let debounce = true;
let dispatchHeight = false;


//Default Resize listener
function onResize() {
     let state = storeRef.getState();
     let previousWidth = state.breakpoint.width;
     let currentWidth = window.innerWidth;

     if(currentWidth != previousWidth || dispatchHeight){
       storeRef.dispatch({
       type: '@@BREAKPOINT_CHANGE',
       height: dispatchHeight
       
     })
     }  
}

function syncBreakpointWithStore(store, config) {
  storeRef = store;
  if(config){
    if(config.debounce != undefined){
      
      debounce = config.debounce;
    }
    if(config.debounceDelay != undefined){
      debounceDelay = config.debounceDelay;
    }
    if(config.dispatchHeight != undefined){
      dispatchHeight = config.dispatchHeight;
    }
  }
  
  
  subscribe(onResize);
}

function subscribe(callback) {

  if (debounce) {
    callback = debouncer(callback,debounceDelay);
  }
  window.addEventListener('resize',callback);
  

}


export default syncBreakpointWithStore;
export { breakpointReducer };
