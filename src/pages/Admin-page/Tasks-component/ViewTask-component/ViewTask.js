import React from "react";
import "./ViewTask.css"
function ViewTask({ task }) {
    return <>
        <div className="Edittask-main" style={{ maxHeight: '90vh', overflowY: 'scroll' }}>
            <hr />
            <h4 className="centerText">Title: {task.title}</h4>
            <hr />
            <div>
                <span><strong>Cost: </strong> {task.credit} JD </span>
                ,&nbsp;
                <span><strong>Status: </strong> {task.status} </span>
                ,&nbsp;
                <span><strong>Due Date: </strong> {task.date} </span>
                <br />
                <br />
            </div>
            <hr />
            {/* <div className="taskview-admin" > */}
                <p><strong>Description: </strong></p>
                <p style={{ whiteSpace: "pre-wrap", background: "#FFF", padding: "0.8rem", borderRadius: "15px" }}>{task.description}</p>
            {/* </div> */}
            <hr />
            <div>
                <h6>Published by:</h6>
                <span><a href={`/company/${task.company.id}`} target="_blank" title="Visit">{task.company.name}, {task.company.email}</a></span>
            </div>
            <br />
            <hr />
            {task?.student && <div>
                <h6>Assigned To: </h6>
                <span><a href={`/student/${task.student.id}`} target="_blank" title="Visit">{task.student.name}, {task.student.email}</a></span>
            </div>}
            <br />
        </div >
    </>
}

export default ViewTask;