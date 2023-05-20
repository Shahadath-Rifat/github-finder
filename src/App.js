import React from 'react';
import './style/index.css';
import Search from "./components/Search";
import User from './components/User';
import {  Routes, Route  } from 'react-router-dom';


function App() {
  return (
    <body>
      
      <Routes>
        <Route path="/" element={<Search />} />
        <Route path="/user/:username" element={<User />} />
      </Routes>
    
    </body>
  );
}

export default App;
