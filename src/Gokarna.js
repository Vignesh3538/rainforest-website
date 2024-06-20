import React from 'react';
import Attraction from './components/Attraction';

const Gokarna = () => {
  const mainDesc = {
    title: 'Gokarna',
    subheading: 'Spiritual Haven and Beach Paradise in Karnataka',
    description: 'Experience the serene beaches, spiritual vibes, and coastal beauty of Gokarna.',
    whenToReach: 'Gokarna is best visited from October to March for pleasant beach weather, festivals, and spiritual retreats.',
  };

  const destinations = [
    {
      title: 'Om Beach',
      imageUrl: `${process.env.PUBLIC_URL}/images/gokarna1.jpg`,
      subheading: 'Iconic beach and spirituality',
      description: 'Relax on the beach, witness the Om-shaped shoreline, and explore nearby temples at Om Beach.',
      howToReach: 'Om Beach is easily accessible from Gokarna town, with options for local transport and beachside stays.'
    },
    {
      title: 'Kudle Beach',
      imageUrl: `${process.env.PUBLIC_URL}/images/gokarna2.jpg`,
      subheading: 'Scenic beach and sunset views',
      description: 'Enjoy beach walks, watch mesmerizing sunsets, and indulge in beachside activities at Kudle Beach.',
      howToReach: 'Kudle Beach is a short walk from Gokarna town, reachable by road with parking facilities.'
    },
    {
      title: 'Half Moon Beach',
      imageUrl: `${process.env.PUBLIC_URL}/images/gokarna3.jpg`,
      subheading: 'Secluded beach and nature escape',
      description: 'Escape to the tranquil shores, relax in hammocks, and enjoy snorkeling adventures at Half Moon Beach.',
      howToReach: 'Half Moon Beach is accessible by boat or trekking from Om Beach, offering a serene beach experience.'
    },
    {
      title: 'Mahabaleshwar Temple',
      imageUrl: `${process.env.PUBLIC_URL}/images/gokarna4.jpg`,
      subheading: 'Ancient temple and cultural heritage',
      description: 'Visit the historic temple, witness Dravidian architecture, and explore the spiritual ambiance.',
      howToReach: 'Mahabaleshwar Temple is situated in Gokarna town, easily accessible by road with local transport options.'
    },
    {
      title: 'Yana Rocks',
      imageUrl: `${process.env.PUBLIC_URL}/images/gokarna5.jpg`,
      subheading: 'Rock formations and trekking trails',
      description: 'Explore unique rock formations, trek through forests, and witness scenic landscapes at Yana Rocks.',
      howToReach: 'Yana Rocks are located near Gokarna, accessible by road with a short trek through forested paths.'
    },
  ];

  const desc = 'Discover the tranquility, spiritual vibes, and pristine beaches of Gokarna, a hidden gem along the Karnataka coastline.';

  const mainImage = `${process.env.PUBLIC_URL}/images/gokarna.jpg`;

  return (
    <div>
      <Attraction desc={desc} main_image={mainImage} main_desc={mainDesc} destinations={destinations} />
    </div>
  );
};

export default Gokarna;
