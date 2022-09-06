import { useState } from 'react';
import './TodoListItem.css';

const TodoListItem = ({ itemText, onDeleted }) => {

  const [isDone, setIsDone] = useState(false);
  const [isImportant, setIsImportant] = useState(false);

  // const style = {
  //   color: isImportant ? 'tomato' : 'black',
  //   fontWeight: isImportant ? 'bold' : 'normal'
  // }

  let classNames = "todo-list-item";

  if (isDone) {
    classNames += ' done'
  }

  if (isImportant) {
    classNames += ' important';
  }

  const onLabelClick = () => {
    setIsDone((isDone) => {
      return !isDone;
    });
    // console.log(`You click on ${itemText}`)
  }

  const onIsImportantClick = () => {
    setIsImportant((isImportant) => {
      return !isImportant;
    });
    // this.blur();
    // event.preventDefault();
    // console.log('click!')
  }

  return (
    <span className={classNames}>
      <span
        className='todo-list-item-label'
        // style={style}
        onClick={onLabelClick}>
        {itemText}
      </span>

      <button type='button'
        className='btn btn-outline-success btn-sm float-end'
        onClick={onIsImportantClick}>
        <i className='fa fa-exclamation' />
      </button>

      <button type='button'
        className='btn btn-outline-danger btn-sm float-end'
        onClick={onDeleted}>
        <i className='fa fa-trash-o' />
      </button>

    </span>
  );
};

export default TodoListItem;