import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Todo } from './features/todo/todo';
import { TodoList } from './features/todo/todo-list';

function App() {
  return (

    <div className="App">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <header className="App">
          <h1>
          To do:
          </h1>
        </header>
        <Todo />
        {/* <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
    </div>
  );
}

export default App;
