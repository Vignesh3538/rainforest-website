import React from 'react';
import Attraction from './components/Attraction';

const Chikmagalur = () => {
  const mainDesc = {
    title: 'Chikmagalur',
    subheading: 'Coffee Land of Karnataka',
    description: 'Explore the sprawling coffee estates, misty hills, and trekking trails of Chikmagalur.',
    whenToReach: 'Chikmagalur is best visited from September to March for cool weather, coffee harvesting, and nature hikes.',
  };

  const destinations = [
    {
      title: 'Mullayanagiri Peak',
      imageUrl: `${process.env.PUBLIC_URL}/images/chikmagalur1.jpg`,
      subheading: 'Highest peak in Karnataka and trekking trails',
      description: 'Trek to the summit, witness panoramic views, and explore scenic trails around Mullayanagiri Peak.',
      howToReach: 'Mullayanagiri Peak is accessible by road from Chikmagalur town, with trekking routes and viewpoints.'
    },
    {
      title: 'Baba Budangiri Hills',
      imageUrl: `${process.env.PUBLIC_URL}/images/chikmagalur2.jpg`,
      subheading: 'Historic hill range and Dattatreya Peetha',
      description: 'Visit the ancient shrine, explore the caves, and enjoy the serene ambiance amidst Baba Budangiri.',
      howToReach: 'Baba Budangiri Hills are near Chikmagalur, reachable by road with scenic drives and trekking trails.'
    },
    {
      title: 'Kudremukh National Park',
      imageUrl: `${process.env.PUBLIC_URL}/images/chikmagalur3.jpg`,
      subheading: 'Biodiversity hotspot and wildlife sanctuary',
      description: 'Spot diverse flora and fauna, trek through forests, and enjoy nature at Kudremukh National Park.',
      howToReach: 'Kudremukh National Park is located near Chikmagalur, accessible by road and guided tours.'
    },
    {
      title: 'Coffee Plantation Tours',
      imageUrl: `${process.env.PUBLIC_URL}/images/chikmagalur4.jpg`,
      subheading: 'Coffee estate experiences and tastings',
      description: 'Learn about coffee cultivation, participate in plantation tours, and taste fresh coffee blends.',
      howToReach: 'Various coffee plantations offer tours near Chikmagalur town, accessible by road with guided experiences.'
    },
    {
      title: 'Hebbe Falls',
      imageUrl: `${process.env.PUBLIC_URL}/images/chikmagalur5.jpg`,
      subheading: 'Spectacular waterfall and nature trek',
      description: 'Trek through forests, reach the cascading falls, and enjoy a refreshing dip amidst nature at Hebbe Falls.',
      howToReach: 'Hebbe Falls is situated near Kemmangundi, accessible by road and a moderate trek to the falls.'
    },
  ];

  const desc = 'Embark on a journey to Chikmagalur, known for its scenic beauty, coffee plantations, and adventurous trekking trails.';

  const mainImage = `${process.env.PUBLIC_URL}/images/chikmagalur.jpg`;

  return (
    <div>
      <Attraction desc={desc} main_image={mainImage} main_desc={mainDesc} destinations={destinations} />
    </div>
  );
};

export default Chikmagalur;
