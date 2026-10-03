import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <footer className="footer-container">
            <div className="footer-row">
                <div className="footer-brand">
                    <Link to="/" className="brand-wordmark" aria-label="Trade2Day home">Trade<span>2</span>Day</Link>
                    <p>Thoughtful tools for your investing journey.</p>
                    <span className="footer-copyright">&copy; {new Date().getFullYear()} Trade2Day. All rights reserved.</span>
                </div>
                <div className="footer-links">
                    <h5>Explore</h5>
                    <Link to="/product">Platform</Link>
                    <Link to="/pricing">Pricing</Link>
                    <Link to="/about">About us</Link>
                </div>
                <div className="footer-links">
                    <h5>Your account</h5>
                    <Link to="/signup">Create account</Link>
                    <Link to="/login">Sign in</Link>
                    <Link to="/support">Support</Link>
                </div>
                <div className="footer-disclaimer">
                    <p>Investments are subject to market risks. Please review relevant product information and disclosures before making an investment decision.</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
