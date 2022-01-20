function TodoSearch() {
  const onChangeInput = (event) => {
    console.log(event.target.value)
  }
  return(
    <input 
      placeholder="hola"
      onChange={onChangeInput}
    />
  )
}

export default TodoSearch