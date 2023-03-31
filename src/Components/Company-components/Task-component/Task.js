import React from "react";
import "./Task.css"
function Task() {
    return <>
        <div className="mytasks-task">
            <h2>Task Title</h2>
            <span><span>Status</span> - <span> Cost: 22 JD </span> - <span> Due Date: 2/4/2023</span> </span>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Tellus molestie nunc non blandit massa. Mi eget mauris pharetra et ultrices.
                Odio ut enim blandit volutpat maecenas. Purus viverra accumsan in nisl nisi scelerisque eu ultrices vitae.
                Non sodales neque sodales ut etiam sit. In hac habitasse platea dictumst quisque sagittis purus sit.
                Imperdiet massa tincidunt nunc pulvinar sapien et ligula. Amet mauris commodo quis imperdiet massa tincidunt nunc pulvinar.
                Tristique senectus et netus et malesuada fames ac turpis. Sagittis orci a scelerisque purus semper eget.
                Ac turpis egestas integer eget. Amet aliquam id diam maecenas ultricies mi.
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
