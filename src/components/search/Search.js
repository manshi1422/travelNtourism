import React from 'react'
import './SearchStyles.css'
import {AiFillStar} from 'react-icons/ai'
import BoraBora from '../../assets/borabora.jpg'
import BoraBora2 from '../../assets/borabora2.jpg'
import Maldives from '../../assets/maldives.jpg'

import Gold from '../../assets/gold.png'

function Search() {
    return (
//         <div name='book' className='search'>
            
//             <h1>Islands Stay</h1>
//                 <p>This is a unique experience on ship, sea and land, exploring different coral islands of Lakshadweep.</p>
                
//             <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
//     <div class="col1">
//       <div class="card shadow-sm">
//         <img src={Maldives} alt="/"/>
//         <div class="card-body">
//           <h5 class="card-title">Maldives</h5>
//           <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content.</p>
//           <button type="submit" class="btn btn-primary mb-3">Book Now</button>
//         </div>
//       </div>
//     </div>
//     <div class="col1">
//       <div class="card shadow-sm">
//         <img src={BoraBora2} alt="/"/>
//         <div class="card-body">
//           <h5 class="card-title">Bora Bora</h5>
//           <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content.</p>
//           <button type="submit" class="btn btn-primary mb-3">Book Now</button>
//         </div>
//       </div>
//     </div>
//     <div class="col1">
//       <div class="card shadow-sm">

//         <img src={BoraBora} alt="/"/>
//         <div class="card-body">
//           <h5 class="card-title">Key West</h5>
//           <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content.</p>
//           <button type="submit" class="btn btn-primary mb-3">Book Now</button>
//         </div>
//       </div>
//     </div>

    
// </div>

// <div className='booking'>
//                 <h1>Book Your Trip!</h1>
//                 <form class="row g-3">
  
//   <div class="col-auto">
//   <select class="form-select" aria-label="Default select example">
  
//   <option selected>Destination</option>
//   <option value="1">One</option>
//   <option value="2">Two</option>
//   <option value="3">Three</option>
// </select>
//   </div>
//   <div class="col-auto">
//     <label for="inputPassword2" class="visually-hidden">To</label>
//     <input type="date" class="form-control"  placeholder="To"/>
//   </div>
//   <div class="col-auto">
//     <label for="inputPassword2" class="visually-hidden">Departure Date</label>
//     <input type="date" class="form-control" id="inputPassword2" placeholder="Departure Date"/>
//   </div>
//   <div class="col-auto">
//   <select class="form-select" aria-label="Default select example">
  
//   <option selected>Passangers</option>
//   <option value="1">One</option>
//   <option value="2">Two</option>
//   <option value="3">Three</option>
// </select>
// </div>
//   <div class="col-auto">
//     <button type="submit" class="btn btn-primary mb-3">Check Availability</button>
//   </div>
// </form>
// </div>
//                 </div>
<div name='destinations' className='destinations'>
           
        
           <div className="container">
               <div className='flight'>
               <h1>Plan Your Trip!</h1>
               <form class="row g-3">
 
               <div class="col-auto">
   <select class="form-select" aria-label="Default select example">
  
   <option selected>Destination</option>
   <option value="1">One</option>
   <option value="2">Two</option>
   <option value="3">Three</option>
 </select>
   </div>
   <div class="col-auto">
     <label for="inputPassword2" class="visually-hidden">To</label>
     <input type="date" class="form-control"  placeholder="To"/>
   </div>
   <div class="col-auto">
     <label for="inputPassword2" class="visually-hidden">Departure Date</label>
     <input type="date" class="form-control" id="inputPassword2" placeholder="Departure Date"/>
 </div>
   <div class="col-auto">
   <select class="form-select" aria-label="Default select example">
  
   <option selected>Passangers</option>
   <option value="1">One</option>
   <option value="2">Two</option>
   <option value="3">Three</option>
 </select>
 </div>
   <div class="col-auto">
     <button type="submit" class="btn btn-primary mb-3">Check Availability</button>
   </div>
</form>
</div>
               <h1>Islands Stay</h1>
               <p>One can choose from a variety of beautiful coral islands which offers different staying experiences from thatched huts to luxurious
 modern properties. Every island offers a wider range of water sports and beach activities for you to enjoy.</p>
               <div class="container3 p-10">
   
   
 <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3"><div className='carding'>
 <div class="card" style={{width: '18rem'}}>
  <img src={BoraBora} class="card-img-top" alt="/"/>
  <div class="card-body">
    <h5 class="card-title">Maldives</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <p><AiFillStar className='icon' style={{ color: '#FFD700' }}/>4.5 star(1.5k reviews)</p>
    <a href="/" class="btn btn-primary">Go somewhere</a>
  </div>
  </div>
</div><div className='carding'>
<div class="card" style={{width: '18rem'}}>
  <img src={BoraBora} class="card-img-top" alt="/"/>
  <div class="card-body">
    <h5 class="card-title">Maldives</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
     <p><AiFillStar className='icon' style={{ color: '#FFD700' }}/>4.5 star(1.5k reviews)</p><a href="/" class="btn btn-primary">Go somewhere</a>
  </div>
  </div>
</div><div className='carding'>
<div class="card" style={{width: '18rem'}}>
  <img src={BoraBora} class="card-img-top" alt="/"/>
  <div class="card-body">
    <h5 class="card-title">Maldives</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
     <p><AiFillStar className='icon' style={{ color: '#FFD700' }}/>4.5 star(1.5k reviews)</p><a href="/" class="btn btn-primary">Go somewhere</a>
  </div>
  </div>
</div>

   
</div>
 </div>
 <div class="container3 p-10">
   
   
 <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3"><div className='carding'>
 <div class="card" style={{width: '18rem'}}>
  <img src={BoraBora} class="card-img-top" alt="/"/>
  <div class="card-body">
    <h5 class="card-title">Maldives</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
     <p><AiFillStar className='icon' style={{ color: '#FFD700' }}/>4.5 star(1.5k reviews)</p><a href="/" class="btn btn-primary">Go somewhere</a>
  </div>
  </div>
</div><div className='carding'>
<div class="card" style={{width: '18rem'}}>
  <img src={BoraBora} class="card-img-top" alt="/"/>
  <div class="card-body">
    <h5 class="card-title">Maldives</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
     <p><AiFillStar className='icon' style={{ color: '#FFD700' }}/>4.5 star(1.5k reviews)</p><a href="/" class="btn btn-primary">Go somewhere</a>
  </div>
  </div>
</div><div className='carding'>
<div class="card" style={{width: '18rem'}}>
  <img src={BoraBora} class="card-img-top" alt="/"/>
  <div class="card-body">
    <h5 class="card-title">Maldives</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
     <p><AiFillStar className='icon' style={{ color: '#FFD700' }}/>4.5 star(1.5k reviews)</p><a href="/" class="btn btn-primary">Go somewhere</a>
  </div>
  </div>
</div>

   
</div>
 </div>
 
           </div>
           </div>
           
        
    )
}

export default Search
