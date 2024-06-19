import styles from "./todoitem.module.css";
export default function TodoItems({ items, todos, setTodos }) {
  function handleDelete(items) {
    console.log("button pressed for item", items);
    setTodos(
      todos.filter((todo) => {
        todo !== items;
      })
    );
  }
  return (
    <div className={styles.item}>
      <div className={styles.itemName}>
        {" "}
        {items}
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
