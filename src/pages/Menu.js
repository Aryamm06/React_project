import React from 'react'
import './Menu.css'
import B1 from '../images/img/B1.jpg'
import B2 from '../images/img/B2.jpg'
import B3 from '../images/img/B3.jpg'
import B4 from '../images/img/B4.jpg'
import B5 from '../images/img/B5.jpg'
import B6 from '../images/img/B6.jpg'


import L1 from '../images/img/L1.jpg'
import L2 from '../images/img/L2.jpg'
import L3 from '../images/img/L3.jpg'
import L4 from '../images/img/L4.jpg'
import L5 from '../images/img/L5.jpg'
import L6 from '../images/img/L6.jpg'

import D1 from '../images/img/D1.jpg'
import D2 from '../images/img/D2.jpg'
import D3 from '../images/img/D3.avif'
import D4 from '../images/img/D4.jpg'
import D5 from '../images/img/D5.jpg'
import D6 from '../images/img/D6.jpg'


import Footer from '../components/Footer'










function Menu() {
  return (
    <div className='menu-page'>
    <header className='mt-5'>
        <div className='container h-100 d-flex align-items-center justify-content-center'>
            <h1 className='text-light'>Menu</h1>
        </div>
    </header>

{/*  */}
  <div className='container pt-5' ><h2 className='text-center' style={{ color: 'green' }}>BREAKFAST</h2>
  
  
  <div className="container  " >
                <div className='row '>
                <div className = "col-lg-1 "></div>  
               <div className = "col-lg-3 ">
             <div className="my-3">
                            <img src={B1} className="img-fluid  " alt="" />
                 </div>
                 
                <h5 className='H'>French Toast</h5>
                <h6 className='H'>$9.00</h6>
             
        </div>
    
        <div className = "col-lg-3 ">
             <div className="my-3">
                            <img src={B2} className="img-fluid  " alt="" />
                 </div>
                <h5 className='H'>French Twist</h5>
                <h6 className='H'>$10.00</h6>
             
        </div>
        <div className = "col-lg-3 zoom">
             <div className="my-3">
                    <img src={B3} className="img-fluid  " alt="" />
                 </div>
                <h5 className='H'>Bagel and Lox</h5>
                <h6 className='H'>$9.00</h6>
             
        </div>

      
  
  </div>
</div>

<div className="container  " >
                <div className='row '>
                <div className = "col-lg-1 "></div>  
               <div className = "col-lg-3 ">
             <div className="my-3">
                            <img src={B4} className="img-fluid  " alt="" />
                 </div>
                 
                <h5 className='H'>French Toast</h5>
                <h6 className='H'>$9.00</h6>
             
        </div>
    
        <div className = "col-lg-3 ">
             <div className="my-3">
                            <img src={B5} className="img-fluid  " alt="" />
                 </div>
                <h5 className='H'>French Twist</h5>
                <h6 className='H'>$10.00</h6>
             
        </div>
        <div className = "col-lg-3 zoom">
             <div className="my-3">
                    <img src={B6} className="img-fluid  " alt="" />
                 </div>
                <h5 className='H'>Bagel and Lox</h5>
                <h6 className='H'>$9.00</h6>
             
        </div>

      
  
  </div>
</div>
</div>
{/* // */}

<div className='container pt-4'><h2 className='text-center' style={{ color: 'green' }}>LUNCH</h2>
  
  
  <div className="container  " >
                <div className='row '>
                <div className = "col-lg-1 "></div>  
               <div className = "col-lg-3 ">
             <div className="my-3">
                            <img src={L1} className="img-fluid  " alt="" />
                 </div>
                 
                <h5 className='H'>Hydrabad Biriyani</h5>
                <h6 className='H'>$9.00</h6>
             
        </div>
    
        <div className = "col-lg-3 ">
             <div className="my-3">
                            <img src={L2} className="img-fluid  " alt="" />
                 </div>
                <h5 className='H'>Chiken Biriyani</h5>
                <h6 className='H'>$10.00</h6>
             
        </div>
        <div className = "col-lg-3 zoom">
             <div className="my-3">
                    <img src={L3} className="img-fluid  " alt="" />
                 </div>
                <h5 className='H'>Greek Salad</h5>
                <h6 className='H'>$9.00</h6>
             
        </div>

      
  
  </div>
</div>

<div className="container  " >
                <div className='row '>
                <div className = "col-lg-1 "></div>  
               <div className = "col-lg-3 ">
             <div className="my-3">
                            <img src={L4} className="img-fluid  " alt="" />
                 </div>
                 
                <h5 className='H'>Pudina Rice</h5>
                <h6 className='H'>$9.00</h6>
             
        </div>
    
        <div className = "col-lg-3 ">
             <div className="my-3">
                            <img src={L5} className="img-fluid  " alt="" />
                 </div>
                <h5 className='H'>Chickpea lettuce</h5>
                <h6 className='H'>$10.00</h6>
             
        </div>
        <div className = "col-lg-3 zoom">
             <div className="my-3">
                    <img src={L6} className="img-fluid  " alt="" />
                 </div>
                <h5 className='H'>Vegetable Pulao</h5>
                <h6 className='H'>$9.00</h6>
             
        </div>

      
  
  </div>
</div>
</div>



{/* // */}


<div className='container pt-4'><h2 className='text-center ' style={{ color: 'green' }}>DINNER</h2>
  
  
  <div className="container  " >
                <div className='row '>
                <div className = "col-lg-1 "></div>  
               <div className = "col-lg-3 ">
             <div className="my-3">
                            <img src={D1} className="img-fluid  " alt="" />
                 </div>
                 
                <h5 className='H'>Nachos</h5>
                <h6 className='H'>$9.00</h6>
             
        </div>
    
        <div className = "col-lg-3 ">
             <div className="my-3">
                            <img src={D2} className="img-fluid  " alt="" />
                 </div>
                <h5 className='H'>Satay Chiken</h5>
                <h6 className='H'>$10.00</h6>
             
        </div>
        <div className = "col-lg-3 zoom">
             <div className="my-3">
                    <img src={D3} className="img-fluid  " alt="" />
                 </div>
                <h5 className='H'>Bagel and Lox</h5>
                <h6 className='H'>$9.00</h6>
             
        </div>

      
  
  </div>
</div>

<div className="container  " >
                <div className='row '>
                <div className = "col-lg-1 "></div>  
               <div className = "col-lg-3 ">
             <div className="my-3">
                            <img src={D4} className="img-fluid  " alt="" />
                 </div>
                 
                <h5 className='H'>Chilli Cheese Toast</h5>
                <h6 className='H'>$9.00</h6>
             
        </div>
    
        <div className = "col-lg-3 ">
             <div className="my-3">
                            <img src={D5} className="img-fluid  " alt="" />
                 </div>
                <h5 className='H'>Chicken Fried Steak</h5>
                <h6 className='H'>$10.00</h6>
             
        </div>
        <div className = "col-lg-3 zoom">
             <div className="my-3">
                    <img src={D6} className="img-fluid  " alt="" />
                 </div>
                <h5 className='H'>Cheese Quesadilla</h5>
                <h6 className='H'>$9.00</h6>
             
        </div>

      
  
  </div>
</div>
</div>


 {/* footer  */}

<Footer/>
{/*  */}
</div>

  )}
export default Menu