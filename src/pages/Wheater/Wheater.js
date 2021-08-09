import React, { useEffect, useState } from 'react'
import './wheater.css'
import axios from 'axios'

const Wheater = (props) => {

    // const [wheaterData, setWheaterData] = useState([]);

    const [weather, setWheater] = useState([]);
    const [selectSol, setSelectedSol] = useState();
    const [metric, setMetric] = useState(true);
    const [previous, setPrevious] = useState(false);
    const [loading, setLoading] = useState(true);

    // useEffect(() => {
        
    //     const fetchData = async () => {
    //         const result =  await axios.get('https://api.nasa.gov/insight_weather/?api_key=FdRpkwGnCB3jVtxAL8b6JVYlGr33oKaRShCIttsc&feedtype=json&ver=1.0')
    //         console.log(result)
    //     }

    //     fetchData();

    //  }, [])

    useEffect(() => {
        const fetchFromAPI = async () => {
            const weather = await (await fetch('https://api.nasa.gov/insight_weather/?api_key=FdRpkwGnCB3jVtxAL8b6JVYlGr33oKaRShCIttsc&feedtype=json&ver=1.0')).json();
            // const marsWeather = weather.sol_keys.map(solKey => {
                
            //     return {
            //         sol: solKey,
            //         maxTemp: weather[solKey].AT.mx
            //     }

                
            // })
            console.log(weather)
            console.log(weather.sol_keys)
        }

        fetchFromAPI()
    }, [])

    // console.log(wheaterData)

    return (
        <div className="wheater-wrapper">
            <h1>Wheater Page</h1>
            <div className="container">
                <div className="row">
                    <p></p>
                </div>
            </div>
            
        </div>
    )
}

export default Wheater
