import React from 'react'
import './About.css'
import AboutChef1 from '../images/img/about-chef1.jpg'
import AboutChef2 from '../images/img/about-chef2.jpg'



import Footer from '../components/Footer';





function About() {
  return (
    
    <div className='about-page'>
               <header className='mt-5'>
             <div className='container h-100 d-flex align-items-center justify-content-center'>
                 <h1 className='text-light'>About</h1>
            </div>
    </header>
    
    <div className='container my-5'>
                <p>I liked the restaurant most for different reasons. The first and important cause is its decoration. The entire restaurant is decorated with zodiac signs (the sign also belongs to me) 
                            and the sitting arrangement was superb. Moreover, I was in love when I had the delicious smoked salmon before me. In other restaurants, I did not have the fish in a smoked form and the taste was excellent. 
                            Besides, the service was also fantastic. I had experienced delays and other sorts of problems in other places where I went to have my meals, but here I had no such troubles.
                             Everything was in order and I was served with the necessary services even before asking for help.
                             The best thing about the restaurant is its multi-national cuisine. The foods are truly superb!</p>

                <div className='row'>
                    <div className='col-lg-6 '>
                        <img src={AboutChef1} className='img-fluid my-4' alt="" />
                    </div>
                    <div className='col-lg-6'>
                        <img src={AboutChef2} className='img-fluid my-4' alt="" />
                    </div>
                </div>

                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, esse nulla, debitis similique, ad nihil architecto maiores doloribus quis blanditiis distinctio. Praesentium, harum atque fuga nobis eius laboriosam totam consequuntur officia dolorem quo velit incidunt fugiat at maxime, molestias esse dignissimos accusantium enim debitis. Id et quidem sapiente adipisci dolor ipsa amet tempora porro atque perferendis. Libero odio, molestiae aliquam modi facere, veritatis, illo labore deserunt ducimus ipsam rem ipsum perspiciatis eveniet maiores excepturi. Architecto sit ducimus inventore officia porro vel? Accusantium recusandae nisi autem iste suscipit distinctio, libero rem.</p>
            </div>
{/*  */}


{/* footer */}
<Footer/>

            {/*  */}

   </div>



  )
}

export default About