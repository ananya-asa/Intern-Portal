import React,{ useState} from "react";
import {useNavigate,Link} from "react-router-dom";
import { toast } from 'react-toastify';

import "./Login.css";

function Login(){
     const[referralCode,setReferralcode]=useState("");
     const[password,setPassword]=useState("");
     const navigate=useNavigate();
const handleSubmit=(e)=>{
    e.preventDefault();
navigate("/dashboard");
toast.success("Login successful!");


}

    return(
        <>
        <div className="login-container">
        
        <form onSubmit={handleSubmit}>
        <h1 className="login-title">Login</h1>
        <label> Name:</label>
        <input type="text" value={referralCode} placeholder="Your Referral Code" onChange={(e)=>setReferralcode(e.target.value)} className="login-input"></input>
        <br></br>
        <label>Email:</label>
        <input type="password" value={password} placeholder="Your Password" onChange={(e)=>setPassword(e.target.value)} className="login-input"></input>
        <br></br>
        <button type="submit" className="login-button">Login</button>
        <p className="auth-footer">
        Don't have an account? <Link to="/login">Signup</Link></p>
      </form>
      </div>
        </>
    )
}

export default Login;