import React, { useContext, useState } from "react";
import Context from "../../../ContextApi/Context";
import Popup from 'reactjs-popup';
import ProfilePicture from "../../../Components/Picture-Component/ProfilePicture-component";
import "./DoctorProfile.css"
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import EditDoctor from "../EditProfile-component/EditDoctor";
function DoctorProfile() {
    const [open, setOpen] = useState(false);
    const closeModal = () => setOpen(false);
    const { user } = useContext(Context)
    return <>
        <div className="DoctorProfile-main">
            <div className="DoctorProfile-header">

                <div>
                    <ProfilePicture data={user?.profilePicture} width={130} />
                </div>

                <div className="DoctorProfile-grid2">
                    <h2>{user?.name}</h2>
                    <h6>Specialized in {user?.specialization}</h6>
                    {user?.purl && < a style={{ textDecoration: "none" }} target="_blank" href={user?.purl}> <FaLinkedin size={25} /> Linkedin</a>}

                </div>

                <div>
                    <input type="button" className="DoctorProfile-edit" onClick={() => setOpen(o => !o)} value={"Edit Profile"} />
                    <Popup open={open} closeOnDocumentClick onClose={closeModal} closeOnEscape={false}>
                        <div style={{ maxHeight: '90vh', overflowY: 'scroll' }}>
                            <EditDoctor close={setOpen} />
                        </div>
                    </Popup>
                </div>

            </div>
            <hr />
            <div className="DoctorProfile-mid">
                <h5>About {user?.name}:</h5>
                {user?.about && <p style={{ whiteSpace: "pre-wrap" }}>{user?.about}</p>}
            </div>
            <hr />
            <div className="DoctorProfile-mid grid2">
                <h6>Email: {user?.email}</h6>
                <h6>{user?.phoneNum && "Phone Number: " + user?.phoneNum}</h6>
            </div>
            
        </div >


    </>
}

export default DoctorProfile;