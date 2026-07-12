import React from 'react';



function Hero() {

  return (
    <div className="container ">

      <div className="row text-center mt-5 mb-5 border-bottom">
        <h1 className="fs-2 mt-4">Charges</h1>
        <h4 className='text-muted mt-3 fs-4 mb-5'>List of all charges and taxes</h4>
      </div>


      <div className='row text-muted text-center'>

        <div className='col-4 mt-5 p-3'>
          <img  style={{width:"60%"}} src="/media/image/price_0.svg" alt="Price 0 "></img>
          <h2 className='fs-3 mt-3'>Free equity delivery</h2>
          <p className='mt-3 '  style={{fontSize:"14px" , lineHeight:"25px"}}>All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.</p>
        </div>

        <div className='col-4 mt-5 p-3'>
          <img style={{width:"60%"}} src="/media/image/price_20.svg" alt="Price 0 "></img>
          <h2 className='fs-3 mt-3'>Intraday and F&O trades</h2>
          <p className='mt-3'  style={{fontSize:"14px" , lineHeight:"25px"}}>Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.</p>
        </div>

        <div className='col-4 mt-5 p-3' style={{marginBottom:"150px"}}>
          <img style={{width:"60%"}} src="/media/image/price_0.svg" alt="Price 0 "></img>
          <h2 className='fs-3 mt-3'>Free direct MF</h2>
          <p className='mt-3' style={{fontSize:"14px" , lineHeight:"25px"}}>All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.</p>
        </div>




      </div>
    </div>
  )
}

export default Hero;