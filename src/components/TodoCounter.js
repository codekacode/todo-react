
import { useContext } from "react";
import { TodoContext } from "../app/TodoContext";

function TodoCounter() {

  const {completedTodos, totalTodos} = useContext(TodoContext);

  return(
    <h2>Has completado {completedTodos} de {totalTodos} TODOs</h2>
  )
}

export default TodoCounter;