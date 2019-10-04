import React, {Component} from 'react';
import './App.css';
import {UserForm} from './components/UserForm.js';

class App extends Component {
  render() {
    return (
      <div className = "App">
        <UserForm/>
      </div>
    );
  }
}

/*
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p style={{fontSize: 30},{fontWeight: 'bold'},{color: 'white'}}>
          How are you feeling this morning?
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        a>
          <p style={{color: 'blueviolet'}}> Morning Survey </p>
          <p style={{color: 'blueviolet'}}> Evening Survey </p>
        </a>
      </header>
    </div>
  );
}
*/

export default App;
