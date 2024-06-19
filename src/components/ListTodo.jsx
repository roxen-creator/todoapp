import TodoItems from "./TodoItems";
import styles from "./todolist.module.css";
export default function ListTodo({ todos }) {
  return (
    <div className={styles.list}>
      {todos.map((items) => (
        <TodoItems key={items} items={items} />
      ))}
    </div>
  );
}
