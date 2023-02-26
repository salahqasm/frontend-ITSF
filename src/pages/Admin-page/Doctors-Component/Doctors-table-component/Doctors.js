import "./Doctors.css"
import React from "react";
import axios from "axios";
import { useCookies } from 'react-cookie';
import { useState, useEffect } from "react";
function Doctors() {
    const [cookies] = useCookies();
    const [doctors, setDoctors] = useState([]);
    const config = {
        headers: {
            'authorization': `Bearer ${cookies.token}`
        }
    };
    async function getDoctors() {
        const res = await axios.get('http://localhost:3001/alldoctors', config, [])
        setDoctors(res?.data);
    }
    useEffect(() => {
        getDoctors();
    }, [])
    async function deleteHandler(elem) {
        try {
            await axios.delete(`http://localhost:3001/deletedoctor/${elem.id}`, config, []);
            window.location.reload(false);
        } catch (err) {
            console.log(err);
        }
    }
    return <>
        <table className="doctors-table">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Email</th>
                    <th>Specialization</th>
                    <th>Department</th>
                    <th>Status</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {

                    doctors.map((elem) => {
                        console.log(elem);
                        return <tr key={elem.id}>
                            <td>{elem.id}</td>
                            <td>{elem.fname}</td>
                            <td>{elem.lname}</td>
                            <td>{elem.email}</td>
                            <td>{elem.specialization}</td>
                            <td>{elem.department}</td>
                            <td>{elem.role}</td>
                            <td><span title="delete" onClick={() => deleteHandler(elem)}>❌</span> <span title="edit">✏</span></td>
                        </tr>
                    })
                }

            </tbody>
        </table>

    </>
}

export default Doctors;