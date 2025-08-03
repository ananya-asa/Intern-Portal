import React,{useState,useEffect} from "react";
import { Route,Routes,useLocation } from "react-router-dom";
import Dashboard from "./dashboard";
import Navbar from "./navbar";
import Login from "./login";
import Signup from "./Signup";
import Home from "./Home";
import LeaderBoard from "./Leaderboard";
import "./App.css";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App(){
    
const location=useLocation();
    
const showNavbar = ['/dashboard', '/leaderboard'].includes(location.pathname);
const[darkMode,setDarkMode]=useState(false);

useEffect(() => {
  document.body.className=darkMode?"dark":"";
}, [darkMode]);

const handleLogout=()=>{
    setDarkMode(false)
}

    return(
        <>
           {showNavbar && <Navbar darkMode={darkMode} setDarkMode={setDarkMode} onLogout={handleLogout} />}
        <Routes>
            <Route path="/" element={< Home/>}></Route>
            <Route path="/signup" element={< Signup/>}></Route>
            <Route path="/login" element={< Login/>}></Route>
            <Route path="/dashboard" element={< Dashboard/>}></Route>
            <Route path="/leaderboard" element={<LeaderBoard />}></Route>
        </Routes>
        <ToastContainer position="top-right" autoClose={1000} />

        </>
    )
}

export default App;