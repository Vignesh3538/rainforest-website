import React from 'react';
import Attraction from './components/Attraction';

const OldGoa = () => {
  const mainDesc = {
    title: 'Old Goa',
    subheading: 'Historical Splendor and Spiritual Heritage',
    description: 'Explore the rich history, cultural heritage, and iconic landmarks of Old Goa.',
    whenToReach: 'Old Goa can be visited throughout the year, offering insights into Goa\'s colonial past.',
  };

  const destinations = [
    {
      title: 'Basilica of Bom Jesus',
      imageUrl: `${process.env.PUBLIC_URL}/images/oldgoa1.jpg`,
      subheading: 'UNESCO World Heritage Site',
      description: 'Visit the renowned basilica housing the mortal remains of St. Francis Xavier.',
      howToReach: 'The Basilica of Bom Jesus is located in Old Goa, accessible by road from Panaji, about 9 km away.'
    },
    {
      title: 'Se Cathedral',
      imageUrl: `${process.env.PUBLIC_URL}/images/oldgoa2.jpg`,
      subheading: 'Gothic architecture and historic significance',
      description: 'Marvel at the grandeur of Se Cathedral, dedicated to St. Catherine of Alexandria.',
      howToReach: 'Se Cathedral is situated in Old Goa, easily accessible by road from Panaji, around 10 km away.'
    },
    {
      title: 'Chapora Fort',
      imageUrl: `${process.env.PUBLIC_URL}/images/oldgoa3.jpg`,
      subheading: 'Ancient fort and panoramic views',
      description: 'Explore the ruins of Chapora Fort and enjoy panoramic vistas of the surroundings.',
      howToReach: 'Chapora Fort is located in North Goa, reachable by road from Panaji, approximately 22 km away.'
    },
  ];

  const desc = 'Step back in time and explore the historical charm of Old Goa, home to magnificent churches and ancient forts.';

  const mainImage = `${process.env.PUBLIC_URL}/images/oldgoa.jpg`;

  return (
    <div>
      <Attraction desc={desc} main_image={mainImage} main_desc={mainDesc} destinations={destinations} />
    </div>
  );
};

export default OldGoa;
