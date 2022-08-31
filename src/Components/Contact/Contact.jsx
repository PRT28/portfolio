import React from 'react';
import './Contact.scss';
import Animation from './Animation/Animation';
import {FiInstagram} from 'react-icons/fi';
import {AiFillGithub, AiFillLinkedin, AiFillMail} from 'react-icons/ai';
import { Fade } from 'react-reveal';


const Contact = () => {
    return (
    <div id="contact" className='contact'>
        <div className='contact-container'>
            <div className='anima'>
                <a href="mailto:prithvirajtiwari28@gmail.com" rel="noopener noreferrer" target="_blank"><Animation /></a>
            </div>
            <div className='form'>
                <Fade bottom>
                <div className='heading'>Get in touch with me</div>
                <div className='sub'>Would love to hear from you on any of the following platform</div>
                <div className='container'>
                    <a><FiInstagram size={30} className="ico" /></a>
                    <a><AiFillGithub size={30} className="ico"  /></a>
                    <a><AiFillLinkedin size={30} className="ico"  /></a>
                    <a href="mailto:prithvirajtiwari28@gmail.com" rel="noopener noreferrer" target="_blank"><AiFillMail size={30} className="ico"  /></a>
                </div>
                <div className='sub-cont'>
                    <div>Also follow my photography handle: click_o_world28</div><a><FiInstagram size={20} className="ico" /></a> 
                </div>
                </Fade>
            </div>
        </div>
        <div className='footer'>
            <div>Designed & Built by Prithvi Raj Tiwari</div>
        </div>
    </div>
    );
}


export default Contact;