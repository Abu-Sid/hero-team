import React from 'react';
import './HeroTeam.css';

function HeroTeam({heroPlayer}) {
    console.log(heroPlayer);
    // total budget calculation using reduce
    const totalBudget=heroPlayer.reduce((total,curPlayer)=>total+curPlayer.salary,0)
    return (
        <div className='team-container'>
            {/* Area for selected team member info */}
            <div className='team-heading'>
                <h1>My Hero Team</h1>
                <h3> Team Member:{heroPlayer.length}</h3>
            </div>
            <div className='team-player'>
                {/* Show name and salary of selected player in hero team area */}
            {
                heroPlayer.map(player => <h5 className='added-player'>{player.name + ' : $' + player.salary}</h5>)
            }
            <h3>Total Budget: ${totalBudget}</h3>
            </div>
        </div>
    )
}

export default HeroTeam
