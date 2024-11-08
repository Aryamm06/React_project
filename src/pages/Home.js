import React from 'react'
import './Home.css'

import AboutImg from '../images/img/about-img.jpg';


import { Link } from 'react-router-dom';

import H1 from '../images/img/H1.avif'
import H2 from '../images/img/H2.jpg'
import H3 from '../images/img/H3.jpg'
import H4 from '../images/img/H4.jpg'
import H5 from '../images/img/H5.jpg'
import H6 from '../images/img/H6.jpg'
import Footer from '../components/Footer';



function Home() {
  return (
      
    
    <div className='home-page'>
        
        <header className='h-100 min-vh-100 d-flex align-items-center text-light shadow'>
            <div className='container'>
                <div className='row'>
                    <div className='col-sm-6 d-flex d-sm-block flex-column align-items-center'>
                         <h2 className='mb-0 text-black fw-bold'>Welcome To</h2>
                         <h1 className='mb-5 text-black fw-bold text-center text-sm-start'>TASTY TWIST Restaurant</h1>
                         
                    </div>
                </div>
             </div>
         </header>

         <div className='container my-5'>
                <div className='row'>
                    <div className='col-lg-5 pt-5'>
                        <img src={AboutImg} className='img-fluid w-50' alt="about img" />
                    </div>
                    <div className='col-lg-7 d-flex flex-column align-items-center justify-content-center'>
                        <h2 className='fs-1 mb-5 text-uppercase fw-bold'>About Us</h2>
                        <p className='mb-5'>I liked the restaurant most for different reasons. The first and important cause is its decoration. The entire restaurant is decorated with zodiac signs (the sign also belongs to me) 
                            and the sitting arrangement was superb. Moreover, I was in love when I had the delicious smoked salmon before me. In other restaurants, I did not have the fish in a smoked form and the taste was excellent. 
                            Besides, the service was also fantastic. I had experienced delays and other sorts of problems in other places where I went to have my meals, but here I had no such troubles.
                             Everything was in order and I was served with the necessary services even before asking for help.
                             The best thing about the restaurant is its multi-national cuisine. The foods are truly superb!</p>
                        <p className='mb-5'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab magni animi tenetur eaque vel accusamus placeat quaerat ad. Similique quaerat qui doloribus assumenda deserunt tenetur quas suscipit officiis quod sequi?</p>
                        <Link to="/about">
                            <button type='button' className='btn btn-outline-success btn-lg'>More About Us</button>
                        </Link>
                    </div>
                </div>
            </div>

{/* images */}


<div className='container-fluid' >
  <div className='row '>
             <div className = "col-lg-1 "></div>  
              <div className = "col-lg-3 ">
                    <div className="my-3">
                            <img src={H1} className="img-fluid  " alt="" />
                     </div>
               
             
                     </div>
    
        <div className = "col-lg-3 ">
             <div className="my-3">
                            <img src={H2} className="img-fluid  " alt="" />
              </div>
               
             
        </div>
        <div className = "col-lg-3 zoom">
             <div className="my-3">
                    <img src={H3} className="img-fluid  " alt="" />
                 </div>
              
             
        </div>

      
  </div>
  </div>

  <div className='container-fluid' >
  <div className='row '>
             <div className = "col-lg-1 "></div>  
              <div className = "col-lg-3 ">
                    <div className="my-3">
                            <img src={H4} className="img-fluid  " alt="" />
                     </div>
               
             
                     </div>
    
        <div className = "col-lg-3 ">
             <div className="my-3">
                            <img src={H5} className="img-fluid  " alt="" />
              </div>
               
             
        </div>
        <div className = "col-lg-3 zoom">
             <div className="my-3">
                    <img src={H6} className="img-fluid  " alt="" />
                 </div>
              
             
        </div>

      
  </div>
  </div>

{/*  */}




            {/* footer */}

{/*  */}

<Footer/>
{/*  */}
    </div>
  )
}

export default Home