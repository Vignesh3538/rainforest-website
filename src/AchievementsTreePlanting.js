// AchievementsTreePlanting.js
import React from 'react';
import DetailedPage from './DetailedPage';

const AchievementsTreePlanting = () => {
  const imageUrl = `${process.env.PUBLIC_URL}/images/plant.jpg`;
  const heading = "Achievements of Tree Planting";
  const content = `
    Our initiative to plant lakhs of trees annually in the Western Ghats has significantly increased forest cover,
    helping restore habitats for endangered species like the Lion-tailed Macaque and Malabar Pied Hornbill.
    The enhanced forest cover has led to improved air quality, reduced soil erosion, and provided sustainable
    livelihoods for local communities dependent on forest resources.
  `;
  const actions = [
    "Support ongoing tree planting programs and conservation efforts.",
    "Participate in biodiversity monitoring and restoration activities.",
    "Spread awareness about the importance of forests in maintaining ecological balance."
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

export default AchievementsTreePlanting;
