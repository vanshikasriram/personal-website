import React from "react";

import "./mainpages_styles.css";

export default function Home() {
    return (
        <div> 
            <div className = "title">
                <h1 className = "Title"> Hey! I'm Vanshika </h1>
                <h2 className = "Subtitle"> I'm a biomedical engineering student at Columbia University interested in developing technical solutions for problems in medicine and biology. Learn more about my work here! </h2>
                <h3 className = "email"> 
                    <a className = "email" href = "mailto: vanshikas2502@gmail.com"><span>vanshikas2502@gmail.com</span></a>
                </h3>
            </div>

            <div className="images">
                <img className= "img1" src = 'https://i.postimg.cc/cL1K0wFD/Robust.png' alt="RobUST stand trainer"/>
                <img className= "img2" src = 'https://i.postimg.cc/L6FWPfNH/Timelapse-FG.png' alt="Foregut growth timelapse"/>
                <img className= "img3" src = 'https://i.postimg.cc/bN0B9JB1/FG-beads.png' alt="Foregut stained with beads"/>
            </div>
        </div>
    )
}
