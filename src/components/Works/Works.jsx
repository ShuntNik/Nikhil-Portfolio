import React from "react";
import "./Works.css";

export default function Works () {

    const list = [
        {
          id: "1",
          icon: "./assets/project.png",
          title: "Project - Driver drowsiness detection",
          desc:
            "Detecting drowsiness in drivers using Arduino, GSM module and eye-blink sensor. ",
          img:
            "assets/arduino.png",
        },
        {
          id: "2",
          icon: "./assets/project.png",
          title: "Project - Li-ion battery SOC estimation",
          desc:
            "The State of Charge of Lithium-ion battery is estimated using Kalman filter using MATLAB and Simulink. ",
          img:
            "https://ak.picdn.net/shutterstock/videos/1046285698/thumb/7.jpg?ip=x480",
        },
        {
          id: "3",
          icon: "./assets/certificate.png",
          title: "Certificate - C++ for C programmers - Coursera",
          desc:
            "A course on C++ from fundamentals to DSA concepts.",
          img:
            "https://e7.pngegg.com/pngimages/46/626/png-clipart-c-logo-the-c-programming-language-computer-icons-computer-programming-source-code-programming-miscellaneous-template.png",
        },
        {
            id: "4",
            icon: "./assets/certificate.png",
            title: "Python bootcamp from zero to hero in Python - Udemy",
            desc:
              "A course on Python from fundamentals to Object oriented programming concepts.",
            img:
              "assets/python.png",
        },
        {
            id: "5",
            icon: "./assets/certificate.png",
            title: "SQL for beginners: Learn SQL using MySQL and Database Design - Udemy",
            desc:
              "A course on MySQL EXPLAINING ABOUT RDBMS, commands and normalization.",
            img:
              "assets/sql.png",
        },

      ];
    const [currentSlider,setSlider] = React.useState(1);
    const [data,setData] = React.useState([]);

    React.useEffect(()=>{
        switch(currentSlider){
            case 1:
                setData(list[0]);
                break;
            case 2:
                setData(list[1]);
                break;
            case 3:
                setData(list[2]);
                break;
            case 4:
                setData(list[3]);
                break;
            case 5:
                setData(list[4]);
                break;
            default:
                setData(list[0]);
        }
    },[currentSlider])

    function rightArrowClick() {
        currentSlider < 5 ? setSlider(currentSlider+1) : setSlider(1)
    }

    function leftArrowClick() {
        currentSlider === 1 ? setSlider(5) : setSlider(currentSlider-1)
    }
    return (
        <div className="works" id="works">
            <h1>Projects and Certifications</h1>
                <div className="slider">
                <div className="works-container">
                    <div className="works-item">
                        <div className="works-left">
                            <div className="leftcontainer">
                                <div className="imgcontainer">
                                    <img className="work-img" src={data.icon} alt="" />
                                </div>
                                <h2 className="works-title">{data.title}</h2>
                                <p className="works-info">{data.desc}</p>
                            </div>
                        </div>
                        <div className="works-right">
                            <img className="right-image" src={data.img} alt="" />
                        </div>
                    </div>
                </div>
            </div>
            
            <img className="left-arrow" src="assets/arrow.png" alt="" onClick={leftArrowClick} />
            <img className="right-arrow" src="assets/arrow.png" alt="" onClick={rightArrowClick} />
        </div>
    );
}