import React from 'react'
import './DestinationsStyles.css'

import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'

import BoraBora from '../../assets/borabora.jpg'
import BoraBora2 from '../../assets/borabora2.jpg'
import Maldives from '../../assets/maldives.jpg'
import Maldives2 from '../../assets/maldives2.jpg'
import KeyWest from '../../assets/keywest.jpg'

function Destinations() {
    return (
        <div name='destinations' className='destinations'>
           
        
            <div className="container">
                <div className='flight'>
                <h1>Where Are You  Flying!</h1>
                <form class="row g-3">
  
  <div class="col-auto">
    <label for="inputPassword2" class="visually-hidden">From</label>
    <input type="password" class="form-control" id="inputPassword2" placeholder="From"/>
  </div>
  <div class="col-auto">
    <label for="inputPassword2" class="visually-hidden">To</label>
    <input type="password" class="form-control" id="inputPassword2" placeholder="To"/>
  </div>
  <div class="col-auto">
    <label for="inputPassword2" class="visually-hidden">Departure Date</label>
    <input type="password" class="form-control" id="inputPassword2" placeholder="Departure Date"/>
  </div>
  <div class="col-auto">
    <label for="inputPassword2" class="visually-hidden">Passangers</label>
    <input type="password" class="form-control" id="inputPassword2" placeholder="Passangers"/>
  </div>
  <div class="col-auto">
    <button type="submit" class="btn btn-primary mb-3">Show Flights</button>
  </div>
</form>
</div>
                <h1>Best Packages For You</h1>
                <p>This is a unique experience on ship, sea and land, exploring different coral islands of Lakshadweep.</p>
                <div class="container3 p-10">
    
    
  <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
    <div class="col1">
      <div class="card shadow-sm">
        <img src={Maldives} alt="/"/>
        <div class="card-body">
          <h5 class="card-title">Maldives</h5>
          <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content.</p>
          <button type="submit" class="btn btn-primary mb-3">Book Now</button>
        </div>
      </div>
    </div>
    <div class="col1">
      <div class="card shadow-sm">
        <img src={BoraBora2} alt="/"/>
        <div class="card-body">
          <h5 class="card-title">Bora Bora</h5>
          <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content.</p>
          <button type="submit" class="btn btn-primary mb-3">Book Now</button>
        </div>
      </div>
    </div>
    <div class="col1">
      <div class="card shadow-sm">

        <img src={BoraBora} alt="/"/>
        <div class="card-body">
          <h5 class="card-title">Key West</h5>
          <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content.</p>
          <button type="submit" class="btn btn-primary mb-3">Book Now</button>
        </div>
      </div>
    </div>

    
</div>
  </div>
  <div className='button'>
  <button type="button" class="btn btn-outline-dark">Discover More</button></div>
                {/* <div className="img-container">
                    <img className='span-3 image-grid-row-2' src={BoraBora} alt="/"/>
                    <img src={BoraBora2} alt="/"/>
                    <img src={Maldives} alt="/"/>
                    <img src={Maldives2} alt="/"/>
                    <img src={KeyWest} alt="/"/>
                </div> */}
            </div>
            </div>
        
    )
}

export default Destinations
