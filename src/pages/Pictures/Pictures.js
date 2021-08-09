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
                setPhotoData(result.data)
                console.log(photoData)
            })
            .catch(error => {
                console.log(error.response)
            });
            
        }
        fetchPhoto();  
        setLoading(true);

    }, []);

    // if(!photoData) return <div />;

    return (
        <section className="picture">
            {/* <div className="container"> */}
                <div className="row mt-5">
                    <div className="picture-date col-lg-12">
                        <h1>{photoData.date}</h1>
                    </div>
                    <div className="picture-day col-lg-8">
                        {loading ? 
                            (
                                <>
                                <a href={photoData.hdurl}><img src={photoData.url} alt="" /> </a>
                                <p>© {photoData.copyright}</p>
                                </>
                            ) 
                        : 
                            ( 

                                <Spinner />

                            )
                        }
                    </div>
                    <div className="picture-info col-lg-4">
                        <h3>{photoData.title}</h3>
                        <p>{photoData.explanation}</p>
                    </div>
                </div>
            {/* </div> */}
            
        </section>
    )
}

export default Pictures
