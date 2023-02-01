import React, {useEffect, useState} from "react";
import axios from "axios";
import { Table} from 'react-bootstrap'

export default function Highscores() {

const [highScores, setHighScores] = useState([])
   
useEffect(() => {
axios.get(`http://localhost:8080/scores`).then(res => setHighScores(res.data.data))
    },[])
    console.log(highScores)

    return (
       
        <>
        <h3>High Scores Light Version</h3>
        <div  className="User"> 
        
            {highScores.map(item => ( <Table key={item.id} variant="secondary">
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
          </>
          )
}