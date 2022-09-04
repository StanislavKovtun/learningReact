import './TodoListItem.css';

const TodoListItem = ({ itemText, important = false }) => {

  const style = {
    color: important ? 'tomato' : 'black',
    fontWeight: important ? 'bold' : 'normal'
  }

  return (
    <span className="todo-list-item">
      <span
        className='todo-list-item-label'
        style={style}>
        {itemText}
      </span>

      <button type='button'
        className='btn btn-outline-success btn-sm float-end'>
        <i className='fa fa-exclamation' />
      </button>

      <button type='button'
        className='btn btn-outline-danger btn-sm float-end'>
        <i className='fa fa-trash-o' />
      </button>

    </span>
  );
};

export default TodoListItem;