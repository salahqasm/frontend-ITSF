import React, { useContext, useState } from "react";
import "./Task.css"
import axios from "axios";
import { useCookies } from "react-cookie";
import Edittask from "../Edittask-component/Edittask";
import ShowRequests from "../Requests-component/ShowRequests";
import Context from "../../../ContextApi/Context";
import Popup from 'reactjs-popup';
function Task({ task }) {
    const [cookie] = useCookies();
    const [open, setOpen] = useState(false);
    const closeModal = () => setOpen(false);
    const ctx = useContext(Context);
    const config = {
        headers: {
            'authorization': `Bearer ${cookie.token}`
        }
    };
    async function deleteHandler(id) {

        try {
            await axios.delete(`http://localhost:3001/deletetask/${id}`, config)
            ctx.refresh();
        } catch (err) {
            console.log(err);
        }
    }
    async function confirmHandler(e) {
        e.preventDefault();
        let flag = window.confirm(`Are you sure you want to Confirm submittion on task (${task.title}) ? 
        A ${task.credit} JD will be transferred to ${task.studentEmail}`);
        if (flag) {
            try {
                const config = {
                    headers: {
                        'authorization': `Bearer ${cookie.token}`
                    }
                };
                const res = await axios.post(`http://localhost:3001/paytask/${task.id}`, {}, config)
                ctx.refresh();
                setOpen(o => !o);
            } catch (err) {
                console.log(err);
            }
        }
    }
    return <>

        <div className="mytasks-task" >
            <div style={{ float: "right" }}>

                {task.status === "available" && task.request.length ? <ShowRequests task={task} /> : <></>}
                {task.status === "available" && <Edittask task={task} />}
                {task.status === "available" && <input type="button" className="deleteTask" onClick={() => deleteHandler(task.id)} value={"delete"} />}
            </div>
            <h2>{task?.title}</h2>
            <span><span><strong>Budget: </strong>{task?.credit} JD </span> - <span><strong>Due Date:</strong> {task?.date}</span> </span>
            <p style={{ whiteSpace: "pre-wrap" }}>
                <strong>Description:</strong>
                <br />{task?.description}
            </p>
            <div className="Mtask-required-skills">
                <strong>Required Skills: </strong>
                {task?.skills?.map(elem =>
                    <span>{elem.name}</span>
                )}
            </div><br />
            {task?.status == "done" && <>
                <span><strong>Submission: </strong></span>
                <span>{task.submission}</span>
            </>}
            {task.status === "inprocess" && <>
                <label><strong>Submission:</strong></label>&nbsp;
                <input type="text" className="submission-input" value={task.submission} disabled />&nbsp;
                <input type="button" value="Confirm and Pay" onClick={() => setOpen(o => !o)} className="submission-button" />
            </>
            }
        </div>
        <Popup open={open} closeOnDocumentClick onClose={closeModal} closeOnEscape={false}>
            <br />
            <h4 style={{ textAlign: "center" }}>Confirm and Pay</h4>
            <form onSubmit={e => confirmHandler(e)}>
                <div className="payment-form">

                    <label>Card Number: </label>
                    <input className="mg-10" type="text" placeholder="0000-1111-2222-3333" />

                    <label>CVV:</label>
                    <input type="text" className="mg-10" placeholder="000" id="pin" name="pin" maxLength="4" size="4" />
                    <label>Expiration Date: </label>
                    <input type="date" className="mg-10" />
                    <br />
                    <input type="submit" className="submission-button" value="Submit" />

                </div>
            </form>
        </Popup >
        <hr />
    </>
}

export default Task;
