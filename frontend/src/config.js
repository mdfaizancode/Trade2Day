export const dashboardUrl =
    process.env.REACT_APP_DASHBOARD_URL ||
    (process.env.NODE_ENV === 'production'
        ? 'https://trade2daydashboard.vercel.app'
        : 'http://localhost:3001');
