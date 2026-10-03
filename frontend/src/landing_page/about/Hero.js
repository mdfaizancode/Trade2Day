import React from 'react';
import { Link } from 'react-router-dom';

function Hero() {
    return (
        <section className="about-hero">
            <div className="about-hero-inner">
                <span className="hero-eyebrow">About Trade2Day</span>
                <h1>Investing should feel clearer.</h1>
                <p>Trade2Day brings your market watchlist, portfolio overview and account tools together in one considered experience.</p>
                <div className="about-hero-actions">
                    <Link to="/product" className="btn btn-primary">Explore the platform</Link>
                    <Link to="/signup" className="hero-secondary">Create an account <i className="fa-solid fa-arrow-right" aria-hidden="true"></i></Link>
                </div>
            </div>
        </section>
    );
}

export default Hero;
