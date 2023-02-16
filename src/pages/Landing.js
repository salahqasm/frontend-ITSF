import React from "react";
import Pic from "../imgs/whitelogo.png";
import "./Landing.css"
import { useNavigate } from "react-router-dom";
function Landing() {
    let navigate = useNavigate();
    function handleClick(e) {
        let t = e.target.value;
        if (t == 'login') {
            navigate("/login")
        } else if (t == 'signup') {
            navigate("/signup")
        }
    }
    return <>
        <div className="Landing-main">
            <div className="Landing-header">
                <div className="Landing-left">
                    <div class="Landing-content">
                        <h2>ITS Freelance</h2>
                        <h2>ITS Freelance</h2>
                    </div>
                    <div className="Landing-buttons">
                        <br></br>
                        <h5>Join us now !</h5>
                        <input type="button" value={"login"} onClick={(e) => handleClick(e)} />

                        <input type="button" value={"signup"} onClick={(e) => handleClick(e)} />
                    </div>
                </div>
                {/* <div className="Landing-right">
                    <h2>Lets Start !</h2><br></br>
                    <input type="button" value={"login"} />

                    <input type="button" value={"signup"} />
                </div> */}
            </div>
            <div className="Landing-mid">
                <div className="Landing-what">
                    <h2>What is <span className="Landing-sh2">ITS Freelance</span>?</h2>
                    {/* <p>ITS Freelance is A website that connects companies with skilled students to finish IT related tasks under the leadership of their university doctors </p> */}
                    <p>Stands for "Inofrmation Technology Students Freelance" It is a website that is directed to IT department in <span style={{ color: "#01731c" }}>University Of Jordan</span>,
                        aims to connect students who have polished IT skills with
                        companies which have IT related tasks that in need for Part time or freelancers.</p>
                </div>
                <div className="Landing-what">
                    <h2>How does<span> it work?</span></h2>
                    <p>
                        In this system students will get approved by their
                        department doctors who are specialized in that specific skill after making an interview with them.
                        IT companies will view student's profiles to see their skills, previous projects if exists and approval doctor
                        name. After that they will assign the student to a paid task with a limited time that suits the task and the skills required.
                    </p>
                </div>

            </div>
            <div className="Landing-cards">
                {/* <div className="Landing-card">
                    <h4>General Objectives</h4>
                <ul>
                    <li>To make a connection between students and companies</li>
                    <li></li>
                </ul>
                </div> */}
                <div className="Landing-card">
                    <h4>Student Objectives</h4>
                    <ul>
                        <li>Help diligent students to make a source of income in their major</li>
                        <li>Increase the sense of competitive among students</li>
                        <li>improve and expand Student's knowledge about real IT tasks</li>
                    </ul>
                </div>
                <div className="Landing-card">
                    <h4>Company Objectives</h4>
                    <ul>
                        <li>Help companies that in need to get a small tasks done without hiring a new employee</li>
                        <li>Lower tasks costs relatively</li>
                    </ul>
                </div>
            </div>
        </div>
    </>
}

export default Landing;