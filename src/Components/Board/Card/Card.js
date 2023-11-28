import React from 'react';
import './Card.css';
import { CheckSquare, Clock, MoreHorizontal } from 'react-feather';
import Chip from "../Chip/Chip"

function Card({users, id, title, user, priority, tag}) {
    let currUser = ''
    for(let i = 0; i<user.length; i++){
        console.log(users[i]['id'])
        if(users[i]['id'] == user) currUser = users[i]['name'] 
    }
  return (
    <div className="card">
        <div className="card_top">
            <div className="card_top_labels">
                <Chip text={id} color="green" />  
                <Chip text={currUser} color="purple" />  
                
            </div>

            <MoreHorizontal/>
        </div>
        <div className="card_title">
            {title}
        </div>
        <div className="card_footer">
            <p>
            <Chip text={tag} color="orange" />  
            </p>
            
        </div>
    </div>
  )
} 

export default Card;