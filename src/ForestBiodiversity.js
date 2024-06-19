// ForestBiodiversity.js
import React from 'react';
import DetailedPage from './DetailedPage';

const ForestBiodiversity = () => {
  const imageUrl = `${process.env.PUBLIC_URL}/images/lifecycle.png`;
  const heading = "Forest and Biodiversity";
  const content = `
    The Western Ghats, a UNESCO World Heritage site, boast over 7,000 species of flowering plants, 139 mammal species, 508 bird species, and 179 amphibian species. Our conservation efforts aim to maintain this biodiversity through sustainable forest management and protection programs.
    We conduct regular biodiversity surveys to monitor species populations and habitat health. 
    Join us in preserving this rich natural heritage for future generations.
  `;
  const actions = [
    "Explore the flora and fauna of the Western Ghats.",
    "Learn about conservation strategies and their impact.",
    "Join our guided tours to biodiversity hotspots."
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

export default ForestBiodiversity;
