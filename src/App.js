import "./App.css";
import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
// import Navb from "./Navbar/Navbar"
import Admin from "./pages/Admin-page/Admin"
import Landing from "./pages/home-page/Landing";
import Signup from "./pages/Sign-page/Signup"
import Login from "./pages/Sign-page/Login.js"
import PP from "./pages/Profile-picture/PP";

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
          {/* <Route path="*" exact element={<PP />} /> PAGE NOT FOUND ################################# */}
          
        </Routes>
      </Router>

    </>
  );
}

export default App;
