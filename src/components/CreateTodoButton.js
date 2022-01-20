
function CreateTodoButton() {
  const onClickEvent = (msg) => {
    alert(msg);
  }

  return(
    <button
      onClick={()=>onClickEvent('Aqui es el modal')}  
    >
      +
    </button>
  )
}

export default CreateTodoButton