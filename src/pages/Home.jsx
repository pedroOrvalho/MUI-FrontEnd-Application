import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
    return (
        <div className="home_container">
            <div className="home-content">
                <h1>Thinking about travelling soon?</h1>
                <h2>Let us help you with it</h2>
                <p>They are amazing countries to visit, so if you're thinking of travelling check out all the important information and fun facts about each country</p>
                <Link to="/countries"><button>Press here view countries</button></Link>
            </div>
        </div>
    );
}