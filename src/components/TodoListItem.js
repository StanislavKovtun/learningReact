const TodoListItem = ({ itemText, important = false }) => {
  const style = {
    color: important ? 'tomato' : 'black'
  }
  return (
    <span style = {style}>{itemText}</span>
  )
};

export default TodoListItem;