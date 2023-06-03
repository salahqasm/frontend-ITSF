import axios from "axios";
import React, { useEffect, useState } from "react";
import Select from 'react-select'
import makeAnimated from 'react-select/animated';
import "./FilterTasks.css"
function FilterTasks({ setFilter }) {
    const [selectedOption, setSelectedOption] = useState([]);
    const [options, setOptions] = useState([]);
    const [warning, setWarning] = useState("");
    const animatedComponents = makeAnimated();

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
    function handleSelectChange(selectedOption) {
        if (selectedOption.length == 0) {
            setFilter("all");
            setSelectedOption(selectedOption);
        } else if (selectedOption.length < 2) {
            setSelectedOption(selectedOption);
            console.log(selectedOption);
        }
    }

    const customStyles = {
        control: (provided, state) => ({
            ...provided,

            borderRadius: 20
        }),
    };
    function searchHandler() {
        if (selectedOption.length) {
            console.log(selectedOption[0].value);
            setWarning("");
            setFilter(selectedOption[0].value);
        }
        else
            setWarning("Please Select a Skill Above")
    }
    return <>
        <div className="filterTasks">
            <h6 style={{ marginTop: "auto" }}>Filter Tasks by Skill:</h6>
            <Select
                maxMenuHeight={200}
                value={selectedOption}
                onChange={handleSelectChange}
                closeMenuOnSelect={false}
                components={animatedComponents}
                placeholder="Choose One Skill "
                isMulti
                options={options}
                styles={customStyles}
                maxValueLength={5}
            />
            <button onClick={searchHandler} className="SBtask-search">Search</button>
        </div>
        <p style={{ textAlign: "center" }}><i>{warning}</i></p>
        <hr />
    </>
}

export default FilterTasks;