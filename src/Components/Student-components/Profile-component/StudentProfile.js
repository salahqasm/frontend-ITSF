import React, { useContext, useState } from "react";
import Context from "../../../ContextApi/Context";
import Popup from 'reactjs-popup';
import ProfilePicture from "../../../Components/Picture-Component/ProfilePicture-component";
import "./StudentProfile.css"
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import EditProfile from "../Edit-Profile-component/EditProfile";
import star from "../../../imgs/star.png"
import context from "react-bootstrap/esm/AccordionContext";
function StudentProfile() {
    const [open, setOpen] = useState(false);
    const closeModal = () => setOpen(false);
    const { user } = useContext(Context)
    return <>
        <div className="stuProfile-main">
            <div className="stuProfile-header">

                <div>
                    <ProfilePicture data={user?.profilePicture} width={130} />
                </div>

                <div className="stuProfile-grid2">
                    <h2>{user.name}</h2>
                    <h6> {user.email}{user.phoneNum && ", " + user.phoneNum}</h6>
                    <div>
                        {user?.linkedin && < a style={{ textDecoration: "none" }} target="_blank" href={user?.linkedin}> <FaLinkedin size={25} /> Linkedin</a>}
                        &nbsp;
                        &nbsp;
                        &nbsp;
                        {user?.github && <a style={{ textDecoration: "none" }} target="_blank" href={user?.github}><FaGithub size={25} /> Github</a>}
                    </div>
                </div>

                <div>
                    <input type="button" className="stuProfile-edit" onClick={() => setOpen(o => !o)} value={"Edit Profile"} />
                    <Popup open={open} closeOnDocumentClick onClose={closeModal} closeOnEscape={false}>
                        <div style={{ maxHeight: '90vh', overflowY: 'scroll' }}>
                            <EditProfile close={setOpen} />
                        </div>
                    </Popup>
                </div>

            </div>
            <hr />
            <div className="stuProfile-mid">
                <h5>About {user.name}:</h5>
                {user.about && <p style={{ whiteSpace: "pre-wrap" }}>{user.about}</p>}
                {user.purl && <p>Check Out my work: <a target="_blank" href={user.purl}>View page</a></p>}
            </div>
            <hr />
            <div className="stuProfile-mid">
                <span><strong>Skills: </strong></span>
                {user?.skills?.map((elem) => {
                    return <span className="stuProfile-skill">{elem.name}</span>
                })}
            </div>
            <hr />
            <div className="stuProfile-mid">
               <img style={{display:"inline"}} src={star} width={"30px"} />
                <span><strong> Approved by: Dr.{user?.doctor.name} </strong></span>
            </div>
<br></br>
        </div >

        
    </>
}

export default StudentProfile;