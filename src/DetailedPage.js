// DetailedPage.js
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Navbar from './components/Navbar';
import './DetailedPage.css';

const DetailedPage = ({ imageUrl, heading, content, actions }) => {
  const videoSrc = `${process.env.PUBLIC_URL}/videos/waterfall2.mp4`;

  return (
    <div className="detailed-page">
      <div className="video-background">
        <video autoPlay loop muted>
          <source src={videoSrc} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <Navbar />
      <div className="content-overlay">
        <Container>
          <Row className="justify-content-center">
            <Col xs={12} md={8} className="text-center">
              <img
                src={imageUrl}
                alt={heading}
                className="detailed-image"
              />
            </Col>
          </Row>
          <Row className="justify-content-center">
            <Col xs={12} md={6} className="interactive-section">
              <h1>{heading}</h1>
              <div className="content-text">
                {content.split('\n').map((line, index) => (
                  <p key={index}>{line.trim()}</p>
                ))}
              </div>
            </Col>
            <Col xs={12} md={6} className="interactive-section">
              <h2>Actions to Take</h2>
              <ul>
                {actions.map((action, index) => (
                  <li key={index}>{action}</li>
                ))}
              </ul>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default DetailedPage;
