import React, { useContext, useEffect, useState } from "react";
import "./ViewDoctor.css";
import ProfilePicture from "../Picture-Component/ProfilePicture-component";
import Context from "../../ContextApi/Context";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useCookies } from "react-cookie";

function ViewDoctor() {
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
            const res = await axios.get(`http://localhost:3001/doctor/${id}`, config)
            setUser(res.data);
            console.log(res.data);
        } catch (err) {
            console.log(err);
        }
    }
    useEffect(() => {
        getUser();
    }, []);

    return <>
        {user && <>
            <div className="stuProfile-main">

                <div className="stuProfile-header">

                    <div>
                        <ProfilePicture data={user?.profilePicture} width={130} />
                    </div>
                    <div className="stuProfile-grid2">
                        <h2>{user?.name}</h2>
                        <div>
                            {user?.purl && <a href={user.purl} target="_blank">Visit Website</a>}
                        </div>
                    </div>
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

        </>}
    </>
}

export default ViewDoctor;