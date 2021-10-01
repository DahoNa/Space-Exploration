import React, {useState, useEffect} from 'react'
import './picture.css'
import axios from 'axios';

import Spinner from '../../components/Spinner/Spinner';

// const apiKey = process.env.REACT_APP_NASA_KEY;
const apiKey = "zZmYTUwkM24aO7fakV34owONmVVz7OnzpBRy5iX1";

const Pictures = () => {

    const [photoData, setPhotoData] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchPhoto = async () => {
            const result = await axios.get(`https://api.nasa.gov/planetary/apod?api_key=${apiKey}`)
            .then( result => {
                setTimeout(() => {

                    setPhotoData(result.data)
                    setLoading(true);
                }, 400)
            })
            .catch(error => {
                console.log(error.response)
            });
            
        }
        fetchPhoto();  

    }, []);

    return (
        <div className="picture">
                <div className="row mt-5">
                        {loading ?
                        (
                            <>
                            <div className="picture-day col-lg-8">
                                <h1>{photoData.title}</h1>
                                <a href={photoData.hdurl}><img src={photoData.url} alt="Nasa Picture" /> </a>
                                <p>© {photoData.copyright}</p>
                            </div>
                            <div className="picture-info col-lg-4">
                                <h3>{photoData.date}</h3>
                                <p>{photoData.explanation}</p>
                            </div>
                            </>
                            ) 
                        : 
                            ( 
                            <div className="spinner-container">
                                <div className="spinner">
                                    <Spinner />
                                </div>
                            </div>

                            )
                        }
                </div>
        </div>
    )
}

export default Pictures
