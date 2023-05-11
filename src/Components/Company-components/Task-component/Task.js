import React, { useContext } from "react";
import "./Task.css"
import axios from "axios";
import { useCookies } from "react-cookie";
import Edittask from "../Edittask-component/Edittask";
import ShowRequests from "../Requests-component/ShowRequests";
import Context from "../../../ContextApi/Context";
function Task({ task }) {
    const [cookie] = useCookies();
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
    async function confirmHandler() {
        let flag = window.confirm(`Are you sure you want to Confirm submittion on task (${task.title}) ? 
        A ${task.credit} JD will be transferred to ${task.studentEmail}`);
        if (flag) {
            try {
                const config = {
                    headers: {
                        'authorization': `Bearer ${cookie.token}`
                    }
                };
                const res=await axios.post(`http://localhost:3001/paytask/${task.id}`,{},config)
                console.log(res);
            } catch (err) {
                console.log(err);
            }
        }
    }
    return <>

        <div className="mytasks-task" >
            <div style={{ float: "right" }}>

                {task.status === "available" && task.request.length ? <ShowRequests requests={task.request} /> : <></>}
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
                <input type="text" className="submission-input" value={task.submission} disabled/>&nbsp;
                <input type="button" value="Confirm and Pay" onClick={confirmHandler} className="submission-button" />
            </>
            }
        </div>
        <hr />
    </>
}

export default Task;
