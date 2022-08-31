import React from 'react';
import './About.scss';
import { Fade } from 'react-reveal';

const About = () => {

    const tech = ["ReactJS", "AngularJS", "NextJS", "Springboot", "NodeJS", "ExpressJS", "MongoDB", "MySQL"];
    const lang = ["C", "C++", "Java", "Python", "Data Science", "Tensorflow", "Flutter", "Artificial Intelligence"]

    return(
        <div id="about" className="about">
            <div className="image"></div>
            <div className="text">
                <Fade bottom>
                <div className='heading'>About me</div>
                <div>Hello, my name is Prithvi Raj Tiwari and i enjoy learning and exploring new techs in the industry.<br />
                A photographer by hobby who loves to capture the world (especially astro events) from his camera's viewfinder.<br /></div>
                <div className='tech'>
                    <div className='sub'>Technologies i work on</div>
                    <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly'}}>
                        <ul>
                            {
                                tech.map(d => <li>{d}</li>)
                            }
                        </ul>
                        <ul>
                            {
                                lang.map(d => <li>{d}</li>)
                            }
                        </ul>
                    </div>
                </div>
                </Fade>
            </div>
        </div>
    );
};

export default About;