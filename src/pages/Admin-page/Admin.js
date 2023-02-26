import React from "react"
import { useState } from "react";
import "./Admin.css";
import Snav from "./SideNav-Component/Snav";
import Companies from "./Companies-Component/Comapies";
import Doctors from "./Doctors-Component/Doctors";
function Admin() {
    const [page, setPage] = useState("Admin Dashboard");
    
    return <>
        <div className="admin-main">
            <div className="admin-left">
                <Snav changePage={setPage} />
            </div>
            <div className="admin-right">
                <h1 id="adminRightHeader">{page}</h1>
                {
                page==="Companies"?<Companies/>:
                page==="Doctors"?<Doctors/>:<h1>Welcome to Admin Dashboard</h1>
                }
            </div>
        </div>
    </>
}


export default Admin;