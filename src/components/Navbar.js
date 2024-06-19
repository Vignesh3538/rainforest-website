import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Navbar as BootstrapNavbar, Nav, Container, Row, Col, Popover, OverlayTrigger, Button } from 'react-bootstrap';
import { AiFillHome, AiFillInfoCircle, AiFillPicture, AiFillHeart } from 'react-icons/ai';
import { TbPlant } from 'react-icons/tb';
import { FaGlobe } from 'react-icons/fa'; 

import './Navbar.css';

const NavbarComponent = () => {
  const [showPopover, setShowPopover] = useState(null);
  const [isNavbarCollapsed, setIsNavbarCollapsed] = useState(true);

  const pages = [
    {
      title: 'Home',
      link: '/',
      icon: <AiFillHome />,
      description: 'Explore the beauty and biodiversity of the Western Ghats region through our home page.'
    },
    {
      title: 'Threats',
      link: '/threats',
      icon: <AiFillInfoCircle />,
      description: 'Learn about the environmental threats facing the Western Ghats and the conservation efforts to mitigate them.'
    },
    {
      title: 'Conservation Efforts',
      link: '/efforts',
      icon: <TbPlant />,
      description: 'Discover ongoing conservation initiatives in the Western Ghats aimed at preserving its rich biodiversity.'
    },
    {
      title: 'Gallery',
      link: '/gallery',
      icon: <AiFillPicture />,
      description: 'View captivating images showcasing the natural wonders and scenic landscapes of the Western Ghats.'
    },
    {
      title: 'Get Involved',
      link: '/getInvolved',
      icon: <AiFillHeart />,
      description: 'Find out how you can actively participate in conservation efforts and contribute to the preservation of the Western Ghats.'
    },
    {
      title: 'Tourist Attractions',
      link: '/attractions',
      icon: <FaGlobe />,
      description: 'Explore the breathtaking biodiversity of the Western Ghats known for its lush rainforests, diverse wildlife, cascading waterfalls. Discover ancient temples nestled amidst verdant valleys.'
    },
  ];

  const handlePopoverEnter = (page) => setShowPopover(page);
  const handlePopoverLeave = () => setShowPopover(null);

  const renderPopover = (page) => (
    <Popover
      id={`${page.title}-popover`}
      onMouseEnter={() => handlePopoverEnter(page.title)}
      onMouseLeave={handlePopoverLeave}
      className="custom-popover"
    >
      <Popover.Header as="h3">{page.title}</Popover.Header>
      <Popover.Body>
        {page.description} <Link to={page.link} onClick={() => setShowPopover(null)}>Go</Link>.
      </Popover.Body>
    </Popover>
  );

  const toggleNavbar = () => setIsNavbarCollapsed(!isNavbarCollapsed);

  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.querySelector('.custom-navbar');
      if (navbar && window.scrollY > navbar.offsetTop) {
        navbar.classList.add('sticky');
      } else {
        navbar.classList.remove('sticky');
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <BootstrapNavbar expand="lg" className={`custom-navbar ${isNavbarCollapsed ? '' : 'show'}`}>
      <Container className='cont'>
        <Row className="w-100">
          <Col xs={6} md={3} className="nav-left">
            <BootstrapNavbar.Brand className="navbar-brand">
              RAINFORESTS OF WESTERN GHATS
            </BootstrapNavbar.Brand>
          </Col>
          </Row>
          <Button
              className="navbar-toggler"
              type="button"
              onClick={toggleNavbar}
            >
              {isNavbarCollapsed ? (
                <span className="navbar-toggler-icon"></span>
              ) : (
                <span className="custom-x-mark">&times;</span>
              )}
            </Button>
         
       
        <Row className="w-100">
          <Col>
            <BootstrapNavbar.Collapse id="basic-navbar-nav" className={isNavbarCollapsed ? '' : 'show'}>
              <Nav className="ml-auto">
                {pages.map((page) => (
                  <OverlayTrigger
                    key={page.title}
                    placement="bottom"
                    overlay={renderPopover(page)}
                    show={showPopover === page.title}
                  >
                    <Nav.Link
                      as={Link}
                      to={page.link}
                      className="nav-item"
                      onMouseEnter={() => handlePopoverEnter(page.title)}
                      onMouseLeave={handlePopoverLeave}
                      onClick={() => setShowPopover(null)} // Close popover on link click
                    >
                      {page.icon} {page.title}
                    </Nav.Link>
                  </OverlayTrigger>
                ))}
              </Nav>
            </BootstrapNavbar.Collapse>
          </Col>
        </Row>
      </Container>
    </BootstrapNavbar>
  );
};

export default NavbarComponent;
