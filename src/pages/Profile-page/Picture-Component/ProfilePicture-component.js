import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import { useCookies } from "react-cookie";
import Pic from "../../../imgs/profileImg.png"
import "./ProfilePicture-component.css"

function ProfilePicture({id,userType}) {
    const [img, setImg] = useState(null);
    const [cookie] = useCookies();
    const config = {
        headers: {
            'authorization': `Bearer ${cookie.token}`
        }
    };
    async function getProfilePicture() {
        const image = await axios.post(`http://localhost:3001/profilepicture/${id}`, { userType:userType }, config)
        if (image) {
            setImg(image.data.profilePicture);
        }
    }
    useEffect(() => {
        getProfilePicture();
    }, [])
    return <>
        <img className="profilePictureStyle" src={img ? `data:image;base64${img}` : `${Pic}`} />
    </>
}

export default ProfilePicture;