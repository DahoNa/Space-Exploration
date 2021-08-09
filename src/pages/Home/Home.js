import React, { useContext, useState, useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './home.css'

// import RoverNew from '../../components/images/rovernew.png'
// import { GlobalContext } from '../../components/GlobalContext/GlobalContext'

const Home = (props) => {

    // const [timerDays, setTimerDays] = useState('00')
    // const [timerHours, setTimerHours] = useState('00')
    // const [timerMinutes, setTimerMinutes] = useState('00')
    // const [timerSeconds, setTimerSeconds] = useState('00')

    // let interval = useRef()

    // const startTimer = () => {
    //     const countdownDate = new Date('Feb 27, 2021 22:00:00').getTime();

    //     interval = setInterval(() => {
    //         const now = new Date().getTime();
    //         const distance = countdownDate - now;

    //         const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    //         const hours = Math.floor((distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60)));
    //         const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    //         const seconds = Math.floor((distance % (1000 * 60)) / 1000);
            
    //         if(distance < 0) {
    //             clearInterval(interval.current)
    //         }else {
    //             setTimerDays(days);
    //             setTimerHours(hours);
    //             setTimerMinutes(minutes);
    //             setTimerSeconds(seconds);
    //         }

    //     }, 1000)

    // }

    // useEffect(() => {
    //     startTimer();
    //     return () => {
    //         clearInterval(interval.current)
    //     }
    // }, [])

    


    return (
       <section className="landing">
           <div className="row">
               <div className=" col-lg-8 center-title mt-5">
                   {/* <span>01 ___ 03</span> */}
                   <h1>SPACE EXPLORATION</h1>
                   <div className="button-space mt-5">

                    <a href="#" className="btn">Explore!</a>
                   </div>
               </div>
               {/* <div className="offset-lg-3 col-lg-3">
                   <h5>LUNE</h5>
                   <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, officia!</p>
               </div> */}

               {/* <div className="offset-lg-3 col-lg-3">
                   <h5>© Copyright 2021 - Daho NAHLA. Tous droits réservés.</h5>
               </div> */}

               {/* <div className="col-lg-3">
                   <h5>SOLEIL</h5>
                   <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, officia!</p>
               </div> */}
           </div>
       </section>
    )
}

export default Home
