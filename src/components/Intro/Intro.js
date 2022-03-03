import { KeyboardArrowDown } from '@mui/icons-material';
import React, { useEffect, useRef } from 'react';
import './intro.scss';
import { init } from 'ityped';

function Intro() {
    const textRef = useRef();

    useEffect(() => {
        init(textRef.current, {
            showCursor: true,
            strings: [' Graphic Designer', 'Frontend Developer', 'Data Science Enthusiast'],
            backDelay: 1500,
            backSpeed: 60
        })
    }, []);

    return (
        <div className='intro' id='intro'>
            <div className="left">
                <div className="img-container">
                    <img src="assets/man.png" alt="" />
                </div>
            </div>
            <div className="right">
                <div className="wrapper">
                    <h2>Hi there, I am</h2>
                    <h1>Azeezat Busari</h1>
                    <h3>Freelance <span ref={textRef}></span></h3>
                    <a href="#portfolio">
                        <KeyboardArrowDown className='arrowdown' />
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Intro;