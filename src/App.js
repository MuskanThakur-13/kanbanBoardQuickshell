import React from "react";
import "./App.css";
import Board from "./Components/Board/Board"
import Kanban from "./Components/Kanban/Kanban"




function App() {


  return (
    <div className="app">
      <div className="app_navbar">
        <h2>Kanban</h2>
      </div>

      <div className="app_outer">
        <div className="app_boards">
          {/* <Board />
          <Board />
          <Board /> */}
          <Kanban>

          </Kanban>
        </div>
      </div>

    </div>
  );
}

export default App;

