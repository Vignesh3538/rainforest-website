import React from 'react';
import Attraction from './components/Attraction';

const Coonoor = () => {
  const mainDesc = {
    title: 'Coonoor',
    subheading: 'Scenic Delights in the Nilgiris',
    description: 'Experience the tranquil beauty, tea plantations, and serene ambiance of Coonoor.',
    whenToReach: 'Coonoor is best visited from September to May for pleasant weather and clear views.',
  };

  const destinations = [
    {
      title: 'Sim\'s Park',
      imageUrl: `${process.env.PUBLIC_URL}/images/coonor1.jpg`,
      subheading: 'Lush greenery and exotic flora',
      description: 'Explore the vast collection of plants, flowers, and trees in these beautiful gardens.',
      howToReach: 'Sim\'s Park is about 2 km from the Coonoor railway station and can be reached by local transport or a short walk.',
    },
    {
      title: 'Dolphin\'s Nose Viewpoint',
      imageUrl: `${process.env.PUBLIC_URL}/images/coonor2.jpg`,
      subheading: 'Panoramic vistas of the Nilgiri hills',
      description: 'Enjoy breathtaking views of the valleys and tea estates from this iconic viewpoint.',
      howToReach: 'Dolphin\'s Nose Viewpoint is approximately 12 km from Coonoor town and is accessible by car or taxi.',
    },
    {
      title: 'Lamb\'s Rock',
      imageUrl: `${process.env.PUBLIC_URL}/images/coonor3.jpg`,
      subheading: 'Spectacular views and trekking trails',
      description: 'Take in the scenic beauty and embark on nature walks along the picturesque trails.',
      howToReach: 'Lamb\'s Rock is around 9 km from Coonoor and can be reached via a short drive by taxi or car.',
    },
    {
      title: 'Law\'s Falls',
      imageUrl: `${process.env.PUBLIC_URL}/images/coonor4.jpg`,
      subheading: 'Cascading waterfall amidst lush greenery',
      description: 'Witness the beauty of the waterfall and enjoy a peaceful retreat in the natural surroundings.',
      howToReach: 'Law\'s Falls is situated 7 km from Coonoor on the way to Mettupalayam and is accessible by car or taxi.',
    },
    {
      title: 'Highfield Tea Factory',
      imageUrl: `${process.env.PUBLIC_URL}/images/coonor5.jpg`,
      subheading: 'Insight into tea processing and tasting',
      description: 'Tour the tea factory to learn about tea production and sample freshly brewed teas.',
      howToReach: 'Highfield Tea Factory is located about 2 km from Coonoor town and can be easily reached by local transport or taxi.',
    },
  ];

  const desc = 'Discover the scenic wonders and natural attractions of Coonoor, a paradise in the Nilgiris.';

  const mainImage = `${process.env.PUBLIC_URL}/images/coonor.jpg`;

  return (
    <div>
      <Attraction desc={desc} main_image={mainImage} main_desc={mainDesc} destinations={destinations} />
    </div>
  );
};

export default Coonoor;
