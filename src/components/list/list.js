
import React from "react";
import "./list.css";




class List extends React.Component{
   constructor(props){
      super(props);
     this.state={ischecked:false};
     this.togglecheckbox=this.togglecheckbox.bind(this);
   
   
   }
   togglecheckbox(){  
      this.setState(({ischecked}) =>({ischecked:!ischecked,}));
         
      } 
   
      
  
 render(){ 
  
  
     
         if(this.state.ischecked===true){
       
            return(
            <ul > {
               this.props.items.map((item,index) => <li onClick={this.togglecheckbox}    key={index}>{item} <span className="close">&times;</span></li>)
               }
            </ul>  
            )
         }
         else if(this.state.ischecked===false){
         
            return(
            <ul> {
               this.props.items.map((item,index) => <li onClick={this.togglecheckbox}   className={"checked"}    key={index}>{item}<span className="close">&times;</span></li>)
               }
            </ul> 
            )
         }
        
   
      
    }


 }
 export default List;