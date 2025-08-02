import React,{useState,useEffect} from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "./Navbar.css"

function Navbar({darkMode,setDarkMode,onLogout}){

const navigate=useNavigate();

function handleLogout(){
  onLogout();
  navigate("/");
  toast.info("Logged out successfully.");

}


 function handleLeaderboard(){
  navigate("/leaderboard")
}

    return(
        <>
        <nav className="navBar">
        <h2>Intern Portal</h2>
        <div className="nav-buttons">
         <button type="submit" onClick={handleLogout} className="logout-button">Logout</button>
          <button onClick={handleLeaderboard}>Leader Board</button>
          <button onClick={()=>setDarkMode(!darkMode)} className="toggle-button">
            {darkMode ? "☀️" :"🌙" }
          </button>
          </div>
         </nav>
        </>
    )
}

export default Navbar;