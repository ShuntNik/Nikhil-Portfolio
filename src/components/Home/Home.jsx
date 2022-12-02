import React from "react";
import "./Home.css";

export default function Home() {
    return (
        <div className="home" id="home">
            <div className="left-home">
                <div className="imgContainer">
                    <img src="assets/IMG_8982-removebg-preview.png" alt="Nikhil Image"/>
                </div>
            </div>
            <div className="right-home">
                <div className="wrapper-home">
                    <h2>Hi There, I'm</h2>
                    <h1>Nikhil Sinha</h1>
                    <h3>Front-end Developer</h3>
                </div>
            </div>
        </div>
    );
}