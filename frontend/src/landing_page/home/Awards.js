import React from 'react';
import { Link } from 'react-router-dom';

function Awards() {
    return (
        <section className="container home-section trust-section">
            <div className="row align-items-center">
                <div className="col-5 mt-4">
                    <span className="hero-eyebrow">Made for your goals</span>
                    <h2 className="home-section-title">Invest with confidence.</h2>
                    <h4>Everything in one place</h4>
                    <p>Explore watchlists, portfolio summaries and market tools through a platform designed to make your view feel more straightforward.</p>
                    <h4>Clarity over clutter</h4>
                    <p>Find the information you need without the noise. Make decisions at your pace with a simple, focused experience.</p>
                    <h4>Built around your journey</h4>
                    <p>Whether you're learning the basics or refining your approach, find helpful tools to support every next step.</p>
                    <Link to="/product" className="trust-link">Explore the platform <i className="fa-solid fa-arrow-right" aria-hidden="true"></i></Link>
                </div>
                <div className="col-7 p-5 mt-4 trust-visual">
                    <img className="mb-4" src="/media/image/ecosystem.png" alt="Trade2Day investing platform ecosystem" />
                    <div className="trust-action">
                        <span>One thoughtful experience for your investments.</span>
                        <Link to="/signup" aria-label="Open your Trade2Day account"><i className="fa-solid fa-arrow-right" aria-hidden="true"></i></Link>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Awards;
