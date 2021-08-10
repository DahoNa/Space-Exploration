import React, {useState, useEffect} from 'react'
import './picture.css'
import axios from 'axios';

import Spinner from '../../components/Spinner/Spinner';

const apiKey = process.env.REACT_APP_NASA_KEY;
const Pictures = (props) => {

    const [photoData, setPhotoData] = useState([]);
    const [loading, setLoading] = useState(false);
   

    useEffect(() => {
        const fetchPhoto = async () => {
            // console.log(props)
            const result = await axios.get(`https://api.nasa.gov/planetary/apod?api_key=${apiKey}`)
            .then( result => {
                setTimeout(() => {

                    setPhotoData(result.data)
                    console.log(photoData)
                    setLoading(true);
                }, 400)
            })
            .catch(error => {
                console.log(error.response)
            });
            
        }
        fetchPhoto();  

    }, []);

    // if(!photoData) return <div />;

    return (
        <section className="picture">
            {/* <div className="container"> */}
                <div className="row mt-5">
                        {loading ?
                        (
                            <>
                            {/* <div className="picture-date col-lg-12">
                                <h1>{photoData.title}</h1>
                            </div> */}
                            <div className="picture-day col-lg-8">
                                <h1>{photoData.title}</h1>
                                <a href={photoData.hdurl}><img src={photoData.url} alt="" /> </a>
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
                                <div className="col-lg-12">
                                    <Spinner />
                                </div>

                            )
                        }
                </div>
            {/* </div> */}
            
        </section>
    )
}

export default Pictures
