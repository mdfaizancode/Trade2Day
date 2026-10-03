import React, { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';

const helpTopics = [
    {
        category: 'Account',
        icon: 'fa-user',
        questions: [
            { question: 'How do I create a Trade2Day account?', answer: 'Choose “Get started” in the navigation and complete the sign-up form. You can also sign in if you already have an account.' },
            { question: 'I forgot my password. What should I do?', answer: 'Password recovery is not available in this preview yet. Please use the support contact provided by your account administrator.' },
            { question: 'How do I update my account details?', answer: 'Account profile editing is not available in this preview. Sign in to check your account options or contact your account administrator.' },
        ],
    },
    {
        category: 'Platform',
        icon: 'fa-chart-line',
        questions: [
            { question: 'Where can I find my holdings?', answer: 'Open the dashboard and choose Holdings from the dashboard navigation. Holdings are loaded from the connected portfolio service.' },
            { question: 'How do I search the watchlist?', answer: 'Use the search field above the watchlist to filter instruments by their displayed symbol.' },
            { question: 'Are dashboard quotes live?', answer: 'The watchlist quotes shown in this preview are sample data and are not live market prices.' },
        ],
    },
    {
        category: 'Pricing',
        icon: 'fa-receipt',
        questions: [
            { question: 'Where can I see charges and taxes?', answer: 'Visit the Pricing page for a summary of charge types and the pricing information available in this preview.' },
            { question: 'Are displayed dashboard balances real?', answer: 'No. The dashboard clearly labels its balance and overview figures as sample preview data.' },
        ],
    },
    {
        category: 'Security',
        icon: 'fa-shield-halved',
        questions: [
            { question: 'How do I sign out?', answer: 'Use the Logout button in the site navigation when signed in. On the dashboard, use your account menu to review your profile.' },
            { question: 'Does dark mode change my account settings?', answer: 'No. Theme selection only changes the way the interface looks and is saved in your current browser.' },
        ],
    },
];

function CreateTicket({ search, onSearchChange }) {
    const [activeCategory, setActiveCategory] = useState('All topics');
    const [openQuestion, setOpenQuestion] = useState(null);
    const normalizedSearch = search.trim().toLowerCase();

    const visibleTopics = useMemo(() => helpTopics
        .filter((topic) => activeCategory === 'All topics' || topic.category === activeCategory)
        .map((topic) => ({
            ...topic,
            questions: topic.questions.filter(({ question, answer }) =>
                !normalizedSearch ||
                `${topic.category} ${question} ${answer}`.toLowerCase().includes(normalizedSearch)
            ),
        }))
        .filter((topic) => topic.questions.length > 0), [activeCategory, normalizedSearch]);

    const categories = ['All topics', ...helpTopics.map(({ category }) => category)];

    return (
        <main className="support-content container">
            <div className="support-section-heading">
                <div>
                    <span className="hero-eyebrow">Browse resources</span>
                    <h2>Help, without the guesswork.</h2>
                </div>
                <Link to="/login" className="support-contact-link">Account help <i className="fa-solid fa-arrow-right" aria-hidden="true"></i></Link>
            </div>

            <div className="support-categories" aria-label="Filter help topics">
                {categories.map((category) => (
                    <button
                        key={category}
                        className={activeCategory === category ? 'active' : ''}
                        type="button"
                        onClick={() => {
                            setActiveCategory(category);
                            setOpenQuestion(null);
                        }}
                        aria-pressed={activeCategory === category}
                    >
                        {category}
                    </button>
                ))}
            </div>

            {visibleTopics.length > 0 ? (
                <div className="support-topic-grid">
                    {visibleTopics.map((topic) => (
                        <section className="support-topic-card" key={topic.category}>
                            <h3><i className={`fa-solid ${topic.icon}`} aria-hidden="true"></i>{topic.category}</h3>
                            <div className="support-faq-list">
                                {topic.questions.map(({ question, answer }) => {
                                    const isOpen = openQuestion === question;
                                    return (
                                        <div className={`support-faq${isOpen ? ' is-open' : ''}`} key={question}>
                                            <button
                                                type="button"
                                                onClick={() => setOpenQuestion(isOpen ? null : question)}
                                                aria-expanded={isOpen}
                                            >
                                                <span>{question}</span>
                                                <i className={`fa-solid ${isOpen ? 'fa-minus' : 'fa-plus'}`} aria-hidden="true"></i>
                                            </button>
                                            {isOpen && <p>{answer}</p>}
                                        </div>
                                    );
                                })}
                            </div>
                        </section>
                    ))}
                </div>
            ) : (
                <div className="support-no-results" role="status">
                    <i className="fa-regular fa-circle-question" aria-hidden="true"></i>
                    <h3>No matching help topics</h3>
                    <p>Try another search or choose a different category.</p>
                    <button type="button" onClick={() => { setActiveCategory('All topics'); setOpenQuestion(null); onSearchChange(''); }}>Clear filters</button>
                </div>
            )}

            <div className="support-note">
                <i className="fa-solid fa-circle-info" aria-hidden="true"></i>
                <p>Need help with account access? Sign in to continue. Ticket submission and account recovery are not enabled in this preview.</p>
                <Link to="/login">Sign in</Link>
            </div>
        </main>
    );
}

export default CreateTicket;
