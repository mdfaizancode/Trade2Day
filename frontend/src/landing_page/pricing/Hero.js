import React from 'react';

const pricingTopics = [
    {
        icon: 'fa-file-invoice-dollar',
        title: 'Brokerage',
        description: 'Review the applicable brokerage schedule before placing an order.',
    },
    {
        icon: 'fa-scale-balanced',
        title: 'Statutory charges',
        description: 'Exchange, regulatory, tax and duty charges may apply as required.',
    },
    {
        icon: 'fa-circle-check',
        title: 'Know before you trade',
        description: 'Confirm the current charges and instrument availability with your broker.',
    },
];

function Hero() {
    return (
        <section className="container pricing-overview">
            <div className="pricing-intro">
                <span className="hero-eyebrow">Pricing overview</span>
                <h1>Understand the costs before you invest.</h1>
                <p>Clear information helps you make informed decisions. This preview does not publish a verified Trade2Day brokerage schedule.</p>
            </div>
            <div className="pricing-feature-grid">
                {pricingTopics.map(({ icon, title, description }) => (
                    <article className="pricing-feature-card" key={title}>
                        <span className="pricing-feature-icon"><i className={`fa-solid ${icon}`} aria-hidden="true"></i></span>
                        <h2>{title}</h2>
                        <p>{description}</p>
                    </article>
                ))}
            </div>
        </section>
    );
}

export default Hero;
