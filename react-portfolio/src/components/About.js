import React from "react";
//create function to return about me section
function About() {
    return (
        <div>
            <img className="profile-pic" src={process.env.PUBLIC_URL + '/img/profile.jpg'} alt="Adam Lewis"/>

        </div>
    )
}

export default About;