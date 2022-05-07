import { Card, Button, FormControl, FormGroup, TextField, Input, FormLabel, InputLabel, CardContent } from "@mui/material";
import React, { useState } from "react";
import { API_URL } from "../Config";
import { useAuth } from "./Auth";
import { useForm } from "react-hook-form";
import "./signin.css"

import axios from "axios";
import { useNavigate } from "react-router-dom";
export default function Signin() {
  let navigate =useNavigate();
  const [token, setToken] = useState(localStorage.getItem("session"));
  const auth =useAuth();
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm();
 const  onSubmit = data => {
   console.log(data);
  
   let username =data.name;
   let password =data.password;
   auth.login(username);
   debugger
   axios({
     method : "post",
     url : `${API_URL}mobile/login`,
     headers: { "Content-Type": "application/json", token: token }, 
    
     data : {
      username,
      password,
      role : 1,
 
      
     }
   })
   .then (function (response) {
     console.log(response);
     localStorage.setItem("session",response.data.session)
     setToken(localStorage.getItem("session"));
     navigate("/");
   })
   
   
 }
  return (
    <div className="container login">
      
      
        <h2 className="text-center">Sign in</h2>
      
      <div className="w-300">
        <form onSubmit={handleSubmit(onSubmit)} className="d-flex flex-column w-50 align-content-center justify-content-center m-auto ">
          <label className="pt-3 pb-3" htmlFor="username">
            
            User Name
          </label>
          <input
            className="pb-3 mb-3"
            name="name"
            type="text"
            defaultValue=""
              {...register("name", { required: true })}
           
          ></input>
          <span className="text-danger">
              {errors.name && <p>Email id is required</p>}
            </span>
          <label className="pt-3 pb-3 " htmlFor="password">
            Password
          </label>
          <input
            className="pb-3 mb-3"
            name="password"
            type="password"
            defaultValue=""
              {...register("password", { required: true })}
          ></input>
          <span className="text-danger">
              {errors.password && <p>Password is required</p>}
            </span>
          <FormGroup>
            <button className=" btn mt-3 mb-4 p-2 h-25 login-color border-0" type="submit" >
              Login
            </button>
            
          </FormGroup>
         
        </form>
        </div>
    </div>
  );
}
