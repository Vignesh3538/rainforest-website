import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import './About.css';

const About = () => {
  return (
    <Container className="about-container">
      <Row className="mb-5 text-center">
        <Col>
          <h1>About Us</h1>
          <p>Discover more about our mission, our efforts, and the importance of the Rainforests of the Western Ghats.</p>
        </Col>
      </Row>
      
      <Row className="justify-content-center">
        <Col lg={4} md={6} className="mb-4">
          <Card className="info-card">
            <Card.Body>
              <Card.Title>What We Do</Card.Title>
              <Card.Text>
                Our mission is to conserve the rich biodiversity of the Western Ghats by implementing sustainable practices, conducting research, and raising awareness about the importance of these rainforests.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={4} md={6} className="mb-4">
          <Card className="info-card">
            <Card.Body>
              <Card.Title>Our Efforts</Card.Title>
              <Card.Text>
                We work on various projects including habitat restoration, anti-poaching initiatives, and community-based conservation programs to protect and preserve the rainforest.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row className="justify-content-center">
        <Col lg={4} md={6} className="mb-4">
          <Card className="info-card">
            <Card.Body>
              <Card.Title>Raising Awareness</Card.Title>
              <Card.Text>
                We organize educational workshops, campaigns, and events to educate the public about the critical role rainforests play in maintaining ecological balance and how everyone can contribute to conservation efforts.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={4} md={6} className="mb-4">
          <Card className="info-card">
            <Card.Body>
              <Card.Title>Facts About the Rainforest</Card.Title>
              <ul>
                <li>Home to over 7,000 species of flowering plants.</li>
                <li>Supports more than 500 species of birds.</li>
                <li>Contains numerous endemic species found nowhere else on Earth.</li>
                <li>Acts as a critical carbon sink, helping to mitigate climate change.</li>
              </ul>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default About;
