import TodoItems from "./TodoItems";
export default function ListTodo({todos}) {
  return (
    <div>
     
      {todos.map((items) => (
        <TodoItems key={items} items={items} />
      ))}
    </div>
  );
}
