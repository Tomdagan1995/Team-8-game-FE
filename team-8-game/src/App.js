import React, { Profiler } from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Home/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import Profile from './profile/Profile';
import TopBar from './TopBar/TopBar';
import SignUp from './menu/modules/SignUp';
import Login from './menu/modules/LogIn';



function App() {
  return (
    <BrowserRouter>
      <TopBar />
      <Routes>
        <Route path="/" element={<Home />}>
        </Route>
        <Route path="/profile" element={<Profile />}>
        </Route>
        <Route path="/signup" element={<SignUp />}>
        </Route>
        <Route path="/login" element={<Login />}>
        </Route>
      </Routes>
    </BrowserRouter >
  );
}

export default App;
