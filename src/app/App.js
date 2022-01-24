
import {useState} from 'react';
import AppUI from './AppUI';

// const defaultTodos = [ 
//   {id: 1, text: "Cortar cebolla", completed: false},
//   {id: 2, text: "Cortar tomate", completed: false},
//   {id: 3, text: "Cortar papa", completed: true},
//   {id: 4, text: "Cortar pollo", completed: false},
// ]

function App() {
  const localStorageTodos = localStorage.getItem('TODOS_V1');
  let parsedTodos;

  if (!localStorageTodos){
    localStorage.setItem('TODOS_V1', JSON.stringify([]));
    parsedTodos = [];
  } else {
    parsedTodos = JSON.parse(localStorageTodos)
  }

  const [todos, setTodos] = useState(parsedTodos);
  const [searchValue, setSearchValue] = useState('');

  const completedTodos = todos.filter(todo => !!todo.completed).length;
  const totalTodos = todos.length;

  let searchedTodos = [];

  if (!searchValue.length >= 1){
    searchedTodos = todos;
  } else {

    searchedTodos = todos.filter(todo => {
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return todoText.includes(searchText);
    });
  }

  const saveTodosLs = (newTodos) => {
    const stringifiedTodos = JSON.stringify(newTodos);
    localStorage.setItem('TODOS_V1', stringifiedTodos);
    setTodos(newTodos);
  }

  // marcar competado
  const completeTodo = (text) => {
    const todosIndex = todos.findIndex(todo => todo.text === text);
    const newTodos = [...todos];
    //no podemos entrar a editar directamente los stados, solo con setState
    newTodos[todosIndex].completed = true;
    // todos[todosIndex] = {
    //   text: todos[todosIndex].text,
    //   completed: true
    // }
    saveTodosLs(newTodos);
  }

  // marcar eliminar
  const deleteTodo = (text) => {
    const todosIndex = todos.findIndex(todo => todo.text === text);
    const newTodos = [...todos];
    //no podemos entrar a editar directamente los stados, solo con setState
    newTodos.splice(todosIndex,1);
    saveTodosLs(newTodos);
  }


  return (
    <>
      <AppUI 
         totalTodos={totalTodos}
         completedTodos={completedTodos}
         searchValue={searchValue}
         setSearchValue={setSearchValue}
         searchedTodos={searchedTodos}
         completeTodo={completeTodo}
         deleteTodo={deleteTodo}
      />
    </>
  );
}

export default App;
