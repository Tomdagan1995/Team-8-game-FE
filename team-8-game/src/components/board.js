import React, { memo, useEffect, useRef } from 'react';
import {useBoard} from "./useBoard.js";

const Board = () => {

    const [display, score, onKeyDown, level] = useBoard();
    const eBoard = useRef();
    const user = "Fake User"

    useEffect(focusBoard, []);

    function focusBoard() {
        eBoard.current.focus();
    }

    return (
        <>
        <div  ref={eBoard} className={'t-board'} tabIndex={0} onKeyDown={ onKeyDown }>
            <div>
                <span className="t-score-label">Score: </span>
                <span className="t-score-label">{score.toLocaleString()}</span>
                <span><button className="btn btn-primary" onClick={() => window.location.reload()}>Restart</button></span>
            </div>
            {display.map( (row, index) => <Row row={row} key={index}/>)}
            <span className="t-score-label"> {level}</span><span><button className="btn btn-primary">Save Score</button></span>
            
        </div>
        <h3>Up Arrow will change the direction of the Shape, SpaceBar will drop the Shape 10 squares.</h3>
        </>
    );
};

const Row = memo( props => {
    return (
        <span className='t-row'>
            {props.row.map( (cell, index) => <Cell cell={cell} key={index}/>)}
        </span>
    );
});

const Cell = memo( props => {
    const count = useRef(0);
    count.current++;

    const value = props.cell ? props.cell : 0;
    return (
        <span className={`t-cell t-cell-${value}`}></span>
    );
});

export default memo(Board);