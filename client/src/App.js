import React, { useState } from 'react';
import './App.css';
import Login from './components/login';
import Register from './components/register'

const App = () => {
  const [status, changeStatus] = useState(null);
  const [user, changeUser] = useState('');

  switch (status) {
    case 'logged':
      return (
        <div>
          Hola
        </div>
      );
    case 'register':
      return (
        <Register login={() => changeStatus('null')} />
      )
    default:
      return (
        <Login register={() => changeStatus('register')} log={user => {
          changeUser(user);
          changeStatus('logged');
        }} />
      );
  }
}

export default App;
