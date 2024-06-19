// LatestForestFires.js
import React from 'react';
import DetailedPage from './DetailedPage';

const LatestForestFires = () => {
  const imageUrl = `${process.env.PUBLIC_URL}/images/latest_forest_fires.webp`;
  const heading = "News on Latest Forest Fires";
  const content = `
    The Western Ghats have been experiencing a surge in forest fires recently, primarily due to a combination of dry weather conditions and human activities.
     A series of wildfires broke out across several regions, leading to significant damage to the region's rich biodiversity.
    Efforts by local authorities and environmental groups have focused on containing these fires and rehabilitating affected areas, highlighting the urgent need for better forest management practices and increased awareness about fire prevention.
    Urgent measures for fire management and prevention are necessary to protect the unique biodiversity of the region.
  `;
  const actions = [
    "Support local fire management and prevention efforts.",
    "Participate in awareness campaigns on forest fire risks.",
    "Implement responsible tourism practices to prevent accidental fires."
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

export default LatestForestFires;
