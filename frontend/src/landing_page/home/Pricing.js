import React from 'react';
import { Link } from 'react-router-dom';

function Pricing(){
    return(
        <div className="container mb-5 home-section">
        <div className="row mt-5 pricing-section">
         <div className="col-5 mb-5">
           <h1 className="fs-3 home-section-title">Understand your investment costs.</h1>
           <p>Review applicable brokerage, statutory charges and taxes before placing an order. A verified Trade2Day fee schedule is not published in this preview.</p>
           <Link to="/pricing" style={{textDecoration:"none"}}>Pricing overview <i className="fa-solid fa-arrow-right"></i></Link>

         </div>

             <div className="col-7 mb-5 pricing-cards">
                <div className="pricing-card"><strong>Brokerage</strong><span>Check the current schedule</span></div>
                <div className="pricing-card"><strong>Statutory</strong><span>Charges may apply</span></div>
                <div className="pricing-card"><strong>Before you trade</strong><span>Confirm product availability</span></div>
             </div>
        </div>
        </div>
    )
}

export default Pricing;