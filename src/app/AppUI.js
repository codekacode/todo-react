import TodoCounter from '../components/TodoCounter';
import TodoItem from '../components/TodoItem';
import TodoSearch from '../components/TodoSearch';
import TodoList from '../components/TodoList';
import CreateTodoButton from '../components/CreateTodoButton';

function AppUI({
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





