import React, { useState } from 'react';
import './App.css';
import Login from './components/login';
import Register from './components/register';
import Home from './components/home';

const App = () => {
  const [status, changeStatus] = useState(null);
  const [user, changeUser] = useState('');

  switch (status) {
    case 'home':
      return (
        <Home />
      );
    case 'register':
      return (
        <Register login={() => changeStatus(null)} />
      )
    default:
      return (
        <Login register={() => changeStatus('register')} log={user => {
          changeUser(user);
          changeStatus('home');
        }} />
      );
  }
}

export default App;
