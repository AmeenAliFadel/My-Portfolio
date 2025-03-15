import React from 'react'
import './Navbar.css'
import { useState } from 'react'

export default function Navbar() {
  const [activeNav, setactiveNav] = useState("#")
  return (
    <nav>
      <a href="#"
      className={activeNav === "#" ? "active" : ""} 
      onClick={() => setactiveNav("#")}>
        <i class="fa-solid fa-house"></i>
      </a>
      <a href="#about" 
      className={activeNav === "#about" ? "active" : ""} 
      onClick={() => setactiveNav("#about")}>
        <i class="fa-solid fa-user"></i>
      </a>
      <a href="#services" 
      className={activeNav === "#services" ? "active" : ""} 
      onClick={() => setactiveNav("#services")}>
        <i class="fa-solid fa-book"></i>
      </a>
      <a href="#projects" 
      className={activeNav === "#projects" ? "active" : ""} 
      onClick={() => setactiveNav("#projects")}>
        <i class="fa-solid fa-heart-pulse"></i>
      </a>
      <a href="#contact" 
      className={activeNav === "#contact" ? "active" : ""} 
      onClick={() => setactiveNav("#contact")}>
        <i class="fa-solid fa-note-sticky"></i>
      </a>
    </nav>
  )
}
