import React from "react";
import Pic from "../../imgs/blacklogo.png";
import "./Snav.css"
function Snav() {
    return <>
        <div class="container">
            <nav class="side-nav">
                <ul class="nav-menu">
                    <img alt="LOGO" src={Pic} width={"100%"} style={{marginTop:"-40px"}} />
                    <li class="nav-item"><a href="#"><i class="fas fa-tachometer-alt"></i><span class="menu-text">Main</span></a></li>
                    <li class="nav-item"><a href="#"><i class="fas fa-user"></i><span class="menu-text">Comapnies</span></a></li>
                    <li class="nav-item active"><a href="#"><i class="fas fa-file-alt"></i><span class="menu-text">Students</span></a></li>
                    <li class="nav-item"><a href="#"><i class="fas fa-play "></i><span class="menu-text">Doctors</span></a></li>
                    <li class="nav-item"><a href="#"><i class="fas fa-sign-out-alt"></i><span class="menu-text">Feedback</span></a></li>
                </ul>
            </nav>
        </div>
    </>

}

export default Snav;