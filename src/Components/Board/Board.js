import React, { useEffect, useState } from 'react';
import {MoreHorizontal} from "react-feather";
import './Board.css';
import Card from './Card/Card';
import Editable from '../Editable/Editable';

function Board({status, ticketsInfo, users}) {
  
  let cardsList = [];
  
  for(let i = 0; i<ticketsInfo.length/4; i++){
    cardsList.push(<Card users={users} id={ticketsInfo[i]['id']} title={ticketsInfo[i]['title']} user={ticketsInfo[i]['userId']} priority={ticketsInfo[i]['priority'] } tag={ticketsInfo[i]['tag'] }  ></Card>)
  }
  return (
    
    <div className="board">
        <div className="board_top">
          <p className="board_top_title">
            {status}  &nbsp;&nbsp;&nbsp;<span>{ticketsInfo.length/4}</span>
          </p>
        <MoreHorizontal/>
        </div>
        
        <div className="board_cards custom-scroll">
        {cardsList}
        <Editable
        displayClass="board_cards_add"
        text="Add Card"
        placeholder="Enter Card"
        />
        </div>
    </div>
  );
}

export default Board 