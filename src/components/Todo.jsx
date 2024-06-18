import { useState } from "react";
import TodoItems from "./TodoItems";

export default function Todo() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  function todoHandle(e) {
    e.preventDefault();
    setTodos([...todos, todo]);
    setTodo("");
  }
  return (
    <form onSubmit={todoHandle}>
      <input
        type="text"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <button type="submit">Add</button>

      {todos.map((items) => (
        <TodoItems key={items} items={items} />
      ))}
    </form>
  );
}
