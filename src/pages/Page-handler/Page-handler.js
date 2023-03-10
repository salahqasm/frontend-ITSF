import React, { useState } from "react";
import Navb from "../../Navbar/Navbar";

import FeedbackForm from "../Feedback-component/Feedback-form";
import Profile from "../Profile-page/Profile";


function PageHandler() {
    const [page, setPage] = useState("profile");
    
    return <>
        <Navb changePage={setPage}/>
        {
            page=="profile"?
            <Profile/>
            :page==="feedback"?
            <FeedbackForm/>
            :
            <></>
        }
    </>
}

export default PageHandler;