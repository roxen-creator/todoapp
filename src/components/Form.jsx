import styles from "./form.module.css";
import { useState } from "react";
export default function form({ setTodos, todos }) {
  const [todo, setTodo] = useState({ name: "", done: false });

  function todoHandle(e) {
    e.preventDefault();
    setTodos([...todos, todo]);
    setTodo({ name: "", done: false });
  }
  return (
    <form className={styles.todoform} onSubmit={todoHandle}>
      <div className={styles.inputcontainer}>
        <input
          placeholder="Enter an item"
          className={styles.moderninput}
          type="text"
          value={todo.name}
          onChange={(e) => setTodo({ name: e.target.value, done: false })}
        />
        <button className={styles.modernbutton} type="submit">
          Add
        </button>
      </div>
    </form>
  );
}
