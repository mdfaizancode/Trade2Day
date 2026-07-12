import React from 'react';

function Hero(){
    return(
        <div className="container mt-5">
            <div className="row p-6 text-center" >
                <img src="media/image/HomeHero.svg" alt="hero image" className="pb-3"></img>
                <h1 className="pt-4">Invest in everything</h1>
                <p>Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.</p>
                <button className="btn btn-primary mb-5" style={{width:"20%" , margin:"auto"}}>SignUp Now </button>
            </div>
            
        </div>
    )
}

export default Hero;