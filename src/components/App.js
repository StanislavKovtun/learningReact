import TodoList from './TodoList';
import SearchPanel from './SearchPanel';
import AppHeader from './AppHeader';
import DatePanel from './DatePanel';
import Login from './Login';

const App = () => {

    const todoData = [
        {itemText: 'Learn React', important: true, id: 1},
        {itemText: 'Build Awesome App', important: false, id: 2},
        {itemText: 'Other', important: false, id: 3}
    ]

    return (
      <div>
        <Login />
        <AppHeader />
        <SearchPanel searchText = 'Enter text to search...'/>
        <TodoList todos = {todoData}/>
        <DatePanel />
      </div>
    )
  }

  export default App;