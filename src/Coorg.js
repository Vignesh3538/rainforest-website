import React from 'react';
import Attraction from './components/Attraction';

const Coorg = () => {
  const mainDesc = {
    title: 'Coorg',
    subheading: 'Scotland of India in Karnataka',
    description: 'Explore the lush coffee plantations, misty hills, and cascading waterfalls of Coorg.',
    whenToReach: 'Coorg is best visited from October to March for pleasant weather, coffee harvest, and outdoor activities.',
  };

  const destinations = [
    {
      title: 'Abbey Falls',
      imageUrl: `${process.env.PUBLIC_URL}/images/coorg1.jpg`,
      subheading: 'Picturesque waterfall and nature trails',
      description: 'Admire the cascading falls, trek through scenic trails, and enjoy the serene ambiance at Abbey Falls.',
      howToReach: 'Abbey Falls is located near Madikeri, accessible by road and a short trek through coffee estates.'
    },
    {
      title: 'Raja\'s Seat',
      imageUrl: `${process.env.PUBLIC_URL}/images/coorg2.jpg`,
      subheading: 'Sunset viewpoint and garden',
      description: 'Enjoy panoramic sunset views, stroll in the garden, and relax amidst blooming flowers at Raja\'s Seat.',
      howToReach: 'Raja\'s Seat is a short drive from Madikeri town, reachable by road with parking facilities.'
    },
    {
      title: 'Talakaveri',
      imageUrl: `${process.env.PUBLIC_URL}/images/coorg3.jpg`,
      subheading: 'Origin of River Cauvery and temple',
      description: 'Visit the source of River Cauvery, seek blessings at the temple, and enjoy scenic hilltop views.',
      howToReach: 'Talakaveri is situated in Bhagamandala, accessible by road with scenic drives through forests.'
    },
    {
      title: 'Dubare Elephant Camp',
      imageUrl: `${process.env.PUBLIC_URL}/images/coorg4.jpg`,
      subheading: 'Elephant interactions and wildlife experiences',
      description: 'Interact with elephants, enjoy elephant rides, and learn about wildlife conservation at Dubare Camp.',
      howToReach: 'Dubare Elephant Camp is near Kushalnagar, reachable by road and guided tours from Coorg.'
    },
    {
      title: 'Namdroling Monastery',
      imageUrl: `${process.env.PUBLIC_URL}/images/coorg5.jpg`,
      subheading: 'Tibetan Buddhist monastery and culture',
      description: 'Explore the vibrant monastery, witness rituals, and learn about Tibetan culture at Namdroling.',
      howToReach: 'Namdroling Monastery is situated in Bylakuppe, accessible by road from Coorg with cultural experiences.'
    },
  ];

  const desc = 'Experience the serene landscapes, coffee aromas, and cultural heritage of Coorg, a paradise nestled in the Western Ghats.';

  const mainImage = `${process.env.PUBLIC_URL}/images/coorg.jpg`;

  return (
    <div>
      <Attraction desc={desc} main_image={mainImage} main_desc={mainDesc} destinations={destinations} />
    </div>
  );
};

export default Coorg;
