
import {useState, useEffect} from 'react';
import AppUI from './AppUI';

// const defaultTodos = [ 
//   {id: 1, text: "Cortar cebolla", completed: false},
//   {id: 2, text: "Cortar tomate", completed: false},
//   {id: 3, text: "Cortar papa", completed: true},
//   {id: 4, text: "Cortar pollo", completed: false},
// ]

function useLocalStorage(itemName, initialValue){

  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(true)
  const [item, setItem] = useState(initialValue);
    
  useEffect(() => {
    setTimeout(() => {
      try {
        const localStorageItem = localStorage.getItem(itemName);
        let parsedItem;
        if (!localStorageItem){
          localStorage.setItem(itemName, JSON.stringify(initialValue));
          parsedItem = initialValue;
        } else {
          parsedItem = JSON.parse(localStorageItem)
        }

        setItem(parsedItem);
        setLoading(false);
      } catch(error) {
        setError(error)
      }
    }, 1000)
  }, [])


  const saveItem = (newItem) => {
    try {
      const stringifiedItem = JSON.stringify(newItem);
      localStorage.setItem(itemName, stringifiedItem);
      setItem(newItem);
    } catch (error) {
      setError(error)
    }
  }

  return {
    item,
    saveItem,
    loading,
    error,
  }
    
}

function App() {


  const {
    item: todos, 
    saveItem: saveTodos, 
    loading,
    error} = useLocalStorage('TODOS_V1', []); // podemos guardar Todos_v1 como itemName
  
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
    saveTodos(newTodos);
  }

  // marcar eliminar
  const deleteTodo = (text) => {
    const todosIndex = todos.findIndex(todo => todo.text === text);
    const newTodos = [...todos];
    //no podemos entrar a editar directamente los stados, solo con setState
    newTodos.splice(todosIndex,1);
    saveTodos(newTodos);
  }


  return (
    <>
      <AppUI 
        error={error}
        loading={loading}
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
