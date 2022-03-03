import { Mail, Person } from '@mui/icons-material';
import React, { useState } from 'react';
import './topbar.scss';

function TopBar({ menuOpen, setMenuOpen }) {

    return (
        <div className={'topbar ' + (menuOpen && 'active')}>
            <div className="wrapper">
                <div className="left">
                    <a href="#intro" className='logo'>azeezatu_</a>
                    <div className="item-container">
                        <Person className='icon' />
                        <span>+234(0)8107671099</span>
                    </div>
                    <div className="item-container">
                        <Mail className='icon' />
                        <span>busariazeezat@gmail.com</span>
                    </div>
                </div>
                <div className="right">
                    <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
                        <span className='line1'></span>
                        <span className='line2'></span>
                        <span className='line3'></span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TopBar;