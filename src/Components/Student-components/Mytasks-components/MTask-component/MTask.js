import React from "react";
import "./MTask.css"

function MTask({ type, task }) {

    return <div className="MBtask-task-main">
        <div className="Mtask-task" >
            <div style={{ float: "right" }}>
                {type === "Request" &&
                    <input type="button" value="Delete Request" />
                }
            </div>
            <h2>{task?.title}</h2>
            <span><span>{task?.status}</span> - <span> Cost: {task?.credit} JD </span> - <span> Due Date: {task?.date}</span> </span>
            <p>
                {task?.description}
            </p>
            <div className="Mtask-required-skills">
                {task?.skills?.map((elem) => {
                    return <span>{elem.name}</span>
                })}
            </div>
        </div>
    </div>
}

export default MTask;