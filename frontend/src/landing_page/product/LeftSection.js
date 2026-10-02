import React from 'react';



function LeftSection({ imageURL,
    productName,
    productDescripton,
    tryDemo, learnMore,
    playStore,
    appStore
}) {
    return (
    <div className='container '>
        <div className="row mt-5 product-section">

            <div className='col-12 col-md-5 mb-5'>
                <img className="img-fluid" src={imageURL} alt={productName} />
            </div>

            <div className='d-none d-md-block col-md-2'></div>

            <div className='col-12 col-md-5 mt-5 mb-5 text-muted'>
                <h1 className="mt-2 fs-3"> {productName}</h1>
                <p>{productDescripton}</p>
                <div className='mt-4 product-links'>
                <a href={tryDemo} style={{ textDecoration:"none"}} > Try Damo <i class="fa-solid fa-arrow-right"></i></a>
                <a href={learnMore}style={{ textDecoration:"none" , margin:"40px"}}>Learn More <i class="fa-solid fa-arrow-right"></i></a>
                </div>
                <div className='mt-4 product-store-links'>
                <a  href={playStore}><img src="/media/image/playstore.svg" alt="playstore"></img></a>
                <a style={{ margin:"40px"}} href={appStore}><img src="/media/image/applestore.svg" alt="appstore"></img></a>
                </div>

            </div>

        </div>

    </div>
    )
}

export default LeftSection;