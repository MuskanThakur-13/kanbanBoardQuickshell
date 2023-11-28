import React, { useState, useEffect } from "react";
import Board from "../Board/Board";
import Card from "../Board/Card/Card";
import Editable from "../Editable/Editable";
import { MoreHorizontal } from "react-feather";
const toDoTickets = [];
const inProgressTickets = [];
const backlogTickets = [];

const url = "https://api.quicksell.co/v1/internal/frontend-assignment";

function loadTicketsStatus(tickets) {
  for (let i = 0; i < tickets.length; i++) {
    if (tickets[i]["status"] == "Todo") toDoTickets.push(tickets[i]);
    else if (tickets[i]["status"] == "Backlog") backlogTickets.push(tickets[i]);
    else if (tickets[i]["status"] == "In progress")
      inProgressTickets.push(tickets[i]);
  }
}

function Kanban() {
  const [data, setData] = useState([]);
  const [tickets, setTickets] = useState([]);
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        setTickets(data["tickets"]);
        setUsers(data["users"]);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);
  
  

  loadTicketsStatus(tickets);
  
  
  return (
    <>
      <Board status={"To Do"} ticketsInfo={toDoTickets} users={users}></Board>
      <Board status={"In Progress"} ticketsInfo={inProgressTickets} users={users}></Board>
      <Board status={"Backlog"} ticketsInfo={backlogTickets} users={users}></Board>
    </>
  );
}

export default Kanban;
