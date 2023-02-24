import React from "react"
import "./Admin.css";
import Snav from "./Snav";
import Pic from "../../imgs/blacklogo.png";
import { useState } from "react";
function Admin() {
    const [page, setPage] = useState("tez");
    console.log(page);
    return <>
        <div className="admin-main">
            <div className="admin-left">
                <Snav changePage={setPage} />
            </div>
            <div className="admin-right">
                <h1>test</h1>
            </div>
        </div>
    </>
}


export default Admin;