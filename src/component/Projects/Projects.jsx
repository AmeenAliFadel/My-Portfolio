import React from 'react'
import './Projects.css'
import IMG1 from '../../assets/yourbank.jpg';
import IMG7 from '../../assets/template.jpg';
import IMG9 from '../../assets/booksaw.jpg';
import IMG4 from '../../assets/bondi.jpg';
import IMG5 from '../../assets/extech.jpg';
import IMG6 from '../../assets/crud.jpg';
import IMG2 from '../../assets/BLOG.jpg';
import IMG8 from '../../assets/dashbord.jpg';
import IMG3 from '../../assets/little-learners.jpg';
import IMG10 from '../../assets/currency-converter.jpg';
import IMG11 from '../../assets/todo.jpg';
import IMG12 from '../../assets/wather.jpg';

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
      title: 'BLOG',
      github: 'https://github.com/AmeenAliFadel/Task6-adv',
      demo: 'https://ameenalifadel.github.io/Task6-adv'

    },
    {
      id: 3,
      image: IMG3,
      title: 'Little Learners',
      github: 'https://github.com/AmeenAliFadel/Little-Learners',
      demo: 'https://ameenalifadel.github.io/Little-Learners'
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
    ,
    {
      id: 7,
      image: IMG7,
      title: 'Template',
      github: 'https://github.com/AmeenAliFadel/template1',
      demo: 'https://ameenalifadel.github.io/template1/'
    }
    ,
    {
      id: 8,
      image: IMG8,
      title: 'Dashbord',
      github: 'https://github.com/AmeenAliFadel/Task-5-adv',
      demo: 'https://ameenalifadel.github.io/Task-5-adv/'
    }
    ,
    {
      id: 9,
      image: IMG9,
      title: 'BOOKSAW',
      github: 'https://github.com/AmeenAliFadel/Task-6',
      demo: 'https://ameenalifadel.github.io/Task-6/'
    },

    {
      id: 10,
      image: IMG10,
      title: 'Currency Converter',
      github: 'https://github.com/AmeenAliFadel/currency-converter',
      demo: 'https://ameenalifadel.github.io/currency-converter/'
    },
    {
      id: 11,
      image: IMG11,
      title: 'Todo List',
      github: 'https://github.com/AmeenAliFadel/To-Do-List-',
      demo: 'https://ameenalifadel.github.io/To-Do-List-/'
    },
    {
      id: 12,
      image: IMG12,
      title: 'weather app',
      github: 'https://github.com/AmeenAliFadel/weather-app',
      demo: 'https://ameenalifadel.github.io/weather-app/'
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
