import React from "react";
//create function to return about me section
function About() {
    return (
        <div className="bg-dark" style={{height: "1080px"}}>
            <h2 className="fs-2 text-center text-light p-5">Welcome to my Page!</h2>
            <img className="rounded-circle mx-auto d-block" src={process.env.PUBLIC_URL + '/img/profile.jpg'} alt="Adam Lewis"/>
            <p className="text-center text-light p-5">Thank you for stopping by my Portfolio page. Please take a few moments to learn more about my skills as a programmer!</p>
            <p className="text-center text-light">This page in its current state is a working revision of a portfolio page I have made using React. Over the past 5 months, I have been learning about the fundamentals and application of a full stack web application. Coming from a background in technology, I have a profound appreciation for programming for both its complexity, and also its elegence. Throughout the learning journey, I have learned how deep and layered the application and use of modern programming languages go, but I've also grown to appreicate the amount of effort the community has put forth to ensure those who are new, have access to resources that make coding and learning much easier, and consistent. Soome of the technologies that I have really enjoyed learning about has been Node.js, MongoDB, and React programming. Doing this project through React helped solidify alot of the HTML and CSS knowledge learned at the beginning of the course, but also gave me insight as to how to build component based applications in React. Thank you for stopping by my page, and please head to any of the above links to review my work, or get in touch!</p>
        </div>
    )
}

export default About;