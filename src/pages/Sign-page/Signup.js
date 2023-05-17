import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import Pic from "../../imgs/prog-bkg.jpg"
import "./Signup.css"
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import StudentSignup from "./Student/StudentSignup";
import CompanySignup from "./Company/CompanySignup";
import bg from "../../imgs/regbg.png"
import Logo from "../../imgs/favicon.png"
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
        <img src={Logo} className="login-logo" />
        <img src={bg} className="login-bg-img" />
        <div className="Signup-main" >
            <div className="Signup-form-container">
                {user == null ? <>
                    <h6>Sign up as:</h6>

                    <input className="signup-first-form" type={"button"} onClick={(e) => { firstForm(e) }} name="student" value="Student" />
                    <input className="signup-first-form" type={"button"} onClick={(e) => { firstForm(e) }} name="company" value="Company" />

                </> :
                    user === "student" ? <><StudentSignup />
                    </> : <><CompanySignup />
                    </>}
            </div>
        </div>
    </>
}

export default Signupx;