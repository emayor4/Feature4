import React from "react";
//import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from "./components/main/Main";
import Friends from "./components/friends/Friends";
import Communities from "./components/communitites/Communities";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/Main" element={<Main />} />
        <Route path="/friends" element={<Friends />} />
        <Route path="/communities" element={<Communities />} />
      </Routes>
    </Router>
  );
}

export default App;
