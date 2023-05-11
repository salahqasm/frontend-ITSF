import React, { useContext, useState } from "react";
import { useCookies } from 'react-cookie';
import Context from "../../../ContextApi/Context";
import "./EditProfile.css"
import axios from "axios";
function EditProfile({ close }) {
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
    // const {name,phoneNum,specialization,country,city,purl,about,picture}=req.body;
    const config = {
        headers: {
            'authorization': `Bearer ${cookie.token}`
        }
    };
    async function submitHandler(e) {
        e.preventDefault();

        try {
            const req = {
                name: user.name,
                phoneNum: user.phoneNum,
                specialization: user.specialization,
                country: user.country,
                city: user.city,
                purl: user.purl,
                about: user.about,
                picture: base64code
            };
            let res = await axios.put(`http://localhost:3001/company/${user.id}`, req, config)
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
            <div className="grid4">
                <label htmlFor="name">Name: </label>
                <input type="text" id="name" name="name" value={user.name} onChange={e => handleChange(e)} />

                <label htmlFor="phoneNum">Phone Number: </label>
                <input type="text" id="phoneNum" name="phoneNum" value={user.phoneNum} placeholder="07*********" onChange={e => handleChange(e)} />

                <label htmlFor="specialization">Specialization: </label>
                <input type="text" id="specialization" name="specialization" value={user.specialization} onChange={e => handleChange(e)} />

                <label htmlFor="country">Country: </label>
                <input type="text" id="country" name="country" value={user.country} onChange={e => handleChange(e)} />

                <label htmlFor="city">City: </label>
                <input type="text" id="city" name="city" value={user.city} onChange={e => handleChange(e)} />

                <label htmlFor="purl">Website: </label>
                <input type="text" id="purl" name="purl" value={user.purl} placeholder="https://www.*******.com" onChange={e => handleChange(e)} />


            </div>
            <br />
            <div className="grid1">
                <label htmlFor="about">About: </label>
                <textarea name="about" id="about" rows="6" maxLength={1000} value={user.about} placeholder="Write a brief about your company" onChange={e => handleChange(e)}></textarea>
            </div>
            <div style={{ float: "right" }}>
                <button type="submit" className="editprofile-button">Save Changes</button>
            </div>
        </form>
    </div>
}
export default EditProfile;