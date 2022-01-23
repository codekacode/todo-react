import {useState} from 'react';

function TodoSearch() {

  const [searchValue, setSearchValue] = useState('');

  const onSearchValueChange = (event) => {
    console.log(event.target.value);
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