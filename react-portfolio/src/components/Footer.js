import React from "react";
//declare function for footer to return informaiton to my profiles
function Footer() {
    return(
    <footer className="footer">
        <div className="content has-text-centered">
            <p>
                <b>Adam Lewis - Full Stack Web Development Portfolio 2022</b> - a React site by Adam Lewis
            </p>
            <hr />
            <a href="#" target="_blank" rel="noreferrer">GitHub</a>
            |
            <a href="mailto:elbandingo@protonmail.com" target="_blank" rel="noreferrer">Email Me</a>
        </div>
    </footer>
    );
}

export default Footer;