
// import logo from './logo.svg';
import './App.css';
import React from 'react';
import Carousal from './components/carousel';
import Leaderboard from './components/Leaderboard.js';
// import Team_register from './components/Team_register';
import Register from './components/register';

function App() {
  return (
    <div >
      <Carousal/>
      <Leaderboard/> 
      {/* <Team_register/> */}
      <Register/>
    </div>
  );
}

export default App;
