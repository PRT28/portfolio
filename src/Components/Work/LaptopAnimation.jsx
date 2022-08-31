import './LaptopAnimation.scss';

const LaptopAnimation = () => {
    return(
        <div className='animation'>
            <div className='laptop'>
                <div className='laptop-screen'></div>
                    <div className='laptop-terminal'>
                        <p>$if (work == completed) <br /> takeRest();<br /> else<br /> takeCoffee();  </p>
                    </div>
            </div>
        </div>
    );
}

export default LaptopAnimation;