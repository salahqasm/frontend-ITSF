import React, { useState } from "react";
import Popup from 'reactjs-popup';
import Addtask from "../../Components/Addtask-component/Addtask";
import Footer from "../../Components/Footer-component/Footer";
import "./Mytasks.css"
function Mytasks() {
    const [open, setOpen] = useState(false);
    const closeModal = () => setOpen(false);

    return <>
        <div className="mytasks-main">
            <div className="mytasks-left">
                <div className="addtask-container">
                    <p>Want to Publish a New Task?</p>
                    <button type="button" className="addtask-button" onClick={() => setOpen(o => !o)}>
                        Add Task
                    </button>
                    <Popup open={open} closeOnDocumentClick onClose={closeModal}>
                        <Addtask />
                    </Popup>
                </div>
                <br />
                <div className="mytasks-filter">
                    <form>
                        <p>Filter My Tasks:</p>
                        <label><input type={"radio"} name="mytasksfilter" /> All Tasks</label>
                        <br />
                        <label><input type={"radio"} name="mytasksfilter" /> In Process</label>
                        <br />
                        <label><input type={"radio"} name="mytasksfilter" /> Completed</label>
                    </form>
                </div>
            </div>
            <div className="mytasks-right">
                <h1>View Your Tasks</h1>
                <hr />
                <div className="mytasks-task">
                    <h2>Task Title</h2>
                    <h5>Available</h5>
                    <h6>Due Date: 2/4/2023 </h6>
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
                <hr/>
            </div>
        </div>
        <br/>
        <Footer />
    </>
}

export default Mytasks;