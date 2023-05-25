import React, { useState } from "react";
import "./MTask.css"
import axios from "axios";
import { useCookies } from "react-cookie";

function MTask({ type, task }) {
    const [cookie] = useCookies();
    const [submission, setSubmission] = useState(task.submission);
    console.log(task);
    async function deleteReq() {
        try {
            const req = {
                taskID: task.id,
                studentEmail: cookie.user.email
            }

            const config = {
                headers: {
                    'authorization': `Bearer ${cookie.token}`
                }
            };
            const res = await axios.post('http://localhost:3001/deleteRequest', req, config)
            window.location.reload();
        } catch (err) {
            console.log(err);
        }
    }
    async function submissionHandler(e) {
        e.preventDefault();
        try {
            let req = {
                submission: submission
            }
            const config = {
                headers: {
                    'authorization': `Bearer ${cookie.token}`
                }
            };
            const res = await axios.put(`http://localhost:3001/submittask/${task?.id}`, req, config);
            alert("Submittied");
            
        } catch (err) {
            console.log(err);
        }
    }
    return <div className="Mtask-task" >

        <div style={{ float: "right" }}>
            {type === "Request" &&
                <input type="button" value="Delete Request" className="delete-req" onClick={deleteReq} />
            }
        </div>

        <h2>{task?.title}</h2>
        <span><strong>Publisher: </strong> <a href={`/company/${task?.company?.id}`} target="_blank">{task?.company?.name}</a> - </span>
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
        </div>

        {type === "InProcess" &&
            <div className="Stask-submittion">
                <form onSubmit={(e) => submissionHandler(e)}>
                    <label htmlFor="submission"><strong>Submission:</strong></label>
                    <input id="submission" type="text" placeholder="Submission URL" className="submission-input"
                        value={submission && submission} onChange={(e) => setSubmission(e.target.value)} />
                    <input type="submit" className="submission-button"
                        value={task.submission == null ? "Submit" : "Edit Submission"} />
                </form>
            </div>
        }
        {type == "Completed" && <>
            <span><strong>Submission: </strong></span>
            <span>{task.submission}</span>
        </>}
    </div>

}

export default MTask;