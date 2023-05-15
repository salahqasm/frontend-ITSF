import axios from "axios";
import React, { useEffect, useState } from "react";
import { useCookies } from "react-cookie";

function Tasks() {
    const [cookie] = useCookies();
    const [tasks, setTasks] = useState();
    async function getTasks() {
        try {
            const config = {
                headers: {
                    'authorization': `Bearer ${cookie.token}`
                }
            };
            const res = await axios.get('http://localhost:3001/alltasks', config)
            setTasks(res.data);
        } catch (err) {
            console.log(err);
        }
    }
    useEffect(() => {
        getTasks();
    }, [])
    return <>

    </>
}

export default Tasks;