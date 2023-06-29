import React from 'react'
import Communities from './communities/Communities';
import Friends from './friends/Friends'
import Home from './home/Home'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// Components component for routing and rendering different components based on the URL
export default function Components() {
  return (
    <Router>
      {/* Define the routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/friends" element={<Friends />} />
        {/* Route for the communities page */}
        <Route path="/communities" element={<Communities />} />
      </Routes>
    </Router>
  )
}
