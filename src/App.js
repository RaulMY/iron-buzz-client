import React from 'react';
import logo from './logo.svg';
import './App.css';
import TestList from './components/tests/TestList';
import CreateTest from './components/tests/CreateTest';
import TestDetail from './components/tests/TestDetail';
import CreateQuestion from './components/questions/CreateQuestion';
import { Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Switch>
        <Route exact path='/test/:id' render={() => <TestDetail/>}/>
        <Route exact path='/create-test' render={() => <CreateTest/>}/>
        <Route exact path='/create-question' render={() => <CreateQuestion/>}/>
        <Route exact path='/' render={() => <TestList/>}/>
      </Switch>
      </header>
    </div>
  );
}

export default App;
