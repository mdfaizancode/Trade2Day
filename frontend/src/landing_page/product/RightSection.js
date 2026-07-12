import React from 'react';



function RightSection({ imageURL,
    productName,
    productDescripton, learnMore,
}) {
    return (
    <div className='container '>
        <di className="row mt-5 ">

            <div className='col-5 mt-5 mb-5 text-muted'>
                <h1 className="mt-2 fs-3 mt-5"> {productName}</h1>
                <p>{productDescripton}</p>
                <div className='mt-4 '>
                <a href={learnMore}style={{ textDecoration:"none" }}>Learn More <i class="fa-solid fa-arrow-right"></i></a>
                </div>
            </div>

              <div className='col-2'></div>

              <div className='col-5  mb-5'>
                <img style={{width:"130%"}} src={imageURL} />
            </div>

        </di>

    </div>
    )
}

export default RightSection;