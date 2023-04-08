import React, { useContext, useState } from "react";
import Popup from 'reactjs-popup';
import ProfilePicture from "../../../Components/Picture-Component/ProfilePicture-component";
import "./Company-profile.css"
import Context from "../../../ContextApi/Context";
import EditProfile from "../Edit-profile-component/EditProfile"
function CompanyProfile() {
    const [open, setOpen] = useState(false);
    const closeModal = () => setOpen(false);
    const ctx = useContext(Context)
    const [user, setUser] = useState(ctx.user);
    return <>
        <div className="comProfile-main">
            <div className="comProfile-header">

                <div>
                    <ProfilePicture id={user.id} data={user.profilePicture} width={130} />
                </div>

                <div className="comProfile-grid2">
                    <h2>{user.name} Company</h2>
                    <h6>{user.country}, {user.city}, {user.phoneNum && user.phoneNum}</h6>
                    {user.purl ? <a href={user.purl} target="_blank">Visit website</a> : <p>Add your website</p>}
                </div>

                <div>
                    <input type="button" className="comProfile-edit" onClick={() => setOpen(o => !o)} value={"Edit Profile"} />
                    <Popup open={open} closeOnDocumentClick onClose={closeModal} closeOnEscape={false}>
                        <div style={{ maxHeight: '90vh', overflowY: 'scroll' }}>
                            <EditProfile close={setOpen} />
                        </div>
                    </Popup>
                </div>

            </div>
            <hr />
            <div className="comProfile-mid">
                <h5>{user.name}, Specialized in: {user.specialization}</h5>
                <p>{user.about}</p>
            </div>
            <hr />
            <div className="comProfile-mid comProfile-info">
                <label>Phone Number: <input type="text" value={user.phoneNum} disabled /></label>
                <label>Country: <input type="text" value={user.country} disabled /></label>
                <label>City: <input type="text" value={user.city} disabled /></label>
            </div>
        </div>


    </>
}

export default CompanyProfile;