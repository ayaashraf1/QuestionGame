import React from "react";
import './LevelCard.css';
function LevelCard({text,id,clickMethod}) {
    return ( 
        <div className="level-card" key={id} onClick={clickMethod}>{text}</div>
     );
}

export default LevelCard;