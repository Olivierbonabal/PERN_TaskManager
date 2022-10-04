import React from 'react';
import './App.css';
import InputTask from './components/inputTask';
import EditTask from './components/editTask';
import ListTask from './components/listTask';

class App extends React.Component {
  render()
  {
    return (
      <div className="body">
        <InputTask/>
        <ListTask/>
      </div>
    )
  }
}

export default App;
