import React, { useContext, useState } from "react";
import Context from "../../../ContextApi/Context";
import Popup from 'reactjs-popup';
import ProfilePicture from "../../../Components/Picture-Component/ProfilePicture-component";
import "./StudentProfile.css"
// name
// email
// password
// approvedby
// purl
// linkedin
// github
// about
// phoneNum
// credit
// profilePicture
// role
function StudentProfile() {
    const [open, setOpen] = useState(false);
    const closeModal = () => setOpen(false);
    const ctx = useContext(Context)
    const [user, setUser] = useState(ctx.user);
    return <>
        <div className="stuProfile-main">
            <div className="stuProfile-header">

                <div>
                    <ProfilePicture id={user.id} data={user.profilePicture} width={130} />
                </div>

                <div className="stuProfile-grid2">
                    <h2>{user.name}</h2>
                    <h6> {user.email}{user.phoneNum && ", " + user.phoneNum}</h6>
                    {user.skills.map((elem) => {
                        return <span className="stuProfile-skill">{elem.name}</span>
                    })}
                </div>

                <div>
                    <input type="button" className="stuProfile-edit" onClick={() => setOpen(o => !o)} value={"Edit Profile"} />
                    <Popup open={open} closeOnDocumentClick onClose={closeModal} closeOnEscape={false}>
                        <div style={{ maxHeight: '90vh', overflowY: 'scroll' }}>
                            {/* <EditProfile close={setOpen} /> */}
                        </div>
                    </Popup>
                </div>

            </div>
            <hr />
            <div className="stuProfile-mid">
                <h5>About {user.name}:</h5>
                <p>{user.about}</p>
                {user.purl && <p>Check Out my work: <a target="_blank" href={user.purl}>View page</a></p>}
            </div>
            <hr />
            <div className="stuProfile-mid stuProfile-info">
                <h5>Social Accounts:</h5>
                {user.github && <a target="_blank" href={user.github}>Github</a>}
                {user.linkedin && <a target="_blank" href={user.linkedin}>Linkedin</a>}
            </div>
            <hr />
            <div className="stuProfile-mid stuProfile-info">
                <h5>Approved by::</h5>
                <h3>Dr.{user.approvedby}</h3>
            </div>
        </div>


    </>
}

export default StudentProfile;