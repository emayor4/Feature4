import React from 'react'
import Communities from './communities/Communities';
import Friends from './friends/Friends'
import Home from './home/Home'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";


export default function Components() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/friends" element={<Friends />} />
        <Route path="/communities" element={<Communities />} />
      </Routes>
    </Router>
  )
}
