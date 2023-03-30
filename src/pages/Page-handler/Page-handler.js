import React, { useState } from "react";
import Navb from "../../Navbar/Navbar";

import FeedbackForm from "../../Components/Feedback-component/Feedback-form";
import Mytasks from "../Mytasks-page/Mytasks";
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
            :page==="mtasks"?
            <Mytasks/>
            :
            <></>
        }
    </>
}

export default PageHandler;