import React,{useEffect,useState} from "react";
import "./Dashboard.css";
import Rewards from "./Rewards";
import Footer from "./Footer";
import axios from "axios";

function Dashboard(){

 const[intern,setIntern]=useState(null);
 
 useEffect(()=>{
    const referralCode = "ananya2025";
    axios.get(`http://localhost:5000/api/intern/${referralCode}`)
    .then(response=>{
      setIntern(response.data)
    })
    .catch(err=>{
      console.log("Error fetching intern data",err)
    });

 },[]);

   if(!intern){
    return <p>Loading intern...</p>
   };

    return(
        <>
      
        <h1 className="dashboard-heading">Welcome {intern.name}</h1>
       
        <div className="dashboard-container">
       

      <div className="left-section">
        <h3><strong>Referral code: {intern.referralCode}</strong></h3>

        <h2><strong>Total Donations: {intern.donations}</strong></h2>
        </div>
        <div className="right-section">
        < Rewards />
        </div>
       <Footer />
        </div>
        
        </>
    )
}

export default Dashboard;