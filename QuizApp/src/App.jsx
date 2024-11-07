import './App.css'

import Html from './Components/Html';
import Css from './Components/Css';
import Js from './Components/Js';
import Reactjs from './Components/React';
import Nav from './Components/Nav';
import Home from './Components/Home';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
function App() {
  
  return (
  


    <Router>
      <Nav/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/html" element={<Html/>}/>
        <Route path="/css" element={<Css/>}/>
        <Route path="/js" element={<Js/>}/>
        <Route path="/react" element={<Reactjs/>}/>
      </Routes>
    </Router>
   
  )
}

export default App
