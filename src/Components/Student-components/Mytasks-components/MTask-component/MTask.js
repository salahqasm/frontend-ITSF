import React, { useState } from "react";
import "./MTask.css"
import axios from "axios";
import { useCookies } from "react-cookie";

function MTask({ type, task }) {
    const [cookie] = useCookies();
    const [submission, setSubmission] = useState(task.submission);
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
    return <div className="Mtask-task-main">
        <div className="Mtask-task" >
            <div style={{ float: "right" }}>
                {type === "Request" &&
                    <input type="button" value="Delete Request" className="delete-req" onClick={deleteReq} />
                }


            </div>
            <h2>{task?.title}</h2>
            <span><span>{task?.status}</span> - <span> Cost: {task?.credit} JD </span> - <span> Due Date: {task?.date}</span> </span>
            <p>
                {task?.description}
            </p>
            <div className="Mtask-required-skills">
                {task?.skills?.map(elem =>
                    <span>{elem.name}</span>
                )}
            </div>

            {type === "InProcess" &&
                <div className="Stask-submittion">
                    <form >
                        <label htmlFor="submission"><strong>Submission:</strong></label>
                        <input id="submission" type="text" placeholder="Submittion URL" className="submission-input"
                            value={submission && submission} onChange={(e) => setSubmission(e.target.value)} />
                        <input type="submit" className="submission-button"
                            value={task.submission === "" ? "Submit" : "Edit Submission"} />
                    </form>
                </div>
            }
        </div>
    </div>
}

export default MTask;