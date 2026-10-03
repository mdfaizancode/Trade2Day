import {useEffect} from "react";
import { useLocation } from "react-router-dom";
import { dashboardUrl } from '../config';

function RefreshHandler ({setIsAuthenticated}){
    const location = useLocation();

    useEffect(()=>{
        try {
            const data = localStorage.getItem('user-info');
            const token = data ? JSON.parse(data)?.token : null;
            setIsAuthenticated(Boolean(token));
            if (token && location.pathname === '/login') {
                window.location.replace(dashboardUrl);
            }
        } catch (error) {
            console.error("Unable to restore the saved session:", error);
            localStorage.removeItem('user-info');
            setIsAuthenticated(false);
        }
    },[location.pathname, setIsAuthenticated]);
    
    return null
}

export default RefreshHandler  