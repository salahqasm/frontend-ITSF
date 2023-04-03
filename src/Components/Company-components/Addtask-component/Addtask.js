import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import "./Addtask.css";
import Select from 'react-select'
import makeAnimated from 'react-select/animated';
import { useCookies } from "react-cookie";
function Addtask({ id, close }) {
    const [cookie] = useCookies();
    const [selectedOption, setSelectedOption] = useState([]);
    const [options, setOptions] = useState([]);
    const animatedComponents = makeAnimated();
    const config = {
        headers: {
            'authorization': `Bearer ${cookie.token}`
        }
    };
    function handleSelectChange(selectedOption) {
        if (selectedOption.length <= 5) {
            setSelectedOption(selectedOption);
            console.log(selectedOption);
        }
    }
    async function getSkills() {
        const res = await axios.get('http://localhost:3001/getskill');
        setOptions([]);
        let temp = [];
        res.data.map((elem) => {
            temp.push({ id: elem.id, value: elem.name, label: elem.name })
        })
        setOptions(temp);
    }
    useEffect(() => {
        getSkills();
    }, []);

    const customStyles = {
        control: (provided, state) => ({
            ...provided,
            width: 550,
            borderRadius: 20
        }),
    };
    async function submitHandler(e) {
        e.preventDefault();
        let skillsID = [];
        selectedOption.map((elem) => {
            skillsID.push(elem.id);
        })
        const task = {
            title: e.target.title.value,
            description: e.target.description.value,
            credit: e.target.credit.value,
            requiredSkills: skillsID,
            date: e.target.date.value
        }
        console.log(task);
        try {
            const res = await axios.post(`http://localhost:3001/addtask/${id}`, task, config)
            console.log(res.data);
            close(o => !o)
        } catch (err) {
            console.log(err.message);
        }
    }
    return <div className="Addtask-main">
        <h3>Publish New Task</h3>
        <form className="Addtask" onSubmit={e => submitHandler(e)}>
            <labe>Task Title:</labe>
            <input type={"text"} name="title" placeholder="Title" required />
            <labe>Description:</labe>
            <textarea rows="10" name="description" placeholder="Task Description" required />
            <div className="Addtask-grid2">
                <labe>Required Skills:</labe>
                <Select
                    value={selectedOption}
                    onChange={handleSelectChange}
                    closeMenuOnSelect={false}
                    components={animatedComponents}
                    placeholder="Choose your Skills (up to 5 skills)"
                    isMulti
                    options={options}
                    styles={customStyles}
                    maxValueLength={5}
                />
                <label>Due Date:</label>
                <input type={"date"} name="date" required />
                <label>Cost:</label>
                <input type={"number"} name="credit" min={5} required />

            </div>
            <div className="Addtask-button">
                <button type="submit" >Publish</button>
            </div>
        </form >

    </div >
}

export default Addtask;