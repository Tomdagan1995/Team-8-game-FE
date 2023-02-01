import React, {useContext } from 'react';
import './index.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Highscore from './Highscores/Highscore';
import 'bootstrap/dist/css/bootstrap.min.css';
import TopBar from './TopBar/TopBar';
import SignUp from './menu/modules/SignUp';
import Login from './menu/modules/LogIn';
import Game from './Game';
import GameTal from "./components/GameTal";
import GameButton from './gameButton/gameButton';
import { appContext } from './appContext';



function App() {

  const {token} = useContext(appContext)

  const ProtectedGameRoute = () => {
    
    if (token) {
      return <GameButton />;
    } else {
      return <Login/>;
    }
  };
  



  return (
    <BrowserRouter>
      <TopBar />
      <Routes>
        <Route path="/" element={<ProtectedGameRoute />}>
        </Route>
        <Route path="/ColoredGame" element={<GameTal rows={20} columns={10} />}>
        </Route>
        <Route path="/LightGame" element={<Game />}>
        </Route>
        <Route path="/signup" element={<SignUp />}>
        </Route>
        <Route path="/login" element={<Login />}>
        </Route>
        <Route path="/highscores" element={<Highscore />}>
        </Route>
      </Routes>
    </BrowserRouter >


  );
}

export default App;
