import './Home.css'

function ContactForm() {
  return (
    <div className='contact-page mt-5 scrollSlideRightAnimate mb-5'>
        <div className='contact-desc rounded shadow'>
            <p className='h-title'><strong>Contact</strong> <span style={{color: "orange"}}>Us</span></p>
            <p className='text-muted'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic officiis delectus et laudantium commodi!</p>
            <div className='contact-form'>
                <form action="" className='d-flex flex-column gap-2'>
                    <div className='d-flex flex-row gap-3'>
                        <div className='form-row w-50'>
                            <label htmlFor="" className='custom-label'>First Name</label>
                            <input className='custom-input flex-fill' type="text" placeholder='First Name' />
                        </div>

                        <div className='form-row w-50'>
                            <label htmlFor="" className='custom-label'>Last Name</label>
                            <input type="text" className='custom-input' placeholder='Last Name' />
                        </div>
                    </div>

                    <div className='d-flex flex-row gap-3'>
                        <div className='form-row w-50'>
                            <label htmlFor="" className='custom-label'>Email</label>
                            <input className='custom-input flex-fill' type="email" placeholder='Email' />
                        </div>

                        <div className='form-row w-50'>
                            <label htmlFor="" className='custom-label'>Company</label>
                            <input type="company" className='custom-input' placeholder='Company' />
                        </div>
                    </div>

                    <div className='d-flex flex-column gap-2'>
                        <label htmlFor="" className='custom-label'>Type of License</label>
                        <select className=' custom-input w-100' name="" id="">
                            <option value="">License</option>
                            <option value="">Normal</option>
                            <option value="">Premeium</option>
                            <option value="">Ulta</option>
                        </select>
                    </div>

                    <div className='d-flex flex-column gap-2'>
                        <label htmlFor="" className='custom-label'>Query</label>
                        <textarea className='custom-text rounded' name="" id=""></textarea>
                    </div>

                    <button className='cta-button rounded bg-mine text-light mt-4'>Submit</button>
                </form>
            </div>
        </div>

        <div className='feedback-img'>
            <img className='w-100' src="/feedback.jpg" alt="" />
        </div>
    </div>
  )
}

export default ContactForm