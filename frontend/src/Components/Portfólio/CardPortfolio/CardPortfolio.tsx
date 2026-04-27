import React from 'react'

interface Props {
    portfolioValue: string;
}

const CardPortfolio = ({portfoleioValue}: Props) => {
    return <>
    <h4>{portfoleioValue}</h4>
    <button>X</button>
    </>;
};

export default CardPortfolio