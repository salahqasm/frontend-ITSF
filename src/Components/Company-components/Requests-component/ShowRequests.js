import React, { useContext, useEffect, useState } from "react";
import Popup from 'reactjs-popup';
import "./ShowRequests.css"
import Context from "../../../ContextApi/Context";
import axios from "axios";
import { useCookies } from "react-cookie";

function ShowRequests({ task }) {
    const [cookie] = useCookies();
    const ctx = useContext(Context);
    const [open, setOpen] = useState(false);
    const closeModal = () => setOpen(false);

    async function acceptHandler(elem) {
        try {
            const config = {
                headers: {
                    'authorization': `Bearer ${cookie.token}`
                }
            };
            let flag = window.confirm(`Are you sure you want to assign "${elem.email}" to task "${task.title}"? `);
            if (flag) {
                const res = await axios.post(`http://localhost:3001/acceptstudent/${task.id}`, {
                    studentEmail: elem.email
                }, config)
                console.log(res);
                ctx.refresh();
            }
        } catch (err) {
            console.log(err);
        }
    }
    async function denyHandler(elem) {
        try {
            const config = {
                headers: {
                    'authorization': `Bearer ${cookie.token}`
                }
            };
            let flag = window.confirm(`Are you sure you want to delete "${elem.email}" request to task "${task.title}"? `);
            if (flag) {
                const res = await axios.post(`http://localhost:3001/denystudent/${task.id}`, {
                    studentEmail: elem.email
                }, config)
                console.log(res);
                ctx.refresh();
            }
        } catch (err) {
            console.log(err);
        }
    }
    return <>
        <button type="button" className="showresult-button" onClick={() => setOpen(o => !o)}>
            Show Requests
        </button>
        <Popup open={open} closeOnDocumentClick onClose={closeModal}>
            <div className="showrequests">
                <table>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Visit</th>
                        <th>Accept</th>
                        <th>Deny</th>
                    </tr>
                    {task?.request?.map(elem =>
                        <tr>
                            <td>{elem.name}</td>
                            <td>{elem.email}</td>
                            <td><a href={`/student/${elem.id}`} target="_blank">View Page</a></td>
                            <td><input className="showresult-button" type="button" onClick={() => acceptHandler(elem)} value={"Accept"} /></td>
                            <td><input className="deny-button" type="button" onClick={() => denyHandler(elem)} value={"Deny"} /></td>

                        </tr>

                    )}

                </table>
            </div>
        </Popup>
    </>
}
export default ShowRequests;