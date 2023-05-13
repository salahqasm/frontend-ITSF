import React, { useContext, useEffect, useState } from "react";
import "./BrowseCompanies.css"
import Context from "../../../ContextApi/Context"
import { useCookies } from "react-cookie";
import axios from "axios";
import defaltPic from "../../../imgs/profileImg.png"
function BrowseCompanies() {
    const [cookie] = useCookies();
    const [users, setUsers] = useState();
    const [filteredUsers, setFilteredUsers] = useState();
    const [search, setSearch] = useState();
    async function getUsers() {
        try {
            const config = {
                headers: {
                    'authorization': `Bearer ${cookie.token}`
                }
            };
            const res = await axios.get(`http://localhost:3001/company`, config)
            setUsers(res.data);
            setFilteredUsers(res.data);
        } catch (err) {
            console.log(err);
        }
    }
    useEffect(() => {
        getUsers();
    }, [])
    useEffect(() => {
        if (search != "") {
            setFilteredUsers(users?.filter((elem) => elem.name.toLowerCase().includes(search.toLowerCase())));
        } else {
            setFilteredUsers(users);
        }
    }, [search])
    return <div className="BrowseCompanies-main">
        <input type="text" placeholder="Search by Company Name" onChange={e => setSearch(e.target.value)} />
        <br />
        <br />
        {filteredUsers?.map((elem) => <>
            <div className="BrowseCompanies-card" onClick={() => window.open(`/company/${elem.id}`, "_blank")}>
                <div>
                    <img src={elem.profilePicture ? `data:image;base64${elem.profilePicture}` : defaltPic} width="180px" />
                </div>
                <div className="BrowseCompanies-card-info">
                    <h4>{elem.name}</h4>
                    <h6>{elem.email}, {elem.phoneNum}</h6>
                    <h6>Specialization: {elem.specialization}</h6>
                    <p style={{ whiteSpace: 'pre-wrap' }}>{elem?.about?.length > 150 ? elem?.about?.slice(0, 150) + "..." : elem?.about}</p>
                </div>

            </div>
        </>
        )}
    </div>
}

export default BrowseCompanies;