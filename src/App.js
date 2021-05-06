import { useState } from "react";
import ToDoLists from "./ToDoList";
import "./App.css";
const ToDoList = () => {
  const [list, setList] = useState("");
  const [item, setItem] = useState([]);
  const change = (e) => {
    setList(e.target.value);
  };
  const btnHandler = () => {
    document.querySelector("input").value = "";
    if (list === "") {
      console.log("error");
    } else {
      setItem((preData) => {
        return [...preData, list];
      });
    }
    setList("");
  };

  const deleteItem = (id) => {
    setItem((preData) => {
      return preData.filter((arr,index)=>{
        return index !== id;
      })
    }
    )};
  return (
    <>
      <div className="main_div">
        <div className="container">
          <header className="heading">ToDo List</header>
          <main className="body">
            <input
              className="input"
              type="text"
              placeholder="Add a Items"
              onChange={change}
              value={list}
            />
            <button className="btn" onClick={btnHandler}>
              +
            </button>
          </main>
        </div>
        <div className="list">
        <ol>
          {item.map((element, index) => {
            return (
              <ToDoLists
                item={element}
                key={index}
                id={index}
                onSelect={deleteItem}
              />
            );
          })}
        </ol>
        </div>
      </div>
    </>
  );
};
export default ToDoList;
