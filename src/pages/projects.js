import React from "react";
import {
    NavLink,
} from "react-router-dom";

import "./mainpages_styles.css";

import researchJSON from "../research_obj";
import projectsJSON from "../projects_obj";

export default function Projects() {
    return (
        <div> 
            <div className="title">
                <h1 className = "Title"> Some things I've worked on </h1>
                <hr />
            </div>

            <div className = "bodyProjects"> 
                <div className = "subsection">
                    <h3 className="sectionTitle"> Research </h3>
                    <div className="cardContainer">
                    {Object.values(researchJSON).map((research, index) => (
                        <NavLink to={`/research/${research.id}`} key={index} target="_blank" rel="noopener noreferrer" component="a"> 
                        <div key={index} className="card" style={{ backgroundColor: research.Color }}>
                            <p className="projectTags">{research.Tags.join(', ')}</p>
                            <h3 className="projectTitle">{research.Title}</h3>
                        </div>
                        </NavLink>
                    ))}
                    </div>
                    <hr />
                </div>

                <div className = "subsection">
                    <h3 className="sectionTitle"> Classes & Personal </h3>
                    <div className="cardContainer">
                    {Object.values(projectsJSON).map((project, index) => (
                        <NavLink to={`/project/${project.id}`} key={index} target="_blank" rel="noopener noreferrer" component="a"> 
                        <div key={index} className="card" style={{ backgroundColor: project.Color }}>
                            <p className="projectTags">{project.Tags.join(', ')}</p>
                            <h3 className="projectTitle">{project.Title}</h3>
                        </div>
                        </NavLink>
                    ))}
                    </div>
                    <hr />
                </div>

            </div>
        </div>
    )
}
