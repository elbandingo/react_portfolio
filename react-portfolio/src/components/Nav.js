//this is the NAvigation bar under my name, which will default to about me
//TRhis will also show other options which you can click to render on the center of the page
import React from "react";

//create Nav functions taking in props as arguments for further use
function Nav(props) {
    const tabArray = ["About", "Portfolio", "Contact", "Resume"];
    return (
        <div className="tabs is-centered">
            <ul className="nav nav-tabs">
                {tabArray.map((tab) => (
                    <li className={props.currPage === tab ? "nav-item is-active": "nav-item"
                }
                key={tab}
                >
                <a href={"#" + tab.toLowerCase()} onClick={() => props.pageChange(tab)} className={props.currPage === tab ? "nav-link active":"nav-link"}>
                    {tab}
                </a>
                </li>
                ))}
            </ul>

        </div>
    );
}

export default Nav;