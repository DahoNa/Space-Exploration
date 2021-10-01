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
                <Link to="/" className="navbar-brand logo active" href="#">SpaceEx.</Link>
            
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link to="/pictures-of-the-day" className="nav-link">Picture of the Day</Link >
                    </li>
                    <li className="nav-item px-5">
                        <Link to="/solar-system" className="nav-link">Solar System</Link >
                    </li>
                </ul>
            </div>
        </header>
       
    )
}

export default Header

