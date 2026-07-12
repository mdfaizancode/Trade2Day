import React from 'react';

import Awards from './Awards';
import Pricing from './Pricing';
import Education from './Education';
import Hero from './Hero';

import OpenAccount from '../OpenAccount';


function HomePage(){
    return(
        <div>

              <Hero/>
              <Awards/> 
              <Pricing/>
              <Education/>

              <OpenAccount/>
            
        </div>
    )
}

export default HomePage;