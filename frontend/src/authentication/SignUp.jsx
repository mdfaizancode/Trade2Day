import { useState } from "react";
import {Link} from "react-router-dom";
import {ToastContainer} from "react-toastify";
import { handleError, handleSuccess } from "./validationError";
import {authApiUrl} from "./api.js";
import { dashboardUrl } from '../config';

function SignUp(){

    const [signupInfo, setSignupInfo] = useState({
        name: "",
        email: "",
        password: "" 
    })
    const [showPassword, setShowPassword] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e) => {
        const {name, value} = e.target;
        setSignupInfo((current) => ({ ...current, [name]: value }));
    }

   const  handleSignup = async (e) =>{
    e.preventDefault();
    const {name, email, password } = signupInfo;
    if(!name || !email || !password){  
        return handleError('Name , Email , Password is Required!'); 
    }

    setIsSubmitting(true);
    try{
        const response = await fetch(`${authApiUrl}/SignUp`,{
            method:"POST",
            headers:{
                'Content-type': 'application/json'
            },
            body: JSON.stringify(signupInfo)
        });
        const result = await response.json();
        const {success , message, error, jwtToken, user } = result ;
        if(success){
            if (!jwtToken || !user) {
                handleError('The authentication server did not return a complete account session.');
                return;
            }
            handleSuccess(message || 'Your account is ready.');
            localStorage.setItem('user-info', JSON.stringify({
                ...user,
                token: jwtToken
            }));
            setTimeout(()=>{
                window.location.replace(dashboardUrl);
            },1000)

        }else{
            const details = error?.details?.[0]?.message || message;
            handleError(details);
        }
    }catch(error){
        handleError(error.message || 'Unable to connect to the authentication server');
    }finally{
        setIsSubmitting(false);
    }
  }

    return(
        <div className="auth-container">
        <div className="auth-heading">
            <span className="auth-eyebrow">A better way to invest</span>
            <h1>Create your account</h1>
            <p>Get started with a few simple details.</p>
        </div>
        <form onSubmit={handleSignup}>
            <div className="auth-field">
                <label htmlFor="name">Full name</label>
                <input
                id="name"
                onChange={handleChange}
                type="text"
                placeholder="Enter your full name"
                name="name"
                autoFocus
                autoComplete="name"
                required
                />
            </div>
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
                placeholder="Create a password"
                name="password"
                autoComplete="new-password"
                required
                />
                <button className="password-toggle" type="button" onClick={() => setShowPassword((visible) => !visible)} aria-label={showPassword ? "Hide password" : "Show password"}>
                    <i className={`fa-regular ${showPassword ? "fa-eye-slash" : "fa-eye"}`} aria-hidden="true"></i>
                </button>
                </div>
            </div>
            <button className="auth-button" type="submit" disabled={isSubmitting}>{isSubmitting ? "Creating account..." : "Create account"} <i className="fa-solid fa-arrow-right" aria-hidden="true"></i></button>
            <span className="auth-switch">Already have an account? <Link to="/login">Sign in</Link></span>
        </form>
        <ToastContainer/>
        </div>
    )
}

export default SignUp;