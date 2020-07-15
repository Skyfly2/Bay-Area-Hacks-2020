import React, { useState } from 'react';

function Register(props) {
    // Declare States
    const [user, updateUser] = useState(null);
    const [pass, updatePass] = useState(null);
    const [cpass, updateCPass] = useState(null);
    const [first, updateFirst] = useState(null);
    const [last, updateLast] = useState(null);
    const [status, changeStatus] = useState(null);

    switch (status) {
        default:
            return (
                <div className="content">
                    <div className="center login">
                        <h1>Register</h1>
                        <input className="input" type="text" placeholder="Firstname" onChange={e => updateFirst(e.target.value)} value={first}></input>
                        <input className="input" type="text" placeholder="Lastname" onChange={e => updateLast(e.target.value)} value={last}></input>
                        <input className="input" type="text" placeholder="Username" onChange={e => updateUser(e.target.value)} value={user}></input>
                        <input className="input" type="password" placeholder="Password" onChange={e => updatePass(e.target.value)} value={pass}></input>
                        <input className="input" type="password" placeholder="Password" onChange={e => updateCPass(e.target.value)} value={cpass}></input>
                        <button className="btn-sub">Register</button>
                        <button className="btn-logout" onClick={props.login}>Already have an account? Login here.</button>
                    </div>
                </div>
            );
    }


}

export default Register;