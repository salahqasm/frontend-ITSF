import React from "react";
import Pic from "../../imgs/blacklogo.png";
import "./Snav.css"
function Snav(props) {
    
    return <>
        <div className="anav-container">
            <nav className="side-nav">
                <ul className="nav-menu">
                    <img alt="LOGO" src={Pic} width={"100%"} style={{ marginTop: "-40px" }} />
                    <li className="nav-item" onClick={()=>props.changePage("Doctors")} style={{borderTop:"1px black solid"}}><i className="fas fa-tachometer-alt"></i><span className="menu-text">Doctors</span></li>
                    <li className="nav-item" onClick={()=>props.changePage("Students")}><i className="fas fa-user"></i><span className="menu-text">Students</span></li>
                    <li className="nav-item" onClick={()=>props.changePage("Companies")}><i className="fas fa-file-alt"></i><span className="menu-text">Companies</span></li>
                    <li className="nav-item" onClick={()=>props.changePage("Tasks")}><i className="fas fa-play "></i><span className="menu-text">Tasks</span></li>
                    <li className="nav-item" onClick={()=>props.changePage("Feedback")}><i className="fas fa-sign-out-alt"></i><span className="menu-text">Feedback</span></li>
                </ul>
            </nav>
        </div>
    </>

}

export default Snav;