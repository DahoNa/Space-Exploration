import React, { useContext, useEffect, useState } from 'react'
import './rovers.css'
import axios from 'axios'

const Rovers = (props) => {
    const [photoData, setPhotoData] = useState([]);
   

    useEffect(() => {
        const fetchData = async () => {
            console.log(props)
                let result = await axios.get(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&page=1&api_key=OogoTGP9ShJcA0SmE6xecPLc9IjaaQz1kNSP8qh8`)
                .then( result => {
                    setPhotoData(result.data)
                    console.log(photoData)
                })
                .catch(error => {
                    console.log(error.response)
                });
        
        }
        fetchData();  

    }, []);

   

    return (
        <div className="rovers-wrapper">
            
            <button>Curiosity</button>
        </div>
    )
}

export default Rovers
