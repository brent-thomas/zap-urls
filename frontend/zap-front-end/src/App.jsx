import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import './App.css'
import Nav from './components/nav/Nav'
import Home from './pages/Home/Home';

function App() {

  return (
    <Router>
      <Nav/>
      <div className='pd-hz pd-vt ht-100vh'>
        <Routes>
          <Route path="/" element={<Home/>} />
        </Routes>
      </div>
    </Router>   
  )
}

export default App
