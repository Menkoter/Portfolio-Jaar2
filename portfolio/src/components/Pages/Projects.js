import React from 'react';

const Projects = () => {
    return (
        <div className="projects">
            <h1>Projects</h1>
            <div className="project">
                <img src="TCR.png" alt="Project" />
                <h2>TCR Ouderavond website</h2>
                <p>De eerste site die we moesten maken, bevat alle info benodigd om de ouders te hebben geïnformeerd over de opleiding.</p>
            </div>
            <div className="project">
                <img src="Game.png" alt="Project" />
                <h2>GAME WEBSITE HTML/CSS 2</h2>
                <p>Een simpele website die wat games en de informatie daarover bevat.  2</p>
            </div>
            <div className="project">
                <img src="Site homescherm.png" alt="Project" />
                <h2>HTML/CSS PORTFOLIO 3</h2>
                <p>Een van mijn betere websites. Ook een Portfolio maar ditmaal gemaakt via HTML en CSS. Ik heb bij dit project voornamelijk geprobeerd het zo'n uniek mogelijke stijl te geven, en denk dat dit goed is gelukt.</p>
            </div>
        </div>
    );
};

export default Projects;