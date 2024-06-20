import React, { useState } from 'react';
import { Container, Row, Col, Button, Card, Image } from 'react-bootstrap';
import Navbar from './components/Navbar';
import './Threats.css'

const threatDetails = {
  Mining: {
    problem: "Mining activities, especially for minerals and stones, cause habitat destruction and soil erosion.",
    example: "The iron ore mining activities in Kudremukh, Karnataka, have led to significant deforestation and habitat loss.",
    actions: "Implement strict regulations, promote sustainable mining practices, and restore mined areas with afforestation."
  },
  Extraction: {
    problem: "Over-extraction of forest produce like timber, medicinal plants, and non-timber products leads to resource depletion.",
    example: "Over-harvesting of the wild medicinal plant 'Nothapodytes nimmoniana' in the Western Ghats has endangered its population.",
    actions: "Sustainable harvesting practices, community management programs, and conservation efforts for endangered species."
  },
  Livestock: {
    problem: "Uncontrolled grazing by livestock leads to soil compaction, erosion, and loss of vegetation.",
    example: "Overgrazing by cattle in the Nilgiri Biosphere Reserve has resulted in the degradation of grasslands.",
    actions: "Implement rotational grazing systems, promote stall-feeding, and restore degraded grasslands."
  },
  Conflict: {
    problem: "Encroachment into wildlife habitats leads to conflicts between humans and animals, resulting in crop damage, livestock loss, and sometimes human casualties.",
    example: "Elephants from the Western Ghats often raid crops in villages bordering forest areas in Tamil Nadu, leading to conflicts.",
    actions: "Create buffer zones, build wildlife corridors, and implement compensation schemes for affected farmers."
  },
  Hunting: {
    problem: "Illegal hunting and poaching of wildlife threaten biodiversity and disrupt ecological balance.",
    example: "Poaching of tigers and other wildlife in the Periyar Tiger Reserve in Kerala has been a significant issue.",
    actions: "Strengthen anti-poaching laws, increase patrolling and surveillance, and involve local communities in conservation efforts."
  },
  Plantation: {
    problem: "Large-scale conversion of forests into plantations (e.g., tea, coffee, rubber) leads to habitat loss and monoculture.",
    example: "The expansion of tea plantations in Munnar, Kerala, has led to the fragmentation of forests and loss of biodiversity.",
    actions: "Promote agroforestry, limit the expansion of plantations, and restore native vegetation."
  },
  Encroachment: {
    problem: "Expansion of human settlements into forest areas leads to habitat destruction and increased pressure on resources.",
    example: "Encroachment in the Western Ghats around Mumbai has resulted in significant deforestation and habitat fragmentation.",
    actions: "Enforce land-use regulations, relocate encroaching populations, and restore encroached areas."
  },
  Hydropower: {
    problem: "Construction of dams and hydropower projects disrupts river ecosystems and displaces local communities.",
    example: "The Silent Valley Hydroelectric Project in Kerala faced opposition due to its potential impact on the pristine rainforest ecosystem.",
    actions: "Conduct comprehensive environmental impact assessments, explore alternative energy sources, and implement mitigation measures."
  },
  Deforestation: {
    problem: "Clearing of forests for agriculture, urbanization, and infrastructure development leads to habitat loss and climate change.",
    example: "The Western Ghats have experienced extensive deforestation due to the expansion of agricultural lands in states like Karnataka and Kerala.",
    actions: "Implement reforestation programs, promote sustainable land-use practices, and enforce stricter deforestation laws."
  }
};

const Threats = () => {
  const [selectedThreat, setSelectedThreat] = useState(null);

  const handleButtonClick = (threat) => {
    setSelectedThreat(selectedThreat === threat ? null : threat);
  };

  const renderDetails = (threat) => (
    <Row className="mt-3">
      <Col>
        <Card className="custom-card">
          <Card.Header className="get-involved-card-header">Problem</Card.Header>
          <Card.Body className="custom-card-body">{threatDetails[threat].problem}</Card.Body>
        </Card>
      </Col>
      <Col>
        <Card className="custom-card">
          <Card.Header className="get-involved-card-header">Instance at WG</Card.Header>
          <Card.Body className="custom-card-body">{threatDetails[threat].example}</Card.Body>
        </Card>
      </Col>
      <Col>
        <Card className="custom-card">
          <Card.Header className="get-involved-card-header">Actions Needed</Card.Header>
          <Card.Body className="custom-card-body">{threatDetails[threat].actions}</Card.Body>
        </Card>
      </Col>
    </Row>
  );
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
          <div className="my-4">
        <h1 className='h1t'>Threats to the Western Ghats</h1>
        </div>
        <Row className="main-section">
              <Col md={6} className="main-image-container">
                <Image 
                  src={`${process.env.PUBLIC_URL}/images/threats.jpg`} 
                  className="main-image" 
                  fluid 
                />
              </Col>
              <Col md={6} className="description-container">
                <h2>Kerala is fast losing its forest cover: What are we doing about it?</h2>
                <h4>Declining Forest Cover</h4>
                <p>
                K J Tomy, state president, Kerala Paristithi Malineekarana Nirmarjana Samithi, said that the government only builds buildings to project itself as pro-developmental.
                <br /><br />“The state government now uses ‘development’ as a mask to destroy forests across the state. Although the state faces severe land crunch, 3.43 percent of the total population of the country resides in Kerala, which takes up only 1.18 per cent of the total area of India,it is not an excuse to destroy forests,” he added.
                </p>
                <h4>No infrastructure, resources, leave or security </h4><p>
A beat officer from the southern part of the state says that an added burden is the lack of infrastructure and modern equipment to work inside forests. Officials say that many are not even provided with wireless phones. He also says that the department is severely understaffed and overworked.
</p></Col>
            </Row>
            <div className='conta'>
      <Row className="mb-4">
        <Col><Button onClick={() => handleButtonClick('Mining')} className='custom-button' block>Mining</Button></Col>
        <Col><Button onClick={() => handleButtonClick('Extraction')} className='custom-button' block>Extraction of Forest Produce</Button></Col>
        <Col><Button onClick={() => handleButtonClick('Livestock')} className='custom-button' block>Livestock Grazing</Button></Col>
      </Row>
      {selectedThreat === 'Mining' && renderDetails('Mining')}
      {selectedThreat === 'Extraction' && renderDetails('Extraction')}
      {selectedThreat === 'Livestock' && renderDetails('Livestock')}

      <Row className="mb-4">
        <Col><Button onClick={() => handleButtonClick('Conflict')} className='custom-button' block>Human-Animal Conflict</Button></Col>
        <Col><Button onClick={() => handleButtonClick('Hunting')} className='custom-button' block>Hunting</Button></Col>
        <Col><Button onClick={() => handleButtonClick('Plantation')} className='custom-button' block>Plantation</Button></Col>
      </Row>
      {selectedThreat === 'Conflict' && renderDetails('Conflict')}
      {selectedThreat === 'Hunting' && renderDetails('Hunting')}
      {selectedThreat === 'Plantation' && renderDetails('Plantation')}

      <Row className="mb-4">
        <Col><Button onClick={() => handleButtonClick('Encroachment')} className='custom-button' block>Encroachment by Human Settlements</Button></Col>
        <Col><Button onClick={() => handleButtonClick('Hydropower')} className='custom-button' block>Hydropower Projects</Button></Col>
        <Col><Button onClick={() => handleButtonClick('Deforestation')} className='custom-button' block>Deforestation</Button></Col>
      </Row>
      {selectedThreat === 'Encroachment' && renderDetails('Encroachment')}
      {selectedThreat === 'Hydropower' && renderDetails('Hydropower')}
      {selectedThreat === 'Deforestation' && renderDetails('Deforestation')}
      </div>
    </Container>
    </div>
    </div>
  );
};

export default Threats;
