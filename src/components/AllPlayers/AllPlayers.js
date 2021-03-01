import React, { useEffect, useState } from 'react';
import FakeData from '../FakeData/FakeData.json';
import HeroTeam from '../HeroTeam/HeroTeam';
import PlayerDetails from '../PlayerDetails/PlayerDetails';
import './AllPlayers.css';
function AllPlayers() {
    const [players, setPlayers] = useState([])
    const [heroPlayer, setHeroPlayer] = useState([])
    //function to add clicked player to hero team
    const addHeroTeam=(player)=>{
        const newHeroPlayer=[...heroPlayer,player];
        setHeroPlayer(newHeroPlayer)
    }
    //fetch data from fakedata file
    useEffect(() => {
        const data=FakeData.players
        setPlayers(data)
    }, [])
    return (
        <div className='main-section'>
            <div className='player-section'>
                {/* all players data pass to child component PlayerDetails */}
                {
                    players.map(player=><PlayerDetails key={player.id}player={player} addHeroTeam={addHeroTeam}/>)
                }
            </div>
            <div className='hero-team'>
                {/* child component to show created hero team */}
                <HeroTeam heroPlayer={heroPlayer}/>
            </div>
        </div>
    )
}

export default AllPlayers
