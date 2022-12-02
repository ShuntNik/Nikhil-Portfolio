import React from "react";
import Navbar from "./Navbar/Navbar.jsx";
import Home from "./Home/Home.jsx";
import About from "./About/About.jsx";
import Works from "./Works/Works.jsx";
import Contact from "./Contact/Contact.jsx";

export default function App () {
  return (
    <div className="app">
      <Navbar />
      <div className="sections">
        <div><Home /></div>
        <div><About /></div>
        <div><Works /></div>
        <div><Contact /></div>
      </div>
    </div>
  );
}

