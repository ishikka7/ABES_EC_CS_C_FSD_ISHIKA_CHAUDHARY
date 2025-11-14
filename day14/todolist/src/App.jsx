import { useState } from "react"
import InputTodo from "./component/InputToDo"
import "./App.css";
function App() {
  const [todoList, setTodoList] = useState([]);
  const inputHandler = (inputVal) => {
    setTodoList([...todoList, inputVal]);
  }
  const deleteHandler = (index) => {
    let newList = [...todoList];
    newList.splice(index, 1);
    setTodoList(newList);
  }
  const updateHandler = (index) => {
    let newList = [...todoList];
    const updatedTask = prompt("Update your task:", newList[index]);
    if (updatedTask !== null && updatedTask.trim() !== "") {
      newList[index] = updatedTask;
      setTodoList(newList);
    }
  }
  return (
    <div className="todo-list">
      <h2>TODO LIST</h2>
      {todoList.map((data, index) =>
        <li key={index}>
          {data}
          <button onClick={() => deleteHandler(index)}>DEL</button>
          <button onClick={() => updateHandler(index)}>UPDATE</button>
          
        </li>
      )}
      <InputTodo inputHandler={inputHandler} />
    </div>
  )
}

export default App;