import React from "react"
import { useState } from "react";
import "./Admin.css";
import Snav from "./Snav";
import Companies from "./Companies-Component/Comapies";
function Admin() {
    const [page, setPage] = useState("Admin Dashboard");
    
    return <>
        <div className="admin-main">
            <div className="admin-left">
                <Snav changePage={setPage} />
            </div>
            <div className="admin-right">
                <h1 id="adminRightHeader">{page}</h1>
                <Companies/>
            </div>
        </div>
    </>
}


export default Admin;