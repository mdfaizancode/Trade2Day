import React from 'react';

function Team() {
    return (
        <div className="container mb-5 ">

            <h1 className="fs-3 mt-5 text-center text-center text-muted mb-5">People</h1>

            <div className="row " style={{ lineHeight: "1.9rem" }}>
                <div className="col-6 mt-5 text-muted text-center">
                    <img src="media/image/aboutlogo.jpg"  style={{borderRadius:"100%" , width:"50%"}} alt="about logo"></img>
                    <h4 className='mt-5'>Baskotigama</h4>
                    <h6 className='mt-3'>Founder, CEO</h6>
                </div>
                <div className="col-6 mt-5 text-muted mb-5">
                    <p>Nithin bootstrapped and founded Zerodha in 2010 to overcome<br/> the hurdles he faced during his decade long stint as a trader. Today, <br/>Zerodha has changed the landscape of the Indian broking industry. </p>

                    <p>He is a member of the SEBI Secondary Market Advisory Committee<br/> (SMAC) and the Market Data Advisory Committee (MDAC)</p>

                    <p>Playing basketball is his zen.</p>

                    <p>Connect on <a href='#' style={{textDecoration:"none"}}>Homepage</a> / <a href='#' style={{textDecoration:"none"}}>TradingQnA</a> /  <a href='#'style={{textDecoration:"none"}}>Twitter </a> </p>
                </div>

            </div>
        </div>
    )
}

export default Team;