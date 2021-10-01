import React, { useEffect, useState } from 'react'

import { Link } from 'react-router-dom'
import './header.css'

const Header = () => {

    const [show, handleShow] = useState()

    useEffect(() => {
        window.addEventListener("scroll", () => {

            if (window.scrollY > 100) {

                handleShow(true)

            }else {

                handleShow (false)
            }
        })

        return () => {
            window.removeEventListener("scroll", () => {

                if (window.scrollY < 100) {

                    handleShow(false);

                } else {

                    handleShow(true);
                } 
            });
        }
    }, []);
    return (
        <header>
            <div className={`nav ${show && 'nav-black'}`}>
            {/* <nav class="navbar navbar-expand-lg fixed-top"> */}
                {/* <div class="container-fluid"> */}
                    <Link to="/" class="navbar-brand logo active" href="#">SpaceEx.</Link>
                
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <Link to="/pictures-of-the-day" class="nav-link">Picture of the Day</Link >
                        </li>
                        <li class="nav-item px-5">
                            <Link to="/solar-system" class="nav-link">Solar System</Link >
                        </li>
                    </ul>
                    
                {/* </div> */}
            {/* </nav> */}
            </div>

        </header>
       
    )
}

export default Header

