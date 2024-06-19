import styles from "./form.module.css";
import { useState } from "react";
export default function form({ setTodos, todos }) {
  const [todo, setTodo] = useState("");

  function todoHandle(e) {
    e.preventDefault();
    setTodos([...todos, todo]);
    setTodo("");
  }
  return (
    <form className={styles.todoform} onSubmit={todoHandle}>
      <div className={styles.inputcontainer}>
        {" "}
        <input
          placeholder="Enter an item"
          className={styles.moderninput}
          type="text"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
        />
        <button className={styles.modernbutton} type="submit">
          Add
        </button>
      </div>
    </form>
  );
}
