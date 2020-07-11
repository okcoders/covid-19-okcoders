import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Posts from './Posts'

function App() {
  return (
    <Router>
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/posts">Post Management</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/users">Users</Link>
          </li>
        </ul>
      </nav>

      <Switch>
        <Route exact path="/about">
          about!
        </Route>
        <Route exact path="/users">
          users!
        </Route>
        <Route exact path="/posts">
          <Posts />
        </Route>
        <Route>this page does not exist!</Route>
      </Switch>
    </div>
  </Router>
  );
}

export default App;
