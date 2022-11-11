import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom';
import './playerPage.css'

export default function PlayerPage(props) {
        const [player, setPlayer] = useState(false)
        const [searchParams, setSearchParams] = useSearchParams();
        const q = searchParams.get('id')  
    useEffect(() => {
        axios.get(`https://www.balldontlie.io/api/v1/players/${q}`).then((d)=>{
            setPlayer(d.data)
            console.log(d.data);
        })

    }, [])
    
  return (
    <>{player ? <div className='playerPage'>
    <div className="section">
    <h1 className='fullname'>{player.first_name} {player.last_name}</h1>
     <div><strong>Height ( feet ): </strong> <span>{player.height_feet || `Not AVAilable`}</span></div>
     <div><strong>Height ( inches ): </strong> <span>{player.height_feet || `Not AVAilable`}</span></div>
     <div><strong>Position: </strong> <span>{player.position || `Not AVAilable`}</span></div>
    </div>
    <div className='team'>
     <h2>Team</h2>
     <div><strong>Team Name: </strong> <span>{player.team.name || `Not AVAilable`}</span></div>
     <div><strong>Abbreviation: </strong> <span>{player.team.abbreviation || `Not AVAilable`}</span></div>
     <div><strong>city: </strong> <span>{player.team.city || `Not AVAilable`}</span></div>
     <div><strong>conference: </strong> <span>{player.team.conference || `Not AVAilable`}</span></div>
     <div><strong>division: </strong> <span>{player.team.division || `Not AVAilable`}</span></div>
     </div>
 </div> : <strong>Please wait</strong>}</>
  )
}
