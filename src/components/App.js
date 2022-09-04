import TodoList from './TodoList';
import SearchPanel from './SearchPanel';
import ItemStatusFilter from './ItemStatusFilter';
import AppHeader from './AppHeader';
import DatePanel from './DatePanel';
import Login from './Login';

const App = () => {

  const todoData = [
    { itemText: 'Learn React', important: true, id: 1 },
    { itemText: 'Build Awesome App', important: false, id: 2 },
    { itemText: 'Other', important: false, id: 3 }
  ]

  return (
    <div className="todo-app">
      <Login />
      <AppHeader />
      <div className="top-panel d-flex">
        <SearchPanel searchText='Enter text to search...' />
        <ItemStatusFilter />
      </div>
      <TodoList todos={todoData} />
      <DatePanel />
    </div>
  )
}

export default App;