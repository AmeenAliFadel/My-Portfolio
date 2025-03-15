import React from 'react'
import Me from "../../assets/me.png"
import './Home.css'
import HomeSocials from './HomeSocials'
export default function Home() {
    return (
        <div className='home'>
            <div className='container home-container'>
                <h4>Hello I`m</h4>
                <h1>Ameen Ali Fadel</h1>
                <h4 className='text-light'>Frontend Developer</h4>
                
                <div className='me'>
                    <img src={Me} alt="" />
                </div>
                <a href="#about" className='scroll-down'>Scroll Down</a>
                <HomeSocials />
            </div>
        </div>
    )
}
