import { Link as ScrollLink } from 'react-scroll';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import banner_img from './img/profile-image.svg';
import about_img from './img/about_img.svg';
import skill1 from './img/skill1.svg';
import skill2 from './img/skill2.svg';
import skill3 from './img/skill3.svg';
import skill4 from './img/skill4.svg';
import skill5 from './img/skill5.svg';
import skill6 from './img/skill6.svg';
import skill7 from './img/skill7.svg';
import skill8 from './img/skill8.svg';
import skill9 from './img/skill9.svg';
import skill10 from './img/skill10.svg';
import contact from './img/contact.svg';
import fb from './img/fb.png';
import insat from './img/insta.png';
import linked from './img/linedin.png';
import './style.css';
import { Link } from 'react-router-dom';

function Head() {
  return (
    <>
      <section className='nav-sec'>
        <Navbar expand={false} className="navbar-expand-lg nav-bg  fixed-top">
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
                <Nav className="justify-content-end flex-grow-1 nav-div">
                  <Nav.Link>
                    <ScrollLink to="home_sec" smooth={true} duration={.5}>Home</ScrollLink>
                  </Nav.Link>
                  <Nav.Link>
                    <ScrollLink to="about_sec" smooth={true} duration={.5}>About</ScrollLink>
                  </Nav.Link>
                  <Nav.Link>
                    <ScrollLink to="skills_sec" smooth={true} duration={.5}>Skills</ScrollLink>
                  </Nav.Link>
                  <Nav.Link>
                    <ScrollLink to="projects_sec" smooth={true} duration={.5}>Projects</ScrollLink>
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
              <ScrollLink to="contact_sec" className='contact_btn' smooth={true} duration={.5}>Contact</ScrollLink>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Other sections */}
      <section id='about_sec' className='about_sec'>
        <Container>
          <div className='row'>
            <div className='col-lg-6 col-md-6 col-sm-12'>
              <div className='about_heading_div' >
                <p className='about_heading'>I love being a <span className='d-block'>developer !</span></p>
                <p className='about_content'>I am Aravintharaj B.E (ECE), a dedicated UI and Laravel Developer with a strong interest in web development.I have gained skills in both frontend technologies and backend frameworks. Currently, I am working in this field, which motivates me to keep learning and staying updated with the latest trends. I am known for learning quickly and have completed several projects, showing my ability to deliver high-quality work. My skills in UI design and Laravel development help me handle different parts of web development effectively.</p>
              </div>
            </div>
            <div className='col-lg-6 col-md-6 col-sm-12 order-md-1 order-first'>
              <div className='about_img_div text-center'>
                <img src={about_img} alt='about-img' className='about_img img-responsive' />
              </div>
            </div>            
          </div>
        </Container>
      </section>
      <section id='skills_sec' className='skills_sec'>
        <Container>
          <div className='row mb-3'>
            <div className='text-center'>
              <p className='common_head'>SKILLS</p>
            </div>
          </div>
          <div className='row'>
            <div className="col-lg-2 col-md-4 col-sm-6 col-6 mb-5">
              {/* <div className='skill_div'><img src={skill1} alt="img" className='skill_img' /></div> */}
              <div class="card border-0 skill_div">
              <img src={skill1} alt="img" className='skill_img' />
                <div class="card-body">
                  <h5 class="card-title text-center">HTML</h5>
                </div>
              </div>
            </div>
            <div className="col-lg-2 col-md-4 col-sm-6 col-6 mb-5">
            {/* <div className='skill_div'><img src={skill2} alt="img" className='skill_img' /></div> */}
            <div class="card border-0 skill_div">
              <img src={skill2} alt="img" className='skill_img' />
                <div class="card-body">
                  <h5 class="card-title text-center">CSS</h5>
                </div>
              </div>
            </div>
            <div className="col-lg-2 col-md-4 col-sm-6 col-6 mb-5">
            {/* <div className='skill_div'><img src={skill3} alt="img" className='skill_img' /></div> */}
            <div class="card border-0 skill_div">
              <img src={skill3} alt="img" className='skill_img' />
                <div class="card-body">
                  <h5 class="card-title text-center">PHP</h5>
                </div>
              </div>
            </div>
            <div className="col-lg-2 col-md-4 col-sm-6 col-6 mb-5">
            {/* <div className='skill_div'><img src={skill4} alt="img" className='skill_img' /></div> */}
            <div class="card border-0 skill_div">
              <img src={skill4} alt="img" className='skill_img' />
                <div class="card-body">
                  <h5 class="card-title text-center">LARAVEL</h5>
                </div>
              </div>
            </div>
            <div className="col-lg-2 col-md-4 col-sm-6 col-6 mb-5">
            {/* <div className='skill_div'><img src={skill5} alt="img" className='skill_img' /></div> */}
            <div class="card border-0 skill_div">
              <img src={skill5} alt="img" className='skill_img' />
                <div class="card-body">
                  <h5 class="card-title text-center">GIT LAB</h5>
                </div>
              </div>
            </div>
            <div className="col-lg-2 col-md-4 col-sm-6 col-6 mb-5">
            {/* <div className='skill_div'><img src={skill6} alt="img" className='skill_img' /></div> */}
            <div class="card border-0 skill_div">
              <img src={skill6} alt="img" className='skill_img' />
                <div class="card-body">
                  <h5 class="card-title text-center">GIT HUB</h5>
                </div>
              </div>
            </div>
            <div className="col-lg-2 col-md-4 col-sm-6 col-6 mb-5">
            {/* <div className='skill_div'><img src={skill7} alt="img" className='skill_img' /></div> */}
            <div class="card border-0 skill_div">
              <img src={skill7} alt="img" className='skill_img' />
                <div class="card-body">
                  <h5 class="card-title text-center">REACT JS</h5>
                </div>
              </div>
            </div>
            <div className="col-lg-2 col-md-4 col-sm-6 col-6 mb-5">
            {/* <div className='skill_div'><img src={skill8} alt="img" className='skill_img' /></div> */}
            <div class="card border-0 skill_div">
              <img src={skill8} alt="img" className='skill_img' />
                <div class="card-body">
                  <h5 class="card-title text-center">FIERBASE</h5>
                </div>
              </div>
            </div>
            <div className="col-lg-2 col-md-4 col-sm-6 col-6 mb-5">
            {/* <div className='skill_div'><img src={skill9} alt="img" className='skill_img' /></div> */}
            <div class="card border-0 skill_div">
              <img src={skill9} alt="img" className='skill_img' />
                <div class="card-body">
                  <h5 class="card-title text-center">JAVA SCRIPT</h5>
                </div>
              </div>
            </div>
            <div className="col-lg-2 col-md-4 col-sm-6 col-6 mb-5">
            {/* <div className='skill_div'><img src={skill10} alt="img" className='skill_img' /></div> */}
            <div class="card border-0 skill_div">
              <img src={skill10} alt="img" className='skill_img' />
                <div class="card-body">
                  <h5 class="card-title text-center">MYSQL</h5>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
      <section id='projects_sec' className='projects_sec'>
        {/* Content for Projects section */}
      </section>
      <section id='contact_sec' className='contact_sec'>
        {/* Content for Contact section */}
        <Container>
          <div className='row'>
            <div className='col-lg-6 col-md-6'>
              <div><p className='contact_head'>-Get in Touch</p></div>
              <div><p className='contact_head1'>Let's create progress together</p></div>
              <div><p className='contact_txt'>For all inquiries, you can contact and message me on any of the specified social medias below.</p></div>
              <div className='social_media'>
              {/* <Link to='/facebook-page'>
                <img src={fb} alt='Facebook' />
              </Link> */}
                <a href='https://www.facebook.com' target='_blank'><img src={fb} alt='fb'/></a>
                <a href='https://www.instagram.com' target='_blank'><img src={insat} alt='insta'/></a>
                <a href='https://www.linkedin.com' target='_blank'><img src={linked} alt='link'/></a>
              </div>
            </div>
            <div className='col-lg-6 col-md-6'>
              <div className='text-center'><img src={contact} alt='contact' className='contact_img' /></div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}

export default Head;
