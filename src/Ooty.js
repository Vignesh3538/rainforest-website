import React from 'react';
import Attraction from './components/Attraction';

const Ooty = () => {
  const mainDesc = {
    title: 'Ooty',
    subheading: 'Queen of Hill Stations in Tamil Nadu',
    description: 'Experience the cool climate, scenic landscapes, and tea gardens of Ooty.',
    whenToReach: 'Ooty is best visited from April to June and September to November for pleasant weather and blooming flowers.',
  };

  const destinations = [
    {
      title: 'Botanical Gardens',
      imageUrl: `${process.env.PUBLIC_URL}/images/ooty1.jpg`,
      subheading: 'Lush gardens and exotic flora',
      description: 'Explore diverse plant species, enjoy the rose garden, and take a boat ride at Ooty Lake.',
      howToReach: 'Ooty Botanical Gardens are located near Ooty Lake, easily accessible by local transport.'
    },
    {
      title: 'Doddabetta Peak',
      imageUrl: `${process.env.PUBLIC_URL}/images/ooty2.jpg`,
      subheading: 'Highest peak in Nilgiris',
      description: 'Enjoy panoramic views of the Nilgiri hills, trek to the summit, and visit the telescope house.',
      howToReach: 'Doddabetta Peak is a short drive from Ooty town, accessible by road and trekking trails.'
    },
    {
      title: 'Ooty Rose Garden',
      imageUrl: `${process.env.PUBLIC_URL}/images/ooty3.jpg`,
      subheading: 'Vibrant rose varieties and landscapes',
      description: 'Stroll through colorful rose beds, relax in the scenic surroundings, and buy rose-based products.',
      howToReach: 'Ooty Rose Garden is situated near Charring Cross, reachable by local transport or walking.'
    },
    {
      title: 'Pykara Lake and Waterfalls',
      imageUrl: `${process.env.PUBLIC_URL}/images/ooty4.jpg`,
      subheading: 'Scenic lake and cascading waterfalls',
      description: 'Enjoy boating, visit the pine forest, and witness the beauty of Pykara Waterfalls.',
      howToReach: 'Pykara is located about 20 km from Ooty, accessible by road with scenic views along the way.'
    },
    {
      title: 'Tea Plantations',
      imageUrl: `${process.env.PUBLIC_URL}/images/ooty5.jpg`,
      subheading: 'Lush tea estates and factory tours',
      description: 'Explore tea gardens, learn about tea processing, and enjoy tea tasting sessions.',
      howToReach: 'Several tea plantations are spread across Ooty and nearby areas, reachable by road.'
    },
  ];

  const desc = 'Embark on a journey to Ooty, the picturesque hill station renowned for its natural beauty and charming atmosphere.';

  const mainImage = `${process.env.PUBLIC_URL}/images/ooty.jpg`;

  return (
    <div>
      <Attraction desc={desc} main_image={mainImage} main_desc={mainDesc} destinations={destinations} />
    </div>
  );
};

export default Ooty;
