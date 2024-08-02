import { Link } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import banner_img from './img/profile-image.svg';
import './style.css';

function Head() {
  return (
    <>
      <section className='nav-sec'>
        <Navbar expand={false} className="navbar-expand-lg nav-bg sticky-top">
          <Container>
            <Navbar.Brand href="#" className="brand-custom">Aravintharaj</Navbar.Brand>
            <Navbar.Toggle aria-controls="offcanvasNavbar" />
            <Navbar.Offcanvas
              id="offcanvasNavbar"
              aria-labelledby="offcanvasNavbarLabel"
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id="offcanvasNavbarLabel">
                  Aravintharaj
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-center flex-grow-1 nav-div">
                  <Nav.Link>
                    <ScrollLink to="home_sec" smooth={true} duration={500}>Home</ScrollLink>
                  </Nav.Link>
                  <Nav.Link>
                    <ScrollLink to="about_sec" smooth={true} duration={500}>About</ScrollLink>
                  </Nav.Link>
                  <Nav.Link>
                    <ScrollLink to="skills_sec" smooth={true} duration={500}>Skills</ScrollLink>
                  </Nav.Link>
                  <Nav.Link>
                    <ScrollLink to="projects_sec" smooth={true} duration={500}>Projects</ScrollLink>
                  </Nav.Link>
                  <Nav.Link>
                    <ScrollLink to="contact_sec" smooth={true} duration={500}>Contact</ScrollLink>
                  </Nav.Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      </section>

      {/* home */}
      <section id='home_sec' className='home_sec'>
        <Container>
          <div className='row'>
            <div className='banner_all_div'>
              <div className='text-center'>
                <img src={banner_img} className='img-responsive banner_img' alt='img' />
              </div>
              <div className='text-center self_content'>
                <p>Hi I'm Aravintharaj</p>
                <p>Designing User-Friendly <span className='d-block'>Experiences with Laravel</span></p>
                <p>
                  "Skilled UI and Laravel developer who builds easy-to-use websites and reliable backend systems. Dedicated to creating top-notch, user-friendly web applications."
                </p>
              </div>
              <div className='text-center mt-5'>
              <ScrollLink to="contact_sec" className='contact_btn' smooth={true} duration={500}>Contact</ScrollLink>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Other sections */}
      <section id='about_sec' className='about_sec'>
        {/* Content for About section */}
      </section>
      <section id='skills_sec' className='skills_sec'>
        {/* Content for Skills section */}
      </section>
      <section id='projects_sec' className='projects_sec'>
        {/* Content for Projects section */}
      </section>
      <section id='contact_sec' className='contact_sec'>
        {/* Content for Contact section */}
      </section>
    </>
  );
}

export default Head;
