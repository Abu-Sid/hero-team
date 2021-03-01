import { faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import './PlayerDetails.css';


function PlayerDetails({player,addHeroTeam}) {
    const {name,gender,nationality,image,position,sport,team,salary}=player;
    const [disabled,setDisabled]=useState(false)
    
    return (
        <div className="card-container">
            <div className="profile-image">
                <img src={image} alt=""/>
                <button className='add-button' disabled={disabled} onClick={()=>addHeroTeam(player)|| setDisabled(true)}><FontAwesomeIcon icon={faUserPlus}/>Add</button>
                {/* frontawesome icon for add players */}
            </div>
            <h1> {name} </h1> 
            <div className="player-info">
                <div className="personal-info">
                    <h5>Gender:{gender}</h5>
                    <h5>Nationality:{nationality}</h5>
                    <h5>Sports:{sport}</h5>
                    
                </div>
                <div className="team-info">   
                
                    <h5>Team:{team}</h5>
                    <h5>Position:{position}</h5>
                    <h5>Salary:${salary}</h5>
                </div>
            </div>
        </div>
    )
}

export default PlayerDetails
