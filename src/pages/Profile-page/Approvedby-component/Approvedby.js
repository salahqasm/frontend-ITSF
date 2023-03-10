import React, { useEffect, useState } from "react";
import axios from "axios";
import { useCookies } from "react-cookie";

function Approvedby({ id }) {
    const [doc, setDoc] = useState(null);
    const [cookie] = useCookies();
    const config = {
        headers: {
            'authorization': `Bearer ${cookie.token}`
        }
    };
    async function getDoctor() {
        try {
            const res = await axios.get(`http://localhost:3001/doctor/${id}`, config);
            setDoc(res.data);
        } catch (err) {
            console.log(err.response.data);
        }
    }
    useEffect(() => {
        getDoctor();
    }, [])
    return <>
        {doc &&<> 
        
        <h6>This account is approved by: Dr. {doc.fname} {doc.lname}</h6>
        
        </>}


    </>
}

export default Approvedby;