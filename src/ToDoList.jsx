import React, { useState } from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import DoneIcon from "@material-ui/icons/Done";

const ToDoList = (props) => {
  const [line, setLine] = useState(false);
  const cutIt = () => {
    if (line == false) {
      setLine(true);
    } else {
      setLine(false);
    }
  };
  return (
    <>
      <div className="todo_style">
        <DeleteIcon
          className="fa fa-times"
          aria-hidden="true"
          onClick={() => {
            props.onSelect(props.id);
          }}
        />
        <DoneIcon className="fa fa-times2" aria-hidden="true" onClick={cutIt} />
        <li style={{ textDecoration: line ? "line-through" : "none" }}>
          {props.text}
        </li>
      </div>
    </>
  );
};

export default ToDoList;
