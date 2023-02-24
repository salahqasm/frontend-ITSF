import "./Companies.css"
import React from "react";
import axios from "axios";
import { useCookies } from 'react-cookie';
import { useState, useEffect } from "react";
function Companies() {
    const [cookies, setCookie, removeCookie] = useCookies();
    const [companies, setCompanies] = useState([]);
    async function getCompanies() {
        const res = await axios.get('http://localhost:3001/allcompanies', {
            headers: {
                'authorization': `Bearer ${cookies.token}`
            }
        }, [])
        setCompanies(res?.data);
    }
    useEffect(() => {
        getCompanies();
    }, [])

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
                    <th>Role</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
            <tr>
                    <td data-column="First Name">James</td>
                    <td data-column="Last Name">Matman</td>
                    <td data-column="Job Title">Chief Sandwich Eater</td>
                    <td data-column="Twitter">@james</td>
                    <td data-column="Twitter">@james</td>
                    <td data-column="Twitter">@james</td>
                    <td data-column="Twitter">@james</td>
                    <td data-column="Actions" ><a title="delete">❌</a> <a title="edit">✏</a></td>
                </tr>
                <tr>
                    <td data-column="First Name">James</td>
                    <td data-column="Last Name">Matman</td>
                    <td data-column="Job Title">Chief Sandwich Eater</td>
                    <td data-column="Twitter">@james</td>
                </tr>
                <tr>
                    <td data-column="First Name">James</td>
                    <td data-column="Last Name">Matman</td>
                    <td data-column="Job Title">Chief Sandwich Eater</td>
                    <td data-column="Twitter">@james</td>
                </tr>
                <tr>
                    <td data-column="First Name">James</td>
                    <td data-column="Last Name">Matman</td>
                    <td data-column="Job Title">Chief Sandwich Eater</td>
                    <td data-column="Twitter">@james</td>
                </tr>

            </tbody>
        </table>

    </>
}

export default Companies;