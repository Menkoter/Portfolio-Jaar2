import React from 'react';

const Skills = () => {
    return (
        <div className="skills">
            <h1>Skills</h1>
            <div className="skill-row">
                <img className="skill-logo" src="javascript.png" alt="JavaScript" />
                <img className="skill-logo" src="html.png" alt="HTML" />
                <img className="skill-logo" src="csslogo.png" alt="CSS" />
            </div>
            <div className="skill-row">
                <img className="skill-logo" src="react.png" alt="React" />
                <img className="skill-logo" src="bootstraplogo.png" alt="Bootstrap" />
                <img className="skill-logo" src="figmalogo.webp" alt="Figma" />
            </div>
        </div>
    );
};

export default Skills;
