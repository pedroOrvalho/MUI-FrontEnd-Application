import React from "react";
import logo from "../images/Travel-agency-logo-design-template-on-transparent-background-PNG.png"
import { Link } from "react-router-dom";

export default function NavBar() {
    return (
        <div className="navbar_container">
            <img className="logo" src={logo} alt="world logo" />
            <div className="navbar_list">
                <ul className="navbar_items">
                    <li><Link className="link" to="/">Home</Link></li>
                    <li><Link className="link" to="/Countries">Countries</Link></li>
                </ul>
            </div>
        </div>
    );
}