import React, { useContext, useEffect, useState } from "react";
import { useCookies } from 'react-cookie';
import Context from "../../../ContextApi/Context";
import "./EditProfile.css"
import axios from "axios";
import Select from 'react-select'
import makeAnimated from 'react-select/animated';

function EditProfile({ close }) {
    const ctx = useContext(Context);
    const [cookie] = useCookies();
    const [user, setUser] = useState(ctx.user);
    const [base64code, setbase64code] = useState(user.profilePicture);
    const [selectedOption, setSelectedOption] = useState([]);
    const [options, setOptions] = useState([]);
    const animatedComponents = makeAnimated();
    const onChange = e => {
        const files = e.target.files;
        const file = files[0];
        getBase64(file);
    };
    const onLoad = fileString => {

        setbase64code(fileString);
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
        setUser(prevState => ({
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
    const customStyles = {
        control: (provided, state) => ({
            ...provided,
            // width: 550,
            borderRadius: 10
        }),
    };
    function handleSelectChange(selectedOption) {
        if (selectedOption.length <= 5) {
            setSelectedOption(selectedOption);
            console.log(selectedOption);
        }
    }
    const config = {
        headers: {
            'authorization': `Bearer ${cookie.token}`
        }
    };
    async function submitHandler(e) {
        e.preventDefault();

        try {
            let skillsID = [];
            selectedOption.map((elem) => {
                skillsID.push(elem.id);
            })
            const req = {
                name: user.name,
                phoneNum: user.phoneNum,
                linkedin: user.linkedin,
                github: user.github,
                purl: user.purl,
                about: user.about,
                picture: base64code,
                skills: skillsID
            };
            let res = await axios.put(`http://localhost:3001/student/${user.id}`, req, config)
            console.log(res);
            close(false);
            window.location.reload()
        } catch (err) {
            console.log(err);
        }
    }
    return <div className="Company-EditProfile">
        <h2 style={{ textAlign: "center" }}>Edit Your Profile</h2>
        <hr />
        <form onSubmit={submitHandler}>
            <div className="grid2">
                <img src={`data:image;base64${base64code}`} alt="Profile Picture" width={"150px"} />
                <label className="edit-image-label" > Choose Your Image
                    <input className="edit-image" type="file" name="PP" id="PP" accept="image/*" onChange={onChange} />
                </label>
            </div>
            <i>Note: Best results will be with 1:1 ratio images.</i>
            <hr />
            {/* //name purl linkedin github about phoneNum credit profilePicture */}
            <div className="grid4">
                <label htmlFor="name">Name: </label>
                <input type="text" id="name" name="name" value={user.name} onChange={e => handleChange(e)} />

                <label htmlFor="phoneNum">Phone Number: </label>
                <input type="text" id="phoneNum" name="phoneNum" value={user.phoneNum} maxLength={10} placeholder="07*********" onChange={e => handleChange(e)} />
            </div>
            <div className="grid1">
                <label>Skills:
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
                </label>
                <label htmlFor="linkedin">Linkedin Account: </label>
                <input type="text" id="linkedin" name="linkedin" value={user.linkedin} onChange={e => handleChange(e)} />

                <label htmlFor="github">Github Account: </label>
                <input type="text" id="github" name="github" value={user.github} onChange={e => handleChange(e)} />

                <label htmlFor="purl">Previous Project: </label>
                <input type="text" id="purl" name="purl" value={user.purl} onChange={e => handleChange(e)} />
            </div>
            <br />
            <div className="grid1">
                <label htmlFor="about">About: </label>
                <textarea name="about" id="about" rows="6" maxLength={1000} value={user.about} placeholder="Write a brief about yourself" onChange={e => handleChange(e)}></textarea>
            </div>
            <div style={{ float: "right" }}>
                <button type="submit" className="editprofile-button">Save Changes</button>
            </div>
        </form>
    </div>
}
export default EditProfile;