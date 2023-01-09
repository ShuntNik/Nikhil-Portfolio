import React from "react";
import "./Contact.css";
import { FaLinkedin } from "react-icons/fa";
import { BsGithub } from "react-icons/bs";
import { FaInstagramSquare } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { FaDiscord } from "react-icons/fa";


export default function Contact() {
    return (
        <div className="contact" id="contact">
            <h1>Contact me</h1>
            <div className="bottom-container">
                <div className="contact-icons">
                <a className="contact-link" href="https://www.linkedin.com/in/ksnik/" target="_blank" rel="noopener noreferrer"><FaLinkedin size={42} /></a>
                <a className="contact-link" href="https://github.com/ShuntNik" target="_blank" rel="noopener noreferrer"><BsGithub size={42} /></a>
                <a className="contact-link" href="https://www.instagram.com/_niks_k_s_/" target="_blank" rel="noopener noreferrer"><FaInstagramSquare size={42} /></a>
                <a className="contact-link" href="mailto:nikhilks1908@gmail.com" target="_blank" rel="noopener noreferrer"><SiGmail size={42} /></a>
                <a className="contact-link" href="https://discord.com/users/752476123375337563" target="_blank" rel="noopener noreferrer"><FaDiscord size={42} /></a>
                </div>
            <p>© 2023 Nikhil Kumar Sinha.</p>
            </div>
        </div>
    );
}