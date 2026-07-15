import React from 'react';
import {Link} from 'react-router-dom';

function Navbar() {
    return (
        <nav class="navbar navbar-expand-lg sticky-top  border " style={{backgroundColor:"white" , padding:"15px"}}>
            <div class="container-fluid">
               <Link to="/"> <img src="/media/image/logo.svg" alt="websitelogo" style={{width:"50%" ,margin:"10px"}}></img> </Link>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">

                    <form class="d-flex" role="search">
                        <ul class="navbar-nav mb-2   mb-lg-0">
                            <li class="nav-item ">
                                <Link class="nav-link " aria-current="page" to="https://https://trade2daydashboard.vercel.app/" style={{marginLeft:"20px", marginRight:"90px "}}> Dashboard </Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link " aria-current="page" to="/signup">SignUp </Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link " aria-current="page" to="/about">About</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link " aria-current="page" to="/product">Product</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link " aria-current="page" to="/pricing">Pricing</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link " aria-current="page" to="support">Supprot</Link>
                            </li>
                            <li>
                                 <i class="fa-solid fa-bars bars" ></i>
                            </li>
                        </ul>
                       
                    </form>

                </div>
            </div>
        </nav>
    )
}

export default Navbar;