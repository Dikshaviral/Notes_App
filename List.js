import React from "react";
import "./list.css";


function List(props) {
  let allTasks = props.alltasks.map((task) => {
    return (
      <li key={task.id} className="listElement">
        {task.todo} <button  onClick={() => {
          props.deleteTask(task.id)
          console.log(task.id)
        }}classname ="btn" >X</button>
      </li>
    );
  });

  return <ul>{allTasks}</ul>;
}

export default List;
