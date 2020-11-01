import React from "react";
import "./input.css";

class Input extends React.Component {
  state = {
    task: "",
  };

  render() {
    return (
      <form className= "form1"
            onSubmit={(e) => {
                e.preventDefault()
          this.props.changeTasks(this.state.task);
        }}
      >
        <input className="input1"
          onChange={(e) => {
            console.log(e.currentTarget.value);
            this.setState({
              task: e.currentTarget.value,
            });
          }}
        />
      </form>
    );
  }
}

export default Input;
