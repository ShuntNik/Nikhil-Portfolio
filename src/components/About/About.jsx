import React from "react";
import "./About.css";
import AboutList from "../About-list/AboutList.jsx";
import { backgroundaboutlist,skillsaboutlist,interestsandhobbies,resumeaboutlist} from "../../data.js";

export default function About() {
    const [selected,setSelected] = React.useState("background");
    const [data,setData] =React.useState([]);
    const list = [
        {
            key: 1,
            id: "background",
            title: "Background",
        },
        {
            key: 2,
            id: "skills",
            title: "Skills",
        },
        {
            key: 3,
            id: "interests-hobbies",
            title: "Interests and Hobbies",
        },
        {
            key: 4,
            id: "resume",
            title: "Resume",
        }
    ];

    React.useEffect(()=>{
        switch(selected){
            case "background":
                setData(backgroundaboutlist);
                break;
            case "skills":
                setData(skillsaboutlist);
                break;
            case "interests-hobbies":
                setData(interestsandhobbies);
                break;
            case "resume":
                setData(resumeaboutlist);
                break;
            default:
                setData(backgroundaboutlist);
        }
    },[selected])
    
    return (
        <div className="about" id="about">
            <h1>About me</h1>
            <ul className="about-list">
                 {list.map(item => (
                    <AboutList title={item.title}
                     active={selected===item.id} 
                     setSelected={setSelected} 
                     id={item.id} />
                 ))}
            </ul>
            <div className="about-container">
                {data.map((d)=> (
                    <div className="about-container-item">
                    <a href={d.url}  target="_blank" rel="noopener noreferrer"><img src={d.img} /></a>
                    <h3>{d.title}</h3>
                </div>
                ))}
            </div>
        </div>
    );
}