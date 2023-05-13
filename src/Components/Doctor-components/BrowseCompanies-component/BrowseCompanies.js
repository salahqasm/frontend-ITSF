import React, { useContext, useEffect, useState } from "react";
import "./BrowseCompanies.css"
import Context from "../../../ContextApi/Context"
import { useCookies } from "react-cookie";
import axios from "axios";

function BrowseCompanies() {
    const [cookie] = useCookies();
    const [users, setUsers] = useState();
    async function getUsers() {
        try {
            const config = {
                headers: {
                    'authorization': `Bearer ${cookie.token}`
                }
            };
            const res = await axios.get(`http://localhost:3001/company`, config)
            console.log(res.data);
        } catch (err) {
            console.log(err);
        }
    }
    useEffect(() => {
        getUsers();
    }, [])
    return <>
        <h1>Browse Companies</h1>
    </>
}

export default BrowseCompanies;