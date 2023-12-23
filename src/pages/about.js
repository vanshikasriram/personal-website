import React from "react";

export default function About() {
    return (
        <div> 
            <div className="title">
                <h1 className = "Title"> About me </h1>
            </div>

            <div className = "body">
                <span className="aboutMe"> 
                    <p className="para"> 
                        I'm a biomedical engineering student at Columbia University. My current work is researching how to achieve hands-free robotic rehabilitation.
                    </p>
                    <p className="para">
                        My work has spanned from molecular biology to software engineering to robotics, and these diverse experiences have given me an interdisciplinary skillset and have helped me realize my interests. Overall, I'm passionate about working closely with people - customers or patients - to understand their needs and create solutions aimed at human health. 
                    </p>
                    <p className="para">
                        Outside of school and work, I love to cook and bake, spend time with my niece, and work on various side projects (like this website)! 
                    </p>
                </span>
            </div>
        </div>
    )
}