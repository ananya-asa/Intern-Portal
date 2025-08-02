import React from "react";
import { Link,useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import "./signup.css";

function Signup() {
    const navigate=useNavigate();
    function handleSignupButton(){
     navigate("/dashboard");
     toast.success("Account created successfully!");
    }
    
  return (

      
      <form className="auth-form">
        <h2>Sign Up</h2>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" name="name" placeholder="Your full name" required />

        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" placeholder="your.email@example.com" required />

        <label htmlFor="password">Password</label>
        <input type="password" id="password" name="password" placeholder="Create a password" required />

        <button type="submit" className="auth-button" onClick={handleSignupButton}>Sign Up</button>
       <p className="auth-footer">
        Already have an account? <Link to="/login">Login</Link>
      </p>
      </form>
      
     

  );
}

export default Signup;
