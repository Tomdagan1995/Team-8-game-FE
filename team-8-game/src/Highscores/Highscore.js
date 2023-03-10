import React, { useEffect, useState } from "react";
import axios from "axios";
import { Table } from "react-bootstrap";

export default function Highscores() {
  const [lightHighScores, setLightHighScores] = useState([]);
  const [mainHighScores, setMainHighScores] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:8080/scores/Light`)
      .then((res) => setLightHighScores(res.data.data));
  }, []);

  useEffect(() => {
    axios
      .get(`http://localhost:8080/scores/Main`)
      .then((res) => setMainHighScores(res.data.data));
  }, []);

  return (
    <>
      <div className="Main-container">
        <div className="scores-container">
          <h3>Light Highscores</h3>
          <div className="highscore-tables">
            <div className="lightscore-box">
              {lightHighScores.map((item) => (
                <Table
                  key={item.id}
                  variant="secondary"
                  style={{ borderRadius: "10px" }}
                >
                  <thead>
                    <tr>
                      <th>User</th>
                      <th>Score</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>{item.user}</td>
                      <td>{item.score}</td>
                    </tr>
                  </tbody>
                </Table>
              ))}
            </div>
          </div>
        </div>
        <div className="scores-container">
          <h3>Main Highscores</h3>
          <div className="highscore-tables">
            <div className="mainscore-box">
              {mainHighScores.map((item) => (
                <Table key={item.id} variant="secondary">
                  <thead>
                    <tr>
                      <th>User</th>
                      <th>Score</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>{item.user}</td>
                      <td>{item.score}</td>
                    </tr>
                  </tbody>
                </Table>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
