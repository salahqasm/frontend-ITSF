import "./App.css";
import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Navb from "./Navbar/Navbar"
import Admin from "./pages/Admin-page/Admin"
import Landing from "./pages/Landing-page/Landing.js";
import Signup from "./pages/Sign-page/Signup"
import Login from "./pages/Sign-page/Login.js"
import PP from "./pages/Sign-page/Profile-picture-upload/PP";
import Profile from "./pages/Profile-page/Profile";
import PageHandler from "./pages/Page-handler/Page-handler";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" exact element={<Landing />} />
          <Route path="/Login" exact element={<Login />} />
          <Route path="/admin" exact element={<Admin />} />
          <Route path="/signup" exact element={<Signup />} />
          <Route path="/profilepicture" exact element={<PP />} />
          <Route path="/home" exact element={<PageHandler />} />
          
          
          {/* <Route path="*" exact element={<PP />} /> PAGE NOT FOUND ################################# */}
          
        </Routes>
      </Router>

    </>
  );
}

export default App;
