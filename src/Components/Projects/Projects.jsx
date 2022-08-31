import React, {useState} from 'react';
import './Projects.scss'
import {FiExternalLink} from 'react-icons/fi';
import {IoIosArrowDropdown} from 'react-icons/io'
import { Fade } from 'react-reveal';

import Animation from './Animation/Animation';

const Folder = props => {

    const [show, setShow] = useState(false)

    const clickHandle = () => {
        setShow(!show)
    }

    return(
        <div className='folder'>
            <div style={{cursor: 'pointer', display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', fontSize: '20px'}} onClick={() => clickHandle()}>{props.name} <IoIosArrowDropdown size={20} style={{transform: show && 'rotate(180deg)'}} /></div>
            {
                show && <div className="container">
                <div className='hr' />
                <div className='desc'>{props.desc}</div>
                <div className='tech'>Tech used: {props.tech}</div>
                <div className='icons'><FiExternalLink size={30} className="ico" onClick={() => window.open(props.link)} /></div>
            </div>
            }
        </div>
    );
}

const Projects = () => {

    const data = [
        {
            name: "Taurus",
            desc: "An interpreter based programming language made from scratch using the basics of Compiler Design",
            tech: "Python",
            link: "https://github.com/PRT28/taurus"
        },
        {
            name: "Face Mask Detector",
            desc: "Detects whether a person is wearing a mask or not using a customized Mobile Net SSD v2",
            tech: "Python, Tensorflow, CNN",
            link: "https://github.com/PRT28/Face-Mask-Detector"
        },
        {
            name: "Blogging Webapp",
            desc: "A webapp for a multi-genre blogger",
            tech: "ReactJS, Firebase",
            link: "https://gauriharbola.com"
        },
        {
            name: "Shakespear's Poetry Creator",
            desc: "Prepared a model on the sonnets and poems of Shakespeare's and create new text in a similar style continuing the given input by the user.",
            tech: "Python, Tensorflow, RNN",
            link: "https://github.com/PRT28/Shakespeare-s-Poetry-Creator"
        },
        {
            name: "Virtual Piano",
            desc: "Provided the virtual keys on the screen, users can play these by moving theirfingers over them.",
            tech: "Python, Mediapipe, OpenCV",
            link: "https://github.com/PRT28/virtual-piano"
        },
        {
            name: "Image Dataset Loader",
            desc: "A python module that can load the images into a NumPy array for further usage.",
            tech: "Python, Numpy",
            link: "https://github.com/PRT28/Image_Dataset_Loader"
        },
        {
            name: "Helmet Detecton App",
            desc: "A webapp which detects whether a person is wearing helmet or not, can work with live feed or uploaded video.",
            tech: "Python, Tensorflow, Flask",
            link: "https://github.com/PRT28/helmet-detection-flask"
        }
        
    ]

    return(
        <div id="work" className='projects'>
            <div className='anim'>
                <Animation />
            </div>
            <div className='text'>
                <Fade bottom>
                    <div className='heading'>Some of my Noteworthy Projects</div>
                        {
                            data.map(d => <Folder name={d.name} desc={d.desc} tech={d.tech} link={d.link} />)
                        }
                    <div>For full list of work visit my <a href="https://github.com/PRT28">github</a>.</div>
                </Fade>
            </div>
        </div>
    );
}

export default Projects;