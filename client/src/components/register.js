import React, { useState } from 'react';
import axios from 'axios';

function Register(props) {
    const register = async e => {
        e.preventDefault();
        // Validate input
        if (user === '' || pass === '' || first === '' || last === '') {
            return changeStatus('blank');
        }
        // Validate passwords
        else if (pass !== cpass) {
            return changeStatus('pass-no-match');
        }
        // Connect to server
        let response = await axios.post('http://localhost:4000/register', {
            user: user,
            pass: pass,
            first: first,
            last: last
        });
        // Check to see if username is taken
        if (response.data.status === 'taken') {
            return changeStatus('taken');
        }
        return props.login;
    }

    // Declare States
    const [user, updateUser] = useState('');
    const [pass, updatePass] = useState('');
    const [cpass, updateCPass] = useState('');
    const [first, updateFirst] = useState('');
    const [last, updateLast] = useState('');
    const [status, changeStatus] = useState(null);

    switch (status) {
        case 'pass-no-match':
            return (
                <div className="content">
                    <div className="center login">
                        <h1>Register</h1>
                        <p className="red">Passwords do not match</p>
                        <input className="input" type="text" placeholder="Firstname" onChange={e => updateFirst(e.target.value)} value={first}></input>
                        <input className="input" type="text" placeholder="Lastname" onChange={e => updateLast(e.target.value)} value={last}></input>
                        <input className="input" type="text" placeholder="Username" onChange={e => updateUser(e.target.value)} value={user}></input>
                        <input className="input-err" type="password" placeholder="Password" onChange={e => updatePass(e.target.value)} value={pass}></input>
                        <input className="input-err" type="password" placeholder="Confirm Password" onChange={e => updateCPass(e.target.value)} value={cpass}></input>
                        <button className="btn-sub" onClick={register}>Register</button>
                        <button className="btn-logout" onClick={props.login}>Already have an account? Login here.</button>
                    </div>
                </div>
            );
        case 'taken':
            return (
                <div className="content">
                    <div className="center login">
                        <h1>Register</h1>
                        <p className="red">Username is already taken</p>
                        <input className="input" type="text" placeholder="Firstname" onChange={e => updateFirst(e.target.value)} value={first}></input>
                        <input className="input" type="text" placeholder="Lastname" onChange={e => updateLast(e.target.value)} value={last}></input>
                        <input className="input-err" type="text" placeholder="Username" onChange={e => updateUser(e.target.value)} value={user}></input>
                        <input className="input" type="password" placeholder="Password" onChange={e => updatePass(e.target.value)} value={pass}></input>
                        <input className="input" type="password" placeholder="Confirm Password" onChange={e => updateCPass(e.target.value)} value={cpass}></input>
                        <button className="btn-sub" onClick={register}>Register</button>
                        <button className="btn-logout" onClick={props.login}>Already have an account? Login here.</button>
                    </div>
                </div>
            );
        case 'blank':
            return (
                <div className="content">
                    <div className="center login">
                        <h1>Register</h1>
                        <p className="red">Please fill out all highlighted fields</p>
                        <input className="input-err" type="text" placeholder="Firstname" onChange={e => updateFirst(e.target.value)} value={first}></input>
                        <input className="input-err" type="text" placeholder="Lastname" onChange={e => updateLast(e.target.value)} value={last}></input>
                        <input className="input-err" type="text" placeholder="Username" onChange={e => updateUser(e.target.value)} value={user}></input>
                        <input className="input-err" type="password" placeholder="Password" onChange={e => updatePass(e.target.value)} value={pass}></input>
                        <input className="input-err" type="password" placeholder="Confirm Password" onChange={e => updateCPass(e.target.value)} value={cpass}></input>
                        <button className="btn-sub" onClick={register}>Register</button>
                        <button className="btn-logout" onClick={props.login}>Already have an account? Login here.</button>
                    </div>
                </div>
            );
        default:
            return (
                <div className="content">
                    <div className="center login">
                        <h1>Register</h1>
                        <input className="input" type="text" placeholder="Firstname" onChange={e => updateFirst(e.target.value)} value={first}></input>
                        <input className="input" type="text" placeholder="Lastname" onChange={e => updateLast(e.target.value)} value={last}></input>
                        <input className="input" type="text" placeholder="Username" onChange={e => updateUser(e.target.value)} value={user}></input>
                        <input className="input" type="password" placeholder="Password" onChange={e => updatePass(e.target.value)} value={pass}></input>
                        <input className="input" type="password" placeholder="Confirm Password" onChange={e => updateCPass(e.target.value)} value={cpass}></input>
                        <button className="btn-sub" onClick={register}>Register</button>
                        <button className="btn-logout" onClick={props.login}>Already have an account? Login here.</button>
                    </div>
                </div>
            );
    }


}

export default Register;