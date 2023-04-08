import React from "react";
import { useState, useEffect, useContext } from "react";
import "./Profile.css"
import CompanyProfile from "../../Components/Company-components/Profile-component/Company-profile";
import Context from "../../ContextApi/Context";
function Profile() {
    const ctx = useContext(Context);

    return <>
        {
            ctx.user.userType === "company" ?
                <CompanyProfile />
                : <></>
        }

    </>
}

export default Profile;