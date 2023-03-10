import "./Feedback-table.css"
import React from "react";
import axios from "axios";
import Popup from 'reactjs-popup';

import { useCookies } from "react-cookie";
import { useState, useEffect } from "react";
function Feedback() {
    const [cookies] = useCookies();
    const [open, setOpen] = useState(false);
    const [feedback, setFeedback] = useState([]);
    const [read, setRead] = useState({ title: "", message: "" });

    const closeModal = () => setOpen(false);

    const config = {
        headers: {
            'authorization': `Bearer ${cookies.token}`
        }
    };
    async function getFeedback() {
        const res = await axios.get('http://localhost:3001/getfeedback', config, [])
        setFeedback(res?.data);
    }
    useEffect(() => {
        getFeedback();
    }, [])
    async function deleteHandler(elem) {
        try {
            const res = await axios.delete(`http://localhost:3001/deletefeedback/${elem.id}`, config, []);
            setFeedback(res?.data);
        } catch (err) {
            console.log(err);
        }
    }
    return <>
        <table className="feedback-table">
            <thead>
                <tr>
                    <th>Feedback ID</th>
                    <th>Title</th>
                    <th>Sender Email</th>
                    <th>Feedback Message</th>
                    <th>Read</th>
                    <th>Delete</th>
                </tr>
            </thead>
            <tbody>
                {
                    feedback.map((elem) => {
                        console.log(elem);
                        return <tr key={elem.id}>
                            <td>{elem.id}</td>
                            <td>{elem.title}</td>
                            <td>{elem.email}</td>
                            <td>{elem.message.substring(0, 30)} ........({elem.message.split(" ").length} words)</td>
                            <td>
                                <span title="delete" className="Feedback-popup-Read" onClick={() => { setOpen(o => !o); setRead(elem) }}>READ</span>
                            </td>
                            <td>
                                <span title="delete" onClick={() => deleteHandler(elem)}>❌</span>
                            </td>
                        </tr>
                    })
                }
                <Popup contentStyle={{ width: "60%" }} open={open} closeOnDocumentClick onClose={closeModal}>
                    <form>
                        <div className="feedback-popup">
                            <label htmlFor="title">Title</label>
                            <input className="Feedback-inner-input" id="title" value={read.title} name="title" type={"text"} maxLength="100" disabled />
                            <label htmlFor="email">Email</label>
                            <input className="Feedback-inner-input" id="email" value={read.email} name="email" type={"text"} maxLength="100" disabled />
                            <label htmlFor="message">Message</label>
                            <textarea id="message" name="message" rows="10" maxlength="1000" value={read.message} disabled />
                            <button className="Feedback-popup-delete" onClick={() => { deleteHandler(read); setOpen(o => !o); }}>Delete</button>
                        </div>
                    </form>
                </Popup>
            </tbody>
        </table>

    </>
}

export default Feedback;