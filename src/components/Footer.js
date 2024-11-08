import React from 'react'
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <div>

 {/*  */}

 <div className='footer'>
            <div className='container-fluid'style={{ color: 'white' }}>
  <div className='row'>
          <div className='col-lg-4'>
               <h5>ABOUT TASTY TWIST</h5>
               <p className='p'>The first and important cause is its decoration. The entire restaurant is decorated with zodiac signs (the sign also belongs to me) 
                and the sitting arrangement was superb. Moreover, I was in love when I had the delicious smoked salmon before me. In other restaurants, I did not have the fish in a smoked form and the taste was excellent. 
                Besides, the service was also fantastic. I had experienced delays and other sorts of problems in other places where I went to have my meals, 
                I had experienced delays and other sorts of problems in other places where I went to have my meals
             </p>
             


           </div>
           <div className='col-lg-1'></div>

           <div className='col-lg-4'>
            <div>
           <h5 >QUICK LINK</h5>
           
            <Link to="/" className='link  ' >
                    <span style={{ display: 'inline-flex', alignItems: 'center'  }}>
       
                            <span style={{ marginRight: '5px', fontWeight: 'bold',color: 'green' }}>{'<'}</span> 
                            <h6 style={{color: 'white', margin: 0 }}>Home</h6>
                    </span>
           
            </Link>  
            <br/> <br/>

            <Link to="/about"  className='link pt-4'>
                       <span style={{ display: 'inline-flex', alignItems: 'center'  }}>
       
                                <span style={{ marginRight: '5px', fontWeight: 'bold',color: 'green' }}>{'<'}</span> 
                                <h6 style={{color: 'white', margin: 0 }}>About</h6>
                     </span>
            
            </Link><br/> <br/>

            <Link to="/menu"  className='link'>
            
                       <span style={{ display: 'inline-flex', alignItems: 'center'  }}>
       
                           <span style={{ marginRight: '5px', fontWeight: 'bold',color: 'green' }}>{'<'}</span> 
                            <h6 style={{color: 'white', margin: 0 }}>Menu</h6>
                     </span>


            </Link><br/><br/>

            <Link to="/gallery"  className='link'>

                     <span style={{ display: 'inline-flex', alignItems: 'center'  }}>
       
                            <span style={{ marginRight: '5px', fontWeight: 'bold',color: 'green' }}>{'<'}</span> 
                            <h6 style={{color: 'white', margin: 0 }}>Gallery</h6>
                    </span>
            
            </Link><br/><br/>

            <Link to="/contact"  className='link'>
                      <span style={{ display: 'inline-flex', alignItems: 'center'  }}>
       
                            <span style={{ marginRight: '5px', fontWeight: 'bold',color: 'green' }}>{'<'}</span> 
                            <h6 style={{color: 'white', margin: 0 }}>Contact</h6>
                    </span>
            </Link>
           </div>

         </div>
{/* contact */}
<div className='col-lg-3'>
    <h5>CONTACT US</h5>
    <span style={{ display: 'inline-flex', alignItems: 'center'  }}>
       
       <span style={{ color: 'pink' }}><FaInstagram /></span> 
       <h6 style={{color: 'white', margin: 5}}>TASTY_TWIST</h6>
   </span>
<br/>
<br/>
   <span style={{ display: 'inline-flex', alignItems: 'center'  }}>
       
       <span style={{ color: 'blue' }}><FaTwitter /></span> 
       <h6 style={{color: 'white', margin: 5 }}>Tastytwist.com</h6>
   </span>

   <br/>
<br/>
   <span style={{ display: 'inline-flex', alignItems: 'center'  }}>
       
       <span style={{ color: 'blue' }}><FaFacebook /> </span> 
       <h6 style={{color: 'white', margin: 5 }}>TASTY_TWIST</h6>
   </span>

   <br/>
  <br/>
   <span style={{ display: 'inline-flex', alignItems: 'center'  }}>
       
       <span style={{ color: 'blue' }}><FaPhone /></span> 
       <h6 style={{color: 'white', margin: 5 }}>9145698712</h6>
   </span>


</div>





</div>
</div>
</div>

    </div>
  )
}
