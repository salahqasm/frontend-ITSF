import axios from "axios";
import React, { useState } from "react";
import { useCookies } from "react-cookie";

import "./PP.css";
function PP() {
    let [base64code, setbase64code] = useState();
    let [cookie] = useCookies();
    
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
    async function submitHandler(e) {
        e.preventDefault();
        const { userType, id } = cookie.user;
        const config = {
            headers: {
                'authorization': `Bearer ${cookie.token}`
            }
        };
        const data = {
            id: id,
            userType: userType,
            profilePicture: base64code
        }
        const res = await axios.post("http://localhost:3001/profilepicture", data, config)
        console.log(res);

    }
    return <div className="PP-main">
        <h1 className="PP-header">ITS Freelance</h1>
        <div className="PP-container">
            <h5>Profile picture</h5>
            <p>Note: Please try to be the ratio of the image 1:1.</p>
            <form onSubmit={(e) => { submitHandler(e) }}>
                {base64code == null ? <><div className="altImgbef"></div></> : <></>}
                {base64code && <div><img src={`data:image;base64${base64code}`} width="50%" /></div>}
                <br></br>
                <label className="PP-submitlabel" htmlFor="PP">Choose your image
                    <input className="PP-botton" type="file" name="PP" id="PP" accept="image/*" onChange={onChange} />
                </label>
                {base64code && <button className="PP-submitlabel" type="submit">Submit  </button>}
            </form>
        </div>
    </div>
}

export default PP;