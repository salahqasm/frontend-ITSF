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
    return <>

        <div className="mytasks-task" >
            <div style={{ float: "right" }}>
                {task.status === "available" && task.request.length ? <ShowRequests requests={task.request} /> : <></>}
                {task.status === "available" && <Edittask task={task} />}
                {task.status === "available" && <input type="button" className="deleteTask" onClick={() => deleteHandler(task.id)} value={"delete"} />}
            </div>
            <h2>{task.title}</h2>
            <span><span>{task.status}</span> - <span> Cost: {task.credit} JD </span> - <span> Due Date: {task.date}</span> </span>
            <p>
                {task.description}
            </p>
            <div className="required-skills">
                {task.skills.map((elem) => {
                    return <span>{elem.name}</span>
                })}
            </div>
        </div>
        <hr />
    </>
}

export default Task;
