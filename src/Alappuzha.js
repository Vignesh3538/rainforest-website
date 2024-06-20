import React from 'react';
import Attraction from './components/Attraction';

const Alappuzha = () => {
  const mainDesc = {
    title: 'Alappuzha',
    subheading: 'Venice of the East in Kerala',
    description: 'Experience the backwaters, houseboat cruises, and traditional charm of Alappuzha.',
    whenToReach: 'Alappuzha is best visited from November to February for pleasant weather and backwater experiences.',
  };

  const destinations = [
    {
      title: 'Alappuzha Beach',
      imageUrl: `${process.env.PUBLIC_URL}/images/alappuzha1.jpg`,
      subheading: 'Sandy shores and sunset views',
      description: 'Relax on the beach, enjoy beach activities, and witness mesmerizing sunsets over the Arabian Sea.',
      howToReach: 'Alappuzha Beach is easily accessible from the city center, with options for local transport.'
    },
    {
      title: 'Backwater Cruises',
      imageUrl: `${process.env.PUBLIC_URL}/images/alappuzha2.jpg`,
      subheading: 'Houseboat experiences and serene backwaters',
      description: 'Embark on a houseboat cruise, enjoy traditional Kerala meals, and witness rural life along the backwaters.',
      howToReach: 'Alappuzha offers various houseboat cruise options, accessible from Alappuzha town by road or boat.'
    },
    {
      title: 'Alappuzha Lighthouse',
      imageUrl: `${process.env.PUBLIC_URL}/images/alappuzha3.jpg`,
      subheading: 'Historic lighthouse and panoramic views',
      description: 'Climb to the top for panoramic views, learn about maritime history, and enjoy coastal vistas.',
      howToReach: 'Alappuzha Lighthouse is located near Alappuzha Beach, reachable by a short walk or local transport.'
    },
    {
      title: 'Punnamada Lake',
      imageUrl: `${process.env.PUBLIC_URL}/images/alappuzha4.jpg`,
      subheading: 'Scenic lake and boat races',
      description: 'Experience the beauty of Punnamada Lake, known for the Nehru Trophy Boat Race and tranquil surroundings.',
      howToReach: 'Punnamada Lake is situated near Alappuzha town, accessible by road with signs to the lake.'
    },
    {
      title: 'Pathiramanal Island',
      imageUrl: `${process.env.PUBLIC_URL}/images/alappuzha5.jpg`,
      subheading: 'Island paradise and bird sanctuary',
      description: 'Visit the serene island, spot migratory birds, and enjoy boat rides amidst lush greenery.',
      howToReach: 'Pathiramanal Island can be reached by boat from Alappuzha town, with boat services available.'
    },
  ];

  const desc = 'Immerse yourself in the tranquil beauty of Alappuzha, known for its backwaters, beaches, and cultural heritage.';

  const mainImage = `${process.env.PUBLIC_URL}/images/alappuzha.jpg`;

  return (
    <div>
      <Attraction desc={desc} main_image={mainImage} main_desc={mainDesc} destinations={destinations} />
    </div>
  );
};

export default Alappuzha;
