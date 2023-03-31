import React from "react";
import "./Filter.css"
function Filter() {
    return <>
        <div className="mytasks-filter">
            <form>
                <p>Filter My Tasks:</p>
                <label><input type={"radio"} name="mytasksfilter" /> All Tasks</label>
                <br />
                <label><input type={"radio"} name="mytasksfilter" /> In Process</label>
                <br />
                <label><input type={"radio"} name="mytasksfilter" /> Completed</label>
            </form>
        </div>
    </>
}

export default Filter;