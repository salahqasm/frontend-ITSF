import React, { useContext, useEffect, useState } from "react";
import "./BrowseStudents.css"
import axios from "axios";
import { useCookies } from "react-cookie";
import Pic from "../../../imgs/profileImg.png"
import Context from "../../../ContextApi/Context"
import Popup from 'reactjs-popup';
import ApproveByEmail from "./ApproveByEmail-component/ApproveByEmail";
function BrowseStudents() {
    const ctx = useContext(Context);
    const [cookie] = useCookies();
    const [open, setOpen] = useState(false);
    const closeModal = () => setOpen(false);
    const [students, setStudents] = useState();
    const [filteredStudents, setFilteredStudents] = useState(students);
    const [category, setCateg] = useState('all');
    async function getStudents() {
        try {
            const config = {
                headers: {
                    'authorization': `Bearer ${cookie.token}`
                }
            };
            const res = await axios.get(`http://localhost:3001/student`, config)
            setStudents(res.data);
            setFilteredStudents(res.data);
        } catch (err) {
            console.log(err);
        }
    }
    useEffect(() => {
        getStudents();
    }, []);
    useEffect(() => {
        handleActivity();
    }, [category]);
    function handleCat(e) {
        setCateg(e.target.value);
    }
    function handleActivity() {
        switch (category) {
            case "all":
                setFilteredStudents(students);
                break;
            case "approved":
                setFilteredStudents(students.filter((elem) => elem.doctor))
                break;
            case "notapproved":
                setFilteredStudents(students.filter((elem) => !elem.doctor))
                break;
            case "approvedbyme":
                setFilteredStudents(students.filter((elem) => elem?.doctor?.name === ctx?.user?.name))
                break;

        }
    }
    function hangleName(e) {
        let search = e.target.value;
        if (search) {
            setFilteredStudents(filteredStudents.filter((elem) => elem.name.toLowerCase().includes(search.toLowerCase())));
        } else {
            handleActivity();
        }
    }
    return <div className="doctorBrowseStudent">
        <hr />
        <div className="doctorGrid3">
            <label>Filter by Account Activity:&nbsp;
                <select name="activity" className="FilterSelect" onChange={(e) => handleCat(e)}>
                    <option value="all">All</option>
                    <option value="approved">Approved</option>
                    <option value="notapproved">Not Approved</option>
                    <option value="approvedbyme">Approved By Me</option>

                </select>
            </label>
            <label>Student Name:&nbsp;
                <input type="text" className="searchByName" placeholder="Search by Student Name" onChange={(e) => hangleName(e)} />
            </label>
            <input className="ApproveByEmail" type="button" value="Approve By Email" onClick={() => setOpen(o => !o)} />
            <Popup open={open} closeOnDocumentClick onClose={closeModal} closeOnEscape={false}>
                <div style={{ maxHeight: '90vh' }}>
                    <ApproveByEmail />
                </div>
            </Popup>
        </div>
        <hr />
        <div className="grid4st">

            {filteredStudents?.map((elem) => <>
                <div className="StudentCard-doctor" onClick={() => window.open(`/student/${elem.id}`, "_blank")}>
                    <div className="StudentImg-doctor">
                        <img src={elem.profilePicture ? `data:image;base64${elem.profilePicture}` : `${Pic}`} width="170" height={"170"} />
                    </div>
                    <p>{elem.name}</p>
                    {elem.doctor ? <p style={{ color: "#00ff00" }}>Approved</p> : <p style={{ color: "#ff0000" }}>Not Approved</p>}
                </div>
            </>
            )}
        </div>

    </div>
}

export default BrowseStudents;