import "./AddDoctor.css"
import React from "react";
import axios from "axios";
import { useState } from "react";
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
function AddDoctor() {


    async function submitHandler(e) {
        e.preventDefault();
        try {
                let doctor = {
                    fname: e.target.fname.value,
                    lname: e.target.lname.value,
                    email: e.target.email.value,
                    specialization: e.target.specialization.value,
                    department:e.target.department.value,
                    role:e.target.role.value,
                    password: e.target.password.value
                }
                const res = await axios.post('http://localhost:3001/doctorsignup', doctor)
                window.location.reload(false);
        } catch (err) {
            console.log(err);
            window.alert("Email already exists please try another email")
        }

    }
    return <>
        <Popup className="AdminAddDoctorPopup" trigger={<button className="AdminAddDoctor-button"> Add new Doctor</button>} modal nested>
            {close => <form className="AdminAddDoctor" onSubmit={(e) => { submitHandler(e) }}>
                <input type="text" id="fname" name="fname" placeholder="First Name" required />
                <input type="text" id="lname" name="lname" placeholder="Last Name" required />
                <input type="email" id="email" name="email" placeholder="Enter Your E-mail" required />
                <input type="text" id="specialization" name="specialization" placeholder="Specialization" required />
                <input type="text" id="department" name="department" placeholder="Department" required />
                <input id="pswrd2" name="password" type="password" placeholder="Creat Password" required />
                <label>Role:</label>
                <select name="role" id="role" title="Role" required>
                    <option value="doctor">doctor</option>
                    <option value="admin" >admin</option>
                </select>

                <button className="AdminAddDoctor-button" type="submit" value="Sign Up" >Submit</button>
            </form>}
        </Popup>

    </>
}

export default AddDoctor;