
import React, { useState } from "react";
import useLocalStorage from "./useLocalStorage"


const TodoContext = React.createContext();

function TodoProvider(props){
    
    const {
        item: todos,  
        saveItem: saveTodos, 
        loading,
        error} = useLocalStorage('TODOS_V1', []); // podemos guardar Todos_v1 como itemName
  
      const [searchValue, setSearchValue] = useState('');
      const [openModal,setOpenModal] = useState(false);
    
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

      const addTodo = (text) => {
        const newTodos = [...todos];
        newTodos.push({
          completed:false,
          text
        });
        saveTodos(newTodos)
      };
    
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
    
    
    return(
        <TodoContext.Provider value={{ 
            error,
            loading,
            totalTodos,
            completedTodos,
            searchValue,
            setSearchValue,
            searchedTodos,
            completeTodo,
            deleteTodo,
            addTodo,
            openModal,
            setOpenModal,
            
        }}>
            {props.children}
        </TodoContext.Provider>
    )
};

export {
    TodoContext,
    TodoProvider
};
