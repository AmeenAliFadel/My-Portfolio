import React ,{useRef} from 'react'
import './Contact.css'

import emailjs from '@emailjs/browser'
const ContactData = [
  {
    id:1,
    icon: <i className="fa-solid fa-envelope"></i>,
    title:"Email",
    info: "ameenfadel820 @gmail.com",
  },
  {
    id:1,
    icon: <i className="fa-brands fa-facebook-messenger"></i>,
    title: "Messenger",
    info: "Ameen Ali Fadel",
  },
  {
    id:1,
    icon:<i className="fa-brands fa-whatsapp"></i> ,
    title:"WhatsApp",
    info: "+963935238299",
  }
]

export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_cgkfy7o', 'template_gqxfgxx', form.current,  'PZRXE4TXMFymlZGFa',)
      e.target.reset();
  };
  return (
    <section className='contact' id='contact'>
      <div className="top-section">
        <h5>Get In Touch</h5>
        <h2>Contact Me</h2>
      </div>
      <div className="container contact-container">
        <div className="contact-options">
          {ContactData.map(({id,icon,title,info,link})=>(
            <article key={id} className='contact-option'>
              {icon}
              <h4>{title}</h4>
              <h5>{info}</h5>
            </article>
          ))}
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" placeholder='Full Name' name='name'/>
          <input type='email' placeholder='Your Email' name='email'/>
          <textarea rows={10} name="message" id="" placeholder='Enter Your Message '></textarea>
          <button className='btn btn-primary'>Send Message </button>
        </form>
      </div>
    </section>
  )
}
