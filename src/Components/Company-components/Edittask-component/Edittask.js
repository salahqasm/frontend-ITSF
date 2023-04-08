import React, { useEffect, useState } from "react";
import Popup from 'reactjs-popup';
import "./Edittask.css"
function Edittask({ task }) {
    const [open, setOpen] = useState(false);
    const closeModal = () => setOpen(false);
    // const [tk,setTk]=useState(task);
    return <>
        <button type="button" className="editbutton"onClick={() => setOpen(o => !o)}>
            Edit
        </button>
        <Popup open={open} closeOnDocumentClick onClose={closeModal}>
            <div className="edittask">
                <p>test</p>
                <form>

                    <input type="text" value={task.title} />
                    <input type="text" value={task.description} />
                    <input type="text" value={task.credit} />
                    <input type="date" value={task.date} />


                </form>
            </div>
        </Popup>
    </>
}
export default Edittask;