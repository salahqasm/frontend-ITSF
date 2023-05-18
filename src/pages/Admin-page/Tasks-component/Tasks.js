import axios from "axios";
import React, { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import ViewTask from "./ViewTask-component/ViewTask";
import Popup from 'reactjs-popup';

function Tasks() {
    const [open, setOpen] = useState(false);
    const closeModal = () => setOpen(false);
    const [cookie] = useCookies();
    const [tasks, setTasks] = useState([]);
    const [view, setView] = useState();
    function handleView(elem) {
        setView(elem);
        setOpen(o => !o);
    }
    const config = {
        headers: {
            'authorization': `Bearer ${cookie.token}`
        }
    };
    async function getTasks() {
        try {
            const res = await axios.get('http://localhost:3001/alltasks', config)
            setTasks(res?.data);
        } catch (err) {
            console.log(err);
        }
    }
    useEffect(() => {
        getTasks();
    }, [])

    async function deleteHandler(id) {
        try {
            const res = await axios.delete(`http://localhost:3001/deleteTask/${id}`, config, [])
            getTasks();
        } catch (err) {
            console.log(err);
        }
    }
    return <>
        <table className="students-table">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Title</th>
                    <th>Published by</th>
                    <th>Status</th>
                    <th>View</th>
                    <th>Delete</th>
                </tr>
            </thead>
            <tbody>
                {
                    tasks?.map((elem) => {
                        return <tr key={elem?.id}>
                            <td>{elem?.id}</td>
                            <td>{elem?.title}</td>
                            <td>{elem?.company.email}</td>
                            <td>{elem?.status}</td>
                            <td><input type="button" className="AdminAddDoctor-button active-comp" onClick={() => handleView(elem)} value="View" /></td>
                            <td><span title="delete" className="clicky-icon" onClick={() => deleteHandler(elem?.id)}>❌</span></td>
                        </tr>
                    })
                }
                <Popup open={open} closeOnDocumentClick onClose={closeModal} closeOnEscape={false}>
                    <ViewTask task={view} />
                </Popup>
            </tbody>
        </table>
    </>
}

export default Tasks;