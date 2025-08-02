import React from "react";
import "./Rewards.css";

const rewardsList = [
  { id: 1, icon: "🏆", text: "Completed Orientation" },
  { id: 2, icon: "🎉", text: "Participated in ABC Event" },
  { id: 3, icon: "⭐", text: "Top Fundraiser" },
 
  
 
 
];

function Rewards() {
  return (
    
    <div className="rewards-section">
       <h2>Rewards & Unlockables</h2>
     <div className="rewards-scrollable">
      {rewardsList.length > 0 ? (
        rewardsList.map(({ id, icon, text }) => (
          <div key={id} className="reward-card">
            <span className="reward-icon">{icon}</span> {text}
          </div>
        ))
      ) : (
        <p>No rewards unlocked yet. Keep going!</p>
      )}
      </div>
    </div>
  );
}

export default Rewards;
