import React, { useState } from 'react';
import './App.css';
import Login from './components/login';
import Register from './components/register'

const App = () => {
  const [status, changeStatus] = useState(null);

  switch (status) {
    case 'register':
      return (
        <Register login={() => changeStatus('null')} />
      )
    default:
      return (
        <Login register={() => changeStatus('register')} />
      );
  }
}

export default App;
