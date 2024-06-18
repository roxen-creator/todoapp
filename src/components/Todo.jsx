import { useState } from "react";
import ListTodo from "./ListTodo";
import Form from "./Form";
export default function Todo() {
  const [todos, setTodos] = useState([]);
  return (
    <>
      <Form todos={todos} setTodos={setTodos} />
      <ListTodo todos={todos} />
    </>
  );
}
