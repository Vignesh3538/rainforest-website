import React from 'react';
import Attraction from './components/Attraction';

const Thekkady = () => {
  const mainDesc = {
    title: 'Thekkady',
    subheading: 'Wildlife Sanctuary and Spice Plantations in Kerala',
    description: 'Explore the lush forests, wildlife sanctuaries, and spice plantations of Thekkady.',
    whenToReach: 'Thekkady is ideal for visits from October to February for wildlife sightings and pleasant weather.',
  };

  const destinations = [
    {
      title: 'Periyar Wildlife Sanctuary',
      imageUrl: `${process.env.PUBLIC_URL}/images/thekkady1.jpg`,
      subheading: 'Rich biodiversity and elephant sightings',
      description: 'Take a jungle safari, spot elephants, tigers, and birds, and explore the diverse flora and fauna.',
      howToReach: 'Periyar Wildlife Sanctuary is located near Thekkady town, accessible by road with guided tours.'
    },
    {
      title: 'Spice Plantations',
      imageUrl: `${process.env.PUBLIC_URL}/images/thekkady2.jpg`,
      subheading: 'Aromatic spice gardens and tours',
      description: 'Learn about spices like cardamom, pepper, and cinnamon, and enjoy spice plantation walks.',
      howToReach: 'Thekkady is surrounded by spice plantations, reachable by road with guided tour options.'
    },
    {
      title: 'Boat Cruises',
      imageUrl: `${process.env.PUBLIC_URL}/images/thekkady3.jpg`,
      subheading: 'Scenic boat rides on Periyar Lake',
      description: 'Enjoy boat cruises, watch wildlife along the shores, and experience the tranquility of Periyar Lake.',
      howToReach: 'Boat cruises are available at Thekkady near Periyar Wildlife Sanctuary, accessible by road.'
    },
    {
      title: 'Bamboo Rafting',
      imageUrl: `${process.env.PUBLIC_URL}/images/thekkady4.jpg`,
      subheading: 'Adventurous rafting amidst nature',
      description: 'Embark on bamboo rafting expeditions, explore hidden trails, and enjoy nature at its best.',
      howToReach: 'Bamboo rafting activities start from Thekkady, organized by tour operators with transportation.'
    },
    {
      title: 'Kadathanadan Kalari Centre',
      imageUrl: `${process.env.PUBLIC_URL}/images/thekkady5.jpg`,
      subheading: 'Traditional martial arts performances',
      description: 'Witness Kalaripayattu martial arts, learn about Kerala\'s culture, and enjoy live performances.',
      howToReach: 'The Kadathanadan Kalari Centre is situated in Thekkady town, easily accessible by road.'
    },
  ];

  const desc = 'Discover the wilderness, spice aromas, and cultural heritage of Thekkady, a captivating destination in Kerala.';

  const mainImage = `${process.env.PUBLIC_URL}/images/thekkady.jpg`;

  return (
    <div>
      <Attraction desc={desc} main_image={mainImage} main_desc={mainDesc} destinations={destinations} />
    </div>
  );
};

export default Thekkady;
