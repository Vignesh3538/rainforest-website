import React from 'react';
import Attraction from './components/Attraction';

const Shimoga = () => {
  const mainDesc = {
    title: 'Shimoga',
    subheading: 'Land of Waterfalls and Greenery in Karnataka',
    description: 'Explore the majestic waterfalls, dense forests, and natural beauty of Shimoga.',
    whenToReach: 'Shimoga is ideal for visits from October to March for pleasant weather, waterfall sightings, and outdoor adventures.',
  };

  const destinations = [
    {
      title: 'Jog Falls',
      imageUrl: `${process.env.PUBLIC_URL}/images/shimoga1.jpg`,
      subheading: 'Spectacular waterfall and viewpoints',
      description: 'Witness the majestic cascades, trek to viewpoints, and enjoy panoramic vistas at Jog Falls.',
      howToReach: 'Jog Falls is accessible by road from Shimoga city, with trekking trails and viewpoints along the way.'
    },
    {
      title: 'Kodachadri Peak',
      imageUrl: `${process.env.PUBLIC_URL}/images/shimoga2.jpg`,
      subheading: 'Scenic trekking and biodiversity',
      description: 'Trek through lush forests, reach the summit, and enjoy panoramic views from Kodachadri Peak.',
      howToReach: 'Kodachadri Peak is near Shimoga, reachable by road and a moderate trek through Western Ghats.'
    },
    {
      title: 'Sharavathi Wildlife Sanctuary',
      imageUrl: `${process.env.PUBLIC_URL}/images/shimoga3.jpg`,
      subheading: 'Rich biodiversity and wildlife sightings',
      description: 'Spot diverse flora and fauna, enjoy nature trails, and experience wildlife encounters in the sanctuary.',
      howToReach: 'Sharavathi Wildlife Sanctuary is accessible by road from Shimoga, with guided safari options.'
    },
    {
      title: 'Gudavi Bird Sanctuary',
      imageUrl: `${process.env.PUBLIC_URL}/images/shimoga4.jpg`,
      subheading: 'Avian diversity and birdwatching',
      description: 'Explore the sanctuary, spot migratory birds, and indulge in birdwatching activities at Gudavi.',
      howToReach: 'Gudavi Bird Sanctuary is located near Soraba, reachable by road with guided tours.'
    },
    {
      title: 'Dabbe Falls',
      imageUrl: `${process.env.PUBLIC_URL}/images/shimoga5.jpg`,
      subheading: 'Hidden waterfall and nature trek',
      description: 'Trek through forests, reach the secluded falls, and enjoy a peaceful retreat at Dabbe Falls.',
      howToReach: 'Dabbe Falls is situated near Hosagadde, accessible by road and a short hike through scenic trails.'
    },
  ];

  const desc = 'Discover the natural wonders, waterfalls, and wildlife sanctuaries of Shimoga, a picturesque destination in Karnataka.';

  const mainImage = `${process.env.PUBLIC_URL}/images/shimoga.jpg`;

  return (
    <div>
      <Attraction desc={desc} main_image={mainImage} main_desc={mainDesc} destinations={destinations} />
    </div>
  );
};

export default Shimoga;
