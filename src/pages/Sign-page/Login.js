import axios from "axios";
import React from 'react';
import Pic from "../../imgs/prog-bkg.jpg"
import { useNavigate } from "react-router-dom";
import "./Login.css"
function Login() {
    let navigate = useNavigate();
    async function submitHandler(e) {
        e.preventDefault();
        const user = {
          email: e.target.email.value,
          password: e.target.password.value
        }
        try {
          const res=await axios.post("http://localhost:3001/signin", {}, { auth: {
            username: user.email,
            password: user.password
          }})
          console.log(res?.data);
        }catch(err){
          console.log(err)
        }
      }
    
    return <>
        <div className="Login-main" style={{backgroundImage:`url(${Pic})`,backgroundRepeat:"no-repeat",backgroundSize:"cover"}}>
            <div className="form-container sign-in-container">
                <form onSubmit={(e)=>{submitHandler(e)}}>
                    <h1>ITS Freelance</h1>
                    <label>
                        <input type="email" placeholder="Email" name="email"/>
                    </label>
                    <label>
                        <input type="password" placeholder="Password" name="password" />
                    </label>
                    {/* <a href="#">Forgot your password?</a> */}
                    <button type="submit">Login</button>
                    <p>Dont have an account yet?! <a className="Login-form-signup" href="/signup">Sign up</a>.</p>
                </form>
            </div>
        </div>
    </>
}

export default Login;