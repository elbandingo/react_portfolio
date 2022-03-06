//creates the HTML content based on the object i have of my portfolio
import React from "react";

function Project(props) {
return(
    <div className="row">
        {props.projects.map((project) => (
            <div className="col-md-6 mt-4 d-flex justify-content-center">
                <div className="card bg-dark text-light" style={{width: '25rem',}}>
                <img src={process.env.PUBLIC_URL + project.image} className="card-img-top" style={{objectFit:'cover', width: '100%', height: '20vw'}} alt="#" />
                <h5 className="text-center text-danger">{project.title}</h5>
                <p className="card-text">{project.description}</p>
                <a href={project.github} className="btn btn-primary mb-3" target="_blank">to GitHub!</a>
                <a href={project.live} className="btn btn-danger" target="_blank">Deployed Site!</a>
                </div>
            </div>
        ))}
    </div>
);
}

export default Project;
