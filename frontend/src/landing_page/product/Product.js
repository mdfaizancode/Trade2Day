import React from 'react';
import { Link } from 'react-router-dom';
import { dashboardUrl } from '../../config';

const platformTools = [
    {
        icon: 'fa-list-check',
        eyebrow: 'Markets',
        title: 'Your watchlist, at a glance',
        description: 'Search symbols, sort sample performance and inspect a selected instrument from the dashboard watchlist.',
        action: 'Open dashboard',
        href: dashboardUrl,
    },
    {
        icon: 'fa-chart-pie',
        eyebrow: 'Portfolio',
        title: 'A clearer portfolio overview',
        description: 'Review portfolio summaries and your holdings with market value and P&L calculations.',
        action: 'View the dashboard',
        href: dashboardUrl,
    },
    {
        icon: 'fa-arrow-right-arrow-left',
        eyebrow: 'Account',
        title: 'Positions and funds together',
        description: 'Check connected positions and understand account margin details. Preview balances are labelled as sample data.',
        action: 'Explore account tools',
        href: dashboardUrl,
    },
    {
        icon: 'fa-graduation-cap',
        eyebrow: 'Learn',
        title: 'A straightforward place to start',
        description: 'Explore platform tools and common investing questions before taking your next step.',
        action: 'Browse help topics',
        href: '/support',
        internal: true,
    },
];

function Product() {
    return (
        <main className="product-page">
            <section className="product-hero">
                <span className="hero-eyebrow">The Trade2Day platform</span>
                <h1>Tools that make investing feel clearer.</h1>
                <p>Explore your markets, portfolio and account tools from a simple, connected workspace.</p>
                <div className="hero-actions">
                    <a className="btn btn-primary" href={dashboardUrl}>Open dashboard</a>
                    <Link className="hero-secondary" to="/signup">Create an account <i className="fa-solid fa-arrow-right" aria-hidden="true"></i></Link>
                </div>
            </section>

            <section className="product-tools container">
                <div className="product-section-heading">
                    <span className="hero-eyebrow">A considered workspace</span>
                    <h2>Everything you need to get oriented.</h2>
                </div>
                <div className="product-tool-grid">
                    {platformTools.map(({ icon, eyebrow, title, description, action, href, internal }) => (
                        <article className="product-tool-card" key={title}>
                            <span className="product-tool-icon"><i className={`fa-solid ${icon}`} aria-hidden="true"></i></span>
                            <span className="eyebrow">{eyebrow}</span>
                            <h3>{title}</h3>
                            <p>{description}</p>
                            {internal
                                ? <Link to={href} className="product-tool-link">{action} <i className="fa-solid fa-arrow-right" aria-hidden="true"></i></Link>
                                : <a href={href} className="product-tool-link">{action} <i className="fa-solid fa-arrow-right" aria-hidden="true"></i></a>}
                        </article>
                    ))}
                </div>
                <p className="product-data-note"><i className="fa-solid fa-circle-info" aria-hidden="true"></i> Some dashboard figures and watchlist quotes are sample preview data, not live market prices.</p>
            </section>

            <section className="account-cta product-cta">
                <div className="row text-center">
                    <h2 className="fs-3 mb-3">Start with a clearer view.</h2>
                    <p>Explore the platform or create your Trade2Day account.</p>
                    <Link to="/signup" className="btn btn-primary mt-3">Get started</Link>
                </div>
            </section>
        </main>
    );
}

export default Product;
