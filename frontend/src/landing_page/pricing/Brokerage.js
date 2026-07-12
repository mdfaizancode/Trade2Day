import React from 'react'; 
import {NavLink} from "react-router-dom";




function Brokerage (){

    return(
        <>
        <div className='container'>
             <div className='row text-center mt-5  '>
                <div className='col-6  border-bottom'>
                    <NavLink to="/pricing/Brokerage/Power"    style={({ isActive }) => ({
                textDecoration: "none",
                color: "black",
                fontSize: "30px",
                borderBottom: isActive ? "3px solid green" : "none",
                paddingBottom: "5px"
              })}>Equity</NavLink>
                </div>
                <div className='col-6 border-bottom'>
                   <NavLink to="/pricing/Brokerage/Pricing" style={({ isActive }) => ({
                textDecoration: "none",
                color: "black",
                fontSize: "30px",
                borderBottom: isActive ? "3px solid green" : "none",
                paddingBottom: "5px"
              })}>Currency</NavLink>
                </div>
             </div>
             
             
        </div>
        
        </>

    )
}

export default Brokerage;