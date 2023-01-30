import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Board from "./Components/board";

function Game() {
    return (
        <div className="t-parent">
            <Board/>
        </div>
    );
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 
    <Game />
  
);