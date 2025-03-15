import React from 'react'
import './Projects.css'
import IMG1 from '../../assets/portfolio1.jpg';
import IMG2 from '../../assets/portfolio2.jpg';
import IMG3 from '../../assets/portfolio3.jpg';
import IMG4 from '../../assets/portfolio4.jpg';
import IMG5 from '../../assets/portfolio5.png';
import IMG6 from '../../assets/portfolio6.jpg';
export default function Projects() {
  const portfolioData = [
    {
      id: 1,
      image: IMG1,
      title: 'YourBank',
      github: 'https://github.com/Elin23/YourBank',
      demo: 'https://elin23.github.io/YourBank/'
    },
    {
      id: 2,
      image: IMG2,
      title: 'Template',
      github: 'https://github.com/AmeenAliFadel/template1',
      demo: 'https://ameenalifadel.github.io/template1/'
    },
    {
      id: 3,
      image: IMG3,
      title: 'BOOKSAW',
      github: 'https://github.com/AmeenAliFadel/Task-6',
      demo: 'https://ameenalifadel.github.io/Task-6/'
    },
    {
      id: 4,
      image: IMG4,
      title: 'Bondi',
      github: 'https://github.com/AmeenAliFadel/Bootstrap-elzero',
      demo: 'https://ameenalifadel.github.io/Bootstrap-elzero/'
    },
    {
      id: 5,
      image: IMG5,
      title: 'Extech',
      github: 'https://github.com/AmeenAliFadel/task7-1',
      demo: 'https://ameenalifadel.github.io/task7-1/'
    },
    {
      id: 6,
      image: IMG6,
      title: 'Crud System',
      github: 'https://github.com/AmeenAliFadel/crud-system',
      demo: 'https://ameenalifadel.github.io/crud-system/'
    }
  ];

  return (
    <section id='projects' className='projects'>
      <div className='top-section'>
        <h5>My Recent Work</h5>
        <h2>Portfolio</h2>
      </div>
      <div className="container projects-container">
        {
          portfolioData.map(({ id, image, title, github, demo }) => (
            <article key={id} className='portfolio-item'>
              <div className='portfolio-item-img'>
                <img src={image} alt="" />
              </div>
              <h3>{title}</h3>
              <div className='portfolio-item-btns'>
                <a href={github} target='_blank' className='btn'>Github</a>
                <a href={demo} target='_blank' className='btn btn-primary'>Live Demo</a>
              </div>
            </article>
          ))
        }
      </div>
    </section>
  )
}
