import react from "react";
import Hero from "./Hero";
import Brokerage from "./Brokerage";


// Currency

function BrokeragePricing (){
    return(
        <>
        <Hero/>
        <Brokerage/>
      <div className="container mt-5   ">
            <div className="row text-center border">
                    <div className="col-6"> <h5>Equity Delevery</h5></div>
                    <div className="col-6"> <h5>Equity Intraday</h5> </div>
            </div>

            <div className="row border text-muted p-4 " >
                <div className="col-1"></div>
             <div className="col-5 mt-3 ">
               <h3 className="fs-6">Zero Brokerage </h3>
               <h3 className="fs-6 mt-5">0.1% on buy & sell </h3>
               <h3 className="fs-6 mt-5">NSE: 0.00307%BSE: 0.00375%</h3>
                <h3 className="fs-6 mt-5">18% on (brokerage + SEBI charges + transaction charges) </h3>
                <h3 className="fs-6 mt-5">₹10 / crore </h3>
                <h3 className="fs-6 mt-5">0.015% or ₹1500 / crore on buy side </h3>
             </div>
              <div className="col-1"></div>
             <div className="col-5 mt-3">
                <h3 className="fs-6"> 0.03% or Rs. 20/executed order whichever is lower</h3>
                <h3 className="fs-6 mt-5">0.025% on the sell side</h3>
                <h3 className="fs-6 mt-5">NSE: 0.00307%BSE: 0.00375% </h3>
                <h3 className="fs-6 mt-5">18% on (brokerage + SEBI charges + transaction charges) </h3>
                <h3 className="fs-6 mt-5">₹10 / crore </h3>
                <h3 className="fs-6 mt-5">0.003% or ₹300 / crore on buy side </h3>
             </div>
            </div>
        
           <h3  className="fs-5 mt-5 text-muted">Disclaimer</h3>
        <p className=" text-muted mt-4 " style={{fontSize:"11px" , lineHeight:"19px" , marginBottom:"90px"}}>For Delivery based trades, a minimum of ₹0.01 will be charged per contract note. Clients who opt to receive physical contract notes will be charged ₹20 per contract note plus courier charges. Brokerage will not exceed the rates specified by SEBI and the exchanges. All statutory and regulatory charges will be levied at actuals. Brokerage is also charged on expired, exercised, and assigned options contracts. Free investments are available only for our retail individual clients. Companies, Partnerships, Trusts, and HUFs need to pay 0.1% or ₹20 (whichever is less) as delivery brokerage. A brokerage of 0.25% of the contract value will be charged for contracts where physical delivery happens. For netted off positions in physically settled contracts, a brokerage of 0.1% will be charged.</p>
        </div>
        </>
    )
}

export default BrokeragePricing; 