import React from 'react';

const Experience = () => {
  const experience = [
    {
      title: "HTML/CSS",
      description: "Proficient in creating responsive web designs.",
      logo: "link-naar-html-css-logo.png", // Voeg het pad naar het HTML/CSS-logo toe
    },
    {
      title: "JavaScript",
      description: "Skilled in front-end and back-end development.",
      logo: "link-naar-js-logo.png", // Voeg het pad naar het JavaScript-logo toe
    },
    {
      title: "React",
      description: "Experienced in building interactive web applications.",
      logo: "link-naar-react-logo.png", // Voeg het pad naar het React-logo toe
    },
  ];

  return (
    <div className="experience-container">
      <h2>Experience</h2>
      <ul>
        {experience.map((item, index) => (
          <li key={index}>
            <div className="experience-item">
              <img className="experience-logo" src={item.logo} alt={`${item.title} Logo`} />
              <div className="experience-text">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Experience;