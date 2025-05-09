import React from 'react'
import './Home.css'
import ContactForm from './ContactForm'

function Home() {
  return (
    <div className="page">
      <div className='hero d-flex flex-row justify-content-evenly align-items-center'>
        <div className='hero-text'>
          <p className='h-title'>License Validation<strong className='animateType'>Made Simple</strong></p>
          <p className='mt-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus voluptatibus modi saepe delectus tempora ducimus.</p>
          <button className='cta-button bg-dark mt-3 text-light rounded'>Get A Quote</button>
        </div>

        <div className="hero-image">
            <img className='img-bg' src="/bg3.png" alt="" />
        </div>
      </div>


    <div className='work'>
        <div className='work-title'>
          <h2 className='text-center'><strong>How</strong> It Works</h2>
        </div>
        <div className='cards scrollFadeAnimate mt-4 d-flex flex-column flex-sm-row align-items-center gap-3 justify-content-evenly'>
          <div className='card1 comcard'>
            <div className="d-flex justify-content-center"><img src="/inbox.png" className='img-fluid' alt="" /></div>
            <h2 className="text-center">Upload</h2>
            <p className='text-center'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam tempora nostrum quo?</p>
          </div>

          <div className='card2 comcard'>
            <div className="d-flex justify-content-center"><img src="/validation.png" className='img-fluid' alt="" /></div>
            <h2 className="text-center">Validation</h2>
            <p className='text-center'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam tempora nostrum quo?</p>
          </div>

          
          <div className='card1 comcard'>
            <div className="d-flex justify-content-center"><img src="/pay.png" className='img-fluid' alt="" /></div>
            <h2 className="text-center">Get Paid</h2>
            <p className='text-center'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam tempora nostrum quo?</p>
          </div>
        </div>
      </div>



      <div className='choose'>
        <div className='work-title'>
          <h2 className='text-center'>Why Choose <strong>Us</strong></h2>
        </div>

        <div className='wcs-cards scrollSlideLeftAnimate mt-4 d-flex flex-column flex-sm-row align-items-center gap-3 justify-content-evenly'>
          <div className='card2 wcs-card'>
            <div className="d-flex justify-content-center"><img src="/fast-time.png" className='img-fluid' alt="" /></div>
            <h2 className="text-center">Upload</h2>
            <p className='text-center'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam tempora nostrum quo?</p>
          </div>

          <div className='wcs-card'>
            <div className="d-flex justify-content-center"><img src="/protection.png" className='img-fluid' alt="" /></div>
            <h2 className="text-center">Validation</h2>
            <p className='text-center'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam tempora nostrum quo?</p>
          </div>

          
          <div className='card2 wcs-card'>
            <div className="d-flex justify-content-center"><img src="/safety.png" className='img-fluid' alt="" /></div>
            <h2 className="text-center">Get Paid</h2>
            <p className='text-center'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam tempora nostrum quo?</p>
          </div>
        </div>
      </div>


      <div className='customer p-4'>
        <div className='d-flex flex-column justify-content-center align-items-center'>
          <p className='fw-bold'>TESTIMONIALS</p>
          <p className='h-title'>WHAT <strong>USERS</strong> SAY</p>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto, illum earum dolores libero suscipit esse?</p>
        </div>

        <div className='feedback-cards scrollFadeAnimate'>
          <div className='pb-3 px-5 text-center feedback-card '>
            <img src="user1.jpg" className='user-img' alt="" />
            <h2 className='mt-3'>Person 1</h2>
            <p className='text-muted'>Board Director</p>
            <img src="/icons/quotation-mark.png" className='quote mb-4' alt="" />
            <p className='text-muted'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos incidunt est blanditiis cum, magnam recusandae, quas laudantium voluptas quibusdam vero sunt atque, nihil officiis voluptatibus.</p>
          </div>

          <div className='pb-3 px-5 text-center feedback-card '>
            <img src="user2.jpg" className='user-img' alt="" />
            <h2 className='mt-3'>Person 2</h2>
            <p className='text-muted'>Board Director</p>
            <img src="/icons/quotation-mark.png" className='quote mb-4' alt="" />
            <p className='text-muted'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos incidunt est blanditiis cum, magnam recusandae, quas laudantium voluptas quibusdam vero sunt atque, nihil officiis voluptatibus.</p>
          </div>

          <div className='pb-3 px-5 text-center feedback-card '>
            <img src="user3.webp" className='user-img' alt="" />
            <h2 className='mt-3'>Person 3</h2>
            <p className='text-muted'>Board Director</p>
            <img src="/icons/quotation-mark.png" className='quote mb-4' alt="" />
            <p className='text-muted'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos incidunt est blanditiis cum, magnam recusandae, quas laudantium voluptas quibusdam vero sunt atque, nihil officiis voluptatibus.</p>
          </div>
        </div>
      </div>

      {<ContactForm />}
    </div>
  )
}

export default Home