import React from 'react';
// import logo from './logo.svg';
import './App.css';
import './index.css'
import Auth from './layouts/Auth';
import Login from './pages/Login';

function App() {
  const logo = process.env.PUBLIC_URL + "/logo.svg";
  return (
    <div className="App">
      <Auth logo={logo}>
        <Login />
      </Auth>
    </div>
  );
}

export default App;
