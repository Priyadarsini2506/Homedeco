import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import Navbar from './Navbar';
import './Team.css';

const Team = () => {
  const teamMembers = [
    { id: 1, name: 'Alice', location: 'New York', image: 'https://foyr.com/learn/wp-content/uploads/2021/11/most-famous-female-interior-designers-scaled.jpg', description: 'Best Interior Designer' },
    { id: 2, name: 'Bob', location: 'Los Angeles', image: 'https://media.istockphoto.com/id/1140711121/photo/interior-designer-feeling-good-while-working-on-new-project.jpg?s=612x612&w=0&k=20&c=QguBQZAbrnKhQNwq-5Z-qtDzA42TrmW6Qum2eHnAUO4=', description: 'Finest Interior Design' },
    { id: 3, name: 'Charlie', location: 'Chicago', image: 'https://s28126.pcdn.co/blogs/ask-experian/wp-content/uploads/what-is-foreign-earned-income-exclusion.jpg.optimal.jpg', description: 'Aesthetic Designer' },
    { id: 4, name: 'David', location: 'India', image: 'https://media.shilpaahuja.com/wp-content/uploads/2021/07/Ambrish-Arora-Taj-Theog-Resort-Top-Interior-Designers-in-India.jpg', description: 'Awarded the best Architect 2023' },
    { id: 5, name: 'Eva', location: 'Miami', image: 'https://media.istockphoto.com/id/1372400763/photo/smiling-female-engineer-standing-with-a-hardhat-and-clipboard-in-her-office.jpg?s=612x612&w=0&k=20&c=8CEz1Tbw9UqD21C335rg5Hx-UOXzx55RsQcQDXRq8DY=', description: 'Best Designer 2021' },
    { id: 6, name: 'Frank', location: 'London', image: 'https://img.freepik.com/premium-photo/happy-male-architect-with-drafts_251859-17428.jpg', description: 'Best Interior Designer' },
  ];

  return (
    <div className="team">
      <Navbar />
      <div className="team-content">
        <h2>Our Team</h2>
        <p>Meet our dedicated team of professionals who are experts in interior design.</p>
        <div className="team-grid">
          {teamMembers.map(member => (
            <div key={member.id} className="team-member">
              <img src={member.image} alt={member.name} />
              <h3>{member.name}</h3>
              <p className="location">{member.location}</p>
              <p className="description">{member.description}</p>
              <Link to="/contact">
                <button>Contact</button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Team;
