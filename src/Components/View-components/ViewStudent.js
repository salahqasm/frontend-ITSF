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
            console.log(res.data);
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
            {
                ctx?.user.userType === 'doctor' && user?.role === 'active' &&
                <div className="stuProfile-main" >
                    <br />
                    <h3 style={{ textAlign: "center" }}>Assigned Tasks</h3>
                    <hr />
                    {user?.tasks.length == 0 && <p style={{ textAlign: "center" }}><i><strong>No Assigned Tasks</strong></i></p>}
                    {user?.tasks.map((elem) => {
                        if (elem.status === 'inprocess')
                            return <div className="SBtask-task-main" style={{ backgroundColor: "#f5f5f5" }}>
                                <div className="SBtask-task" >
                                    <h2>{elem?.title}</h2>
                                    <span><span><strong>Budget: </strong>{elem?.credit} JD </span> - <span><strong>Due Date:</strong> {elem?.date}</span> </span>
                                    <p style={{ whiteSpace: "pre-wrap" }}>
                                        <strong>Description:</strong>
                                        <br />{elem?.description}
                                    </p>
                                    <div className="Mtask-required-skills">
                                        <strong>Required Skills: </strong>
                                        {elem?.skills?.map(elem =>
                                            <span>{elem.name}</span>
                                        )}
                                    </div>
                                    <br />
                                    <span><strong>Submission: </strong></span><span>{elem.submission}</span>
                                </div>
                            </div>
                    })}
                </div>
            }
            <br />
        </>}

    </>
}

export default ViewStudent;