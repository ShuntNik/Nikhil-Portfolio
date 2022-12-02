import React from "react";


export default function AboutList({id,title,active,setSelected}) {
    return (
        <div className={active ? "about-list-item-active" : "about-list-item"} onClick={() => setSelected(id)}>
            <li><b>
                {title}
            </b></li>
        </div>
    );
}
