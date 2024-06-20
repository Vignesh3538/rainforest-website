import React from 'react';
import Attraction from './components/Attraction';

const Yercaud = () => {
  const mainDesc = {
    title: 'Yercaud',
    subheading: 'Hill Station Gem in Tamil Nadu',
    description: 'Explore the scenic beauty, coffee plantations, and serene ambiance of Yercaud.',
    whenToReach: 'Yercaud is ideal for visits from October to June for cool weather and nature exploration.',
  };

  const destinations = [
    {
      title: 'Yercaud Lake',
      imageUrl: `${process.env.PUBLIC_URL}/images/yercaud1.jpg`,
      subheading: 'Picturesque lake and boating',
      description: 'Enjoy pedal boating, relax by the lake, and explore the surrounding gardens and viewpoints.',
      howToReach: 'Yercaud Lake is located in the heart of Yercaud town, easily accessible by walking or local transport.'
    },
    {
      title: 'Shevaroy Temple',
      imageUrl: `${process.env.PUBLIC_URL}/images/yercaud2.jpg`,
      subheading: 'Ancient temple and spiritual retreat',
      description: 'Visit the temple, witness the Dravidian architecture, and enjoy panoramic views from the hilltop.',
      howToReach: 'Shevaroy Temple is situated atop Shevaroy Hills, reachable by road with scenic drives.'
    },
    {
      title: 'Lady\'s Seat',
      imageUrl: `${process.env.PUBLIC_URL}/images/yercaud3.jpg`,
      subheading: 'Scenic viewpoint and valley vistas',
      description: 'Enjoy panoramic views of the Salem Valley, take memorable photographs, and relax at Lady\'s Seat.',
      howToReach: 'Lady\'s Seat is a short drive from Yercaud town, accessible by road with parking facilities.'
    },
    {
      title: 'Kiliyur Falls',
      imageUrl: `${process.env.PUBLIC_URL}/images/yercaud4.jpg`,
      subheading: 'Spectacular waterfall amidst greenery',
      description: 'Trek to the falls, enjoy the cascades, and relax in the natural beauty of Kiliyur Falls.',
      howToReach: 'Kiliyur Falls is located a few kilometers from Yercaud, accessible by road and a short hike.'
    },
    {
      title: 'Deer Park',
      imageUrl: `${process.env.PUBLIC_URL}/images/yercaud5.jpg`,
      subheading: 'Deer sanctuary and nature park',
      description: 'Spot deer species, enjoy nature walks, and unwind amidst the serene surroundings of Deer Park.',
      howToReach: 'Deer Park is situated near Yercaud town, easily accessible by road with signposts.'
    },
  ];

  const desc = 'Discover the tranquility and natural wonders of Yercaud, a charming hill station offering scenic beauty, viewpoints, and serene lakes.';

  const mainImage = `${process.env.PUBLIC_URL}/images/yercaud.jpg`;

  return (
    <div>
      <Attraction desc={desc} main_image={mainImage} main_desc={mainDesc} destinations={destinations} />
    </div>
  );
};

export default Yercaud;
