// import { useState,useMemo } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import User from "./components/Users/User";
import Theme from "./components/Theme";
import AddUser from "./components/Users/AddUser";
import EditUser from "./components/Users/EditUser";
function App() {
  /*const  [user, setUser]  = useState("");
  const providerValue =useMemo(()=>({user,setUser}),[user,setUser]);*/
  return (
      <Theme>
      <Routes>

      <Route exact path="/user" element={<User />} />
        <Route exact path="/user/add" element={<AddUser/>}/>
        <Route exact path="/user/edit/:id" element={<EditUser/>}/>
      </Routes>
      </Theme>
  );
}

export default App;
