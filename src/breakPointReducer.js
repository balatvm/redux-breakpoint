import breakpointCalculator from './breakpointCalculator';

//Initial State

const initialState = breakpointCalculator();

const breakpointReducer = function(state = initialState,action){
   
   switch(action.type){
       case 'BREAKPOINT_CHANGE':
         
          let newState = breakpointCalculator();
          return newState;

       
       default:
          return state;
   }
}

export default breakpointReducer;