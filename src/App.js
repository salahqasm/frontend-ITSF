
import "./App.css";

import "bootstrap/dist/css/bootstrap.min.css";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Navb from "./Navbar/Navbar"
import Signin from "./Sign-page/Signin";
import Signup from "./Sign-page/Signup"
function App() {
  return (
    <>
        <Router>
          <Routes>
            <Route path="/" exact element={<Navb/>}/>
            <Route path="/signup" exact element={<Signup/>}/>
            <Route path="/signin" exact element={<Signin/>}/>
          </Routes>
        </Router>  
      
    </>
  );
}

export default App;
