import React from 'react'
import './LoginRegister.css';
import { useNavigate } from 'react-router-dom';
import { FaUser , FaLock } from "react-icons/fa";

const LoginRegister = () => {
const navigate = useNavigate();
  return (
    <div className='login-wrapper'>
        <form action="" className='form-box'>
            <h1>login</h1>
            <div className="input-type">
                <input type="text" placehoalder='Username'required/>
                <FaUser className='icon' />
            </div>
            <div className="input">
                <input type="Password" placehoalder='Password'required/>
                <FaLock   className='icon'/>
            </div>
            <div className="remember-forgot">
                <label><input type="checkbox"/>Remember me</label>
                <a href="#">forgot Password?</a>
            </div>
            <button type="submit" onClick={() => {navigate("/dashboard")}}>login</button>
            <div className="register-link">
                <p>Dont't have an account? <a href="#">register</a> </p>
                
            </div>

        </form>
       
    </div>
  );
};

export default LoginRegister