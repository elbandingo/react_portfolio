import React from "react";
import Project from "./Project";

//declare an array of objects called projects which contains all the api data for my portfolio
const projects = [
    {
        id: 0,
        title: "Run Buddy",
        image: "/img/rbuddy.jpg",
        description: "This was my first code along project for the Web Development Bootcamp. This focused on core elements of HTML and CSS",
        github: "https://github.com/elbandingo/rbuddy2",
        live: "https://elbandingo.github.io/rbuddy2/"

    },

    {
        id: 1,
        title: "On-Demand-CRM",
        image: "/img/crm.jpg",
        description: "This group project was a collaboration to create a client information CRM application",
        github: "https://github.com/AhmedAlkh/On-Demand-CRM",
        live: "https://mysterious-badlands-54283.herokuapp.com/"
    },

    {
        id: 2,
        title: "Weather Dashboard",
        image: "/img/weather.jpg",
        description: "This application was built to check the weather of any city registered on the openWeather API",
        github: "https://github.com/elbandingo/weather_dashboard",
        live: "https://elbandingo.github.io/weather_dashboard/"
    },

    {
        id: 3,
        title: "Password Generator",
        image: "/img/password.jpg",
        description: "This application lets you create a secure password with the ability to include combinations of specific characters and types",
        github: "https://github.com/elbandingo/passwordGenerator",
        live: "https://elbandingo.github.io/passwordGenerator/"
    }

]



function Portfolio() {
    return (
        <div className="text-center bg-dark">
            <h2>Portfolio</h2>
            <hr />
            <Project projects={projects} />
        </div>
    );
}

export default Portfolio;