import TodoCounter from '../components/TodoCounter';
import TodoItem from '../components/TodoItem';
import TodoSearch from '../components/TodoSearch';
import TodoList from '../components/TodoList';
import CreateTodoButton from '../components/CreateTodoButton';
import { TodoContext } from './TodoContext';
import { useContext } from 'react/cjs/react.development';

function AppUI() {

    const { error,
            loading,
            searchedTodos,
            completeTodo,
            deleteTodo } = useContext(TodoContext);
    return (
        <>
            <TodoCounter />
            <TodoSearch />

    
                <TodoList>
                    {error && <p>Hay error</p>}
                    {loading && <p>Estamos caargando la app</p>}
                    {(!loading && !searchedTodos.length) && <p>Estamos caargando la app</p>}
                    {searchedTodos.map(todo => (
                    <TodoItem 
                        key={todo.id} 
                        text={todo.text}
                        onCompleted={() => completeTodo(todo.text)} 
                        onDelete={() => deleteTodo(todo.text)} 
                    />
                    ))}
                </TodoList>
            <CreateTodoButton/> 
          
        </>
      );

}

export default AppUI;





