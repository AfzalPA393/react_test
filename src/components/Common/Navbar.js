import React from "react";
import "./navbar.css";
import { Link,useNavigate } from "react-router-dom";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import ProfileDropdown from "./ProfileDropdown";
import { useAuth } from "../../utils/Auth";

export default function Navbar() {
  const auth = useAuth();
  let navigate = useNavigate();
  const handleLogout = () =>{
    auth.logout();
    navigate("/signin")
  }
  return (
    <nav className="navbar sticky-top navbar-expand{-sm|-md|-lg|-xl|-xxl} navbar-light bg-white">
      <div className="container-fluid">
        <Link to ="/user" className="navbar-brand" >
          <img
            className="logo"
            src="https://assets-global.website-files.com/5e3177cecf36f6591e4e38cb/5ea2a86505e63bdd814cf868_Logo.png"
            alt="company-logo"
          />
          <span className="ms-2 my-logo">LOGO</span>
        </Link>


      </div>
    </nav>
  );
}
