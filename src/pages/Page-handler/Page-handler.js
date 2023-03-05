import React, { useState } from "react";
import Navb from "../../Navbar/Navbar";
import Profile from "../Profile-page/Profile";


function PageHandler() {
    const [page, setPage] = useState("profile");
    
    return <>
        <Navb changePage={setPage}/>
        {
            page=="profile"?
            <Profile/>:<></>
        }
    </>
}

export default PageHandler;