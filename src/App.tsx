import React from 'react';
import './App.css';
import './index.css'
import Auth from './layouts/Auth';
import Login from './pages/Login/Login';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import Admin from './pages/Admin/index';

function App() {
  const logo = process.env.PUBLIC_URL + "/logo.svg";
  return (
    <Router>
      <Switch>
          <Route exact path="/">
            <div className="App">
              <Auth logo={logo}>
                <Login />
              </Auth>
            </div>
          </Route>
          <Route exact path="/dashboard">
            <div className="App">
              <Admin />
            </div>
          </Route>
      </Switch>
    </Router>
  );
}

export default App;
