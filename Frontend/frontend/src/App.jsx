import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './components/Home';
import Movies from './components/Movies';

// In this App component I am using react-router-dom for routing on multiple pages. 

function App() {

  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route exact path = "/" element={<Home/>}/>
      <Route exact path = "/Movies" element={<Movies/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
