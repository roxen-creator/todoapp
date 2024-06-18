import { useState } from "react";
export default function form({ setTodos, todos }) {
  const [todo, setTodo] = useState("");

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
    </form>
  );
}
