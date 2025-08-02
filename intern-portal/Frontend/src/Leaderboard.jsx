import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./navbar";
import Footer from "./Footer";
import "./Leaderboard.css";



const leaderboardData = [
  { name: "Ananya", donations: 3000 },
  { name: "Riya", donations: 2800 },
  { name: "Priya", donations: 2500 },
  { name: "Sneha", donations: 2000 },
  { name: "Ishita", donations: 1500 },
];

function LeaderBoard(){
 const navigate=useNavigate();
function goBack(){
    navigate("/dashboard")
}
 return(
   <>
   
    <div className="leaderboard-container">
        <button className="back-button" onClick={goBack}>←</button>
    <h1 className="leaderboard-title">Top Donors Learderboard</h1>
    <table className="leaderboard-table">
        <thead>
            <tr>
                <th>Rank</th>
                <th>Intern Name</th>
                <th>Donations (₹)</th>
            </tr>
        </thead>
        <tbody>
            {leaderboardData.map((intern,index)=>(
                <tr key={index}>
                    <td>#{index+1}</td>
                    <td>{intern.name}</td>
                    <td>{intern.donations}</td>
                </tr>
            ))}
        </tbody>
    </table>
</div>
< Footer/>
   </>
   
 )

}

export default LeaderBoard;