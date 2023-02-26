import "./Companies.css"
import React from "react";
import axios from "axios";
import { useCookies } from 'react-cookie';
import { useState, useEffect } from "react";
function Companies() {
    const [cookies] = useCookies();
    const [companies, setCompanies] = useState([]);
    const config= {
        headers: {
            'authorization': `Bearer ${cookies.token}`
        }
    };
    async function getCompanies() {
        const res = await axios.get('http://localhost:3001/allcompanies',config, [])
        setCompanies(res?.data);
    }
    useEffect(() => {
        getCompanies();
    }, [])
   async function deleteHandler(elem) {
        try{
            await axios.delete(`http://localhost:3001/deletecompany/${elem.id}`,config,[]);
            window.location.reload(false);
        }catch(err){
            console.log(err);
        }
    }
    return <>
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
                    <th>Actions</th>
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
                                <td><span title="delete" onClick={()=>deleteHandler(elem)}>❌</span> <span title="edit">✏</span></td>
                            </tr>
                    })
                }

            </tbody>
        </table>

    </>
}

export default Companies;