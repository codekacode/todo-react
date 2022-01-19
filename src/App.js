import './App.css';
import { TodoCounter } from './components/TodoCounter';
import TodoItem from './components/TodoItem';
import TodoSearch from './components/TodoSearch';
import TodoList from './components/TodoList';
import CreateTodoButton from './components/CreateTodoButton';

const todos = [ 
  {id: 1, text: "Cortar cebolla", completed: false},
  {id: 2, text: "Cortar tomate", completed: false},
  {id: 3, text: "Cortar papa", completed: false},
]

function App() {
  return (
    <>
      <TodoCounter/>
      <TodoSearch/>
      <TodoList>
        {todos.map(todo => (
          <TodoItem key={todo.id} text={todo.text}/>
        ))}
      </TodoList>
      <CreateTodoButton/> 
      
    </>
  );
}

export default App;
