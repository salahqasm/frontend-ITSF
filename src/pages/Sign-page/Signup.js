import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import Pic from "../../imgs/prog-bkg.jpg"
import "./Signup.css"
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import Select from 'react-select'
import makeAnimated from 'react-select/animated';
import StudentSignup from "./Student/StudentSignup";
function Signupx() {
    const [user, setUser] = useState();
    const [cookie, setCookie] = useCookies();
    const [selectedOption, setSelectedOption] = useState([]);
    const [options, setOptions] = useState([]);
    const animatedComponents = makeAnimated();
    const navigate = useNavigate();
    async function getSkills() {
        const res = await axios.get('http://localhost:3001/getskill');
        setOptions([]);
        let temp = [];
        res.data.map((elem) => {
            temp.push({ id: elem.id, value: elem.name, label: elem.name })
        })
        setOptions(temp);
    }
    useEffect(() => {
        getSkills();
    }, []);
    function handleSelectChange(selectedOption) {
        if (selectedOption.length <= 5) {
            setSelectedOption(selectedOption);
            console.log(selectedOption);
        }
    }

    const customStyles = {
        control: (provided, state) => ({
            ...provided,
            width: 350,
            borderRadius: 20
        }),
    };




    function firstForm(e) {
        e.preventDefault();

        if (e.target.name === "student") {
            setUser("student")
        } else if (e.target.name === "company") {
            setUser("company")
        }
    }
    async function studentSignup(e) {
        e.preventDefault();
        try {
            if (e.target.password.value === e.target.repassword.value) {
                let skillsID = [];
                selectedOption.map((elem) => {
                    skillsID.push(elem.id);
                })
                let student = {
                    name: e.target.name.value,
                    email: e.target.email.value,
                    password: e.target.password.value,
                    skillsID: JSON.stringify(skillsID)
                }
                const res = await axios.post('http://localhost:3001/studentsignup', student)
                setCookie("token", res.data.token, { path: '/' });
                setCookie("user", res.data, { path: '/' });
                navigate('/profilepicture');
            }

        } catch (err) {
            console.log(err);
            window.alert("Email already exists please try another email")
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
            // console.log(e.target.fname.value);

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
                        {/* <h5>Student Signup</h5>
                        <form className="signup-student" onSubmit={(e) => { studentSignup(e) }}>

                            <label>Full Name:</label>
                            <input type="text" id="name" name="name" placeholder="Full Name" required />
                            <label>Email:</label>
                            <input type="email" id="email" name="email" placeholder="Enter Your E-mail" required />
                            <label>Password:</label>
                            <input id="pswrd2" name="password" type="password" placeholder="Creat Password" required />
                            <label>Re-enter password:</label>
                            <input id="pswrd" name="repassword" type="password" placeholder="Re-Enter Password" required />
                            <label>Skills:</label>
                            <Select
                                value={selectedOption}
                                onChange={handleSelectChange}
                                closeMenuOnSelect={false}
                                components={animatedComponents}
                                placeholder="Choose your Skills (up to 5 skills)"
                                isMulti
                                options={options}
                                styles={customStyles}
                                maxValueLength={5}
                            />
                            {
                                selectedOption.length >= 5 && <p>you can select up to 5 skills.</p>
                            }
                            <p></p>
                            <button className="signup-submit-button" type="submit" value="Sign Up" >Signup</button>
                        </form> */}
                    </> : <>
                        <h5>Company Signup</h5>
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
                        </form>
                    </>}
            </div>
        </div>
    </>
}

export default Signupx;