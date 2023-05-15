import React from "react"
import { useState } from "react";
import "./Admin.css";
import Snav from "./SideNav-Component/Snav.js";
import Companies from "./Companies-Component/Comapnies-table-component/Comapies.js";
import Doctors from "./Doctors-Component/Doctors-table-component/Doctors.js";
import Students from "./Student-Component/Student-table-component/Students.js";
import Feedback from "./Feedback-component/Feedback-table";
import { Outlet } from "react-router-dom";
import Tasks from "./Tasks-component/Tasks";
function Admin() {
    const [page, setPage] = useState("Admin Dashboard");
    const path = window.location.pathname;
    return <>

        {
            path != '/' ? <Outlet />
                :
                <div className="admin-main">
                    <div className="admin-left">
                        <Snav changePage={setPage} />
                    </div>
                    <div className="admin-right">
                        <h1 id="adminRightHeader">{page}</h1>
                        {
                            page === "Companies" ? <><Companies /></> :
                                page === "Doctors" ? <><Doctors /></> :
                                    page === "Students" ? <Students /> :
                                        page === "Feedback" ? <Feedback /> :
                                            page==="Tasks"? <Tasks/>:<h1>Welcome to dashboard</h1>
                        }
                    </div>
                </div>
        }
    </>
}


export default Admin;