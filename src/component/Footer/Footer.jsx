import React from 'react'
import './Footer.css'
export default function Footer() {
  return (
    <footer>
      <a href="#" className='footer-logo'>AmeenFadel</a>
      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer-socials">
        <a href="https://www.facebook.com/profile.php?id=100003547880627&sk=about"><i class="fa-brands fa-facebook"></i></a>
        <a href="https://www.instagram.com/ameen_fadel14/"><i class="fa-brands fa-instagram"></i></a>
        <a href="https://github.com/AmeenAliFadel?tab=repositories"><i class="fa-brands fa-github"></i></a>
      </div>

      <div className="footer-copyright">
        <p>&copy; <a href="#">AmeenFadel</a>All rights reserved</p>
      </div>
    </footer>
  )
}
