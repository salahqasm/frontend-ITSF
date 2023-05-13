import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./CompanySignup.css";
import { useCookies } from "react-cookie";
import axios from "axios";

function CompanySignup({ config }) {
    let [stage, setStage] = useState(1);
    const [cookie, setCookie] = useCookies();
    const navigate = useNavigate();
    const [info, setInfo] = useState({});

    // image process **************************************************************** IMAGE ******************
    const [base64code, setbase64code] = useState();
    const onChange = e => {
        const files = e.target.files;
        const file = files[0];
        getBase64(file);
    };
    const onLoad = fileString => {

        setbase64code(fileString);
        setInfo(prevState => ({
            ...prevState,
            ["profilePicture"]: fileString
        }));

    };
    const getBase64 = file => {
        let reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => {
            onLoad(reader.result);
        };
    };

    function handleChange(e) {
        const { name, value } = e.target;
        setInfo(prevState => ({
            ...prevState,
            [name]: value
        }));
    }

    async function companySignup(e) {
        e.preventDefault();

        if (stage === 1) {
            if (info.password != info.repassword) {
                window.alert("Password Should be identical");
            } else {
                setStage(stage + 1);
            }
        } else if (stage === 2) {
            setStage(stage + 1);
        } else if (stage === 3) {

            try {
                const res = await axios.post('http://localhost:3001/companysignup', info)
                setCookie("token", res.data.token, { path: '/' });
                setCookie("user", res.data, { path: '/' });
                navigate('/');
            } catch (err) {
                console.log(err);
                window.alert("Email already exists please try another email")
            }
        }

    }

    return <>
        <h5>Company Signup</h5>
        {stage === 1 && <>
            <form className="signup-student" onSubmit={(e) => { companySignup(e) }}>
                <label>Email:</label>
                <input type="email" id="email" name="email" placeholder="Enter Your E-mail" value={info.email} onChange={e => handleChange(e)} required />
                <label>Password:</label>
                <input id="pswrd2" name="password" type="password" placeholder="Creat Password" value={info.password} onChange={e => handleChange(e)} required />
                <label>Re-enter password:</label>
                <input id="pswrd" name="repassword" type="password" placeholder="Re-Enter Password" value={info.repassword} onChange={e => handleChange(e)} required />
                <br />
                <input type="submit" className="signup-submit-button" value="Next" />
            </form>
        </>}
        {stage === 2 && <>
            <form className="signup-student" onSubmit={(e) => { companySignup(e) }}>
                <label>Organization Name:</label>
                <input type="text" id="name" name="name" placeholder="Full Name" value={info.name} onChange={e => handleChange(e)} required />
                <label>Specialization:</label>
                <input type="text" id="name" name="specialization" placeholder="Specialization" value={info.specialization} onChange={e => handleChange(e)} required />
                <label>Phone Number:</label>
                <input type="text" name="phoneNum" placeholder="07--------" value={info.phoneNum} onChange={e => handleChange(e)} required />
                <label>Bio:</label>
                <textarea name="about" placeholder="A brief about yourself (optional)"
                    style={{ resize: "none", borderRadius: "15px", padding: "0.5rem" }} rows={4} value={info.about} onChange={e => handleChange(e)}>

                </textarea>
                <button type="button" className="signup-submit-button" onClick={() => setStage(stage - 1)} >Back</button>
                <input type="submit" className="signup-submit-button" value="Next" />
            </form>
        </>}
        {stage === 3 && <>
            <form className="signup-student" onSubmit={(e) => { companySignup(e) }}>

                <img src={`data:image;base64${base64code}`} alt="Profile Picture" width={"150px"} />
                <label className="edit-image-label" > Choose Your Image
                    <input className="edit-image" type="file" name="PP" id="PP" accept="image/*" onChange={onChange} />
                </label>
                <label>Website:</label>
                <input type="text" placeholder="Portfolio or previous projects URL" name="purl" value={info.purl} onChange={e => handleChange(e)} />
                <label>Country:</label>
                <input type="text" placeholder="Country" name="country" value={info.country} onChange={e => handleChange(e)} />
                <label>City:</label>
                <input type="text" placeholder="City" name="city" value={info.city} onChange={e => handleChange(e)} />
                <button type="button" className="signup-submit-button" onClick={() => setStage(stage - 1)} >Back</button>
                <input type="submit" className="signup-submit-button" value="Signup" />
            </form>
        </>}
        <p></p>
    </>
}
export default CompanySignup;