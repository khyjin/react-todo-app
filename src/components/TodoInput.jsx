import { useState } from "react";

function TodoInput({ onTodoAdd }) {
  const [inputText, setInputText] = useState("");
  const handleInput = (event) => {
    console.log(event);
    const value = event.target.value;
    setInputText(value);
  };

  const handleClick = () => {
    onTodoAdd(inputText);
    setInputText("");
  };

  //   const handleClick = () => {
  //     console.log("clicked");
  //     localStorage.setItem(inputText, inputText);
  //     // todos.push(inputText);
  //     setTodos((currentTodos) => {
  //       return [...currentTodos, inputText]; //... : 배열을 풀어서 집어넣어달라는 의미
  //     });
  //     setInputText("");
  //   };

  return (
    <div>
      <input type="text" value={inputText} onChange={handleInput} />
      <button onClick={handleClick}>add</button>
    </div>
  );
}

export default TodoInput;
