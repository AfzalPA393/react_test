import React, { useState, useEffect } from "react";
import Navbar from "../components/Common/Navbar";
import Sidebar from "../components/Common/Sidebar";
import Breadcrumbs from "../components/Common/Breadcrumbs";
import { Route, Navigate,Outlet } from 'react-router-dom';
import Authservice from "../services/auth.service";
const PrivateRoute = () => {
  const [token, setToken] = useState('');
  useEffect(() => {
    getToken();
  }, []);
  async function getToken(){
    let token =await Authservice.getCurrentUser();
    setToken(token);
  }
let redirectPath = '/';

  if (!token) {
    return <Navigate to={redirectPath} replace />;
  }
if (token !== undefined) {
  debugger;
  return (
    <React.Fragment>
      <div className="container-fluid ">
        <div className="row h-100">
          <Navbar />
          <Sidebar />
          <div className="col-md-10 col-9">
            <Breadcrumbs />
            <div className="container-fluid ">
            <Outlet />
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>

  );
}
};
export default PrivateRoute;
