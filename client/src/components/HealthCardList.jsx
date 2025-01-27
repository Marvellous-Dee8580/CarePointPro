import React from 'react';
import HealthCard from './HealthCard';

const HealthCardList = ({ cards }) => {
  return (
    <div
      className="flex flex-wrap p-4"
      style={{
        display: 'flex',
        flexWrap: 'wrap', // Allows cards to wrap when space is limited
        justifyContent: 'center', // Centers the cards
      }}
    >
      {cards.map((card, index) => (
        <HealthCard
          key={index}
          icon={card.icon}
          title={card.title}
          value={card.value}
          unit={card.unit}
          lastUpdated={card.lastUpdated}
          bgColor={card.bgColor}
        />
      ))}
    </div>
  );
};

export default HealthCardList;