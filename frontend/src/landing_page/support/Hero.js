import React from 'react';



function Hero (){

    return(
      <>
      
      <section className='container-fluid' id="supportHero">
        <div className=' mt-5 p-5' id="supportWrapper">
          <h3>Support Portal </h3> 
          <a href="#">Track Tickets</a>
        </div>

          <div className="row t-4">
            <div className="col-1"></div>
            <div className="col-5 mt-4  p-5 b-5" id="supportLeft">
              <h3 className="fs-4">Search for an answer or browser <br/>for help topics</h3>
              <input type="text" placeholder="eg: how do i activate F&O why is my order getting rejected" />
              <br></br>
              <a href="#" > track account opening</a>
              <a href="#"> track segment activation </a>
              <a href="#"> intraday</a> <br></br>
              <a href="#"> margins</a>
              <a href="#"> kite user manual </a>
            </div>
            <div className="col-1"></div>
            <div className="col-5 mt-5 p-5 mb-5 " id="supportRight">
              <h3>Featured</h3>
              <ol>
              <li><a href="#"> current takeover and delisting</a></li>
              <li><a href="#"> latest intraday laverage - MIS</a></li>
              </ol>

            </div>
          </div>


      
      </section>
      </>
    )
}

export default Hero;