import React from "react";
import { useState, useEffect } from "react";
import ProfilePicture from "./Picture-Component/ProfilePicture-component";
import PersonalInfo from "./Personal-information-component/PersonalInfo";
import { useCookies } from "react-cookie";
import "./Profile.css"
function Profile() {
    const [img,setImg]=useState(null);
    const [cookie] = useCookies();
    return <div className="profile-main">
        <div className="profile-header">
            <ProfilePicture id={cookie.user.id} userType={cookie.user.userType}/>
            <PersonalInfo/>
        </div>
    </div>
}

export default Profile;