import React, { useContext, useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import "./ViewStudent.css"
import axios from "axios";
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import star from "../../imgs/star.png"
import { useCookies } from "react-cookie";
import ProfilePicture from "../Picture-Component/ProfilePicture-component";
import Context from "../../ContextApi/Context";
function ViewStudent() {
    let { id } = useParams();
    const [cookie] = useCookies();
    const [user, setUser] = useState();
    const ctx = useContext(Context);
    async function getUser() {
        try {
            const config = {
                headers: {
                    'authorization': `Bearer ${cookie.token}`
                }
            };
            const res = await axios.get(`http://localhost:3001/viewStudent/${id}`, config)
            setUser(res.data);
        } catch (err) {
            console.log(err);
        }
    }
    useEffect(() => {
        getUser();
    }, []);

    async function approve() {
        try {
            const config = {
                headers: {
                    'authorization': `Bearer ${cookie.token}`
                }
            };
            const res = await axios.put('http://localhost:3001/approveStudent', {
                studentId: user.id,
                doctorId: ctx.user.id
            }, config)
            window.location.reload();
        } catch (err) {
            console.log(err);
        }
    }
    return <>
        {user && <>
            <div className="stuProfile-main">

                <div className="stuProfile-header">

                    <div>
                        <ProfilePicture data={user?.profilePicture} width={130} />
                    </div>
                    <div className="stuProfile-grid2">
                        <h2>{user?.name}</h2>
                        <h6> {user.email}{user.phoneNum && ", " + user.phoneNum}</h6>
                        <div>
                            {user?.linkedin && < a style={{ textDecoration: "none" }} target="_blank" href={user?.linkedin}> <FaLinkedin size={25} /> Linkedin</a>}
                            &nbsp;
                            &nbsp;
                            &nbsp;
                            {user?.github && <a style={{ textDecoration: "none" }} target="_blank" href={user?.github}><FaGithub size={25} /> Github</a>}
                        </div>
                    </div>

                    {!user?.doctor && <div>
                        <input type="button" onClick={approve} className="ApproveButton" value={"Approve Account"} />

                    </div>}
                </div>
                <hr />
                <div className="stuProfile-mid">
                    <h5>About {user.name}:</h5>
                    {user.about && <p style={{ whiteSpace: "pre-wrap" }}>{user.about}</p>}
                </div>
                <hr />
                <div className="stuProfile-mid">
                    <span><strong>Skills: </strong></span>
                    {user?.skills?.map((elem) => {
                        return <span className="stuProfile-skill">{elem.name}</span>
                    })}
                </div>
                <hr />
                {user?.doctor?.name && <div className="stuProfile-mid">

                    <img style={{ display: "inline" }} src={star} width={"30px"} />
                    <span><strong> Approved by: Dr.{user?.doctor?.name} </strong></span>
                </div>}
                <br></br>
            </div >
            <br />

        </>}

    </>
}

export default ViewStudent;