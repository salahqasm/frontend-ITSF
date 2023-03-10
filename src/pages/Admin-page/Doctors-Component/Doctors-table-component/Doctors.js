import "./Doctors.css"
import React from "react";
import axios from "axios";
import { useCookies } from 'react-cookie';
import { useState, useEffect } from "react";
import Popup from 'reactjs-popup';
import AddDoctor from "../AddDoctor-coponent/AddDoctor";
function Doctors() {
    const [cookies] = useCookies();
    const [doctors, setDoctors] = useState([]);
    const [open, setOpen] = useState(false);
    const [update, setUpdate] = useState({});
    const closeModal = () => setOpen(false);
    const config = {
        headers: {
            'authorization': `Bearer ${cookies.token}`
        }
    };
    async function getDoctors() {
        const res = await axios.get('http://localhost:3001/alldoctors', config, [])
        setDoctors(res?.data);
    }
    useEffect(() => {
        getDoctors();
    }, [])
    async function deleteHandler(elem) {
        try {
            const res = await axios.delete(`http://localhost:3001/deletedoctor/${elem.id}`, config, []);
            setDoctors(res?.data);
        } catch (err) {
            console.log(err);
        }
    }
    function handleChange(e) {
        const { name, value } = e.target;
        setUpdate(prevState => ({
            ...prevState,
            [name]: value
        }));
    }
    async function submitHandler(e) {
        e.preventDefault();
        try {
            await axios.put(`http://localhost:3001/updatedoctor/${update.id}`, update, config)
            setOpen(o => !o)
        } catch (err) {
            console.log(err);
        }

    }
    return <>
        <AddDoctor commitChange={setDoctors} />
        <table className="doctors-table">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Specialization</th>
                    <th>Department</th>
                    <th>Status</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {

                    doctors.map((elem) => {
                        console.log(elem);
                        return <tr key={elem.id}>
                            <td>{elem.id}</td>
                            <td>{elem.name}</td>
                            <td>{elem.email}</td>
                            <td>{elem.specialization}</td>
                            <td>{elem.department}</td>
                            <td>{elem.role}</td>
                            <td><span title="delete" onClick={() => deleteHandler(elem)}>❌</span>
                                <span onClick={() => { setOpen(o => !o); setUpdate(elem) }} title="edit">✏</span>

                            </td>
                        </tr>
                    })
                }
                <Popup open={open} closeOnDocumentClick onClose={closeModal}>
                    <form className="AdminAddDoctor" onSubmit={(e) => { submitHandler(e); }}>
                        <h1>Edit Doctor Account</h1>
                        <label htmlFor="name">Full Name: </label>
                        <input type="text" id="name" name="name" placeholder="Full Name" value={update.name} onChange={e => handleChange(e)} required />
                        <br></br>
                        <label htmlFor="email">Email: </label>
                        <input type="email" id="email" name="email" placeholder="Email" value={update.email} onChange={e => handleChange(e)} required />
                        <label htmlFor="specialization">Specialization: </label>
                        <input type="text" id="specialization" name="specialization" placeholder="Specialization" value={update.specialization} onChange={e => handleChange(e)} required />
                        <br></br>
                        <label htmlFor="department">Department:</label>
                        <input type="text" id="department" name="department" placeholder="Department" value={update.department} onChange={e => handleChange(e)} required />
                        {/* <input id="pswrd2" name="password" type="password" placeholder="Creat Password" value={elem.department}required /> */}
                        <br></br>
                        <label>Role:</label>
                        <select name="role" id="role" title="Role" required>
                            <option value="doctor">doctor</option>
                            <option value="admin" >admin</option>
                        </select>
                        <br></br>
                        <button className="AdminAddDoctor-button" type="submit" value="Sign Up" >Submit</button>
                    </form>
                </Popup>
            </tbody>
        </table>

    </>
}

export default Doctors;