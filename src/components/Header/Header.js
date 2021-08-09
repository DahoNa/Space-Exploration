import React from 'react'
import { Link } from 'react-router-dom'
import './header.css'

const Header = () => {
    return (
        <header>
            <nav class="navbar navbar-expand-lg fixed-top">
                {/* <div class="container-fluid"> */}
                    <a class="navbar-brand" href="#">Navbar</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <i className="fas fa-align-right"></i>
                    </button>
                    <div className="mx-auto mt-5">

                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item active px-5">
                            <Link to="/" class="nav-link active"  aria-current="page">Home</Link >
                            </li>
                            <li class="nav-item px-5">
                                <Link to="/pictures_of_the_day" class="nav-link">Picture of the Day</Link >
                            </li>
                            <li class="nav-item px-5">
                                <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
                            </li>
                        </ul>
                    </div>
                    </div>
                {/* </div> */}
            </nav>
        </header>
       
    )
}

export default Header

