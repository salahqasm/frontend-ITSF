import React from "react";
import Pic from "../../imgs/college.png"
import juPic from "../../imgs/ju.jpg"
import Footer from "../../Components/Footer-component/Footer";
import "./Landing.css"
import { useNavigate } from "react-router-dom";
function Landing() {
    let navigate = useNavigate();
    function handleClick(e) {
        let t = e.target.value;
        if (t === 'login') {
            navigate("/login")
        } else if (t === 'signup') {
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
                        <input type="button" value={"login"} onClick={(e) => handleClick(e)} />

                        <input type="button" value={"signup"} onClick={(e) => handleClick(e)} />
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
                            <img src={juPic} />
                        </div>
                        <div class="content">
                            <h2>Card Three</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eget velit tristique, sollicitudin leo viverra, suscipit neque. Aliquam ut facilisis urna, in pretium nibh.  Morbi in leo in eros commodo volutpat ac sed dolor.</p>
                        </div>
                    </div>
                    <div class="card d-flex position-relative flex-column">
                        <div class='imgContainer'>
                            <img src={juPic} />

                        </div>
                        <div class="content">
                            <h2>Card Three</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eget velit tristique, sollicitudin leo viverra, suscipit neque. Aliquam ut facilisis urna, in pretium nibh.  Morbi in leo in eros commodo volutpat ac sed dolor.</p>
                        </div>
                    </div>
                    <div class="card d-flex position-relative flex-column">
                        <div class='imgContainer'>
                            <img src={juPic} />

                        </div>
                        <div class="content">
                            <h2>Card Three</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eget velit tristique, sollicitudin leo viverra, suscipit neque. Aliquam ut facilisis urna, in pretium nibh.  Morbi in leo in eros commodo volutpat ac sed dolor.</p>
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