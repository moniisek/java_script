import React from 'react';



function AwesomeCheckbox(props) {
  const completedStyle = {
    textDecoration: "line-through",
    fontStyle: "italic",
    color: "#cdcdcd"
  }

  return(
    <div className="todo-item">
      <input
        type="checkbox"
        name="item"
        onChange={() => props.handleChange(props.item.id)}
      />
       <span style={props.item.completed ? completedStyle : null}>{props.item.text}</span>
    </div>
  )
}

export default AwesomeCheckbox;
