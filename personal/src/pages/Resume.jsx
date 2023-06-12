import React from "react";
import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillTwitterCircle,
  AiOutlineWhatsApp,
} from "react-icons/ai";
import { CgMail } from "react-icons/cg";
import { FiPhoneCall } from "react-icons/fi";
import { BsChatText } from "react-icons/bs";
import { Link } from "react-router-dom";
const About = () => {
  return (
    <div className="about">
      
      <div className="top-about">
        <div className="top-left">
        <h2>Peter Gacahu</h2>
      <div className="about-line"></div>
          
          <div className="icons-about">
            <a href="https://wa.me/0757198515">
              <AiOutlineWhatsApp size={35} color="purple" />
            </a>
            <a href="mailto:petergachau57@gmail.com">
              <CgMail size={35} color="purple" />
            </a>
            <a href="tel:0757198515">
              <FiPhoneCall size={35} color="purple" />
            </a>
            <a href="sms:+254757198515&amp;body= I%27d%20like%20to%20set%20up%20an%20appointment%20for...">
              <BsChatText size={35}  color="purple" />
            </a>
            <a href="https://github.com/petergachau">
              {" "}
              <AiFillGithub size={35} color="purple"  />
            </a>
            <a href="https://www.linkedin.com/in/peter-gachau-991736277/">
              <AiFillLinkedin size={35} color="purple"  />
            </a>
            <a href="https://twitter.com/ridge_techs">
              <AiFillTwitterCircle size={35} color="purple"  />
            </a>
          </div>
          <div className="about-current">
            <h2>Experience</h2>
            <div className="about-line"></div>
            <h4>Frerancer Software Developer</h4>
            <h5>UpWork — may 2022 - Present</h5>
            <ul>
     
<li>Networking and developing full-stack web projects for clients</li>
<li>Learning and improving skills in object-oriented programming</li>
            </ul>
          </div>
          <div className="about-current">
           
       <h3>Developer at NaviSoftwares limited</h3> 
       <div className="about-line"></div>
       <h5>Developer — Sept 2021 - Present</h5>
       <ul>
       <li>Developing and Deploying web apps using Nodejs and Django,Python and Reactjs</li>
       <li>DEveloping The databases using Mongodb and mysql</li>
       <li>Leading the NaviSoftware developement team</li>
       
        </ul>  


          </div>   
           <div className="about-current">
            <h2>FullStack Developer</h2>
            <h5>Contract Developer</h5>
            <div className="about-line"></div>
            <ul>
          <li>
              Developed and deployed enterprise-level microservices applications of Digital Public Works Dashboard using React.js, NodeJS and Django and integrating with open-source libraries and saving the client average of $7K/yr.
              </li>
            </ul>
           </div>
           <div className="about-current">
            <h2>Skills</h2>
            <div className="about-line"></div>
            <ul>
<li>Languages: Python, JavaScript, Bash, SQL, HTML, CSS</li>   
<li>Frameworks: Django, SQLAlchemy,numpy,Pandas,Sckitleran, WordPress, NodeJS, React.js, Bootstrap,Tailwindcss,Nextjs</li>           
            <li>Databases: MySQL, MongoDB</li>
            <li>Tools/Technologies: Git, Docker, Microsoft Azure, Digital Ocean, CPanel, AWS (EC2, S3, CloudFront), GCP</li>
            </ul>
           </div>
           <div className="about-current">
            <h2>Education</h2>
            <div className="about-line"></div>

            <h5>Bachelor of Science in Information Technology
</h5>
            <ul>
Multimedia university of Kenya 2019-2023              
            </ul>
           </div>
        </div>
        
        <div className="top-bottom">
        <img src="https://avatars.githubusercontent.com/u/83207831?s=400&u=8bfe1efffe18e0165ff1c5a1da47ed6a584556a8&v=4" alt="" />

        </div>
      </div>
    </div>
  );
};

export default About;
