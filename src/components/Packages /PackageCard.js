import React from 'react';
import ReadMore from '../ReadMore';

const PackageCard = () => {
  return (
    <div className='package-card'>
      <span className='from'>from</span>
      <h1 className='package-price'>$40</h1>
      <span className='package-title'>basic package</span>
      <p className='package-description'>
        Includes 1 lesson per week, a drop in at any location is possible.
      </p>
      <div>
        <ReadMore />
      </div>
    </div>
  );
};

export default PackageCard;
