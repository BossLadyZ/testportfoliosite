import React, { useEffect, useState } from 'react';
import PortfolioList from '../PortfolioList/PortfolioList';
import { featuredPortfolio, webPortfolio, designPortfolio, contentPortfolio } from '../../data';
import './portfolio.scss';

function Portfolio() {
    const [selected, setSelected] = useState('featured');
    const [data, setdata] = useState([]);
    const list = [
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
    ];
    useEffect(() => {
        switch (selected) {
            case "featured":
                setdata(featuredPortfolio);
                break;
            case 'web':
                setdata(webPortfolio);
                break;
            case 'design':
                setdata(designPortfolio);
                break;
            case 'branding':
                setdata(contentPortfolio);
                break;
            default:
                setdata(featuredPortfolio);
        }
    }, [selected]);

    return (
        <div className='portfolio' id='portfolio'>
            <h1>Portfolio</h1>
            <ul>
                {list.map((item, index) => (
                    <PortfolioList
                        title={item.title}
                        active={selected === item.id}
                        setSelected={setSelected}
                        id={item.id} />
                ))}
            </ul>
            <div className="container">
                {data.map((i) => (
                    <div className="item">
                        <img src={i.img} alt="" />
                        <h3>{i.title}</h3>
                    </div>
                ))}
              
            </div>
        </div>
    );
}

export default Portfolio;