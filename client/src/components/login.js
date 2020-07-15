import React, { useState } from 'react';

function Login(props) {
    // Declare States
    const [user, changeUser] = useState(null);
    const [pass, changePass] = useState(null);
    const [status, changeStatus] = useState(null);

    switch (status) {
        default:
            return (
                <div className="content">
                    <div className="center login">
                        <h1>Regimen</h1>
                        <input className="input" type="text" placeholder="Username" onChange={e => changeUser(e.target.value)} value={user}></input>
                        <input className="input" type="password" placeholder="Password" onChange={e => changePass(e.target.value)} value={pass}></input>
                        <button className="btn-sub">Login</button>
                        <button className="btn-logout" onClick={props.register}>Don't have an account? Create one here.</button>
                    </div>
                </div>
            );
    }
}

export default Login;