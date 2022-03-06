//First, import all the components needed to rendering the header
import React, {useState } from 'react';
import Nav from "./Nav";
import About from "./About";
import Contact from "./Contact";
import Portfolio from "./Portfolio";
import Resume from "./Resume";

//declare a function for the header, to return the formatted HTML. The current page will be based on a switch statement

function Header() {
    //set the current page to equal a useState of about by default, and run a page change everytimne pageChange is executed.
    const [currPage, pageChange] = useState("About");

    //switch statement arrow function for returning the page the user selects, with a default of About
    const pageRender = () => {
        switch (currPage) {
            case "About":
                return <About />;
            case "Portfolio":
                return <Portfolio />;
            case "Contact":
                return <Contact />;
            case "Resume":
                return <Resume />;
            
            default:
                return <About />;
        }
    };

    return (
        <div>
            <nav className="navbar d-block text-center bg-dark bg-gradient">
                <div className="navbar-brand">
                    <a className="navbar-item text-decoration-none text-light fs-1" rel="noreferrer" target="_blank" href="https://github.com/elbandingo">Adam Lewis Portfolio</a>
                </div>
            </nav>
            <Nav currPage={currPage} pageChange={pageChange}/>
            <main>
                <div>
                    {pageRender(currPage)}
                </div>
            </main>  
        </div>
        
    );

}

export default Header;