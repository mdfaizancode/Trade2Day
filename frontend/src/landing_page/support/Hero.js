import React from 'react';
import { Link } from 'react-router-dom';

function Hero({ search, onSearchChange }) {
    return (
        <section className="support-hero">
            <div className="support-hero-inner">
                <span className="hero-eyebrow">Trade2Day help centre</span>
                <h1>How can we help?</h1>
                <p>Search common questions or browse help topics below.</p>
                <label className="support-search">
                    <i className="fa-solid fa-magnifying-glass" aria-hidden="true"></i>
                    <span className="visually-hidden">Search help topics</span>
                    <input
                        type="search"
                        value={search}
                        onChange={(event) => onSearchChange(event.target.value)}
                        placeholder="Try “account”, “password” or “dashboard”"
                    />
                    {search && (
                        <button type="button" onClick={() => onSearchChange('')} aria-label="Clear help search">
                            <i className="fa-solid fa-xmark" aria-hidden="true"></i>
                        </button>
                    )}
                </label>
                <div className="support-quick-links">
                    <span>Quick links</span>
                    <Link to="/pricing">Pricing</Link>
                    <Link to="/product">Platform</Link>
                    <Link to="/login">Sign in</Link>
                </div>
            </div>
        </section>
    );
}

export default Hero;
