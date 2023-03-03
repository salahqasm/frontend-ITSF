import React from "react"
import { useState } from "react";
import "./Admin.css";
import Snav from "./SideNav-Component/Snav.js";
import Companies from "./Companies-Component/Comapnies-table-component/Comapies.js";
import Doctors from "./Doctors-Component/Doctors-table-component/Doctors.js";
import Students from "./Student-Component/Student-table-component/Students.js";
import AddDoctor from "./Doctors-Component/AddDoctor-coponent/AddDoctor";
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
                page==="Companies"?<><Companies/></>:
                page==="Doctors"?<><Doctors/></>:
                page==="Students"?<Students/>:<h1>Welcome to Admin Dashboard</h1>
                }
            </div>
        </div>
    </>
}


export default Admin;