import "./Companies.css"
import React from "react";
import axios from "axios";
import { useCookies } from 'react-cookie';
import { useState, useEffect } from "react";
function Companies() {
    const [cookies] = useCookies();
    const [companies, setCompanies] = useState([]);
    const config = {
        headers: {
            'authorization': `Bearer ${cookies.token}`
        }
    };
    async function getCompanies() {
        const res = await axios.get('http://localhost:3001/allcompanies', config, [])
        setCompanies(res?.data);
    }
    useEffect(() => {
        getCompanies();
    }, [])
    async function deleteHandler(elem) {
        try {
            const res = await axios.delete(`http://localhost:3001/deletecompany/${elem.id}`, config, []);
            setCompanies(res?.data);
        } catch (err) {
            console.log(err);
        }
    }
    async function active(id) {
        try {
            const res = await axios.put(`http://localhost:3001/activeCompany/${id}`, {}, config);
            setCompanies(res.data);
        } catch (err) {
            console.log(err);
        }
    }
    return <>
        <div className="companies-table-div">
            <table className="companies-table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Specialization</th>
                        <th>Country</th>
                        <th>City</th>
                        <th>Status</th>
                        <th>Visit</th>
                        <th>Active</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        companies.map((elem) => {
                            return <tr key={elem.id}>
                                <td>{elem.id}</td>
                                <td>{elem.name}</td>
                                <td>{elem.email}</td>
                                <td>{elem.specialization}</td>
                                <td>{elem.country}</td>
                                <td>{elem.city}</td>
                                <td>{elem.role}</td>
                                <td><a href={`http://localhost:3000/company/${elem.id}`} target="_blank">Visit</a></td>
                                <td>{elem.role === 'unactive' ? <input

                                    className="AdminAddDoctor-button active-comp" onClick={() => active(elem.id)} type="button" value="Active" /> : "Activated"}</td>
                                <td><span title="delete" onClick={() => deleteHandler(elem)} className="clicky-icon">❌</span></td>
                            </tr>
                        })
                    }

                </tbody>
            </table>
        </div>
    </>
}

export default Companies;