import React, { useEffect, useRef, useState } from 'react';
import {Link, useLocation} from 'react-router-dom';
import Logout from '../authentication/Logout';
import { dashboardUrl } from '../config';

function Navbar({isAuthenticated, setIsAuthenticated, theme, setTheme}) {
    const isDarkMode = theme === 'dark';
    const [menuOpen, setMenuOpen] = useState(false);
    const navRef = useRef(null);
    const menuButtonRef = useRef(null);
    const location = useLocation();

    useEffect(() => {
        setMenuOpen(false);
    }, [location.pathname]);

    useEffect(() => {
        if (!menuOpen) {
            return undefined;
        }

        const handlePointerDown = (event) => {
            if (!navRef.current?.contains(event.target)) {
                setMenuOpen(false);
            }
        };
        const handleKeyDown = (event) => {
            if (event.key === 'Escape') {
                setMenuOpen(false);
                menuButtonRef.current?.focus();
            }
        };
        const handleResize = () => {
            if (window.innerWidth >= 992) {
                setMenuOpen(false);
            }
        };

        document.addEventListener('pointerdown', handlePointerDown);
        document.addEventListener('keydown', handleKeyDown);
        window.addEventListener('resize', handleResize);

        return () => {
            document.removeEventListener('pointerdown', handlePointerDown);
            document.removeEventListener('keydown', handleKeyDown);
            window.removeEventListener('resize', handleResize);
        };
    }, [menuOpen]);

    return (
        <nav ref={navRef} className="navbar navbar-expand-lg sticky-top site-navbar">
            <div className="container-fluid">
               <Link to="/" className="brand-wordmark" aria-label="Trade2Day home">Trade<span>2</span>Day</Link>
                <button
                    ref={menuButtonRef}
                    className={`navbar-toggler menu-toggle${menuOpen ? ' is-open' : ''}`}
                    type="button"
                    aria-controls="navbar-menu"
                    aria-expanded={menuOpen}
                    aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
                    onClick={() => setMenuOpen((open) => !open)}
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
                <div className={`collapse navbar-collapse${menuOpen ? ' show' : ''}`} id="navbar-menu">

                    <div className="d-flex">
                        <ul className="navbar-nav mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link" href={dashboardUrl} onClick={() => setMenuOpen(false)}>Dashboard</a>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/about" onClick={() => setMenuOpen(false)}>About</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/product" onClick={() => setMenuOpen(false)}>Platform</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/pricing" onClick={() => setMenuOpen(false)}>Pricing</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/support" onClick={() => setMenuOpen(false)}>Support</Link>
                            </li>
                            <li className="nav-item">
                                <button
                                    className="theme-toggle"
                                    type="button"
                                    onClick={() => setTheme(isDarkMode ? 'light' : 'dark')}
                                    aria-label={`Switch to ${isDarkMode ? 'light' : 'dark'} mode`}
                                    aria-pressed={isDarkMode}
                                    title={`Switch to ${isDarkMode ? 'light' : 'dark'} mode`}
                                >
                                    <i className={`fa-solid ${isDarkMode ? 'fa-sun' : 'fa-moon'}`} aria-hidden="true"></i>
                                    <span>{isDarkMode ? 'Light mode' : 'Dark mode'}</span>
                                </button>
                            </li>
                            {!isAuthenticated ? (
                                <>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/login" onClick={() => setMenuOpen(false)}>Log in</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link nav-cta" to="/signup" onClick={() => setMenuOpen(false)}>Get started</Link>
                                    </li>
                                </>
                            ) : (
                                <li className="nav-item">
                                    <Logout setIsAuthenticated={setIsAuthenticated}/>
                                </li>
                            )}
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;