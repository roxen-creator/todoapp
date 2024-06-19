import { useState } from "react";
import ListTodo from "./ListTodo";
import Form from "./Form";
import Footer from "./Footer";
export default function Todo() {
  const [todos, setTodos] = useState([]);
  const completedTask = todos.filter((todo) => todo.done).length;
  const totalTask = todos.length;

  return (
    <div>
      <Form todos={todos} setTodos={setTodos} />
      <ListTodo todos={todos} setTodos={setTodos} />
      <Footer completedTask={completedTask} totalTask={totalTask} />
    </div>
    
  );
}
