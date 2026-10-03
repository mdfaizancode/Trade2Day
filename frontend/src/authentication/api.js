import axios from 'axios';

const apiBaseUrl = (
    process.env.REACT_APP_API_URL ||
    (process.env.NODE_ENV === 'production' ? 'https://trade2daybackend.onrender.com': 'http://localhost:3004')
).replace(/\/+$/, '');

export const authApiUrl = `${apiBaseUrl}/auth`;

const api = axios.create({
    baseURL: authApiUrl
});

export const googleAuth = (code) => api.get("/google", { params: { code } });