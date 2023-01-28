import React from 'react'
import './SelectsStyles.css'

import BoraBora from '../../assets/borabora.jpg'
import BoraBora2 from '../../assets/borabora2.jpg'
import Maldives from '../../assets/maldives.jpg'
import Maldives2 from '../../assets/maldives2.jpg'
import Maldives3 from '../../assets/maldives3.jpg'
import KeyWest from '../../assets/keywest.jpg'

import SelectsImg from '../SelectsImg/SelectsImg'

import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'


function Selects() {
    return (
        <div name='views' className='selects'>
            
            <div class="card text-center">
  
  <div class="card-body">
    <h1 class="card-title">Explore Our Gallery</h1>
    <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
    
  </div>
  
</div>
               

            
            <div className='container'>
                <SelectsImg bgImg={BoraBora} text='Bora Bora' />
                <SelectsImg bgImg={BoraBora2} text='Emerald Bay' />
                <SelectsImg bgImg={Maldives} text='Maldives' />
                <SelectsImg bgImg={Maldives2} text='Grenada' />
                <SelectsImg bgImg={Maldives3} text='Barbados' />
                <SelectsImg bgImg={KeyWest} text='Key West' />
            </div>
            
            <div class="contactcard text-end" style={{width: '100%'}}>
  <div class="card-bodyt">
    <h2 class="card-titles">Let’s Ready to Explore The 
World With Us.</h2>
    <p class="card-texts">With supporting text below as a natural lead-in to additional content.</p>
    <a href="/" class="btn btn-light">Contact Us</a>
  </div>
</div>


        </div>
    )
}

export default Selects
