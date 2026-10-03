import React from 'react';
import Hero from './Hero';
import Brokerage from './Brokerage';
import ChargesBreakdown from './ChargesBreakdown';

const equityCategories = [
    { title: 'Equity delivery', description: 'Charges for eligible delivery-based equity transactions.' },
    { title: 'Equity intraday', description: 'Charges for eligible intraday equity transactions.' },
    { title: 'Futures', description: 'Charges for eligible futures transactions.' },
    { title: 'Options', description: 'Charges for eligible options transactions.' },
];

function BrokeragePower() {
    return (
        <>
            <Hero />
            <Brokerage />
            <ChargesBreakdown categories={equityCategories} />
        </>
    );
}

export default BrokeragePower;
