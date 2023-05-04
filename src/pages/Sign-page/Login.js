import axios from "axios";
import React from 'react';
import { useCookies } from 'react-cookie';
import Pic from "../../imgs/prog-bkg.jpg"
import { useNavigate } from "react-router-dom";
import "./Login.css"
function Login() {
  let navigate = useNavigate();
  const [cookies, setCookie, removeCookie] = useCookies();
  async function submitHandler(e) {
    e.preventDefault();
    const user = {
      email: e.target.email.value,
      password: e.target.password.value
    }
    try {
      const res = await axios.post("http://localhost:3001/signin", {}, {
        auth: {
          username: user.email,
          password: user.password
        }
      })
      console.log(res.data);
      if (res.data == "user not found!") {
        window.alert("Email is not registered")
      } else if (res.data == "Wrong Password") {
        window.alert("Wrong Password")
      } else {
        console.log("Success");
        delete res.data.profilePicture; //cannot store it in cookies LARGE AMOUNT OF DATA
        setCookie("token", res.data.token, { path: '/' });
        delete res.data.token;
        setCookie("user", res.data, { path: '/' });
      }
      if (res.data.role === "admin" && cookies) { //should be developed .............................................
        navigate('/admin')
      } else if ((res.data.userType === "student" || res.data.userType === "company") && cookies) {
        navigate('/')

      } else if (res.data.userType === "doctor" && cookies) {
        navigate('/')
      }

    } catch (err) {
      console.log(err)
    }
  }

  return <>
    <div className="Login-main" style={{ backgroundImage:`url(${Pic})` ,backgroundRepeat: "no-repeat", backgroundSize: "cover" }}>
      <div className="form-container sign-in-container">
        <form onSubmit={(e) => { submitHandler(e) }}>
          <h1>ITS Freelance</h1>
          <div className="login-grid2">

            <label>Email:</label>
              <input type="email" placeholder="Email" name="email" />
            <label>
              Password:
            </label>
              <input type="password" placeholder="Password" name="password" />
            {/* <a href="#">Forgot your password?</a> */}
          </div>
          <button type="submit">Login</button>
          <p>Dont have an account yet?! <a className="Login-form-signup" href="/signup">Sign up</a>.</p>
        </form>
      </div>
    </div>
  </>
}

export default Login;