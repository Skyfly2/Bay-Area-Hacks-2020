import React from 'react';

function Login(props) {
    return (
        <div className="content">
            <div className="center login">
                <h1>Regimen</h1>
                <input className="input" type="text" placeholder="Username"></input>
                <input className="input" type="password" placeholder="Password"></input>
                <button className="btn-sub">Login</button>
                <button className="btn-logout" onClick={props.register}>Don't have an account? Create one here.</button>
            </div>
        </div>
    );
}

export default Login;