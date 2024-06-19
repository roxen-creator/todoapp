import styles from "./todoitem.module.css";
export default function TodoItems({ items }) {
  function handleDelete() {
    console.log("button pressed");
  }
  return (
    <div className={styles.item}>
      <div className={styles.itemName}>
        {" "}
        {items}
        <span>
          <button className={styles.deleteButton} onClick={handleDelete}>
            x
          </button>
        </span>
      </div>
      <hr className={styles.line} />
    </div>
  );
}
