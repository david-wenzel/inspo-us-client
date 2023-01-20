import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import UserList from './components/UserList';
import About from './components/About';
import BoardsList from './components/BoardsList';
import BoardDetails from './components/BoardDetails';
import LastUser from './components/LastUser';
import EditPost from './components/EditPost';
import "./App.css";
import { useState } from 'react';

function App() {
  // add curent user state - 
  const [currentUser, setCurrentUser] = useState(null);
  return (
    <div className="App">
      <Router>
      <Navbar />
      <Switch>
      <Route exact path="/" component={ Home } />
      <Route exact path="/users" component={ UserList }/>
      <Route exact path="/about" component={ About } />
      <Route exact path="/users/:id" component={ BoardsList } currentUser={currentUser} setCurrentUser={setCurrentUser}/>
      <Route exact path="/users/:id/boards/:boardId" component={ BoardDetails } />
      <Route exact path="/new_user" component={ LastUser } />
      <Route exact path="/editpost/:id" component={EditPost}/>
      </Switch>
      </Router>
    </div>
  );
}

export default App;
