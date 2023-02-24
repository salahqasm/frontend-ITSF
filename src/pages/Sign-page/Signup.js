import React from "react";
import { useState } from "react";
import Pic from "../../imgs/prog-bkg.jpg"
import "./Signup.css"
function Signupx() {
    const [user, setUser] = useState();
    function firstForm(e) {
        e.preventDefault();

        if (e.target.name === "student") {
            setUser("student")
        } else if (e.target.name === "company") {
            setUser("company")
        }
    }
    return <>
        <div className="Signup-main" style={{backgroundImage:`url(${Pic})`,backgroundRepeat:"no-repeat",backgroundSize:"cover"}}>
            <h1 id="header">ITS Freelance Signup</h1>
            <div className="Signup-form-container">

                {user == null ? <>
                    <h6>Sign up as:</h6>

                    <input className="signup-first-form" type={"button"} onClick={(e) => { firstForm(e) }} name="student" value="Student" />
                    <input className="signup-first-form" type={"button"} onClick={(e) => { firstForm(e) }} name="company" value="Company" />

                </> :
                    user === "student" ? <>
                        <h5>Student Signup</h5>
                        <form className="signup-student">
                            <input type="text" id="fname" name="fname" placeholder="First Name" required />
                            <input type="text" id="sname" name="sname" placeholder="Second Name" required />
                            <input type="text" id="lname" name="lname" placeholder="Last Name" required /><br></br>
                            <input type="text" id="skill" name="skill" placeholder="Skill" required />
                            <br></br>
                            <input type="email" id="email" name="email" placeholder="Enter Your E-mail" required />
                            <input id="pswrd2" name="password" type="password" placeholder="Creat Password" required />
                            <input id="pswrd" name="repassword" type="password" placeholder="Re-Enter Password" required />
                            <br></br>
                            <button className="signup-submit-button"type="submit" value="Sign Up" >Signup</button>
                        </form>
                    </> : <>
                    <h5>Company Signup</h5>
                        <form className="signup-student">
                            <input type="text" id="name" name="name" placeholder="Company Name" required />
                            <input type="email" id="email" name="email" placeholder="Enter Your E-mail" required />
                            <input type="text" id="specialization" name="specialization" placeholder="Specialization" required /><br></br>
                            <input type="text" id="country" name="country" placeholder="Country" required />
                            <input type="text" id="city" name="city" placeholder="City" required />
                            <br></br>
                            <input id="pswrd2" name="password" type="password" placeholder="Creat Password" required />
                            <input id="pswrd" name="repassword" type="password" placeholder="Re-Enter Password" required />
                            <br></br>
                            <button className="signup-submit-button"type="submit" value="Sign Up" >Signup</button>
                        </form>
                    </>}
                {/* <button>Student</button>
            <button>Company</button> */}
                {/* <form onSubmit={(e) => { submitHandler(e) }}>
                    <h1>ITS Freelance</h1>
                    <label>
                        <input type="email" placeholder="Email" name="email" />
                    </label>
                    <label>
                        <input type="password" placeholder="Password" name="password" />
                    </label>
                    <a href="#">Forgot your password?</a>
                    <button type="submit">Login</button>
                    <p>Dont have an account yet?! <a className="Login-form-signup" href="/signup">Sign up</a>.</p>
                </form> */}
            </div>
        </div>
    </>
}

export default Signupx;