import React from "react";
import Pic from "../../imgs/blacklogo.png";
import "./Snav.css"
function Snav(props) {
    
    return <>
        <div class="anav-container">
            <nav class="side-nav">
                <ul class="nav-menu">
                    <img alt="LOGO" src={Pic} width={"100%"} style={{ marginTop: "-40px" }} />
                    <li class="nav-item" onClick={()=>props.changePage("doctors")} style={{borderTop:"1px black solid"}}><a><i class="fas fa-tachometer-alt"></i><span class="menu-text">Doctors</span></a></li>
                    <li class="nav-item" onClick={()=>props.changePage("students")}><a><i class="fas fa-user"></i><span class="menu-text">Students</span></a></li>
                    <li class="nav-item" onClick={()=>props.changePage("companies")}><a><i class="fas fa-file-alt"></i><span class="menu-text">Companies</span></a></li>
                    <li class="nav-item" onClick={()=>props.changePage("tasks")}><a><i class="fas fa-play "></i><span class="menu-text">Tasks</span></a></li>
                    <li class="nav-item" onClick={()=>props.changePage("feedback")}><a><i class="fas fa-sign-out-alt"></i><span class="menu-text">Feedback</span></a></li>
                </ul>
            </nav>
        </div>
    </>

}

export default Snav;