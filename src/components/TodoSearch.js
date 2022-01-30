import { useContext } from "react/cjs/react.development";
import { TodoContext } from "../app/TodoContext";

function TodoSearch() {

  const {searchValue, setSearchValue} = useContext(TodoContext)

  const onSearchValueChange = (event) => {
    setSearchValue(event.target.value);
  }

  return[
    <input 
      placeholder="hola"
      value={searchValue}
      onChange={onSearchValueChange}
    />,
    <p>{searchValue}</p>
  ]
}

export default TodoSearch