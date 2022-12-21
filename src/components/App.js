import React from "react";
import Navbar from "./Navbar/Navbar.jsx";
import Home from "./Home/Home.jsx";
import About from "./About/About.jsx";
import Works from "./Works/Works.jsx";
import Contact from "./Contact/Contact.jsx";
import { MdDarkMode } from "react-icons/md";
import { BsFillSunFill } from "react-icons/bs";

export const ThemeContext = React.createContext(null);  //contextapi


export default function App () {

  const [currentTheme, setTheme] = React.useState("light");

  function handleTheme () {
     setTheme((curr) => (curr === "light" ? "dark" : "light"));
  }

  return (
    <ThemeContext.Provider value={{currentTheme, handleTheme, setTheme}}>
      <div className="app" id={currentTheme}>
        <Navbar />
        <div className="sections">
          <div className="theme-box" onClick={handleTheme}> 
            <div className="theme-toggle">
              {currentTheme==="light" ? <MdDarkMode size={20} /> : <BsFillSunFill size={20} />}
              {currentTheme==="light" ? <p>Dark</p> : <p>Light</p>}
            </div>
          </div>
          <div><Home /></div>
          <div><About /></div>
          <div><Works /></div>
          <div><Contact /></div>
        </div>
      </div>
    </ThemeContext.Provider>
  );
}

