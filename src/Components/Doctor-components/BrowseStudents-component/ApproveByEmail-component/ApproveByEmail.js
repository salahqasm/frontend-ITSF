import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import defaultProfile from "../../../../imgs/profileImg.png";
import "./ApproveByEmail.css"
import Context from "../../../../ContextApi/Context";
function ApproveByEmail() {
    const [user, setUser] = useState();
    const [cookie] = useCookies();
    const [email, setEmail] = useState();
    const [msg, setMsg] = useState("");
    const ctx = useContext(Context);
    async function getUser() {
        try {
            const config = {
                headers: {
                    'authorization': `Bearer ${cookie.token}`
                }
            };
            const res = await axios.post(`http://localhost:3001/studentbyemail/`, {
                email: email
            }, config)
            setUser(res.data);
            if (user.name) {
                setMsg("success");
            } else {
                setMsg("Failed");
            }

        } catch (err) {

            console.log(err);

        }
    }
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
    return <div className="approveByEmail-main">
        {user && msg === "success" &&
            <div className="approvebyemail-found">
                <img src={user.profilePicture ? `data:image;base64${user.profilePicture}` : defaultProfile} alt="Profile Picture" width={"150px"} />
                <h4>{user?.name}</h4>
                <h6>{user?.email}</h6>
                {user.skills.map((elem) =>
                    <span className="stuProfile-skill">{elem.name}</span>
                )}<br /><br />
                {!user?.doctor && <input type="button" onClick={approve} className="ApproveByEmail" value={"Approve Student"} />}
                {user.doctor && <><br /><p><i><strong>Student is Already <span style={{color:"#00aa00"}}> Approved.</span></strong></i></p></>}
            </div>
        }

        {(msg === "" || msg === "Failed") &&
            <div style={{ width: "100%" ,textAlign:"center"}}>
                <label>Email: </label>&nbsp;
                <input className="searchByEmail" type="email" onChange={(e) => setEmail(e.target.value)} />
                <br />
                <input type="button" onClick={getUser} className="ApproveByEmail" value="Check Student" />
            </div>
        }
        {msg === "Failed" && <p>User is Not Found... Try Another Email!</p>}
    </div>
}

export default ApproveByEmail;