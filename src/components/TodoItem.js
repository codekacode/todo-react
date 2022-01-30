function TodoItem(props) {
  // const onComplete = () => {
  //   alert('it is completed ' + props.text);
  // }

  return(
    <li>
      <span onClick={props.onCompleted}>c</span>
      <p>{props.text}</p>
      <span onClick={props.onDelete}>x</span>
    </li>
  )
}

export default TodoItem
