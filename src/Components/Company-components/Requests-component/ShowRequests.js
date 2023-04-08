import React, { useEffect, useState } from "react";
import Popup from 'reactjs-popup';
import "./ShowRequests.css"
function ShowRequests({ requests }) {
    const [open, setOpen] = useState(false);
    const closeModal = () => setOpen(false);
    return <>
        <button type="button" className="showresult-button" onClick={() => setOpen(o => !o)}>
            Show Requests
        </button>
        <Popup open={open} closeOnDocumentClick onClose={closeModal}>
            <div className="showrequests">
                <table>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Visit</th>
                        <th>Accept</th>
                        <th>Deny</th>
                    </tr>
                    {requests.map(elem =>
                        <tr>
                            <td>{elem.name}</td>
                            <td>{elem.email}</td>
                            <td><a href="#">View Page</a></td>
                            <td><input type="button" value={"Accept"}/></td>
                            <td><input type="button" value={"Deny"}/></td>

                        </tr>
                        
                    )}
                    
                </table>
            </div>
        </Popup>
    </>
}
export default ShowRequests;