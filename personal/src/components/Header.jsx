import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";
import { MdPeopleAlt } from "react-icons/md";
import { MdArticle } from "react-icons/md";
import { SlDocs } from "react-icons/sl";
import { AiFillGithub, AiOutlineWhatsApp } from "react-icons/ai";
import { RxExternalLink } from "react-icons/rx";
import { CgMail } from "react-icons/cg";
import { FiPhoneCall } from "react-icons/fi";
import { BsChatText } from "react-icons/bs";
function Header() {
  return (
    <Navbar  expand="lg">
      <Container>
        <Navbar.Brand style={{color:'white'}} href="/">Peter Gachau</Navbar.Brand>
        <Navbar.Toggle style={{color:'white',background:'white'}}  aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" >
          
          
          
          
          <Nav className="me-auto">
            <Link className="link" to="/about">
              {" "}
              <MdPeopleAlt /> About
            </Link>
            <Link className="link" to="/resume">
              <MdArticle /> Resume
            </Link>
            <Link className="link" to="/projects">
              {" "}
              <SlDocs color="white" /> Projects
            </Link>
            <a className="link" href="https://github.com/petergachau">
              <AiFillGithub /> Github <RxExternalLink />
            </a>
            {/* <div className="dot">....................</div> */}
            <div className="header-items">
            <a  href="https://wa.me/0757198515">
  <AiOutlineWhatsApp size={30} /></a>
  <a href="mailto:petergachau57@gmail.com">
    <CgMail size={30} />
  </a>
  <a href="tel:0757198515">
  <FiPhoneCall size={30} />
</a>
<a href="sms:+254757198515&amp;body= I%27d%20like%20to%20set%20up%20an%20appointment%20for...">
  {" "}
  
  <BsChatText size={30} />
</a>
            </div>
            
            
            
            
            
            
            
            
            
            
            
            
            
           
           
           
           
           
           
           
           
           
           
           
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    // {/* <Container> */}
    // {/* <Link  to='/' className='nav-text' >Peter Gachau</Link> */}
    // {/* <div className="dot">.............................</div> */}
    // {/* <Navbar.Toggle aria-controls="basic-navbar-nav" style={{backgroundColor:'white'}} /> */}
    // {/* <Navbar.Collapse id="basic-navbar-nav" style={{backgroundColor:'',display:'flex'}}> */}
    // {/* <Nav className="me-auto"> */}
    // {/* <Link className='link' to='/about'> <MdPeopleAlt/> About</Link> */}
    // {/* <Link className='link' to='/resume'><MdArticle/> Resume</Link> */}
    // {/* <Link className='link' to='/projects'> <SlDocs color='white'/> Projects</Link> */}
    //  {/* <a href="https://github.com/petergachau"><AiFillGithub/> Github <RxExternalLink/></a> */}
    // {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
    // <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
    // <NavDropdown.Item href="#action/3.2">

    // </NavDropdown.Item>
    // </NavDropdown> */}

    // </Nav>
    // </Navbar.Collapse>
    // </Container>
    // </Navbar>
  );
}

export default Header;
