import React from "react";
import "./Task.css"
function Task({ task }) {

    return <>

        <div className="mytasks-task">
            <div style={{ float: "right" }}>
                {task.status === "available" && <input type="button" value={"Show Requests"} />}
                {task.status === "available" && <input type="button" value={"Edit"} />}
                {task.status === "available" && <input type="button" value={"delete"} />}
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
