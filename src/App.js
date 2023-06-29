import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Friends from "./components/friends/Friends";
import Communities from "./components/communities/Communities";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/friends" element={<Friends />} />
        <Route path="/communities" element={<Communities />} />
      </Routes>
    </Router>
  );
}

export default App;
