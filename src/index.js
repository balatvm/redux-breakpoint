import breakpointReducer from './breakPointReducer';
import debouncer from './debouncer';

//Initial values
let storeRef = null;
let debounceDelay = 100;
let debounce = true;


//Default Resize listener
function onResize() {
     storeRef.dispatch({
       type: '@@BREAKPOINT_CHANGE',
       
     })
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
