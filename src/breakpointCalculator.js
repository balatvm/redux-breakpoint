import * as constants from './constants.js';

export default function getBreakPoints(){
    let isExtraSmall = false,
       isSmall = false,
       isMedium = false,
       isLarge = false,
       isExtraLarge = false,
       width = window.innerWidth;
    
    if(width < constants.XS_UPPER){
        isExtraSmall = true;
        
    }
    else if(width < constants.SM_UPPER){
        isSmall = true;
    }
    else if(width < constants.MD_UPPER){
        isMedium = true;
    }
    else if(width < constants.LG_UPPER){
        isLarge = true
    }
    else isExtraLarge = true
   
       
   
   return {
       width,
       isExtraSmall,
       isSmall,
       isMedium,
       isLarge,
       isExtraLarge
   }
}