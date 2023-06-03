import React from "react";
import "./Footer.css"
import favicon from "../../imgs/favicon.png"
function Footer() {
    return <>
        <div className="Footer-main">
            <div className="Footer-logo">
                {/* <img src={favicon} width={120}  /> */}
                <h2>ITS Freelance</h2>
            </div>
            <div className="Footer-mid">
                <h4>Contact</h4>
                <p>- University of Jordan, King Abdullah II School of Information Technology</p>
                <p>- kasit@ju.edu.jo</p>
            </div>
            <div className="Footer-last">
                <h4>Help</h4>
                <p>- Email: ITSFreelance@outlook.com</p>
                
                <p>- Phone Number: +962 6 5355 000</p>
            </div>
        </div>
    </>
}
export default Footer;