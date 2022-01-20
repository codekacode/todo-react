function TodoItem(props) {
  const onComplete = () => {
    alert('it is completed ' + props.text);
  }
  const onDelete = () => {
    alert('it is deleted ' + props.text);
  }
  return(
    <li>
      <span onClick={onComplete}>c</span>
      <p>{props.text}</p>
      <span onClick={onDelete}>x</span>
    </li>
  )
}

export default TodoItem
