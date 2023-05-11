import "./App.css";
import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
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
import StudentBrowse from "./Components/Student-components/Browsetasks-component/StudentBrowse";
import Home from "./pages/Home/Home";
import ViewStudent from "./Components/View-components/ViewStudent";
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
              <Route path="*" exact element={<Landing />} />
            </Routes>
          </Router>
          : cookie.user.userType === 'company' ?
            <Router>
              <Routes>
                <Route path="/" exact element={<PageHandler />}>
                  <Route path="/" element={<Home />} />
                  <Route path="/profile" element={<Profile />} />
                  <Route path="feedback" element={<FeedbackForm />} />
                  <Route path="mytasks" element={<Mytasks />} />
                  <Route path="student/:id" element={<ViewStudent />} />
                  
                </Route>
              </Routes>
            </Router>
            : cookie.user.userType === 'student' ?
              <Router>
                <Routes>
                  <Route path="/" exact element={<PageHandler />}>
                    <Route path="/" element={<Home />} />
                    <Route path="/profile" element={<Profile />} />
                    <Route path="feedback" element={<FeedbackForm />} />
                    <Route path="mytasks" element={<Mytasks />} />
                    <Route path="browsetasks" element={<StudentBrowse />} />
                  </Route>
                </Routes>
              </Router>
              : cookie.user.userType === 'admin' ?
                <Router>
                  <Routes>
                    <Route path="/admin" exact element={<Admin />}>
                    </Route>
                  </Routes>
                </Router> : <></>

      }


    </>
  );
}

export default App;
{/* <Route path="/admin" exact element={<Admin />} /> */ }
