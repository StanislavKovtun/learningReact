import TodoList from '../TodoList';
import SearchPanel from '../SearchPanel';
import ItemStatusFilter from '../ItemStatusFilter';
import AppHeader from '../AppHeader';
import DatePanel from '../DatePanel';
import Login from '../Login';
import { useState } from 'react';

const App = () => {

  // const todoData = [
  //   { itemText: 'Learn React', important: true, id: 1 },
  //   { itemText: 'Build Awesome App', important: false, id: 2 },
  //   { itemText: 'Other', important: false, id: 3 }
  // ]

  const [todoData, setTodoData] = useState([
    { itemText: 'Learn React', important: true, id: 1 },
    { itemText: 'Build Awesome App', important: false, id: 2 },
    { itemText: 'Other', important: false, id: 3 }
  ])

  const deleteItem = (id) => {
    setTodoData((todoData) => {
      
      //method1:
      // const idx = todoData.findIndex((el) => el.id === id);
      // console.log('del ' + idx);
      // const before = todoData.slice(0, idx);
      // const after = todoData.slice(idx+1);
      // const newTodoData = [...before, ...after];

      //method2:
      const newTodoData = todoData.filter((el) => el.id !== id);
      return newTodoData;
    });
    
  }

  return (
    <div className="todo-app">
      <Login />
      <AppHeader />
      <div className="top-panel d-flex">
        <SearchPanel searchText='Enter text to search...' />
        <ItemStatusFilter />
      </div>
      <TodoList todos={todoData}
        onDeleted={deleteItem} />
      <DatePanel />
    </div>
  )
}

export default App;