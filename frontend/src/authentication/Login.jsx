import { useState } from "react";
import {Link} from "react-router-dom";
import {ToastContainer} from "react-toastify";
import { handleError, handleSuccess } from "./validationError";
import {useGoogleLogin} from '@react-oauth/google';
import {authApiUrl, googleAuth} from "./api.js";
import { dashboardUrl } from '../config';

function Login(){

    const [loginInfo, setLoginInfo] = useState({
        email: "",
        password: "" 
    })
    const [showPassword, setShowPassword] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e) => {
        const {name, value} = e.target;
        setLoginInfo((current) => ({ ...current, [name]: value }));
    }

   const  handleLogin = async (e) =>{
    e.preventDefault();
    const { email, password } = loginInfo;
    if( !email || !password){  
        return handleError('Email , Password is Required!'); 
    }

    setIsSubmitting(true);
    try{
        const response = await fetch(`${authApiUrl}/login`,{
            method:"POST",
            headers:{
                'Content-type': 'application/json'
            },
            body: JSON.stringify(loginInfo)
        });
        const result = await response.json();
        const {success , message , jwtToken,name,error} = result ;
        if(success){
            if (!jwtToken) {
                handleError('The authentication server did not return a session token.');
                return;
            }
            handleSuccess(message || 'Welcome back.');
            localStorage.setItem('user-info', JSON.stringify({
                name,
                email,      
                token: jwtToken
            }));
            setTimeout(()=>{
                window.location.replace(dashboardUrl);
            },1000)

        }else if(error){
            const details = error?.details?.[0]?.message;
            handleError(details || message || `Sign in failed (${response.status}).`);
            
        }else if(!success){
            handleError(message || `Sign in failed (${response.status}).`);
        }
    }catch(error){
        handleError(error.message || 'Unable to connect to the authentication server');
    }finally{
        setIsSubmitting(false);
    }
  }

    const responseGoogle = async (authResult )=>{
        try{
            if(authResult?.code){
                const result = await googleAuth(authResult.code);
                const token = result.data.token;
                const {email, name, image} = result.data.user;
                const obj = {name, email, image, token };
                localStorage.setItem("user-info" , JSON.stringify(obj));
                window.location.replace(dashboardUrl);
            }
        }catch(error){
            console.error("Google login failed:", error.response?.data || error.message);
            handleError(error.response?.data?.message || "Google login failed");
        }
    }

    const handleGoogleError = (error) => {
        console.error("Google authorization failed:", error);
        handleError("Google authorization failed");
    };

    const googleLogin =  useGoogleLogin({
        onSuccess: responseGoogle,
        onError: handleGoogleError,
        flow: 'auth-code'
    })

    return(
        <div className="auth-container">
        <div className="auth-heading">
            <span className="auth-eyebrow">Welcome back</span>
            <h1>Sign in to your account</h1>
            <p>Your investing journey continues here.</p>
        </div>
        <form onSubmit={handleLogin}>
            <div className="auth-field">
                <label htmlFor="email">Email address</label>
                <input
                id="email"
                onChange={handleChange}
                type="email"
                placeholder="you@example.com"
                name="email"
                autoComplete="email"
                required
                />
            </div>
            <div className="auth-field">
                <label htmlFor="password">Password</label>
                <div className="auth-password-wrap">
                <input
                id="password"
                onChange={handleChange}
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                name="password"
                autoComplete="current-password"
                required
                />
                <button className="password-toggle" type="button" onClick={() => setShowPassword((visible) => !visible)} aria-label={showPassword ? "Hide password" : "Show password"}>
                    <i className={`fa-regular ${showPassword ? "fa-eye-slash" : "fa-eye"}`} aria-hidden="true"></i>
                </button>
                </div>
            </div>
            <button className="auth-button" type="submit" disabled={isSubmitting}>{isSubmitting ? "Signing in..." : "Sign in"} <i className="fa-solid fa-arrow-right" aria-hidden="true"></i></button>
            <span className="auth-switch">New to Trade2Day? <Link to="/signup">Create an account</Link></span>
            
        </form>

        <div className="auth-divider"><span>or continue with</span></div>
        <div className="auth-social">
        <button className="google-auth-button" type="button" onClick={()=>{googleLogin()}}><i className="fa-brands fa-google" aria-hidden="true"></i> Continue with Google</button>
        </div>

        <ToastContainer/>
        </div>
    )
}

export default Login;