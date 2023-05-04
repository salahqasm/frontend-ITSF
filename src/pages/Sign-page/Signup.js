import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import Pic from "../../imgs/prog-bkg.jpg"
import "./Signup.css"
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import StudentSignup from "./Student/StudentSignup";
import CompanySignup from "./Company/CompanySignup";
function Signupx() {
    const [user, setUser] = useState();
    const [cookie, setCookie] = useCookies();
    const navigate = useNavigate();

    function firstForm(e) {
        e.preventDefault();

        if (e.target.name === "student") {
            setUser("student")
        } else if (e.target.name === "company") {
            setUser("company")
        }
    }
    
    async function companySignup(e) {
        e.preventDefault();
        try {
            if (e.target.password.value === e.target.repassword.value) {
                let company = {
                    name: e.target.name.value,
                    email: e.target.email.value,
                    password: e.target.password.value,
                    specialization: e.target.specialization.value,
                    country: e.target.country.value,
                    city: e.target.city.value
                }
                const res = await axios.post('http://localhost:3001/companysignup', company)
                setCookie("token", res.data.token, { path: '/' });
                delete res.data.token;
                setCookie("user", res.data, { path: '/' });
                navigate('/profilepicture');
            }

        } catch (err) {
            console.log(err);
            window.alert("Email already exists please try another email")
        }
    }
    return <>
        <div className="Signup-main" style={{ backgroundImage: `url(${Pic})`, backgroundRepeat: "no-repeat", backgroundSize: "cover" }}>
            <h1 id="header">ITS Freelance Signup</h1>
            <div className="Signup-form-container">

                {user == null ? <>
                    <h6>Sign up as:</h6>

                    <input className="signup-first-form" type={"button"} onClick={(e) => { firstForm(e) }} name="student" value="Student" />
                    <input className="signup-first-form" type={"button"} onClick={(e) => { firstForm(e) }} name="company" value="Company" />

                </> :
                    user === "student" ? <><StudentSignup/>
                    </> : <><CompanySignup/>
                        {/* <h5>Company Signup</h5>
                        <form className="signup-student" onSubmit={(e) => { companySignup(e) }}>
                            <label>Compane Name:</label>
                            <input type="text" id="name" name="name" placeholder="Company Name" required />
                            <label>Email:</label>
                            <input type="email" id="email" name="email" placeholder="Enter Your E-mail" required />
                            <label>Specialization:</label>
                            <input type="text" id="specialization" name="specialization" placeholder="Specialization" required />
                            <label>Country:</label>
                            <input type="text" id="country" name="country" placeholder="Country" required />
                            <label>City:</label>
                            <input type="text" id="city" name="city" placeholder="City" required />
                            <label>Password:</label>
                            <input id="pswrd2" name="password" type="password" placeholder="Creat Password" required />
                            <label>Re-enter password::</label>
                            <input id="pswrd" name="repassword" type="password" placeholder="Re-Enter Password" required />
                            <p></p>
                            <button className="signup-submit-button" type="submit" value="Sign Up" >Signup</button>
                        </form> */}
                    </>}
            </div>
        </div>
    </>
}

export default Signupx;