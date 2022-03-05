//this page will include a link to my resume to download, and also highlight my current working skills
import React from "react";

//declare a function called Resume that returns the HTML elements and content
function Resume() { 
    return (
        <div className="row">
            <div className="col">
                <p className="">Résumé</p>
                <hr />

                <a className="btn btn-primary" href={process.env.PUBLIC_URL + '/resume.pdf'} download rel="noreferrer">
                <span className="icon">
            <i className="fas fa-download"></i>
          </span>
          <span>Click to Download Resume</span>
                </a>
            </div>
            <div className="col">
                <p className="">Current Skills to Highlight</p>
                <hr />
                <ul>
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