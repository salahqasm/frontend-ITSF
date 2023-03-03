import "./Students.css"
import React from "react";
import axios from "axios";
import { useCookies } from 'react-cookie';
import { useState, useEffect } from "react";
function Students() {
    const [cookies] = useCookies();
    const [students, setStudents] = useState([]);
    const config = {
        headers: {
            'authorization': `Bearer ${cookies.token}`
        }
    };
    async function getStudents() {
        const res = await axios.get('http://localhost:3001/allstudents', config, [])
        setStudents(res?.data);
    }
    useEffect(() => {
        getStudents();
    }, [])
    async function deleteHandler(elem) {
        try {
            const res=await axios.delete(`http://localhost:3001/deletestudent/${elem.id}`, config, []);
            setStudents(res?.data);
        } catch (err) {
            console.log(err);
        }
    }
    return <>
        <table className="students-table">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>First Name</th>
                    <th>Second Name</th>
                    <th>Last Name</th>
                    <th>Email</th>
                    <th>Skill</th>
                    <th>Approved by</th>
                    <th>Status</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {

                    students.map((elem) => {
                        console.log(elem);
                        return <tr key={elem.id}>
                            <td>{elem.id}</td>
                            <td>{elem.fname}</td>
                            <td>{elem.sname}</td>
                            <td>{elem.lname}</td>
                            <td>{elem.email}</td>
                            <td>{elem.skill}</td>
                            <td>{elem.approvedby}</td>
                            <td>{elem.role}</td>
                            <td><span title="delete" onClick={() => deleteHandler(elem)}>❌</span> <span title="edit">✏</span></td>
                        </tr>
                    })
                }

            </tbody>
        </table>

    </>
}

export default Students;