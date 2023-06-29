import "./App.css";
import { useState, useEffect, useRef } from "react";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [todo, setTodo] = useState([]);
  const [text, setText] = useState("");
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus()
  }, [text]);

  const valueChange = (e) => {
    setText(e.target.value);
    console.log(text);
  };

  const addTodoBtn = () => {
    const newTodo = { id: uuidv4(), text };
    setTodo([...todo, newTodo]);
    console.log(newTodo);
    setText("");
  };

  return (
    <div className="container">
      <div className="inner">
        <input value={text} onChange={(e) => valueChange(e)} ref={inputRef} />
        <button onClick={addTodoBtn}>추가하기</button>
      </div>
      <h1>Todo List</h1>

      <div className="todo-container">
        {todo.map((item) => {
          return (
            <div className="todo-box" key={item.id}>
              <div>{item.text}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
