import axios from 'axios'
import React, { useEffect, useState } from 'react'
import './playerlist.css'
import SinglePlayer from './singlePlayer'
export default function PlayerList() {
const [players, setPlayers] = useState(false)
const [currentPlayers, setCurrentPlayers] = useState(false)
const [pagination, setPagination] = useState(false);

useEffect(()=>{
    if (players) {
      let data = players.filter((_, i)=> i <= pagination * 10 - 1)
    setCurrentPlayers(data)
    }
},[pagination,players])

    useEffect(() => {
      axios.get('https://www.balldontlie.io/api/v1/players').then(data=>{
        setPlayers(data.data.data);
        setPagination(1)
      })
    
      
    }, [])
    
    const handleSearch = (e) =>{
      const value = e.target.value
     
      axios.get(`https://www.balldontlie.io/api/v1/players?search=${value}`).then(
        data=>{
          setPlayers(data.data.data)
        }
      )
  
    }


  return (
    <div className='playerlistContainer'>
        <div className="mainTitle">
        Balldontlie
        </div>
        <div className="search">
        <input onChange={handleSearch} placeholder='Search a player' />
        </div>

    {currentPlayers ? <>
      <div className="playerList">
           {currentPlayers.map(ply=><div className="player" key={ply.id}>
                <SinglePlayer player={ply}/>
            </div>)}
        </div>
        <div>{ players.length > 10 && <div className="paginationContainer">
            <div className="paginationButton" onClick={()=>setPagination(1)}>1</div>
            <div className="paginationButton" onClick={()=>setPagination(2)}>2</div>
            <div className="paginationButton" onClick={()=>setPagination(3)}>3</div>
        </div>}
        </div>
    </>:<strong>Please wait</strong>}

       
    </div>
  )
}
