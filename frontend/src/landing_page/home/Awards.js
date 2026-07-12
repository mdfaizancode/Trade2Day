import React from 'react';

function Awards(){
    return(
        <div className="container mt-5 mb-5">
            <div className="row">
                <div className="col-5 mt-5">

                    <h2 className="fs-2">Trust with confidence</h2>
                     <br></br>
                    <h4 > Customer-first always</h4>
                    <p > That's why 1.6+ crore customers trust Zerodha <br></br>
                        with ~ ₹6 lakh crores of equity investments, <br></br>
                        making us India’s  largest broker; contributing<br></br>
                     to 15% of daily retail exchange volumes in India.</p> 
                    <br></br>

                    
                    <h4 > No spam or gimmicks</h4>
                    <p> No gimmicks, spam, "gamification", or annoying push notifications. High quality apps that you use at your pace, the way you like. <a href="#"> Our philosophies.</a></p> 
                    <br></br>
                 
                    <h4> The Zerodha universe</h4>
                    <p> Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your needs.</p>
                     <br></br>

                    
                    <h4> Do better with money</h4>
                    <p>With initiatives like <a href="#"> Nudge </a> and <a href="#">Kill Switch</a> , we don't just facilitate transactions, but actively help you do better with your money.</p>
                     <br></br>

                </div>

                <div className="col-7 p-5 mt-5">  
                   <img className="mb-4" src="media\image\ecosystem.png" alt="Ecosystem" style={{width:"100%"}}></img>
                 <h6   ><a href="#"  className="m-5" style={{textDecoration:"none"}}>Explore Our Products <i class="fa-solid fa-arrow-right"></i> </a><a href="#"  className="m-5 "style={{textDecoration:"none"}}>Try Kite Demo <i class="fa-solid fa-arrow-right"></i></a></h6>
                </div>

                
            </div>
        
        </div>
    )
}

export default Awards;