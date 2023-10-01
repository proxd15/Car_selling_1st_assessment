import React from 'react';
const CarCard = ({ car }) => {
  return (
    <div className=' col-4 d-flex justify-content-center'>
    <div class="card mb-3" style={{ width: 20 + 'rem' , height: 25 + 'rem'}}>
      
      <img src={car.images} class="card-img-top" style={{height: 13+'rem',padding:10+'px',borderRadius:10+'px'}} alt="..." />
      <div class="card-body">
        <div className='d-flex justify-content-between'>
        <h5 class="card-title mb-4 col-6" style={{fontWeight: 'bold',fontSize: 15+'px'}}>{car.name}</h5>
       <div className='col-6' style={{border: 'dotted 1px #4899ec', width:'40px',height:'18px',textAlign:'center',borderRadius:'15px',fontSize:'10px',fontWeight:'bold'}}>2015</div>
        </div>

        <div className='d-flex mb-4' style={{borderBottom: 1+'px solid #e8e5e5'}}>
          <div className='col-6'>
          <i class="fa-regular fa-user" style={{color: '#4899ec',fontSize: 12+'px'}}></i> <span style={{fontSize:12+'px'}}>4 people</span><br/>
          <i class="fa-solid fa-gas-pump"style={{color: '#4899ec',fontSize: 12+'px'}}></i>   <span style={{fontSize:12+'px'}}>Gasoline</span>
          </div>
          <div className='col-6'>
          <i class="fa-solid fa-gauge"style={{color: '#4899ec',fontSize: 12+'px'}}></i>  <span style={{fontSize:12+'px'}}>8km/1-liter</span> <br/>
          <i class="fa-solid fa-gears"style={{color: '#4899ec',fontSize: 12+'px'}}></i>  <span style={{fontSize:12+'px'}}>Automatic</span>
          </div>

        </div>
        <div className='d-flex align-items-center'>
          <div className='col-6'>
            $440 <span style={{fontSize:10+'px'}}>/month</span>
          </div>
          <div className='col-6'>

          <a href="#" class="btn btn-primary mx-3"style={{backgroundColor: '#d0dff4'}}><i class="fa-regular fa-heart" style={{color: '#4899ec'}}></i></a>
          <a href="#" class="btn btn-primary" style={{backgroundColor: '#4899ec'}}>Rent Now</a>
          </div>
        </div>
        
      </div>
    </div>
    </div>
  );
};

export default CarCard;