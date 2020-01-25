import React from 'react';
import { useSpring, animated } from 'react-spring';
import './Landing.scss';



const Landing = (props) => {
    const animation = useSpring({ opacity: 1, delay: 1000, marginTop: '0px', from: { opacity: 0, marginTop: '20px' } });
    // props.subLinerTimer();

    return (
        <div id="landing">
            <div id="headliner">
                <h1 id="h1">2 Minute Mindsets</h1>

                <animated.p id="subliner" style={animation}>{props.sublinerQuote}</animated.p>
            </div>
            <img id="landing-background" src='../../../images/clouds.jpg' alt='Landing Page Background (clouds)' />
        </div>
    )
}

export default Landing;