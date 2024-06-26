import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import './App.css'
import Nav from './components/nav/Nav'
import Home from './pages/Home/Home';
import Footer from './components/footer/footer';
import About from './pages/about/About';
import Privacy from './pages/privacy/Privacy';
import Terms from './pages/terms/Terms';

function App() {

  return (
    <Router>
      <Nav/>
      <div className='pd-hz pd-vt ht-100vh'>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About/>}/>
          <Route path="/privacy" element={<Privacy/>}/>
          <Route path="/terms" element={<Terms/>} />
        </Routes>
      </div>
      <Footer/>
    </Router>   
  )
}

export default App
