import React from 'react';
import DetailedPage from './DetailedPage';

const ExoticSpeciesInfo = () => {
  const imageUrl = `${process.env.PUBLIC_URL}/images/frog.png`;
  const heading = "Exotic Species Information";
  const content = `
    Exotic species, also known as invasive species, are non-native species that can cause harm to local ecosystems, biodiversity, and economies. 
    These species often outcompete native species, disrupt ecological balance, and damage natural habitats.
    Our organization works to raise awareness about the impact of exotic species and implements strategies to control and manage their populations.
  `;
  const actions = [
    "Learn to identify and report exotic species in your area.",
    "Support policies and initiatives aimed at preventing exotic species introductions.",
    "Participate in removal and control efforts for invasive species."
  ];

  return (
    <>
      <DetailedPage
        imageUrl={imageUrl}
        heading={heading}
        content={content}
        actions={actions}
      />
    </>
  );
};

export default ExoticSpeciesInfo;
