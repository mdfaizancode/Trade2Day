import React from 'react';



function RightSection({ imageURL,
    productName,
    productDescripton, learnMore,
}) {
    return (
    <div className='container '>
        <div className="row mt-5 product-section">

            <div className='col-12 col-md-5 mt-5 mb-5 text-muted'>
                <h1 className="mt-2 fs-3 mt-5"> {productName}</h1>
                <p>{productDescripton}</p>
                <div className='mt-4 '>
                <a href={learnMore}style={{ textDecoration:"none" }}>Learn More <i class="fa-solid fa-arrow-right"></i></a>
                </div>
            </div>

                            <div className='d-none d-md-block col-md-2'></div>

                            <div className='col-12 col-md-5 mb-5'>
                                <img className="img-fluid" src={imageURL} alt={productName} />
            </div>

                </div>

    </div>
    )
}

export default RightSection;