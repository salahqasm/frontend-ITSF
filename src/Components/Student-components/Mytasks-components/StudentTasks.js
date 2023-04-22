import React, { useContext, useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import "./StudentTasks.css"
import Context from "../../../ContextApi/Context";
import ProfilePicture from "../../Picture-Component/ProfilePicture-component";

function StudentTasks() {
    const ctx = useContext(Context);
    const [inprocessCount, setInprocess] = useState(0);
    const [completedCount, setCompleted] = useState(0);

    useEffect(() => {
        if (ctx?.user?.tasks?.length) {
            setInprocess(ctx.user.tasks.filter(obj => obj.status === "inprocess").length);
            setCompleted(ctx.user.tasks.filter(obj => obj.status === "done").length);
        }
    }, [])
    console.log(ctx?.user);
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
                    <h5>In process Tasks</h5>
                    <h4>{inprocessCount}</h4>
                </div>
                <div>
                    <br />
                    <h5>Completed Tasks</h5>
                    <h4>{inprocessCount}</h4>
                </div>
            </div>
        </div>
    </div>
}

export default StudentTasks;