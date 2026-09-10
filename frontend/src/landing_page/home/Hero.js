import React from 'react';
import { Link } from 'react-router-dom';

function Hero(){
    return(
        <div className="container mt-5">
            <div className="row p-6 text-center" >
                <img src="media/image/HomeHero.svg" alt="hero image" className="pb-3"></img>
                <h1 className="pt-4">Invest in everything</h1>
                <p>Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.</p>
                <Link to="/signup" className="btn btn-primary mb-5" style={{width:"20%" , margin:"auto", display:"inline-block"}}>SignUp Now </Link>
            </div>
            
        </div>
    )
}

export default Hero;