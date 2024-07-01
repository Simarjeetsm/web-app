import React from 'react'
import './Contact.css'
export default function Contact() {
  return (
    <section classname="contact">
      <form>
        <h2>Contact Form</h2>
        <div className='input-box'>
          <label>Full Name</label>
          <input type='text' className='field' placeholder='Enter our Name' required/>
        </div>
        <div className='input-box'>
          <label>Email Address</label>
          <input type='email' className='field' placeholder='Enter our email'required/>
        </div>
        <div className='input-box'>
          <label>Your Message</label>
          <textarea name='' id='' className='field' placeholder='Enter Your Message' required></textarea>
        </div>
        <button type='Submit'>Send Message</button>
      </form>
    </section>
  )
}
