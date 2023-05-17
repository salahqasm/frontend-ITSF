import axios from "axios";
import React, { useState } from "react";
import { useCookies } from "react-cookie";
import "./Feedback-form.css"
function FeedbackForm() {
    const [cookie] = useCookies();
    const [fb, setFb] = useState({
        email: "",
        title: "",
        message: ""
    });
    function handleChange(e) {
        const { name, value } = e.target;
        setFb(prevState => ({
            ...prevState,
            [name]: value
        }));
    }
    async function submitHandler(e) {
        e.preventDefault();
        let fb = {
            email: cookie.user.email,
            title: e.target.title.value,
            message: e.target.msg.value
        };
        const config = {
            headers: {
                'authorization': `Bearer ${cookie.token}`
            }
        };
        setFb(fb);
        try {
            const res = await axios.post('http://localhost:3001/setfeedback', fb, config);
            setFb({
                email: "",
                title: "",
                message: ""
            })
        } catch (err) {
            console.log(err);
        }
    }
    return <>
        <div className="Feedback-header">
            <h1>Hey, {cookie.user.name}</h1>
            <h2>Don't Hesitate to Send your Feedback</h2>
        </div>
        <div className="Feedback-main">
            <div className="Feedback-inner">
                <form onSubmit={(e) => { submitHandler(e) }}>
                    <label htmlFor="title">Title</label>
                    <input className="Feedback-inner-input" id="title" value={fb.title} onChange={e => handleChange(e)} name="title" type={"text"} placeholder="Feedback Title" maxLength="100" required />
                    <label htmlFor="msg">Message</label>
                    <textarea id="msg" name="message" rows="10" maxLength="1000" value={fb.message} onChange={e => handleChange(e)} placeholder="Write your message here!" required />
                    <br />
                    <br />
                    <input type="submit" className="Feedbacksubmit" value="Submit" />
                    <br />

                </form>
            </div>
        </div>
    </>
}

export default FeedbackForm;