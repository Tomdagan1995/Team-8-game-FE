import React from "react";
import Button from 'react-bootstrap/Button';


export default function GameButton() {

    const startGame = () => {
        console.log("work");
    }
    return (
        <Button variant="primary" onClick={startGame}>Let's play!</Button>
    )
}