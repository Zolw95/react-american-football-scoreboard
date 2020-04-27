//TODO: STEP 1 - Import the useState hook.
import React, { useState } from "react";
import BottomRow from "./BottomRow";
import Timer from "./Timer";
import Timer2 from "./Timer2";
//import Scoreboard from "./Scoreboard";
import "./App.css";
import { render } from "@testing-library/react";




function App() {
  const initialLionState = 0;
  const initialTigerState = 0;
  //TODO: STEP 2 - Establish your applictaion's state with some useState hooks.  You'll need one for the home score and another for the away score.
  const [lionScore, setLionScore] = useState(initialLionState);
  const [tigerScore, setTigerScore] = useState(initialTigerState);
  //const ms = require(‘pretty-ms’)

  return (
    <div className="container">
      <section className="scoreboard">
        <div className="topRow">
          <div className="home">
            <h2 className="home__name">Lions</h2>

            {/* TODO STEP 3 - We need to change the hardcoded values in these divs to accept dynamic values from our state. */}
            <div className="home__score">{lionScore}</div>
          </div>
          <div></div>
          <Timer style={timerStyle} />
          <div className="away">
            <h2 className="away__name">Tigers</h2>
            <div className="away__score">{tigerScore}</div>
          </div>
        </div>
        <BottomRow />
      </section>
      <section className="buttons">
        <div className="homeButtons">

          {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}
          <button className="homeButtons__touchdown" onClick={() => setLionScore(lionScore + 7)}>Home Touchdown</button>
          <button className="homeButtons__fieldGoal" onClick={() => setLionScore(lionScore + 3)}>Home Field Goal</button>
        </div>
        <div className="awayButtons">
          <button className="awayButtons__touchdown" onClick={() => setTigerScore(tigerScore + 7)}>Away Touchdown</button>
          <button className="awayButtons__fieldGoal" onClick={() => setTigerScore(tigerScore + 3)}>Away Field Goal</button>
        </div>
      </section>
    </div>
  );
}

const timerStyle = {
  marginTop: '300px',
  color: 'black'
}



export default App;
