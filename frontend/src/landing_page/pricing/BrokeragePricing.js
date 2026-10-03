import React from 'react';
import Hero from './Hero';
import Brokerage from './Brokerage';
import ChargesBreakdown from './ChargesBreakdown';

const currencyCategories = [
    { title: 'Currency futures', description: 'Charges for eligible currency futures transactions.' },
    { title: 'Currency options', description: 'Charges for eligible currency options transactions.' },
];

function BrokeragePricing() {
    return (
        <>
            <Hero />
            <Brokerage />
            <ChargesBreakdown categories={currencyCategories} />
        </>
    );
}

export default BrokeragePricing;
