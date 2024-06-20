import React from 'react';
import Attraction from './components/Attraction';

const Wayanad = () => {
  const mainDesc = {
    title: 'Wayanad',
    subheading: 'Nature\'s Abode in Kerala',
    description: 'Explore the lush forests, waterfalls, and wildlife sanctuaries of Wayanad.',
    whenToReach: 'Wayanad is ideal for visits from October to May for pleasant weather and outdoor activities.',
  };

  const destinations = [
    {
      title: 'Chembra Peak',
      imageUrl: `${process.env.PUBLIC_URL}/images/wayanad1.jpg`,
      subheading: 'Highest peak and trekking trails',
      description: 'Trek to the top, witness heart-shaped lake views, and enjoy panoramic vistas of Wayanad.',
      howToReach: 'Chembra Peak is located near Meppadi, reachable by road with a moderate trekking trail.'
    },
    {
      title: 'Edakkal Caves',
      imageUrl: `${process.env.PUBLIC_URL}/images/wayanad2.jpg`,
      subheading: 'Historic caves and rock art',
      description: 'Explore ancient petroglyphs, learn about prehistoric art, and enjoy scenic cave views.',
      howToReach: 'Edakkal Caves are situated near Ambalavayal, reachable by road and a short hike to the caves.'
    },
    {
      title: 'Soochipara Waterfalls',
      imageUrl: `${process.env.PUBLIC_URL}/images/wayanad3.jpg`,
      subheading: 'Spectacular waterfall and trekking',
      description: 'Trek through dense forests, bathe in the refreshing falls, and enjoy nature at Soochipara.',
      howToReach: 'Soochipara Waterfalls are located near Meppadi, accessible by road and a trek through the forest.'
    },
    {
      title: 'Tholpetty Wildlife Sanctuary',
      imageUrl: `${process.env.PUBLIC_URL}/images/wayanad4.jpg`,
      subheading: 'Wildlife encounters and safari',
      description: 'Spot elephants, deer, and other wildlife species, enjoy jeep safaris, and explore nature trails.',
      howToReach: 'Tholpetty Wildlife Sanctuary is near Mananthavady, reachable by road with guided safari options.'
    },
    {
      title: 'Pookode Lake',
      imageUrl: `${process.env.PUBLIC_URL}/images/wayanad5.jpg`,
      subheading: 'Scenic lake and boating',
      description: 'Enjoy boating on the tranquil lake, explore nearby trails, and relax amidst lush greenery.',
      howToReach: 'Pookode Lake is located near Vythiri, accessible by road with parking facilities and boating services.'
    },
  ];

  const desc = 'Embark on a journey to Wayanad, a paradise of natural beauty, adventure, and wildlife experiences in Kerala.';

  const mainImage = `${process.env.PUBLIC_URL}/images/wayanad.jpg`;

  return (
    <div>
      <Attraction desc={desc} main_image={mainImage} main_desc={mainDesc} destinations={destinations} />
    </div>
  );
};

export default Wayanad;
