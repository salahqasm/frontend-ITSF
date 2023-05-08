import React from "react";
import Pic from "../../imgs/college.png"
import juPic from "../../imgs/ju.jpg"
import handShake from "../../imgs/handshake.jpg"
import students from "../../imgs/students.jpg"
import university from "../../imgs/university.jpg"
import Footer from "../../Components/Footer-component/Footer";
import "./Landing.css"
import { useNavigate } from "react-router-dom";
function Landing() {
    let navigate = useNavigate();
    function handleClick(e) {
        let t = e.target.value;
        if (t === 'Login') {
            navigate("/login")
        } else if (t === 'Signup') {
            navigate("/signup")
        }
    }
    return <>
        <div className="Landing-main" >
            <div className="Landing-header" style={{ backgroundImage: `url(${Pic})`, backgroundSize: "cover", backgroundRepeat: "no-repeat" }}>
                <div className="Landing-left">
                    <div className="Landing-content">
                        <h2>ITS Freelance</h2>
                        <h2>ITS Freelance</h2>
                    </div>

                    <div className="Landing-buttons">
                        <br></br>
                        <h5>Join us now !</h5>
                        <input type="button" value={"Login"} onClick={(e) => handleClick(e)} />

                        <input type="button" value={"Signup"} onClick={(e) => handleClick(e)} />
                    </div>
                </div>
            </div>
            <div className="Landing-mid">
                <div className="Landing-what">
                    <h2>What is <span className="Landing-sh2">ITS Freelance</span>?</h2>
                    {/* <p>ITS Freelance is A website that connects companies with skilled students to finish IT related tasks under the leadership of their university doctors </p> */}
                    <p>Stands for "Inofrmation Technology Students Freelance" <br /> It is a website that is directed to IT department in <a target="_blank" href="http://ju.edu.jo/Home.aspx"><span style={{ color: "#01731c" }}>University Of Jordan</span></a>,
                        aims to connect students who have polished IT skills with
                        companies which have IT related tasks that in need for Part time or freelancers.
                        These students are being interviewed by instructional staff that is specialized in their intended skill to make
                        sure they are good enough to start working on real tasks in the industry</p>
                </div>
                <div className="Landing-what">
                    <img alt="Unvicersity of Jordan" src={juPic} height="" />
                </div>

            </div>
            <div className="Landing-cards">

                <div class="container d-flex align-items-center justify-content-center position-relative flex-wrap">
                <div class="card d-flex position-relative flex-column">
                        <div class='imgContainer'>
                            <img src={university} />

                        </div>
                        <div class="content">
                            <h4>University Objectives</h4>
                            <ul>
                                <li>Gain extra good reputation.</li>
                                <li>Improve students qualifications.</li>
                                <li>Increase after graduation employment rate.</li>

                            </ul>
                        </div>
                    </div>
                    <div class="card d-flex position-relative flex-column">
                        <div class='imgContainer'>
                            <img src={handShake} />
                        </div>
                        <div class="content">
                            <h4>Company Objectives</h4>
                            <ul>
                                <li>Will get their tasks done with relatively lower costs.</li>
                                <li>Spread the name of startups.</li>
                                <li>Might find a part-time employees.</li>
                                <li>Social contibution point.</li>

                            </ul>
                        </div>
                    </div>
                    
                    <div class="card d-flex position-relative flex-column">
                        <div class='imgContainer'>
                            <img src={students} />
                        </div>
                        <div class="content">
                            <h4>Students Objectives</h4>
                            <ul>
                                <li>Improve your skills by solving real tasks.</li>
                                <li>Make your own source of income.</li>
                                <li>Enter a challenging environment with your colleagues.</li>
                            </ul>
                        </div>
                    </div>
                </div>
                
            </div>
            <div>
                <Footer />
            </div>

        </div>
    </>
}

export default Landing;