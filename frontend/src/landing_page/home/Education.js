import React from 'react';
import { Link } from 'react-router-dom';

function Education(){
    return(
        <div className="container mb-5">
        <div className="row home-section education-section">
                <div className="col-6">
                    <img style={{width:"80%"}} src="/media/image/education.svg" alt="Learn investing at your own pace" />
                </div>

                <div className="col-6 ">
                    <h1 className="fs-3">Get familiar with Trade2Day.</h1>
                    <br></br>
                    <p>Explore the dashboard tools and get to know the platform before deciding on your next step.</p>
                    
                    <Link to="/product" style={{textDecoration:"none"}}>Explore the platform <i className="fa-solid fa-arrow-right"></i></Link>
                    <br></br><br></br><br></br>

                    
                    <p>Find answers to common questions about account access, pricing and dashboard features.</p>
                    
                    <Link to="/support" style={{textDecoration:"none"}}>Get support <i className="fa-solid fa-arrow-right"></i></Link>
                </div>
        </div>
        </div>
    )
}

export default Education;