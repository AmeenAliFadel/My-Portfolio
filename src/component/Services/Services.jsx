import React from 'react'
import './Services.css'
export default function Services() {
  return (
    <section id='services'>
      <div className='top-section'>
        <h5>What I Offer</h5>
        <h2>Services</h2>
      </div>
      <div className="container container-services">
        <article className='card'>
          <i class="fa-solid fa-wand-magic-sparkles icon"></i>
          <h3>Web Design</h3>
          <p className='text-light'>I design attractive and user-friendly interfaces that focus on enhancing the user experience and meeting client needs.</p>
        </article>
        <article className='card'>
          <i class="fa-solid fa-rocket icon"></i>
          <h3>Fast Performance</h3>
          <p className='text-light'>I ensure fast and efficient websites by optimizing performance and utilizing the latest technologies.</p>
        </article>
        <article className='card'>
          <i class="fa-solid fa-code icon"></i>
          <h3>Clean Code</h3>
          <p className='text-light'>I write clean and well-structured code that is easy to read and maintain, ensuring a smoother development process.</p>
        </article>
      </div>
    </section>
  )
}
