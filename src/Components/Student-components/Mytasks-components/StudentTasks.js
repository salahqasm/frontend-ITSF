import React, { useContext, useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import "./StudentTasks.css"
import Context from "../../../ContextApi/Context";
import ProfilePicture from "../../Picture-Component/ProfilePicture-component";
import MTask from "./MTask-component/MTask";

function StudentTasks() {
    const ctx = useContext(Context);
    const [reqTask, setReq] = useState([])
    const [inprocess, setInprocess] = useState([]);
    const [completed, setCompleted] = useState([]);
    const [navHead, setNav] = useState("Request");
    useEffect(() => {
        if (ctx?.user?.tasks?.length) {
            setInprocess(ctx?.user?.tasks?.filter(obj => obj.status === "inprocess"));
            setCompleted(ctx?.user?.tasks?.filter(obj => obj.status === "done"));
        }
        setReq(ctx?.user?.request)

    }, [ctx])

    function navHandler(str) {
        setNav(str);
    }

    return <div className="SMytasks-main">
        <div className="SMytasks-header">
            <div className="SMytasks-card">
                <ProfilePicture data={ctx?.user?.profilePicture} width={90} />
                <h4>{ctx?.user?.name}</h4>
            </div>
            <div className="SMytasks-card" style={{ verticalAlign: "bottom" }}>
                <br />
                <h4>Total Credit</h4>
                <h3>{ctx?.user?.credit} JD</h3>
            </div>
            <div className="SMytasks-card grid3">
                <div>
                    <br />
                    <h5>Requested Tasks</h5>
                    <h4> {ctx?.user?.request?.length ?? 0}</h4>
                </div>
                <div>
                    <br />
                    <h5>Assigned Tasks</h5>
                    <h4>{inprocess?.length || 0}</h4>
                </div>
                <div>
                    <br />
                    <h5>Completed Tasks</h5>
                    <h4>{completed?.length || 0}</h4>
                </div>
            </div>
        </div>
        <div className="SMytasks-tasks">
            <div className="grid3" style={{ textAlign: "center" }}>
                <h5 className="SMytasks-nav"
                    style={{ borderRadius: "10px 0 0 0 ", backgroundColor: navHead === "Request" ? "#222831" : "" }}
                    onClick={() => navHandler("Request")}
                >Requested</h5>

                <h5 className="SMytasks-nav"
                    style={{ backgroundColor: navHead === "InProcess" ? "#222831" : "" }}
                    onClick={() => navHandler("InProcess")}
                >Assigned</h5>

                <h5 className="SMytasks-nav"
                    style={{ borderRadius: "0 10px 0 0 ", backgroundColor: navHead === "Completed" ? "#222831" : "" }}
                    onClick={() => navHandler("Completed")}
                >Completed</h5>
            </div>

            <div className="SMytasks-tasks-container">

                {navHead === "Request" && reqTask?.length > 0 ?
                    reqTask?.map((e) => <MTask task={e} type={navHead} />)
                    : navHead === "Request" && <><br /><h4 style={{ textAlign: "center" }}>No Requested Tasks</h4></>

                }
                {navHead === "InProcess" && inprocess?.length > 0 ?
                    inprocess?.map((e) => <MTask task={e} type={navHead} />)
                    : navHead === "InProcess" && <><br /><h4 style={{ textAlign: "center" }}>No Assigned Tasks</h4></>

                }
                {navHead === "Completed" && completed?.length > 0 ?
                    completed?.map((e) => <MTask task={e} type={navHead} />)
                    : navHead === "Completed" && <><br /><h4 style={{ textAlign: "center" }}>No Completed Tasks</h4></>

                }
            </div>
            <br />

        </div>
        <br />
    </div >
}

export default StudentTasks;