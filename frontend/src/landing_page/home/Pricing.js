import React from 'react';

function Pricing(){
    return(
        <div className="container mb-5 ">
        <div className="row mt-5">
         <div className="col-5 mb-5">
           <h1 className="fs-3">Unbeatable pricing</h1>
           <p>We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.</p>
           <a href="#"  style={{textDecoration:"none"}}>See Pricing <i class="fa-solid fa-arrow-right"></i> </a>

         </div>

             <div className="col-7 mb-5">   
                <i style={{color:"orange"}} class="fa-solid fa-indian-rupee-sign"></i>
                <h1 style={{display:"inline-block" , fontSize:"80px", color:"orange" ,}}>0</h1> 
                <p style={{display:"inline-block", fontSize:"10px" ,padding:"8px", }}>Free account openeing</p>

                <i style={{color:"orange"}} class="fa-solid fa-indian-rupee-sign"></i>
                <h1 style={{display:"inline-block" , fontSize:"80px", color:"orange"}}>0</h1>
                 <p style={{display:"inline-block", fontSize:"10px", padding:"8px",}}>Free equity delevery<br></br> and direct mutual funds</p>


                <i style={{color:"orange"}}  class="fa-solid fa-indian-rupee-sign"></i>
                <h1 style={{display:"inline-block" , fontSize:"80px", color:"orange"}}>20</h1>
                 <p style={{display:"inline-block ", fontSize:"10px" , padding:"8px", }}>Intraday and <br></br>F&O </p>



             </div>
        </div>
        </div>
    )
}

export default Pricing;