import breakpointCalculator from './breakpointCalculator';

//Initial State

const initialState = breakpointCalculator();
initialState.height = window.innerHeight;

const breakpointReducer = function(state = initialState,action){
   
   let height = action.height ? window.innerHeight: false;
   
   switch(action.type){
       case '@@BREAKPOINT_CHANGE':
         
          let newState = breakpointCalculator();
          newState.height = height;
          return newState;

       
       default:
          return state;
   }
}

export default breakpointReducer;