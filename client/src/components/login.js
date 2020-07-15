import React, { useState } from 'react';
import axios from 'axios';

function Login(props) {
    // Declare States
    const [user, changeUser] = useState(null);
    const [pass, changePass] = useState(null);
    const [status, changeStatus] = useState(null);

    const login = async e => {
        if (user === '' || pass === '') {
            return changeStatus('blank')
        }
        let response = await axios.post('http://localhost:4000/login', {
            user: user,
            pass: pass
        });
        if (response.data.status === 'success') {
            props.log(user);
        }
        else if (response.data.status === 'dne') {
            changeStatus('dne');
        }
        else {
            changeStatus('wrong');
        }
    }

    switch (status) {
        case 'wrong':
            return (
                <div className="content">
                    <div className="center login">
                        <h1>Regimen</h1>
                        <p className="red">Password is incorrect</p>
                        <input className="input" type="text" placeholder="Username" onChange={e => changeUser(e.target.value)} value={user}></input>
                        <input className="input-err" type="password" placeholder="Password" onChange={e => changePass(e.target.value)} value={pass}></input>
                        <button className="btn-sub" onClick={login}>Login</button>
                        <button className="btn-logout" onClick={props.register}>Don't have an account? Create one here.</button>
                    </div>
                </div>
            );
        case 'dne':
            return (
                <div className="content">
                    <div className="center login">
                        <h1>Regimen</h1>
                        <p className="red">Username does not exist</p>
                        <input className="input-err" type="text" placeholder="Username" onChange={e => changeUser(e.target.value)} value={user}></input>
                        <input className="input" type="password" placeholder="Password" onChange={e => changePass(e.target.value)} value={pass}></input>
                        <button className="btn-sub" onClick={login}>Login</button>
                        <button className="btn-logout" onClick={props.register}>Don't have an account? Create one here.</button>
                    </div>
                </div>
            );
        case 'blank':
            return (
                <div className="content">
                    <div className="center login">
                        <h1>Regimen</h1>
                        <p className="red">Please fill out the highlighted fields</p>
                        <input className="input-err" type="text" placeholder="Username" onChange={e => changeUser(e.target.value)} value={user}></input>
                        <input className="input-err" type="password" placeholder="Password" onChange={e => changePass(e.target.value)} value={pass}></input>
                        <button className="btn-sub" onClick={login}>Login</button>
                        <button className="btn-logout" onClick={props.register}>Don't have an account? Create one here.</button>
                    </div>
                </div>
            );
        default:
            return (
                <div className="content">
                    <div className="center login">
                        <h1>Regimen</h1>
                        <input className="input" type="text" placeholder="Username" onChange={e => changeUser(e.target.value)} value={user}></input>
                        <input className="input" type="password" placeholder="Password" onChange={e => changePass(e.target.value)} value={pass}></input>
                        <button className="btn-sub" onClick={login}>Login</button>
                        <button className="btn-logout" onClick={props.register}>Don't have an account? Create one here.</button>
                    </div>
                </div>
            );
    }
}

export default Login;