import TodoItems from "./TodoItems";
import styles from "./todolist.module.css";
export default function ListTodo({ todos, setTodos }) {
  const sortedTask = todos
    .slice()
    .sort((a, b) => Number(a.done) - Number(b.done));
  return (
    <div className={styles.list}>
      {sortedTask.map((items) => (
        <TodoItems
          key={items.name}
          items={items}
          todos={todos}
          setTodos={setTodos}
        />
      ))}
    </div>
  );
}
