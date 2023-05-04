import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Select from 'react-select'
import makeAnimated from 'react-select/animated';
import "./StudentSignup.css";
import { useCookies } from "react-cookie";
import axios from "axios";

function StudentSignup({ config }) {
    let [stage, setStage] = useState(1);
    const [cookie, setCookie] = useCookies();
    const animatedComponents = makeAnimated();
    const navigate = useNavigate();
    const [selectedOption, setSelectedOption] = useState([]);
    const [options, setOptions] = useState([]);
    const [info, setInfo] = useState({});
    function handleChange(e) {
        const { name, value } = e.target;
        setInfo(prevState => ({
            ...prevState,
            [name]: value
        }));
    }
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
    function handleSkills() {
        setInfo(prevState => ({
            ...prevState,
            ["skillsID"]: JSON.stringify(selectedOption.map((elem) => {
                return elem.id
            }))
        }));
    }
    async function studentSignup(e) {
        e.preventDefault();

        try {
            if (info.password === info.repassword) {

                console.log(info);

                // const res = await axios.post('http://localhost:3001/studentsignup', info)
                // console.log(res);
                // setCookie("token", res.data.token, { path: '/' });
                // setCookie("user", res.data, { path: '/' });
                // navigate('/ ');
            }

        } catch (err) {
            console.log(err);
            window.alert("Email already exists please try another email")
        }
    }
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

    return <>
        <h5>Student Signup</h5>
        <form className="signup-student" onSubmit={(e) => { studentSignup(e) }}>
            {stage === 1 && <>
                <label>Email:</label>
                <input type="email" id="email" name="email" placeholder="Enter Your E-mail" value={info.email} onChange={e => handleChange(e)} required />
                <label>Password:</label>
                <input id="pswrd2" name="password" type="password" placeholder="Creat Password" value={info.password} onChange={e => handleChange(e)} required />
                <label>Re-enter password:</label>
                <input id="pswrd" name="repassword" type="password" placeholder="Re-Enter Password" value={info.repassword} onChange={e => handleChange(e)} required />
                <button type="button" className="signup-submit-button" onClick={() => setStage(stage + 1)} >Next</button>
            </>}
            {stage === 2 && <>
                <label>Full Name:</label>
                <input type="text" id="name" name="name" placeholder="Full Name" value={info.name} onChange={e => handleChange(e)} required />
                <label>Phone Number:</label>
                <input type="text" name="phoneNum" placeholder="07--------" value={info.phoneNum} onChange={e => handleChange(e)} required />
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
                <button type="button" className="signup-submit-button" onClick={() => setStage(stage - 1)} >Back</button>

                <button type="button" className="signup-submit-button" onClick={() => { setStage(stage + 1); handleSkills() }} >Next</button>
            </>}
            {stage === 3 && <>
                <label>Portfolio:</label>
                <input type="text" placeholder="Portfolio or previous projects URL" name="purl" value={info.purl} onChange={e => handleChange(e)} />
                <label>Linkedin:</label>
                <input type="text" placeholder="Linkedin Account URL" name="linkedin" value={info.linkedin} onChange={e => handleChange(e)} />
                <label>Github:</label>
                <input type="text" placeholder="Github Account URL" name="github" value={info.github} onChange={e => handleChange(e)} />
                <button type="button" className="signup-submit-button" onClick={() => setStage(stage - 1)} >Back</button>
                <button className="signup-submit-button" type="submit" value="Sign Up" >Signup</button>
            </>}
            <p></p>
        </form>
    </>
}
export default StudentSignup;