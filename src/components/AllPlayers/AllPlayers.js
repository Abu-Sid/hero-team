import React, { useEffect, useState } from 'react';
import FakeData from '../FakeData/FakeData.json';
import HeroTeam from '../HeroTeam/HeroTeam';
import PlayerDetails from '../PlayerDetails/PlayerDetails';
import './AllPlayers.css';
function AllPlayers() {
    const [players, setPlayers] = useState([])
    const [heroPlayer, setHeroPlayer] = useState([])
    const addHeroTeam=(player)=>{
        const newHeroPlayer=[...heroPlayer,player];
        setHeroPlayer(newHeroPlayer)
    
    }
    useEffect(() => {
        const data=FakeData.players
        setPlayers(data)
    }, [])
    return (
        <div className='main-section'>
            <div className='player-section'>
                {
                    players.map(player=><PlayerDetails key={player.id}player={player} addHeroTeam={addHeroTeam}/>)
                }

            </div>
            <div className='hero-team'>
                <HeroTeam heroPlayer={heroPlayer}/>

            </div>
        </div>
    )
}

export default AllPlayers
