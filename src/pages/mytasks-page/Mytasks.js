import React, { useState } from "react";
import Popup from 'reactjs-popup';
import Addtask from "./Addtask-component/Addtask";
import "./Mytasks.css"
function Mytasks() {
    
    const [open, setOpen] = useState(false);
    const closeModal = () => setOpen(false);
    return <div className="mytasks-main">
        <div className="mytasks-left">
            <button type="button" className="AdminAddDoctor-button" onClick={() => setOpen(o => !o)}>
                Add Task
            </button>
            <Popup open={open} closeOnDocumentClick onClose={closeModal}>
                <Addtask />
            </Popup>
        </div>
        <div className="mytasks-right">

        </div>
    </div>
}

export default Mytasks;