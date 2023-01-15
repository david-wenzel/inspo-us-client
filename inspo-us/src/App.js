import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import UserList from './components/UserList'
function App() {
  return (
    <div className="App">
      <Router>
      <Navbar />
      <Switch>
      <Route exact path="/" component={ Home } />
      <Route exact path="/users" component={ UserList }/>
      </Switch>
      </Router>
    </div>
  );
}

export default App;
