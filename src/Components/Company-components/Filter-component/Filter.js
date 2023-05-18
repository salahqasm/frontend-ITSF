import React from "react";
import "./Filter.css"
function Filter({ filter, setFilter }) {
    const handleOptionChange = (e) => {
        setFilter(e.target.value);
    }
    return <>
        <div className="mytasks-filter">
            <form>
                <p><strong>Filter My Tasks:</strong></p>
                <label><input type={"radio"} name="mytasksfilter"
                    value="all"
                    checked={filter === 'all'}
                    onChange={handleOptionChange} /> All Tasks</label>
                <br />
                <label><input type={"radio"} name="mytasksfilter"
                    value="available"
                    checked={filter === 'available'}
                    onChange={handleOptionChange} /> Available</label>
                <br />
                <label><input type={"radio"} name="mytasksfilter"
                    value="inprocess"
                    checked={filter === 'inprocess'}
                    onChange={handleOptionChange}
                /> In Progress</label>
                <br />
                <label><input type={"radio"} name="mytasksfilter"
                    value="done"
                    checked={filter === 'done'}
                    onChange={handleOptionChange} /> Completed</label>
            </form>
        </div>
    </>
}

export default Filter;