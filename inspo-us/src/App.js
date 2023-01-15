import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import UserList from './components/UserList';
import About from './components/About';
import BoardsList from './components/BoardsList';
import BoardDetails from './components/BoardDetails';
function App() {
  return (
    <div className="App">
      <Router>
      <Navbar />
      <Switch>
      <Route exact path="/" component={ Home } />
      <Route exact path="/users" component={ UserList }/>
      <Route exact path="/about" component={ About } />
      <Route exact path="/users/:id" component={ BoardsList } />
      <Route exact path="/users/:id/boards/:board_id" component={ BoardDetails } />
      </Switch>
      </Router>
    </div>
  );
}

export default App;
