import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import './Attraction.css';
import Navbar from './Navbar';

const Attraction = ({ desc, main_image, main_desc, destinations }) => {
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

    const handleWeatherForecast = () => {
        const searchQuery = `${main_desc.title} weather`;
        const googleSearchUrl = `https://www.google.com/search?q=${encodeURIComponent(searchQuery)}`;
        window.open(googleSearchUrl, '_blank');
    };
 
    const handleRoute = () => {
        const searchQuery = `route to ${main_desc.title}`;
        const googleSearchUrl = `https://www.google.com/search?q=${encodeURIComponent(searchQuery)}`;
        window.open(googleSearchUrl, '_blank');
    };
    
    return (
        <>
            <Navbar />
            <div className="my-4">
                <h1>Famous Attractions</h1>
            </div>
            <hr />
            <div className="my-4">
                <h3>{desc}</h3>
            </div>
            <Container className="my-40">
                <Row>
                    <Col md={6}>
                        <div className='my-4'>
                            <h2>{main_desc.title}</h2>
                            <h4>{main_desc.subheading}</h4>
                            <p>{main_desc.description}</p>
                            <h4>When to Reach</h4>
                            <p>{main_desc.whenToReach}</p>
                            <Button variant="primary" className='custom-but' onClick={handleWeatherForecast}>Know Weather Forecast</Button>
                            <Button variant="primary" className='custom-but' onClick={handleRoute}>Know Route from Current Location</Button>
                        </div>
                    </Col>
                    <Col md={6}>
                        <img src={main_image} alt="Main Attraction" className="img-fluid" />
                    </Col>
                </Row>
            </Container>
            <div className="custom-carousel-wrapper my-5">
                <span className="carousel-control-prev" onClick={handlePrev}>
                    &#9664;
                </span>
                <div className="custom-carousel-container">
                    <h2 className="custom-carousel-heading">Places to tour</h2>
                    <h4 className="custom-carousel-subheading">Popular spots</h4>
                    <div className="carousel-content">
                        <Row className="custom-carousel-cards">
                            {getVisibleDestinations().map((card, idx) => (
                                <Col key={idx} xs={12} sm={6} md={4} className="custom-carousel-card-container">
                                    <Card className="custom-carousel-card">
                                        <Card.Img variant="top" src={card.imageUrl} />
                                        <Card.Body className='event-body'>
                                            <Card.Title className='get-involved-card-header'>{card.title}</Card.Title>
                                            <Card.Text>{card.description}</Card.Text>
                                            <Card.Text><strong>How to reach:</strong> {card.howToReach}</Card.Text>
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
        </>
    );
}

export default Attraction;
