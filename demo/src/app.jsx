import React from 'react';
import {connect} from 'react-redux';


const style = {
  rowStyle: {
    backgroundColor: "lightblue",
    fontWeight: "bold"
  },
  activeStyle: {
    backgroundColor: "lightblue",
    fontWeight: "bold"
  },
  inActiveStyle: {
    backgroundColor: "lightgrey"
  }
}


 class App extends React.Component {
   constructor(){
     super();
     this.resizeCount = -1;
   }
  render() {
    this.resizeCount ++ ;
    let {breakpoint} = this.props;
    return (
      <div style={{marginTop:"15px"}} className = "container">


        <div className = "row">
        <div style={{marginTop:"10px"}} className="container col-8">
          <p style={{alignContent:"center", color:"green"}}> Resize your browser window and see the store updates. </p>

            <div style = {style.rowStyle} className="row">
               <div className="col-9">  width </div>
               <div className="col-3"> {breakpoint.width} </div>
             </div>
             
             
             <p> </p>


             <div style = {breakpoint.isExtraSmall ? style.activeStyle: style.inActiveStyle} className="row">
               <div className="col-9">  isExtraSmall </div>
               <div className="col-3"> {breakpoint.isExtraSmall ? "True": "False"} </div>
             </div>
             <p> </p>
             <div style = {breakpoint.isSmall ? style.activeStyle: style.inActiveStyle } className="row">
               <div className="col-9">  isSmall </div>
               <div className="col-3"> {breakpoint.isSmall ? "True": "False"} </div>
             </div>
             <p> </p>
             <div style = {breakpoint.isMedium ? style.activeStyle: style.inActiveStyle} className="row">
               <div className="col-9">  isMedium </div>
               <div className="col-3"> {breakpoint.isMedium ? "True": "False"} </div>
             </div>
             <p> </p>
             <div style = {breakpoint.isLarge ? style.activeStyle: style.inActiveStyle} className="row">
               <div className="col-9">  isLarge </div>
               <div className="col-3"> {breakpoint.isLarge ? "True": "False"}</div>
             </div>
             <p> </p>
             <div style = {breakpoint.isExtraLarge ? style.activeStyle: style.inActiveStyle} className="row">
               <div className="col-9">  isExtraLarge </div>
               <div className="col-3"> {breakpoint.isExtraLarge ? "True": "False"} </div>
             </div>
            
    
                  
        </div>
    
         
         

        </div> 
         <div  style={{marginTop:"25px"}} className = "row">
           <div  className="container col-8"> 
               <li> Resize events are controlled by <span style={{fontWeight:"bold"}}>  Debouncing </span> to avoid unwanted dispatches. 
                  <span style={{ color:"blue"}}> Dispatch count: {this.resizeCount} </span> </li>
               <li> Above breakpoints are based on bootstrap's standard </li>
               <li> Above varialbles are available in store in state.breakpoint. 
                   Ex:  <span style={{ color:"blue", fontStyle:"italic"}}>  breakpoint.width, breakpoint.isSmall </span> </li>
              
               <li> <span style={{ color:"green"}}> By default, height change is not dispatched. You can enable it, if you really need. </span> </li>
              </div>
         </div>
        </div>
      
    )
  }
}

function mapStateToProps(state){
   return {
     breakpoint: state.breakpoint
   }
}

export default connect(mapStateToProps,null)(App);
