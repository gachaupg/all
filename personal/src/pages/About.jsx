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
      <h2>About Me</h2>
      <div className="top-about">
        <div className="top-left">
          <p>
            Hi, I'm Peter Gachau, a Kenyan-based software engineer. Welcome to
            
            my space in the world wide web for my ramblings and musings. I am
            motivated to share what I've learned with the world through creating
            content, and hopefully to connect with some people. The projects
            page highlights some of my workings, the resume page contains some
            of my archievements. I also the founder of Navi softwares limited.<a style={{color:'red'}} href="https://navisoftwares.org">Here</a> a Dev Company where we
            build app and system.
          </p>
          <div className="icons-about">
            <a href="https://wa.me/0757198515">
              <AiOutlineWhatsApp size={35} />
            </a>
            <a href="mailto:petergachau57@gmail.com">
              <CgMail size={35}  />
            </a>
            <a href="tel:0757198515">
              <FiPhoneCall size={35}  />
            </a>
            <a href="sms:+254757198515&amp;body= I%27d%20like%20to%20set%20up%20an%20appointment%20for...">
              <BsChatText size={35}  />
            </a>
            <a href="https://github.com/petergachau">
              {" "}
              <AiFillGithub size={35}  />
            </a>
            <a href="https://www.linkedin.com/in/peter-gachau-991736277/">
              <AiFillLinkedin size={35}  />
            </a>
            <a href="https://twitter.com/ridge_techs">
              <AiFillTwitterCircle size={35}  />
            </a>
          </div>
          <div className="about-current">
            <h2>I'm currently</h2>
            <div className="about-line"></div>
            <ul>
              <li>Learning Web development
</li>
<li>Sql and Sql Database</li>
<li>Machine Learning</li>
            </ul>
          </div>
          <div className="about-current">
            <h1>Tools for Work</h1>
            <div className="about-line"></div>
       <h2>Hardware</h2> 
       <ul>
       <li>Coding PC: Hp envy</li>
       <li>Monitor: HP 27 IPS LED Backlit Monitor</li>
       <li>Headphones: Sony WH-1000XM3</li>
       
        </ul>  
<h2>Software</h2>
<ul>
       <li>This website has been written in Reactjs and Nodejs
</li>
       <li>Coding: PyCharm, Visual Studio Code, and Vim,postman</li>
       <li>Terminal: Bash</li>
       <li>Video recording: OBS Studio</li>
       <li>Image editor: GIMP</li>
       <li>Music: Spotify</li>
       <li>Database:Mysql,Mongodb</li>
        </ul> 







          </div>   
           <div className="about-current">
            <h2>Other</h2>
            <div className="about-line"></div>
            <ul>
              <Link to='/resume'>
              <li style={{color:'purple'}}>
                Resume
              </li>
              </Link>
              
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
