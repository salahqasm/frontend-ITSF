import React, { useContext, useEffect, useState } from "react";

import "./ViewCompany.css";
import ProfilePicture from "../Picture-Component/ProfilePicture-component";
import Context from "../../ContextApi/Context";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useCookies } from "react-cookie";

function ViewCompany() {
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
            const res = await axios.get(`http://localhost:3001/company/${id}`, config)
            setUser(res.data);
            console.log(res.data);
        } catch (err) {
            console.log(err);
        }
    }
    useEffect(() => {
        getUser();
    }, []);
    async function active() {
        const config = {
            headers: {
                'authorization': `Bearer ${cookie.token}`
            }
        };
        try {
            const res = await axios.put(`http://localhost:3001/activeCompany/${user?.id}`, {}, config);
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
                        <h6>{user?.country}, {user?.city}</h6>
                        <div>
                            {user?.purl && <a href={user.purl} target="_blank">Visit Website</a>}
                        </div>
                    </div>

                    {cookie.user.userType === 'admin' && user?.role === 'unactive' && < div >
                        <input type="button" className="ApproveButton" onClick={active} value={"Active Account"} />
                    </div>}
                </div>
                <hr />
                <div className="stuProfile-mid">
                    <h5>About {user.name}:</h5>
                    {user.about && <p style={{ whiteSpace: "pre-wrap" }}>{user.about}</p>}
                </div>
                <hr />
                <div className="stuProfile-mid">
                    <span><strong>Specialization: </strong></span>
                    <span>{user?.specialization}</span>
                </div>
                <hr />
                <div className="DoctorProfile-mid grid2">
                    <h6>Email: {user?.email}</h6>
                    <h6>{user?.phoneNum && "Phone Number: " + user?.phoneNum}</h6>
                </div>
            </div >
            {
                ctx?.user.userType === 'doctor' && user?.role === 'active' &&
                <div className="stuProfile-main" >
                    <br />
                    <h3 style={{ textAlign: "center" }}>Available Published Tasks</h3>
                    <hr />
                    {user?.tasks.length == 0 && <p style={{ textAlign: "center" }}><i><strong>No Available Published Tasks</strong></i></p>}
                    {user?.tasks.map((elem) => {
                        if (elem.status === 'available')
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
                                </div>
                                {/* <hr /> */}
                            </div>
                    })}
                </div>
            }
        </>
        }
        <br />
    </>
}

export default ViewCompany;