import React from "react";
import "./PersonalInfo.css"
import { useCookies } from "react-cookie";
import Approvedby from "../Approvedby-component/Approvedby";

function PersonalInfo() {
    const [cookie] = useCookies();
    const userInfo = cookie.user;
    
    return <>

        {
            userInfo.userType === "student" ? <>
                <table className="PersonalInfo-table">
                    <tbody><tr>
                
                    </tr>
                        <tr>
                            <th>Email: </th>
                            <input 
                            value={userInfo.email} disabled
                            />
                        </tr>
                        <tr>
                            <th>Skill: </th>
                            <td>{userInfo.skill}</td>
                        </tr>
                        
                        {userInfo.purl &&
                            <tr>
                                <th>Previous projects: </th>
                                <td>{userInfo.purl}</td>
                            </tr>}
                            
                    </tbody>
                </table>
            </>
                : <>
                </>
        }
    </>
}
export default PersonalInfo;