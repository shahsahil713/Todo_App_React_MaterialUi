import React, { useState } from "react";
import TodoList from "./ToDoList";
// import "./App.css";
import AddIcon from "@material-ui/icons/Add";
import Button from "@material-ui/core/Button";
import CallMadeIcon from "@material-ui/icons/CallMade";

// import Task from "./Task";

const Main = () => {
  const gitLink = "https://github.com/shahsahil713?tab=repositories";
  const [val, setval] = useState("");
  const [items, setItems] = useState([]);
  const addTask = () => {
    setItems((oldItems) => {
      return [...oldItems, val];
    });
    setval("");
  };
  const addText = (e) => {
    setval(e.target.value);
  };

  const itemDelete = (id) => {
    console.log(id);
    setItems((oldItems) => {
      return oldItems.filter((errElem, index) => {
        return index !== id;
      });
    });
  };
  return (
    <>
      <div className="container">
        <div className="row">
          <h1>Todo App</h1>

          <input
            type="text"
            onChange={addText}
            name="taskName"
            value={val}
            placeholder="Enter Task"
          />
          <Button onClick={addTask} className="newBtn">
            <AddIcon />
          </Button>

          <ol>
            {items.map((itemVal, index) => {
              return (
                <TodoList
                  text={itemVal}
                  key={index}
                  id={index}
                  onSelect={itemDelete}
                />
              );
            })}
          </ol>
        </div>
      </div>

      <h3 className="myName">
        💲 Developed By Sahil Shah 💲
        <br />
        <a href={gitLink}>
          <CallMadeIcon />
          Github
        </a>{" "}
      </h3>
    </>
  );
};

export default Main;
