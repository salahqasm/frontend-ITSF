import React from "react";
import { useState, useEffect } from "react";
import ProfilePicture from "./Picture-Component/ProfilePicture-component";
import PersonalInfo from "./Personal-information-component/PersonalInfo";
import Approvedby from "./Approvedby-component/Approvedby"
import { useCookies } from "react-cookie";
import "./Profile.css"
function Profile() {
    const [img, setImg] = useState(null);
    const [cookie] = useCookies();
    let approvedbyid = cookie.user.approvedby;
    let userType = cookie.user.userType;
    return <>
        <div className="profile-main">
            {userType === "student" ?
                <div className="profile-header">
                    <div className="profile-box">
                        <ProfilePicture id={cookie.user.id} userType={cookie.user.userType} width={"200px"} />
                        <h3>{cookie.user.name}</h3>
                        {cookie.user.github === null && cookie.user.linkedin === null && <p>Edit your profile to add your social accounts</p>}
                    </div>
                    <div className="profile-box">
                        <PersonalInfo />
                        {approvedbyid && <Approvedby id={approvedbyid} />}
                        <div style={{ textAlign: "left" }}>

                        </div>
                    </div>
                </div>
                : userType === "company" ?
                    <div className="profile-header">
                        <div className="profile-box">
                            <ProfilePicture id={cookie.user.id} userType={cookie.user.userType} width={"200px"} />
                            <h3>{cookie.user.name}</h3>
                            {/* {cookie.user.github === null && cookie.user.linkedin === null && <p>Edit your profile to add your social accounts</p>} */}
                        </div>
                        <div className="profile-box">
                            <form>
                                <div className="grid2col">
                                    <label htmlFor="email">Email: </label>
                                    <input name="email" type={"text"} value={cookie.user.email} disabled />
                                    <label htmlFor="Specialization">Specialization: </label>
                                    <input type={"text"} name="Specialization" value={cookie.user.specialization} disabled />
                                    <label htmlFor="country">Country: </label>
                                    <input type={"text"} name="country" value={cookie.user.country} disabled />
                                    <label htmlFor="city">City: </label>
                                    <input type={"text"} name="city" value={cookie.user.city} disabled />
                                </div>
                            </form>
                        </div>
                    </div> : <></>

            }
        </div>

    </>
}

export default Profile;