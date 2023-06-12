import React from 'react'
import { Card } from 'react-bootstrap'
import { RxExternalLink } from 'react-icons/rx'
import {AiFillGithub, AiFillLinkedin, AiFillTwitterCircle, AiOutlineWhatsApp} from 'react-icons/ai'
import {CgMail} from 'react-icons/cg'
import {FiPhoneCall} from 'react-icons/fi'
import {BsChatText} from 'react-icons/bs'
const Home = () => {
  return (
    <div className='main-home'>
        <div className="main-top">
        <h1>Hi, I'm Peter Gachau</h1>

        </div>
<div className="main-bottom">
<p>
Welcome to my digital space. I'm a software developer from Kenya 🇰🇪. I write code, develop websites like this one and occasionally contribute to open-source projects. I also write articles on web development and a bit on Data science. I like reading inspirational books, gaming, and surfing the internet.
<br />
<p></p>
Welcome to my digital arena. 🌌
</p>

</div>
<div className="latest-projects">
    <h1>Latest Projects</h1>
    <div className="latest-cards">
    <Card className='home-card'>
        <Card.Footer style={{color:'brown'}} >02 jun 2023</Card.Footer>
        <Card.Body>
        <a style={{color:'black'}} href="https://github.com/gachaupg/driver-server.git">
            Goods Deliver app <RxExternalLink/>
        </a>
        </Card.Body>
        
    </Card>
    <Card className='home-card'>
    <Card.Footer style={{color:'brown'}} >02 jun 2023</Card.Footer>
        <Card.Body>
        <a style={{color:'black'}} href="https://github.com/petergachau/React-beach-resort.git">
            Beach Resort Design App <RxExternalLink/>
        </a>
        </Card.Body>
    </Card>
    <Card className='home-card'>
    <Card.Footer style={{color:'brown'}} >02 jun 2023</Card.Footer>
        <Card.Body>
        <a style={{color:'black'}} href="https://github.com/petergachau/hustle-kenya.git">
            Second Hand Eccomerce <RxExternalLink/>
        </a>
        </Card.Body>    </Card>  
    </div>
   
</div>
<div className="latest-projects">
    <h1>Side Projects</h1>
    <div className="latest-cards">
    <Card className='home-card'>
        <Card.Footer style={{color:'brown'}} >02 sep 2020</Card.Footer>
        <Card.Body>
        <a style={{color:'black'}} href="https://www.canva.com/design/DAFlICQacZs/MZZBhlxjUbxycuP5AtuJGw/edit">
            Business Card Graphics <RxExternalLink/>
        </a>
        </Card.Body>
        
    </Card>
    <Card className='home-card'>
    <Card.Footer style={{color:'brown'}} >24 nov 2020</Card.Footer>
        <Card.Body>
        <a style={{color:'black'}} href="https://github.com/petergachau/datascience.git">
            Covid 19 Prediction App<RxExternalLink/>
        </a>
        </Card.Body>
    </Card>
    <Card className='home-card'>
    <Card.Footer style={{color:'brown'}} >02 jun 2022</Card.Footer>
        <Card.Body>
        <a style={{color:'black'}} href="https://github.com/petergachau/sklearn.git">
            Califonia Stock Rate Prediction<RxExternalLink/>
        </a>
        </Card.Body>    </Card>  
    </div>
   
</div>
<div className="latest-projects">
    <h1>Tutorial Projects</h1>
    <div className="latest-cards">
    <Card className='home-cards'>
        <Card.Footer  >
            <img src="https://johnsmilga.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F3-mern.fc0b910b.png&w=1920&q=100" alt="" />
        </Card.Footer>
        <Card.Body>
            <h2 style={{color:'brown'}}>React</h2>
            <p>
React from scratch. Learn the most popular UI library and build 25+ Interesting Projects. During the course we also cover Redux Toolkit.</p>
        <a style={{color:'black'}} href="https://github.com/john-smilga/react-projects">
            View <RxExternalLink/>
        </a>
        </Card.Body>
        
    </Card>
    <Card className='home-cards'>
    <Card.Footer  >
        <img src="https://johnsmilga.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F1-react.7750f33d.png&w=1920&q=100" alt="" />
    </Card.Footer>
        <Card.Body>
            <h2 style={{color:'brown'}}>Mern</h2>
            <p>MERN Stack. Build Full Stack Application from Scratch with MongoDB, Express, React and NodeJS.</p>
        <a style={{color:'black'}} href="https://github.com/john-smilga/mern-course-jobify">
          View  <RxExternalLink/>
        </a>
        </Card.Body>
    </Card>
   
    </div>
   
</div>
<div className="contact-me">
<h2>Stay in touch</h2>
<div className="icons">
<a href="https://github.com/petergachau"> <AiFillGithub/></a> 
<a href="https://www.linkedin.com/in/peter-gachau-991736277/"><AiFillLinkedin/></a> 
<a href="https://twitter.com/ridge_techs"><AiFillTwitterCircle/></a> 


<div className="icons-bottom">
   <p>0757198515</p>
   <p>petergachau57@gmail.com</p>
</div>
 
</div>
</div>
    </div>
  )
}

export default Home