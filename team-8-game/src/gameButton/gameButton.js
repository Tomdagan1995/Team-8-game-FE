
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
import { appContext } from "../appContext";
import React, { useState, useContext } from 'react';


export default function GameButton() {
    const {user, SetUser} = useContext(appContext)
    const navigate = useNavigate()
   
    function navigateMain(){
        navigate('/ColoredGame')
    }
    function navigateLight(){
        navigate('/LightGame')
    }
    
    return (
        <>
        <h2>Welcome {user} please select one of our Games and have fun!!</h2>
        <div className="home-buttons">
        <Button className="home-button1" variant="primary" onClick={navigateLight} >Light Game</Button>
        <Button className="home-button2" variant="primary" onClick={navigateMain}>Main Game</Button>
        </div>
        </>
    )
    }