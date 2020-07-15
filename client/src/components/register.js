import React from 'react';

function Register(props) {
    return (
        <div className="content">
            <div className="center login">
                <h1>Register</h1>
                <input className="input" type="text" placeholder="Firstname"></input>
                <input className="input" type="text" placeholder="Lastname"></input>
                <input className="input" type="text" placeholder="Username"></input>
                <input className="input" type="password" placeholder="Password"></input>
                <button className="btn-sub">Register</button>
                <button className="btn-logout" onClick={props.login}>Already have an account? Login here.</button>
            </div>
        </div>
    );
}

export default Register;