import React, {useState} from 'react';
import {NavLink} from 'reactstrap';
import { Link } from 'react-router-dom'
import './Login.scss';
import axios from 'axios'

function Login() {
    const [user, setUser] = useState("");
    const [password, setPassword] = useState("");
    const usernameChange = e =>{
        setUser(e.target.value);
    }
    const passwordChange = e =>{
        setPassword(e.target.value);
    }
    const submitForm = e => {
        e.preventDefault();
        console.log(user);
        axios.post('http://localhost:5000/login', {
            username: user,
            password: password
        })
        .then(res => {
            console.log(res);
        })
    }
    return (
        <div className="login container mt-5 mb-5">
            <div className="row">
                <div className="col-lg-6 blue">
                    <div className="side-box">
                        <div className="context text-center">
                            <h3 className="pb-3 fw-bold">New to our website?</h3>
                            <p className="pb-4">Join us now</p>
                            <NavLink tag={Link} to="/register" >Create an Account</NavLink> 
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 shadow">
                    <div className="login-box my-5 py-2">
                        <h3 className="text-uppercase text-center mb-5 fw-bold">Log in to enter</h3>
                        <form className="row login-form mx-auto">
                            <div className="col-md-12 mb-3">
                                <input className="form-control" type="text" 
                                value={user} placeholder="Username" onChange={usernameChange}/>
                            </div>
                            <div className="col-md-12 mb-3">
                                <input className="form-control" type="password" 
                                value={password} placeholder="Password" onChange={passwordChange} />
                            </div>
                            <div className="col-md-12 mb-3">
                                <input className="form-check-input m-1" type="checkbox" id="keep-logged" />
                                <label className="form-check-label" htmlFor="keep-logged">Keep me logged in</label>
                            </div>
                            <div className="col-md-12 mb-3 text-center">
                                <input className="form-control mb-2" type="submit" value="Log In" onClick={submitForm}/>
                                <a href="/">Forgot Password?</a>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;