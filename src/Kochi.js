import React from 'react';
import Attraction from './components/Attraction';

const Kochi = () => {
  const mainDesc = {
    title: 'Kochi',
    subheading: 'Cultural Hub and Port City in Kerala',
    description: 'Discover the rich history, cultural diversity, and scenic beauty of Kochi.',
    whenToReach: 'Kochi is ideal for visits throughout the year, offering a blend of historical sites, beaches, and backwaters.',
  };

  const destinations = [
    {
      title: 'Fort Kochi',
      imageUrl: `${process.env.PUBLIC_URL}/images/kochi1.jpg`,
      subheading: 'Historical fort and colonial landmarks',
      description: 'Explore Portuguese, Dutch, and British influences, visit St. Francis Church, and see Chinese fishing nets.',
      howToReach: 'Fort Kochi is accessible by road from Kochi city center, with local transport and ferry options.'
    },
    {
      title: 'Mattancherry Palace',
      imageUrl: `${process.env.PUBLIC_URL}/images/kochi2.jpg`,
      subheading: 'Dutch palace and art collections',
      description: 'Admire traditional Kerala architecture, murals, and royal artifacts at Mattancherry Palace.',
      howToReach: 'Mattancherry Palace is located in Kochi, reachable by road and guided tours from the city center.'
    },
    {
      title: 'Marine Drive',
      imageUrl: `${process.env.PUBLIC_URL}/images/kochi3.jpg`,
      subheading: 'Scenic promenade and sunset views',
      description: 'Take a leisurely stroll, enjoy boat rides, and witness stunning sunsets along Marine Drive.',
      howToReach: 'Marine Drive is a popular waterfront area in Kochi, accessible by road with parking facilities.'
    },
    {
      title: 'Jew Town',
      imageUrl: `${process.env.PUBLIC_URL}/images/kochi4.jpg`,
      subheading: 'Historic Jewish quarter and antique shops',
      description: 'Explore the ancient synagogue, shop for antiques, and experience the cultural heritage of Jew Town.',
      howToReach: 'Jew Town is located in Mattancherry, Kochi, accessible by road with signboards indicating the way.'
    },
    {
      title: 'Cherai Beach',
      imageUrl: `${process.env.PUBLIC_URL}/images/kochi5.jpg`,
      subheading: 'Golden sands and serene beachfront',
      description: 'Relax on the sandy shores, indulge in water sports, and enjoy beachside eateries at Cherai Beach.',
      howToReach: 'Cherai Beach is situated near Kochi, accessible by road and public transport with scenic coastal views.'
    },
  ];

  const desc = 'Immerse yourself in the vibrant culture, historical landmarks, and scenic beauty of Kochi, a captivating city in Kerala.';

  const mainImage = `${process.env.PUBLIC_URL}/images/kochi.jpg`;

  return (
    <div>
      <Attraction desc={desc} main_image={mainImage} main_desc={mainDesc} destinations={destinations} />
    </div>
  );
};

export default Kochi;
