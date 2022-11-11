import React from 'react'
import './singlePlayer.css'

import { Link } from "react-router-dom"

export default function SinglePlayer({player}) {
   

  return (
    <div className='singlePlayerCard'>
        <div className="playerCardSection" >
            <strong>Full Name:</strong> <Link 
            to={{
                pathname: "/player",
                search: `?id=${player.id}`,
            
                state: { player }
              }}
            >{player.first_name} {player.last_name}</Link>
        </div>
        <div className="playerCardSection">
            <strong>Position:</strong> <span>{player.position}</span>
        </div>
    </div>
  )
}
