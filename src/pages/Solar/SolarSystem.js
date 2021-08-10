import React from 'react'
import './solar.css'
import Data from '../../components/Data/SolarSystemData.json'

const SolarSystem = () => {

    function handleClick(e) {   
        e.preventDefault();    
        console.log('Le lien a été cliqué.');  
    }

    console.log(Data)
    return (
        <div className="solar">
            <div className=" container space-description">
               
                {Data.map(planet => {
                    return (

                        <div className="row " key={planet.id}>
                           
                            <div className="col-lg-4">
                                <div className="ellipse-container">
                                    <h2 className="greeting">{planet.name}</h2>
                                    <div className="ellipse ellipse__outer--thin">
                                        <div className="ellipse ellipse__orbit"></div>
                                    </div>
                                    
                                    <img src={planet.image} alt="" />

                                    <div className="ellipse ellipse__outer--thick"></div>
                                </div>
                            
                            </div>
                            <div className="col-lg-8">
                                <div className="space-information">
                                    <h1>{planet.name}</h1>
                                    <div className="planet-description">
                                    <p>Diameter : {planet.diameter} km</p>    
                                    <p>Velocity : {planet.velocity} km/s</p>
                                    <p>Distance from Sun : {planet.distance} millions km</p>
                                    <p>{planet.description}</p>

                                    </div>
                                </div> 
                            </div>
                            
                        </div>
                    )
                })}

            </div>  
        </div>
    )
}

export default SolarSystem
