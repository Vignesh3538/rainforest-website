import React from 'react';
import Attraction from './components/Attraction';

const BagaBeach = () => {
  const mainDesc = {
    title: 'Baga Beach',
    subheading: 'Vibrant Beach Paradise in North Goa',
    description: 'Experience the lively atmosphere, water sports, and nightlife at Baga Beach.',
    whenToReach: 'Baga Beach is ideal for visits from November to February for pleasant weather and beach activities.',
  };

  const destinations = [
    {
      title: 'Beach Activities',
      imageUrl: `${process.env.PUBLIC_URL}/images/baga-beach1.jpg`,
      subheading: 'Water sports and beach shacks',
      description: 'Indulge in water sports like parasailing, jet skiing, and relax at beachside shacks.',
      howToReach: 'Baga Beach is located in North Goa, accessible by road from Panaji, approximately 17 km away.'
    },
    {
      title: 'Beach Walk and Sunset Views',
      imageUrl: `${process.env.PUBLIC_URL}/images/baga-beach2.jpg`,
      subheading: 'Scenic beach walks and breathtaking sunsets',
      description: 'Take a leisurely walk along the shore and enjoy the stunning sunset views over the Arabian Sea.',
      howToReach: 'The beach walk areas and sunset spots are easily accessible from any part of Baga Beach.'
    },
    {
      title: 'Shopping and Dining',
      imageUrl: `${process.env.PUBLIC_URL}/images/baga-beach3.jpg`,
      subheading: 'Flea markets and seafood delights',
      description: 'Shop for souvenirs at the flea markets, and enjoy beachfront dining with great view of Arabian sea.',
      howToReach: 'The shopping and dining areas are located near Baga Beach, easily accessible from the beachfront.'
    },
  ];

  const desc = 'Immerse yourself in the energetic vibes and beach fun at Baga, one of Goa\'s most popular beach destinations.';

  const mainImage = `${process.env.PUBLIC_URL}/images/baga-beach.jpg`;

  return (
    <div>
      <Attraction desc={desc} main_image={mainImage} main_desc={mainDesc} destinations={destinations} />
    </div>
  );
};

export default BagaBeach;
