import React from 'react'
import './Gallery.css'
// import Gallery1 from '../images/img/gallery1.jpg'
// import Gallery2 from '../images/img/gallery2.jpg'
import Gallery3 from '../images/img/gallery3.jpg'
// import Gallery4 from '../images/img/gallery4.jpg'
// import Gallery5 from '../images/img/gallery5.jpg'
// import Gallery6 from '../images/img/gallery6.jpg'
import Gallery7 from '../images/img/gallery7.jpeg'
// import Gallery8 from '../images/img/Gallery8.jpg'
import G2 from '../images/img/G2.jpg'
import G3 from '../images/img/G3.jpg'
import G4 from '../images/img/G4.jpg'
import G5 from '../images/img/G5.jpeg'
import G6 from '../images/img/G6.jpg'
import G7 from '../images/img/G7.jpg'



import Footer from '../components/Footer'



function Gallery() {
  return (
    <div className='gallery-page'>
    <header className='mt-5'>
        <div className='container h-100 d-flex align-items-center justify-content-center'>
            <h1 className='text-light'>Gallery</h1>
        </div>
    </header>

    <div className="container my-5">
            <h2 className="text-center fs-1 mb-5  fw-bold " style={{ color: 'black' }}>Our Gallery</h2>
            {/* <div className='gallery'> */}
            <div className="row">
                <div className="col-md-4 px-2">
                    <div className="my-3">
                        <img src={G4} className="img-fluid  " alt="" />
                    </div>
                    <div className="my-3">
                        <img src={G2} className="img-fluid  " alt="" />
                    </div>

                    <div className="my-3">
                        <img src={G7} className="img-fluid" alt="" />
                    </div>
                </div>
                <div className="col-md-4 px-2">
                    <div className="my-3">
                        <img src={Gallery3} className="img-fluid" alt="" />
                    </div>
                    <div className="my-3">
                        <img src={G5} className="img-fluid" alt="" />
                    </div>
                </div>
                <div className="col-md-4 px-2">
                    <div className="my-3">
                        <img src={Gallery7} className="img-fluid" alt="" />
                    </div>
                    <div className="my-3">
                        <img src={G3} className="img-fluid" alt="" />
                    </div>
                
                
                    <div className="my-3">
                        <img src={G6} className="img-fluid" alt="" />
                    </div>
                    {/* <div className="my-3">
                        <img src={G3} className="img-fluid" alt="" />
                    </div> */}
                
            </div>
            
            </div>
        </div> 
    {/* footer */}
     {/*  */}

     <Footer/>
   

{/*  */}
    </div>
  )
}

export default Gallery