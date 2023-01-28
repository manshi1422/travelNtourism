import React from 'react'
import './HeroStyles.css'


import Video from '../../assets/maldivesVideo.mp4'

function Hero() {
    
    return (
        
        <div className='hero'>
            <video autoPlay loop muted id='video'>
                <source src={Video} type='video/mp4' />
            </video>
            <div className="overlay"></div>
            <div className="content">
                <h2>Visit</h2>
                <h1>The Exotic Lakshadweep Islands</h1>
                
                
                {/* <form className="form">
                    <div>
                        <input type="text" placeholder='From' />
                    </div>
                    <div>
                        <input type="text" placeholder='To' />
                    </div>
                    <div>
                        <input type="text" placeholder='Date' />
                    </div>
                    <div>
                        <input type="text" placeholder='Passangers' />
                    </div>
                    <div>
                        <button><AiOutlineSearch className='icon'/></button>
                    </div>
                </form> */}
            </div>
        </div>
    )
}

export default Hero
