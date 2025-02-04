import React, { useState } from 'react'
import './contact.css'
import axios from 'axios'

const ContactPage = () => {

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [mobileno, setMobileno] = useState('')
  const [message, setMessage] = useState('')

  const addContact = (e) => {

    e.preventDefault();
    axios.post("http://localhost:3000/contact", { name, email, mobileno, message })
      .then(() => {
        alert("Done..." + name);
      })
      .catch(() => {
        console.error("Error is been occured" + err);
      })
  }


  return (
    <div>
      <div className="contactpage">
        <div className="cont1">
          <h1 className="head5">Contact</h1>
        </div>
      </div>

      <div className="contact-full">
        <div className="formpage" onSubmit={addContact}>
          <h1 id='form-cont'>Send Us a Message</h1><br />
          <form action="">
            <input type="text" name='name' placeholder='Enter the Name'
              value={name}
              onChange={(f) => setName(f.target.value)} /><br /><br />

            <input type="text" name='email' placeholder='Enter the Email'
              value={email}
              onChange={(f) => setEmail(f.target.value)} /><br /><br />

            <input type='text' name='number' placeholder='Your mobile number'
              value={mobileno}
              onChange={(f) => setMobileno(f.target.value)} /><br /><br />

            <br /> <textarea name="text" id='message'
              value={message}
              onChange={(f) => setMessage(f.target.value)} placeholder='Message'></textarea><br /><br />

            <button type="submit" id='btn-sub'>Submit</button>
          </form>
        </div>
      
        <div className="contact-us">
      
          <h1>Contact info</h1><br /><br />
          <p style={{}}> <i class="fa-solid fa-phone"></i>  9769637063</p><br />
          <p><i class="fa-solid fa-location-dot"></i> Kandivali East, Mumbai, Maharashtra 400101</p><br />
          <p><i class="fa-solid fa-envelope"></i> rohangawade064@gmail.com</p><br /><br /><br /><br />


          <h1 id='social-media'>Social Media</h1><br />
          <i id='yes' class="fa-brands fa-instagram"></i>
          <i id='yes' class="fa-brands fa-facebook"></i>
          <i id='yes' class="fa-brands fa-youtube"></i>

        </div>
      </div>
    </div>
  )
}

export default ContactPage;
