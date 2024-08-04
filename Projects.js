import React from 'react';
import './Projects.css';
import Navbar from './Navbar';

const projects = [
  { id: 1, name: 'Minimal Bedroom', image: 'https://i0.wp.com/magzhouse.com/wp-content/uploads/2020/01/Fabulous-Modern-Minimalist-Bedroom-You-Have-To-See-03.jpg?ssl=1' },
  { id: 2, name: 'Modern Bedroom', image: 'https://tse4.mm.bing.net/th?id=OIP.RwMfjxeNLWSYCqo2dXG4eQHaEc&pid=Api&P=0&h=180' },
  { id: 3, name: 'Minimal Bathroom', image: 'https://cdn.mos.cms.futurecdn.net/xF7MdBLXennDhcoHarcmgN-1200-80.jpg' },
  { id: 4, name: 'Modern Kitchen', image: 'https://livinator.com/wp-content/uploads/2015/08/design-laorosa.jpg' },
  { id: 5, name: 'Contemporary Living Room', image: 'https://tse1.mm.bing.net/th?id=OIP.BRM1PEOvIdJ6EZe3lERqqwHaFO&pid=Api&P=0&h=180' },
  { id: 6, name: 'Scandinavian Dining Room', image: 'https://tse2.mm.bing.net/th?id=OIP.9CXMeaaLQhfzOiWUbm1DpgHaFj&pid=Api&P=0&h=180' },
  
  { id: 7, name: 'Canella', image: 'https://dlifeinteriors.com/wp-content/uploads/2020/09/living-room-center-table-DLIFE-Home-interiors-kerala.jpg' },
  { id: 8, name: 'Ethan', image: 'https://dlifeinteriors.com/wp-content/uploads/2022/03/Ethan-e1646812373475.jpg' },
  { id: 9, name: 'Harleston', image: 'https://dlifeinteriors.com/wp-content/uploads/2022/03/harleston.jpg' },
  { id: 10, name: 'Kids Bedroom', image: 'https://cdn-dliin.nitrocdn.com/iFaxlHcVqyWZWghwsjNiQOatlfNsVALG/assets/images/source/rev-deded56/dlifeinteriors.com/wp-content/uploads/2023/07/kids-room-bed.jpg' },
  
  // add more projects as needed
];

const Projects = () => {
  return (
    <div className="projects">
    <Navbar/>
      <h2>Our Projects</h2>
      <div className="project-list">
        {projects.map(project => (
          <div
            key={project.id}
            className="project-item"
            onClick={() => window.location.href = '/Contact'}
            style={{ backgroundImage: `url(${project.image})` }}
          >
            <div className="project-overlay">
              <h3>{project.name}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
