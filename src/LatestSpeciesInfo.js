// LatestSpeciesInfo.js
import React from 'react';
import DetailedPage from './DetailedPage';

const LatestSpeciesInfo = () => {
  const imageUrl = `${process.env.PUBLIC_URL}/images/latest_species.jpg`;
  const heading = "Latest Species Information";
  const content = `
    One of the newly discovered frog species in the Western Ghats is the "Star-eyed Frog" (Astrobatrachus kurichiyana). 
    This species was recently identified in the forests of Kerala, India.
     The Star-eyed Frog is characterized by its striking appearance, including star-like markings on its skin and large, expressive eyes. Its discovery highlights the ongoing exploration and biodiversity richness of the Western Ghats region. 
     This finding emphasizes the importance of conservation efforts to safeguard such unique and often threatened species within these ecologically significant areas.
    Our researchers work tirelessly to document and study the biodiversity of this unique region, contributing valuable insights to global conservation efforts.
  `;
  const actions = [
    "Stay informed about biodiversity conservation efforts.",
    "Join volunteer programs to support species protection.",
    "Participate in educational workshops and seminars."
  ];

  return (
    <DetailedPage
      imageUrl={imageUrl}
      heading={heading}
      content={content}
      actions={actions}
    />
  );
};

export default LatestSpeciesInfo;
