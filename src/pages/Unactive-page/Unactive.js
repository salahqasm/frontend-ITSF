import React, { useContext, useState } from "react";
import Context from "../../ContextApi/Context";
import { useCookies } from "react-cookie";
import { useNavigate } from 'react-router-dom';
import ProfilePicture from "../../Components/Picture-Component/ProfilePicture-component";
function Unactive() {
    const ctx = useContext(Context);
    const [cookie, setCookie, removeCookie] = useCookies();
    const now = new Date();
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const dateString = now.toLocaleDateString('en-US', options).replaceAll(',', '');
    const [month, day, year] = dateString.split(' ');

    function logoutHandler() {
        removeCookie('user', null);
        removeCookie("token", null);
        navigate("/")
    }
    const navigate = useNavigate();
    return <>
        <div className="SBrief-main">
            <div className="SBrief-left">
                <ProfilePicture data={ctx?.user?.profilePicture} width={140} />
                <div className="SBrief-inside">
                    <h4>{now.getHours() >= 12 ? "Good Evening" : "Good Morning"} {ctx?.user?.name?.split(" ")[0]}</h4>
                    <p>Today's Date is :  {day + " - " + month + " - " + year}</p>
                </div>
            </div>
        </div>
        <br />
        <div style={{ textAlign: "center" }}>
            <h1>Your Account is Not <span style={{ color: "#dd1111" }}>Activated</span>.</h1>
            {ctx?.user?.userType === 'student' ? <p>
                Contact with your doctor to active your account.
            </p> :
                <p>
                    Contact with KASIT deanship to active your account.
                </p>}
            <input className="signup-submit-button" style={{width:"200px"}} type="button" onClick={logoutHandler} value="Logout" />

        </div>
    </>
}

export default Unactive;