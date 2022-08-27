import React from 'react';
import ReactDOM from 'react-dom/client';
// import ReactDOM from 'react-dom';
// // import './index.css';
// // import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));

const AppHeader = () => {
  return (
    <div>
      <h1>My Todo List</h1>
    </div>
  )
}

const SearchPanel = () => {
  return (
    <React.Fragment>
      <input placeholder='search' />
    </React.Fragment>)
}

const TodoList = () => {
  return (
    <div>
      <AppHeader />
      <SearchPanel />
      <ul>
        <li>Learn React</li>
        <li>Build Aewsome App</li>
      </ul>
      {console.log('Todo List App')}
    </div>
  )
};

root.render(
  // <AppHeader />
  // <SearchPanel />
  <TodoList />
);
