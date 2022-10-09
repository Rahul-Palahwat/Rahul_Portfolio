import React, { useState } from 'react'
import { FaUserAlt } from 'react-icons/fa'
import { MdEmail, MdAlternateEmail } from 'react-icons/md'
import emailjs from 'emailjs-com';
import details from '../Email';
import { AiFillGithub, AiFillLinkedin, AiFillInstagram } from 'react-icons/ai'
const Contact = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(e.target,"data");
        emailjs.sendForm("service_7y7i11a", "request_jdcul0v", e.target, "RgElPJPGlldyZiTU5")
            .then((result) => {
                alert("Message Sent, I will get back to you soon...", result.text);
                setEmail('')
                setMessage('')
                setName('')
            },
                (error) => {
                    alert("An error occurred, Please try again", error.text);
                });
    }
    return (
        <div id="contact">
            <div className="login-div">
                <h1 className='heading' style={{ marginBottom: '0px' }}>Contact Me</h1>
                <form onSubmit={handleSubmit}>
                    <div className="fields">
                        <div ><FaUserAlt /><input placeholder="Name" name="name" onChange={(e) => { setName(e.target.value) }} value={name} /></div>
                        <div><MdAlternateEmail /><input name='email' value={email} placeholder="Email" onChange={(e) => { setEmail(e.target.value) }} /></div>
                        <div className='message'><MdEmail /><textarea value={message} name='message' onChange={(e) => { setMessage(e.target.value) }} type="text" placeholder="Message" /></div>
                    </div>
                    <button className="signin-button">Send</button>
                </form>
            </div>
            <h2 align="center">You can also directly email me on rahulpalahwat@gmail.com. Following are my social links.</h2>
            <div className='social-links'>
                <a href="https://www.linkedin.com/in/rahul-kumar-1482041a0/" target='_blank'><AiFillLinkedin /></a>
                <a href="https://github.com/Rahul-Palahwat" target='_blank'><AiFillGithub /></a>
                {/* <a href="https://www.instagram.com/tarsh333/" target='_blank'><AiFillInstagram /></a> */}
            </div>
        </div>
    )
}

export default Contact
