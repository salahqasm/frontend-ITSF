import React from "react";
import { useState, useEffect } from "react";
import { useCookies } from "react-cookie";
import "./Profile.css"
import CompanyProfile from "../../Components/Company-components/Profile-component/Company-profile";
function Profile({ user, changeUser }) {
    const [cookie] = useCookies();

    return <>
        {
            user.userType === "company" ?
                <CompanyProfile user={user} changeUser={changeUser} />
                : <></>
        }

    </>
}

export default Profile;