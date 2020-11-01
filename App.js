import React from 'react';
import List from "./List";
import Input from "./Input";
import logo from './images/image1.jpg';
import "./app.css";

var n= 4;

class App extends React.Component{
  
  
  state = {
    tasks:
    [
      { todo : "Be Awesome", id: 1},
      { todo : "Drink Water", id: 2},
      { todo : "Be Awesome Again", id: 3},

    ]
  }

  handleInput = (task)=> {
   let newTasks = this.state.tasks
    newTasks.push({todo:task, id:n})
    n=n+1
    this.setState(
      {
        tasks:newTasks
        
      }
    )


  };

  deleteTask = (tid) =>{
    let newTasks = this.state.tasks.filter((el) =>{
      return el.id !== tid

    })

    this.setState(
      {
        tasks:newTasks
      }
    )


  };



render() {
  return (
    <div className="mainbod">
      <div className="img1">
        <img src= {logo} alt="cue" height= "230px" width="1024px"/>
      </div>
      <div className = "strip"></div>
      <div className = "msg">
        <h2>What's on your mind today?</h2>
      </div>
      <Input changeTasks={this.handleInput} />
      <List deleteTask={this.deleteTask} alltasks={this.state.tasks} />
    </div>
  )
}
}


export default App;
