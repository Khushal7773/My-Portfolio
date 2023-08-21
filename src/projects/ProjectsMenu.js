import React, { useState } from 'react';
import classNames from 'classnames';
import projects from "./projectsData";
import "../styles/projectsMenu.css";

const ProjectsMenu = () => {
    const [activeProject, setActiveProject] = useState(1);

    const handleProjectClick = (project) => {
    setActiveProject(project);
    };

    const renderContent = (projects) => {
    return projects?.map((item, index) => (
        <div key={index} className={`project-sub-container-${index + 1}`}>
        <h3>{item.title}</h3>
        <img src={item.image} alt={item.title}></img>
        <div>{item.description}</div>
            <div className="link-container">
            <a href={item.github} target="_blank" rel="noopener noreferrer">GITHUB</a>
            <a href={item.demo} target="_blank" rel="noopener noreferrer">DEMO</a>
            </div>
        </div>
    ));
    };

    const projectItems = ["PROJECT ONE", "PROJECT TWO", "PROJECT THREE"];

    return (
    <div className="project-menu">
        <div className="project-items-container">
            {projectItems.map((item, index) => (
                <div
                    key={index}
                    className={classNames("project-item", {activeProject: activeProject === index + 1,})}
                    onClick={() => handleProjectClick(index + 1)}
                >
                    <h2 className="title">{item}</h2>
                </div>
            ))}
        </div>
        <div className="project-sub-container">
        {renderContent([projects[activeProject - 1]])}
        </div>
    </div>
    );
};

export default ProjectsMenu;
