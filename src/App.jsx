import { useState } from "react";
import TodoHeader from "./components/TodoHeader";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

function fetchTodos() {
  const result = [];
  for (let i = 0; i < localStorage.length; i++) {
    const value = localStorage.key(i);
    result.push(value);
  }
  return result;
}

function App() {
  //  const [count, setCount] = useState(0);
  // const [inputText, setInputText] = useState("");
  //const todos = fetchTodos();
  const [todos, setTodos] = useState(fetchTodos());

  const addTodo = (todo) => {
    localStorage.setItem(todo, todo);
    // todos.push(inputText);
    setTodos((currentTodos) => {
      return [...currentTodos, todo]; //... : 배열을 풀어서 집어넣어달라는 의미
    });
    //    setInputText("");
  };

  const removeTodo = (todo) => {
    // console.log(todo, index);
    // todos.splice(index, 1);

    const result = todos.filter((todoItem) => {
      if (todoItem !== todo) {
        return true;
      }
    });
    setTodos(result);
    localStorage.removeItem(todo);
  };

  return (
    <div>
      {/* <TodoHeader></TodoHeader> */}
      <TodoHeader />
      <TodoInput onTodoAdd={addTodo} />
      <TodoList todos={todos} onTodoRemove={removeTodo} />
      {/* <div>
        <input type="text" value={inputText} onChange={handleInput} />
        <button onClick={handleClick}>add</button>
      </div> */}

      {/* <div>
        <ul>
          {todos.map((todo, index) => {
            return (
              <li key={index}>
                <span>{todo}</span>
                <span>
                  <button onClick={() => removeTodo(todo)}>remove</button>
                </span>
              </li>
            );
          })}
        </ul>
      </div> */}
    </div>
  );
}

export default App;
