// TrendingBiodiversityChanges.js
import React from 'react';
import DetailedPage from './DetailedPage';

const TrendingBiodiversityChanges = () => {
  const imageUrl = `${process.env.PUBLIC_URL}/images/trending_biodiversity.jpg`;
  const heading = "Trending Biodiversity Changes";
  const content = `
    Recent trends in biodiversity highlight both positive and negative shifts in ecosystems globally.
     On a positive note, there has been an increase in conservation efforts, leading to the recovery of certain endangered species. However, challenges persist, with reports indicating a decline in pollinator populations and the spread of invasive species. 
     These trends emphasize the ongoing need for sustainable practices and biodiversity conservation measures.
    Our research teams monitor and analyze biodiversity data to understand and address critical challenges facing the region.
  `;
  const actions = [
    "Take action against deforestation and habitat destruction.",
    "Support initiatives promoting sustainable practices.",
    "Advocate for policies that protect biodiversity hotspots."
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

export default TrendingBiodiversityChanges;
