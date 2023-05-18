import React, { useContext, useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import Context from "../../../ContextApi/Context"
import axios from "axios";
import Btask from "./Btask-component/Btask";
import Sbrief from "../Breif-component/Sbrief";
import "./StudentBrowse.css"
import FilterTasks from "./FilterTasks-component/FilterTasks";
function StudentBrowse() {
    const ctx = useContext(Context);
    const [cookie] = useCookies();
    const [tasks, setTasks] = useState();
    const [skills, setSkills] = useState();
    const [filter, setFilter] = useState("all");
    const [filteredTasks, setFilteredTasks] = useState();
    const config = {
        headers: {
            'authorization': `Bearer ${cookie.token}`
        }
    };
    async function getTasks() {
        try {
            const res = await axios.get('http://localhost:3001/task', config)
            setTasks(res?.data);
            setFilteredTasks(res?.data);
        } catch (err) {

        }

    }

    useEffect(() => {
        getTasks();
    }, [])
    useEffect(() => {
        if (filter === "all") {
            setFilteredTasks(tasks);
        } else {
            const filtered = tasks?.filter(obj => obj.skills.some(item => item.name === filter));
            setFilteredTasks(filtered);
        }
    }, [filter])
    return <>
        <Sbrief user={ctx.user} wdth="100px" />
        <div className="SBtask-main">
            <FilterTasks setFilter={setFilter} />
            {filteredTasks?.length ?
                filteredTasks?.map(e => <Btask task={e} />) :
                <><h4 style={{textAlign:"center"}}>No Published Tasks</h4></>
            }
        </div>
        <br />
    </>
}

export default StudentBrowse;