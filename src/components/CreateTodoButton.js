
import './Btn.css'

function CreateTodoButton(props) {
  const onClickEvent = () => {
    props.setOpenModal(prevState => !prevState)
  }

  return(
    <button className="btn"
      onClick={onClickEvent}  
    >
      +
    </button>
  )
}

export default CreateTodoButton