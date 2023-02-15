import React from "react";
import Pic from "../imgs/whitelogo.png";
import "./Landing.css"
function Landing() {
    return <>
        <div className="Landing-main">
            <div className="Landing-header">
                <div className="Landing-left">
                    <img alt="LOGO" id="Landing-logo" src={Pic}  />
                    <br></br>
                    {/* <h1>Welcome!</h1> */}
                    <p>ITS Freelance is A website aims to connect skilled students at IT college in University of jordan with companies that have IT related tasks</p>
                </div>
                <div className="Landing-right">
                    <h2>Lets Start !</h2>
                    <input type="button" value={"login"}/>
                    
                    <input type="button" value={"signup"}/>
                </div>
            </div>

        </div>
    </>
}

export default Landing;