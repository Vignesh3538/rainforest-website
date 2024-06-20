import React, { useState, useEffect } from 'react';
import { Card, Row, Col, Button } from 'react-bootstrap';
import './CustomCarousel.css';

const CustomCarousel = ({ heading, destinations }) => {
  const [index, setIndex] = useState(0);

  const handlePrev = () => {
    setIndex((prevIndex) => (prevIndex === 0 ? destinations.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setIndex((prevIndex) => (prevIndex === destinations.length - 1 ? 0 : prevIndex + 1));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 7000);
    return () => clearInterval(interval);
  }, [destinations.length]);

  const getVisibleDestinations = () => {
    if (window.innerWidth >= 992) {
      return [
        destinations[index % destinations.length],
        destinations[(index + 1) % destinations.length],
        destinations[(index + 2) % destinations.length],
      ];
    } else if (window.innerWidth >= 576) {
      return [
        destinations[index % destinations.length],
        destinations[(index + 1) % destinations.length],
      ];
    } else {
      return [destinations[index % destinations.length]];
    }
  };

  return (
    <div className="custom-carousel-wrapper">
      <span className="carousel-control-prev" onClick={handlePrev}>
        &#9664;
      </span>
      <div className="custom-carousel-container">
        <h2 className="custom-carousel-heading">{heading}</h2>
        <h4 className="custom-carousel-subheading">Places in Westernghats and nearby</h4>
        <hr />
        <div className="carousel-content">
          <Row className="custom-carousel-cards">
            {getVisibleDestinations().map((card, idx) => (
              <Col key={idx} xs={12} sm={6} md={4} className="custom-carousel-card-container">
                <Card className="custom-carousel-card">
                  <Card.Img variant="top" src={card.imageUrl} />
                  <Card.Body className='event-body'>
                    <Card.Title className='get-involved-card-header'>{card.title}</Card.Title>
                    <Card.Text>{card.description}</Card.Text>
                    <Card.Text><strong>Climate Info:</strong> {card.weatherInfo}</Card.Text>
                    <Card.Text><strong>When to Tour:</strong> {card.whenToTour}</Card.Text>
                    <Button href={card.link} className="custom-button">
                      Explore
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </div>
        <div className="custom-carousel-dots">
          {destinations.map((_, idx) => (
            <span
              key={idx}
              className={`custom-carousel-dot ${index === idx ? 'active' : ''}`}
              onClick={() => setIndex(idx)}
            ></span>
          ))}
        </div>
      </div>
      <span className="carousel-control-next" onClick={handleNext}>
        &#9654;
      </span>
    </div>
  );
};

export default CustomCarousel;
