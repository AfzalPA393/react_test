import { Navigate } from "react-router-dom";
import { useAuth } from "./Auth";
import React from 'react'

function RequireAuth({children}) {
    const auth =useAuth();
    if(!auth.user) {
     return <Navigate to="/signin"/>
    }
  return children;
}

export default RequireAuth