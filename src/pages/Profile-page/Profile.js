import React from "react";
import { useState, useEffect, useContext } from "react";
import "./Profile.css"
import CompanyProfile from "../../Components/Company-components/Profile-component/Company-profile";
import Context from "../../ContextApi/Context";
import StudentProfile from "../../Components/Student-components/Profile-component/StudentProfile";
import DoctorProfile from "../../Components/Doctor-components/Profile-component/DoctorProfile";
function Profile() {
    const ctx = useContext(Context);

    return <>
        {
            ctx.user.userType === "company" ?
                <CompanyProfile />
                : ctx.user.userType === "student" ?
                    <StudentProfile />
                    : ctx.user.userType === "doctor" ?
                        <DoctorProfile />
                        : <></>
        }
        <br />
        <br />
    </>
}

export default Profile;