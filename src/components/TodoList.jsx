//import React from 'react' >> React 17버전부터는 사라진 문법...

import { useState } from "react";

function fetchTodos() {
  const result = [];
  for (let i = 0; i < localStorage.length; i++) {
    const value = localStorage.key(i);
    result.push(value);
  }
  return result;
}

// eslint-disable-next-line react/prop-types
function TodoList({ todos, onTodoRemove }) {
  return (
    <div>
      <ul>
        {
          // eslint-disable-next-line react/prop-types
          todos.map((todo, index) => {
            return (
              <li key={index}>
                <span>{todo}</span>
                <span>
                  <button onClick={() => onTodoRemove(todo)}>remove</button>
                </span>
              </li>
            );
          })
        }
      </ul>
    </div>
  );
}

export default TodoList;
