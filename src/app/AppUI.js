import TodoCounter from '../components/TodoCounter';
import TodoItem from '../components/TodoItem';
import TodoSearch from '../components/TodoSearch';
import TodoList from '../components/TodoList';
import CreateTodoButton from '../components/CreateTodoButton';

function AppUI({
    loading,
    error,
    totalTodos,
    completedTodos,
    searchValue,
    setSearchValue,
    searchedTodos,
    completeTodo,
    deleteTodo,
}) {
    return (
        <>
            <TodoCounter 
                completed={completedTodos}
                total={totalTodos}
            />
            <TodoSearch 
                searchValue={searchValue}
                setSearchValue={setSearchValue}
            />
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





