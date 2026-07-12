import React from 'react';

function Education(){
    return(
        <div>
        <div className="container mb-5">
            <div className="row">
                <div className="col-6">
                    <img style={{width:"80%"}} src="/media/image/education.svg"></img>
                </div>

                <div className="col-6 ">
                    <h1 className="fs-3">Free and open market education</h1>
                    <br></br>
                    <p>Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.</p>
                    
                    <a href="#"   style={{textDecoration:"none"}}>Varsity <i class="fa-solid fa-arrow-right"></i> </a>
                    <br></br><br></br><br></br>

                    
                    <p>Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.</p>
                    
                    <a href="#"   style={{textDecoration:"none"}}>Trading Q&A <i class="fa-solid fa-arrow-right"></i> </a>
                </div>
            </div>
        </div>
        </div>
    )
}

export default Education;