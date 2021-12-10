import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './Login.scss';

function Login() {
    const [user, setUser] = useState("");
    const [password, setPassword] = useState("");
    const usernameChange = e => {
        setUser(e.target.value);
    }
    const passwordChange = e => {
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
        <main>
            <section className="login">
                <div className="container mt-5 mb-5 shadow">
                    <div className="row">
                        <div className="col-lg-6 blue">
                            <div className="side-box">
                                <div className="context text-center">
                                    <h3 className="pb-3 fw-bold">New to our website?</h3>
                                    <p className="pb-4">Join us now</p>
                                    <Link to="/register" >Create an Account</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="login-box my-5 py-2">
                                <h3 className="text-uppercase text-center mb-5 fw-bold">Log in to enter</h3>
                                <form className="row login-form mx-auto">
                                    <div className="col-md-12 mb-3">
                                        <input className="form-control" type="text"
                                            value={user} placeholder="Username" onChange={usernameChange} />
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
                                        <input className="form-control mb-2" type="submit" value="Log In" onClick={submitForm} />
                                        <Link to="/reset" >Forgot Password?</Link>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
        </main>
    );
}

export default Login;