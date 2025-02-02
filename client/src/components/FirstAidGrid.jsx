import * as React from 'react';
import { FirstAidCard } from './FirstAidCard';
import { firstAidTips } from './FirstAidData.js';

export function FirstAidGrid() {
  return (
    <div className="flex gap-5 max-md:flex-col">
      {[...Array(3)].map((_, index) => (
        <FirstAidCard key={index} {...firstAidTips[0]} />
      ))}
    </div>
  );
}