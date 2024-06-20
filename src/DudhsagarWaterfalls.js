import React from 'react';
import Attraction from './components/Attraction';

const DudhsagarWaterfalls = () => {
  const mainDesc = {
    title: 'Dudhsagar Waterfalls',
    subheading: 'Majestic Cascades in the Western Ghats',
    description: 'Witness the breathtaking beauty of Dudhsagar Waterfalls, one of India\'s tallest waterfalls.',
    whenToReach: 'Dudhsagar is best visited from October to March when the water flow is abundant.',
  };

  const destinations = [
    {
      title: 'Waterfall Trek',
      imageUrl: `${process.env.PUBLIC_URL}/images/dhudhsagarwaterfalls1.jpg`,
      subheading: 'Scenic trek amidst lush forests',
      description: 'Embark on an adventurous trek to Dudhsagar through the dense Western Ghats.',
      howToReach: 'Dudhsagar Waterfalls can be reached via a trek of about 8 km from Castle Rock railway station.'
    },
    {
      title: 'Waterfall Viewpoint',
      imageUrl: `${process.env.PUBLIC_URL}/images/dhudhsagarwaterfalls2.jpg`,
      subheading: 'Panoramic vistas of the cascades',
      description: 'Enjoy stunning views of Dudhsagar Waterfalls from the designated viewpoint.',
      howToReach: 'The viewpoint is accessible by a short walk from the Dudhsagar railway station.'
    },
    {
      title: 'Swimming and Relaxation',
      imageUrl: `${process.env.PUBLIC_URL}/images/dhudhsagarwaterfalls3.jpg`,
      subheading: 'Refreshing dip in the natural pool',
      description: 'Take a dip in the cool waters and unwind amidst the serene natural surroundings.',
      howToReach: 'The swimming area is located near the base of the falls, accessible via a trek from Dudhsagar railway station.'
    },
  ];

  const desc = 'Discover the awe-inspiring Dudhsagar Waterfalls, a natural wonder nestled in the lush Western Ghats.';

  const mainImage = `${process.env.PUBLIC_URL}/images/dhudhsagarwaterfalls.jpg`;

  return (
    <div>
      <Attraction desc={desc} main_image={mainImage} main_desc={mainDesc} destinations={destinations} />
    </div>
  );
};

export default DudhsagarWaterfalls;
