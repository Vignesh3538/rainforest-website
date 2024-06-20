import React from 'react';
import Attraction from './components/Attraction';

const Kodaikanal = () => {
  const mainDesc = {
    title: 'Kodaikanal',
    subheading: 'Hill Station Beauty in Tamil Nadu',
    description: 'Explore the serene lakes, lush forests, and scenic viewpoints of Kodaikanal.',
    whenToReach: 'Kodaikanal is ideal for visits from April to June and September to October for pleasant weather.',
  };

  const destinations = [
    {
      title: 'Kodai Lake',
      imageUrl: `${process.env.PUBLIC_URL}/images/kodaikanal1.jpg`,
      subheading: 'Picturesque man-made lake',
      description: 'Enjoy boating, horse riding, and leisure walks around the tranquil Kodai Lake.',
      howToReach: 'Kodai Lake is located in the heart of Kodaikanal town, easily accessible by local transport.'
    },
    {
      title: 'Coaker\'s Walk',
      imageUrl: `${process.env.PUBLIC_URL}/images/kodaikanal2.jpg`,
      subheading: 'Scenic cliff walk with valley views',
      description: 'Stroll along Coaker\'s Walk for panoramic views of the hills and lush valleys.',
      howToReach: 'Coaker\'s Walk is situated near the Kodaikanal bus stand, reachable by walking or local transport.'
    },
    {
      title: 'Bryant Park',
      imageUrl: `${process.env.PUBLIC_URL}/images/kodaikanal3.jpg`,
      subheading: 'Botanical garden and floral exhibits',
      description: 'Explore diverse flora, relax amidst nature, and visit the greenhouse at Bryant Park.',
      howToReach: 'Bryant Park is located near Kodai Lake, within walking distance from the town center.'
    },
    {
      title: 'Pillar Rocks',
      imageUrl: `${process.env.PUBLIC_URL}/images/kodaikanal4.jpg`,
      subheading: 'Scenic viewpoints and rock formations',
      description: 'Admire the towering pillar-shaped rocks and enjoy panoramic views of the surrounding valleys.',
      howToReach: 'Pillar Rocks are located a short drive from Kodaikanal town, accessible by road.'
    },
    {
      title: 'Silver Cascade Falls',
      imageUrl: `${process.env.PUBLIC_URL}/images/kodaikanal5.jpg`,
      subheading: 'Glistening waterfall amidst greenery',
      description: 'Visit the picturesque waterfall, relax by the cascades, and enjoy the scenic beauty.',
      howToReach: 'Silver Cascade Falls is situated en route to Kodaikanal, reachable by road from the town.'
    },
  ];

  const desc = 'Discover the natural splendor and peaceful ambiance of Kodaikanal, a charming hill station in Tamil Nadu.';

  const mainImage = `${process.env.PUBLIC_URL}/images/kodaikanal.jpg`;

  return (
    <div>
      <Attraction desc={desc} main_image={mainImage} main_desc={mainDesc} destinations={destinations} />
    </div>
  );
};

export default Kodaikanal;
