import React, { useContext, useEffect, useState } from "react";
import Popup from 'reactjs-popup';
import Addtask from "../../../Components/Company-components/Addtask-component/Addtask";
import Footer from "../../../Components/Footer-component/Footer";
import Filter from "../../../Components/Company-components/Filter-component/Filter"
import Task from "../../../Components/Company-components/Task-component/Task";
import "./CompanyTasks.css"
import Brief from "../../../Components/Company-components/Brief-component/Brief";
import Context from "../../../ContextApi/Context";
function CompanyTasks() {
    const [open, setOpen] = useState(false);
    const closeModal = () => setOpen(false);
    const ctx = useContext(Context);
    const [user, setUser] = useState(ctx.user);
    const [filter, setFilter] = useState("all");
    useEffect(() => {
        setUser(ctx.user)
        console.log("Company tasks UseEffect ***************************************** WARNING");
    }, [ctx])
    return <>

        <Brief user={user} />
        <div className="mytasks-main">
            <br/>
            <div className="mytasks-left">
                <div className="addtask-container">
                    <p>Want to Publish a New Task?</p>
                    <button type="button" className="addtask-button" onClick={() => setOpen(o => !o)}>
                        Add Task
                    </button>
                    <Popup open={open} closeOnDocumentClick onClose={closeModal}>
                        <Addtask id={user.id} close={setOpen} />
                    </Popup>
                </div>
                <br />
                <Filter filter={filter} setFilter={setFilter} />
            </div>
            <div className="mytasks-right">
                <h1>View Your Tasks</h1>
                <hr />
                {filter === "all" ? user?.tasks?.slice().reverse().map(elem =>
                    <div key={elem.id}><Task task={elem} /></div>
                ) : filter === "done" ? user?.tasks?.slice().reverse().map(elem =>
                    elem.status === "done" && <div key={elem.id}><Task task={elem} /></div>

                ) : filter === "inprocess" ? user?.tasks?.slice().reverse().map(elem =>
                    elem.status === "inprocess" && <div key={elem.id}><Task task={elem} /></div>

                ) : filter === "available" ? user?.tasks?.slice().reverse().map(elem =>
                    elem.status === "available" && <div key={elem.id}><Task task={elem} /></div>

                ) : <></>}

            </div>
        </div >
        <br />
    </>
}

export default CompanyTasks;