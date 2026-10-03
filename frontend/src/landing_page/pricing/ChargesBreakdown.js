import React from 'react';
import { Link } from 'react-router-dom';

function ChargesBreakdown({ categories }) {
    return (
        <section className="container pricing-details">
            <div className="pricing-rate-grid">
                {categories.map(({ title, description }) => (
                    <article className="pricing-rate-card" key={title}>
                        <h2>{title}</h2>
                        <p>{description}</p>
                        <ul>
                            <li>Brokerage schedule: not published in this preview.</li>
                            <li>Applicable statutory charges and taxes may also apply.</li>
                        </ul>
                    </article>
                ))}
            </div>
            <aside className="pricing-disclaimer">
                <i className="fa-solid fa-circle-info" aria-hidden="true"></i>
                <p>Do not use this preview as a fee quote. Confirm the current charge schedule, product availability and applicable disclosures directly with your broker before placing an order.</p>
                <Link to="/support">Visit help centre <i className="fa-solid fa-arrow-right" aria-hidden="true"></i></Link>
            </aside>
        </section>
    );
}

export default ChargesBreakdown;
