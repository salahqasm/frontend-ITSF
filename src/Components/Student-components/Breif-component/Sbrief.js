import React from "react";
import ProfilePicture from "../../Picture-Component/ProfilePicture-component"
import "./Sbrief.css"
function Sbrief({ user,wdth }) {
    const now = new Date();
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const dateString = now.toLocaleDateString('en-US', options).replaceAll(',', '');
    const [month, day, year] = dateString.split(' ');
    
    return <>
        <div className="SBrief-main">
            <div className="SBrief-left">
                <ProfilePicture data={user?.profilePicture} width={wdth} />
                <div className="SBrief-inside">
                    <h4>{now.getHours() >= 12 ? "Good Evening" : "Good Morning"} {user?.name?.split(" ")[0]}</h4>
                    <p>Today's Date is :  {day + " - "+month+" - "+year}</p>
                </div>
            </div>
        </div>
    </>
}
export default Sbrief;