import React, { useEffect, useState } from "react";
import Navb from "../../Navbar/Navbar";
import FeedbackForm from "../../Components/Feedback-component/Feedback-form";
import Mytasks from "../Mytasks-page/Mytasks";
import Profile from "../Profile-page/Profile";
import { useCookies } from "react-cookie";
import axios from "axios";

function PageHandler() {
    const [page, setPage] = useState("profile");
    const [user, setUser] = useState({});
    const [cookie] = useCookies();
    const { id, userType } = cookie.user;
    const config = {
        headers: {
            'authorization': `Bearer ${cookie.token}`
        }
    };
    async function getUser() {
        if (userType === "company") {
            const res = await axios.get(`http://localhost:3001/company/${id}`, config, []);
            setUser(res.data);
        }
    }

    useEffect(() => {
        getUser();
    }, []);
    return <>
        <Navb changePage={setPage} />
        {
            page == "profile" ?
                <Profile user={user} changeUser={setUser} />
                : page === "feedback" ?
                    <FeedbackForm />
                    : page === "mtasks" ?
                        <Mytasks user={user}/>
                        :
                        <></>
        }
    </>
}

export default PageHandler;