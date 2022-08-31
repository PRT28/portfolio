import React from 'react';
import './Header.scss';

const Header = ({show}) => {
    return(
        <div className='header' style={{top: show ? '0':'-50px'}}>
            <div style={{cursor: 'pointer'}} className="title" onClick={() => window.location.reload()}><strong>PRT</strong></div>
            <div className='container'>
                <div style={{marginRight: '15px'}}><a href="#about">About</a></div>
                <div style={{marginRight: '15px'}}><a href="#exp">Experience</a></div>
                <div style={{marginRight: '15px'}}><a href="#work">Work</a></div>
                <div style={{marginRight: '15px'}}><a href="#contact">Contact</a></div>
                <button><a href="https://drive.google.com/file/d/18v5Ctyv4RFuwMNs0F-H7plAQ69SswL9l/view?usp=sharing" download target="_blank" rel="noreferrer">Resume</a></button>
            </div>
        </div>
    );
}

export default Header;