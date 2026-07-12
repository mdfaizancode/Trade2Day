import React from 'react';
import Hero from './Hero';
import LeftSection from './LeftSection';
import RightSection from './RightSection';
import Universe from './Universe';

function Product() {

    return (
        <>
            <Hero />
            <LeftSection
                imageURL="media/image/kite.png"
                productName="Kite"
                productDescripton="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices."
                tryDemo=""
                learnMore=""
                playStore=""
                appStore=""
            />
            <RightSection
                imageURL="media/image/console.png"
                productName=" Console"
                productDescripton="The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations."
                tryDemo=""
                learnMore=""
            />

            <LeftSection
                imageURL="media/image/coin.png"
                productName="Coin"
                productDescripton="Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices."
                tryDemo=""
                learnMore=""
                playStore=""
                appStore=""
            />
           <RightSection
                imageURL="media/image/landing.svg"
                productName="Kite Connect API"
                productDescripton="Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase."
                tryDemo=""
                learnMore=""
            />

            <LeftSection
                imageURL="media/image/varsity.svg"
                productName="Varsity Mobile"
                productDescripton="An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go."
                tryDemo=""
                learnMore=""
                playStore=""
                appStore=""
            />
            <Universe/>
        </>
    )
}

export default Product;