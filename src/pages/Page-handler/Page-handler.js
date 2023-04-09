import React, { useEffect, useState } from "react";
import Navb from "../../Navbar/Navbar";
import FeedbackForm from "../../Components/Feedback-component/Feedback-form";
import Mytasks from "../Mytasks-page/Mytasks";
import Profile from "../Profile-page/Profile";
import { useCookies } from "react-cookie";
import axios from "axios";
import Context from "../../ContextApi/Context";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Outlet
} from "react-router-dom";
import Footer from "../../Components/Footer-component/Footer";
function PageHandler() {
    const [page, setPage] = useState("profile");
    const [user, setUser] = useState({});
    const [cookie] = useCookies();
    const { id, userType } = cookie.user;
    const [update, setUpdate] = useState(1);
    function refreshUser() {
        if (update >= 5) {
            setUpdate(update - 1);
        } else {
            setUpdate(update + 1);
        }
    }
    const config = {
        headers: {
            'authorization': `Bearer ${cookie.token}`
        }
    };
    async function getUser() {
        if (userType === "company") {
            const res = await axios.get(`http://localhost:3001/company/${id}`, config, []);
            setUser(res.data);
        } else if (userType === 'student') {
            const res = await axios.get(`http://localhost:3001/student/${id}`, config, []);
            setUser(res.data);
        }
    }

    useEffect(() => {
        getUser();
        console.log(update);
    }, [update]);
    return <>
        <Context.Provider value={
            {
                user: user,
                update: update,
                refresh: refreshUser
            }
        }>
            <>
                <Navb changePage={setPage} />
                <Outlet />
                <Footer />
            </>
        </Context.Provider >
    </>
}

export default PageHandler;

{/* {
    page == "profile" ?
        <Profile />
        : page === "feedback" ?
            <FeedbackForm />
            : page === "mtasks" ?
                <Mytasks />
                :
                <></>
} */}