import React from 'react'
import './Skills.css'
import CSS from '../../assets/css3.svg'
import HTML from '../../assets/html.png'
import JS from '../../assets/javascript.svg'
import Bootstrap from '../../assets/bootstrap.png'
import reactImg from '../../assets/react.svg'
import figma from '../../assets/figma.svg'
const SkillsData = [
  {
    id: 1,
    image: HTML,
    title: 'HTML',
    disc: 'Markup Language',
  },
  {
    
    id: 2,
    image: CSS,
    title: 'CSS',
    disc: 'User Interface',
  },
  {
    id: 3,
    image: JS,
    title: 'Java Script',
    disc: 'Interaction',
  },
  
  {
    id: 4,
    image: reactImg,
    title: 'React',
    disc: 'Framework',
  },
  {
    id: 5,
    image: Bootstrap,
    title: 'Bootstrap',
    disc: 'User Interface',
  },
  {
    id: 6,
    image: figma,
    title: 'Figma',
    disc: 'Design tool',
  },
  
  
];
export default function Skills() {
  return (
    <section id='skills' className='skills'>
      <div className='top-section'>
        <h5>What Skills I Have</h5>
        <h2>My Experience</h2>
      </div>
      <div className="container container-skills">
        {SkillsData.map(({id ,image ,title ,disc}) =>(
          <article className='card-skill'>
          <div className="icon">
            <img src={image} alt="" />
          </div>
          <div className="content">
            <h4>{title}</h4>
            <p className='text-light'>{disc} </p>
          </div>
        </article>
        ))}
        
      </div>
    </section>
  )
}
