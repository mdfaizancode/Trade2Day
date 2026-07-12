import React from 'react';

function ErrorPage(){
    return(
        <div className="container ">
        <div className="row text-center">
             <h1 className="fs-3 mt-5 mb-4" style={{color:"red"}}>404 Page Not Found</h1>
             <p>Sorry this page not exists</p>
        </div>
        </div>
    )
}

export default ErrorPage;