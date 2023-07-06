import React from 'react'

import Communities from './communities/Communities';
import Friends from './friends/Friends'
import Home from './home/Home'

import { BrowserRouter as Router, Navigate, Route, Routes } from "react-router-dom";

import AuthModule from "./Auth/Auth";
import AuthRegister from "./Auth/AuthRegister";
import AuthLogin from "./Auth/AuthLogin";
import ProtectedRoute from "./ProtectedRoute/ProtectedRoute";

// Components component for routing and rendering different components based on the URL
export default function Components() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={<ProtectedRoute path="/" element={Home} />}
        /> {/*leads to friends and comunities page*/}

        <Route
          path="/friends"
          element={<ProtectedRoute path="/friends" element={Friends} />}
        />
        <Route
          path="/communities"
          element={<ProtectedRoute path="/communities" element={Communities} />}
        />

        <Route path="/auth" element={<AuthModule />} /> {/*leads to login and register page*/}
        <Route path="/auth/register" element={<AuthRegister />} />
        <Route path="/auth/login" element={<AuthLogin />} />


        <Route path="*" element={<Navigate to="/auth" replace />} />
      </Routes>
    </Router>
  )
}
