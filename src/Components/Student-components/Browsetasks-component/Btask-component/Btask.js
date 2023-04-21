import React from "react";
import { useCookies } from "react-cookie";
import "./Btask.css"
import axios from "axios";
function Btask({ task }) {
    const [cookie] = useCookies();

    const config = {
        headers: {
            'authorization': `Bearer ${cookie.token}`
        }
    };
    async function sendRequest() {
        try {
            let obj = {
                studentID: cookie.user.id,
                taskID: task.id
            }
            let res = await axios.post('http://localhost:3001/taskRequest', obj, config)
            if(res.data==="success"){
                window.alert("Request Sent Successfully")
            }
        } catch (err) {

        }
    }
    return <><div className="SBtask-task" >
        <div style={{ float: "right" }}>
            <input type="button" className="SBtask-send" onClick={sendRequest} value={"Send Request"} />
        </div>
        <h2>{task.title}</h2>
        <span><span>{task.status}</span> - <span> Cost: {task.credit} JD </span> - <span> Due Date: {task.date}</span> </span>
        <p>
            {task.description}
        </p>
        <div className="SBtask-required-skills">
            {task.skills.map((elem) => {
                return <span>{elem.name}</span>
            })}
        </div>
    </div>
        <hr />
    </>
}

export default Btask;