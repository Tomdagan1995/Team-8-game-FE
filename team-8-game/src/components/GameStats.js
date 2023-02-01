import React, {useContext} from "react";
import "./GameStats.css";
import axios from "axios";
import { appContext } from "../appContext";

const GameStats = ({ gameStats }) => {
  const { level, points, linesCompleted, linesPerLevel } = gameStats;
  const linesToLevel = linesPerLevel - linesCompleted;
const score = points

const {user} = useContext(appContext)

function sendScore(e) {
  e.preventDefault()
  axios.post(`http://localhost:8080/scores/Main`, {user,score});
  alert("Score Saved") }

  return (
    <ul className="GameStats GameStats__right">
      <li>Level</li>
      <li className="value">{level}</li>
      <li>Lines to level</li>
      <li className="value">{linesToLevel}</li>
      <li>Points</li>
      <li className="value">{points}</li>
      <li>Press P to Pause</li>
      <li>Press Q to Restart</li>
      <button className="btn btn-primary" onClick={sendScore}>Save Score</button>
    </ul>
  );
};

export default React.memo(GameStats);