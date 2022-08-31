import React from 'react';
import './Work.scss'
import LaptopAnimation from './LaptopAnimation';
import { Fade } from 'react-reveal';

const Work = () => {

    const data = [
    {
        profile: "SDE",
        company: "Lenskart",
        work: [
            "Engineered and maintained major features of Lenskart's POS Web using React, Angular and Springboot",
            "Built Lenskart's Store Locator Microservice on NextJS",
            "Interfaced with user experience designers and other developers to ensure thoughtful and coherent user experiences across Lenskart POS"
        ],
        timeline: "December 2021 - Present",
        link: 'https://www.lenskart.com/'
    },
    {
        profile: "Intern",
        company: "Iotiot.in",
        work: [
            "Studied many research papers related to CNNs to understand training of an AI model for a purpose based model",
            "Custom trained an SSD model to detect grocery store objects using the surviellance camera's live feed"
        ],
        timeline: "October 2020 - December 2020",
        link: 'https://iotiot.in/'
    }];

        return(
            <div id="exp" className='work'>
                <div style={{width: '50vw', padding: '20px', paddingTop: '100px'}}>
                    <Fade bottom>
                    <div className='heading'>Where I've Worked</div>
                    <div>
                        {
                            data.map((d) => {
                                return(
                                    <div className='container'>
                                        <div className="head">{d.profile}@<a href={d.link}>{d.company}</a></div>
                                        <div className='sub'>{d.timeline}</div>
                                        <ul>
                                            {
                                                d.work.map(w => <li>{w}</li>)
                                            }
                                        </ul>
                                    </div>
                                )
                            })
                        }
                    </div>
                    </Fade>
                </div>
                <div style={{width: '50vw'}}>
                    <LaptopAnimation />
                </div>
            </div>
        );

}

export default Work;