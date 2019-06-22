import React from 'react';
import logo from './logo.svg';
import TodoParent from './views/TodoParent'
import './App.css';

function App() {
    return (
        <div className="App">
            <img src={logo} className="App-logo" alt="logo"/>
            <TodoParent/>
        </div>
    );
}

export default App;
