import React from 'react'
import './ImgCarouselStyles.css'
import {AiFillStar} from 'react-icons/ai'

import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

import BoraBora from '../../assets/borabora.jpg'
import BoraBora2 from '../../assets/borabora2.jpg'
import Maldives from '../../assets/maldives.jpg'

function ImgCarousel() {
    return (
        <div name='carousel' className='container'>
            <Carousel className='carousel' showArrows={true} autoPlay={false} infiniteLoop={true} >
                <div>
                    <img src={BoraBora} alt='/' />
                    {/* <p className="legend">Maldives 1</p> */}
                </div>
                <div>
                    <img src={BoraBora2} alt='/' />
                    {/* <p className="legend">Legend 2</p> */}
                </div>
                <div>
                    <img src={Maldives} alt='/' />
                    {/* <p className="legend">Legend 3</p> */}
                </div>
            </Carousel>
            <div class="card text-center">
  
  <div class="card-body">
    <h1 class="card-title">What Our Client Says About Us</h1>
    <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
    
  </div>
  
</div>
            <section>
  

  <div class="row text-center d-flex align-items-stretch">
    <div class="col-md-4 mb-5 mb-md-0 d-flex align-items-stretch">
      <div class="card testimonial-card">
        <div class="card-up" style={{ background: '#FFD700' }} ></div>
        <div class="avatar mx-auto bg-white">
          <img src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(1).webp"
            class="rounded-circle img-fluid" alt='/' />
        </div>
        <div class="card-body">
          <h4 class="mb-4">Maria Smantha</h4>
          <hr />
          <p class="dark-grey-text mt-4">
            <i class="fas fa-quote-left pe-2"></i>Lorem ipsum dolor sit amet eos adipisci,
            consectetur adipisicing elit.
          </p>
          <p><AiFillStar className='icon' style={{ color: '#FFD700' }}/>
          <AiFillStar className='icon' style={{ color: '#FFD700' }}/>
          <AiFillStar className='icon' style={{ color: '#FFD700' }}/>
          <AiFillStar className='icon' style={{ color: '#FFD700' }}/></p>
        </div>
      </div>
    </div>
    <div class="col-md-4 mb-5 mb-md-0 d-flex align-items-stretch">
      <div class="card testimonial-card">
        <div class="card-up" style={{ background: '#7a81a8' }}></div>
        <div class="avatar mx-auto bg-white">
          <img src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(2).webp"
            class="rounded-circle img-fluid" alt='/' />
        </div>
        <div class="card-body">
          <h4 class="mb-4">Lisa Cudrow</h4>
          <hr />
          <p class="dark-grey-text mt-4">
            <i class="fas fa-quote-left pe-2"></i>Neque cupiditate assumenda in maiores
            repudi mollitia architecto.
          </p>
          <p><AiFillStar className='icon' style={{ color: '#FFD700' }}/>
          <AiFillStar className='icon' style={{ color: '#FFD700' }}/>
          <AiFillStar className='icon' style={{ color: '#FFD700' }}/></p>
        </div>
      </div>
    </div>
    <div class="col-md-4 mb-0 d-flex align-items-stretch">
      <div class="card testimonial-card">
        <div class="card-up" style={{ background: '#6d5b98' }}></div>
        <div class="avatar mx-auto bg-white">
          <img src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(9).webp"
            class="rounded-circle img-fluid" alt='/'/>
        </div>
        <div class="card-body">
          <h4 class="mb-4">John Smith</h4>
          <hr />
          <p class="dark-grey-text mt-4">
            <i class="fas fa-quote-left pe-2"></i>Delectus impedit saepe officiis ab
            aliquam repellat rem unde ducimus.
          </p>
          <p>
          <AiFillStar className='icon' style={{ color: '#FFD700' }}/>
          <AiFillStar className='icon' style={{ color: '#FFD700' }}/>
          <AiFillStar className='icon' style={{ color: '#FFD700' }}/>
          <AiFillStar className='icon' style={{ color: '#FFD700' }}/>
          <AiFillStar className='icon' style={{ color: '#FFD700' }}/>
          </p>
        </div>
      </div>
    </div>
  </div>
</section>
        </div>


    )
}

export default ImgCarousel
