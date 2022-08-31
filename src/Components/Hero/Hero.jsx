import React from 'react';
import './Hero.scss';
import Typed from 'react-typed';

const Hero = () => {

    const moveHandle = (e) => {
        const hero = document.getElementById("hero");
        const parallaxMultiplier = 0.055;
        let x = e.clientX;
        let y = e.clientY;

        hero.style.backgroundPositionX = "-" + x * parallaxMultiplier + "px";
        hero.style.backgroundPositionY = "-" + y * parallaxMultiplier + "px";
    }

    return (
        <div id="hero" className='hero' onMouseMove={moveHandle}>
            <div className='hero-text'>
                <div>Hi, my name is</div>
                <div className='name'>Prithvi Raj Tiwari</div>
                <div className='dynamic'>I am <Typed
                strings={[
                    'a Web Developer',
                    'an App Developer',
                    'an AI Engineer']}
                    typeSpeed={40}
                    backSpeed={50}
                    loop /></div>
            </div>
        </div>
    );
};

export default Hero;