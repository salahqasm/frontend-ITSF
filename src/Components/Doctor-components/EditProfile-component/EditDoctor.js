import React, { useContext, useEffect, useState } from "react";
import { useCookies } from 'react-cookie';
import Context from "../../../ContextApi/Context";
import "./EditDoctor.css"
import axios from "axios";
import Select from 'react-select'
import makeAnimated from 'react-select/animated';
import defaultProfile from "../../../imgs/profileImg.png"
function EditDoctor({ close }) {
    const ctx = useContext(Context);
    const [cookie] = useCookies();
    const [user, setUser] = useState(ctx.user);
    const [base64code, setbase64code] = useState(user.profilePicture);
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
    async function submitHandler(e) {
        e.preventDefault();
        const config = {
            headers: {
                'authorization': `Bearer ${cookie.token}`
            }
        };
        try {
            const req = {
                name: user.name,
                phoneNum: user.phoneNum,
                purl: user.purl,
                github: user.github,
                purl: user.purl,
                about: user.about,
                picture: base64code
            };
            let res = await axios.put(`http://localhost:3001/doctor/${user.id}`, req, config)
            console.log(res);
            close(false);
            ctx.refresh();
        } catch (err) {
            console.log(err);
        }
    }
    return <div className="EditDoctor">
        <h2 style={{ textAlign: "center" }}>Edit Your Profile</h2>
        <hr />
        <form onSubmit={submitHandler}>
            <div className="grid2">
                <img src={base64code ? `data:image;base64${base64code}` : defaultProfile} alt="Profile Picture" width={"150px"} />
                <label className="edit-image-label" > Choose Your Image
                    <input className="edit-image" type="file" name="PP" id="PP" accept="image/*" onChange={onChange} />
                </label>
            </div>
            <i>Note: Best results will be with 1:1 ratio images.</i>
            <hr />
            <div className="grid4">
                <label htmlFor="name">Name: </label>
                <input type="text" id="name" name="name" value={user.name} onChange={e => handleChange(e)} />

                <label htmlFor="phoneNum">Phone Number: </label>
                <input type="text" id="phoneNum" name="phoneNum" value={user.phoneNum} maxLength={10} placeholder="07*********" onChange={e => handleChange(e)} />
            </div>
            <div className="grid1">
                <label htmlFor="linkedin">Linkedin Account: </label>
                <input type="text" id="linkedin" name="purl" value={user.purl} onChange={e => handleChange(e)} />

                <label htmlFor="github">Specialization: </label>
                <input type="text" id="github" name="github" value={user.specialization} onChange={e => handleChange(e)} />
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
export default EditDoctor;