import React, {useState} from 'react';
import {NavLink} from 'reactstrap';
import { Link } from 'react-router-dom'
import './Login.scss'
function Register() {
    const [user, setUser] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const usernameChange = e =>{
        setUser(e.target.value);
    }
    const emailChange = e =>{
        setEmail(e.target.value);
    }
    const passwordChange = e =>{
        setPassword(e.target.value);
    }
    const confirmPasswordChange = e =>{
        setConfirmPassword(e.target.value);
    }
    const submitForm = e => {
        e.preventDefault();
    }
    return (
        <div className="container mt-5 mb-5 shadow-lg">
            <div className="row">
                <div className="col-lg-6 blue">
                    <div className="side-box">
                        <div className="context text-center">
                            <h3 className="pb-3 fw-bold">Already have an account?</h3>
                            <p className="pb-4">Join us now</p>
                            <NavLink tag={Link} to="/login" >Login Now</NavLink>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="register-box my-5 py-2">
                        <h4 className="text-uppercase text-center mb-5 fw-bold">Create an acount</h4>
                        <form className="row register-form mx-auto">
                            <div className="col-md-12 mb-3">
                                <input className="form-control" type="text" 
                                value={user} placeholder="Username" onChange={usernameChange}/>
                            </div>
                            <div className="col-md-12 mb-3">
                                <input className="form-control" type="text" 
                                value={email} placeholder="Email" onChange={emailChange}/>
                            </div>
                            <div className="col-md-12 mb-3">
                                <input className="form-control" type="password" 
                                value={password} placeholder="Password" onChange={passwordChange} />
                            </div>
                            <div className="col-md-12 mb-3">
                                <input className="form-control" type="password" 
                                value={confirmPassword} placeholder="Confirm Password" onChange={confirmPasswordChange} />
                            </div>
                            <div className="col-md-12 mb-3">
                                <input className="form-check-input m-1" type="checkbox" id="keep-logged" />
                                <label className="form-check-label" htmlFor="keep-logged">Keep me logged in</label>
                            </div>
                            <div className="col-md-12 mb-3 text-center">
                                <input className="form-control mb-3" type="submit" value="Register" onClick={submitForm}/>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Register;