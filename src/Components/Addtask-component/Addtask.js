import React from "react";
import { useState, useEffect } from "react";
import "./Addtask.css";
import Select from 'react-select'
import makeAnimated from 'react-select/animated';
function Addtask() {
    const [selectedOption, setSelectedOption] = useState([]);
    const [options, setOptions] = useState([{ value: "test", label: "test" }, { value: "test1", label: "test1" }]);
    const animatedComponents = makeAnimated();
    function handleSelectChange(selectedOption) {
        if (selectedOption.length <= 5) {
            setSelectedOption(selectedOption);
            console.log(selectedOption);
        }
    }

    const customStyles = {
        control: (provided, state) => ({
            ...provided,
            width: 550,
            borderRadius: 20
        }),
    };

    return <div className="Addtask-main">
        <h3>Publish New Task</h3>
        <form className="Addtask">
            <labe>Task Title:</labe>
            <input type={"text"} placeholder="Title" required />
            <labe>Description:</labe>
            <textarea rows="10" placeholder="Task Description" required />
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
                <input type={"date"} required />
                <label>Cost:</label>
                <input type={"number"} required />

            </div>
            <div className="Addtask-button">
                <button type="submit" >Publish</button>
            </div>
        </form >
        
    </div >
}

export default Addtask;