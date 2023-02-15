
import "./App.css";

import "bootstrap/dist/css/bootstrap.min.css";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Navb from "./Navbar/Navbar"
import Signin from "./pages/Sign-page/Signin";
import Signup from "./pages/Sign-page/Signup";
import Admin from "./pages/Admin-page/Admin"
import Landing from "./pages/Landing";
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" exact element={<Landing />} />
          <Route path="/signup" exact element={<Signup />} />
          <Route path="/signin" exact element={<Signin />} />
          <Route path="/admin" exact element={<Admin />} />
        </Routes>
      </Router>

    </>
  );
}

export default App;
