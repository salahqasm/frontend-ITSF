import React, { useEffect, useState } from "react";
import { useCookies } from 'react-cookie';
import Popup from 'reactjs-popup';
import "./Edittask.css"
import axios from "axios";
import Select from 'react-select'
import makeAnimated from 'react-select/animated';

function Edittask({ task }) {
    const [open, setOpen] = useState(false);
    const closeModal = () => setOpen(false);
    const [selectedOption, setSelectedOption] = useState([]);
    const [options, setOptions] = useState([]);
    const animatedComponents = makeAnimated();
    const [tk, setTk] = useState(task);
    const [cookie] = useCookies();

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
    function handleChange(e) {
        const { name, value } = e.target;
        setTk(prevState => ({
            ...prevState,
            [name]: value
        }));
    }
    function handleSelectChange(selectedOption) {
        if (selectedOption.length <= 5) {
            setSelectedOption(selectedOption);
            console.log(selectedOption);
        }
    }
    const config = {
        headers: {
            'authorization': `Bearer ${cookie.token}`
        }
    };
    async function submitHandler(e) {
        e.preventDefault();

        try {
            let skillsID = [];
            selectedOption.map((elem) => {
                skillsID.push(elem.id);
            })
            const edittask = {
                title: e.target.title.value,
                description: e.target.description.value,
                credit: e.target.credit.value,
                requiredSkills: skillsID,
                date: e.target.date.value
            }
            const res = await axios.put(`http://localhost:3001/edittask/${task.id}`, edittask, config)
            console.log(res);
            setOpen(false);
            window.location.reload()
        } catch (err) {
            console.log(err);
        }
    }
    return <>
        <button type="button" className="editbutton" onClick={() => setOpen(o => !o)}>
            Edit
        </button>
        <Popup open={open} closeOnDocumentClick onClose={closeModal} closeOnEscape={false}>
            <div className="Edittask-main" style={{ maxHeight: '90vh', overflowY: 'scroll' }}>

                <h3>Edit ({task.title.trim()}) Task</h3>
                <hr />
                <form className="Edittask" onSubmit={e => submitHandler(e)}>
                    <label>New Title:</label>
                    <input type={"text"} name="title" placeholder="Title" value={tk.title} onChange={(e) => { handleChange(e) }} required />
                    <label>Description:</label>
                    <textarea rows="10" name="description" placeholder="Task Description" value={tk.description} onChange={(e) => { handleChange(e) }} required />
                    <div className="Edittask-grid2">
                        <label>Required Skills:</label>
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
                        <input type={"date"} name="date" value={tk.date} onChange={(e) => { handleChange(e) }} required />
                        <label>Cost:</label>
                        <input type={"number"} name="credit" min={5} value={tk.credit} onChange={(e) => { handleChange(e) }} required />

                    </div>
                    <div className="Edittask-button">
                        <button type="submit" >Save Changes</button>
                    </div>
                </form >

            </div >
        </Popup>
    </>
}
export default Edittask;