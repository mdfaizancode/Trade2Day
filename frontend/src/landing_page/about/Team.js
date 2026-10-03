import React from 'react';
import { Link } from 'react-router-dom';

const principles = [
    {
        icon: 'fa-compass',
        title: 'Clarity first',
        description: 'Make important information easy to find and understand, from market watchlists to portfolio summaries.',
    },
    {
        icon: 'fa-shield-halved',
        title: 'Trust through transparency',
        description: 'Show what is sample data, make account actions explicit and never imply that a preview performed a transaction.',
    },
    {
        icon: 'fa-mobile-screen',
        title: 'Built for every screen',
        description: 'Keep essential market and account tools straightforward to use on desktop, tablet and mobile.',
    },
];

function Team() {
    return (
        <section className="about-principles container">
            <div className="about-section-heading">
                <span className="hero-eyebrow">What guides us</span>
                <h2>A thoughtful foundation for your investing journey.</h2>
            </div>
            <div className="about-principle-grid">
                {principles.map(({ icon, title, description }) => (
                    <article className="about-principle-card" key={title}>
                        <span className="about-principle-icon"><i className={`fa-solid ${icon}`} aria-hidden="true"></i></span>
                        <h3>{title}</h3>
                        <p>{description}</p>
                    </article>
                ))}
            </div>
            <div className="about-next-step">
                <div>
                    <h2>Take a look around.</h2>
                    <p>Explore the platform, review transparent pricing or get help with common questions.</p>
                </div>
                <div className="about-next-links">
                    <Link to="/product">Platform</Link>
                    <Link to="/pricing">Pricing</Link>
                    <Link to="/support">Help centre</Link>
                </div>
            </div>
        </section>
    );
}

export default Team;
