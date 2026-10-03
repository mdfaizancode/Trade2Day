import React from 'react';
import { NavLink } from 'react-router-dom';

function Brokerage() {
    return (
        <nav className="container pricing-tabs" aria-label="Pricing category">
            <NavLink
                to="/pricing/Brokerage/Power"
                className={({ isActive }) => `pricing-tab${isActive ? ' active' : ''}`}
            >
                Equity
            </NavLink>
            <NavLink
                to="/pricing/Brokerage/Pricing"
                className={({ isActive }) => `pricing-tab${isActive ? ' active' : ''}`}
            >
                Currency
            </NavLink>
        </nav>
    );
}

export default Brokerage;
