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
        <di className="row mt-5 ">

            <div className='col-5 mb-5'>
                <img src={imageURL} />
            </div>

            <div className='col-2'></div>

            <div className='col-5 mt-5  mb-5 text-muted'>
                <h1 className="mt-2 fs-3"> {productName}</h1>
                <p>{productDescripton}</p>
                <div className='mt-4 '>
                <a href={tryDemo} style={{ textDecoration:"none"}} > Try Damo <i class="fa-solid fa-arrow-right"></i></a>
                <a href={learnMore}style={{ textDecoration:"none" , margin:"40px"}}>Learn More <i class="fa-solid fa-arrow-right"></i></a>
                </div>
                <div className='mt-4'>
                <a  href={playStore}><img src="/media/image/playstore.svg" alt="playstore"></img></a>
                <a style={{ margin:"40px"}} href={appStore}><img src="/media/image/applestore.svg" alt="appstore"></img></a>
                </div>

            </div>

        </di>

    </div>
    )
}

export default LeftSection;