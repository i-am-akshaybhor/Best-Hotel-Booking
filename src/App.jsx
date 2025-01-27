
import "./App.css"
import React from 'react'
import Home from './components/home/Home'
import AllHotels from './pages/all hotels/AllHotels'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Hotel from "./pages/hotel/Hotel";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hotels" element={<AllHotels />}/>
        <Route path="/hotels/:id" element={<Hotel />}/>
      </Routes>
    </Router>
  )
}

export default App
