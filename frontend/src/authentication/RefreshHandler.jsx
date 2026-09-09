import {useEffect} from "react";
import { useLocation } from "react-router-dom";

function RefreshHandler ({setIsAuthenticated}){
    const location = useLocation();

    useEffect(()=>{
        const data = localStorage.getItem('user-info');
        const token = JSON.parse(data)?.token;
        if(token){
            setIsAuthenticated(true);
            if( location.pathname === '/login'){ window.location.replace("https://trade2daydashboard.vercel.app");
            }
        }

    },[location, setIsAuthenticated]);
    
    return null
}

export default RefreshHandler  