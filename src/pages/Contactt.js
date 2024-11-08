import React from 'react'
import './Contactt.css'
import { Form } from 'react-bootstrap'


import Footer from '../components/Footer';


function Contactt() {
  return (
    <div className='contact-page'>
    <header className='mt-5'>
        <div className='container h-100 d-flex align-items-center justify-content-center'>
            <h1 className='text-light'>Contact</h1>
        </div>
    </header>

    <div className="container ">
            <h2 className="text-center fs-1 mb-5  fw-bold " style={{ color: 'black' }}>Our Location</h2>
            <div className="row">
 <div className='col-lg-4 d-flex flex-column align-items-center mb-4 mb-lg-0'>
            <h4 >Kozhikode</h4>
            <p>Kannur Rd near CH Over bridge,Kozhikode</p>
             <i class="fa fa-phone media">+914598756321</i>
</div>
 <div className='col-lg-4 d-flex flex-column align-items-center mb-4 mb-lg-0'>
          <h4 >Kochi</h4>
        <p>  Edapally,Lulu Mall Eranakulam,Kochi </p>
          <i class="fa fa-phone media">+914598756321</i>
</div>
<div className='col-lg-4 d-flex flex-column align-items-center mb-4 mb-lg-0'>
           <h4 >Trivandrum</h4>
           <p>Kesavadasapuram,Thiruvananthapuram</p>
           <i class="fa fa-phone media">+914598756321</i>
</div>
     </div>       
 </div>

{/*  */}
 
<div className='container my-5'>
                <div className='row'>
                    <div className='col-lg-6 d-flex align-items-center justify-content-center'>
                                   <div className="d-flex flex-column align-items-center">
               
                                   <h2 className="fs-1 mb-3 text-uppercase fw-bold">Opening Hours</h2>
                                     <p >Mon : 09:00 - 17:00</p>
                                     <p>Tue : 09:00 - 17:00 </p>
                                     <p>Wed : 09:00 - 17:00 </p>
                                     <p>Thu : 09:00 - 17:00 </p>
                                     <p>Fri : 09:00 - 17:00 </p>
                                     <p>Sat : 09:00 - 17:00 </p>
                                     <p>Sun : 09:00 - 17:00 </p>
                            </div>
                    </div>
                    <div className='col-lg-6 d-flex justify-content-center pt-5'>
                        <Form>
                            <Form.Group className='row mb-3'>
                                <div className='col-md-6'>
                                    <Form.Label htmlFor='first-name'>First Name</Form.Label>
                                    <Form.Control type='text' id='first-name' />
                                </div>
                                <div className='col-md-6'>
                                    <Form.Label htmlFor='last-name'>Last Name</Form.Label>
                                    <Form.Control type='text' id='last-name' />
                                </div>
                            </Form.Group>
                            <Form.Group className='row mb-3'>
                                <div className='col-md-6'>
                                    <Form.Label htmlFor='email-address'>Email Address</Form.Label>
                                    <Form.Control type='email' id='email-address' />
                                </div>
                                <div className='col-md-6'>
                                    <Form.Label htmlFor='phone-number'>Phone Number</Form.Label>
                                    <Form.Control type='tel' id='phone-number' />
                                </div>
                            </Form.Group>
                            <Form.Group className='row mb-3'>
                                <div className='col-md-6'>
                                    <Form.Label htmlFor='date'>Date</Form.Label>
                                    <Form.Control type='date' id='date' />
                                </div>
                                <div className='col-md-6'>
                                    <Form.Label htmlFor='guests-number'>Number Of Guests</Form.Label>
                                    <Form.Control type='number' id='guests-number' />
                                </div>
                            </Form.Group>
                            <Form.Group className='mb-4'>
                                <Form.Label htmlFor='comments'>Comments</Form.Label>
                                <Form.Control type='textarea' id='comments' />
                            </Form.Group>

                            <button type='submit' className='btn btn-success btn-lg'>Submit</button>
                        </Form>
                    </div>
                </div>
            </div>

{/* map */}
<iframe
  width="100%"
  height="484"
 src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d15652.805600216889!2d75.7843628!3d11.2465899!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1731046004009!5m2!1sen!2sin"
 title="Google Maps location of desired area"
></iframe>

 


                {/* footer */}
                <Footer/>

 {/*  */}

 </div>

             








    
  )
}

export default Contactt