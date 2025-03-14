import React from 'react';

// Team Section
const TeamSection = () => {
  const teamMembers = [
    { name: 'Sada Kahindi', role: 'Founder & CEO', img: '/images/sadaceo.png' },
    { name: 'John Doe', role: 'Head of Marketing', img: '/images/elijah.jpg' },
    { name: 'James Olal', role: 'Design Lead', img: '/images/olalofficial.png' },
  ];
  
  return (
    <div className="py-10">
      <div className="max-w-6xl mx-auto bg-gray-100 p-10">
        <h2 className="text-3xl font-semibold text-center mb-6">Meet the Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {teamMembers.map((member, index) => (
            <div key={index} className="p-4 shadow-md ">
              <img src={member.img} alt={member.name} className="w-full mb-4" />
              <h3 className="text-xl font-bold">{member.name}</h3>
              <p className="text-gray-600">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};;

export default TeamSection;
