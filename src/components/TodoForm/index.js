import { useContext } from "react"
import { useState } from "react"
import { TodoContext } from "../../app/TodoContext/index"

function TodoForm() {

    const [newTodoValue, setNewTodoValue] = useState('');

    const {
        addTodo,
        setOpenModal
    } = useContext(TodoContext)

    const onCancel = () => {
        setOpenModal(false);
    }

    const onAdd = (event) => {
        event.preventDefault();
        addTodo(newTodoValue);
        setOpenModal(false);
    }

    const onChange = (event) => {
        setNewTodoValue(event.target.value)
    }


    return(
        <form onSubmit={onAdd}>
            <label></label>
            <textarea
                value={newTodoValue}
                placeholder="Cortar cebolla"
                onChange={onChange}
            />
            <div>
                <button type="button" onClick={onCancel}>Cancelar</button>
                <button type="submit" onClick={onAdd}>Anadir</button>
            </div>
        </form>
    )
}

export {TodoForm}