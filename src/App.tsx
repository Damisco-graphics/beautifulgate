import React from 'react';
import './App.css';
import {Routes, Route} from 'react-router-dom'
import Home from './pages/home.jsx'
import Nopage from './pages/Nopage.jsx'
import footer from './pages/footer.jsx'
import Ourpastors from './pages/ourpastors';
import Ourchurch from './pages/ourchurch'
import {useState} from 'react'

function App() {
  
  return (
    <div className="App">

      <Routes>
        <Route path= '/' element={<Home/>} />
        <Route path= '/beautifulgate' element={<Home/>} />
        <Route path='/ourpastors' element={<Ourpastors/>} />
        <Route path='/ourchurch' element ={<Ourchurch/>} />
        <Route path='*' element ={<Nopage/>} />
      </Routes>      
      {footer()}
    </div>
  );
}

export default App;
