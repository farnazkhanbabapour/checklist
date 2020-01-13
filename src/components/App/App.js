import React from 'react';
import './App.css';
import List from '../list/list';




 class App extends React.Component{
  constructor(props){
    super(props);
    this.state={
      term: " ",
      items:[ ],
    }
  }
  onchange= (event) => {
    this.setState({term: event.target.value});
  }
  onsubmit= (event) =>{
    event.preventDefault();
    this.setState({
      term:" ",
      items:[...this.state.items,this.state.term]
    })
  }
 render(){
   return(
    <div>
    <form className="header" onClick={this.onsubmit} >
    <h2>My Checklist</h2>
    <input value={this.state.term} onChange={this.onchange} className="input" type="text" name="checklist" placeholder="Title..." />
    <span class="addbtn" >Add</span>
    </form>
    <List items={this.state.items}/>
   </div> 
   );
 }
}
export default App;


 
