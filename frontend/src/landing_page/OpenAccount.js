import React from 'react';
import { Link } from 'react-router-dom';

function OpenAccount(){
    return(
        <div className="account-cta">
        <div className="row text-center">
             <h1 className="fs-3 mb-3">Your next chapter starts here.</h1>
             <p>Modern tools, transparent pricing and a smarter way to invest.</p>
             <Link to="/signup" className="btn btn-primary mt-3" style={{width:"fit-content", minWidth:"190px", margin:"auto"}}>Create your account</Link>

        </div>
        </div>
    )
}

export default OpenAccount;