import React from "react";
import "./Task.css"
function Task({ task }) {

    return <>
        <div className="mytasks-task">
            <h2>{task.title}</h2>
            <span><span>{task.status}</span> - <span> Cost: {task.credit} JD </span> - <span> Due Date: {task.date}</span> </span>
            <p>
                {task.description}
            </p>
            <div className="required-skills">
                <span>Node.js</span>
                <span>React</span>
                <span>PSQL</span>

            </div>
        </div>
        <hr />
    </>
}

export default Task;
