import styles from "./todoitem.module.css";
export default function TodoItems({ items, todos, setTodos }) {
  function handleClick(name) {
    const newArray = todos.map((todo) =>
      todo.name === name ? { ...todo, done: !todo.done } : todo
    );
    setTodos(newArray);
  }
  function handleDelete(items) {
    console.log("button pressed for item", items);
    setTodos(
      todos.filter((todo) => {
        return todo !== items;
      })
    );
  }
  const className = items.done ? styles.completed : "";
  return (
    <div className={styles.item}>
      <div className={styles.itemName}>
        <span className={className} onClick={() => handleClick(items.name)}>
          {items.name}
        </span>
        <span>
          <button
            className={styles.deleteButton}
            onClick={() => handleDelete(items)}
          >
            x
          </button>
        </span>
      </div>
      <hr className={styles.line} />
    </div>
  );
}
