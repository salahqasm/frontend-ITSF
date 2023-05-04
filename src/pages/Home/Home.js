import React, { useContext } from "react";
import "./Home.css"
import Context from "../../ContextApi/Context"
import bg from "../../imgs/homebg.png";
import { useNavigate } from 'react-router-dom';

function Home() {
    const ctx = useContext(Context);
    const navigate = useNavigate();
    const now = new Date();
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const dateString = now.toLocaleDateString('en-US', options).replaceAll(',', '');
    const [month, day, year] = dateString.split(' ');
    console.log(ctx.user);
    return <>
        <div className="Home-main" style={{ backgroundImage: `url(${bg})`, backgroundSize: "cover", backgroundRepeat: 'no-repeat' }}>
            <h1>Welcome, {ctx?.user.name}</h1>
            <h6>Today's Date is :  {day + " - " + month + " - " + year}</h6>

            <div className="Home-cards">
                <div className="Home-card" onClick={() => { navigate("/profile") }}>
                    <h3>Profile Page</h3>
                    <p>Edit your profile and change your information</p>
                </div>
                {ctx?.user.userType == "student" && <>

                    <div className="Home-card" onClick={() => { navigate("/browsetasks") }}>
                        <h3>Browse Tasks</h3>
                        <p>Browse published tasks and send requests.</p>
                    </div>
                    <div className="Home-card" onClick={() => { navigate("/mytasks") }}>
                        <h3>My tasks</h3>
                        <p>View your Requested, In process and Completed Tasks</p>
                    </div>
                </>}
                {ctx?.user.userType == "company" && <>
                    <div className="Home-card" onClick={() => { navigate("/mytasks") }}>
                        <h3>My tasks</h3>
                        <p>View and edit your published tasks</p>
                    </div>
                    <div className="Home-card" onClick={() => { navigate("/feedback") }}>
                        <h3>Feedback</h3>
                        <p>Send us your feedback</p>
                    </div>
                </>}

            </div>
        </div>
    </>
}
export default Home;    