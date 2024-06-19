import React, { useState, useEffect, useRef } from 'react';
import { Container, Row, Col, Image, Popover, OverlayTrigger } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Gallery.css';
import Navbar from './components/Navbar';

const Gallery = () => {
  const [showPopover, setShowPopover] = useState(null);
  const imageRefs = useRef([]);

  const galleryImages = [
    'pine2.jpeg', 'pine3.jpeg', 'pine4.jpeg', 'pine5.jpeg', 
    'pine6.jpeg', 'pine7.jpeg', 'pine8.jpeg', 'pine9.jpeg', 'pine10.jpeg'
  ];

  const descriptions = [
    { title: "Serene Canopy", content: "The pine forests of Vagamon are a tranquil sanctuary, where towering trees weave a lush canopy, casting a serene shade over the forest floor." },
    { title: "Whispering Pines", content: "As the wind rustles through the needles, the pine trees seem to whisper secrets of the ancient Western Ghats, creating a symphony of nature." },
    { title: "Misty Enchantment", content: "Morning mists weave through the pine trunks, creating an ethereal atmosphere that feels like stepping into a dream." },
    { title: "Scent of Pine", content: "The air is infused with the invigorating scent of pine, mingling with the earthy aromas of the forest, offering a refreshing breath with every step." },
    { title: "Nature’s Cathedral", content: "The tall pines, standing like silent sentinels, form natural archways and corridors, resembling a grand, open-air cathedral." },
    { title: "Golden Sunlight", content: "Rays of golden sunlight pierce through the dense foliage, creating a mosaic of light and shadow on the forest floor." },
    { title: "Tranquil Trails", content: "Winding trails through the pine forests invite explorers to lose themselves in nature’s tranquility, away from the hustle and bustle of city life." },
    { title: "Rustic Charm", content: "Fallen pine cones and a carpet of pine needles add a rustic charm to the forest, making each step a gentle crunch underfoot." },
    { title: "Birdsong Symphony", content: "The pine forests are alive with the melodies of various birds, creating a peaceful and immersive natural soundtrack." },
    { title: "Photographer’s Paradise", content: "The interplay of light and shadow, combined with the verdant scenery, makes the pine forests a photographer’s paradise." }
  ];

  const handlePopoverEnter = (index) => setShowPopover(index);
  const handlePopoverLeave = () => setShowPopover(null);

  const renderPopover = (index) => (
    <Popover
      id={`popover-${index}`}
      onMouseEnter={() => handlePopoverEnter(index)}
      onMouseLeave={handlePopoverLeave}
      className="custom-popover"
    >
      <Popover.Header as="h3">{descriptions[index].title}</Popover.Header>
      <Popover.Body>{descriptions[index].content}</Popover.Body>
    </Popover>
  );

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
        } else {
          entry.target.style.opacity = '0';
        }
      });
    }, {
      threshold: 0.6
    });

    imageRefs.current.forEach(img => {
      if (img) observer.observe(img);
    });

    return () => {
      imageRefs.current.forEach(img => {
        if (img) observer.unobserve(img);
      });
    };
  }, []);

  const videoSrc = `${process.env.PUBLIC_URL}/videos/waterfall2.mp4`;

  return (
    <>
      <div className="detailed-page">
        <div className="video-background">
          <video autoPlay loop muted>
            <source src={videoSrc} type="video/mp4" width="100%" />
            Your browser does not support the video tag.
          </video>
        </div>
        <Navbar />
        <div className='content-overlay'>
          <Container fluid className="gallery-container">
            <Row className="main-section">
              <Col md={6} className="main-image-container">
                <Image 
                  src={`${process.env.PUBLIC_URL}/images/pine1.jpg`} 
                  className="main-image" 
                  fluid 
                />
              </Col>
              <Col md={6} className="description-container">
                <h2>Western Ghats in Vagamon</h2>
                <h4>Vagamon</h4>
                <p>
                  Vagamon is a serene hill station located in the Idukki district of Kerala, nestled in the Western Ghats. 
                  This region is characterized by its rolling hills, lush greenery, and a cool climate that provides a refreshing 
                  escape from the lowland heat. 
                  The Western Ghats in Vagamon are known for their unique ecosystems, comprising montane forests and grasslands, which are home to a rich variety of flora and fauna.
                </p>
                <h4>How to Reach Vagamon</h4>
                <ul>
                  <li><strong>By Air:</strong> The nearest airport to Vagamon is Cochin International Airport, approximately 94 km away. From the airport, you can hire a taxi or take a bus to reach Vagamon.</li>
                  <li><strong>By Train:</strong> The closest railway stations to Vagamon are Kottayam (64 km away) and Changanassery (63 km away). From these stations, you can take a taxi or a bus.</li>
                  <li><strong>By Bus:</strong> There are regular bus services from major cities in Kerala, such as Kochi, Kottayam, and Trivandrum, to Vagamon. State-run and private buses are available.</li>
                </ul>
              </Col>
            </Row>
            <Row className="scrolling-gallery">
              {galleryImages.map((img, index) => (
                <Col key={index} md={4} sm={6} xs={12} className="scrolling-image-container"
                ref={el => imageRefs.current[index] = el} 
                style={{ opacity: 0, transition: 'opacity 1.5s ease-in-out' }}>
                  <OverlayTrigger
                    key={index}
                    placement="bottom"
                    overlay={renderPopover(index)}
                    show={imageRefs.current[index]?.style.opacity === '1' && showPopover === index}
                  >
                    <div 
                      className='con image-container'
                    >
                      <div className="image-border-glow"></div>
                      <Image 
                        src={`${process.env.PUBLIC_URL}/images/${img}`} 
                        className="scrolling-image" 
                        fluid 
                        onMouseEnter={() => handlePopoverEnter(index)}
                        onMouseLeave={handlePopoverLeave}
                      />
                    </div>
                  </OverlayTrigger>
                </Col>
              ))}
            </Row>
          </Container>
        </div>
      </div>
    </>
  );
};

export default Gallery;
