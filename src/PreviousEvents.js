// PreviousEvents.js
import React from 'react';
import DetailedPage from './DetailedPage';

const PreviousEvents = () => {
  const imageUrl = `${process.env.PUBLIC_URL}/images/previous_events.png`;
  const heading = "Previous Events";
  const content = `
    In response to escalating environmental threats, previous events have played a crucial role in raising awareness and fostering international cooperation. 
    Initiatives stemming from these events include the development of conservation agreements, increased funding for environmental research, and the implementation of policies aimed at reducing carbon emissions. 
    While progress has been made, ongoing efforts are essential to address emerging challenges and mitigate the dangers posed by climate change, habitat destruction, and pollution.
    We believe in engaging with local communities to create lasting impacts on conservation and sustainability.
  `;
  const actions = [
    "Join upcoming events and volunteer activities.",
    "Support conservation organizations and initiatives.",
    "Spread awareness about biodiversity and environmental protection."
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

export default PreviousEvents;
