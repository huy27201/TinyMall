import React, {useState} from 'react';
import axios from 'axios';
import {NavLink} from 'reactstrap';
import { Link } from 'react-router-dom';
import './Login.scss';

function Forget() {
    const [email, setEmail] = useState("");
    const emailChange = e =>{
        setEmail(e.target.value);
    }
    const submitForm = e => {
        e.preventDefault();
        // axios.post(`localhost:5000/login`, {user,password})
        //     .then(res => { console.log(res)})
        //     .catch(error => console.log(error));
    }
    return (
        <div className="container mt-5 mb-5 shadow">
            <div className="row justify-content-center">
                <div className="col-lg-8">
                    <div className="forgot-password my-5 py-2">
                        <h3 className="text-uppercase text-center mb-5 fw-bold">Forgot Password</h3>
                        <form className="row login-form mx-auto">
                            <div className="col-md-12 mb-3">
                                <input className="form-control" type="text" 
                                value={email} placeholder="Email" onChange={emailChange}/>
                            </div>
                            <div className="col-md-12 mb-3 text-center">
                                <input className="form-control mb-2" type="submit" value="Reset Password" onClick={submitForm}/>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Forget;