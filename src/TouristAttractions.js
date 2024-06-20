import React, { useState } from 'react';
import { Container, Button } from 'react-bootstrap';
import Navbar from './components/Navbar';
import CustomCarousel from './components/CustomCarousel';
import './TouristAttractions.css';

const TouristAttractions = () => {
  const [region, setRegion] = useState('Tamil Nadu');

  const regions = {
    'Tamil Nadu': [
      {
        title: 'Ooty',
        imageUrl: `${process.env.PUBLIC_URL}/images/ooty.jpg`,
        description: 'Discover the picturesque hill station of Ooty, known for its tea gardens and scenic beauty.',
        weatherInfo: 'Pleasant climate throughout the year, but best visited from October to June.',
        whenToTour: 'Best time to visit is from October to June due to the pleasant weather and blooming flora.',
        link: '/attractions/ooty',
      },
      {
        title: 'Kodaikanal',
        imageUrl: `${process.env.PUBLIC_URL}/images/kodaikanal.jpg`,
        description: 'Explore the serene hill town of Kodaikanal, famous for its lakes, waterfalls, and greenery.',
        weatherInfo: 'Mild climate throughout the year, with occasional showers. Ideal for visits from September to May.',
        whenToTour: 'Best time to visit is from September to May when the weather is mild and conducive to outdoor activities.',
        link: '/attractions/kodaikanal',
      },
      {
        title: 'Coonoor',
        imageUrl: `${process.env.PUBLIC_URL}/images/coonor.jpg`,
        description: 'Visit the charming hill station of Coonoor, surrounded by tea plantations and scenic landscapes.',
        weatherInfo: 'Mild and pleasant climate throughout the year, suitable for visits anytime.',
        whenToTour: 'Coonoor can be visited throughout the year, but the best time is from October to March for clear skies and pleasant weather.',
        link: '/attractions/coonoor',
      },
      {
        title: 'Yercaud',
        imageUrl: `${process.env.PUBLIC_URL}/images/yercaud.jpg`,
        description: 'Experience the tranquility of Yercaud, a hill station known for its orange groves and lush greenery.',
        weatherInfo: 'Cool and pleasant climate throughout the year, with occasional mist and light showers.',
        whenToTour: 'Yercaud is best visited from October to June for cool weather and blooming flora.',
        link: '/attractions/yercaud',
      },
      // Add more destinations for Tamil Nadu if needed
    ],
    'Kerala': [
      {
        title: 'Munnar',
        imageUrl: `${process.env.PUBLIC_URL}/images/munnar.jpg`,
        description: 'Explore the picturesque tea plantations and misty hills of Munnar, a popular hill station in Kerala.',
        weatherInfo: 'Cool and pleasant climate year-round, with occasional showers. Best visited from September to March.',
        whenToTour: 'Munnar is ideal for visits from September to March for cool weather and clear skies.',
        link: '/attractions/munnar',
      },
      {
        title: 'Alappuzha',
        imageUrl: `${process.env.PUBLIC_URL}/images/alappuzha.jpg`,
        description: 'Experience the backwaters of Alappuzha with serene boat rides and lush green landscapes.',
        weatherInfo: 'Tropical climate, with warm and humid weather year-round. Best visited from October to February.',
        whenToTour: 'Alappuzha is best visited from October to February when the weather is pleasant and suitable for outdoor activities.',
        link: '/attractions/alappuzha',
      },
      {
        title: 'Kochi',
        imageUrl: `${process.env.PUBLIC_URL}/images/kochi.jpg`,
        description: 'Explore the historic city of Kochi, known for its colonial architecture and vibrant culture.',
        weatherInfo: 'Tropical climate, with moderate temperatures year-round. Best visited from October to March.',
        whenToTour: 'Kochi is best visited from October to March when the weather is cool and pleasant.',
        link: '/attractions/kochi',
      },
      {
        title: 'Wayanad',
        imageUrl: `${process.env.PUBLIC_URL}/images/wayanad.jpg`,
        description: 'Discover the lush greenery and wildlife of Wayanad, a popular hill station in Kerala.',
        weatherInfo: 'Mild climate year-round, with occasional showers. Best visited from October to May.',
        whenToTour: 'Wayanad is ideal for visits from October to May for pleasant weather and outdoor activities.',
        link: '/attractions/wayanad',
      },
      {
        title: 'Thekkady',
        imageUrl: `${process.env.PUBLIC_URL}/images/thekkady.jpg`,
        description: 'Explore the wildlife and spice plantations of Thekkady, a nature lover’s paradise.',
        weatherInfo: 'Mild climate year-round, with cool evenings. Best visited from October to March.',
        whenToTour: 'Thekkady is best visited from October to March for comfortable weather and wildlife sightings.',
        link: '/attractions/thekkady',
      },
      // Add more destinations for Kerala if needed
    ],
    'Goa': [
      {
        title: 'Dudhsagar Waterfalls',
        imageUrl: `${process.env.PUBLIC_URL}/images/dhudhsagarwaterfalls.jpg`,
        description: 'Witness the majestic Dudhsagar Waterfalls, one of the highest waterfalls in India, located in Goa.',
        weatherInfo: 'Tropical climate, with hot and humid summers. Best visited from October to March.',
        whenToTour: 'Dudhsagar Waterfalls are best seen during the monsoon season from June to September when they are at their peak.',
        link: '/attractions/dudhsagar-waterfalls',
      },
      {
        title: 'Old Goa',
        imageUrl: `${process.env.PUBLIC_URL}/images/oldgoa.jpg`,
        description: 'Explore the rich history and architecture of Old Goa, with its ancient churches and heritage sites.',
        weatherInfo: 'Tropical climate, with warm and humid weather year-round. Best visited from November to February.',
        whenToTour: 'Old Goa is best visited from November to February when the weather is pleasant for sightseeing.',
        link: '/attractions/old-goa',
      },
      {
        title: 'Baga Beach',
        imageUrl: `${process.env.PUBLIC_URL}/images/baga-beach.jpg`,
        description: 'Relax and unwind at Baga Beach, known for its golden sands, water sports, and vibrant nightlife.',
        weatherInfo: 'Tropical climate, with warm weather year-round. Best visited from October to March.',
        whenToTour: 'Baga Beach is ideal for visits from October to March for beach activities and pleasant weather.',
        link: '/attractions/baga-beach',
      },
      // Add more destinations for Goa if needed
    ],
    'Karnataka': [
      {
        title: 'Coorg',
        imageUrl: `${process.env.PUBLIC_URL}/images/coorg.jpg`,
        description: 'Discover the lush hills and coffee plantations of Coorg, known as the Scotland of India.',
        weatherInfo: 'Mild and pleasant climate year-round, with cool temperatures during winter. Best visited from October to March.',
        whenToTour: 'Coorg is best visited from October to March when the weather is cool and conducive to outdoor activities.',
        link: '/attractions/coorg',
      },
      {
        title: 'Chikmagalur',
        imageUrl: `${process.env.PUBLIC_URL}/images/chikmagalur.jpg`,
        description: 'Explore the coffee estates and scenic beauty of Chikmagalur, a popular hill station in Karnataka.',
        weatherInfo: 'Cool and pleasant climate throughout the year, with occasional showers. Best visited from September to May.',
        whenToTour: 'Chikmagalur is ideal for visits from September to May for cool weather and outdoor activities.',
        link: '/attractions/chikmagalur',
      },
      {
        title: 'Gokarna',
        imageUrl: `${process.env.PUBLIC_URL}/images/gokarna.jpg`,
        description: 'Relax at the pristine beaches of Gokarna, known for its serene ambiance and beachside shacks.',
        weatherInfo: 'Tropical climate, with warm and humid weather year-round. Best visited from October to March.',
        whenToTour: 'Gokarna is best visited from October to March for beach activities and pleasant weather.',
        link: '/attractions/gokarna',
      },
      {
        title: 'Shimoga',
        imageUrl: `${process.env.PUBLIC_URL}/images/shimoga.jpg`,
        description: 'Explore the lush forests and waterfalls of Shimoga, a scenic destination in Karnataka.',
        weatherInfo: 'Mild and pleasant climate year-round, with cool temperatures during winter. Best visited from October to March.',
        whenToTour: 'Shimoga is best visited from October to March when the weather is cool and conducive to outdoor activities.',
        link: '/attractions/shimoga',
      },
      // Add more destinations for Karnataka if needed
    ],
  };

  return (
    <>
      <Navbar />
      <Container className="my-4">
        <div className="d-flex justify-content-center">
          <Button variant="light" className="get-involved-card-header butt" onClick={() => setRegion('Tamil Nadu')}>
            Tamil Nadu
          </Button>
          <Button variant="light" className="get-involved-card-header butt" onClick={() => setRegion('Kerala')}>
            Kerala
          </Button>
          <Button variant="light" className="get-involved-card-header butt" onClick={() => setRegion('Goa')}>
            Goa
          </Button>
          <Button variant="light" className="get-involved-card-header butt" onClick={() => setRegion('Karnataka')}>
            Karnataka
          </Button>
        </div>
        <hr />
      </Container>
      <Container className="bg-light-yellow my-4">
        <CustomCarousel heading={`Popular Destinations in ${region}`} destinations={regions[region]} />
      </Container>
    </>
  );
};

export default TouristAttractions;
