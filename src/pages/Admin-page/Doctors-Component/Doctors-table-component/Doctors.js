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

    async function submitHandler(e) {
        e.preventDefault();
        try {
            let doctor = {
                fname: e.target.fname.value,
                lname: e.target.lname.value,
                email: e.target.email.value,
                specialization: e.target.specialization.value,
                department: e.target.department.value,
                role: e.target.role.value,
                password: e.target.password.value
            }
            const res = await axios.post('http://localhost:3001/doctorsignup', doctor)
            const alldoctors = await axios.get('http://localhost:3001/alldoctors', config, [])

            setOpen(o => !o)
        } catch (err) {
            console.log(err);
            window.alert("Email already exists please try another email")
        }

    }
    return <>
        <AddDoctor commitChange={setDoctors} />
        <table className="doctors-table">
            <thead>
                <tr>                    <th>ID</th>
                    <th>First Name</th>
                    <th>Last Name</th>
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
                            <td>{elem.fname}</td>
                            <td>{elem.lname}</td>
                            <td>{elem.email}</td>
                            <td>{elem.specialization}</td>
                            <td>{elem.department}</td>
                            <td>{elem.role}</td>
                            <td><span title="delete" onClick={() => deleteHandler(elem)}>❌</span>
                                <span onClick={() =>{ setOpen(o => !o); setUpdate(elem)}} title="edit">✏</span>

                            </td>
                        </tr>
                    })
                }
                <Popup open={open} closeOnDocumentClick onClose={closeModal}>
                    <form className="AdminAddDoctor" onSubmit={(e) => { submitHandler(e); }}>
                        <h1>Edit Doctor Account</h1>
                        <label for="fname">First Name: </label>
                        <input type="text" id="fname" name="fname" placeholder="First Name" value={update.fname} onChange={(event)=>setUpdate(...update.fname=event.target.value)} required />
                        <label for="lname">Last Name: </label>
                        <input type="text" id="lname" name="lname" placeholder="Last Name" value={update.lname} onChange={(event)=>setUpdate(...update.lname=event.target.value)} required />
                       <br></br>
                        <label for="email">Email: </label>
                        <input type="email" id="email" name="email" placeholder="Email" value={update.email} onChange={(event)=>setUpdate(...update.email=event.target.value)} required />
                        <label for="specialization">Specialization: </label>
                        <input type="text" id="specialization" name="specialization" placeholder="Specialization"  value={update.specialization} onChange={(event)=>setUpdate(...update.specialization=event.target.value)} required />
                        <br></br>
                        <label for="department">Department:</label>
                        <input type="text" id="department" name="department" placeholder="Department" value={update.department} onChange={(event)=>setUpdate(...update.department=event.target.value)} required />
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