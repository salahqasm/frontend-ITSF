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
import PageHandler from "./pages/Page-handler/Page-handler";
import { useCookies } from "react-cookie";
import FeedbackForm from "./Components/Feedback-component/Feedback-form";
import Mytasks from "./pages/Mytasks-page/Mytasks";
import Profile from "./pages/Profile-page/Profile";
function App() {
  const [cookie] = useCookies();
  return (
    <>
      {
        !cookie.token ?
          <Router>
            <Routes>
              <Route path="/" exact element={<Landing />} />
              <Route path="/Login" exact element={<Login />} />
              <Route path="/signup" exact element={<Signup />} />
              <Route path="/profilepicture" exact element={<PP />} />
              <Route path="*" exact element={<Landing />} />
            </Routes>
          </Router>
          :
          <Router>
            <Routes>
              <Route path="/" exact element={<PageHandler />}>
                <Route path="" element={<Profile />} />
                <Route path="feedback" element={<FeedbackForm />} />
                <Route path="mytasks" element={<Mytasks />} />
              </Route>
            </Routes>
          </Router>


      }


    </>
  );
}

export default App;
{/* <Route path="/admin" exact element={<Admin />} /> */ }
