//this page will include a link to my resume to download, and also highlight my current working skills
import React from "react";

//declare a function called Resume that returns the HTML elements and content
function Resume() { 
    return (
        <div className="row bg-dark text-light vh-100">
            <div className="col ms-5 text-center">
                <p className="fs-3 mt-3">Résumé</p>
                <hr />

                <a className="btn btn-danger p-3 mt-4" href={process.env.PUBLIC_URL + '/resume.pdf'} download rel="noreferrer">
                <span className="icon">
            <i className="fas fa-download"></i>
          </span>
          <span>Click to Download Resume</span>
                </a>
            </div>
            <div className="col me-5 text-center">
                <p className="fs-3 mt-3">Current Skills to Highlight</p>
                <hr />
                <ul className="list-unstyled">
                    <li>HTML,CSS, JS</li>
                    <li>GitHub</li>
                    <li>MERN</li>
                    <li>API</li>
                    <li>Business Analytics</li>
                </ul>
            </div>
        </div>
    )
}

export default Resume;