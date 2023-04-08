import React from "react";
import ProfilePicture from "../../Picture-Component/ProfilePicture-component"
import "./Brief.css"
function Brief({ user }) {
    const now = new Date();
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const dateString = now.toLocaleDateString('en-US', options).replaceAll(',', '');
    const [month, day, year] = dateString.split(' ');
    return <>
        <div className="Brief-main">
            <div className="Brief-left">
                <ProfilePicture data={user?.profilePicture} width={150} />
                <div className="Brief-inside">
                    <h4>{now.getHours() >= 12 ? "Good Evening" : "Good Morning"} {user.name}</h4>
                    <p>Today's Date is :  {day + " - "+month+" - "+year}</p>
                    <p>You have published {user?.tasks?.length} Tasks</p>
                    
                </div>
            </div>
        </div>
    </>
}
export default Brief;