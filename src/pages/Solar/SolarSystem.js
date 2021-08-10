import React from 'react'
import './solar.css'

import Sun from '../../assets/images/sun.jpg'

const SolarSystem = () => {

    function handleClick(e) {   
        e.preventDefault();    
        console.log('Le lien a été cliqué.');  
    }
    return (
        <div className="solar">
            <div className=" container space-description">
        
                <div className="row ">
                    <div className="col-lg-4">
                        <div className="ellipse-container">
                            <h2 className="greeting">Sun</h2>
                            <div className="ellipse ellipse__outer--thin">
                                <div className="ellipse ellipse__orbit"></div>
                            </div>
                                {/* <img src={Sun} alt="" /> */}

                            <div className="ellipse ellipse__outer--thick"></div>
                        </div>
                       
                    </div>
                    <div className="col-lg-8">
                        <div className="space-information">
                            <h1>Sun</h1>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus corporis, ut quo tempora vel deserunt.</p>
                        </div> 
                    </div>
                </div>
                
                <div className="row ">
                    <div className="col-lg-4">
                        <div className="ellipse-container">
                            <h2 className="greeting">Mercury</h2>
                            <div className="ellipse ellipse__outer--thin">
                                <div className="ellipse ellipse__orbit"></div>
                            </div>
                                {/* <img src={Sun} alt="" /> */}

                            <div className="ellipse ellipse__outer--thick"></div>
                        </div>
                       
                    </div>
                    <div className="col-lg-8">
                        <div className="space-information">
                            <h1>Mercury</h1>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus corporis, ut quo tempora vel deserunt.</p>
                        </div> 
                    </div>
                </div>

                <div className="row ">
                    <div className="col-lg-4">
                        <div className="ellipse-container">
                            <h2 className="greeting">Venus</h2>
                            <div className="ellipse ellipse__outer--thin">
                                <div className="ellipse ellipse__orbit"></div>
                            </div>
                                {/* <img src={Sun} alt="" /> */}

                            <div className="ellipse ellipse__outer--thick"></div>
                        </div>
                       
                    </div>
                    <div className="col-lg-8">
                        <div className="space-information">
                            <h1>Venus</h1>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus corporis, ut quo tempora vel deserunt.</p>
                        </div> 
                    </div>
                </div>

                <div className="row ">
                    <div className="col-lg-4">
                        <div className="ellipse-container">
                            <h2 className="greeting">Earth</h2>
                            <div className="ellipse ellipse__outer--thin">
                                <div className="ellipse ellipse__orbit"></div>
                            </div>
                                {/* <img src={Sun} alt="" /> */}

                            <div className="ellipse ellipse__outer--thick"></div>
                        </div>
                       
                    </div>
                    <div className="col-lg-8">
                        <div className="space-information">
                            <h1>Earth</h1>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus corporis, ut quo tempora vel deserunt.</p>
                        </div> 
                    </div>
                </div>
            </div>

            

           
            
        </div>
    )
}

export default SolarSystem
