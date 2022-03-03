import React from 'react';
import './PortfolioList.scss';

function PortfolioList({ title, active, setSelected }) {
    return (
        <li className={'portfoliolist'}>{title}</li>
    );
}

export default PortfolioList;