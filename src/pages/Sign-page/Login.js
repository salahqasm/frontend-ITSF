import React from "react";
import "./Login.css"
function Login() {
    return <>
        <div className="Login-main">
            <div className="form-container sign-in-container">
                <form action="#">
                    <h1>Sign in</h1>
                    <label>
                        <input type="email" placeholder="Email" />
                    </label>
                    <label>
                        <input type="password" placeholder="Password" />
                    </label>
                    {/* <a href="#">Forgot your password?</a> */}
                    <button type="submit">Sign In</button>
                </form>
            </div>
        </div>
    </>
}

export default Login;