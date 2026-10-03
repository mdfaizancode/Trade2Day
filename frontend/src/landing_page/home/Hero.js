import React from 'react';
import { Link } from 'react-router-dom';

function Hero(){
    return(
        <section className="home-hero">
            <div className="hero-inner">
                <div className="hero-copy">
                    <span className="hero-eyebrow">Invest with intention</span>
                    <h1>Make your money work <span>beautifully.</span></h1>
                    <p>A calmer, smarter way to invest. Discover the tools, insights and confidence to build your financial future.</p>
                    <div className="hero-actions">
                        <Link to="/signup" role="button" className="btn btn-primary mb-5">Start investing</Link>
                        <Link to="/product" className="hero-secondary">Explore the platform <i className="fa-solid fa-arrow-right" aria-hidden="true"></i></Link>
                    </div>
                    <div className="hero-proof">
                        <div className="proof-dots" aria-hidden="true"><span></span><span></span><span></span></div>
                        <span>Built for thoughtful investors</span>
                    </div>
                </div>
                <div className="hero-visual">
                    <img src="media/image/HomeHero.svg" alt="Trade2Day portfolio dashboard preview" />
                    <div className="market-card">
                        <div className="market-card-label"><span>Platform preview</span><i className="fa-solid fa-arrow-trend-up" aria-hidden="true"></i></div>
                        <strong>Market insights</strong>
                        <span className="market-positive">Explore market trends at a glance</span>
                    </div>
                </div>
            </div>
            <div className="hero-stats">
                <div className="hero-stat"><strong>Simple</strong><span>Transparent investing</span></div>
                <div className="hero-stat"><strong>Honest</strong><span>Preview data is clearly labelled</span></div>
                <div className="hero-stat"><strong>All in one</strong><span>Markets, insights & tools</span></div>
            </div>
        </section>
    )
}

export default Hero;