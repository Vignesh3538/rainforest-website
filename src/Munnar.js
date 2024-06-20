import React from 'react';
import Attraction from './components/Attraction';

const Munnar = () => {
  const mainDesc = {
    title: 'Munnar',
    subheading: 'Hill Station Paradise in Kerala',
    description: 'Explore the lush tea plantations, misty hills, and scenic beauty of Munnar.',
    whenToReach: 'Munnar is best visited from September to March for pleasant weather and blooming flowers.',
  };

  const destinations = [
    {
      title: 'Tea Gardens',
      imageUrl: `${process.env.PUBLIC_URL}/images/munnar1.jpg`,
      subheading: 'Vast tea estates and scenic vistas',
      description: 'Take a tour of tea factories, witness tea processing, and enjoy panoramic tea garden views.',
      howToReach: 'Munnar is known for its numerous tea plantations, accessible by road from the town center.'
    },
    {
      title: 'Eravikulam National Park',
      imageUrl: `${process.env.PUBLIC_URL}/images/munnar2.jpg`,
      subheading: 'Wildlife sanctuary and Nilgiri Tahr habitat',
      description: 'Spot endangered Nilgiri Tahrs, enjoy nature trails, and witness blooming Neelakurinji flowers.',
      howToReach: 'Eravikulam National Park is located near Munnar, accessible by road and guided tours.'
    },
    {
      title: 'Mattupetty Dam',
      imageUrl: `${process.env.PUBLIC_URL}/images/munnar3.jpg`,
      subheading: 'Scenic reservoir and boating',
      description: 'Take a boat ride on the tranquil waters, enjoy picnics, and explore the surrounding hills.',
      howToReach: 'Mattupetty Dam is a short drive from Munnar town, reachable by road with scenic views.'
    },
    {
      title: 'Top Station',
      imageUrl: `${process.env.PUBLIC_URL}/images/munnar4.jpg`,
      subheading: 'Panoramic viewpoints and misty landscapes',
      description: 'Enjoy breathtaking views of the Western Ghats, clouds, and valleys from the highest point.',
      howToReach: 'Top Station is located near Munnar, accessible by road with a scenic drive and trekking options.'
    },
    {
      title: 'Echo Point',
      imageUrl: `${process.env.PUBLIC_URL}/images/munnar5.jpg`,
      subheading: 'Natural echo phenomenon and lake views',
      description: 'Experience the echo effect, enjoy views of the serene lake, and relax in the peaceful ambiance.',
      howToReach: 'Echo Point is a short drive from Munnar town, reachable by road with signboards along the way.'
    },
  ];

  const desc = 'Discover the captivating beauty of Munnar, a hill station adorned with tea gardens, wildlife sanctuaries, and scenic spots.';

  const mainImage = `${process.env.PUBLIC_URL}/images/munnar.jpg`;

  return (
    <div>
      <Attraction desc={desc} main_image={mainImage} main_desc={mainDesc} destinations={destinations} />
    </div>
  );
};

export default Munnar;
