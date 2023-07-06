import React from "react";
import { useNavigate, Navigate } from "react-router-dom";
import { checkUser } from "../../common/services/AuthService";

const ProtectedRoute = ({ element: Component, ...rest }) => {
  console.log("element: ", Component);
  const navigate = useNavigate();

  // Handler for navigating back to the authentication page
  const goBackHandler = () => {
    navigate("/auth");
  };

  // Check if the user is authenticated
  if (checkUser()) {
    // Render the protected component
    return <Component />;
  } else {
    // Render unauthorized message and a button to go back
    return (
      <Navigate to="/auth" replace />
    );
  }
};

export default ProtectedRoute;
