import { TodoProvider } from './TodoContext/index';
import AppUI from './AppUI';

// const defaultTodos = [ 
//   {id: 1, text: "Cortar cebolla", completed: false},
//   {id: 2, text: "Cortar tomate", completed: false},
//   {id: 3, text: "Cortar papa", completed: true},
//   {id: 4, text: "Cortar pollo", completed: false},
// ]

function App() {

  return (
    <TodoProvider>
      <AppUI />
    </TodoProvider>
  );
}

export default App;
