import React, { useState } from 'react';
import PortfolioList from '../PortfolioList/PortfolioList';
import './portfolio.scss';

function Portfolio() {
const [selected, setSelected] = useState('featured')
    const list =[
        {
            id: 'featured',
            title: 'Featured'
        },
        {
            id: 'web',
            title: 'Web'
        },
        {
            id: 'designs',
            title: 'Designs'
        },
        {
            id: 'branding',
            title: 'Branding'
        },
    ]

    return (
        <div className='portfolio' id='portfolio'>
            <h1>Portfolio</h1>
            <ul>
               {list.map((item, index)=> (
                   <PortfolioList 
                   title={item.title}
                   active={selected === item.id}
                   setSelected={setSelected}/>
               ))}
            </ul>
            <div className="container">
                <div className="item">
                    <img src="https://images.unsplash.com/photo-1615515057524-302a334449ce?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" 
                    width='300px'
                    alt="" />
                    <h3>Banking App</h3>
                </div>
                <div className="item">
                    <img src="https://images.unsplash.com/photo-1615515057524-302a334449ce?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                        width='300px'
                        alt="" />
                    <h3>Banking App</h3>
                </div>
                <div className="item">
                    <img src="https://images.unsplash.com/photo-1615515057524-302a334449ce?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                        width='300px'
                        alt="" />
                    <h3>Banking App</h3>
                </div>
                <div className="item">
                    <img src="https://images.unsplash.com/photo-1615515057524-302a334449ce?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                        width='300px'
                        alt="" />
                    <h3>Banking App</h3>
                </div>
                <div className="item">
                    <img src="https://images.unsplash.com/photo-1615515057524-302a334449ce?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                        width='300px'
                        alt="" />
                    <h3>Banking App</h3>
                </div>
                <div className="item">
                    <img src="https://images.unsplash.com/photo-1615515057524-302a334449ce?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                        width='300px'
                        alt="" />
                    <h3>Banking App</h3>
                </div>
            </div>
        </div>
    );
}

export default Portfolio;