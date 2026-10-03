import React from 'react';
import { Link } from 'react-router-dom';

function ErrorPage() {
    return (
        <main className="not-found-page">
            <span className="not-found-code">404</span>
            <span className="hero-eyebrow">Page not found</span>
            <h1>Looks like this page moved.</h1>
            <p>The address may be outdated, or the page may no longer be available.</p>
            <div className="not-found-actions">
                <Link to="/" className="btn btn-primary">Back to home</Link>
                <Link to="/support" className="hero-secondary">Visit the help centre <i className="fa-solid fa-arrow-right" aria-hidden="true"></i></Link>
            </div>
        </main>
    );
}

export default ErrorPage;
