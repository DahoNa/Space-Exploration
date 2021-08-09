import React from 'react'
import './spinner.css'
const Spinner = () => {
    return (
        <section className="spinner">
            <div className="hex-border">
                <div className="hexagons">
                    <div className="hexagon"></div>
                    <div className="hexagon"></div>
                    <div className="hexagon"></div>
                    <div className="hexagon"></div>
                    <div className="hexagon"></div>
                    <div className="hexagon"></div>
                    <div className="hexagon"></div>
                </div>
            </div>
        </section>
    )
}

export default Spinner
