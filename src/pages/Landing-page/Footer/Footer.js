import React from "react";
import "./Footer.css"
function Footer() {
    return <>
        <div className="Footer-main">
            <div className="Footer-logo">
                <h2>ITS Freelance</h2>
            </div>
            <div className="Footer-mid">
                <h4>Contact</h4>
                <p>- University of Jordan, King Abdullah II School of Information Technology</p>
                <p>- 050000000</p>
            </div>
            <div className="Footer-last">
                <h4>Help</h4>
                <p>- User manual</p>
                <p>- Email: ITSFreelance@outlook.com</p>
            </div>
        </div>
    </>
}
export default Footer;