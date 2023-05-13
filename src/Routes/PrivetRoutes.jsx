import React, { useContext } from "react";
import { AuthContext } from "../AuthProvidor/AuthProvidor";
import { Navigate, useLocation } from "react-router-dom";

const PrivetRoutes = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  let location = useLocation();
  if (user) {
    return children;
  }
  if (loading) {
    return <progress className="progress w-56"></progress>;
  }
  return <Navigate to="/signin" state={{ from: location }} replace />;
};

export default PrivetRoutes;
